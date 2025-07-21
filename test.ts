import { StatusCodes } from "http-status-codes";
import FALLBACK_MESSAGES from "./src/constants";

console.log("Fallback:", FALLBACK_MESSAGES.RequestOk);
console.log("Code 200:", StatusCodes.OK);
