import { takeLatest, put, select } from "redux-saga/effects";
import { StringMappingType } from "typescript";
import { getUsersByAxios } from "../../service/api/jph";
import { JPH_ACTION } from "../../service/const/actionConst";
import { JphModel } from "../../service/type/model/jphUserModel";
import { JphResponse } from "../../service/type/response/jphUserResponse";
import { getJphFailureAction, getJphSuccessAction } from "./jphAction";
import { JPH_REQUEST_TYPE } from "./jphAction.interface";

const { JPH_ACTION_REQUEST, JPH_ACTION_SUCCESS, JPH_ACTION_FAILURE } =
  JPH_ACTION;

function* getJphRequestFromSaga(action: JPH_REQUEST_TYPE): any {
  const jphUserData = yield getUsersByAxios();
  console.log(jphUserData);
  //generator syntax

  // F E T C H !!
  //   const jphUserData = yield fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //     {
  //       method: "GET", //데이터를 받는 역활, POST: 서버에 보내는 역활,
  //       body: null,
  //       headers: {},
  //     }
  //   );
  // const jphUserDataResponse: JphResponse[] = yield jphUserData.json();

  // const parsedJphUserData: JphModel[] = jphUserData.map(
  //   (jphUserData: JphResponse) => {
  //     return {
  //       id: jphUserData.id ?? 0,
  //       name: jphUserData.name ?? "Taehwan",
  //       username: jphUserData.username ?? "stringId",
  //       email: jphUserData.email ?? "qweqwe@gmail.com",
  //       phone: jphUserData.phone ?? "1231231233",
  //       website: jphUserData.website ?? "http://www.google.ca",
  //       address: jphUserData.address ?? "No address",
  //     };
  //   }
  // );

  if (jphUserData.length > 0) {
    yield put(getJphSuccessAction(jphUserData));
  } else {
    yield put(getJphFailureAction(new Error("There is no data")));
  }
}

export function* jphSagaWatcher() {
  //yield takeLaster ()
  yield takeLatest(JPH_ACTION_REQUEST, getJphRequestFromSaga);
}
