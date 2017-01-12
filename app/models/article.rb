class Article < ActiveRecord::Base
  belongs_to :category

  def self.categories
    [["生活", 1],["技术", 2]]
  end

  def self.title category_id
    if category_id == '1'
      '生活博客'
    elsif category_id == '2'
      '技术博客'
    elsif category_id == '3'
      '音乐模因'
    elsif category_id == '4'
      '翻译文章'
    end
  end
end
