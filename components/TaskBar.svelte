<script lang="ts">
    // Component: TaskBar
    //
    // A headless task bar using role="toolbar" for a row of task actions.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for task bar items
    //
    // Usage:
    //   <TaskBar label="Tasks">
    //     <button>New</button>
    //     <button>Open</button>
    //   </TaskBar>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Task bar item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="toolbar" aria-label={label} {...restProps}>
    {@render children()}
</div>
