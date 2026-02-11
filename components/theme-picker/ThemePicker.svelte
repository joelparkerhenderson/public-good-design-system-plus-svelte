<script lang="ts">
    // Component: ThemePicker
    //
    // A headless theme picker using radio buttons in a fieldset.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for radio button options
    //
    // Usage:
    //   <ThemePicker label="Theme">
    //     <label><input type="radio" name="theme" value="light" /> Light</label>
    //     <label><input type="radio" name="theme" value="dark" /> Dark</label>
    //   </ThemePicker>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Theme radio options. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<fieldset role="radiogroup" aria-label={label} {...restProps}>
    {@render children()}
</fieldset>
