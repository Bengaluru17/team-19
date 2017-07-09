Rails.application.routes.draw do
  devise_for :students
  root to: "home#index"
  get 'dashboard', to: 'home#dashboard'                                                                                                                                                                                      
  get 'forms', to: 'questions#forms'
  get 'basic', to: 'home#basic'                                                                                                                                                                             
  post 'submit', to: 'home#submit'    
end

