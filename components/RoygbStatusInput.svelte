<script lang="ts">
    // Component: RoygbStatusInput
    //
    // A headless ROYGB (Red/Orange/Yellow/Green/Blue) status input component
    // that renders a select element with five color-coded status options.
    // Extends the traditional RAG model with additional orange and blue levels
    // for more granular status reporting.
    //
    // Usage:
    //   <RoygbStatusInput label="Risk level" bind:value={level} />
    //   <RoygbStatusInput label="Alert status" value="green" />
    //
    // Props:
    //   - label: Accessible label for the select element (required)
    //   - value: The currently selected status value, bindable (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the select
    //
    // Options:
    //   - "red": Critical problem
    //   - "orange": Hazard or significant risk
    //   - "yellow": Caution or minor issues
    //   - "green": Normal, on track
    //   - "blue": Paused or informational
    //
    // Accessibility:
    //   - ARIA: aria-label on the select for screen reader context
    //   - Keyboard: Native select keyboard navigation (arrow keys, enter, space)
    //   - WCAG 2.2 AAA: Properly labeled for assistive technology
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - Option display text can be customized by consumers via CSS or wrapping

    let {
        label,
        value = $bindable(""),
        ...restProps
    }: {
        /** Accessible label for the select element */
        label: string;
        /** Currently selected ROYGB status value, bindable */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RoygbStatusInput: a select with Red/Orange/Yellow/Green/Blue status options -->
<select aria-label={label} bind:value {...restProps}>
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="yellow">Yellow</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
</select>
