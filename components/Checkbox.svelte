<script lang="ts">
    // Checkbox component
    //
    // A headless checkbox built on native <input type="checkbox"> wrapped in a
    // <label> element for click-to-toggle behavior. Supports checked, unchecked,
    // and indeterminate states, making it suitable for forms, settings, filters,
    // preference menus, and select-all patterns. The checked prop uses $bindable()
    // for two-way binding with the parent component.
    //
    // Props:
    //   checked — boolean, default false, bindable. Whether the checkbox is checked.
    //   indeterminate — boolean, default false. Whether the checkbox is in an indeterminate state.
    //   label — string, required. Visible text label for the checkbox.
    //   disabled — boolean, default false. Whether the checkbox is disabled.
    //   required — boolean, default false. Whether the checkbox is required for form submission.
    //   name — string, optional. Form field name.
    //   id — string, optional. Element identifier.
    //   value — string, optional. Form submission value.
    //   describedby — string, optional. ID of an element that describes this checkbox, mapped to aria-describedby.
    //   ...restProps — additional HTML attributes spread onto the <label>.
    //
    // Syntax:
    //   <Checkbox label="Accept terms" bind:checked={accepted} />
    //
    // Examples:
    //   <!-- Required checkbox for form submission -->
    //   <Checkbox label="I agree to the terms" bind:checked={agreed} required />
    //
    //   <!-- Indeterminate checkbox for select-all pattern -->
    //   <Checkbox label="Select all" indeterminate />
    //
    // Keyboard:
    //   - Space: Toggle the checkbox on or off (native browser behavior)
    //   - Tab: Move focus to the checkbox (native browser behavior)
    //
    // Accessibility:
    //   - Implicit checkbox role from <input type="checkbox">
    //   - aria-checked managed natively by the browser based on checked state
    //   - aria-describedby set from the describedby prop for supplementary descriptions
    //   - required attribute indicates the checkbox must be checked before form submission
    //   - <label> wrapping provides click-to-toggle and accessible name association
    //
    // Internationalization:
    //   - Label text comes through the label prop; no hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Uses $bindable() for two-way checked state binding
    //   - restProps spread onto the <label>, not the <input>
    //
    // References:
    //   - WAI-ARIA Checkbox Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/checkbox/

    let {
        checked = $bindable(false),
        indeterminate = false,
        label,
        disabled = false,
        required = false,
        name = undefined,
        id = undefined,
        value = undefined,
        describedby = undefined,
        ...restProps
    }: {
        checked?: boolean;
        indeterminate?: boolean;
        label: string;
        disabled?: boolean;
        required?: boolean;
        name?: string;
        id?: string;
        value?: string;
        describedby?: string;
        [key: string]: unknown;
    } = $props();
</script>

<label {...restProps}>
    <input
        type="checkbox"
        bind:checked
        {indeterminate}
        {disabled}
        {required}
        {name}
        {id}
        {value}
        aria-describedby={describedby}
    />
    {label}
</label>
