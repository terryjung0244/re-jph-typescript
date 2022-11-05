import {
  JphAddressFromResponse,
  JphResponse,
} from "../response/jphUserResponse";

export interface JphModel {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: JphAddressFromResponse | string;
}

export const parsedJphUserData = (jphUserData: JphResponse[]): JphModel[] => {
  return jphUserData.map((jphUserData: JphResponse) => {
    return {
      id: jphUserData.id ?? 0,
      name: jphUserData.name ?? "Taehwan",
      username: jphUserData.username ?? "stringId",
      email: jphUserData.email ?? "qweqwe@gmail.com",
      phone: jphUserData.phone ?? "1231231233",
      website: jphUserData.website ?? "http://www.google.ca",
      address: jphUserData.address ?? "No address",
    };
  });
};
