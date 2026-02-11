<script lang="ts">
    // Component: Collapsible
    //
    // A headless collapsible/disclosure component using native <details>/<summary>.
    // Allows content to be expanded or collapsed by the user.
    //
    // Usage:
    //   <Collapsible summary="More info">
    //     <p>Hidden content revealed on expand.</p>
    //   </Collapsible>
    //
    // Accessibility:
    //   - Uses native <details>/<summary> for built-in keyboard and ARIA support
    //   - Screen readers announce expanded/collapsed state automatically

    import type { Snippet } from "svelte";

    let {
        summary,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** The clickable summary text */
        summary: string;
        /** Whether the content is expanded */
        open?: boolean;
        /** The collapsible content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<details bind:open={open} {...restProps}>
    <summary>{summary}</summary>
    {@render children()}
</details>
