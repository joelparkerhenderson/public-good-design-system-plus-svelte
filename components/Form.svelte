<script lang="ts">
    // Component: Form
    //
    // A headless form wrapper with accessible label and event handling.
    //
    // Props:
    //   label    — accessible name (aria-label)
    //   onsubmit — callback on submission (default prevented)
    //   onreset  — callback on reset
    //   children — form content
    //
    // Usage:
    //   <Form label="Login" onsubmit={handleLogin}>
    //     <input name="email" />
    //     <button type="submit">Sign in</button>
    //   </Form>

    import type { Snippet } from "svelte";

    let {
        label,
        onsubmit = undefined,
        onreset = undefined,
        children,
        ...restProps
    }: {
        /** Accessible name. */
        label: string;
        /** Submit callback. */
        onsubmit?: (event: SubmitEvent) => void;
        /** Reset callback. */
        onreset?: (event: Event) => void;
        /** Form content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        onsubmit?.(event);
    }
</script>

<form aria-label={label} onsubmit={handleSubmit} {onreset} {...restProps}>
    {@render children()}
</form>
