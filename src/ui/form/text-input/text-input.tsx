"use client";
import React from "react";
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  FormHelperText,
  FieldError,
  Input,
  Label,
  fieldBorderStyles,
} from "../field";
import { focusRing } from "@/ui/utils/focus-ring";
import { composeTailwindRenderProps } from "@/ui/utils/compose-tailwind-render-props";

export const textInputStyles = tv({
  extend: focusRing,
  base: "border rounded-md",
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    ...fieldBorderStyles.variants,
  },
});

export interface TextInputProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export function TextInput({
  label,
  description,
  errorMessage,
  autoCapitalize,
  ...props
}: TextInputProps) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex w-full flex-grow flex-col justify-start gap-1",
      )}
    >
      {label && <Label isRequired={props.isRequired}>{label}</Label>}
      <Input autoCapitalize={autoCapitalize} className={textInputStyles} />
      {description && <FormHelperText>{description}</FormHelperText>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
