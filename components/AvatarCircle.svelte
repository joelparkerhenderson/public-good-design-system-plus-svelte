<script lang="ts">
    // Component: AvatarCircle
    //
    // A headless avatar component that displays a user's identity via an image
    // or fallback initials within a circular frame.
    //
    // Usage:
    //   <AvatarCircle src="/photo.jpg" alt="Jane Doe" />
    //   <AvatarCircle initials="JD" alt="Jane Doe" />
    //
    // Props:
    //   - src: URL of the avatar image (optional)
    //   - alt: Accessible alt text describing the person (required)
    //   - initials: Fallback text when no image is provided or image fails to load
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - Role: img (implicit from <img>, or explicit on fallback <span>)
    //   - ARIA: aria-label on the container for screen readers
    //   - Alt text on the <img> element for image avatars
    //
    // Internationalization:
    //   - alt and initials come through props
    //   - No hardcoded strings

    let {
        src = undefined,
        alt,
        initials = undefined,
        ...restProps
    }: {
        /** URL of the avatar image */
        src?: string;
        /** Accessible description of the person */
        alt: string;
        /** Fallback initials when image is unavailable */
        initials?: string;
        [key: string]: unknown;
    } = $props();

    // Track whether the image failed to load
    let imageError = $state(false);

    function onimgerror() {
        imageError = true;
    }

    // Show image if src is provided and image hasn't errored
    let showImage = $derived(src != null && !imageError);
</script>

<!-- AvatarCircle: a circular avatar showing an image or fallback initials -->
<span
    role="img"
    aria-label={alt}
    {...restProps}
>
    {#if showImage}
        <img
            src={src}
            alt={alt}
            onerror={onimgerror}
        />
    {:else if initials}
        <span aria-hidden="true">{initials}</span>
    {/if}
</span>
