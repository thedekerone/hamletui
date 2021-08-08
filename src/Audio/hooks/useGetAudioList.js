import { ApolloError, gql, useQuery } from "@apollo/client";
import { Sound } from "../components/types";

const EXCHANGE_RATES = gql`
  query getSounds {
    allSounds {
      file {
        publicUrl
      }
      title
      id
    }
  }
`;

export const useGetAudioList = () => {
  const response = useQuery(EXCHANGE_RATES);
  const { loading, error } = response;
  const { data } = response;
  if (loading || error) return { loading, error, data };

  const formatedData = data.allSounds.map((el) => ({
    title: el.title,
    url: el.file.publicUrl,
    id: el.id,
    playing: false,
  }));

  return { loading, error, data: formatedData };
};

export const not = () => {};
