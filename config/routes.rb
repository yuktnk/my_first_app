Rails.application.routes.draw do

  devise_for :users
  root "posts#index"
  resources :users, only: [:index, :new, :edit, :update, :show]
  resources :posts do
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    collection do
      get 'search'
    end
  end
end
