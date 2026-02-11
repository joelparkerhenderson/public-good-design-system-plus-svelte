<script lang="ts">
    // Component: Splitter
    //
    // A headless splitter/separator between resizable panels.
    // Uses role="separator" with aria-orientation.
    //
    // Props:
    //   label — accessible name via aria-label
    //   orientation — "horizontal" or "vertical"
    //
    // Usage:
    //   <Splitter label="Resize panels" orientation="vertical" />

    let {
        label,
        orientation = "vertical",
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Orientation of the split. */
        orientation?: "horizontal" | "vertical";
        [key: string]: unknown;
    } = $props();
</script>

<div role="separator" aria-label={label} aria-orientation={orientation} tabindex="0" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} {...restProps}></div>
