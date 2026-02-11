<script lang="ts">
    // Component: HoverCard
    //
    // A headless hover card/popover shown on hover or focus.
    //
    // Props:
    //   label    — accessible name for the card content
    //   open     — bindable boolean for visibility
    //   children — card content
    //
    // Usage:
    //   <HoverCard label="User info" bind:open>
    //     <p>Profile details here</p>
    //   </HoverCard>

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        label: string;
        open?: boolean;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

{#if open}
    <div role="tooltip" aria-label={label} {...restProps}>
        {@render children()}
    </div>
{/if}
