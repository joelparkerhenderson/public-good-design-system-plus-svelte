<script lang="ts">
    // Component: Spinner
    //
    // A headless loading spinner with role="status" and aria-live="polite".
    // Announces loading state to screen readers without interruption.
    //
    // Props:
    //   label    — accessible name describing the loading state
    //   children — optional snippet content
    //
    // Usage:
    //   <Spinner label="Loading" />
    //   <Spinner label="Processing"><span>Please wait...</span></Spinner>

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
