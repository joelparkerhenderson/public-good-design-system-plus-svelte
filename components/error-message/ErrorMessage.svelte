<script lang="ts">
    // Component: ErrorMessage
    //
    // Displays an error message with role="alert" for screen reader announcement.
    //
    // Props:
    //   children — error text content
    //
    // Usage:
    //   <ErrorMessage>Password is required</ErrorMessage>

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Error message content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<p role="alert" {...restProps}>
    {@render children()}
</p>
