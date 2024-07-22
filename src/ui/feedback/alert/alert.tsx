import { XCircleIcon } from "lucide-react";

type AlertProps = {
  title: string;
  message: string;
};

export const Alert = ({ title, message }: AlertProps) => {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <p className="mt-2 text-sm text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
};
