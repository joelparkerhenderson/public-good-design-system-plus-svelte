<script lang="ts">
    // TourGuideStep component
    //
    // A single step within a TourGuide guided tour. Each step represents one
    // screen or instruction in the tour. The step conditionally renders based
    // on whether its index matches the current step of the tour.
    //
    // Props:
    //   label — accessible name for the step via aria-label
    //   current — whether this step is the currently visible step
    //   stepNumber — 1-based step number for aria-roledescription
    //   totalSteps — total number of steps for progress info
    //   children — step content snippet
    //
    // Usage:
    //   <TourGuide label="Getting started" bind:active>
    //     <TourGuideStep label="Welcome" current={step === 0} stepNumber={1} totalSteps={3}>
    //       <p>Welcome to the app!</p>
    //     </TourGuideStep>
    //     <TourGuideStep label="Features" current={step === 1} stepNumber={2} totalSteps={3}>
    //       <p>Here are the features.</p>
    //     </TourGuideStep>
    //     <TourGuideStep label="Finish" current={step === 2} stepNumber={3} totalSteps={3}>
    //       <p>You're all set!</p>
    //     </TourGuideStep>
    //   </TourGuide>
    //
    // Accessibility:
    //   - Uses role="group" to group step content semantically
    //   - aria-label provides the accessible name for the step
    //   - aria-roledescription="step" tells screen readers this is a step
    //   - aria-current="step" indicates the active step
    //   - aria-hidden="true" hides inactive steps from assistive technology
    //   - Step progress communicated via "Step N of M" aria-label suffix
    //
    // Internationalization:
    //   - All user-facing text comes through props
    //   - No hardcoded strings

    import type { Snippet } from "svelte";

    let {
        label,
        current = false,
        stepNumber,
        totalSteps,
        children,
        ...restProps
    }: {
        /** Accessible label for this step. */
        label: string;
        /** Whether this step is the currently visible step. */
        current?: boolean;
        /** 1-based step number (e.g. 1, 2, 3). */
        stepNumber?: number;
        /** Total number of steps in the tour. */
        totalSteps?: number;
        /** Step content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    // Build the full accessible label including step progress when available
    let fullLabel = $derived(
        stepNumber != null && totalSteps != null
            ? `${label} (Step ${stepNumber} of ${totalSteps})`
            : label
    );
</script>

<!-- TourGuideStep component: a single step in a guided tour -->
<div
    role="group"
    aria-roledescription="step"
    aria-label={fullLabel}
    aria-current={current ? "step" : undefined}
    aria-hidden={!current ? "true" : undefined}
    hidden={!current ? true : undefined}
    {...restProps}
>
    {@render children()}
</div>
