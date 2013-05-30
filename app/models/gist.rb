class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :favorites

  belongs_to :user
  has_many :favorites
  has_many :gist_files

  validates :title, :user_id, presence: true
end