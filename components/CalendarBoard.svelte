<script lang="ts">
    // CalendarBoard component
    //
    // A headless calendar board that presents dates in a structured grid layout
    // using a <table> element with role="grid". Commonly used in scheduling apps,
    // event planners, and date pickers, the consumer provides table rows and cells
    // (including header rows for day-of-week labels) as children.
    //
    // Props:
    //   label — string, required. Accessible name describing the calendar period (e.g. "January 2025").
    //   children — Snippet, required. Table rows and cells representing the calendar grid.
    //   ...restProps — additional HTML attributes spread onto the <table>.
    //
    // Syntax:
    //   <CalendarBoard label="January 2025">
    //     <tbody><tr><td>1</td></tr></tbody>
    //   </CalendarBoard>
    //
    // Examples:
    //   <!-- Calendar with day-of-week headers -->
    //   <CalendarBoard label="January 2025">
    //     <thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>
    //     <tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr></tbody>
    //   </CalendarBoard>
    //
    // Keyboard:
    //   None built-in — the consumer should implement grid keyboard navigation
    //   (arrow keys for cell movement, Enter/Space for selection).
    //
    // Accessibility:
    //   - role="grid" identifies the table as an interactive grid widget
    //   - aria-label provides an accessible name describing the calendar period
    //
    // Internationalization:
    //   - Label text comes through the label prop; no hardcoded strings
    //   - Day-of-week and date content is provided by the consumer
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Compound component: parent container for CalendarBoardItem children
    //   - No internal state — purely a structural wrapper
    //
    // References:
    //   - WAI-ARIA Grid Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/grid/

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label (e.g. month and year). */
        label: string;
        /** Calendar table rows. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- CalendarBoard component: a table with grid role for displaying a calendar of dates -->
<table
    role="grid"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</table>
