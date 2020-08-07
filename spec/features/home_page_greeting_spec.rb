feature('The home page title') do
  scenario("The home page displays Dills' Thermostat") do
    visit('/')
    expect(page).to have_content("DILLS' THERMOSTAT")
  end
end
