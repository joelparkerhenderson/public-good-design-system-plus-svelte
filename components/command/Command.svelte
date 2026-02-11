<script lang="ts">
    // Component: Command — a command palette with search + listbox.

    import type { Snippet } from "svelte";

    let {
        label, placeholder = undefined, value = $bindable(""), children, ...restProps
    }: {
        label: string; placeholder?: string; value?: string;
        children: Snippet; [key: string]: unknown;
    } = $props();
</script>

<div role="search" aria-label={label} {...restProps}>
    <input type="search" bind:value={value} aria-label={label}
        placeholder={placeholder} autocomplete="off" />
    <div role="listbox" aria-label={label}>
        {@render children()}
    </div>
</div>
