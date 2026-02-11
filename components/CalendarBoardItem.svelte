<script lang="ts">
    // Component: CalendarBoardItem
    //
    // A single day cell in a CalendarBoard grid.
    //
    // Props:
    //   selected — whether this day is selected
    //   today — whether this day is today
    //   children — snippet for day content
    //
    // Usage:
    //   <CalendarBoardItem selected today>15</CalendarBoardItem>

    import type { Snippet } from "svelte";

    let {
        selected = false,
        today = false,
        children,
        ...restProps
    }: {
        /** Whether this day is selected. */
        selected?: boolean;
        /** Whether this day is today. */
        today?: boolean;
        /** Day content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<td role="gridcell" aria-selected={selected || undefined} aria-current={today ? "date" : undefined} tabindex={selected ? 0 : -1} {...restProps}>
    {@render children()}
</td>
