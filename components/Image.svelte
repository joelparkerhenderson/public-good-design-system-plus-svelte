<script lang="ts">
    // Component: Image
    //
    // A headless image wrapper. Provides alt text and optional caption
    // via <figure>/<figcaption>.
    //
    // Usage:
    //   <Image src="/photo.jpg" alt="Description" />
    //   <Image src="/photo.jpg" alt="Desc" caption="Photo credit" />

    let {
        src,
        alt,
        caption = undefined,
        loading = undefined,
        ...restProps
    }: {
        src: string;
        alt: string;
        caption?: string;
        loading?: "lazy" | "eager";
        [key: string]: unknown;
    } = $props();
</script>

{#if caption}
    <figure {...restProps}>
        <img {src} {alt} {loading} />
        <figcaption>{caption}</figcaption>
    </figure>
{:else}
    <img {src} {alt} {loading} {...restProps} />
{/if}
