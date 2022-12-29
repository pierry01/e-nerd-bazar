# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  before_action :set_no_cache

  def create
    return super unless request.format.html?

    self.resource = warden.authenticate!(scope: resource_name, store: true)

    sign_in(resource_name, resource)

    yield resource if block_given?

    respond_with(resource, location: after_sign_in_path_for(resource))
  end

  private

  def set_no_cache
    response.headers["Pragma"] = "no-cache"
    response.headers["Content-Security-Policy"] = "default-src 'none'"
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
  end
end
