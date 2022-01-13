class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.date :date
      t.text :diary
      t.integer :user_id
      t.timestamps
    end
  end
end
