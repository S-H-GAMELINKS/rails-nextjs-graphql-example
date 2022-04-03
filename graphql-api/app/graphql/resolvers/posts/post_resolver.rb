module Resolvers
    module Posts
        class PostResolver < Resolvers::BaseResolver
            description "Find post with ID"
            type Types::PostType, null: false

            argument :id, ID, required: true

            def resolve(id:)
                Post.find(id)
            end
        end
    end
end
