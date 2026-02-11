<script lang="ts">
    // Component: CalendarInput
    //
    // A headless date input component that wraps the native HTML
    // <input type="date">. Provides accessible labeling and ARIA attributes
    // for date selection.
    //
    // Usage:
    //   <CalendarInput label="Start date" bind:value={startDate} />
    //   <CalendarInput label="Birthday" value="1990-01-15" min="1900-01-01" max="2025-12-31" />
    //
    // Props:
    //   - value: The selected date value in YYYY-MM-DD format (bindable)
    //   - label: Accessible label for the date input (required)
    //   - min: Minimum selectable date (YYYY-MM-DD format)
    //   - max: Maximum selectable date (YYYY-MM-DD format)
    //   - disabled: Whether the input is disabled (default: false)
    //   - required: Whether the input is required (default: false)
    //   - name: Form field name
    //   - id: Element ID
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: implicit from input[type="date"]
    //   - Keyboard: Browser-native date picker keyboard interactions
    //   - ARIA: aria-label for screen reader identification
    //
    // Internationalization:
    //   - Label comes through the label prop
    //   - Date format follows browser locale settings

    let {
        value = $bindable(""),
        label,
        min = undefined,
        max = undefined,
        disabled = false,
        required = false,
        name = undefined,
        id = undefined,
        ...restProps
    }: {
        /** The selected date value in YYYY-MM-DD format */
        value?: string;
        /** Accessible label for the date input */
        label: string;
        /** Minimum selectable date (YYYY-MM-DD) */
        min?: string;
        /** Maximum selectable date (YYYY-MM-DD) */
        max?: string;
        /** Whether the input is disabled */
        disabled?: boolean;
        /** Whether the input is required */
        required?: boolean;
        /** Form field name */
        name?: string;
        /** Element ID */
        id?: string;
        [key: string]: unknown;
    } = $props();
</script>

<!-- CalendarInput: a native date input with accessible labeling -->
<input
    type="date"
    bind:value={value}
    {min}
    {max}
    {disabled}
    {required}
    {name}
    {id}
    aria-label={label}
    {...restProps}
/>
