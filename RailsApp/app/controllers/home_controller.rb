class HomeController < ApplicationController
  
  skip_before_filter :verify_authenticity_token  
  def index
  end
  
  def forms
  end

  def dashboard
  end

  def basic
  end

  def upload
  end
  
  def submit
  	@arr = params[:array]
  	@arr = @arr.split(',')
  	name = Student.find(current_student.id).username.to_s
  	Answer.create(students_id: current_student.id, group: 1, subgroup: 1, mistakes: @arr, student_name: name)
  	redirect_to dashboard_path
  end
end
