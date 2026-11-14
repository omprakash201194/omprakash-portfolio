#!/bin/bash
# Add the omprakash.gautamlabs.io site block to Caddy. Run with sudo on the VPS. Safe to re-run.
# Needs the DNS A record for omprakash.gautamlabs.io (DNS only / grey cloud) to point at this server first,
# or Caddy cannot get its certificate (HTTP-01).
set -euo pipefail
CF=/srv/caddy/Caddyfile
if grep -q "^omprakash.gautamlabs.io" "$CF"; then echo "block already present"; exit 0; fi
cp "$CF" "$CF.bak.$(date +%Y%m%d-%H%M%S)-portfolio"
cat >> "$CF" <<'BLOCK'

# Personal portfolio (static Astro). omprakash-portfolio-site nginx container; deployed by GitHub Actions
# from omprakash201194/omprakash-portfolio. Public.
omprakash.gautamlabs.io {
	encode gzip zstd
	header {
		X-Content-Type-Options nosniff
		X-Frame-Options SAMEORIGIN
		Referrer-Policy strict-origin-when-cross-origin
		Permissions-Policy "camera=(), microphone=(), geolocation=()"
		Strict-Transport-Security "max-age=31536000"
	}
	reverse_proxy omprakash-portfolio-site:80
}
BLOCK
if docker exec caddy caddy validate --config /etc/caddy/Caddyfile; then
	docker exec caddy caddy reload --config /etc/caddy/Caddyfile && echo "Caddy reloaded"
else
	echo "validation FAILED, restoring backup"; cat "$(ls -t $CF.bak.*-portfolio | head -1)" > "$CF"; exit 1
fi
