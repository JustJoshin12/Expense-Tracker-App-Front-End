const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
};

export const createIncome = ({
  category,
  amount,
  title,
  description,
  date,
}) => {
  return fetch(`${baseUrl}/income`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ category, amount, title, description, date }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllIncomes = () => {
  return fetch(`${baseUrl}/income`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const updateIncome = ({
  id,
  category,
  amount,
  title,
  description,
  date,
}) => {
  return fetch(`${baseUrl}/income/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ category, amount, title, description, date }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const deleteIncome = (id) => {
  return fetch(`${baseUrl}/income/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};


export const createExpense = ({
  category,
  amount,
  title,
  description,
  date,
}) => {
  return fetch(`${baseUrl}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ category, amount, title, description, date }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllExpenses = () => {
  return fetch(`${baseUrl}/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const updateExpense = ({
  id,
  category,
  amount,
  title,
  description,
  date,
}) => {
  return fetch(`${baseUrl}/expenses/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ category, amount, title, description, date }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const deleteExpense = (id) => {
  return fetch(`${baseUrl}/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};
