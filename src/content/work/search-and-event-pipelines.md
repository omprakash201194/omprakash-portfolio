---
title: 'Search and event pipelines at scale'
summary: 'A search and aggregation layer plus Kafka-driven pipelines over large multi-tenant datasets, with strict per-customer scoping and a performance program.'
order: 2
tags: ['OpenSearch', 'Kafka', 'Redis', 'Performance']
role: 'Designer and lead'
highlight:
  value: '10 s → 351 ms'
  caption: 'on a cached listing, in test-environment benchmarks'
---

## The problem
Customers need to slice and group very large datasets quickly, and every answer must be limited to what that customer is allowed to see.

## What I did
- Designed a search layer on OpenSearch with pluggable aggregations, a small query language, multi-level group-by, and per-customer and tag-based data scoping.
- Built Kafka-driven indexing and reporting pipelines that feed downstream analytics jobs.
- Ran a performance program: parallel fetching for slow widgets, Redis caching for heavy listings, streaming exports, and batching so several group-bys are answered in one search call.
- Closed security-audit findings in this area, including query injection and cross-customer exposure.

## What I took from it
- Multi-tenant isolation belongs in the query layer by design, not in each caller.
- Measure first. Most slow screens had one dominant cause.

*Details are kept general on purpose.*
