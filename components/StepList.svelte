<script lang="ts">
    // StepList component
    //
    // A headless step list component that renders a semantic ordered list (<ol>)
    // with an accessible label. Used to display a sequence of steps in a process,
    // workflow, wizard, or multi-stage form. The consumer provides all step items
    // through the children snippet.
    //
    // Usage:
    //   <StepList label="Checkout process">
    //     <li>Cart</li>
    //     <li>Shipping</li>
    //     <li>Payment</li>
    //     <li>Confirmation</li>
    //   </StepList>
    //
    // Props:
    //   - label: Accessible label for the steps list (required)
    //   - children: Snippet for step items (should be <li> elements)
    //   - ...restProps: Any additional HTML attributes spread onto the ol
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
