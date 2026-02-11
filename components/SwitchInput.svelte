<script lang="ts">
    // Component: SwitchInput
    //
    // A headless toggle switch using role="switch" with aria-checked.
    // Supports keyboard activation via Space key.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   checked  — bindable boolean for on/off state
    //   disabled — whether the switch is disabled
    //
    // Usage:
    //   <SwitchInput label="Enable notifications" bind:checked />

    let {
        label,
        checked = $bindable(false),
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Whether the switch is on. Bindable. */
        checked?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === " " && !disabled) {
            event.preventDefault();
            checked = !checked;
        }
    }
</script>

<button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    {disabled}
    onclick={() => { if (!disabled) checked = !checked; }}
    onkeydown={handleKeydown}
    {...restProps}
></button>
