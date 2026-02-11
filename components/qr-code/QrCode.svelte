<script lang="ts">
    // Component: QrCode — a headless QR code display container.
    // Consumer provides the actual QR code rendering (SVG, canvas, etc.)
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="img" aria-label={label} {...restProps}>{@render children()}</div>
