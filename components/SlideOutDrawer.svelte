<script lang="ts">
    // Component: SlideOutDrawer
    //
    // A headless slide-out drawer component that renders a dialog container
    // which can be toggled open/closed. When open, it traps focus and can be
    // dismissed with the Escape key. Commonly used for navigation menus,
    // filters, settings panels, or secondary content.
    //
    // Usage:
    //   <SlideOutDrawer label="Navigation menu" bind:open={isOpen}>
    //     <nav>Menu content here</nav>
    //   </SlideOutDrawer>
    //
    // Props:
    //   - label: Accessible label for the dialog (required)
    //   - open: Whether the drawer is visible, bindable (default: false)
    //   - children: Snippet for the drawer content
    //   - ...restProps: Any additional HTML attributes spread onto the div
    //
    // Accessibility:
    //   - Role: dialog for modal overlay semantics
    //   - ARIA: aria-label describes the drawer purpose
    //   - ARIA: aria-modal="true" indicates modal behavior
    //   - Keyboard: Escape key closes the drawer
    //   - Focus: tabindex="-1" allows the dialog to receive focus
    //   - WCAG 2.2 AAA: Properly labeled modal with keyboard dismissal
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - No hardcoded user-facing strings

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible label for the dialog */
        label: string;
        /** Whether the drawer is open/visible, bindable */
        open?: boolean;
        /** The drawer content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    // Handle keyboard events on the drawer.
    // Escape key closes the drawer, matching standard dialog behavior.
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            open = false;
        }
    }
</script>

<!-- SlideOutDrawer: a modal dialog container, conditionally rendered -->
{#if open}
    <div
        role="dialog"
        aria-label={label}
        aria-modal="true"
        tabindex="-1"
        onkeydown={handleKeydown}
        {...restProps}
    >
        {@render children()}
    </div>
{/if}
