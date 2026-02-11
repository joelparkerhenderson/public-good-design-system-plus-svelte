import { render, screen } from "@testing-library/svelte";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import Subject from "./CalendarInput.svelte";

describe("CalendarInput", () => {
    test("renders as a date input", () => {
        render(Subject, { props: {
            label: "Start date",
        }});

        const input: HTMLInputElement = screen.getByLabelText("Start date") as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.type).toBe("date");
    });

    test("accepts initial value", () => {
        render(Subject, { props: {
            label: "Date",
            value: "2024-06-15",
        }});

        const input: HTMLInputElement = screen.getByLabelText("Date") as HTMLInputElement;
        expect(input.value).toBe("2024-06-15");
    });

    test("applies min and max constraints", () => {
        render(Subject, { props: {
            label: "Date",
            min: "2024-01-01",
            max: "2024-12-31",
        }});

        const input: HTMLInputElement = screen.getByLabelText("Date") as HTMLInputElement;
        expect(input.getAttribute("min")).toBe("2024-01-01");
        expect(input.getAttribute("max")).toBe("2024-12-31");
    });

    test("can be disabled", () => {
        render(Subject, { props: {
            label: "Date",
            disabled: true,
        }});

        const input: HTMLInputElement = screen.getByLabelText("Date") as HTMLInputElement;
        expect(input.disabled).toBe(true);
    });

    test("can be required", () => {
        render(Subject, { props: {
            label: "Date",
            required: true,
        }});

        const input: HTMLInputElement = screen.getByLabelText("Date") as HTMLInputElement;
        expect(input.required).toBe(true);
    });

    test("applies name and id attributes", () => {
        render(Subject, { props: {
            label: "Date",
            name: "start-date",
            id: "date-input",
        }});

        const input: HTMLElement = screen.getByLabelText("Date");
        expect(input.getAttribute("name")).toBe("start-date");
        expect(input.getAttribute("id")).toBe("date-input");
    });

    test("is focusable via keyboard", async () => {
        const user: UserEvent = userEvent.setup();
        render(Subject, { props: {
            label: "Date",
        }});

        const input: HTMLElement = screen.getByLabelText("Date");
        await user.tab();
        expect(document.activeElement).toBe(input);
    });

    test("passes through additional HTML attributes", () => {
        render(Subject, { props: {
            label: "Date",
            "data-testid": "cal-input",
        }});

        const input: HTMLElement = screen.getByTestId("cal-input");
        expect(input).toBeTruthy();
    });
});
