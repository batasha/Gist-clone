GistClone::Application.routes.draw do
  resources :users

  resources :gists do
    resource :favorite, :only => [:create, :destroy]
  end

  resources :favorites, :only => [:index]

  resource :session

  root to: "gists#index"
end
