# TableOfContentsItem

A single item within a TableOfContents navigation. Renders a semantic `<li>` containing an `<a>` link, providing proper list item and link semantics for screen readers and keyboard navigation. The `current` prop marks the currently active/visible section using `aria-current="location"`, which assistive technology can announce to the user.

This component is designed to be placed inside a `<ul>` or `<ol>` within a TableOfContents `<nav>`. The consumer controls which item is current, typically based on scroll position or route.

## Implementation Notes

- Renders as `<li>` containing an `<a>` element for proper navigation semantics
- Uses `aria-current="location"` when `current` is true to indicate the active section
- The `href` prop is passed directly to the `<a>` element (typically an anchor like `#section-id`)
- Spreads `restProps` onto the `<li>` for consumer customization
- No hardcoded strings; all content comes through props and children

## Props

- `href`: string (required) -- link target (e.g. `"#section-1"`)
- `current`: boolean (default: `false`) -- whether this is the currently active section
- `children`: Snippet (required) -- link text content
- `...restProps`: unknown -- additional attributes spread onto the `<li>`

## Usage

```svelte
<TableOfContents label="Table of contents">
  <ul>
    <TableOfContentsItem href="#intro" current>Introduction</TableOfContentsItem>
    <TableOfContentsItem href="#methods">Methods</TableOfContentsItem>
    <TableOfContentsItem href="#results">Results</TableOfContentsItem>
    <TableOfContentsItem href="#conclusion">Conclusion</TableOfContentsItem>
  </ul>
</TableOfContents>
```

## Keyboard Interactions

- Tab: Focus the link (browser default)
- Enter: Follow the link (browser default)

## ARIA

- Semantic `<li>` provides list item semantics within the parent list
- Semantic `<a>` provides link role and keyboard activation
- `aria-current="location"` -- indicates the currently active section to assistive technology

## References

- WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
- WAI-ARIA link role: https://www.w3.org/TR/wai-aria-1.2/#link
