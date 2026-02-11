<script lang="ts">
    // Component: Combobox
    //
    // A headless combobox (autocomplete input + listbox).
    // Combines a text input with a dropdown list of suggestions.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable current input value
    //   open — bindable dropdown visibility
    //   children — snippet for option elements in the dropdown
    //
    // Usage:
    //   <Combobox label="Search" bind:value bind:open>
    //     <div role="option" tabindex="-1">Option 1</div>
    //   </Combobox>

    import type { Snippet } from "svelte";

    const listboxId = `combobox-listbox-${Math.random().toString(36).slice(2, 9)}`;

    let {
        label,
        value = $bindable(""),
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current input value. Bindable. */
        value?: string;
        /** Whether dropdown is open. Bindable. */
        open?: boolean;
        /** Dropdown option elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            open = false;
        }
    }
</script>

<div {...restProps}>
    <input
        type="text"
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        bind:value
        {onkeydown}
    />
    {#if open}
        <div role="listbox" id={listboxId} aria-label={label}>
            {@render children()}
        </div>
    {/if}
</div>
