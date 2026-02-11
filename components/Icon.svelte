<script lang="ts">
    // Component: Icon
    //
    // A headless icon wrapper. Provides role="img" with accessible label,
    // or aria-hidden for decorative icons. Consumer provides the icon content.
    //
    // Usage:
    //   <Icon label="Close">×</Icon>
    //   <Icon decorative>★</Icon>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        decorative = false,
        children,
        ...restProps
    }: {
        label?: string;
        decorative?: boolean;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<span
    role={decorative ? undefined : "img"}
    aria-label={label}
    aria-hidden={decorative || undefined}
    {...restProps}
>
    {@render children()}
</span>
