require 'sinatra/base'

class App < Sinatra::Base

get '/' do
    File.read('index.html')
end

run! if app_file == $0
end
