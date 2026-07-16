# Data Positioning Micromark Tool

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11502/badge)](https://www.bestpractices.dev/projects/11502)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-micromark)](https://www.npmjs.com/package/@dpuse/dpuse-tool-micromark)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse-tool-micromark&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse-tool-micromark)

A library that wraps the Micromark markdown parser and Speed Highlight code highlighter, improving browser memory efficiency by sharing single instances of these tools across all presenters and loading optional modules on demand.

## Features

- 🚀 **Fast Markdown Parsing**: with Micromark
- 💡 **Efficient Syntax Highlighting**: via Speed Highlight
- 🧠 **Memory-Optimised**: shared instance across all presenters
- 📦 **Modular Loading**: optional modules loaded on demand
- ☁️ **Cloud-Managed**: automatically updates new instances and notifies running instances of available updates
- 🧑‍💻 **Implemented in TypeScript**: fully coded in TypeScript

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-tool-micromark?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-tool-micromark/releases/latest)
[![CI](https://github.com/dpuse/dpuse-tool-micromark/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-micromark/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/dpuse-tool-micromark/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-micromark/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse-tool-micromark&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-micromark)

[Documentation](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-tool-micromark/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-micromark/issues)

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing. **Sourcing** uses a library of [Connectors](https://www.dpuse.app) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources. **Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This provides the DPUse Engine with the structural framework required to generate deterministic transactions, facts, or observations. **Publishing** employs a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) allow you to build Data Apps using your preferred tools.

## Introduction

...

<!-- OPENING_END -->

## Installation

There's no need to install this library manually. Once released, it is uploaded to the Data Positioning Cloud and instantly available in all newly launched browser app instances. Running instances are notified of the update.

### For Developers

If you wish to fork or create your own copy of the library:

```bash
git clone https://github.com/dpuse/dpuse-tool-micromark.git
cd dpuse-tool-micromark
npm install
```

## Dependency Licenses

<!-- USAGE_START -->

This connector is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar connector, though there is currently no process to accept third-party connectors into DPUse at this stage. Cloned or forked code is unsupported and isn't guaranteed to remain compatible with the DPUse Engine as it evolves.

```bash
git clone https://github.com/dpuse/dpuse-tool-micromark.git
cd dpuse-tool-micromark
npm install
```

_Requires [Node.js](https://nodejs.org/) 23.11 or later, [npm](https://www.npmjs.com/) 11 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

<!-- USAGE_END -->

<!-- DEPENDENCY_LICENSES_START -->

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use CC0-1.0 or MIT — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@speed-highlight/core](https://github.com/speed-highlight/core)|1.2.17|CC0-1.0|[LICENSE](licenses/downloads/@speed-highlight/core@1.2.17-LICENSE.txt)|
|[@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)|4.1.12|MIT|[LICENSE](licenses/downloads/@types/debug@4.1.12-LICENSE.txt)|
|[@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)|2.1.0|MIT|[LICENSE](licenses/downloads/@types/ms@2.1.0-LICENSE.txt)|
|[character-entities](https://github.com/wooorm/character-entities)|2.0.2|MIT|[LICENSE](licenses/downloads/character-entities@2.0.2-LICENSE.txt)|
|[debug](https://github.com/debug-js/debug)|4.4.3|MIT|[LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)|
|[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)|1.2.0|MIT|[LICENSE](licenses/downloads/decode-named-character-reference@1.2.0-LICENSE.txt)|
|[dequal](https://github.com/lukeed/dequal)|2.0.3|MIT|[LICENSE](licenses/downloads/dequal@2.0.3-LICENSE.txt)|
|[devlop](https://github.com/wooorm/devlop)|1.1.0|MIT|[LICENSE](licenses/downloads/devlop@1.1.0-LICENSE.txt)|
|[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)|2.0.3|MIT|[LICENSE](licenses/downloads/micromark-core-commonmark@2.0.3-LICENSE.txt)|
|[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)|2.1.1|MIT|[LICENSE](licenses/downloads/micromark-extension-gfm-table@2.1.1-LICENSE.txt)|
|[micromark-factory-destination](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-factory-destination@2.0.1-LICENSE.txt)|
|[micromark-factory-label](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-factory-label@2.0.1-LICENSE.txt)|
|[micromark-factory-space](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-factory-space@2.0.1-LICENSE.txt)|
|[micromark-factory-title](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-factory-title@2.0.1-LICENSE.txt)|
|[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-factory-whitespace@2.0.1-LICENSE.txt)|
|[micromark-util-character](https://github.com/micromark/micromark.git#main)|2.1.1|MIT|[LICENSE](licenses/downloads/micromark-util-character@2.1.1-LICENSE.txt)|
|[micromark-util-chunked](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-chunked@2.0.1-LICENSE.txt)|
|[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-classify-character@2.0.1-LICENSE.txt)|
|[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-combine-extensions@2.0.1-LICENSE.txt)|
|[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)|2.0.2|MIT|[LICENSE](licenses/downloads/micromark-util-decode-numeric-character-reference@2.0.2-LICENSE.txt)|
|[micromark-util-encode](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-encode@2.0.1-LICENSE.txt)|
|[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-html-tag-name@2.0.1-LICENSE.txt)|
|[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-normalize-identifier@2.0.1-LICENSE.txt)|
|[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-resolve-all@2.0.1-LICENSE.txt)|
|[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-sanitize-uri@2.0.1-LICENSE.txt)|
|[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)|2.1.0|MIT|[LICENSE](licenses/downloads/micromark-util-subtokenize@2.1.0-LICENSE.txt)|
|[micromark-util-symbol](https://github.com/micromark/micromark.git#main)|2.0.1|MIT|[LICENSE](licenses/downloads/micromark-util-symbol@2.0.1-LICENSE.txt)|
|[micromark-util-types](https://github.com/micromark/micromark.git#main)|2.0.2|MIT|[LICENSE](licenses/downloads/micromark-util-types@2.0.2-LICENSE.txt)|
|[micromark](https://github.com/micromark/micromark.git#main)|4.0.2|MIT|[LICENSE](licenses/downloads/micromark@4.0.2-LICENSE.txt)|
|[ms](https://github.com/vercel/ms)|2.1.3|MIT|[LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@speed-highlight/core](https://github.com/speed-highlight/core)** 1.2.17 — 1 month ago: 2026-06-13
- **[micromark-extension-gfm-table](https://github.com/micromark/micromark-extension-gfm-table)** 2.1.1 — 17 months ago: 2025-01-20 ⚠️ 
  - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — 36 months ago: 2023-06-29 ⚠️ 
    - **[dequal](https://github.com/lukeed/dequal)** 2.0.3 — 48 months ago: 2022-07-11 ⚠️ 
  - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
- **[micromark](https://github.com/micromark/micromark.git#main)** 4.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[@types/debug](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.1.12 — 32 months ago: 2023-11-09 ⚠️  → **latest**: 4.1.13 — 3 months ago: 2026-03-19 ❗
    - **[@types/ms](https://github.com/DefinitelyTyped/DefinitelyTyped)** 2.1.0 — 18 months ago: 2025-01-16 ⚠️ 
  - **[debug](https://github.com/debug-js/debug)** 4.4.3 — 10 months ago: 2025-09-13 ⚠️ 
    - **[ms](https://github.com/vercel/ms)** 2.1.3 — 67 months ago: 2020-12-08 ⚠️ 
  - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — 13 months ago: 2025-06-14 ⚠️  → **latest**: 1.3.0 — 5 months ago: 2026-01-19 ❗
    - **[character-entities](https://github.com/wooorm/character-entities)** 2.0.2 — 48 months ago: 2022-06-22 ⚠️ 
  - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — 36 months ago: 2023-06-29 ⚠️ 
  - **[micromark-core-commonmark](https://github.com/micromark/micromark.git#main)** 2.0.3 — 16 months ago: 2025-02-27 ⚠️ 
    - **[decode-named-character-reference](https://github.com/wooorm/decode-named-character-reference)** 1.2.0 — 13 months ago: 2025-06-14 ⚠️  → **latest**: 1.3.0 — 5 months ago: 2026-01-19 ❗
    - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — 36 months ago: 2023-06-29 ⚠️ 
    - **[micromark-factory-destination](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-factory-label](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — 36 months ago: 2023-06-29 ⚠️ 
      - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-factory-title](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-factory-whitespace](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-classify-character](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
      - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-util-html-tag-name](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — 16 months ago: 2025-02-27 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-factory-space](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-combine-extensions](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-util-decode-numeric-character-reference](https://github.com/micromark/micromark.git#main)** 2.0.2 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-normalize-identifier](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-resolve-all](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-util-sanitize-uri](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-character](https://github.com/micromark/micromark.git#main)** 2.1.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-encode](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-subtokenize](https://github.com/micromark/micromark.git#main)** 2.1.0 — 16 months ago: 2025-02-27 ⚠️ 
    - **[devlop](https://github.com/wooorm/devlop)** 1.1.0 — 36 months ago: 2023-06-29 ⚠️ 
    - **[micromark-util-chunked](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
    - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️ 
  - **[micromark-util-symbol](https://github.com/micromark/micromark.git#main)** 2.0.1 — 20 months ago: 2024-11-12 ⚠️ 
  - **[micromark-util-types](https://github.com/micromark/micromark.git#main)** 2.0.2 — 16 months ago: 2025-02-27 ⚠️

<!-- DEPENDENCY_TREE_END -->

<!-- BUNDLE_START -->

The Bundle Analysis Report is generated automatically on each release using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

|Chunk/Module/File|Composition|
|:------ |:-----------|
| dist/dpuse-tool-micromark.es.js | 73.1 kB · brotli 15.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-core-commonmark | `█████░░░░░░░░░░░░░░░` 27.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html-flow.js | `█░░░░░░░░░░░░░░░░░░░` 3.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-end.js | `█░░░░░░░░░░░░░░░░░░░` 3.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html-text.js | `█░░░░░░░░░░░░░░░░░░░` 2.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/list.js | `█░░░░░░░░░░░░░░░░░░░` 2.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-fenced.js | `░░░░░░░░░░░░░░░░░░░░` 2.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/attention.js | `░░░░░░░░░░░░░░░░░░░░` 2.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-text.js | `░░░░░░░░░░░░░░░░░░░░` 1.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/setext-underline.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/heading-atx.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/definition.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/autolink.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/content.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/character-reference.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/code-indented.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/block-quote.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-start-image.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/thematic-break.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/label-start-link.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/character-escape.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/hard-break-escape.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/blank-line.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/line-ending.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark | `███░░░░░░░░░░░░░░░░░` 16.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/compile.js | `█░░░░░░░░░░░░░░░░░░░` 7.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/create-tokenizer.js | `█░░░░░░░░░░░░░░░░░░░` 3.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/document.js | `░░░░░░░░░░░░░░░░░░░░` 2.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/text.js | `░░░░░░░░░░░░░░░░░░░░` 1.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/preprocess.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/content.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/initialize/flow.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/constructs.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/parse.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/postprocess.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `█░░░░░░░░░░░░░░░░░░░` 7.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;src | `█░░░░░░░░░░░░░░░░░░░` 3.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts | `░░░░░░░░░░░░░░░░░░░░` 2.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formula.ts | `░░░░░░░░░░░░░░░░░░░░` 1.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-subtokenize | `█░░░░░░░░░░░░░░░░░░░` 3.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js | `░░░░░░░░░░░░░░░░░░░░` 1.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/splice-buffer.js | `░░░░░░░░░░░░░░░░░░░░` 1.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-destination → index.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-sanitize-uri → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-label → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-title → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-combine-extensions → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-html-tag-name → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-chunked → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-decode-numeric-character-reference → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-whitespace → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;decode-named-character-reference → index.dom.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-resolve-all → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-encode → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-normalize-identifier → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-classify-character → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/dist-B-l9gIeO.js | 28.0 kB · brotli 7.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;@speed-highlight/core → dist/index.js | `████░░░░░░░░░░░░░░░░` 21.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 2.5% |
| dist/micromark-extension-gfm-table-u0XhUoHG.js | 9.7 kB · brotli 2.5 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-extension-gfm-table | `█░░░░░░░░░░░░░░░░░░░` 7.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/syntax.js | `█░░░░░░░░░░░░░░░░░░░` 4.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/html.js | `░░░░░░░░░░░░░░░░░░░░` 1.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/edit-map.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/infer.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| dist/github-dark-BQgApYrA.js → (unassigned) → [unassigned] | 1.7 kB · brotli 686 B · `░░░░░░░░░░░░░░░░░░░░` 1.5% |
| dist/github-light-CYQxR7sx.js → (unassigned) → [unassigned] | 1.7 kB · brotli 656 B · `░░░░░░░░░░░░░░░░░░░░` 1.5% |
| dist/micromark-factory-space-Cq-2i9SZ.js | 1.0 kB · brotli 451 B |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-util-character → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;micromark-factory-space → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |

<!-- BUNDLE_END -->

<!-- GOVERNANCE_START -->

## Security & Quality

### CodeQL

[CodeQL](https://github.com/dpuse/dpuse-tool-micromark/security/code-scanning) static analysis runs on every push to `main` and on a weekly schedule, scanning TypeScript, JavaScript, Rust, and GitHub Actions workflow files for security vulnerabilities and coding errors.

### SonarCloud

[SonarCloud](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-micromark) performs continuous code quality and security analysis on every push, detecting bugs, code smells, and security vulnerabilities in the TypeScript source.

### Vulnerability Scanning

Two complementary tools continuously monitor dependencies for known vulnerabilities:

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) runs on every push to `main` via the CI workflow, failing the build if any high or critical severity vulnerabilities are detected.
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) automatically raises pull requests to update vulnerable dependencies, drawing on the GitHub Advisory Database which combines NVD and npm-specific advisories.

### Supply Chain Security

[Socket.dev](https://socket.dev) monitors all dependencies for supply chain risk — detecting malicious packages, dependency confusion, typosquatting, and suspicious behaviour that may not yet have a CVE.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-micromark/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-micromark/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-micromark)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-micromark) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-micromark/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_END -->
