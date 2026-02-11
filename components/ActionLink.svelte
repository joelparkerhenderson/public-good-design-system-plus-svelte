<script lang="ts">
    // Component: ActionLink
    //
    // A headless action link component that renders a semantic anchor element
    // for navigation actions. Inspired by NHS England's action link pattern.
    //
    // An action link visually emphasizes a navigation action, typically
    // appearing as a prominent link that leads the user to a new page or
    // triggers a significant navigation event.
    //
    // Usage:
    //   <ActionLink href="/next-step">Continue to next step</ActionLink>
    //
    // Props:
    //   - href: The URL the link points to (required)
    //   - label: Accessible label override for screen readers (optional)
    //   - ...restProps: Any additional HTML anchor attributes
    //
    // Accessibility:
    //   - Role: link (implicit from <a>)
    //   - Keyboard: Focusable via Tab, activated via Enter
    //   - ARIA: aria-label for screen reader override when link text is insufficient
    //
    // Internationalization:
    //   - All text content comes through the children snippet and props
    //   - No hardcoded strings

    import type { Snippet } from "svelte";

    let {
        href,
        label = undefined,
        children,
        ...restProps
    }: {
        /** The URL the link points to */
        href: string;
        /** Accessible label override for screen readers */
        label?: string;
        /** The link content (text, icons, etc.) */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Action link: a semantic anchor element with optional ARIA label override -->
<a
    {href}
    aria-label={label}
    {...restProps}
>
    {@render children()}
</a>
