# frozen_string_literal: true

class GraphqlController < ApiController
  include ActiveStorage::SetCurrent

  before_action :set_heroku_release_version

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = { current_user: current_user, ip_address: request.remote_ip }

    parsed_json =
      EnerdbazarSchema.execute(query, variables:, context:, operation_name:)

    render(json: parsed_json)
  rescue StandardError => error
    message = "GRAPHQL ERROR AT #{Time.current} -> #{error}"

    Rails.logger.debug(message)
  end

  private

  def set_heroku_release_version
    response.headers["Heroku-Release-Version"] = ENV["HEROKU_RELEASE_VERSION"]
  end

  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      ambiguous_param.present? ? ensure_hash(JSON.parse(ambiguous_param)) : {}
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
end
