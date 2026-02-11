<script lang="ts">
    // Component: HiddenInput
    //
    // A hidden form input. Not visible or interactive.
    //
    // Props:
    //   name  — input name attribute
    //   value — input value
    //
    // Usage:
    //   <HiddenInput name="csrf" value={token} />

    let {
        name,
        value = "",
        ...restProps
    }: {
        name: string;
        value?: string;
        [key: string]: unknown;
    } = $props();
</script>

<input type="hidden" {name} {value} {...restProps} />
