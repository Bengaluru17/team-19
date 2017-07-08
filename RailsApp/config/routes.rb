Rails.application.routes.draw do
  devise_for :students
  root to: "home#index"
  get 'index', to: 'main#index'                                                                                                                                                                                      
  get 'dashboard', to: 'main#dashboard'                                                                                                                                                                              
  get 'forms', to: 'questions#forms'                                                                                                                                                                                 
  post 'questions/submit', to: 'questions#submit'    
end

