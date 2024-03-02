import { checkResponse } from "./api";

const baseUrl = 'http://localhost:3001';

export const signin = ({email, password}) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => {return checkResponse(res)});
  };