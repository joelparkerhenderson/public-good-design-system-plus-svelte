# AccordionAreaItem

An accordion area item is a single expandable section using native HTML `<details>` / `<summary>` elements, providing built-in keyboard accessibility and toggle behavior. It is designed to be used inside an AccordionArea parent container.

The component leverages the browser's native disclosure widget to deliver accessible expand/collapse behavior without any custom JavaScript. The `open` prop is two-way bindable, allowing parent components to programmatically control and observe the expanded state.

## Implementation Notes

- Uses native `<details>` / `<summary>` HTML elements for built-in disclosure behavior
- The `open` prop is `$bindable()`, enabling two-way binding for expand/collapse state
- Content is rendered via Svelte 5 `Snippet` children
- Passes through all additional HTML attributes via `...restProps`
- Designed to be used inside an AccordionArea parent container

## Props

- `summary`: string (required) -- text for the summary/header line
- `open`: boolean (default: false, bindable) -- whether the item is expanded
- `children`: Snippet (required) -- detail content rendered when expanded
- `...restProps`: Any additional HTML attributes passed to the `<details>` element

## Usage

```svelte
<AccordionAreaItem summary="Question">Answer</AccordionAreaItem>
```

## Keyboard Interactions

- Tab: Focus the summary element
- Enter / Space: Toggle open/close (browser default for `<details>`)

## ARIA

- Native `<details>` / `<summary>` provide implicit disclosure widget semantics
- Browser automatically manages expanded/collapsed state announcement

## References

- HTML details element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
