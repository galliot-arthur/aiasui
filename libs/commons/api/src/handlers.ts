import { NextResponse } from "next/server";
import {
  API_GLOBAL_ERROR,
  BAD_REQUEST_ERROR,
  FORBIDDEN_ERROR,
  NOT_FOUND_ERROR,
} from "../../domain";

const HEADERS = { "Content-Type": "application/json" } as const;

const apiSuccess = (data: unknown) =>
  NextResponse.json(data, {
    status: 200,
    headers: HEADERS,
  });

const apiGlobalError = NextResponse.json(
  { message: API_GLOBAL_ERROR, status: 500 },
  { status: 500, headers: HEADERS }
);

const notFoundError = NextResponse.json(
  { message: NOT_FOUND_ERROR, status: 404 },
  { status: 404, headers: HEADERS }
);

const badRequestError = NextResponse.json(
  { message: BAD_REQUEST_ERROR, status: 400 },
  { status: 400, headers: HEADERS }
);

const badRequestErrorWithData = (element: Object) =>
  NextResponse.json(
    { ...element, status: 400 },
    { status: 400, headers: HEADERS }
  );

const forbiddenError = NextResponse.json(
  { message: FORBIDDEN_ERROR, status: 403 },
  { status: 403, headers: HEADERS }
);

export const ApiResponse = {
  apiSuccess,
  apiGlobalError,
  notFoundError,
  badRequestError,
  badRequestErrorWithData,
  forbiddenError,
};
