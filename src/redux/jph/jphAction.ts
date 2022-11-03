import { JPH_ACTION } from "../../service/const/actionConst";
import { JphModel } from "../../service/type/model/jphUserModel";
import {
  JPH_FAILURE_TYPE,
  JPH_REQUEST_TYPE,
  JPH_SUCCESS_TYPE,
} from "./jphAction.interface";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

export const getJphRequestAction = (): JPH_REQUEST_TYPE => {
  return {
    type: JPH_ACTION_REQUEST,
    payload: null,
  };
};

export const getJphSuccessAction = (
  dataFromServer: JphModel[]
): JPH_SUCCESS_TYPE => {
  return {
    type: JPH_ACTION_SUCCESS,
    payload: dataFromServer,
  };
};

export const getJphFailureAction = (
  dataFromServer: Error
): JPH_FAILURE_TYPE => {
  return {
    type: JPH_ACTION_FAILURE,
    payload: dataFromServer,
  };
};
