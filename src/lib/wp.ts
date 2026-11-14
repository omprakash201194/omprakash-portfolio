import { SITE } from '../consts';

export interface Post { title: string; excerpt: string; date: string; link: string }

const strip = (html: string) =>
	html.replace(/<[^>]*>/g, '').replace(/&#8217;/g, '’').replace(/&#8211;/g, '–').replace(/&hellip;/g, '…').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

/** Latest posts from the WordPress blog, read at build time. Never throws: a missing or slow blog just hides the section. */
export async function latestPosts(n = 3): Promise<Post[]> {
	try {
		const res = await fetch(`${SITE.wpApi}?per_page=${n}&_fields=title,excerpt,date,link`, {
			signal: AbortSignal.timeout(8000),
		});
		if (!res.ok) return [];
		const data = (await res.json()) as any[];
		return data.map((p) => ({
			title: strip(p.title?.rendered ?? ''),
			excerpt: strip(p.excerpt?.rendered ?? '').slice(0, 140),
			date: p.date,
			link: p.link,
		}));
	} catch {
		return [];
	}
}
