<script lang="ts">
    // Component: BeachBall
    //
    // A headless loading/waiting indicator component. Represents a spinning
    // or busy state, similar to the macOS beach ball cursor.
    //
    // Usage:
    //   <BeachBall label="Loading content" />
    //   <BeachBall label="Processing request" active={isLoading} />
    //
    // Props:
    //   - label: Accessible label describing what is loading (required)
    //   - active: Whether the loading indicator is active (default: true)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: status with aria-live="polite" for non-blocking updates
    //   - ARIA: aria-busy="true" when active
    //   - ARIA: aria-label describes the loading context
    //   - Screen readers announce the loading state
    //
    // Internationalization:
    //   - Label comes through the label prop
    //   - No hardcoded strings

    let {
        label,
        active = true,
        ...restProps
    }: {
        /** Accessible label describing what is loading */
        label: string;
        /** Whether the loading indicator is active */
        active?: boolean;
        [key: string]: unknown;
    } = $props();
</script>

<!-- BeachBall: a loading/waiting indicator -->
<div
    role="status"
    aria-label={label}
    aria-busy={active}
    aria-live="polite"
    data-active={active}
    {...restProps}
>
    {#if active}
        <span aria-hidden="true"></span>
    {/if}
</div>
