import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./TableOfContents.svelte";

// Helper to create a Svelte 5 snippet for children content.
function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("TableOfContents", () => {
    test("renders a nav element", () => {
        render(Subject, { props: {
            label: "Table of contents",
            children: textSnippet("links"),
        }});

        const nav = screen.getByRole("navigation");
        expect(nav.tagName).toBe("NAV");
    });

    test("has aria-label from label prop", () => {
        render(Subject, { props: {
            label: "Page contents",
            children: textSnippet("links"),
        }});

        const nav = screen.getByRole("navigation");
        expect(nav.getAttribute("aria-label")).toBe("Page contents");
    });

    test("renders children content", () => {
        render(Subject, { props: {
            label: "Table of contents",
            children: textSnippet("Section links here"),
        }});

        const nav = screen.getByRole("navigation");
        expect(nav.textContent).toContain("Section links here");
    });

    test("passes through additional HTML attributes", () => {
        render(Subject, { props: {
            label: "Table of contents",
            "data-testid": "my-toc",
            children: textSnippet("links"),
        }});

        const nav = screen.getByTestId("my-toc");
        expect(nav).toBeTruthy();
    });

    test("passes through id attribute", () => {
        render(Subject, { props: {
            label: "Table of contents",
            id: "toc-nav",
            children: textSnippet("links"),
        }});

        const nav = screen.getByRole("navigation");
        expect(nav.getAttribute("id")).toBe("toc-nav");
    });
});
