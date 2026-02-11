<script lang="ts">
    // Component: CareCard
    //
    // A headless care card component for displaying healthcare-related guidance.
    // Inspired by NHS England care card patterns: urgent, non-urgent, immediate.
    //
    // Usage:
    //   <CareCard type="non-urgent" heading="Speak to a GP if:">
    //     <ul><li>you have symptoms</li></ul>
    //   </CareCard>
    //
    // Accessibility:
    //   - Role: region with aria-label
    //   - Heading provides structure
    //   - data-type for consumer styling based on urgency

    import type { Snippet } from "svelte";

    let {
        type = "non-urgent",
        heading,
        label = undefined,
        children,
        ...restProps
    }: {
        type?: "non-urgent" | "urgent" | "immediate";
        heading: string;
        label?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<section
    role="region"
    aria-label={label ?? heading}
    data-type={type}
    {...restProps}
>
    <h2>{heading}</h2>
    {@render children()}
</section>
