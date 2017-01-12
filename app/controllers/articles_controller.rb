class ArticlesController < ApplicationController

  before_action :get_by_id, :only => [:show, :edit, :update, :destroy]

  def index
    @articles = Article.where("category_id = ?", params[:category_id]).page(params[:page]).per(20).order("date desc")
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
  end

  def destroy
    @article.delete
    redirect_to :back
  end

  def welcome
  end

  private
  def get_by_id
    @article = Article.find params[:id]
  end
end
