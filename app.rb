require 'sinatra/base'

class App < Sinatra::Base
  enable :sessions

  get '/' do
    File.read('public/index.html')
    # session[:search] = params[:search]
  end

  run! if app_file == $0
end
