<script lang="ts">
    // Component: Alert
    //
    // A headless alert component for displaying important messages to the user.
    // Uses the ARIA alert role for assertive live region announcements.
    //
    // Alerts communicate information that requires the user's attention,
    // such as warnings, errors, confirmations, or status updates.
    //
    // Usage:
    //   <Alert>Something happened.</Alert>
    //   <Alert type="error" heading="Error">Something went wrong.</Alert>
    //
    // Props:
    //   - type: The alert severity type — "info" | "success" | "warning" | "error" (default: "info")
    //   - heading: Optional heading text for the alert
    //   - role: ARIA role — "alert" (default) or "status" for less urgent messages
    //   - live: ARIA live region politeness — "assertive" (default) or "polite"
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: alert (assertive live region) or status (polite live region)
    //   - ARIA: aria-live for dynamic content announcements
    //   - ARIA: aria-atomic="true" so the entire alert is read when content changes
    //   - Screen readers announce alert content immediately when role="alert"
    //
    // Internationalization:
    //   - All text content comes through children snippet and heading prop
    //   - No hardcoded strings

    import type { Snippet } from "svelte";

    let {
        type = "info",
        heading = undefined,
        role = "alert",
        live = undefined,
        children,
        ...restProps
    }: {
        /** The alert severity type */
        type?: "info" | "success" | "warning" | "error";
        /** Optional heading text for the alert */
        heading?: string;
        /** ARIA role: "alert" for assertive, "status" for polite */
        role?: "alert" | "status";
        /** ARIA live region politeness override */
        live?: "assertive" | "polite" | "off";
        /** The alert content */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    // Default aria-live based on role if not explicitly set
    let ariaLive = $derived(live ?? (role === "alert" ? "assertive" : "polite"));
</script>

<!-- Alert: a semantic alert region with ARIA live announcements -->
<div
    {role}
    aria-live={ariaLive}
    aria-atomic="true"
    data-type={type}
    {...restProps}
>
    {#if heading}
        <p><strong>{heading}</strong></p>
    {/if}
    {@render children()}
</div>
