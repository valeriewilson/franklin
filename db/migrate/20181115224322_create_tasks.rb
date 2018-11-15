class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.string :description
      t.datetime :due_date
      t.integer :priority
      t.datetime :start_time
      t.integer :duration

      t.timestamps
    end
  end
end
