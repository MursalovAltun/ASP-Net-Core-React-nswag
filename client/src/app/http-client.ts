import axios, { AxiosError } from "axios";
import { AppDispatch } from "./store";
import { showSnackbar } from "../components/snackbarSlice";

const httpClient = axios.create();

export const setupInterceptors = (dispatch: AppDispatch) => {
  httpClient.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    console.log('UNEXPECTED - ', error.response?.status);
    dispatch(showSnackbar({ message: 'Error', type: "error" }))
  });
}

export default httpClient;
