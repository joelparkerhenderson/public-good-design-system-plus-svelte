<script lang="ts">
    // Component: FileUpload
    //
    // A headless file upload with button trigger. Wraps a hidden file input
    // with a visible button and live region for status.
    //
    // Props:
    //   label    — accessible name for the upload button
    //   accept   — accepted file types
    //   multiple — allow multiple files
    //   disabled — whether disabled
    //   onchange — callback when files are selected
    //
    // Usage:
    //   <FileUpload label="Upload files" accept=".pdf" onchange={handleFiles} />

    let {
        label,
        accept = undefined,
        multiple = false,
        disabled = false,
        onchange = undefined,
        ...restProps
    }: {
        /** Accessible label for the button. */
        label: string;
        /** Accepted file types. */
        accept?: string;
        /** Allow multiple files. */
        multiple?: boolean;
        /** Whether disabled. */
        disabled?: boolean;
        /** Callback with selected files. */
        onchange?: (files: FileList | null) => void;
        [key: string]: unknown;
    } = $props();

    let inputRef: HTMLInputElement | undefined = $state(undefined);
    let fileCount = $state(0);

    function handleClick() {
        inputRef?.click();
    }

    function handleChange(event: Event) {
        const input = event.target as HTMLInputElement;
        fileCount = input.files?.length ?? 0;
        onchange?.(input.files);
    }
</script>

<div {...restProps}>
    <button
        type="button"
        aria-label={label}
        {disabled}
        onclick={handleClick}
    >
        {label}
    </button>
    <input
        bind:this={inputRef}
        type="file"
        {accept}
        {multiple}
        hidden
        onchange={handleChange}
    />
    <span aria-live="polite" data-file-count={fileCount}>
        {#if fileCount > 0}
            {fileCount} {fileCount === 1 ? "file" : "files"} selected
        {/if}
    </span>
</div>
