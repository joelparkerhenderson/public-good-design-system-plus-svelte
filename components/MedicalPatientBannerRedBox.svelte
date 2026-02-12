<script lang="ts">
    // MedicalPatientBannerRedBox component
    //
    // A headless container for critical patient danger information.
    // Uses <aside role="alert"> to immediately announce urgent content
    // to screen readers via an assertive live region.
    //
    // Usage:
    //   <MedicalPatientBannerRedBox label="Critical allergy">
    //     <p>Patient has a life-threatening allergy to latex.</p>
    //   </MedicalPatientBannerRedBox>
    //
    // Props:
    //   - label: Accessible name for the danger box (required)
    //   - children: Snippet for the danger box content
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - role="alert" creates an assertive live region
    //   - Screen readers immediately announce the content
    //   - aria-label provides an accessible name for the region
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
        /** Accessible name for the danger box */
        label: string;
        /** The danger box content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- MedicalPatientBannerRedBox component: TODO -->
<aside
    role="alert"
    aria-label={label}
    {...restProps}
>
    {@render children()}
</aside>
