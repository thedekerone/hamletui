import { gql } from "@apollo/client";

export const GET_ALL_SOUNDS = gql`
  query GET_ALL_SOUNDS($first: string!, $skip: string!) {
    allSounds(first: $first, skip: $skip) {
      title
      file {
        publicUrl
      }
      author {
        name
      }
      liking {
        id
      }

      id
    }
  }
`;

// export const favoriteSounds = (id = "", first = 0, skip = 0) => {
//   if (!id) {
//     throw new Error("un id es obligatorio");
//   }

//   return gql`
//     {
//       allSounds(where:{
//           liking_some : {id:"${id}"}
//         },first:${first}, skip:${skip}) {
//           title
//           file{
//             publicUrl
//           }
//           author{
//             name
//           }
//           liking{
//             id
//           }

//           id
//         }
//     }
//   `;
// };

// export const getUser = () => gql`
// {
//   allSounds(first:${first}, skip:${skip}) {
//       title
//       file{
//         publicUrl
//       }
//       author{
//         name
//       }
//       liking{
//         id
//       }

//       id
//     }
// }
// `;

export const getAuthenticatedUser = gql`
  query CURRENT_USER_QUERY {
    authenticatedUser {
      id
      name
      email
    }
  }
`;

export const authenticateUserWithPassword = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        id
      }
    }
  }
`;
