class Users < ActiveRecord::Migration[5.1]
  def change
    create_table :users
    add_column :books, :email, :string
    add_column :books, :firstname, :string
    add_column :books, :name, :string
    add_column :books, :pseudo, :string
    add_column :books, :capital, :float
    add_column :books, :passwd, :string
  end
end
