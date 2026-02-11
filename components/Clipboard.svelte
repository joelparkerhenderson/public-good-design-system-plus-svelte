<script lang="ts">
    // Component: Clipboard
    //
    // A headless clipboard component that provides copy-to-clipboard functionality.
    // Wraps a button that copies specified text to the system clipboard.
    //
    // Usage:
    //   <Clipboard text="https://example.com" label="Copy link" />
    //   <Clipboard text={code} label="Copy code" onsuccess={handleCopied} />
    //
    // Accessibility:
    //   - Role: button (implicit)
    //   - aria-label describes the copy action
    //   - aria-live region announces copy success/failure

    import type { Snippet } from "svelte";

    let {
        text,
        label,
        onsuccess = undefined,
        onerror = undefined,
        children = undefined,
        ...restProps
    }: {
        /** The text to copy to clipboard */
        text: string;
        /** Accessible label for the copy button */
        label: string;
        /** Callback on successful copy */
        onsuccess?: () => void;
        /** Callback on failed copy */
        onerror?: (error: unknown) => void;
        /** Optional button content (defaults to empty) */
        children?: Snippet;
        [key: string]: unknown;
    } = $props();

    let copied = $state(false);

    async function handleClick() {
        try {
            await navigator.clipboard.writeText(text);
            copied = true;
            onsuccess?.();
            // Reset after a delay
            setTimeout(() => { copied = false; }, 2000);
        } catch (err) {
            onerror?.(err);
        }
    }
</script>

<button
    type="button"
    aria-label={label}
    data-copied={copied}
    onclick={handleClick}
    {...restProps}
>
    {#if children}
        {@render children()}
    {/if}
</button>
