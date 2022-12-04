# frozen_string_literal: true

class EnerdbazarSchema < GraphQL::Schema
  disable_introspection_entry_points if Rails.env.production?

  use(GraphQL::Dataloader)

  mutation(Types::MutationType)
  query(Types::QueryType)

  def self.unauthorized_object(_error)
    raise GraphQL::ExecutionError, "UNAUTHORIZED"
  end
end
