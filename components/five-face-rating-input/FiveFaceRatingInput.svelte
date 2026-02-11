<script lang="ts">
    // Component: FiveFaceRatingInput
    //
    // A headless 5-face rating input using radio buttons. Each face has
    // a text label for screen readers.
    //
    // Props:
    //   label    — accessible name for the group
    //   value    — bindable rating (1-5)
    //   name     — radio group name
    //   labels   — array of 5 accessible labels for each face
    //   disabled — whether disabled
    //
    // Usage:
    //   <FiveFaceRatingInput label="How was your experience?" bind:value />

    let {
        label,
        value = $bindable(0),
        name = "face-rating",
        labels = ["Very bad", "Bad", "Okay", "Good", "Very good"],
        disabled = false,
        ...restProps
    }: {
        /** Accessible label for the group. */
        label: string;
        /** Current rating (1-5, 0 = none). Bindable. */
        value?: number;
        /** Radio group name. */
        name?: string;
        /** Labels for each face (array of 5). */
        labels?: string[];
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    const faces = [1, 2, 3, 4, 5];
</script>

<fieldset role="radiogroup" aria-label={label} {disabled} {...restProps}>
    {#each faces as face, i}
        <label>
            <input
                type="radio"
                {name}
                value={face}
                checked={value === face}
                onchange={() => value = face}
            />
            {labels[i]}
        </label>
    {/each}
</fieldset>
