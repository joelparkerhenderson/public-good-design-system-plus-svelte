<script lang="ts">
    // Component: RangeCalendar — calendar grid for selecting date ranges.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<div role="application" aria-label={label} {...restProps}>{@render children()}</div>
