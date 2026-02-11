<script lang="ts">
    // Component: TaskBarItem
    //
    // A single button item within a TaskBar.
    //
    // Usage:
    //   <TaskBarItem>New Task</TaskBarItem>

    import type { Snippet } from "svelte";

    let {
        disabled = false,
        children,
        ...restProps
    }: {
        /** Whether disabled. */
        disabled?: boolean;
        /** Button content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<button type="button" {disabled} {...restProps}>
    {@render children()}
</button>
