"use client";

import { Popover } from "@/ui/overlay/popover/popover";
import { composeTailwindRenderProps } from "@/ui/utils/compose-tailwind-render-props";
import { focusRing } from "@/ui/utils/focus-ring";
import { ChevronDown } from "lucide-react";
import React, {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
} from "react";
import {
  Select as AriaSelect,
  Button,
  ListBox,
  SelectValue,
  type SelectProps as AriaSelectProps,
  type ListBoxItemProps,
  type ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import { type VariantProps, tv } from "tailwind-variants";
import { FieldError, FormHelperText, Label, fieldBorderStyles } from "../field";
import {
  DropdownItem,
  DropdownSection,
  type DropdownSectionProps,
} from "../list-box";

const styles = tv({
  extend: focusRing,
  base: "flex items-center text-start gap-4 w-full cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-lg pl-3 pr-2 py-1.5 min-w-[150px] transition",
  variants: {
    ...fieldBorderStyles.variants,
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    isDisabled: {
      false:
        "text-gray-800 hover:bg-gray-100 pressed:bg-gray-200 group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
      true: "text-gray-600 forced-colors:text-[GrayText] forced-colors:border-[GrayText]",
    },
    variant: {
      borderless: "border-0",
      primary: " border border-black/10",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  leftIcon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  rightIcon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  defaultValue?: T | null;
  chevron?: boolean;
  variant?: VariantProps<typeof styles>["variant"];
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  defaultValue,
  chevron = true,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex w-full flex-grow flex-col gap-1",
      )}
    >
      {label && <Label className="text-primary" isRequired={props.isRequired}>{label}</Label>}
      <Button
        className={composeRenderProps("", (className, renderProps) =>
          styles({ ...renderProps, variant: props.variant }),
        )}
      >
        {props.leftIcon && <props.leftIcon className="h-4 w-4 text-primary" />}
        <SelectValue className="flex-1 text-sm placeholder-shown:italic text-primary group-disabled:text-gray-400" />
        {chevron && (
          <ChevronDown
            aria-hidden
            className="h-4 w-4 text-primary group-disabled:text-gray-400 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
          />
        )}
        {props.rightIcon && <props.rightIcon className="h-4 w-4 text-primary" />}
      </Button>
      {description && <FormHelperText className="text-primary">{description}</FormHelperText>}
      <FieldError className="text-primary">{errorMessage}</FieldError>
      <Popover className="min-w-[--trigger-width]">
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem className="text-primary" {...props} />;
}

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection className="text-primary" {...props} />;
}
