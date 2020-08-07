require 'capybara/rspec'
require_relative '../app'

RSpec.configure do |config|
  config.before(:each) do

  end
end

Capybara.default_driver = :selenium
Capybara.app = App
