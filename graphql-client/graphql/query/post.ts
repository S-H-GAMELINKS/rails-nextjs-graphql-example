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

export const CREATE_POST_QUERY = gql`
mutation($input: CreatePostInput!) {
  createPost(input: $input) {
    post {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
}
`