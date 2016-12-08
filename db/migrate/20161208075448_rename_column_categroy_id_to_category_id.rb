class RenameColumnCategroyIdToCategoryId < ActiveRecord::Migration
  def change
    rename_column :articles, :categroy_id, :category_id
  end
end
