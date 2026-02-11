<script lang="ts">
    // Component: Chart — a headless chart container.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<figure role="img" aria-label={label} {...restProps}>{@render children()}</figure>
