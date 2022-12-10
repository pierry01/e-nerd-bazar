# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
         :recoverable,
         :rememberable,
         :lockable,
         :trackable,
         :validatable

  validates :full_name, :cpf_cnpj, presence: true

  belongs_to :seller, optional: true
end
