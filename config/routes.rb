Rails.application.routes.draw do
  resources :articles do
    collection do
      get :welcome
    end
  end

  devise_for :users do
    get "/signup", :to => "devise/registrations#new", :as => :signup
  end

  root to: "articles#welcome"
end
