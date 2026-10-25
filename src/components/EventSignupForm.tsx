
import { useState } from "react";
import type { FormEvent } from "react";
import TextField from "./ui/TextField";
import Button from "./ui/Button";
import type { CampusEvent } from "../data/events";
import {
  validateSignup,
  type SignupValues,
} from "../lib/validateSignup";

type EventSignupFormProps = {
  event: CampusEvent;
  seatsLeft: number;
  onSignup: (tickets: number, name: string) => void;
};

export default function EventSignupForm({
  seatsLeft,
  onSignup,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: "",
    email: "",
    tickets: 1,
  });

  const [submitted, setSubmitted] = useState(false);
  const errors = validateSignup(values, seatsLeft);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    onSignup(values.tickets, values.fullName.trim());

    setValues({
      fullName: "",
      email: "",
      tickets: 1,
    });
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={(e) =>
          setValues((current) => ({
            ...current,
            fullName: e.target.value,
          }))
        }
        error={submitted ? errors.fullName : undefined}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={(e) =>
          setValues((current) => ({
            ...current,
            email: e.target.value,
          }))
        }
        error={submitted ? errors.email : undefined}
      />

      <TextField
        label="Tickets"
        name="tickets"
        type="number"
        min={1}
        max={4}
        value={values.tickets}
        onChange={(e) =>
          setValues((current) => ({
            ...current,
            tickets: Number(e.target.value),
          }))
        }
        error={submitted ? errors.tickets : undefined}
      />

      <Button type="submit">Book</Button>
    </form>
  );
}