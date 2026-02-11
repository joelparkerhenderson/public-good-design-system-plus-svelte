# Breadcrumb

A breadcrumb is a single item within a breadcrumb trail navigation. It
represents one step in the hierarchical path from the root page to the current
page. Each breadcrumb is a link that allows the user to navigate back to that
level of the hierarchy.

When the breadcrumb represents the current page, it is marked with
`aria-current="page"` so screen readers can announce which item in the trail
corresponds to the active page.

This component renders as a list item (`<li>`) containing an anchor (`<a>`),
designed to be used within a parent breadcrumbs navigation container.
