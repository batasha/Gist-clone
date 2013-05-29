class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user

  validates :title, :user_id, presence: true
end