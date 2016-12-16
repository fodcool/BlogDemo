class Article < ActiveRecord::Base
  belongs_to :category

  def self.categories
    [["生活", 1],["技术", 2]]
  end

  def self.title category_id
    if category_id == '1'
      '生活博客'
    else
      '技术博客'
    end
  end
end
