# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    description "Queries"

    field :products,
          resolver: Queries::Products,
          description: "GET a list of Product"
  end
end
