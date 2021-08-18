import { gql } from "@apollo/client";

export const GET_ALL_SOUNDS = gql`
  query GET_ALL_SOUNDS($first: Int!, $skip: Int!) {
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

export const LIKE_SOUND = gql`
  mutation LIKE_SOUND($audioId: ID!, $userId: ID!) {
    updateSound(id: $audioId, data: { liking: { connect: { id: $userId } } }) {
      id
    }
  }
`;
export const DISLIKE_SOUND = gql`
  mutation DISLIKE_SOUND($audioId: ID!, $userId: ID!) {
    updateSound(
      id: $audioId
      data: { liking: { disconnect: { id: $userId } } }
    ) {
      id
    }
  }
`;
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

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      favoriteSounds {
        title
        id
        author {
          name
        }
        file {
          publicUrl
        }
        liking {
          id
        }
      }
    }
  }
`;
