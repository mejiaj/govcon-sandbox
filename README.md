# Govcon Sandbox

Based on [uswds-sandbox](https://github.com/uswds/uswds-sandbox). An eleventy site for rapid web prototyping and testing with the U.S. Web Design System (USWDS).

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

## Where things live

- `_uswds-theme.scss`
- `_project-styles.scss`

## Exercises

> **Important**
> As you add and modify components you should _always_ be testing for accessibility.

Exercises below are to help users understand the different ways you can use the U.S. Web Design System.

Exercises are in sequential order. If you get stuck you can move to the next branch.

Some exercises use liquid template logic for convenience. This allows you to focus on USWDS as much as possible.

**Example logic**

> **Note**
> You won't need to modify these logic statements.

The logic below **only** adds a class to the first item in the loop. This is where we'll add a special class to visually differentiate this callout.

```liquid
<div
  class="callout {% if forloop.first %} callout--first {% endif %}">
  …rest of code.
</div>
```

### Core components

**Branch:** `01-core-components`
**URL:** TK

USA Banner & Identifier are _core_ components. These are the most recognizable and standardized elements of a government site.

#### Exercise

> **Note**
> We'll be using one of the selected system color tokens as our primary brand color moving forward.

1. Review variants of [USA Banner](https://designsystem.digital.gov/components/banner/) & [Identifier](https://designsystem.digital.gov/components/identifier/).
1. Find component theme settings for each.
1. Use [system color tokens](https://designsystem.digital.gov/colors/system) to set unique background and link colors in `_uswds-theme.scss` file.
1. **Accessibility:** Make sure text and links meet AA contrast requirements. use browser developer tools or the deque axe extension.

### Prototyping

**Branch:** `02-prototyping`
**URL:** TK

Prototype a page using USWDS. We're going to be using: USWDS Components, Theme settings, Tokens, Grid layout, and Utility classes.

#### Exercise

1. Find News section in `02-prototyping/index.html`.
1. Find the div with the ID `example-card-flag`.
1. Use the code example for [Flag layout card](https://designsystem.digital.gov/components/card/#flag-layout-card) to convert the news section markup.
1. Apply utility classes to remove list styles from unordered list labelled `#example-list`.
1. Apply the [USA Tag markup](https://designsystem.digital.gov/components/tag/#component-code) to the list items [`example-tags`] inside example list.
1. Use the [card component example](https://designsystem.digital.gov/components/tag/#component-code) to apply default card markup to the callout section list labelled `card-default-example`.
1. Add a utility class to change the background color (_and text color if needed_).
1. Use the collection component [code example](https://designsystem.digital.gov/components/collection/#component-code) to section labelled `example-collection-headers`.
1. Apply collection calendar variant [code example](https://designsystem.digital.gov/components/collection/#component-code) to section labelled `example-collection-headers`.
1. Finally apply layout classes. Start at the top section labelled `example-grid-row` and apply the grid row classes. Then apply layout grid classes to the `<main>` and `<aside>` elements to create a two column grid.

### Theming & customization

TK

### _Beyond_

TK

## Resources

- **USWDS Docs** [designsystem.digital.gov]
  - [Theme settings page](https://designsystem.digital.gov/documentation/settings)
  - [Components](https://designsystem.digital.gov/components)
  - **Color tokens**
    - [Overview](https://designsystem.digital.gov/colors); _we'll look at color wheels for theming._
    - [Theme tokens](https://designsystem.digital.gov/colors/theme)
    - [State tokens](https://designsystem.digital.gov/colors/state)
    - [System tokens](https://designsystem.digital.gov/colors/system)

## Recommended tools

- [VS Code Better Comments extension](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments); _Improved code comment styles._
- [VS Code Prettier extension: linting & formatting [marketplace.visualstudio.com]](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode); _For consistent code style & formatting._
- [axe devtools [deque.com]](https://www.deque.com/axe/browser-extensions/); _for a11y testing._
