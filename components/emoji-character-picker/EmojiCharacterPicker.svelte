<script lang="ts">
    // Component: EmojiCharacterPicker — a grid of selectable emoji characters.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="grid" aria-label={label} {...restProps}>{@render children()}</div>
