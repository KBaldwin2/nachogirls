import { InfoIcon } from "lucide-react";

type InfoAlertProps = {
  message: string;
};

export const InfoAlert = ({ message }: InfoAlertProps) => {
  return (
    <div className="rounded-md bg-blue-50 px-4 py-2">
      <div className="flex">
        <div className="mt-[1px] flex-shrink-0">
          <InfoIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <span
            dangerouslySetInnerHTML={{ __html: message }}
            className="text-blue-700"
          />
        </div>
      </div>
    </div>
  );
};
