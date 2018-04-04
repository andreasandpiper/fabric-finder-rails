class ChangeColumnDataType < ActiveRecord::Migration[5.1]
  def change
    change_column :votes, :vote_type, :boolean
  end
end
