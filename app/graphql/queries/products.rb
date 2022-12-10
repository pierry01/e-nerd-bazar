# frozen_string_literal: true

module Queries
  class Products < Queries::BaseQuery
    description "GET an array of Product"

    type [Types::Product], null: true

    def resolve
      Product.all
    end
  end
end
