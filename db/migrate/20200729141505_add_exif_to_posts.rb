class AddExifToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :F, :string
    add_column :posts, :SS, :string
    add_column :posts, :ISO, :string
  end
end
