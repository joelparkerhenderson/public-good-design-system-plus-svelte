<script lang="ts">
    // Component: Popover — a conditional dialog overlay.
    import type { Snippet } from "svelte";
    let {
        label, open = $bindable(false), children, ...restProps
    }: { label: string; open?: boolean; children: Snippet; [key: string]: unknown; } = $props();
</script>
{#if open}
    <div role="dialog" aria-label={label} {...restProps}>
        {@render children()}
    </div>
{/if}
