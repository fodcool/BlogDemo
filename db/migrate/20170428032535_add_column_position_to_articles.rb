class AddColumnPositionToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :position, :integer
  end
end
