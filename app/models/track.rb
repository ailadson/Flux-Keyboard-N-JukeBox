# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  roll       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ActiveRecord::Base
end
