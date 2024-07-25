"use client"
import { useState } from "react";
import { parseWithZod } from "@conform-to/zod";
import {
  Form as RACForm,
  type FormProps as RAFormProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { type z, type ZodTypeAny } from "zod";
import { type FieldErrors } from "./types";
import { ServerErrorAlert } from "@/ui/feedback/alert";

type FormProps<TSchema extends ZodTypeAny> = Omit<
  RAFormProps,
  "validationErrors" | "onSubmit"
> & {
  schema: TSchema;
  onSubmit: (values: z.infer<TSchema>) => void;
};

export const Form = <TSchema extends ZodTypeAny>({
  onSubmit,
  children,
  schema,
  ...props
}: FormProps<TSchema>) => {
  const [formError, setFormError] = useState<FieldErrors | null>(null);

  return (
    <RACForm
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        const result = parseWithZod(new FormData(e.currentTarget), {
          schema,
        });

        console.log(result)

        if (result.status !== "success") {
          setFormError(result.error);
          return;
        }

        onSubmit(result.value);
      }}
      validationErrors={
        formError as {
          [x: string]: string[];
          [x: number]: string[];
          [x: symbol]: string[];
        }
      }
      className={twMerge("space-y-6", props.className)}
    >
      {children}
    </RACForm>
  );
};
