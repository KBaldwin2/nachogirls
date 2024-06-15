import { ReactNode } from "react";
import { MediumTitle } from "./title-md";

export const PageHeader = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <div className="h-[300px] flex items-center">
      <div className="flex justify-between mx-16 my-2 w-full">
        <div>
          <h1 className="text-4xl md:text-7xl text-primary-500 font-bold tracking-tighter leading-tight md:pr-8">
            {title}
          </h1>
          <MediumTitle title={description} className="text-primary-500" />
        </div>
        {children}
      </div>
    </div>
  );
};
