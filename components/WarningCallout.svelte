<script lang="ts">
    // Component: WarningCallout
    //
    // A headless warning container using <aside role="alert">.
    // Used to display important warnings or alerts to the user.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   children — warning content
    //
    // Usage:
    //   <WarningCallout label="Warning">
    //     <p>Your session is about to expire.</p>
    //   </WarningCallout>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        children,
        ...restProps
    }: {
        /** Optional accessible label. */
        label?: string;
        /** Warning content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<aside role="alert" aria-label={label} {...restProps}>
    {@render children()}
</aside>
