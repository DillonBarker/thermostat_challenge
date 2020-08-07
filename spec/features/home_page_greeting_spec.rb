feature 'The home page title' do
  scenario "The home page displays Dills' Thermometer" do
    visit('/')
    expect(page).to have_content("Dills' Thermometer")
  end
end
