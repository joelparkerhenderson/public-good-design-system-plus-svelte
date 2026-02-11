<script lang="ts">
    // Component: InformationCallout
    //
    // A headless callout container for important information.
    //
    // Props:
    //   label    — accessible name
    //   children — callout content
    //
    // Usage:
    //   <InformationCallout label="Note">
    //     <p>This feature is in beta.</p>
    //   </InformationCallout>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        label: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<aside role="note" aria-label={label} {...restProps}>
    {@render children()}
</aside>
