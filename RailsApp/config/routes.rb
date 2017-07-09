Rails.application.routes.draw do
  devise_for :students
  root to: "home#index"
  get 'dashboard', to: 'home#dashboard'
  get 'upload', to: 'home#upload'                                                                                                                                                                                     
  get 'forms', to: 'home#forms'
  get 'basic', to: 'home#basic'                                                                                                                                                                             
  post 'submit', to: 'home#submit'    
end

