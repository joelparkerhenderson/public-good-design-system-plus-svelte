<script lang="ts">
    // StepListItem component
    //
    // A single step item within a StepList ordered list. Renders a semantic <li>
    // element representing one stage in a multi-step process, workflow, wizard, or
    // multi-part form. The status prop controls ARIA attributes and a data-status
    // attribute for consumer styling, communicating progress to assistive technology.
    //
    // Props:
    //   status — "completed" | "current" | "upcoming", default "upcoming". The step's progress state.
    //   children — Snippet, required. Step content.
    //   ...restProps — additional HTML attributes spread onto the <li>.
    //
    // Syntax:
    //   <StepListItem status="current">Step text</StepListItem>
    //
    // Examples:
    //   <!-- Checkout step list with status indicators -->
    //   <StepList label="Checkout process">
    //     <StepListItem status="completed">Cart</StepListItem>
    //     <StepListItem status="current">Shipping</StepListItem>
    //     <StepListItem status="upcoming">Payment</StepListItem>
    //     <StepListItem status="upcoming">Confirmation</StepListItem>
    //   </StepList>
    //
    // Keyboard:
    //   - None directly -- standard list item with no interactive behavior
    //
    // Accessibility:
    //   - Semantic <li> element provides list item semantics within the parent <ol>
    //   - aria-current="step" indicates the currently active step (when status is "current")
    //   - data-status attribute communicates step state for consumer styling hooks
    //   - Screen readers announce list position (e.g. "2 of 4") from the parent <ol>
    //
    // Internationalization:
    //   - All content is provided through the children snippet
    //   - No hardcoded strings in the component
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Consumer can target [data-status] for visual step state differentiation
    //   - Defaults status to "upcoming" when not specified
    //
    // References:
    //   - WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current

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
