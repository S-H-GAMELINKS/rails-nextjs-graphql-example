module Mutations
  module Posts
    class CreatePost < Mutations::BaseMutation
      field :post, Types::PostType, null: false

      argument :title, String, required: true
      argument :body, String, required: true

      def resolve(**params)
        post = Post.create!(**params)
        { post: post }
      end
    end
  end
end
