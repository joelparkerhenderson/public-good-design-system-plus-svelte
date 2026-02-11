<script lang="ts">
    // Component: PostalCodeView
    //
    // A headless span element for displaying a postal/zip code.
    // Renders the provided text in a <span> element.
    //
    // Props:
    //   text — the postal code string to display
    //
    // Usage:
    //   <PostalCodeView text="90210" />

    let {
        text = "",
        ...restProps
    }: {
        /** The postal code text to display. */
        text?: string;
        [key: string]: unknown;
    } = $props();
</script>

<span {...restProps}>{text}</span>
