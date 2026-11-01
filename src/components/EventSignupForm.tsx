
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
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
    tickets: "1",
  });

  const [submitted, setSubmitted] = useState(false);
  const errors = validateSignup(values, seatsLeft);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    onSignup(Number(values.tickets), values.fullName.trim());

    setValues({
      fullName: "",
      email: "",
      tickets: "1",
    });
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Full Name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        error={submitted ? errors.fullName : undefined}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={submitted ? errors.email : undefined}
      />

      <TextField
        label="Tickets"
        name="tickets"
        type="number"
        min={1}
        max={4}
        value={values.tickets}
        onChange={handleChange}
        error={submitted ? errors.tickets : undefined}
      />

      <Button type="submit">Book</Button>
    </form>
  );
}
