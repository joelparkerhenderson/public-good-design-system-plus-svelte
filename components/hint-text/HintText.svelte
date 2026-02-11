<script lang="ts">
    // Component: HintText
    //
    // A small descriptive text for form controls or information.
    //
    // Props:
    //   id       — id for aria-describedby linking
    //   children — text content
    //
    // Usage:
    //   <HintText id="name-hint">Full legal name as on passport</HintText>

    import type { Snippet } from "svelte";

    let {
        id = undefined,
        children,
        ...restProps
    }: {
        id?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<span {id} {...restProps}>
    {@render children()}
</span>
