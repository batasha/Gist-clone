class User < ActiveRecord::Base
  attr_accessible :user_name

  has_many :gists

  validates :user_name, presence: true
  validates :user_name, uniqueness: true

  def new_session_token
    self.update_attribute(:session_token, SecureRandom.hex)
  end
end