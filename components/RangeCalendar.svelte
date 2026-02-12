<script lang="ts">
    // RangeCalendar component
    //
    // A headless calendar container for selecting a range of dates, highlighting the
    // span between a chosen start date and end date. It renders a <div> with
    // role="application" and an accessible label, providing a wrapper for rich
    // calendar-based date range selection. The consumer provides the calendar grid,
    // selection logic, and range highlighting as children. Commonly used in booking
    // interfaces, vacation planners, availability selectors, and reporting date filters.
    //
    // Props:
    //   label — string, required. Accessible name describing the calendar purpose via aria-label.
    //   children — Snippet, required. The calendar grid content with date cells and navigation.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <RangeCalendar label="Select dates">{children}</RangeCalendar>
    //
    // Examples:
    //   <!-- Date range calendar for vacation booking -->
    //   <RangeCalendar label="Select vacation dates">
    //     <!-- calendar grid with date cells and range highlighting -->
    //   </RangeCalendar>
    //
    // Keyboard:
    //   None built-in — the consumer should implement date cell navigation
    //   (Arrow keys), selection (Enter/Space), and range extension as appropriate.
    //
    // Accessibility:
    //   - role="application" signals that the widget manages its own keyboard interactions
    //   - aria-label provides an accessible name for the range calendar
    //   - Consumer implements grid navigation and selection announcements
    //
    // Internationalization:
    //   - The label prop is the only text; all calendar content comes through children
    //   - Consumer handles locale-specific date formatting and day/month names
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - No internal state — purely a structural wrapper with ARIA semantics
    //   - Consumer provides all date logic, grid rendering, and range highlighting
    //
    // References:
    //   - WAI-ARIA Application Role: https://www.w3.org/TR/wai-aria-1.2/#application
    //   - WAI-ARIA Grid Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/grid/
    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- RangeCalendar component: an application-role container for date range selection with a calendar grid -->
<div role="application" aria-label={label} {...restProps}>
    {@render children()}
</div>
