import React from "react";

type FormSectionProps = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export const FormSection = ({
  title,
  description,
  children,
}: FormSectionProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
      <div className="px-4 sm:px-0">
        <h2 className="text-base md:text-lg font-semibold leading-7 text-primary">
          {title}
        </h2>
        {description && (
          <div className="mt-1 text-sm md:text-base leading-6 text-primary">
            {description}
          </div>
        )}
      </div>

      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
