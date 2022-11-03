import { JphAddressFromResponse } from "../response/jphUserResponse";

export interface JphModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: JphAddressFromResponse | string;
}
