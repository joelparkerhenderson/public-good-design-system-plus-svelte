<script lang="ts">
    // Component: KanbanBoardKtem — a single Kanban board item/card.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label?: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="listitem" aria-label={label} {...restProps}>{@render children()}</div>
