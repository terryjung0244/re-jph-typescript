export interface JphResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JphAddressFromResponse;
  company: JphCompanyFromResponse;
  phone: string;
  website: string;
}

export interface JphAddressFromResponse {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JphGeoFromAddress;
}

export interface JphCompanyFromResponse {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface JphGeoFromAddress {
  lat: string;
  png: string;
}
