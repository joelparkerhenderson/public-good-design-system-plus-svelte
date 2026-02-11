<script lang="ts">
    // Component: ProgressBar
    //
    // A headless native <progress> element with aria-label.
    // Uses the browser's built-in progress element for semantic meaning.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — current progress value (0 to max)
    //   max   — maximum value (default 100)
    //
    // Usage:
    //   <ProgressBar label="Upload progress" value={50} max={100} />
    //   <ProgressBar label="Loading" /> <!-- indeterminate -->

    let {
        label,
        value = undefined,
        max = 100,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current value. Undefined means indeterminate. */
        value?: number;
        /** Maximum value. */
        max?: number;
        [key: string]: unknown;
    } = $props();
</script>

<progress
    aria-label={label}
    {value}
    {max}
    {...restProps}
></progress>
