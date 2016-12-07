Rails.application.routes.draw do
  devise_for :users
  get 'visitors/index'

  root to: "visitors#index"
end
