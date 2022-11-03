import { AnyAction } from "@reduxjs/toolkit";
import { JPH_ACTION } from "../../service/const/actionConst";
import { JphModel } from "../../service/type/model/jphUserModel";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

export type JPH_REQUEST_TYPE = {
  type: typeof JPH_ACTION_REQUEST;
  payload: null;
};

export type JPH_SUCCESS_TYPE = {
  type: typeof JPH_ACTION_SUCCESS;
  payload: JphModel[];
};

export type JPH_FAILURE_TYPE = {
  type: typeof JPH_ACTION_FAILURE;
  payload: Error;
};

export type JPH_ACTION_TYPES =
  | AnyAction
  | JPH_REQUEST_TYPE
  | JPH_SUCCESS_TYPE
  | JPH_FAILURE_TYPE;
