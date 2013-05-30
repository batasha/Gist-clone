class FavoritesController < ApplicationController
  before_filter :require_login
  respond_to :html, only: [:index]
  respond_to :json

  def index
    @user = current_user
    @gists = @user.favorite_gists

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @gists }
    end
  end

  def create
    @favorite = current_user.favorites.build(:gist_id => params[:gist_id])

    if @favorite.save
      render json: @favorite.gist #???
    else
      render json: @favorite.errors, status: 422
    end
  end

  def destroy
    @favorite = current_user.favorites.where(:gist_id => params[:gist_id]).first
    @gist = @favorite.gist
    @favorite.destroy
    render json: @gist
  end
end