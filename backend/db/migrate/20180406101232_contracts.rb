class Contracts < ActiveRecord::Migration[5.1]
  def change
    create_table :contracts
    add_column :contracts, :title, :text
    add_column :contracts, :authorid, :integer
    add_column :contracts, :body, :text
    add_column :contracts, :signinds, :integer
    add_column :contracts, :emit, :datetime
    add_column :contracts, :duration, :integer
  end
end
