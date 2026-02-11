<script lang="ts">
    // Component: Sonner — a headless toast notification region.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="region" aria-label={label} aria-live="polite" {...restProps}>{@render children()}</div>
