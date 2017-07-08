class MainController < ApplicationController
	before_filter :authenticate_student!


	def main
    	if current_student != nil
      		redirect_to '/dashboard'
      	else
      		render :root
  		end

	end
end
