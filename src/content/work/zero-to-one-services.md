---
title: 'From empty repository to production'
summary: 'Three Spring Boot codebases bootstrapped from nothing, two of them taken to production, with multi-tenant isolation, auth and Kubernetes delivery.'
order: 3
tags: ['Spring Boot', 'Kubernetes', 'Migration', 'Leadership']
role: 'Founding engineer, then team lead'
highlight:
  value: '5 → 13'
  caption: 'engineers in the team as the platform went from first demo to GA'
---

## The problem
A large product still lived inside a monolith. It needed to move to independent services without stopping delivery, and without breaking customers.

## What I did
- Bootstrapped three Spring Boot codebases from empty repositories: two product services, both taken to production, and a shared platform library.
- For the first service: a phased migration plan, the middleware framework (search, auth, schema migrations), and about 44% of its first-year commits. It reached general availability in December 2022, and I drove its later Spring Boot 3 and Java 17 upgrade.
- Wrote the shared library: security, caching with distributed locks, async context propagation and a query pipeline.
- Led the middleware layer from first customer demo to GA and 14+ releases, while the team grew from 5 to 13.

## What I took from it
- Write the design document and the migration plan before the first commit.
- A shared library saves months, but only if it stays small and well tested.
