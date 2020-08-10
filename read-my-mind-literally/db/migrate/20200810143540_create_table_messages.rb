class CreateTableMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :verse_1, null: false, default: ""
      t.string :verse_2, null: false, default: ""

      t.timestamps
    end
  end
end
