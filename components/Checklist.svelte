<script lang="ts">
    // Checklist component
    //
    // A headless semantic list container for checklist items. Renders a <ul> with
    // role="list" for tracking and managing tasks, options, or steps. Consumers
    // provide <li> children with checkboxes or other interactive controls. Commonly
    // used in to-do lists, onboarding flows, forms, and progress tracking interfaces.
    //
    // Props:
    //   label — string, optional. Accessible name for the checklist via aria-label.
    //   children — Snippet, required. List items to render inside the <ul>.
    //   ...restProps — additional HTML attributes spread onto the <ul>.
    //
    // Syntax:
    //   <Checklist label="Tasks">
    //     <li><input type="checkbox" /> Task one</li>
    //   </Checklist>
    //
    // Examples:
    //   <!-- Onboarding checklist -->
    //   <Checklist label="Onboarding tasks">
    //     <li><input type="checkbox" /> Create account</li>
    //     <li><input type="checkbox" /> Set up profile</li>
    //     <li><input type="checkbox" /> Invite team members</li>
    //   </Checklist>
    //
    // Keyboard:
    //   None — this is a passive container. Keyboard interactions are determined
    //   by the consumer-provided child elements (e.g., checkboxes respond to Space).
    //
    // Accessibility:
    //   - role="list" ensures assistive technologies treat it as a list
    //   - aria-label provides an optional accessible name for the checklist
    //
    // Internationalization:
    //   - Label text comes through the label prop; no hardcoded strings
    //   - Item content is provided by the consumer
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Consumer provides <li> elements with their own interactive controls
    //
    // References:
    //   - WAI-ARIA Listbox Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/listbox/

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        children,
        ...restProps
    }: {
        label?: string;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<ul role="list" aria-label={label} {...restProps}>
    {@render children()}
</ul>
