feature('temperature') do
  before do
    visit('/')
  end
  it 'is 20 default' do
    expect(find('#temperature')).to have_content('20')
  end
  it 'can be turned up' do
    page.find('#up').click
    expect(find('#temperature')).to have_content('21')
  end
  it 'can be turned down' do
    page.find('#down').click
    expect(find('#temperature')).to have_content('19')
  end
  it 'reaches minimum of 10' do
    11.times { page.find('#down').click }
    expect(find('#temperature')).to have_content('10')

  end
  it 'can be reset' do
    page.find('#down').click
    page.find('#reset').click
    expect(find('#temperature')).to have_content('20')
  end
  it 'cant go over 25 if powersaving is on' do
    7.times { page.find('#up').click }
    expect(find('#temperature')).to have_content('25')
  end
  it 'goes to 32 if power saving is off' do
    page.find('#power-saving-mode-on').click
    page.find('#power-saving-mode-off').click
    15.times { page.find('#up').click }
    expect(find('#temperature')).to have_content('32')
  end

end
