class ArticlesController < ApplicationController

  before_action :get_by_id, :only => [:show, :edit, :update, :destroy]

  def index
    @articles = Article.where("category_id = ?", params[:category_id])
  end

  def show
  end

  def edit
  end

  def update
    @article.update params[:article]
    redirect_to articles_path(category_id: 2)
  end

  def new
    @article = Article.new
  end

  def create
    Article.create params[:article]
    redirect_to articles_path(category_id: 2)
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
