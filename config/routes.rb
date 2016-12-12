Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  resources :articles do
    collection do
      get :welcome
    end
  end

  devise_for :users

  resources :users

  root to: "articles#welcome"
end
