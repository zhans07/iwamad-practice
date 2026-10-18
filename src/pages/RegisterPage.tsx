
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "../styles/ui.css";
import TextField from "../components/ui/TextField";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

export default function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event: ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const visibleError = (field: keyof RegistrationValues) =>
    submitted || touched[field] ? errors[field] : undefined;

  if (submitted && Object.keys(errors).length === 0) {
    return (
      <section className="register-page">
        <h1>Register</h1>
        <p role="status">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      </section>
    );
  }

  return (
    <section className="register-page">
      <h1>Register</h1>
      <p>Create your account by completing the form below.</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("fullName")}
          autoComplete="name"
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("email")}
          autoComplete="email"
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("password")}
          autoComplete="new-password"
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={visibleError("confirmPassword")}
          autoComplete="new-password"
        />

        <div className="field check">
          <label htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={
                visibleError("acceptTerms") ? true : undefined
              }
            />
            I accept the terms and conditions
          </label>

          {visibleError("acceptTerms") && (
            <p className="field-error" role="alert">
              {visibleError("acceptTerms")}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="ui-button ui-button--primary"
        >
          Create account
        </button>
      </form>
    </section>
  );
}
