# Govcon Sandbox

Based on [uswds-sandbox](https://github.com/uswds/uswds-sandbox). An eleventy site for rapid web prototyping and testing with USWDS.

## Requirements

- Node v18 (LTS)

## Running code locally

1. Clone repo.
1. Run `npm install`.
1. Run `npm run init` to get necessary files.
1. Run `npm start` for local environment.
1. Visit site locally at http://localhost:8080.

USWDS assets will be in `assets/fonts` and `assets/img`.

SASS files will be in the `/_styles` directory. Running `npm start` will also watch these files and recompile when there are changes.

## Templates

- `default`: A blank-slate sandbox page

### Recommended tools

- [VS Code Better Comments extension](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [VS Code Prettier extension: linting & formatting [marketplace.visualstudio.com]](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [axe devtools: for a11y testing [deque.com]](https://www.deque.com/axe/browser-extensions/)
