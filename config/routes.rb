Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  resources :articles do
    collection do
      get :welcome
      post :set_hot
    end
  end

  devise_for :users

  resources :users do
    collection do
      get :welcome
      get :application
    end
  end


  root to: "articles#welcome"
end
