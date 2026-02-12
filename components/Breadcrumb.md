# Breadcrumb

A breadcrumb is a single item in a breadcrumb navigation trail, representing one
step in a hierarchical page structure. It renders as a semantic list item
containing a link, making it suitable for use inside a `<nav>` with an ordered or
unordered list. Breadcrumbs help users understand their location within a site and
navigate back to parent pages efficiently.

This headless component focuses on semantic HTML and ARIA attributes, leaving all
visual presentation to the consumer. It supports marking the current page with
`aria-current="page"` so screen readers can announce which breadcrumb represents
the active location.

## Implementation Notes

- Renders as `<li>` containing an `<a>` element for semantic breadcrumb structure
- Designed to be used inside a `<ul>` or `<ol>` within a `<nav aria-label="Breadcrumb">` container
- Uses Svelte 5 `Snippet` for children content (link text)
- Supports `aria-current="page"` via the `current` prop for the active page
- Passes through additional HTML attributes to the `<li>` element via `...restProps`

## Props

- `href`: string (required) — the URL this breadcrumb links to
- `current`: boolean (default: false) — whether this is the current/active page
- `children`: Snippet (required) — the breadcrumb link text content
- `...restProps`: any additional HTML attributes passed to the `<li>` element

## Usage

```svelte
<nav aria-label="Breadcrumb">
    <ol>
        <Breadcrumb href="/home">Home</Breadcrumb>
        <Breadcrumb href="/products">Products</Breadcrumb>
        <Breadcrumb href="/products/shoes" current>Shoes</Breadcrumb>
    </ol>
</nav>
```

## Keyboard Interactions

- Tab: Move focus to the breadcrumb link
- Enter: Activate the link (browser default)

## ARIA

- `aria-current="page"` — set on the `<a>` element when `current` is true, indicating the current page in the breadcrumb trail
- Implicit `link` role from the `<a>` element

## References

- WAI-ARIA Breadcrumb Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/breadcrumb/
- WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
