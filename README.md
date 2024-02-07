# Govcon Sandbox

Based on [uswds-sandbox [GitHub]](https://github.com/uswds/uswds-sandbox). An eleventy site for rapid web prototyping and testing with the U.S. Web Design System (USWDS).

The [USWDS Tutorial [GitHub]](https://github.com/uswds/uswds-tutorial) is a fantastic resource for learning how to set-up and get started.

## Requirements

- Node 20 (LTS)

## Running locally

1. Clone the repo.
1. Run `npm install` to install dependencies.
1. Run `npm run init` to get necessary files.
1. Run `npm start` for local environment.
1. Visit site locally at `http://localhost:8080`.

Running `npm start` will also watch for changes and recompile automatically.

## Where things live

Everything lives under the `src` directory in root.

- `/assets`: Mix of static assets.
  - `/fonts, img, js`: USWDS assets, do not modify.
  - `/project` Your custom assets here.
    - `/img/hero`: Converted WebP hero images from unsplash.
    - `/img/hero/original`: Original JPEG files, use WEBP instead.
- `/_styles`: SASS styles.
  - `_uswds-theme.scss`: Override USWDS theme settings here.
  - `_project-styles.scss`: Custom project styles.
- `/_includes/`: Component includes (like hero).
- `/_layouts/`: Layout templates.

## Exercises

> [!IMPORTANT]
> As you add and modify components you should _always_ be testing for accessibility.

Exercises below are to help users understand the different ways you can use the U.S. Web Design System. They are in sequential order. If you get stuck you can move to the next branch.

Some exercises use liquid template logic for convenience. This allows you to focus on USWDS as much as possible.

**Example logic**

> [!NOTE]
> You won't need to modify these logic statements.

The logic below **only** adds a class to the first item in the loop. This is where we'll add a special class to visually differentiate this callout.

```liquid
<div
  class="callout {% if forloop.first %} callout--first {% endif %}">
  …rest of code.
</div>
```

## 01 - Core components

**Branch:** `01-core-components`

**URL:** http://localhost:8080/01/

USA Banner & Identifier are _core_ components. These are the most recognizable and standardized elements of a government site.

### Exercise

> [!NOTE]
> We'll be using one of the selected system color tokens as our primary brand color moving forward.

#### Core Components: USA Banner & Identifier

1. Review variants of USA [Banner](https://designsystem.digital.gov/components/banner/) & [Identifier](https://designsystem.digital.gov/components/identifier/).
1. Find component theme settings for each.
1. Go to theme settings file `_uswds-theme.scss`.
1. Use [system color tokens](https://designsystem.digital.gov/colors/system) to set unique background and link colors in settings file.
1. **Accessibility:** Make sure text and links meet AA contrast requirements. _Use browser developer tools or the Deque axe extension._

## 02 - Prototyping

**Branch:** `02-prototyping`

**URL:** http://localhost:8080/02/

Prototype a page using USWDS. We're going to be using: USWDS Components, theme settings, tokens, grid layout, and utility classes.

### Exercise

#### Apply & Customize layout

1. Open page template `02-prototyping/index.html`.
1. Find div with the ID `example-grid-row`.
    ```html
    <!-- 02-prototyping/index.html -->
    <div id="example-grid-row" class="">
    ```
1. We're going to apply grid row classes. Use [grid docs](https://designsystem.digital.gov/utilities/layout-grid/) for reference. Apply the grid row classes `grid-row` and `grid-gap`.
1. Now we'll add grid column classes to the `<main>` and `<aside>` elements to create a two column grid.
    ```html
    <!-- 02-prototyping/index.html -->
    <main id="main-content" class="">

    <!-- Further below. -->
    <aside id="aside-content" class="">
    ```
1. Go to theme settings file [`_uswds-theme.scss`].
1. Use [utility settings](https://designsystem.digital.gov/utilities/layout-grid/#utilities-settings) to enable the `tablet-lg` breakpoint.
1. Go back to the template `02-prototyping/index.html` and add responsive variants to your layout.
1. Use [responsive variants](https://designsystem.digital.gov/utilities/layout-grid/#responsive-variants-2) to define an 8-col content section and a 4-col wide sidebar with your newly enabled breakpoint.


#### Implement USA Cards

**Card default**
1. Open the `usa-card.html` template.
1. Use the [card component example](https://designsystem.digital.gov/components/tag/#component-code) to apply default card markup to the callout section list labelled `card-default-example`.
    ```html
    <!-- usa-card.html -->
    <ul id="card-default-example">
    ```
1. Add a utility class to change the background color (_and text color if needed_).

**Card flag variant**

1. Open `usa-card--flag.html` template.
1. Use the code example for [Flag layout card](https://designsystem.digital.gov/components/card/#flag-layout-card) to the news section markup.

#### Nesting components

1. In `usa-card--flag.html` line 19, there's a partial for usa-tag.
1. Open the `usa-tag.html` template.
1. Add the list reset styles to `example-tag-list`.
    ```html
    <!-- usa-tag.html -->
    <ul id="example-tag-list" class="">
    ```
1. Find the list labeled `example-tags`.
    ```html
    <!-- usa-tag.html -->
    <li class="example-tags">{{ tag }}</li>
    ```
1. Apply [USA Tag markup](https://designsystem.digital.gov/components/tag/#component-code) to the list item.

#### Implement USA Collection

1. At the bottom of `02-prototyping/index.html` you can see two collection variants. Let's fill those in next.
    ```html
    <!-- 02-prototyping/index.html -->
    {% include "components/usa-collection--headings-only.html" %}

    Further down…
    {% include "components/usa-collection--calendar.html" %}
    ```
1. Start by going to `usa-collection--headings-only.html`.
1. Use the headings variant of collection component [code example](https://designsystem.digital.gov/components/collection/#component-code) add the right markup/classes.
    ```html
    <!-- usa-collection--headings-only.html -->
    <ul id="example-collection-headers">
    ```
1. Once that's looking right, head over to `usa-collection--calendar.html` to add the calendar variant. Use the [code example](https://designsystem.digital.gov/components/collection/#component-code).
    ```html
    <!-- usa-collection--calendar.html -->
    <ul id="example-collection-events">
    ```

## 03 - Theming & customization

**Branch:** `03-theming`

**URL:** http://localhost:8080/03/

Now that we have structure and basic theming setup. Let's start customizing and applying our "brand" colors.

### Exercise

#### Branding Banner & Identifier

1. Go to theme settings stylesheet [`_uswds-theme.scss`]. Use color from either Banner or Identifier to define primary theme colors. _Learn more about [theme colors](https://designsystem.digital.gov/colors/theme)_
1. Update Banner & Identifier theme settings with new primary token.
1. Set identifier secondary links to primary lightest color.

#### Global color settings

1. Find the theme setting for [focus color](https://designsystem.digital.gov/documentation/settings/#general-settings).
1. Change the setting to use the primary theme color.
1. Add accent theme color settings to match your new primary colors. _Hint: Use [USWDS color wheel](https://designsystem.digital.gov/design-tokens/color/overview/#uswds-color-wheels) to help_.
1. Add base theme color settings to match your new primary color.

#### Customizing Hero

1. Find and update hero image theme setting in `uswds-theme.scss`. Use sample WEBP images from `assets/project/img/hero` directory.
1. Cleanup first callout card. Fix any contrast issues.

## 04 - _Beyond_

**Branch:** `04-beyond`

**URL:** http://localhost:8080/04/

Here we're going to refine our design and customize components.

We're going to look at: A custom hero and a small custom nav.

### Exercise

#### Extend Hero

Lets create a completely custom hero using the base `usa-hero` styles provided by USWDS.

1. Open hero partial at `./src/_includes/hero.html`.
1. First, modify the `usa-hero` class to have a custom prefix to signify it's our custom component. Let's use `dgc-hero`.
    ```html
    <!-- hero.html -->
    <section class="usa-hero" aria-label="Introduction">
    ```
1. Next, wrap the contents of  `grid-container` with a new, `grid-row` div.
    ```html
    <!-- hero.html -->
    <div class="grid-container">
      <!-- Wrap everything inside of `grid-container` with a new div. -->
      <div class="usa-hero__callout">
    ```
1. Add a responsive utility classes to update the layout of our callout. Replace `usa-hero__callout` with `margin-4 tablet-lg:grid-col` utility classes.
    ```html
    <!-- hero.html -->
    <div class="usa-hero__callout">
    ```
1. Since we’re developing with accessibility in mind, you’ll find the original heading color doesn’t have proper color contrast to the white background. Add the class `text-primary-darker` to our `h1` to darken the text to our primary darker token.
1. Add an image next to our heading text. After the next closing div, create a new div. Use the same responsive grid column class to make ensure the layout is mobile friendly.
1. Add the following image tag in the new div:
    ```html
    <img src="../assets/project/img/hero/svg/undraw_online_connection_6778.svg" alt="Illustration of people connecting via web content">
    ```
1. So far we’ve created and styled this component using markup. Now we need to update the CSS. Go to `./src/_styles/components/_dgc-hero.scss`.
1. Center align the text using `text-align: center` in the custom hero class, `dgc-hero`.
1. Next, try the `at-media` mixin and with the `"tablet-lg"` breakpoint we’ve been using so far and set the `text-align` to `end` .**Hint:** `@include at-media("breakpoint-name") {}`.
1. Target the `h1` element and use our [font size and family mixin](https://designsystem.digital.gov/utilities/font-size-and-family/) to change the font family to `sans` and increase the size.
1. Target the nested `span` within the `h1` element and use our [color mixin](https://designsystem.digital.gov/utilities/color/) to make it visible again! Try using your primary color token.

#### Extending button

Let's say we want a button to **really** stand out in some rare cases. For example, we want to highlight a single action on the page like a hero call to action.

Button doesn't offer a [setting](https://designsystem.digital.gov/components/button/#using-the-button-component-2) to change a button background, so we'll have to layer our own variant.

We'll create a custom button with a gradient background instead of a solid color. We also want to use color tokens to ensure the UI stays cohesive. Plus, as we mentioned before; color grading helps us easily manage contrast.

1. Go to hero component `./src/_includes/hero.html`.
1. Add the following classes: `dgc-button dgc-button--callout`.
1. Open styles directory `./src/_styles/components/`.
1. Create a new partial for our custom button called `_dgc-button.scss`.
1. Forward this new partial in `_project-styles.scss` so styles get included.
    ```diff
      // _project-styles.scss
      @forward "global/sticky-footer";

      @forward "components/dgc-nav";
      @forward "components/dgc-hero";
      + @forward "components/dgc-button";
    ```
1. Add `uswds-core`  so we can access core functionality, like colors and other tokens.
    ```scss
      // _dgc-button.scss
      @use "uswds-core" as *;
    ```
1. Using any two matching color tokens; add a gradient background to `dgc-button`.
    ```scss
      // _dgc-button.scss
      .dgc-button--callout {
        background-color: color("mint-50v");
        background-image: linear-gradient(
          45deg,
          #{color("mint-cool-60")} 0%,
          #{color("mint-50v")} 45%,
          #{color("green-warm-10v")} 100%
        );
      }
    ```
1. Add a change for interactions (hover, focus, active).


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
