<script lang="ts">
    // Component: CallToAction
    //
    // A headless call-to-action component that renders a prominent
    // interactive element (link or button) designed to drive user engagement.
    //
    // Usage:
    //   <CallToAction href="/signup">Sign Up Now</CallToAction>
    //   <CallToAction onclick={handleAction}>Get Started</CallToAction>
    //
    // Props:
    //   - href: If provided, renders as a link; otherwise renders as a button
    //   - label: Accessible label override for screen readers (optional)
    //   - disabled: Whether the element is disabled (default: false, button only)
    //   - onclick: Click event handler (button mode)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: link (when href provided) or button (when no href)
    //   - ARIA: aria-label for screen reader text override
    //   - Keyboard: Tab to focus, Enter/Space to activate
    //
    // Internationalization:
    //   - CTA text comes through children snippet
    //   - Label override comes through label prop

    import type { Snippet } from "svelte";

    let {
        href = undefined,
        label = undefined,
        disabled = false,
        onclick = undefined,
        children,
        ...restProps
    }: {
        /** If provided, renders as a link */
        href?: string;
        /** Accessible label override */
        label?: string;
        /** Whether the element is disabled (button mode only) */
        disabled?: boolean;
        /** Click event handler (button mode) */
        onclick?: (event: MouseEvent) => void;
        /** The CTA content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

{#if href}
    <a {href} aria-label={label} {...restProps}>
        {@render children()}
    </a>
{:else}
    <button type="button" {disabled} aria-label={label} {onclick} {...restProps}>
        {@render children()}
    </button>
{/if}
