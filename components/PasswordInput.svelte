<script lang="ts">
    // Component: PasswordInput
    //
    // A headless password input with optional show/hide toggle.
    //
    // Props:
    //   label       — accessible name
    //   value       — bindable password value
    //   showToggle  — whether to show visibility toggle (default true)
    //   toggleLabel — label for toggle button
    //   required    — whether required
    //   disabled    — whether disabled
    //
    // Usage:
    //   <PasswordInput label="Password" bind:value />

    let {
        label,
        value = $bindable(""),
        showToggle = true,
        toggleLabel = "Show password",
        required = false,
        disabled = false,
        ...restProps
    }: {
        label: string;
        value?: string;
        showToggle?: boolean;
        toggleLabel?: string;
        required?: boolean;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    let visible = $state(false);
</script>

<div {...restProps}>
    <input
        type={visible ? "text" : "password"}
        aria-label={label}
        bind:value
        {required}
        {disabled}
        autocomplete="current-password"
    />
    {#if showToggle}
        <button
            type="button"
            aria-label={toggleLabel}
            aria-pressed={visible}
            onclick={() => visible = !visible}
        >
            {toggleLabel}
        </button>
    {/if}
</div>
