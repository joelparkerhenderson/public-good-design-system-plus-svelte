<script lang="ts">
    // KanbanBoard component
    //
    // A headless Kanban board container that organizes work items into columns
    // representing different workflow stages such as "To Do", "In Progress", and
    // "Done". It renders a <div> with role="region" and an accessible label,
    // providing a semantic boundary for the board. Commonly used in project
    // management tools, agile development platforms, and task tracking applications.
    //
    // Props:
    //   label — string, required. Accessible name describing the board, applied via aria-label.
    //   children — Snippet, required. The board content including columns and cards.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <KanbanBoard label="Sprint 5 board">...</KanbanBoard>
    //
    // Examples:
    //   <!-- Kanban board with three columns -->
    //   <KanbanBoard label="Sprint 5 board">
    //     <div><h3>To Do</h3><ul><li>Task A</li></ul></div>
    //     <div><h3>In Progress</h3><ul><li>Task B</li></ul></div>
    //     <div><h3>Done</h3><ul><li>Task C</li></ul></div>
    //   </KanbanBoard>
    //
    // Keyboard:
    //   - None built-in — consumer implements keyboard interactions for moving
    //     items between columns and navigating within the board.
    //
    // Accessibility:
    //   - role="region" defines the Kanban board as a named landmark section
    //   - aria-label={label} provides an accessible name for the board region
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Compound component: pair with KanbanBoardKtem for individual cards
    //   - No internal state — purely a structural wrapper
    //
    // References:
    //   - WAI-ARIA region role: https://www.w3.org/TR/wai-aria-1.2/#region
    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- KanbanBoard component: a labeled region container for organizing workflow columns and cards -->
<div
    role="region"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</div>
