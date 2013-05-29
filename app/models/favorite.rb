class Favorite < ActiveRecord::Base
  attr_accessible :user_id, :gist_id, :user

  belongs_to :user
  belongs_to :gist

  validates :user_id, :uniqueness => {:scope => :gist_id}
end