import { render, screen } from "@testing-library/svelte";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import Subject from "./Breadcrumb.svelte";

// Helper to create a Svelte 5 snippet for children content.
function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("Breadcrumb", () => {
    test("renders a link within a list item", () => {
        render(Subject, { props: {
            href: "/home",
            children: textSnippet("Home"),
        }});

        const link: HTMLElement = screen.getByRole("link", { name: "Home" });
        expect(link).toBeTruthy();
        expect(link.getAttribute("href")).toBe("/home");
        expect(link.closest("li")).toBeTruthy();
    });

    test("sets aria-current page when current is true", () => {
        render(Subject, { props: {
            href: "/products",
            current: true,
            children: textSnippet("Products"),
        }});

        const link: HTMLElement = screen.getByRole("link", { name: "Products" });
        expect(link.getAttribute("aria-current")).toBe("page");
    });

    test("does not set aria-current when current is false", () => {
        render(Subject, { props: {
            href: "/home",
            children: textSnippet("Home"),
        }});

        const link: HTMLElement = screen.getByRole("link", { name: "Home" });
        expect(link.getAttribute("aria-current")).toBeNull();
    });

    test("passes through additional HTML attributes to li", () => {
        render(Subject, { props: {
            href: "/test",
            "data-testid": "crumb",
            children: textSnippet("Test"),
        }});

        const li: HTMLElement = screen.getByTestId("crumb");
        expect(li.tagName.toLowerCase()).toBe("li");
    });

    test("link is focusable via keyboard", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: {
            href: "/home",
            children: textSnippet("Home"),
        }});

        const link: HTMLElement = screen.getByRole("link");
        await user.tab();
        expect(document.activeElement).toBe(link);
    });
});
