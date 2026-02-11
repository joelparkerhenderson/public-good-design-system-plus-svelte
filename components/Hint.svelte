<script lang="ts">
    // Component: Hint
    //
    // Displays a hint/help text associated with a form control.
    //
    // Props:
    //   id       — id for aria-describedby linking
    //   children — hint content
    //
    // Usage:
    //   <Hint id="email-hint">Enter your work email</Hint>
    //   <input aria-describedby="email-hint" />

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

<p {id} {...restProps}>
    {@render children()}
</p>
