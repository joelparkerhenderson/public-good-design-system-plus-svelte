<script lang="ts">
    // BreadcrumbList component
    //
    // A navigation landmark that displays a trail of links representing the user's
    // current location within a site hierarchy. Renders a <nav> element containing
    // an <ol> for the ordered breadcrumb trail. Used in sites with deep hierarchies
    // such as e-commerce catalogs, documentation, and content management systems.
    //
    // Props:
    //   label — string, required. Accessible name for the navigation landmark (e.g. "Breadcrumb").
    //   children — Snippet, required. BreadcrumbListItem components to render inside the <ol>.
    //   ...restProps — additional HTML attributes spread onto the <nav>.
    //
    // Syntax:
    //   <BreadcrumbList label="Breadcrumb">
    //     <BreadcrumbListItem>Home</BreadcrumbListItem>
    //   </BreadcrumbList>
    //
    // Examples:
    //   <!-- Full breadcrumb trail with current page -->
    //   <BreadcrumbList label="Breadcrumb">
    //     <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
    //     <BreadcrumbListItem><a href="/products">Products</a></BreadcrumbListItem>
    //     <BreadcrumbListItem current>Widget</BreadcrumbListItem>
    //   </BreadcrumbList>
    //
    // Keyboard:
    //   - Tab: Focus moves between links in the breadcrumb trail
    //   - Enter: Activates the focused breadcrumb link
    //
    // Accessibility:
    //   - <nav> with aria-label creates a navigation landmark for the breadcrumb trail
    //   - <ol> conveys the ordered hierarchical relationship of the trail
    //   - aria-current="page" on the BreadcrumbListItem for the current page
    //   - Implicit listitem role from semantic <li> elements
    //
    // Internationalization:
    //   - Label text comes through the label prop; no hardcoded strings
    //   - Separator characters (e.g. "/" or ">") should be added by the consumer
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Compound component: parent container for BreadcrumbListItem children
    //   - Separator characters between items are the consumer's responsibility
    //
    // References:
    //   - WAI-ARIA Breadcrumb Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/breadcrumb/

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
