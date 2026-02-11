<script lang="ts">
    // Component: FileManager — a headless file browser region.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="region" aria-label={label} {...restProps}>{@render children()}</div>
