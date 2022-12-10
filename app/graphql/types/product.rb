# frozen_string_literal: true

module Types
  class Product < Types::BaseObject
    description "Product"

    field :description, String, "Description", null: false
    field :id, ID, "ID", null: false
    field :name, String, "Name", null: false
    field :price, Integer, "Price", null: false
  end
end
