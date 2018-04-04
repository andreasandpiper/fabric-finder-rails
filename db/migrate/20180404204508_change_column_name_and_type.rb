class ChangeColumnNameAndType < ActiveRecord::Migration[5.1]
  def change
    rename_column :votes, :type, :vote_type
    change_column :votes, :vote_type, :integer
  end

end
