<script lang="ts">
    // Component: BreadcrumbListItem
    //
    // A single breadcrumb list item. Renders as <li> with optional aria-current.
    //
    // Props:
    //   current — whether this is the current page
    //   children — snippet for breadcrumb content (link or text)
    //
    // Usage:
    //   <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
    //   <BreadcrumbListItem current>About</BreadcrumbListItem>

    import type { Snippet } from "svelte";

    let {
        current = false,
        children,
        ...restProps
    }: {
        /** Whether this is the current page. */
        current?: boolean;
        /** Breadcrumb content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<li aria-current={current ? "page" : undefined} {...restProps}>
    {@render children()}
</li>
