---
layout: default
title:
bodyClass: core
permalink: /01/
---

<div class="grid-container">
  <section class="usa-section">
    <h1>Core components</h1>

    <h2>USA Banner & Identifier are <em>core</em> components</h2>
    <div class="usa-intro">
      These are the most recognizable and standardized elements of a government site.
    </div>

    <h3 class="margin-top-8">Exercise</h3>
    <ol class="usa-list font-sans-lg text-light">
      <li>
        <strong>Theme settings:</strong> find theme settings for Banner & Identifier.
      </li>
      <li>
        <strong>Color Tokens:</strong> use system color tokens to set unique background & link colors in <code><small>[_uswds-theme.scss]</small></code>.
        <p class="text-accent-cool-darker">
          We'll use this color(s) as our primary brand color moving forward.
        </p>
      </li>
      <li>
        <strong>Accessibility:</strong> Ensure links meet AA contrast requirements. Use browser dev tools or axe extension.

        <img src="{{ '/assets/project/img/docs/01-a11y.jpg' |url }}" alt="USA identifier with AXE devtools open underneath showing zero accessibility issues.">
      </li>
    </ol>

    <h3>References</h3>
    <ul class="usa-list">
      <li>
        Design system docs [designsystem.digital.gov]
        <ul>
          <li>
            <a
              class="usa-link usa-link--external"
              href="https://designsystem.digital.gov/components/banner/">
              Banner
            </a>
          </li>
          <li>
            <a
              class="usa-link usa-link--external"
              href="https://designsystem.digital.gov/components/identifier/">
              Identifier
            </a>
          </li>
          <li>
            <a
              class="usa-link usa-link--external"
              href="https://designsystem.digital.gov/design-tokens/color/system-tokens/">
              System color tokens
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          class="usa-link usa-link--external"
          href="https://www.deque.com/axe/browser-extensions/">
          axe devtools [deque.com]
        </a>
      </li>
    </ul>
  </section>
</div>
