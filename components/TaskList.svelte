<script lang="ts">
    // Component: TaskList
    //
    // A headless task list component that renders a semantic unordered list (<ul>)
    // with role="list" and an accessible label. Used to display a series of tasks,
    // to-dos, or action items. The consumer provides all task items through the
    // children snippet.
    //
    // Usage:
    //   <TaskList label="Today's tasks">
    //     <li>Review pull requests</li>
    //     <li>Update documentation</li>
    //     <li>Deploy to staging</li>
    //   </TaskList>
    //
    // Props:
    //   - label: Accessible label for the task list (required)
    //   - children: Snippet for task items (should be <li> elements)
    //   - ...restProps: Any additional HTML attributes spread onto the ul
    //
    // Accessibility:
    //   - role="list" explicitly marks this as a list (some screen readers may
    //     strip implicit list semantics when CSS removes list styling)
    //   - aria-label provides the accessible name for the list
    //   - Screen readers announce the list with its label and item count
    //   - Consumers can use checkboxes within <li> for completable tasks
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All task content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the task list */
        label: string;
        /** Task items (should be <li> elements) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- TaskList: an unordered list of tasks or action items -->
<ul role="list" aria-label={label} {...restProps}>
    {@render children()}
</ul>
