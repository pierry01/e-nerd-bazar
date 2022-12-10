# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :user

  validates :description, :name, :price, presence: true
end
