<script lang="ts">
    // BreadcrumbList component
    //
    // A navigation landmark with an ordered list for breadcrumb trail links.
    // Renders as <nav> with <ol> inside, providing the semantic container for
    // BreadcrumbListItem components.
    //
    // Props:
    //   label — accessible name for the navigation landmark (e.g. "Breadcrumb")
    //   children — snippet for BreadcrumbListItem components
    //
    // Usage:
    //   <BreadcrumbList label="Breadcrumb">
    //     <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
    //     <BreadcrumbListItem><a href="/products">Products</a></BreadcrumbListItem>
    //     <BreadcrumbListItem current>Widget</BreadcrumbListItem>
    //   </BreadcrumbList>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the breadcrumb navigation landmark. */
        label: string;
        /** BreadcrumbListItem components. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- BreadcrumbList component: navigation landmark with ordered breadcrumb trail -->
<nav aria-label={label} {...restProps}>
    <ol>
        {@render children()}
    </ol>
</nav>
