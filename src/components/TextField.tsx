
import type { InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  name: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function TextField({
  label,
  name,
  error,
  id,
  ...inputProps
}: TextFieldProps) {
  const fieldId = id ?? name;
  const errorId = `${fieldId}-error`;

  return (
    <div className="field">
      <label htmlFor={fieldId}>{label}</label>

      <input
        {...inputProps}
        id={fieldId}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p className="field-error" id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
