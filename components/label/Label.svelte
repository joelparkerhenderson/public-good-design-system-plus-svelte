<script lang="ts">
    // Component: Label
    //
    // A headless <label> element linked to a form control.
    //
    // Props:
    //   for_     — the id of the associated form control (htmlFor)
    //   children — label text content
    //
    // Usage:
    //   <Label for_="email">Email address</Label>
    //   <input id="email" type="email" />

    import type { Snippet } from "svelte";

    let {
        for: forProp = undefined,
        children,
        ...restProps
    }: {
        for?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<label for={forProp} {...restProps}>
    {@render children()}
</label>
