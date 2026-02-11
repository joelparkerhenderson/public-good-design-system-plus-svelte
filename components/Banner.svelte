<script lang="ts">
    // Component: Banner
    //
    // A headless banner component for displaying prominent messages at the
    // top or bottom of an interface. Uses the ARIA banner landmark role.
    //
    // Usage:
    //   <Banner>Important announcement here.</Banner>
    //   <Banner type="warning" dismissible onclose={handleDismiss}>
    //     Your session will expire soon.
    //   </Banner>
    //
    // Props:
    //   - type: Banner variant — "info" | "success" | "warning" | "error" (default: "info")
    //   - dismissible: Whether the banner can be dismissed (default: false)
    //   - onclose: Callback when the banner is dismissed
    //   - closeLabel: Accessible label for the close/dismiss button (default: undefined)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: region with aria-label, or banner for site-wide banners
    //   - ARIA: aria-live for dynamic banner content
    //   - Keyboard: Dismiss button focusable and activatable via Enter/Space
    //
    // Internationalization:
    //   - All text comes through children snippet and closeLabel prop
    //   - No hardcoded strings

    import type { Snippet } from "svelte";

    let {
        type = "info",
        dismissible = false,
        onclose = undefined,
        closeLabel = undefined,
        children,
        ...restProps
    }: {
        /** Banner variant for semantic meaning */
        type?: "info" | "success" | "warning" | "error";
        /** Whether the banner can be dismissed */
        dismissible?: boolean;
        /** Callback when the banner is dismissed */
        onclose?: () => void;
        /** Accessible label for the dismiss button */
        closeLabel?: string;
        /** The banner content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let visible = $state(true);

    function dismiss() {
        visible = false;
        onclose?.();
    }
</script>

<!-- Banner: a prominent message region -->
{#if visible}
    <div
        role="region"
        aria-live="polite"
        data-type={type}
        {...restProps}
    >
        {@render children()}
        {#if dismissible}
            <button
                type="button"
                aria-label={closeLabel}
                onclick={dismiss}
            ></button>
        {/if}
    </div>
{/if}
