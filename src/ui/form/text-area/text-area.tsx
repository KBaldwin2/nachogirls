"use client";
import React from "react";
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
  TextArea as AriaTextArea,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { FormHelperText, FieldError, Label, fieldBorderStyles } from "../field";
import { focusRing } from "@/ui/utils/focus-ring";
import { composeTailwindRenderProps } from "@/ui/utils/compose-tailwind-render-props";

const inputStyles = tv({
  extend: focusRing,
  base: "border rounded-md p-2 text-sm",
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    ...fieldBorderStyles.variants,
  },
});

export interface TextAreaProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextArea({
  label,
  description,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      {label && <Label isRequired={props.isRequired}>{label}</Label>}
      <AriaTextArea className={inputStyles} />
      {description && <FormHelperText>{description}</FormHelperText>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
