<script lang="ts">
    // Component: Toast
    //
    // A headless notification toast with role="status" and aria-live="polite".
    // Similar to Notification but typically used for transient messages.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   urgent   — whether to use alert role (default: false, uses status)
    //   children — toast content
    //
    // Usage:
    //   <Toast label="Success">Your changes have been saved.</Toast>
    //   <Toast label="Error" urgent>Something went wrong.</Toast>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        urgent = false,
        children,
        ...restProps
    }: {
        /** Optional accessible label. */
        label?: string;
        /** Whether to use alert role instead of status. */
        urgent?: boolean;
        /** Toast content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div
    role={urgent ? "alert" : "status"}
    aria-label={label}
    aria-live={urgent ? "assertive" : "polite"}
    {...restProps}
>
    {@render children()}
</div>
