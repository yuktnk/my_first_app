class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :comment
      t.string :image
      t.string :F
      t.string :SS
      t.string :ISO
      t.references :user, foreingn_key: true
      t.timestamps
    end
  end
end
