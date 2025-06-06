import { composeTailwindRenderProps } from "@/ui/utils/compose-tailwind-render-props";
import { focusRing } from "@/ui/utils/focus-ring";
import React from "react";
import {
  Group,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  composeRenderProps,
  type FieldErrorProps,
  type GroupProps,
  type InputProps,
  type LabelProps,
  type TextProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export function Label(props: LabelProps & { isRequired?: boolean }) {
  const { isRequired, ...rest } = props;
  return (
    <RACLabel
      {...rest}
      className={twMerge(
        "w-fit cursor-default text-sm font-medium text-gray-900",
        props.className,
      )}
    >
      {props.children} {isRequired && <span className="text-red-600">*</span>}
    </RACLabel>
  );
}

export function FormHelperText(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge("text-sm text-gray-600", props.className)}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "text-sm text-red-600 forced-colors:text-[Mark]",
      )}
    />
  );
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-gray-300 forced-colors:border-[ButtonBorder]",
      true: "border-gray-600 forced-colors:border-[Highlight]",
    },
    isInvalid: {
      true: "border-red-600 forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 forced-colors:border-[GrayText]",
    },
  },
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group flex items-center h-9 bg-white forced-colors:bg-[Field] border-2 rounded-lg overflow-hidden",
  variants: fieldBorderStyles.variants,
});

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className }),
      )}
    />
  );
}

function _Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <RACInput
      {...props}
      ref={ref}
      className={composeTailwindRenderProps(
        props.className,
        "min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-gray-800 outline outline-0 disabled:text-gray-400",
      )}
    />
  );
}

export const Input = React.forwardRef(_Input);
