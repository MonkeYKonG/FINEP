Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  ## API ROUTES ##

  # Users routes
  get 'users' => 'users#get_profiles'
  post 'users/signup' => 'users#sign_up'
  post 'users/signin' => 'users#sign_in'
  post 'users/forgot' => 'users#forgot_passwd'
  patch 'users/update' => 'users#update_profile'
  get 'users/info' => 'users#get_info'

  # Contracts routes
  get 'contracts' => 'contracts#get_contracts'
  post 'contracts/new' => 'contracts#new_contract'
  post 'contacts/sign' => 'contracts#sign_contract'

  # Investment routes
  get 'investments' => 'investments#get_investments'
  post 'investments' => 'investments#invest'
  
end
