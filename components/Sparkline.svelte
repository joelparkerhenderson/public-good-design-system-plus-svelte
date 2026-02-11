<script lang="ts">
    // Component: Sparkline — a headless sparkline chart container.
    // Consumer provides SVG or canvas rendering.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="img" aria-label={label} {...restProps}>{@render children()}</div>
