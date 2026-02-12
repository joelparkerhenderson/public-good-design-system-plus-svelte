<script lang="ts">
    // RedAmberGreenStatusInput component
    //
    // A headless RAG (Red/Amber/Green) status input component that renders
    // a select element with three options for traffic-light status selection.
    // RAG status is widely used in project management and dashboards.
    //
    // Usage:
    //   <RedAmberGreenStatusInput label="Project status" bind:value={status} />
    //   <RedAmberGreenStatusInput label="Health check" value="green" />
    //
    // Props:
    //   - label: Accessible label for the select element (required)
    //   - value: The currently selected status value, bindable (default: "")
    //   - ...restProps: Any additional HTML attributes spread onto the select
    //
    // Options:
    //   - "red": Critical problem, needs immediate attention
    //   - "amber": Caution, minor issues or at risk
    //   - "green": On track, everything is fine
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
        /** Currently selected RAG status value, bindable */
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- RedAmberGreenStatusInput: a select with Red/Amber/Green status options -->
<select
    aria-label={label}
    bind:value
    {...restProps}
>
    <option value="red">Red</option>
    <option value="amber">Amber</option>
    <option value="green">Green</option>
</select>
