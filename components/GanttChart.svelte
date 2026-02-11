<script lang="ts">
    // Component: GanttChart — a headless Gantt chart container using table/grid.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<table role="grid" aria-label={label} {...restProps}>{@render children()}</table>
