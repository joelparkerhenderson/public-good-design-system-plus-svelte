import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./StepListItem.svelte";

function textSnippet(text: string) {
    return (($anchor: Comment) => {
        const node = document.createTextNode(text);
        $anchor.before(node);
    }) as any;
}

describe("StepListItem", () => {
    test("renders a list item", () => {
        render(Subject, {
            props: {
                children: textSnippet("Cart"),
            },
        });
        expect(screen.getByRole("listitem")).toBeTruthy();
    });

    test("renders children content", () => {
        render(Subject, {
            props: {
                children: textSnippet("Shipping"),
            },
        });
        expect(screen.getByText("Shipping")).toBeTruthy();
    });

    test("sets aria-current=step when status is current", () => {
        render(Subject, {
            props: {
                status: "current",
                children: textSnippet("Payment"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("aria-current")).toBe("step");
    });

    test("no aria-current when status is completed", () => {
        render(Subject, {
            props: {
                status: "completed",
                children: textSnippet("Cart"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("aria-current")).toBeNull();
    });

    test("no aria-current when status is upcoming", () => {
        render(Subject, {
            props: {
                status: "upcoming",
                children: textSnippet("Confirmation"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("aria-current")).toBeNull();
    });

    test("defaults status to upcoming", () => {
        render(Subject, {
            props: {
                children: textSnippet("Step"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("aria-current")).toBeNull();
        expect(li.getAttribute("data-status")).toBe("upcoming");
    });

    test("sets data-status=completed", () => {
        render(Subject, {
            props: {
                status: "completed",
                children: textSnippet("Cart"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("data-status")).toBe("completed");
    });

    test("sets data-status=current", () => {
        render(Subject, {
            props: {
                status: "current",
                children: textSnippet("Shipping"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("data-status")).toBe("current");
    });

    test("sets data-status=upcoming", () => {
        render(Subject, {
            props: {
                status: "upcoming",
                children: textSnippet("Payment"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("data-status")).toBe("upcoming");
    });

    test("passes through attributes", () => {
        render(Subject, {
            props: {
                "data-testid": "step-item",
                children: textSnippet("Step"),
            },
        });
        expect(screen.getByTestId("step-item")).toBeTruthy();
    });

    test("passes through id", () => {
        render(Subject, {
            props: {
                id: "step-2",
                children: textSnippet("Step"),
            },
        });
        const li = screen.getByRole("listitem");
        expect(li.getAttribute("id")).toBe("step-2");
    });
});
