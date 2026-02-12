<script lang="ts">
    // AngleSliderRangeInput Component
    //
    // A headless slider component for selecting an angle value (0–360 degrees).
    // Built on the native range input with ARIA slider semantics.
    //
    // Usage:
    //   <AngleSliderRangeInput label="Rotation" bind:value={angle} />
    //   <AngleSliderRangeInput label="Direction" value={90} min={0} max={360} step={15} />
    //
    // Props:
    //   - value: Current angle in degrees (default: 0, bindable)
    //   - min: Minimum angle (default: 0)
    //   - max: Maximum angle (default: 360)
    //   - step: Step increment (default: 1)
    //   - label: Accessible label for the slider (required)
    //   - disabled: Whether the slider is disabled (default: false)
    //   - name: Form field name
    //   - id: Element ID
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: slider (implicit from input[type="range"])
    //   - Keyboard: Arrow keys adjust value, Home/End go to min/max
    //   - ARIA: aria-label, aria-valuemin, aria-valuemax, aria-valuenow, aria-valuetext
    //
    // Internationalization:
    //   - Label text comes through the label prop
    //   - Value text suffix (e.g., "degrees") comes through the valueTextSuffix prop

    let {
        value = $bindable(0),
        min = 0,
        max = 360,
        step = 1,
        label,
        disabled = false,
        name = undefined,
        id = undefined,
        valueTextSuffix = "°",
        ...restProps
    }: {
        /** Current angle in degrees */
        value?: number;
        /** Minimum angle */
        min?: number;
        /** Maximum angle */
        max?: number;
        /** Step increment */
        step?: number;
        /** Accessible label for the slider */
        label: string;
        /** Whether the slider is disabled */
        disabled?: boolean;
        /** Form field name */
        name?: string;
        /** Element ID */
        id?: string;
        /** Suffix for the value text (default: "°") */
        valueTextSuffix?: string;
        [key: string]: unknown;
    } = $props();

    // Formatted value text for screen readers (e.g., "90°")
    let valueText = $derived(`${value}${valueTextSuffix}`);
</script>

<!-- AngleSliderRangeInput: a range input for selecting an angle in degrees -->
<input
    type="range"
    bind:value
    {min}
    {max}
    {step}
    {disabled}
    {name}
    {id}
    aria-label={label}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    aria-valuetext={valueText}
    {...restProps}
/>
