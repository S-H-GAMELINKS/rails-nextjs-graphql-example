import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { POSTS_QUERY, POST_QUERY, CREATE_POST_QUERY } from '../graphql/query/post';
import { Post, CreatedPost, CreatePostInput } from '../graphql/types/post';


const Home: NextPage = () => {
  const { loading, error, data } = useQuery<Post>(POSTS_QUERY);
  const [createPost, createPostMutationResult] = useMutation<CreatedPost, CreatePostInput>(CREATE_POST_QUERY);

  const [createPostParam, setCreatePostParam] = useState<CreatePostInput>();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  if (!data) return null;

  const { posts } = data;

  const handleCreatePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCreatePostParam({
      ...createPostParam,
      [name]: value
    })
  }

  console.log(posts);

  const submitCreatePost = async () => {
    if (!createPostParam?.title || !createPostParam.body) return;
    await createPost({
      variables: {
        input: {
          title: createPostParam.title,
          body: createPostParam.body,
        }
      }
    })

    const error = createPostMutationResult.error;
    console.log(error);
  }

  return (
    <>
      <div className={styles.container}>
        <div className="form-field">
          <input name="title" onChange={handleCreatePostChange} />
        </div>
        <div className="form-field">
          <input name="title" onChange={handleCreatePostChange} />
        </div>
        <div onClick={submitCreatePost}>CreatePost</div>
      </div>

      <div className={styles.container}>
        { posts.length > 0 &&
          posts.map(post => {
            return (
              <div>
                <p>{post.title}: {post.body}: {post.createdAt}</p>
              </div>
            )
          })

        }
      </div>
    </>
  )
}

export default Home
