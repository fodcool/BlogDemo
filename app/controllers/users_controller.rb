class UsersController < ApplicationController

  before_action :get_by_id, :only => [:show, :edit, :update ]

  def index
    @user = User.all
  end

  def show
  end

  def edit
  end

  def update
    @user.update params[:user]
    redirect_to users_path
  end

  private
  def get_by_id
    @user = User.find params[:id]
  end
end
