class AddColumnAuthorIntroToUsers < ActiveRecord::Migration
  def change
    add_column :users, :author_intro, :text
  end
end
