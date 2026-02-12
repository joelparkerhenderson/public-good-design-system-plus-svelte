<script lang="ts">
    // TourGuide component
    //
    // A headless guided walkthrough overlay that presents step-by-step instructions
    // to users. Renders as a modal dialog when active and can be dismissed with the
    // Escape key. Commonly used for onboarding flows, feature tutorials, or
    // contextual help systems. Step content, navigation buttons, and progress
    // indicators are provided by the consumer as children.
    //
    // Props:
    //   label — string, required. Accessible name for the tour dialog via aria-label.
    //   active — boolean, default false. Whether the tour is visible; bindable with bind:active.
    //   children — Snippet, required. Tour step content, navigation controls, etc.
    //   ...restProps — additional HTML attributes spread onto the dialog <div>.
    //
    // Syntax:
    //   <TourGuide label="Getting started" bind:active>...</TourGuide>
    //
    // Examples:
    //   <!-- Tour with step content and dismiss -->
    //   <TourGuide label="Getting started" bind:active>
    //     <p>Welcome to the app!</p>
    //     <button onclick={() => active = false}>Got it</button>
    //   </TourGuide>
    //
    // Keyboard:
    //   - Escape: closes the tour by setting active to false
    //
    // Accessibility:
    //   - role="dialog" identifies the tour overlay as a dialog window
    //   - aria-modal="true" indicates content behind it is inert
    //   - aria-label={label} provides an accessible name for the tour
    //   - tabindex="-1" allows the dialog to receive focus for keyboard events
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - All content is provided through the children snippet
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Uses {#if active} for conditional rendering
    //   - Uses $bindable() for two-way data binding on active prop
    //
    // References:
    //   - WAI-ARIA Dialog Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/

    import type { Snippet } from "svelte";

    let {
        label,
        active = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Whether the tour is active. Bindable. */
        active?: boolean;
        /** TourGuide step content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            event.preventDefault();
            active = false;
        }
    }
</script>

<!-- TourGuide component: a modal dialog overlay for step-by-step guided walkthroughs -->
{#if active}
    <div
        role="dialog"
        aria-label={label}
        aria-modal="true"
        tabindex="-1"
        {onkeydown}
        {...restProps}
    >
        {@render children()}
    </div>
{/if}
