# BreadcrumbList

A breadcrumb list is a navigational component that displays a trail of links
representing the user's current location within a site's hierarchy. Breadcrumbs
help users understand where they are in the site structure and allow quick
navigation back to any ancestor page. They are especially useful in sites with
deep hierarchies such as e-commerce catalogs, documentation sites, and content
management systems.

BreadcrumbList is a compound component. It provides the parent container
structure (a `<nav>` with an `<ol>` inside), while individual breadcrumb entries
are rendered using the BreadcrumbListItem component. The parent provides the
navigation landmark and the ordered list semantics, and each BreadcrumbListItem
renders as an `<li>` with optional `aria-current="page"` for the current page.

Note: BreadcrumbList itself does not have a `.svelte` file; it relies on
standard HTML elements (`<nav>` and `<ol>`) composed by the consumer, with
BreadcrumbListItem components as the children.

## Implementation Notes

- The consumer provides a `<nav aria-label="...">` containing an `<ol>` of BreadcrumbListItem components
- BreadcrumbListItem renders as `<li>` with optional `aria-current="page"` via the `current` prop
- Separator characters (e.g. "/" or ">") between items should be added by the consumer via CSS or text
- The final item typically uses the `current` prop and contains plain text instead of a link

## Props

BreadcrumbList is assembled from HTML elements; see BreadcrumbListItem for its props:

- `current`: boolean (default: false) -- whether this item is the current page
- `children`: Snippet (required) -- breadcrumb content, typically a link or text

## Usage

```svelte
<script>
  import BreadcrumbListItem from "./BreadcrumbListItem.svelte";
</script>

<nav aria-label="Breadcrumb">
  <ol>
    <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
    <BreadcrumbListItem><a href="/products">Products</a></BreadcrumbListItem>
    <BreadcrumbListItem current>Widget</BreadcrumbListItem>
  </ol>
</nav>
```

With separator text provided by the consumer:

```svelte
<nav aria-label="Breadcrumb">
  <ol>
    <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
    <li aria-hidden="true">/</li>
    <BreadcrumbListItem><a href="/docs">Documentation</a></BreadcrumbListItem>
    <li aria-hidden="true">/</li>
    <BreadcrumbListItem current>Getting Started</BreadcrumbListItem>
  </ol>
</nav>
```

## Keyboard Interactions

- Tab: Focus moves between links in the breadcrumb trail
- Enter: Activates the focused breadcrumb link

## ARIA

- `<nav>` with `aria-label` creates a navigation landmark for the breadcrumb trail
- `<ol>` conveys the ordered hierarchical relationship of the trail
- `aria-current="page"` on the BreadcrumbListItem for the current page
- Implicit `listitem` role from semantic `<li>` elements

## References

- WAI-ARIA Breadcrumb Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/breadcrumb/
