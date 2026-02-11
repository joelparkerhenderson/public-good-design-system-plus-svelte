<script lang="ts">
    // Component: Expander
    //
    // A headless expander with a toggle button and expandable content.
    // Uses aria-expanded and aria-controls for accessibility.
    //
    // Props:
    //   label    — button text / accessible name
    //   expanded — bindable boolean for expanded state
    //   children — expandable content
    //
    // Usage:
    //   <Expander label="Show details" bind:expanded>
    //     <p>Details here...</p>
    //   </Expander>

    import type { Snippet } from "svelte";

    let {
        label,
        expanded = $bindable(false),
        children,
        ...restProps
    }: {
        /** Button label / accessible name. */
        label: string;
        /** Whether the content is expanded. Bindable. */
        expanded?: boolean;
        /** Expandable content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    const contentId = `expander-${Math.random().toString(36).slice(2, 9)}`;
</script>

<div {...restProps}>
    <button
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onclick={() => expanded = !expanded}
    >
        {label}
    </button>
    {#if expanded}
        <div id={contentId} role="region" aria-label={label}>
            {@render children()}
        </div>
    {/if}
</div>
