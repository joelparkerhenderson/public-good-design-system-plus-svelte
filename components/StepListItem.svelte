<script lang="ts">
    // StepListItem component
    //
    // A single step item within a StepList ordered list. Renders a semantic
    // <li> element representing one stage in a multi-step process, workflow,
    // wizard, or multi-part form. The status prop controls ARIA attributes
    // to communicate progress to assistive technology.
    //
    // Props:
    //   status — "completed" | "current" | "upcoming" (default: "upcoming")
    //   children — step content snippet
    //
    // Usage:
    //   <StepList label="Checkout process">
    //     <StepListItem status="completed">Cart</StepListItem>
    //     <StepListItem status="current">Shipping</StepListItem>
    //     <StepListItem status="upcoming">Payment</StepListItem>
    //     <StepListItem status="upcoming">Confirmation</StepListItem>
    //   </StepList>
    //
    // Accessibility:
    //   - Semantic <li> element provides list item semantics within the parent <ol>
    //   - aria-current="step" indicates the currently active step
    //   - data-status attribute communicates step state for consumer styling
    //   - Screen readers announce list position (e.g. "2 of 4") from the parent <ol>
    //
    // Internationalization:
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        status = "upcoming",
        children,
        ...restProps
    }: {
        /** Step status: "completed", "current", or "upcoming". */
        status?: "completed" | "current" | "upcoming";
        /** Step content. */
        children: Snippet;
        /** Additional HTML attributes spread onto the <li>. */
        [key: string]: unknown;
    } = $props();
</script>

<!-- StepListItem component: a single step in a multi-step process -->
<li
    aria-current={status === "current" ? "step" : undefined}
    data-status={status}
    {...restProps}
>
    {@render children()}
</li>
