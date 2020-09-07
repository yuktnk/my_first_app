class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :post

  validates :image, presence: true

  mount_uploader :image, ImageUploader

  def self.search(search)
    if search
      # Post.where('title LIKE(?)', "%#{search}%")
      Post.where(['title LIKE(?) or comment LIKE(?)', "%#{search}%", "%#{search}%"])
    else
      Post.all
    end
  end
end
