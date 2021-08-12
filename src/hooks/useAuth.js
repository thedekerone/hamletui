import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { authenticateUserWithPassword } from "../querys/querys";

export const useAuth = () => {
  const [singin, { error, loading, data }] = useMutation(
    authenticateUserWithPassword,
    {
      variables: {
        email: "mauriciofow@gmail.com",
        password: "internetes",
      },
    }
  );

  return <div></div>;
};
