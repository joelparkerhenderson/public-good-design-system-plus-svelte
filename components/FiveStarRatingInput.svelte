<script lang="ts">
    // Component: FiveStarRatingInput
    //
    // A headless 5-star rating input using radio buttons for a11y.
    //
    // Props:
    //   label    — accessible name for the rating group
    //   value    — bindable rating value (1-5)
    //   name     — radio group name
    //   disabled — whether disabled
    //
    // Usage:
    //   <FiveStarRatingInput label="Rate this" bind:value />

    let {
        label,
        value = $bindable(0),
        name = "rating",
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for the rating group. */
        label: string;
        /** Current rating (1-5, 0 = none). Bindable. */
        value?: number;
        /** Radio group name. */
        name?: string;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    const stars = [1, 2, 3, 4, 5];
</script>

<fieldset role="radiogroup" aria-label={label} {disabled} {...restProps}>
    {#each stars as star}
        <label>
            <input
                type="radio"
                {name}
                value={star}
                checked={value === star}
                onchange={() => value = star}
            />
            {star} {star === 1 ? "star" : "stars"}
        </label>
    {/each}
</fieldset>
