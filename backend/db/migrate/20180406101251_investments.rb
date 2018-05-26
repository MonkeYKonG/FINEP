class Investments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments
    add_column :investments, :authorid, :integer
    add_column :investments, :destid, :integer
    add_column :investments, :emit, :datetime
    add_column :investments, :value, :integer
  end
end
