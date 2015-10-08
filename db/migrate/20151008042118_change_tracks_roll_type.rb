class ChangeTracksRollType < ActiveRecord::Migration
  def change
    change_column :tracks, :roll, :text
  end
end
