<script lang="ts">
    // Component: ErrorSummary
    //
    // Displays a summary of form errors at the top of a form. Uses
    // role="alert" and aria-labelledby for accessibility.
    //
    // Props:
    //   title    — heading text for the error summary
    //   children — list of error messages
    //
    // Usage:
    //   <ErrorSummary title="There are errors">
    //     <ul>
    //       <li><a href="#name">Name is required</a></li>
    //     </ul>
    //   </ErrorSummary>

    import type { Snippet } from "svelte";

    let {
        title,
        children,
        ...restProps
    }: {
        /** Heading for the error summary. */
        title: string;
        /** Error list content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    const titleId = `error-summary-${Math.random().toString(36).slice(2, 9)}`;
</script>

<div role="alert" aria-labelledby={titleId} tabindex="-1" {...restProps}>
    <h2 id={titleId}>{title}</h2>
    {@render children()}
</div>
