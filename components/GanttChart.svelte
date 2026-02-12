<script lang="ts">
    // GanttChart component
    //
    // A Gantt chart container that displays project tasks and their timelines as a
    // structured grid. Renders a <table> element with role="grid" and an accessible label.
    // The consumer provides the table structure with rows for tasks and columns for time
    // periods. Commonly used in project management tools and resource planning applications.
    //
    // Props:
    //   label — string, required. Accessible name describing the Gantt chart content, applied via aria-label.
    //   children — Snippet, required. Table rows and cells representing tasks and timelines.
    //   ...restProps — additional HTML attributes spread onto the table element.
    //
    // Syntax:
    //   <GanttChart label="Project timeline">{children}</GanttChart>
    //
    // Examples:
    //   <!-- Project timeline Gantt chart -->
    //   <GanttChart label="Project Alpha timeline">
    //     <thead>
    //       <tr><th>Task</th><th>Week 1</th><th>Week 2</th><th>Week 3</th></tr>
    //     </thead>
    //     <tbody>
    //       <tr><th>Design</th><td>---</td><td></td><td></td></tr>
    //       <tr><th>Development</th><td></td><td>---</td><td>---</td></tr>
    //     </tbody>
    //   </GanttChart>
    //
    // Keyboard:
    //   - None built-in — consumer should implement grid keyboard navigation (arrow keys for cell-to-cell movement) as needed
    //
    // Accessibility:
    //   - role="grid" identifies the table as an interactive grid widget
    //   - aria-label provides an accessible name describing the Gantt chart
    //   - Grid structure allows screen readers to navigate tasks and time periods systematically
    //
    // Internationalization:
    //   - The label prop allows localized accessible names; no hardcoded user-facing strings
    //   - All content comes through the children snippet
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - No internal state; purely a structural wrapper
    //   - Consumer provides table rows and cells for tasks and time periods
    //
    // References:
    //   - WAI-ARIA Grid Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/grid/
    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- GanttChart component: a table with grid role for displaying project schedule data -->
<table
    role="grid"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</table>
