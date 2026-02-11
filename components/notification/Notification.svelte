<script lang="ts">
    // Component: Notification
    //
    // A headless notification/toast message with role="status" or
    // role="alert" for screen reader announcements.
    //
    // Props:
    //   label    — accessible name
    //   urgent   — whether to use alert role (default: false, uses status)
    //   children — notification content
    //
    // Usage:
    //   <Notification label="Success">Your changes have been saved.</Notification>
    //   <Notification label="Error" urgent>Something went wrong.</Notification>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        urgent = false,
        children,
        ...restProps
    }: {
        label?: string;
        urgent?: boolean;
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
