# frozen_string_literal: true

Rails.application.routes.draw do
  root "application#index"

  post "/graphql", to: "graphql#execute"

  devise_for :users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
end
