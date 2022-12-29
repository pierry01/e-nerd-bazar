# frozen_string_literal: true

class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable,
         :recoverable,
         :rememberable,
         :lockable,
         :trackable,
         :validatable,
         :jwt_authenticatable,
         jwt_revocation_strategy: self

  validates :full_name, :cpf_cnpj, presence: true

  has_many :products, dependent: :destroy
end
