# Contributing

## Trunk-based development

This repository follows the guidelines of [Trunk based development](https://trunkbaseddevelopment.com/), using the 'scalable' approach of branching off and merging (actually, squashing) into `trunk` using pull requests. Remember that this part is automatically handled by `kodiak` (bot).

## Conventional Commits

**All** commits have to adhere to the [Conventional Commit](https://www.conventionalcommits.org/) specification, using the [Conventional Changelog](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) types (f.e. `feat: add cat gifs`). Branches should also follow this schema, using a slash (`/`) to separate the type and branch purpose (f.e. `feat/add-cat-gifs`). PR titles must also match the conventional commit message that will be used when the PR is squashed into the default branch. PR bodies should contain a description of the changes.

## Issues and Discussions

Issues are exclusively for feature requests and bug fixes; support and vague ideas should be posted in the dedicated GitHub discussions tab.

## Dependencies

Make sure to keep dependencies up to date. Use tools such as [VSCode Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) to bump packages which "satisfy" a later version and do major version updates (make sure to check that everything works before committing). Some dependencies are fixed/"pinned" on a certain (outdated) version (range), due to incompatibilities or bugs. It is worth checking every once in a while if these issues still arise when upgrading.