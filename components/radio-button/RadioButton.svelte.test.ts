import { render, screen } from "@testing-library/svelte";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import Subject from "./RadioButton.svelte";

describe("RadioButton", () => {
    test("renders a radio input", () => {
        render(Subject, { props: { label: "Option A" } });
        expect(screen.getByRole("radio")).toBeTruthy();
    });

    test("has label text", () => {
        render(Subject, { props: { label: "Option A" } });
        expect(screen.getByText("Option A")).toBeTruthy();
    });

    test("clicking label checks the radio", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: { label: "Option A" } });
        await user.click(screen.getByText("Option A"));
        expect((screen.getByRole("radio") as HTMLInputElement).checked).toBe(true);
    });

    test("supports name and value", () => {
        render(Subject, { props: { label: "A", name: "grp", value: "a" } });
        const radio = screen.getByRole("radio") as HTMLInputElement;
        expect(radio.name).toBe("grp");
        expect(radio.value).toBe("a");
    });

    test("supports checked prop", () => {
        render(Subject, { props: { label: "A", checked: true } });
        expect((screen.getByRole("radio") as HTMLInputElement).checked).toBe(true);
    });

    test("supports disabled", () => {
        render(Subject, { props: { label: "A", disabled: true } });
        expect((screen.getByRole("radio") as HTMLInputElement).disabled).toBe(true);
    });

    test("passes through attributes to label", () => {
        render(Subject, { props: { label: "A", "data-testid": "rb" } });
        expect(screen.getByTestId("rb")).toBeTruthy();
    });
});
