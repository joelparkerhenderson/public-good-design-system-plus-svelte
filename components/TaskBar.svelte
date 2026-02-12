<script lang="ts">
    // TaskBar component
    //
    // A headless task bar that renders a toolbar-style container for task-related
    // action buttons. Uses the ARIA toolbar role with accessible labeling to group
    // related task actions together, making the container semantically meaningful
    // to assistive technologies. Commonly used for quick access to frequently
    // performed actions such as "New", "Open", "Save", or task-specific operations.
    //
    // Props:
    //   label — string, required. Accessible name for the toolbar via aria-label.
    //   children — Snippet, required. Task bar item elements.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <TaskBar label="Tasks">...</TaskBar>
    //
    // Examples:
    //   <!-- Task bar with action buttons -->
    //   <TaskBar label="Tasks">
    //     <button>New</button>
    //     <button>Open</button>
    //     <button>Save</button>
    //   </TaskBar>
    //
    // Keyboard:
    //   - Tab: focus moves to the first focusable item within the toolbar
    //
    // Accessibility:
    //   - role="toolbar" identifies the container as a toolbar widget
    //   - aria-label provides the accessible name for the toolbar
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Does not implement arrow key navigation itself; consumers can add as needed
    //
    // References:
    //   - WAI-ARIA Toolbar Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/toolbar/

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Task bar item elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- TaskBar component: a toolbar-role container for task action buttons -->
<div
    role="toolbar"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</div>
