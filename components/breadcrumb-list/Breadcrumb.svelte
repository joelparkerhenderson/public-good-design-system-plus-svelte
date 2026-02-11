<script lang="ts">
    // Component: Breadcrumb
    //
    // A headless single breadcrumb item component — one link in a breadcrumb
    // trail. Renders as a semantic list item with an anchor.
    //
    // Usage:
    //   <Breadcrumb href="/home">Home</Breadcrumb>
    //   <Breadcrumb href="/products" current>Products</Breadcrumb>
    //
    // Props:
    //   - href: The URL this breadcrumb links to (required)
    //   - current: Whether this is the current/active page (default: false)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: link (implicit from <a>)
    //   - ARIA: aria-current="page" when this is the current page
    //   - Keyboard: Tab to focus, Enter to activate
    //
    // Internationalization:
    //   - Link text comes through children snippet

    import type { Snippet } from "svelte";

    let {
        href,
        current = false,
        children,
        ...restProps
    }: {
        /** The URL this breadcrumb links to */
        href: string;
        /** Whether this is the current/active page */
        current?: boolean;
        /** The breadcrumb link text */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Breadcrumb: a single breadcrumb item in a navigation trail -->
<li {...restProps}>
    <a
        {href}
        aria-current={current ? "page" : undefined}
    >
        {@render children()}
    </a>
</li>
