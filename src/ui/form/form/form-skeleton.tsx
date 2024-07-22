import { Skeleton } from "@/ui/feedback/skeleton";
import {
  FormActionRow,
  FormDivider,
  FormSection,
  FormSectionCol,
} from "../layout";
import { Fragment } from "react";

export type FormSkeletonProps = {
  formSectionCount?: number;
};

export const FormSkeleton = ({ formSectionCount = 2 }: FormSkeletonProps) => {
  const arr = Array.from({ length: formSectionCount }, (_, i) => i);

  return (
    <div className="space-y-6">
      {arr.map((x) => (
        <Fragment key={x}>
          <FormSection
            title={
              <Skeleton
                width={150}
                height={24}
                className="text-base font-semibold leading-5 text-neutral-900"
              />
            }
            description={
              <>
                <Skeleton
                  width={190}
                  height={20}
                  className="mt-1 text-sm text-neutral-500"
                />

                <Skeleton
                  width={75}
                  height={20}
                  className="mt-1 text-sm text-neutral-500"
                />
              </>
            }
          >
            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>

            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>

            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol colSpan={3}>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
            <FormSectionCol>
              <div className="flex w-full flex-col gap-1">
                <Skeleton height={40} className="w-full" />
              </div>
            </FormSectionCol>
          </FormSection>

          <FormDivider />
        </Fragment>
      ))}
      <FormActionRow>
        <Skeleton width={80} height={36} />
        <Skeleton width={80} height={36} />
      </FormActionRow>
    </div>
  );
};
