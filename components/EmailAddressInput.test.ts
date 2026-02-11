import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./EmailAddressInput.svelte";

describe("EmailAddressInput", () => {
    test("renders an email input", () => {
        render(Subject, { props: { label: "Email" } });
        const input = screen.getByLabelText("Email") as HTMLInputElement;
        expect(input.type).toBe("email");
    });

    test("has autocomplete email", () => {
        render(Subject, { props: { label: "Email" } });
        expect(screen.getByLabelText("Email").getAttribute("autocomplete")).toBe("email");
    });

    test("supports placeholder", () => {
        render(Subject, { props: { label: "Email", placeholder: "you@example.com" } });
        expect((screen.getByLabelText("Email") as HTMLInputElement).placeholder).toBe("you@example.com");
    });

    test("supports required", () => {
        render(Subject, { props: { label: "Email", required: true } });
        expect((screen.getByLabelText("Email") as HTMLInputElement).required).toBe(true);
    });

    test("supports disabled", () => {
        render(Subject, { props: { label: "Email", disabled: true } });
        expect((screen.getByLabelText("Email") as HTMLInputElement).disabled).toBe(true);
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "Email", "data-testid": "eai" } });
        expect(screen.getByTestId("eai")).toBeTruthy();
    });
});
