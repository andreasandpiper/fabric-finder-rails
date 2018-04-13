class AddImageFileToPosts < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :posts, :imagefile
  end

  def self.down
    remove_attachment :posts, :imagefile
  end
end
