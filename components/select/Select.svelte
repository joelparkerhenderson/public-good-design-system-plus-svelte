<script lang="ts">
    // Component: Select
    //
    // A headless native <select> element with aria-label.
    // Children should be <option> elements provided by the consumer.
    //
    // Props:
    //   label    — accessible name via aria-label
    //   value    — bindable selected value
    //   required — whether required
    //   disabled — whether disabled
    //   children — snippet for <option> elements
    //
    // Usage:
    //   <Select label="Country" bind:value>
    //     <option value="us">United States</option>
    //     <option value="uk">United Kingdom</option>
    //   </Select>

    import type { Snippet } from "svelte";

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current selected value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        /** Option elements to render inside. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<select
    aria-label={label}
    bind:value
    {required}
    {disabled}
    {...restProps}
>
    {@render children()}
</select>
