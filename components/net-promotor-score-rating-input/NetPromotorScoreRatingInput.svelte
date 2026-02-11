<script lang="ts">
    // Component: NetPromotorScoreRatingInput
    //
    // A headless Net Promoter Score (NPS) rating input component that renders
    // a fieldset with role="radiogroup" containing 11 radio buttons (0-10).
    // NPS is a metric used to measure customer loyalty and satisfaction.
    //
    // Usage:
    //   <NetPromotorScoreRatingInput label="How likely are you to recommend us?" bind:value={score} />
    //
    // Props:
    //   - label: Accessible label for the radiogroup (required)
    //   - value: The currently selected NPS score (0-10), bindable
    //   - name: Name attribute for the radio group (default: "nps")
    //   - ...restProps: Any additional HTML attributes spread onto the fieldset
    //
    // Accessibility:
    //   - Role: radiogroup on the fieldset
    //   - ARIA: aria-label on the fieldset describes the purpose
    //   - Each radio button has aria-label with its numeric value
    //   - Keyboard: Arrow keys navigate between radio buttons (native behavior)
    //   - WCAG 2.2 AAA: Fully labeled, keyboard accessible
    //
    // Internationalization:
    //   - The label prop externalizes the fieldset label string
    //   - No hardcoded user-facing strings

    let {
        label,
        value = $bindable(""),
        name = "nps",
        ...restProps
    }: {
        /** Accessible label describing the rating input purpose */
        label: string;
        /** Currently selected NPS score value (0-10), bindable */
        value?: string;
        /** Name attribute for the radio input group */
        name?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- NetPromotorScoreRatingInput: a fieldset radiogroup with 11 radio buttons (0-10) -->
<fieldset role="radiogroup" aria-label={label} {...restProps}>
    {#each Array.from({ length: 11 }, (_, i) => i) as score}
        <label>
            <input
                type="radio"
                {name}
                value={String(score)}
                checked={value === String(score)}
                aria-label={String(score)}
                onchange={() => { value = String(score); }}
            />
            {score}
        </label>
    {/each}
</fieldset>
