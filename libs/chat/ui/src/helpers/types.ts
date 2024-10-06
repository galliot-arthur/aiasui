import { ErrorResponse } from "@/libs/commons/domain";

export interface ChatState {
  isLoading: boolean;
  error: ErrorResponse | string | null;
}
