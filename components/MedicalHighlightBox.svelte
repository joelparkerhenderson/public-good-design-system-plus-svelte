<script lang="ts">
    // MedicalHighlightBox component
    //
    // A headless container for highlighting important medical information.
    // Uses <aside role="note"> to semantically mark the content as a
    // supplementary note that is relevant to the surrounding content.
    //
    // Usage:
    //   <MedicalHighlightBox label="Allergy warning">
    //     <p>Patient is allergic to penicillin.</p>
    //   </MedicalHighlightBox>
    //
    // Props:
    //   - label: Accessible name for the highlight box (required)
    //   - children: Snippet for the box content
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - role="note" marks the content as supplementary information
    //   - aria-label provides an accessible name for the region
    //   - Screen readers announce the label when entering the region
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - All content comes through children snippet
    //   - No hardcoded user-facing strings

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible name for the medical highlight box */
        label: string;
        /** The highlight box content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<aside
    role="note"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</aside>
