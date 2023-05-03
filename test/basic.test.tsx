import { expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Patients from "../src/pages/Patients";
import userEvent from "@testing-library/user-event";
// Edit an assertion and save to see HMR in action

vi.mock("../src/utils/patientService", () => {
  return {
    getAll: vi.fn(() => {
      return [
        {
          id: "d2773336-f723-11e9-8f0b-362b9e155667",
          name: "John McClane",
          dateOfBirth: "1986-07-09",
          gender: "male",
          occupation: "New york city cop",
        },
      ];
    }),
    uploadPatient: vi.fn(() => {
      return {
        id: "d2773336-f723-11e9-8f0b-362b9e154167",
        name: "Mary Jane",
        dateOfBirth: "1996-02-03",
        gender: "Female",
        occupation: "photographer",
      };
    }),
  };
});

afterAll(() => {
  vi.clearAllMocks();
});

test.skip("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test.skip("information for patients are shown", async () => {
  render(<Patients />);
  await waitFor(
    () => {
      expect(screen.getByText("name: John McClane")).not.toBeNull();
      expect(screen.getByText("gender: male")).not.toBeNull();
      expect(screen.getByText("occupation: New york city cop")).not.toBeNull();
    },
    {
      timeout: 5000,
    }
  );
  const header = screen.queryByText(/Patient List/i);
  screen.debug();
  expect(header).not.toBeNull();
});

test(
  "shows successfuly uploaded patient",
  async () => {
    const user = userEvent.setup();
    render(<Patients />);
    await user.click(screen.getByRole("button", { name: /Add Patient/i }));
    const nameInput = screen.getByLabelText(/Name/i);
    const femaleInput = screen.getByLabelText(/Male/i);
    const occupationInput = screen.getByLabelText(/Occupation/i);
    const birthdayInput = screen.getByLabelText(/Birthday/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    const closeModalButton = screen.getByRole("button", {
      name: /Close Form/i,
    });

    fireEvent.change(birthdayInput, { target: { value: "2020-05-24" } });
    await user.type(occupationInput, "Photographer");
    await user.type(nameInput, "Mary Jane");
    await user.click(femaleInput);
    await user.click(submitButton);
    await user.click(closeModalButton);

    await waitFor(
      () => {
        expect(screen.getByText("Mary Jane")).not.toBeNull();
      },
      {
        timeout: 5000,
      }
    );
    screen.debug();
  },
  { timeout: 30000 }
);
