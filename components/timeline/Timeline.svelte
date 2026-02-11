<script lang="ts">
    // Component: Timeline
    //
    // A headless timeline component that renders a semantic ordered list (<ol>)
    // with an accessible label. Used to display events, milestones, or activities
    // in chronological order. The consumer provides all timeline items through
    // the children snippet.
    //
    // Usage:
    //   <Timeline label="Project milestones">
    //     <li>Project kickoff - Jan 2024</li>
    //     <li>Alpha release - Mar 2024</li>
    //     <li>Beta release - Jun 2024</li>
    //     <li>General availability - Sep 2024</li>
    //   </Timeline>
    //
    // Props:
    //   - label: Accessible label for the timeline (required)
    //   - children: Snippet for timeline items (should be <li> elements)
    //   - ...restProps: Any additional HTML attributes spread onto the ol
    //
    // Accessibility:
    //   - Semantic <ol> element conveys chronological ordering to screen readers
    //   - aria-label provides the accessible name for the timeline
    //   - Screen readers announce the list with its label and item count
    //   - Consumers can add time elements and aria attributes to individual items
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All timeline content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the timeline */
        label: string;
        /** Timeline items (should be <li> elements) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- Timeline: an ordered list of chronological events or milestones -->
<ol aria-label={label} {...restProps}>
    {@render children()}
</ol>
