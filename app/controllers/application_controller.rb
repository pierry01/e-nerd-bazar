# frozen_string_literal: true

class ApplicationController < ActionController::Base
  respond_to :html, :json
  skip_before_action :verify_authenticity_token

  def index
  end
end
