import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./Steps.svelte";

// Helper to create a Svelte 5 snippet for children content.
function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("Steps", () => {
    test("renders an ordered list element", () => {
        render(Subject, { props: {
            label: "Checkout process",
            children: textSnippet("steps"),
        }});

        const list = screen.getByRole("list");
        expect(list.tagName).toBe("OL");
    });

    test("has aria-label from label prop", () => {
        render(Subject, { props: {
            label: "Registration steps",
            children: textSnippet("steps"),
        }});

        const list = screen.getByRole("list");
        expect(list.getAttribute("aria-label")).toBe("Registration steps");
    });

    test("renders children content", () => {
        render(Subject, { props: {
            label: "Steps",
            children: textSnippet("Step content here"),
        }});

        const list = screen.getByRole("list");
        expect(list.textContent).toContain("Step content here");
    });

    test("passes through additional HTML attributes", () => {
        render(Subject, { props: {
            label: "Steps",
            "data-testid": "my-steps",
            children: textSnippet("steps"),
        }});

        const list = screen.getByTestId("my-steps");
        expect(list).toBeTruthy();
    });

    test("passes through id attribute", () => {
        render(Subject, { props: {
            label: "Steps",
            id: "checkout-steps",
            children: textSnippet("steps"),
        }});

        const list = screen.getByRole("list");
        expect(list.getAttribute("id")).toBe("checkout-steps");
    });
});
