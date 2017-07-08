class QuestionsController < ApplicationController

	def forms
		@form = Question.where(group: 1, subgroup: 1, level: 5)
	end

	def submit
		@ctr = 0
		Question.where(group: 1, subgroup: 1, level: 5).each do |f|
			puts f.answer
			puts params[f.question.to_s]
			puts @ctr
			(@ctr += 1) if params[f.question.to_s] == f.answer.to_s
		end
		Score.create(:group => 1, :subgroup => 1, :score => @ctr, :student_id => current_student.id)
		redirect_to(root_path)
	end
end
