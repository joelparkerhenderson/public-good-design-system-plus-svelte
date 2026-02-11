<script lang="ts">
    // Component: ThemeChooser
    //
    // A headless theme selection control. Consumer provides theme options.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable selected theme
    //   children — snippet for theme options
    //
    // Usage:
    //   <ThemeChooser label="Theme" bind:value>
    //     <option value="light">Light</option>
    //     <option value="dark">Dark</option>
    //   </ThemeChooser>

    import type { Snippet } from "svelte";

    let {
        label,
        value = $bindable(""),
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Selected theme. Bindable. */
        value?: string;
        /** Theme options. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<select aria-label={label} bind:value {...restProps}>
    {@render children()}
</select>
