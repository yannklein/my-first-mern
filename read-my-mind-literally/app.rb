require_relative 'config/application'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'pry'

get '/' do
  @message = Message.last
  # binding.pry
  @message = {
    verse_1: 'Que toujours, dans vos vers, le sens coupant les mots',
    verse_2: "Suspende l'hémistiche, en marque le repos."
  } if @message.nil?
  erb :message
end

get '/write-my-mind' do
  erb :new_message
end

get '/:id' do
  begin
    @message = Message.find params[:id]
  rescue ActiveRecord::RecordNotFound => e
    @message = nil
  end
  @message = {
    verse_1: 'Que toujours, dans vos vers, le sens coupant les mots',
    verse_2: "Suspende l'hémistiche, en marque le repos."
  } if @message.nil?
  erb :message
end

post '/write-my-mind' do
 Message.create(verse_1: params["verse_1"], verse_2: params["verse_2"])
end
