<script lang="ts">
    // Figure component
    //
    // A headless figure container.

    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- Figure component: TODO -->
<figure
    role="img"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</figure>
