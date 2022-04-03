import { gql } from '@apollo/client';

export const POST_QUERY = gql`
query($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`