import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import FALLBACK_MESSAGES from "./constants";
import { ErrorMap } from "./types";

const getStatus = (code: number): "success" | "error" | "accepted" => {
  switch (code) {
    case StatusCodes.OK:
    case StatusCodes.CREATED:
      return "success";
    case StatusCodes.ACCEPTED:
      return "accepted";
    default:
      return "error";
  }
};

const getStatusMessage = (code: number, message?: string): string => {
  const fallback = FALLBACK_MESSAGES;
  if (message?.trim()) return message;

  switch (code) {
    case StatusCodes.OK:
    case StatusCodes.CREATED:
      return fallback.RequestOk;
    case StatusCodes.ACCEPTED:
      return fallback.RequestAccepted;
    case StatusCodes.BAD_REQUEST:
      return fallback.BadRequestMsg;
    case StatusCodes.UNAUTHORIZED:
      return fallback.UnauthorizedMsg;
    case StatusCodes.FORBIDDEN:
      return fallback.ForbiddenMsg;
    case StatusCodes.NOT_FOUND:
      return fallback.NotFoundMsg;
    case StatusCodes.REQUEST_TIMEOUT:
      return fallback.TimeOutMsg;
    case StatusCodes.SERVICE_UNAVAILABLE:
      return fallback.ServiceUnavailableMsg;
    case StatusCodes.INTERNAL_SERVER_ERROR:
      return fallback.InternalServerErrorMsg;
    case StatusCodes.UNPROCESSABLE_ENTITY:
    default:
      return fallback.UnprocessableEntityMsg;
  }
};

const jsonResponse = (
  code: number,
  res: Response,
  data: any = null,
  message?: string,
  errors: ErrorMap = {}
) => {
  const success = code >= 200 && code < 300;

  const response = {
    success,
    status: getStatus(code),
    code,
    message: getStatusMessage(code, message),
    ...(success ? { data } : { errors }),
  };

  res.status(code).json(response);
};

export default jsonResponse;
