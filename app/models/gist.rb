class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :favorites

  belongs_to :user
  has_many :favorites

  validates :title, :user_id, presence: true
end