class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products, id: :uuid do |t|
      t.references :user, type: :uuid, null: false, foreign_key: true

      t.text :description, null: false, default: ""
      t.string :name, null: false, default: ""
      t.integer :price, null: false, default: 0

      t.timestamps
    end
  end
end
