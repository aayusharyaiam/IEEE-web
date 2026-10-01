---
name: graphify-knowledge-graph
description: Build a scoped, auditable knowledge map of a codebase or document corpus when structure, dependencies, or cross-file relationships are difficult to understand. Use only when graph analysis is requested or clearly useful.
---

# Knowledge graph workflow

This is a local workflow inspired by Graphify's pipeline. It does not require installing Graphify, a Python package, an MCP server, or a hosted service. Prefer the repository's available search and read tools for ordinary tasks.

## When to use it

Use for architecture discovery, large unfamiliar repositories, dependency questions, cross-file concept mapping, or a requested `/graphify`-style analysis. Do not run it automatically for every small edit.

## Safe pipeline

1. **Scope**: choose explicit roots and file types; exclude secrets, credentials, build output, dependencies, caches, and generated files.
2. **Detect**: inventory files and note the scan root, supported formats, and exclusions.
3. **Extract**: record nodes and relationships with source paths and locations. Prefer direct evidence from imports, exports, route declarations, calls, headings, and references.
4. **Build**: normalize IDs relative to the repository root and create a graph without mutating source files.
5. **Analyze**: report high-connectivity nodes, import cycles, communities, surprising connections, and useful follow-up questions.
6. **Validate**: label every edge `EXTRACTED`, `INFERRED`, or `AMBIGUOUS`; never present an inference as a fact.
7. **Export** only when requested, and write outputs to an explicitly named ignored directory such as `graphify-out/`.

## Evidence schema

Use a stable shape when producing graph data:

```json
{
  "nodes": [{"id": "stable-id", "label": "name", "source_file": "relative/path", "source_location": "L12"}],
  "edges": [{"source": "id-a", "target": "id-b", "relation": "imports", "confidence": "EXTRACTED"}]
}
```

Keep `root` explicit so a single-file analysis does not accidentally anchor paths to a machine-specific directory. Validate paths before reading and do not follow untrusted URLs or file redirects.

## Reporting rules

- Separate extracted facts from inferred relationships and unknowns.
- Include scan scope, exclusions, limitations, and the exact commands/tools used.
- Prefer a concise report with actionable next questions over a giant dump of nodes.
- Never commit graph outputs, caches, raw external documents, API responses, or private data unless the user explicitly asks.
- If code changes are made while using this workflow, run the repository's checks and update any existing graph index only when the project already uses one.

Source studied: https://github.com/Graphify-Labs/graphify (pipeline, evidence labels, explicit-root guidance, validation, security, and testing principles). The repository's own instructions take precedence when working inside Graphify itself.
