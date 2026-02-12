<script lang="ts">
    // StepList component
    //
    // A headless step list that renders a semantic ordered list (<ol>) with an
    // accessible label. Used to display a sequence of steps in a process,
    // workflow, wizard, or multi-stage form. The consumer provides step items
    // through the children snippet, typically as <li> elements or StepListItem components.
    //
    // Props:
    //   label — string, required. Accessible label for the steps list via aria-label.
    //   children — Snippet, required. Step items (should be <li> elements).
    //   ...restProps — additional HTML attributes spread onto the <ol>.
    //
    // Syntax:
    //   <StepList label="Checkout process">...</StepList>
    //
    // Examples:
    //   <!-- Step list with plain li elements -->
    //   <StepList label="Checkout process">
    //     <li>Cart</li>
    //     <li aria-current="step">Shipping</li>
    //     <li>Payment</li>
    //     <li>Confirmation</li>
    //   </StepList>
    //
    // Keyboard:
    //   - None directly -- standard list navigation is handled by screen readers
    //
    // Accessibility:
    //   - Semantic <ol> element conveys ordered sequence to screen readers
    //   - aria-label provides the accessible name for the list
    //   - Consumers can add aria-current="step" to the active step <li>
    //   - Screen readers announce the list with its label and item count
    //
    // Internationalization:
    //   - The label prop externalizes user-facing text for translation
    //   - All step content is provided through the children snippet
    //   - No hardcoded strings in the component
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Uses Svelte 5 $props() rune for prop destructuring
    //   - Spreads ...restProps on the <ol> element for consumer extensibility
    //
    // References:
    //   - WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
    //   - WAI-ARIA landmark regions: https://www.w3.org/WAI/ARIA/apd/practices/landmark-regions/

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for the steps list */
        label: string;
        /** Step items (should be <li> elements) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- StepList: an ordered list of process steps -->
<ol
    aria-label={label}
    {...restProps}
>
    {@render children()}
</ol>
