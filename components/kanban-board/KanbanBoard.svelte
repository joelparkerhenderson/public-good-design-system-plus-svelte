<script lang="ts">
    // Component: KanbanBoard — a headless Kanban board container.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="region" aria-label={label} {...restProps}>{@render children()}</div>
