<script lang="ts">
    // Component: AspectRatio
    //
    // A headless container component that maintains a specific aspect ratio
    // for its content. Uses CSS aspect-ratio property via a style attribute.
    //
    // Usage:
    //   <AspectRatio ratio={16/9}>
    //     <video src="video.mp4"></video>
    //   </AspectRatio>
    //
    //   <AspectRatio ratio={1}>
    //     <img src="avatar.jpg" alt="User avatar" />
    //   </AspectRatio>
    //
    // Props:
    //   - ratio: The aspect ratio as a number (width/height). E.g., 16/9, 4/3, 1 (default: 1)
    //   - ...restProps: Any additional HTML attributes
    //
    // Accessibility:
    //   - This is a layout utility; no specific ARIA role needed
    //   - Content within maintains its own accessibility semantics
    //
    // Internationalization:
    //   - No user-facing strings

    import type { Snippet } from "svelte";

    let {
        ratio = 1,
        children,
        ...restProps
    }: {
        /** The aspect ratio as a number (width / height), e.g. 16/9 */
        ratio?: number;
        /** The content to display within the aspect ratio container */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- AspectRatio: a container that maintains a specific width-to-height ratio -->
<div
    style:aspect-ratio={ratio}
    data-aspect-ratio={ratio}
    {...restProps}
>
    {@render children()}
</div>
