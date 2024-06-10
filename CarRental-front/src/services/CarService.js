import { Api } from "./config";

export const createCar = async (payload) => {
  const response = {
    date: null,
    err: null,
  };
  await Api.post("addCar", payload)
    .then((res) => {
      response.data = res;
    })
    .catch((err) => {
      response.err = err;
    });
  return response;
};

export const getAllCars = async () => {
  let response = await Api.get("/getAllCars");

  if (response.data) {
    return response.data;
  }
  return null;
};
