<script lang="ts">
    // Component: Editable
    //
    // A headless inline-editable text component. Displays value as text,
    // switches to input on activation. Enter confirms, Escape cancels.
    //
    // Props:
    //   value    — bindable current text value
    //   label    — accessible name for the edit control
    //   editing  — bindable boolean for edit mode
    //   disabled — whether editing is disabled
    //
    // Usage:
    //   <Editable label="Name" bind:value />
    //   <Editable label="Title" bind:value bind:editing />

    let {
        value = $bindable(""),
        label,
        editing = $bindable(false),
        disabled = false,
        ...restProps
    }: {
        /** Current text value. Bindable. */
        value?: string;
        /** Accessible label for the editable control. */
        label: string;
        /** Whether the component is in edit mode. Bindable. */
        editing?: boolean;
        /** Whether editing is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    let draft = $state(value);

    function startEditing() {
        if (disabled) return;
        draft = value;
        editing = true;
    }

    function confirm() {
        value = draft;
        editing = false;
    }

    function cancel() {
        draft = value;
        editing = false;
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.preventDefault();
            confirm();
        } else if (event.key === "Escape") {
            event.preventDefault();
            cancel();
        }
    }
</script>

{#if editing}
    <input
        type="text"
        aria-label={label}
        bind:value={draft}
        {onkeydown}
        {...restProps}
    />
{:else}
    <span
        role="button"
        tabindex={disabled ? -1 : 0}
        aria-label={label}
        aria-disabled={disabled || undefined}
        onclick={startEditing}
        onkeydown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startEditing(); } }}
        {...restProps}
    >
        {value}
    </span>
{/if}
