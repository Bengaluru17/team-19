class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.references :student, foreign_key: true
      t.integer :group
      t.integer :score
      t.integer :subgroup

      t.timestamps
    end
  end
end
