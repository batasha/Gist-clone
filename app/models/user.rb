class User < ActiveRecord::Base
  attr_accessible :user_name, :favorites, :favorite_gists

  has_many :gists
  has_many :favorites
  has_many :favorite_gists, through: :favorites,
           class_name: "Gist", foreign_key: "user_id",
           source: :gist

  validates :user_name, presence: true
  validates :user_name, uniqueness: true

  def new_session_token
    self.update_attribute(:session_token, SecureRandom.hex)
  end
end