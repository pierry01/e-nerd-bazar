# frozen_string_literal: true

module Types
  class User < Types::BaseObject
    description "User"

    field :cpf_cnpj, String, "CPF or CNPJ", null: false
    field :email, String, "E-mail", null: false
    field :full_name, String, "Full name", null: false
    field :id, ID, "ID", null: false
  end
end
