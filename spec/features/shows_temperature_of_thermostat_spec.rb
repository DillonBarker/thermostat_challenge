feature('temperature') do
  scenario('shows the temperature of the thermostat') do
    visit('/')
    expect(find('#temperature')).to have_content('20')
  end
end
