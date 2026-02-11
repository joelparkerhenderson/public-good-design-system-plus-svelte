<script lang="ts">
    // Component: SelectWithExtras
    //
    // A headless enhanced select with extra content areas (e.g. before/after).
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable selected value
    //   children — snippet for option elements
    //   before — optional snippet rendered before the select
    //   after — optional snippet rendered after the select
    //
    // Usage:
    //   <SelectWithExtras label="Country" bind:value>
    //     {#snippet before()}<span>Flag:</span>{/snippet}
    //     <option value="us">USA</option>
    //   </SelectWithExtras>

    import type { Snippet } from "svelte";

    let {
        label,
        value = $bindable(""),
        required = false,
        disabled = false,
        children,
        before,
        after,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Selected value. Bindable. */
        value?: string;
        /** Whether required. */
        required?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        /** Option elements. */
        children: Snippet;
        /** Content before the select. */
        before?: Snippet;
        /** Content after the select. */
        after?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div {...restProps}>
    {#if before}
        {@render before()}
    {/if}
    <select aria-label={label} bind:value {required} {disabled}>
        {@render children()}
    </select>
    {#if after}
        {@render after()}
    {/if}
</div>
