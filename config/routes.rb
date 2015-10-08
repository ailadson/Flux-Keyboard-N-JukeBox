Rails.application.routes.draw do
  resources :tracks, only: [:create, :index, :destroy]

  root 'static_pages#root'
end
