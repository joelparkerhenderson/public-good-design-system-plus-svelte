<script lang="ts">
    // CalendarBoardItem component
    //
    // A single day cell within a CalendarBoard grid. Renders as a <td> with
    // role="gridcell", supporting selected and today states for visual and
    // accessible indication. Uses a roving tabindex pattern where the selected
    // cell receives focus. Designed for use inside a CalendarBoard <table>/<tr>.
    //
    // Props:
    //   selected — boolean, default false. Whether this day cell is selected.
    //   today — boolean, default false. Whether this day cell represents today's date.
    //   children — Snippet, required. Day content, typically the day number.
    //   ...restProps — additional HTML attributes spread onto the <td>.
    //
    // Syntax:
    //   <CalendarBoardItem>15</CalendarBoardItem>
    //
    // Examples:
    //   <!-- Selected day that is also today -->
    //   <CalendarBoardItem selected today>15</CalendarBoardItem>
    //
    //   <!-- Regular unselected day -->
    //   <CalendarBoardItem>22</CalendarBoardItem>
    //
    // Keyboard:
    //   - Tab: Focus moves to the selected cell (tabindex="0")
    //   - Arrow keys: Typically handled by the parent CalendarBoard grid navigation
    //
    // Accessibility:
    //   - role="gridcell" identifies the cell as part of a grid
    //   - aria-selected set to true when selected; omitted otherwise
    //   - aria-current="date" set when the cell represents today; omitted otherwise
    //   - Roving tabindex: tabindex="0" when selected, "-1" otherwise
    //
    // Internationalization:
    //   - Day content comes through children snippet; no hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Must be used inside a CalendarBoard component (which provides the <table>)
    //
    // References:
    //   - WAI-ARIA Grid Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/grid/

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

<!-- CalendarBoardItem component: a gridcell table cell representing a single day in the calendar -->
<td
    role="gridcell"
    aria-selected={selected || undefined}
    aria-current={today ? "date" : undefined}
    tabindex={selected ? 0 : -1}
    {...restProps}
>
    {@render children()}
</td>
