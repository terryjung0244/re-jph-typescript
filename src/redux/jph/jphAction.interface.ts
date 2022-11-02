import { JPH_ACTION } from "../../service/const/actionConst";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

export type JPH_REQUEST_TYPE = {
  type: typeof JPH_ACTION_REQUEST;
};

export type JPH_SUCCESS_TYPE = {
  type: typeof JPH_ACTION_SUCCESS;
  payload: any;
};

export type JPH_FAILURE_TYPE = {
  type: typeof JPH_ACTION_FAILURE;
  payload: any;
};

export type JPH_ACTION_TYPES =
  | JPH_REQUEST_TYPE
  | JPH_SUCCESS_TYPE
  | JPH_FAILURE_TYPE;
