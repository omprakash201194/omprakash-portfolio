---
title: 'Backends for AI agents'
summary: 'Task, execution and planning APIs behind production AI agents, and a feedback loop that turns observed agent failures into new tools.'
order: 1
tags: ['Java', 'Spring Boot', 'MCP', 'REST']
role: 'Lead engineer'
highlight:
  value: '3 new tools'
  caption: 'defined from a post-launch review of where the agent answered poorly'
---

## The problem
An AI agent is only as good as the tools and APIs behind it. After the first launch, a review of real questions found about twenty the agent answered poorly. The causes were not the model. They were missing tools and API limits the agent kept running into.

## What I did
- Built the task, execution and remediation-planning APIs the agents call, including ready-made planning templates for common patching cycles.
- Turned the failure review into work: with the team I defined three new MCP tools, and proposed wrapper APIs for a query-size limit the agent kept hitting.
- Added validation-scan APIs for the launch.

## What I took from it
- Treat agent failures like production incidents: collect them, group them, and fix the tooling, not just the prompt.
- Tool design matters. A tool that returns what the agent needs in one call beats one that needs five.

*Details are kept general on purpose.*
