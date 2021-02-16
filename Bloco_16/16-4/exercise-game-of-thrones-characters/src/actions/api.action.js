import { REQUEST_API, GET_CHARACTER, FAILED_REQUEST } from "./constants/api";

export const requestApi = () => ({
  type: REQUEST_API
})

export const getCharacter = (data) => ({
  type: GET_CHARACTER,
  data
});

export const failedRequest = (message) => ({
  type: FAILED_REQUEST,
  message
});
