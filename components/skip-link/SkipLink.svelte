<script lang="ts">
    // Component: SkipLink
    //
    // A headless skip navigation link that allows keyboard users to bypass
    // repetitive navigation and jump directly to main content.
    //
    // Props:
    //   href     — the target anchor (default "#content")
    //   label    — the link text (default "Skip to content")
    //
    // Usage:
    //   <SkipLink />
    //   <SkipLink href="#main" label="Skip to main content" />

    let {
        href = "#content",
        label = "Skip to content",
        ...restProps
    }: {
        /** Target anchor. */
        href?: string;
        /** Link text. */
        label?: string;
        [key: string]: unknown;
    } = $props();
</script>

<a {href} {...restProps}>{label}</a>
