<script lang="ts">
    // Component: FiveFaceRatingView
    //
    // A read-only face rating display. Shows the face/label for a given value.
    //
    // Props:
    //   value  — rating value (1-5)
    //   label  — accessible description
    //   labels — array of 5 face labels (default: Very bad..Very good)
    //
    // Usage:
    //   <FiveFaceRatingView value={4} label="Good rating" />

    let {
        value,
        label,
        labels = ["Very bad", "Bad", "Okay", "Good", "Very good"],
        ...restProps
    }: {
        /** Rating value (1-5). */
        value: number;
        /** Accessible description. */
        label: string;
        /** Labels for each face. */
        labels?: string[];
        [key: string]: unknown;
    } = $props();

    let faceLabel = $derived(labels[value - 1] ?? "");
</script>

<span role="img" aria-label={label} data-value={value} {...restProps}>
    {faceLabel}
</span>
