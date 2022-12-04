# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"
gem "rails", "~> 7.0.4"

gem "activeadmin", "~> 2.13.1"
gem "bootsnap", require: false

gem "devise-i18n", "~> 1.10.2"
gem "devise-jwt", "~> 0.9.0"
gem "devise", "~> 4.8.1"

gem "graphql", "~> 2.0.11"
gem "graphiql-rails", group: :development

gem "jbuilder"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"

gem "propshaft", "~> 0.6.4"
gem "jsbundling-rails", "~> 1.0.2"
gem "cssbundling-rails", "~> 1.1.1"

group :development, :test do
  gem "brakeman", "~> 5.3.1"
  gem "bullet", "~> 7.0.3"
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "factory_bot_rails", "~> 6.2.0"
  gem "foreman", "~> 0.87.2"
  gem "listen", "~> 3.7.1"
  gem "prettier", "~> 3.2.2"
  gem "reek", "~> 6.1.1"
  gem "rspec-rails", "~> 6.0.1"
  gem "rubocop-graphql", "~> 0.18.0", require: false
  gem "rubocop-performance", "~> 1.15.0", require: false
  gem "rubocop-rails", "~> 2.17.2", require: false
  gem "rubocop-rspec", "~> 2.15.0", require: false
  gem "rubocop-shopify", "~> 2.10.1", require: false
  gem "rubocop", "~> 1.38.0", require: false
  gem "shoulda-matchers", "~> 5.2.0"
  gem "solargraph", "~> 0.47.2"
  gem "spring", "~> 4.1.0"
  gem "vcr", "~> 6.1.0"
  gem "web-console", "~> 4.2.0"
end

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
