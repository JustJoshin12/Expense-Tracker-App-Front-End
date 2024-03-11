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

export const signup = ({name,email,password,userName,avatar,totalIncome}) => {
  return fetch(`${baseUrl}/signup`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name,email,password,userName,avatar,totalIncome}),
  }).then((response) => {
    checkResponse(response);
  });
}