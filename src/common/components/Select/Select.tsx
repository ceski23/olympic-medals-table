import {
  ErrorText,
  Label,
  SelectContainer,
  SelectElement,
} from "./Select.styles";
import { ComponentProps, forwardRef } from "react";

interface SelectProps extends ComponentProps<"select"> {
  id: string;
  label: string;
  error?: string;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, error, label, id, className, ...props }, ref) => {
    return (
      <SelectContainer className={className}>
        <Label htmlFor={id}>{label}</Label>

        <SelectElement
          ref={ref}
          id={id}
          {...props}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          {children}
        </SelectElement>

        {error && (
          <ErrorText role="alert" id={`${id}-error`}>
            {error}
          </ErrorText>
        )}
      </SelectContainer>
    );
  }
);
