import { render, screen } from "@testing-library/svelte";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import Subject from "./ButtonWithPressableOrPressed.svelte";

// Helper to create a Svelte 5 snippet for children content.
function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("ButtonWithPressableOrPressed", () => {
    test("renders as a button", () => {
        render(Subject, { props: {
            children: textSnippet("Bold"),
        }});

        const button: HTMLElement = screen.getByRole("button", { name: "Bold" });
        expect(button).toBeTruthy();
    });

    test("shows aria-pressed false by default when pressable", () => {
        render(Subject, { props: {
            pressable: true,
            children: textSnippet("Toggle"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        expect(button.getAttribute("aria-pressed")).toBe("false");
    });

    test("shows aria-pressed true when pressed", () => {
        render(Subject, { props: {
            pressable: true,
            pressed: true,
            children: textSnippet("Active"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        expect(button.getAttribute("aria-pressed")).toBe("true");
    });

    test("does not show aria-pressed when not pressable", () => {
        render(Subject, { props: {
            pressable: false,
            children: textSnippet("Static"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        expect(button.getAttribute("aria-pressed")).toBeNull();
    });

    test("toggles pressed state on click when pressable", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: {
            pressable: true,
            pressed: false,
            children: textSnippet("Toggle"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        expect(button.getAttribute("aria-pressed")).toBe("false");

        await user.click(button);
        expect(button.getAttribute("aria-pressed")).toBe("true");

        await user.click(button);
        expect(button.getAttribute("aria-pressed")).toBe("false");
    });

    test("calls onclick handler", async () => {
        const user: UserEvent = userEvent.setup();
        const handleClick = vi.fn();
        render(Subject, { props: {
            onclick: handleClick,
            children: textSnippet("Click"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        await user.click(button);
        expect(handleClick).toHaveBeenCalledOnce();
    });

    test("can be disabled", () => {
        render(Subject, { props: {
            disabled: true,
            children: textSnippet("Disabled"),
        }});

        const button: HTMLButtonElement = screen.getByRole("button") as HTMLButtonElement;
        expect(button.disabled).toBe(true);
    });

    test("exposes data-pressable and data-pressed attributes", () => {
        render(Subject, { props: {
            pressable: true,
            pressed: true,
            children: textSnippet("Test"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        expect(button.getAttribute("data-pressable")).toBe("true");
        expect(button.getAttribute("data-pressed")).toBe("true");
    });

    test("applies aria-label override", () => {
        render(Subject, { props: {
            label: "Toggle bold formatting",
            children: textSnippet("B"),
        }});

        const button: HTMLElement = screen.getByRole("button", { name: "Toggle bold formatting" });
        expect(button).toBeTruthy();
    });

    test("is focusable via keyboard", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: {
            children: textSnippet("Focus"),
        }});

        const button: HTMLElement = screen.getByRole("button");
        await user.tab();
        expect(document.activeElement).toBe(button);
    });

    test("passes through additional HTML attributes", () => {
        render(Subject, { props: {
            "data-testid": "toggle-btn",
            children: textSnippet("Test"),
        }});

        const button: HTMLElement = screen.getByTestId("toggle-btn");
        expect(button).toBeTruthy();
    });
});
