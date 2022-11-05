import axios, { AxiosResponse } from "axios";
import { JphModel, parsedJphUserData } from "../type/model/jphUserModel";
import { JphResponse } from "../type/response/jphUserResponse";

export const getUsersByAxios = async (): Promise<JphModel[]> => {
  const response: JphModel[] = await axios
    .get<Promise<AxiosResponse>>("https://jsonplaceholder.typicode.com/users")
    .then((response: AxiosResponse) => parsedJphUserData(response.data));
  return response;
};

// const jphUserData = yield fetch(
//   "https://jsonplaceholder.typicode.com/users",
//   {
//     method: "GET", //데이터를 받는 역활, POST: 서버에 보내는 역활,
//     body: null,
//     headers: {},
//   }
// );
// const jphUserDataResponse: JphResponse[] = yield jphUserData.json();
