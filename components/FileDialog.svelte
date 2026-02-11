<script lang="ts">
    // Component: FileDialog — a dialog for file operations (open/save).
    import type { Snippet } from "svelte";
    let { label, open = $bindable(false), children, ...restProps }: { label: string; open?: boolean; children: Snippet; [key: string]: unknown; } = $props();
    function onkeydown(event: KeyboardEvent) { if (event.key === "Escape") { event.preventDefault(); open = false; } }
</script>
{#if open}<dialog open tabindex="-1" aria-label={label} {onkeydown} {...restProps}>{@render children()}</dialog>{/if}
