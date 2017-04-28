class ArticlesController < ApplicationController

  before_action :get_by_id, :only => [:show, :edit, :update, :destroy, :set_hot]

  def index
    @articles = Article.where("category_id = ?", params[:category_id]).order("date desc").page(params[:page]).per(30)
   #@articles = Article.where("category_id = ?", params[:category_id]).order("position").page(params[:page]).per(30) if Article.last(25).first.position.present?
    @articles = @articles.where("title like '%#{params[:title_or_content]}%' or
                content like '%#{params[:title_or_content]}%'") if params[:title_or_content].present?
  end

  def show
    @article.visited_count += 1
    @article.save
  end

  def edit
  end

  def update
    @article.update params[:article]
    if @article.category_id == 1
      redirect_to articles_path(category_id: 1)
    else
      redirect_to articles_path(category_id: 2)
    end
    flash[:success] = "修改成功"
  end

  def new
    @article = Article.new
  end

  def create
    article = Article.create params[:article]
    if article.category_id == 1
      redirect_to articles_path(category_id: 1)
    else
      redirect_to articles_path(category_id: 2)
    end
    flash[:success] = "新建成功"
  end

  def destroy
    @article.delete
    flash[:success] = "删除成功"
    redirect_to :back
  end

  def welcome
  end

  def set_hot
    @article.is_hot = true
    @article.date = Time.now.strftime("%Y-%m-%d")
    @article.save
    flash[:success] = "置顶成功"
    redirect_to articles_path(category_id: 2)
  end

  def sort
    if params[:articles].present?
      JSON.parse(params[:articles]).each_with_index do |article, index|
        article_id= article["id"]
        position = index + 1
        article = Article.find(article_id)
        article.update_attribute("position", position)
      end
    end
    render nothing: true
  end

  private
  def get_by_id
    @article = Article.find params[:id]
  end
end
