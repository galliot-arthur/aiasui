import { ErrorOutline, Loop } from "@material-ui/icons";
import { ChatState } from "../helpers/types";
import { API_ERRORS, ErrorResponse } from "@commons/domain";
import { i18n } from "@commons/ui";

export function Status({ isLoading, error }: ChatState) {
  return (
    <>
      {error !== null && (
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-red-300 mb-1">
            <ErrorOutline fontSize="small" color="inherit" />
          </p>
          <p className="text-red-500 text-sm">{errorMapper(error)}</p>
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

const errorMapper = (error: string | ErrorResponse) => {
  if (typeof error === "string") {
    return error;
  }
  if (API_ERRORS.includes(error.message)) {
    return i18n.api.errors[error.message];
  }

  return error.message;
};
