class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.boolean :is_event, null: false
      t.string :title, null: false
      t.string :description
      t.string :location
      t.datetime :due_date
      t.integer :priority
      t.integer :category
      t.datetime :start_date
      t.integer :duration_minutes

      t.timestamps
    end
  end

  def down
    drop_table :items
  end
end
