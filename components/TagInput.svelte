<script lang="ts">
    // Component: TagInput
    //
    // A headless text input for adding tags. Pressing Enter triggers the onadd callback.
    //
    // Props:
    //   label — accessible name via aria-label
    //   value — bindable current input text
    //   onadd — callback when Enter is pressed with non-empty value
    //
    // Usage:
    //   <TagInput label="Add tag" bind:value onadd={(tag) => tags.push(tag)} />

    let {
        label,
        value = $bindable(""),
        onadd,
        disabled = false,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Current input value. Bindable. */
        value?: string;
        /** Callback when a tag is submitted. */
        onadd?: (value: string) => void;
        /** Whether disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (event.key === "Enter" && value.trim()) {
            event.preventDefault();
            onadd?.(value.trim());
            value = "";
        }
    }
</script>

<input
    type="text"
    aria-label={label}
    bind:value
    {onkeydown}
    {disabled}
    {...restProps}
/>
