/* eslint-disable react-hooks/exhaustive-deps */
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";

const useFetching = (someFetchActionCreator: any) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(someFetchActionCreator());
  }, [])
}

export default useFetching;
