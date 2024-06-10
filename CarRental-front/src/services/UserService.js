import { Api } from "./config";

export const createUser = async (payload) => {
  const response = {
    data: null,
    err: null,
  };
  await Api.post("registre", payload)
    .then((res) => {
      response.data = res;
    })
    .catch((err) => {
      response.err = err;
    });
  return response;
};
