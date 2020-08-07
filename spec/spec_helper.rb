require 'capybara/rspec'
require_relative '../app'
require_relative '../database_connection_setup.rb'

ENV['ENV'] ='test'

RSpec.configure do |config|
  config.before(:each) do
    setup_test_database
  end
end

Capybara.default_driver = :selenium
Capybara.app = App
