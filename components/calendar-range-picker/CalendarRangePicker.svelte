<script lang="ts">
    // Component: CalendarRangePicker
    //
    // A headless calendar-based date range picker using a grid.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for calendar grid content
    //
    // Usage:
    //   <CalendarRangePicker label="Select dates">
    //     ...calendar grid...
    //   </CalendarRangePicker>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        label: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div role="application" aria-label={label} {...restProps}>
    {@render children()}
</div>
