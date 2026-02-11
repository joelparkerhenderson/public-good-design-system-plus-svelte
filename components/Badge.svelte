<script lang="ts">
    // Component: Badge
    //
    // A headless badge component for displaying status indicators, counts,
    // or short labels. Renders as an inline element with appropriate ARIA
    // attributes for screen reader announcements.
    //
    // Usage:
    //   <Badge>New</Badge>
    //   <Badge label="3 unread messages">3</Badge>
    //   <Badge type="warning">Alert</Badge>
    //
    // Props:
    //   - type: Badge variant — "default" | "info" | "success" | "warning" | "error" (default: "default")
    //   - label: Accessible label for screen readers when badge text alone is insufficient
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: status (for dynamic badges) or none (for static labels)
    //   - ARIA: aria-label for additional context beyond the visible text
    //   - Screen readers announce the badge content or label
    //
    // Internationalization:
    //   - All text content comes through children snippet and label prop
    //   - No hardcoded strings

    import type { Snippet } from "svelte";

    let {
        type = "default",
        label = undefined,
        children,
        ...restProps
    }: {
        /** Badge variant for semantic meaning */
        type?: "default" | "info" | "success" | "warning" | "error";
        /** Accessible label for screen readers */
        label?: string;
        /** The badge content (text, number, etc.) */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Badge: an inline status indicator or label -->
<span
    role="status"
    aria-label={label}
    data-type={type}
    {...restProps}
>
    {@render children()}
</span>
