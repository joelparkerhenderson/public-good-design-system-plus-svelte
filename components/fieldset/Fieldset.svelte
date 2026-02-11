<script lang="ts">
    // Component: Fieldset
    //
    // A headless fieldset with legend. Groups related form controls.
    //
    // Props:
    //   legend   — text for the <legend> element
    //   disabled — disables all controls in the fieldset
    //   children — grouped form controls
    //
    // Usage:
    //   <Fieldset legend="Contact info">
    //     <label>Email <input type="email" /></label>
    //     <label>Phone <input type="tel" /></label>
    //   </Fieldset>

    import type { Snippet } from "svelte";

    let {
        legend,
        disabled = false,
        children,
        ...restProps
    }: {
        /** Legend text for the group. */
        legend: string;
        /** Whether all controls are disabled. */
        disabled?: boolean;
        /** Grouped form controls. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<fieldset {disabled} {...restProps}>
    <legend>{legend}</legend>
    {@render children()}
</fieldset>
