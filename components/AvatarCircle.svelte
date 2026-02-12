<script lang="ts">
    // AvatarCircle component
    //
    // A headless avatar that displays a user's identity via an image or
    // fallback initials. Renders as a <span role="img"> container with
    // aria-label. When an image src is provided, it renders an <img>;
    // if the image fails to load or no src is given, it falls back to
    // displaying initials text. Commonly used in user profiles, comment
    // threads, contact lists, and messaging interfaces.
    //
    // Props:
    //   src      — string, optional. URL of the avatar image.
    //   alt      — string, required. Accessible description of the person.
    //   initials — string, optional. Fallback text when image is unavailable
    //              (e.g., "JD" for Jane Doe).
    //   ...restProps — additional HTML attributes spread onto the outer <span>.
    //
    // Syntax:
    //   <AvatarCircle src="/photo.jpg" alt="Jane Doe" />
    //   <AvatarCircle initials="JD" alt="Jane Doe" />
    //
    // Examples:
    //   <!-- Image avatar -->
    //   <AvatarCircle src="/photos/jane.jpg" alt="Jane Doe" />
    //
    //   <!-- Initials fallback -->
    //   <AvatarCircle initials="JD" alt="Jane Doe" />
    //
    //   <!-- Image with initials fallback on error -->
    //   <AvatarCircle src="/photos/jane.jpg" initials="JD" alt="Jane Doe" />
    //
    //   <!-- With custom attributes -->
    //   <AvatarCircle initials="AB" alt="Alice Brown" data-size="lg" />
    //
    // Keyboard: None — this is a display-only element, not interactive.
    //
    // Accessibility:
    //   - role="img" on the outer <span> for assistive technologies
    //   - aria-label provides the accessible name (the person's name)
    //   - <img> has alt text for image avatars
    //   - Initials <span> has aria-hidden="true" (redundant with aria-label)
    //
    // Internationalization:
    //   - alt and initials come through props
    //   - No hardcoded strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Consumer provides border-radius: 50% for the circular shape
    //   - Image error state is tracked internally; falls back to initials
    //   - Do not add loading spinners or placeholder animations
    //
    // References:
    //   - WAI-ARIA img role: https://www.w3.org/TR/wai-aria-1.2/#img

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

<!-- AvatarCircle component: a circular avatar showing an image or fallback initials -->
<span
    role="img"
    aria-label={alt}
    {...restProps}
>
    {#if showImage}
        <img
            {src}
            {alt}
            onerror={onimgerror}
        />
    {:else if initials}
        <span aria-hidden="true">{initials}</span>
    {/if}
</span>
