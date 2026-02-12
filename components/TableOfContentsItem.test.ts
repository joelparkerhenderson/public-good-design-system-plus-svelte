import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./TableOfContentsItem.svelte";

function textSnippet(text: string) {
    return (($anchor: Comment) => {
        const node = document.createTextNode(text);
        $anchor.before(node);
    }) as any;
}

describe("TableOfContentsItem", () => {
    test("renders a list item", () => {
        render(Subject, {
            props: {
                href: "#intro",
                children: textSnippet("Introduction"),
            },
        });
        expect(screen.getByRole("listitem")).toBeTruthy();
    });

    test("renders a link inside the list item", () => {
        render(Subject, {
            props: {
                href: "#methods",
                children: textSnippet("Methods"),
            },
        });
        const link = screen.getByRole("link");
        expect(link).toBeTruthy();
        expect(link.getAttribute("href")).toBe("#methods");
    });

    test("renders children as link text", () => {
        render(Subject, {
            props: {
                href: "#results",
                children: textSnippet("Results"),
            },
        });
        expect(screen.getByText("Results")).toBeTruthy();
    });

    test("sets aria-current=location when current", () => {
        render(Subject, {
            props: {
                href: "#intro",
                current: true,
                children: textSnippet("Introduction"),
            },
        });
        const link = screen.getByRole("link");
        expect(link.getAttribute("aria-current")).toBe("location");
    });

    test("no aria-current when not current", () => {
        render(Subject, {
            props: {
                href: "#intro",
                current: false,
                children: textSnippet("Introduction"),
            },
        });
        const link = screen.getByRole("link");
        expect(link.getAttribute("aria-current")).toBeNull();
    });

    test("defaults current to false", () => {
        render(Subject, {
            props: {
                href: "#intro",
                children: textSnippet("Introduction"),
            },
        });
        const link = screen.getByRole("link");
        expect(link.getAttribute("aria-current")).toBeNull();
    });

    test("passes through attributes to li", () => {
        render(Subject, {
            props: {
                href: "#intro",
                "data-testid": "toc-item",
                children: textSnippet("Introduction"),
            },
        });
        expect(screen.getByTestId("toc-item")).toBeTruthy();
    });

    test("passes through id to li", () => {
        render(Subject, {
            props: {
                href: "#intro",
                id: "item-1",
                children: textSnippet("Introduction"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("id")).toBe("item-1");
    });
});
