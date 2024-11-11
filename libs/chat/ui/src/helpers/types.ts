import { ErrorResponse } from "@commons/domain";

export interface ChatState {
  isLoading: boolean;
  error: ErrorResponse | string | null;
}
