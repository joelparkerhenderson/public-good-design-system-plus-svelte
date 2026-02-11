<script lang="ts">
    // Component: ProgressCircle
    //
    // A headless div with role="progressbar" and ARIA value attributes.
    // Consumers provide their own CSS for the circular appearance.
    //
    // Props:
    //   label      — accessible name via aria-label
    //   value      — current progress value
    //   min        — minimum value (default 0)
    //   max        — maximum value (default 100)
    //   children   — optional snippet content (e.g., percentage text)
    //
    // Usage:
    //   <ProgressCircle label="Upload" value={75}>
    //     <span>75%</span>
    //   </ProgressCircle>

    import type { Snippet } from "svelte";

    let {
        label,
        value = 0,
        min = 0,
        max = 100,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. */
        value?: number;
        /** Minimum value. */
        min?: number;
        /** Maximum value. */
        max?: number;
        /** Optional content rendered inside. */
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div
    role="progressbar"
    aria-label={label}
    aria-valuenow={value}
    aria-valuemin={min}
    aria-valuemax={max}
    {...restProps}
>
    {#if children}
        {@render children()}
    {/if}
</div>
