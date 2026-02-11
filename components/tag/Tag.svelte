<script lang="ts">
    // Component: Tag
    //
    // A headless tag component for displaying labels, categories, keywords,
    // or status indicators. Renders as an inline <span> with role="status"
    // and an accessible label for screen reader announcements.
    //
    // Usage:
    //   <Tag label="Category">Design</Tag>
    //   <Tag label="Status">Active</Tag>
    //   <Tag label="Priority: High">High</Tag>
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - children: Snippet for tag content
    //   - ...restProps: Any additional HTML attributes spread onto the span
    //
    // Accessibility:
    //   - role="status" enables live region announcements for screen readers
    //   - aria-label provides expanded context beyond the visible tag text
    //   - Suitable for conveying dynamic status or categorical information
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All visible content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** The tag content (text, icon, etc.) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- Tag: an inline status indicator or categorical label -->
<span role="status" aria-label={label} {...restProps}>
    {@render children()}
</span>
