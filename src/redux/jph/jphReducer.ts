import { Reducer } from "redux";
import { JPH_ACTION } from "../../service/const/actionConst";
import { JPH_ACTION_TYPES } from "./jphAction.interface";
import { JPH_STATE_TYPE } from "./jphReducer.interface";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

const initialState: JPH_STATE_TYPE = {
  loading: false,
  error: null,
  result: [],
};

const jphReducer: Reducer<JPH_STATE_TYPE, JPH_ACTION_TYPES> = (
  state = initialState,
  action: JPH_ACTION_TYPES
): JPH_STATE_TYPE => {
  //리턴되는 값이 JPH_STATE_TYPE 이당.
  switch (action.type) {
    case JPH_ACTION_REQUEST:
      console.log("Hello from JPH_ACTION_REQUEST", 123);
      return {
        ...state,
        loading: true,
      };
    case JPH_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    case JPH_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jphReducer;
