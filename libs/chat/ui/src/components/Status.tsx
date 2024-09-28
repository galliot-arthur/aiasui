import { ErrorOutline, Loop } from "@material-ui/icons";
import { ChatState } from "../helpers/types";

export function Status({ isLoading, error }: ChatState) {
  return (
    <>
      {error !== null && (
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-red-300 mb-1">
            <ErrorOutline fontSize="small" color="inherit" />
          </p>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center w-full">
          <p className="animate-spin text-green-300">
            <Loop fontSize="large" color="inherit" />
          </p>
        </div>
      )}
    </>
  );
}
