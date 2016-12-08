Rails.application.routes.draw do
  resources :articles do
    collection do
      get :welcome
    end
  end

  devise_for :users

  root to: "articles#welcome"
end
