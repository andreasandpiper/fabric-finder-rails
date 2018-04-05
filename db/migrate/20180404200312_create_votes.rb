class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :comment_id
      t.integer :user_id
      t.boolean :vote_type

      t.timestamps
    end
  end
end
