require 'sinatra/base'

class App < Sinatra::Base

get '/' do
  'hello'
end

run! if app_file == $0
end
