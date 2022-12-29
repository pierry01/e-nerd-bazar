# frozen_string_literal: true

Devise.setup do |config|
  require "devise/orm/active_record"

  config.case_insensitive_keys = %i[email]
  config.mailer_sender = '"E-Nerd Bazar" <no-reply@enerdbazar.com>'
  config.strip_whitespace_keys = %i[email]
  config.skip_session_storage = %i[http_auth]
  config.stretches = Rails.env.test? ? 1 : 11
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = true
  config.password_length = 6..128
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
  config.lock_strategy = :failed_attempts
  config.unlock_keys = %i[email]
  config.unlock_strategy = :time
  config.maximum_attempts = 5
  config.unlock_in = 10.minutes
  config.last_attempt_warning = true
  config.reset_password_within = 6.hours
  config.sign_out_via = :get

  config.jwt do |jwt|
    jwt.secret = Rails.application.credentials.devise_jwt_secret_key
    jwt.request_formats = { user: %i[json] }
    jwt.expiration_time = 7.days
  end
end
