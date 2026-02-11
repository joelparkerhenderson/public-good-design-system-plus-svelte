<script lang="ts">
    // Component: ContentsList — nav with ordered list of section links.

    import type { Snippet } from "svelte";

    let {
        label, children, ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>

<nav aria-label={label} {...restProps}>
    <ol>{@render children()}</ol>
</nav>
