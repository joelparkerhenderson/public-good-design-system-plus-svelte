<script lang="ts">
    // Component: ProgressSpinner
    //
    // A headless loading indicator with role="status" and aria-label.
    // Screen readers will announce this as a status region.
    //
    // Props:
    //   label    — accessible name describing the loading state
    //   children — optional snippet content
    //
    // Usage:
    //   <ProgressSpinner label="Loading data" />

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the spinner. */
        label: string;
        /** Optional content rendered inside. */
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div
    role="status"
    aria-label={label}
    aria-live="polite"
    {...restProps}
>
    {#if children}
        {@render children()}
    {/if}
</div>
