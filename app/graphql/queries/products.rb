# frozen_string_literal: true

module Queries
  class Products < Queries::BaseQuery
    description "GET an array of Product"

    type [Types::Product], null: true

    argument :search_term, String, "Search term", required: false

    def resolve(search_term: "")
      return Product.all if search_term.blank?

      Product.where("name ILIKE '%#{search_term}%'")
    end
  end
end
