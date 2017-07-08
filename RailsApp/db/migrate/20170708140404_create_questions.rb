class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :question, null: false
      t.string :answer, null: false
      t.integer :group
      t.integer :subgroup
      t.integer :level
      t.timestamps
    end
  end
end
