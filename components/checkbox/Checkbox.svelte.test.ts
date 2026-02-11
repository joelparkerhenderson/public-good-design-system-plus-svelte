import { render, screen } from "@testing-library/svelte";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import Subject from "./Checkbox.svelte";

describe("Checkbox", () => {
    test("renders as a checkbox with label", () => {
        render(Subject, { props: { label: "Accept terms" } });
        const cb = screen.getByRole("checkbox", { name: "Accept terms" });
        expect(cb).toBeTruthy();
    });

    test("defaults to unchecked", () => {
        render(Subject, { props: { label: "Option" } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        expect(cb.checked).toBe(false);
    });

    test("can be checked initially", () => {
        render(Subject, { props: { label: "Option", checked: true } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        expect(cb.checked).toBe(true);
    });

    test("toggles on click", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: { label: "Toggle" } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        expect(cb.checked).toBe(false);
        await user.click(cb);
        expect(cb.checked).toBe(true);
        await user.click(cb);
        expect(cb.checked).toBe(false);
    });

    test("toggles via Space key", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: { label: "Space toggle" } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        await user.tab();
        await user.keyboard(" ");
        expect(cb.checked).toBe(true);
    });

    test("can be disabled", () => {
        render(Subject, { props: { label: "Disabled", disabled: true } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        expect(cb.disabled).toBe(true);
    });

    test("can be required", () => {
        render(Subject, { props: { label: "Required", required: true } });
        const cb = screen.getByRole("checkbox") as HTMLInputElement;
        expect(cb.required).toBe(true);
    });

    test("applies name, id, and value attributes", () => {
        render(Subject, { props: {
            label: "Option A",
            name: "options",
            id: "opt-a",
            value: "a",
        }});
        const cb = screen.getByRole("checkbox");
        expect(cb.getAttribute("name")).toBe("options");
        expect(cb.getAttribute("id")).toBe("opt-a");
        expect(cb.getAttribute("value")).toBe("a");
    });

    test("applies aria-describedby", () => {
        render(Subject, { props: {
            label: "Check",
            describedby: "help-text",
        }});
        const cb = screen.getByRole("checkbox");
        expect(cb.getAttribute("aria-describedby")).toBe("help-text");
    });

    test("is focusable via keyboard", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: { label: "Focus" } });
        const cb = screen.getByRole("checkbox");
        await user.tab();
        expect(document.activeElement).toBe(cb);
    });
});
