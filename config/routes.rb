GistClone::Application.routes.draw do
  resources :users

  resources :gists

  resource :session

  root to: "gists#index"
end
