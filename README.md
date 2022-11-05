# API Call Method

1. fetch (자바스크립트에 내장된 )
2. axios
3. XML Request
4. ...

# Api Call 3 ways

1. Restful API, 95% 사용됨.

---

Props

- CRUD Operation (GET, POST, PUT, DELETE (Fetch))
- Complete separation between client and server
- Can recognize each API role by endpoint

Cons

- Over fetching: There is data as shown example below:
  It needs to call all the data even though if you need "name: 'Terry'" only
  which means, simply when an API request returns too much data that you're not going to use.

{
name: 'Terry',
age: 30,
address: {
province: 'ontario',
country: 'CA'
city: 'Toronto
}
}

- Under fetching

---

2. GraphQL

---

Props

- Solve over fetching
  It seperately can call Api if you need "name: 'Terry'" only.

- Solve under fetching by one request
- Only one endpoint

Cons

- File Upload
- Hard to filter wrong request

3. Soap

- fetch and axios are methods for Restful Api.
