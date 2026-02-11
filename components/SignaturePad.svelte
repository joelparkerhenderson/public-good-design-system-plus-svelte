<script lang="ts">
    // Component: SignaturePad — a headless signature input region.
    // Consumer provides canvas or SVG-based drawing surface.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="application" aria-label={label} {...restProps}>{@render children()}</div>
