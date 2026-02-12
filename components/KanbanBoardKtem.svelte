<script lang="ts">
    // KanbanBoardKtem component
    //
    // A single Kanban board item representing a work item or task card within a
    // Kanban board column. It renders a <div> with role="listitem" to convey its
    // semantic position within a parent list container. Each item typically displays
    // summary information about a task such as title, assignee, priority, or due date.
    //
    // Props:
    //   label — string, optional. Accessible name for the card via aria-label.
    //   children — Snippet, required. Card content (title, assignee, metadata, etc.).
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <KanbanBoardKtem label="Fix login bug">...</KanbanBoardKtem>
    //
    // Examples:
    //   <!-- Simple task card -->
    //   <KanbanBoardKtem label="Fix login bug">
    //     <h3>Fix login bug</h3>
    //     <p>Assigned to Alice</p>
    //   </KanbanBoardKtem>
    //
    //   <!-- Dynamic task card -->
    //   <KanbanBoardKtem label={task.title}>
    //     <span>{task.title}</span>
    //     <span>{task.priority}</span>
    //   </KanbanBoardKtem>
    //
    // Keyboard:
    //   - None directly — keyboard interaction depends on interactive elements
    //     within the card content provided by the consumer.
    //
    // Accessibility:
    //   - role="listitem" identifies this as an item within a list container
    //   - aria-label optionally provides an accessible name for the card
    //   - Parent column should provide role="list" context
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - All content comes through the children snippet
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Designed to be used inside a KanbanBoard column with role="list"
    //   - No drag-and-drop behavior built in; consumers implement as needed
    //
    // References:
    //   - WAI-ARIA Listitem Role: https://www.w3.org/TR/wai-aria-1.2/#listitem
    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label?: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- KanbanBoardKtem component: a listitem representing a single task card within a kanban column -->
<div
    role="listitem"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</div>
