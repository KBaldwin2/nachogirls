import { AlertTriangle } from "lucide-react";
import { SmallTitle } from "../title-sm";

export function NotFoundError() {
  return (
    <div className=" m-4 bg-red-100 w-[500px] h-[150px] border border-red-500 rounded-md flex flex-col justify-center">
      <div className="mb-2 flex items-center justify-center gap-2">
        <AlertTriangle color="red" />
        <SmallTitle title="Something Went Wrong!" />
      </div>
      <div className="text-center">Please try again. If problem persists, contact support.</div>
    </div>
  );
}
