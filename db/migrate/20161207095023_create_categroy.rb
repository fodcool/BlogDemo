class CreateCategroy < ActiveRecord::Migration
  def change
    create_table :categroys do |t|
      t.string :name
      t.timestamps
    end
  end
end
