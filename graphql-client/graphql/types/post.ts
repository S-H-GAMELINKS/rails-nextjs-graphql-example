export interface Post {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreatedPost {
    post: Post;
}

export interface CreatePostInput {
    title?: string;
    body?: string;
}