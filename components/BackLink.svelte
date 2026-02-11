<script lang="ts">
    // Component: BackLink
    //
    // A headless navigation link for returning to a previous page or step.
    // Renders as a semantic anchor element with appropriate ARIA attributes.
    //
    // Usage:
    //   <BackLink href="/previous-page">Back to previous page</BackLink>
    //   <BackLink href="/dashboard" label="Return to dashboard">Back</BackLink>
    //
    // Props:
    //   - href: The URL to navigate back to (required)
    //   - label: Accessible label override for screen readers (optional)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: link (implicit from <a>)
    //   - ARIA: aria-label for screen reader context
    //   - Keyboard: Tab to focus, Enter to activate
    //
    // Internationalization:
    //   - Link text comes through children snippet
    //   - Label override comes through label prop

    import type { Snippet } from "svelte";

    let {
        href,
        label = undefined,
        children,
        ...restProps
    }: {
        /** The URL to navigate back to */
        href: string;
        /** Accessible label override for screen readers */
        label?: string;
        /** The link content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- BackLink: a navigation link for returning to a previous page -->
<a
    {href}
    aria-label={label}
    {...restProps}
>
    {@render children()}
</a>
