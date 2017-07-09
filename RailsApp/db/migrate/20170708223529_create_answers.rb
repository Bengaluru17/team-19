class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.references :students, foreign_key: true
      t.integer :group
      t.integer :subgroup
      t.integer :mistakes, array: true,default: []
      t.string :student_name
      t.timestamps
    end
  end
end
