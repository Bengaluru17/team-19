Rails.application.routes.draw do
  devise_for :students
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#main'
  get 'index', to: 'main#index'
  get 'dashboard', to: 'main#dashboard'
  get 'forms', to: 'questions#forms'
  post 'questions/submit', to: 'questions#submit'

end
