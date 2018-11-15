class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.string :location

      t.timestamps
    end
  end
end
