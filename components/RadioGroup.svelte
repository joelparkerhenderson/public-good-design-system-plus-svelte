<script lang="ts">
    // Component: RadioGroup
    //
    // A headless radio group using a fieldset with role="radiogroup".
    // Consumer provides radio button children.
    //
    // Props:
    //   label — accessible group label via aria-label on the fieldset
    //   children — snippet for radio buttons
    //
    // Usage:
    //   <RadioGroup label="Size">
    //     <label><input type="radio" name="size" value="s" /> Small</label>
    //     <label><input type="radio" name="size" value="m" /> Medium</label>
    //   </RadioGroup>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the group. */
        label: string;
        /** Radio button elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<fieldset role="radiogroup" aria-label={label} {...restProps}>
    {@render children()}
</fieldset>
