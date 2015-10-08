Rails.application.routes.draw do
  get 'tracks/create'

  get 'tracks/index'

  get 'tracks/destroy'

  root 'static_pages#root'
end
