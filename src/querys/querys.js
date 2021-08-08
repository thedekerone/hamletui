import { gql } from "@apollo/client";

export const allSounds = (first = 0, skip = 0) => gql`
  {
    allSounds(first:${first}, skip:${skip}) {
        title
        file{
          publicUrl
        }
        author{
          name
        }
        liking{
          id
        }
        
        id
      }
      
  }
`;

export const favoriteSounds = (
  id = "60af0be3351c033080892cfb",
  first = 0,
  skip = 0
) => gql`
  {
    allSounds(where:{
        liking_some : {id:"${id}"}
      },first:${first}, skip:${skip}) {
        title
        file{
          publicUrl
        }
        author{
          name
        }
        liking{
          id
        }
        
        id
      }
  }
`;

export const getUser = () => gql`
{
  allSounds(first:${first}, skip:${skip}) {
      title
      file{
        publicUrl
      }
      author{
        name
      }
      liking{
        id
      }
      
      id
    }
}
`;
export const authenticateUserWithPassword = () => gql`
  mutation {
    authenticateUserWithPassword(
      email: "mauriciofow@gmail.com"
      password: "internetes"
    ) {
      token
    }
  }
`;
