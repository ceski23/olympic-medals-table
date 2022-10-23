import { ErrorText, InputContainer, InputElement, Label } from "./Input.styles";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <Label htmlFor={id}>{label}</Label>

        <InputElement
          ref={ref}
          id={id}
          {...props}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        {error && (
          <ErrorText role="alert" id={`${id}-error`}>
            {error}
          </ErrorText>
        )}
      </InputContainer>
    );
  }
);
