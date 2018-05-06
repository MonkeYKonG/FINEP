class Users < ActiveRecord::Migration[5.1]
  def change
    create_table :users
    add_column :users, :email, :string
    add_column :users, :firstname, :string
    add_column :users, :name, :string
    add_column :users, :pseudo, :string
    add_column :users, :capital, :float
    add_column :users, :passwd, :string
  end
end
