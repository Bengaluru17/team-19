class AddUsernameToStudents < ActiveRecord::Migration[5.0]
  def change
    add_column :students, :username, :string
    add_index :students, :username, unique: true
  end
end
