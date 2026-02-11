<script lang="ts">
    // Component: Tour
    //
    // A headless guided tour overlay. Shows one step at a time with
    // navigation controls. Consumer provides step content.
    //
    // Props:
    //   label — accessible name via aria-label
    //   active — bindable whether the tour is active
    //   children — snippet for step content
    //
    // Usage:
    //   <Tour label="Getting started" bind:active>
    //     <p>Welcome to the app!</p>
    //   </Tour>

    import type { Snippet } from "svelte";

    let {
        label,
        active = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Whether the tour is active. Bindable. */
        active?: boolean;
        /** Tour step content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            active = false;
        }
    }
</script>

{#if active}
    <div role="dialog" aria-label={label} aria-modal="true" tabindex="-1" {onkeydown} {...restProps}>
        {@render children()}
    </div>
{/if}
