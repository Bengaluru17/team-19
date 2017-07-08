class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :encryptable,
    :recoverable, :rememberable, :trackable, :validatable
  def password_salt
    'salt'
  end

  def password_salt=(new_salt)
  end
end
