<script lang="ts">
    // RatingGroup component
    //
    // A headless rating container that renders a <fieldset> with role="radiogroup" and
    // an accessible label. It allows users to select a rating value from a set of
    // discrete options, typically stars, hearts, thumbs, or numeric scales. Each option
    // functions as a radio button, allowing exactly one value to be selected at a time.
    // Commonly used in product reviews, feedback forms, survey questionnaires, and
    // content evaluation interfaces. This is a compound component parent; use with
    // RatingGroupItem for individual rating options.
    //
    // Props:
    //   label — string, required. Accessible name describing what is being rated via aria-label.
    //   children — Snippet, required. The rating option elements (RatingGroupItem instances).
    //   ...restProps — additional HTML attributes spread onto the <fieldset>.
    //
    // Syntax:
    //   <RatingGroup label="Rate this product">{children}</RatingGroup>
    //
    // Examples:
    //   <!-- Star rating group -->
    //   <RatingGroup label="Rate this product">
    //     <label><input type="radio" name="rating" value="1" /> 1 star</label>
    //     <label><input type="radio" name="rating" value="2" /> 2 stars</label>
    //     <label><input type="radio" name="rating" value="3" /> 3 stars</label>
    //     <label><input type="radio" name="rating" value="4" /> 4 stars</label>
    //     <label><input type="radio" name="rating" value="5" /> 5 stars</label>
    //   </RatingGroup>
    //
    // Keyboard:
    //   - Arrow Right / Arrow Down: move focus to and select the next rating option
    //   - Arrow Left / Arrow Up: move focus to and select the previous rating option
    //   - Tab: move focus into/out of the radio group
    //
    // Accessibility:
    //   - role="radiogroup" identifies the fieldset as a group of radio options
    //   - aria-label describes what is being rated
    //   - <fieldset> provides semantic grouping
    //
    // Internationalization:
    //   - The label prop is the only text; all option labels come through children
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - This is a compound component parent; use with RatingGroupItem
    //   - No internal state — purely a structural wrapper with ARIA semantics
    //
    // References:
    //   - WAI-ARIA Radiogroup Role: https://www.w3.org/TR/wai-aria-1.2/#radiogroup
    //   - WAI-ARIA Radio Group Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/radio/
    
    import type { Snippet } from "svelte";
    let {
        label,
        children,
        ...restProps
    }: { label: string; children: Snippet; [key: string]: unknown } = $props();
</script>

<!-- RatingGroup component: a fieldset with radiogroup role for selecting a discrete rating value -->
<fieldset role="radiogroup" aria-label={label} {...restProps}>
    {@render children()}
</fieldset>
