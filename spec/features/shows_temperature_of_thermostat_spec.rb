feature('temperature') do
  scenario('shows the temperature of the thermostat') do
    visit('/')
    page.find('#temperature', text: '')
    expect(page).to have_content '20'
  end
end
