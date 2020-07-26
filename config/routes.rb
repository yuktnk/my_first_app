Rails.application.routes.draw do

  get 'posts/index'
  root "posts#index"
  get 'posts/detail', to: "posts#detail"

end
