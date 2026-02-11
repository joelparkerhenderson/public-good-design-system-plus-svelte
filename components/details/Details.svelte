<script lang="ts">
    // Component: Details
    //
    // A headless disclosure widget using native <details>/<summary>.
    // Similar to Collapsible but with a more generic API. Supports
    // bindable open state and custom summary content via snippet.
    //
    // Props:
    //   summary  — text for the summary toggle
    //   open     — bindable boolean for expanded/collapsed state
    //   children — content revealed when expanded
    //
    // Usage:
    //   <Details summary="More information">
    //     <p>Additional details shown when expanded.</p>
    //   </Details>
    //
    // Accessibility:
    //   - Native <details>/<summary> provide built-in ARIA support
    //   - Screen readers announce expanded/collapsed state

    import type { Snippet } from "svelte";

    let {
        summary,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Text for the summary toggle. */
        summary: string;
        /** Whether the details are expanded. Bindable. */
        open?: boolean;
        /** Content shown when expanded. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<details bind:open={open} {...restProps}>
    <summary>{summary}</summary>
    {@render children()}
</details>
