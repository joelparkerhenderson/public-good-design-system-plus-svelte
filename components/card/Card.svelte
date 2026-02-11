<script lang="ts">
    // Component: Card
    //
    // A headless card component that groups related content into a semantic
    // article element. Optionally includes a heading and link.
    //
    // Usage:
    //   <Card><h3>Title</h3><p>Content</p></Card>
    //   <Card heading="Product" href="/products/1"><p>Description</p></Card>
    //
    // Accessibility:
    //   - Role: article (implicit from <article>)
    //   - Optional aria-label for named landmark
    //   - Heading provides document outline structure

    import type { Snippet } from "svelte";

    let {
        heading = undefined,
        headingLevel = 3,
        href = undefined,
        label = undefined,
        children,
        ...restProps
    }: {
        heading?: string;
        headingLevel?: 2 | 3 | 4 | 5 | 6;
        href?: string;
        label?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<article aria-label={label} {...restProps}>
    {#if heading}
        {#if headingLevel === 2}
            <h2>{#if href}<a {href}>{heading}</a>{:else}{heading}{/if}</h2>
        {:else if headingLevel === 3}
            <h3>{#if href}<a {href}>{heading}</a>{:else}{heading}{/if}</h3>
        {:else if headingLevel === 4}
            <h4>{#if href}<a {href}>{heading}</a>{:else}{heading}{/if}</h4>
        {:else if headingLevel === 5}
            <h5>{#if href}<a {href}>{heading}</a>{:else}{heading}{/if}</h5>
        {:else if headingLevel === 6}
            <h6>{#if href}<a {href}>{heading}</a>{:else}{heading}{/if}</h6>
        {/if}
    {/if}
    {@render children()}
</article>
