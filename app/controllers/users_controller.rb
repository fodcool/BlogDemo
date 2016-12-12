class UsersController < ApplicationController
  def index
    @user = User.all
  end

  def show
    @user = User.find params[:id]
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    @user = User.find params[:id]
    @user.update params[:user]
    redirect_to users_path
  end
end
