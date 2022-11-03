import { takeLatest, put, select } from "redux-saga/effects";
import { JPH_ACTION } from "../../service/const/actionConst";
import { JphModel } from "../../service/type/model/jphUserModel";
import { JphResponse } from "../../service/type/response/jphUserResponse";
import { getJphFailureAction, getJphSuccessAction } from "./jphAction";
import { JPH_REQUEST_TYPE } from "./jphAction.interface";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

function* getJphRequestFromSaga(action: JPH_REQUEST_TYPE): any {
  //generator syntax

  const jphUserData = yield fetch("https://jsonplaceholder.typicode.com/users");
  const jphUserDataResponse: JphResponse[] = yield jphUserData.json();

  const parsedJphUserData: JphModel[] = jphUserDataResponse.map(
    (jphUserData: JphResponse) => {
      return {
        id: jphUserData.id ?? 0,
        name: jphUserData.name ?? "Taehwan",
        username: jphUserData.username ?? "stringId",
        email: jphUserData.email ?? "qweqwe@gmail.com",
        phone: jphUserData.phone ?? "1231231233",
        website: jphUserData.website ?? "http://www.google.ca",
        address: jphUserData.address ?? "No address",
      };
    }
  );

  if (parsedJphUserData) {
    yield put(getJphSuccessAction(parsedJphUserData));
  } else {
    yield put(getJphFailureAction(new Error("There is no data")));
  }
}

export function* jphSagaWatcher() {
  //yield takeLaster ()
  yield takeLatest(JPH_ACTION_REQUEST, getJphRequestFromSaga);
}
