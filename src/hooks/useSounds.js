import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_SOUNDS } from "../querys/querys";

export const useSounds = () => {
  const { loading, error, data } = useQuery(GET_ALL_SOUNDS);
  return { loading, error, data };
};
