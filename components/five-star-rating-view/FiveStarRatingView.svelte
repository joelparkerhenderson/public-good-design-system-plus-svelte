<script lang="ts">
    // Component: FiveStarRatingView
    //
    // A read-only star rating display. Shows a value out of 5.
    //
    // Props:
    //   value — rating value (0-5)
    //   label — accessible name
    //
    // Usage:
    //   <FiveStarRatingView value={4} label="4 out of 5 stars" />

    let {
        value,
        label,
        ...restProps
    }: {
        /** Rating value (0-5). */
        value: number;
        /** Accessible description. */
        label: string;
        [key: string]: unknown;
    } = $props();
</script>

<span
    role="img"
    aria-label={label}
    data-value={value}
    {...restProps}
>
    {#each [1, 2, 3, 4, 5] as star}
        <span aria-hidden="true" data-filled={value >= star}>{value >= star ? "★" : "☆"}</span>
    {/each}
</span>
