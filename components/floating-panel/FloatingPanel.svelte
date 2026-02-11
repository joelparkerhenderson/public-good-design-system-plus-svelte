<script lang="ts">
    // Component: FloatingPanel
    //
    // A headless floating overlay panel. Shown conditionally with
    // appropriate ARIA attributes.
    //
    // Props:
    //   open     — whether the panel is visible
    //   label    — accessible name
    //   children — panel content
    //
    // Usage:
    //   <FloatingPanel open={showPanel} label="Options">
    //     <p>Panel content</p>
    //   </FloatingPanel>

    import type { Snippet } from "svelte";

    let {
        open = false,
        label,
        children,
        ...restProps
    }: {
        /** Whether the panel is visible. */
        open?: boolean;
        /** Accessible name. */
        label: string;
        /** Panel content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

{#if open}
    <div role="region" aria-label={label} {...restProps}>
        {@render children()}
    </div>
{/if}
