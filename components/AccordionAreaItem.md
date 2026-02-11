# Accordion Area Item

An accordion area item is a single expandable section using native HTML details/summary elements, providing built-in keyboard accessibility and toggle behavior.
# AccordionAreaItem

## Implementation Notes

- A single accordion item using native `<details>` / `<summary>` HTML elements
- The `open` prop is `$bindable()`, allowing two-way binding for expand/collapse state
- Content is rendered via Svelte 5 `Snippet` children
- Passes through all additional HTML attributes via `...restProps`
- Designed to be used inside an AccordionArea parent container

## Props

- `summary`: string (required) -- text for the summary/header line
- `open`: boolean (default: false, bindable) -- whether the item is expanded
- `children`: Snippet (required) -- detail content rendered when expanded
- `...restProps`: Any additional HTML attributes passed to the `<details>` element

## Keyboard Interactions

- Tab: Focus the summary element
- Enter / Space: Toggle open/close (browser default for `<details>`)

## ARIA

- Native `<details>` / `<summary>` provide implicit disclosure widget semantics
- Browser automatically manages expanded/collapsed state announcement
