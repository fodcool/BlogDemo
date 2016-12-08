class Article < ActiveRecord::Base
  belongs_to :categroy

  def self.categories
    [["生活", 1],["技术", 2]]
  end
end
