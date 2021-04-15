class AddDimensionsToBoard < ActiveRecord::Migration[6.0]
  def change
    add_column :boards, :width, :int
    add_column :boards, :height, :int
  end
end
