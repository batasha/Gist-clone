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
    @favorite = current_user.favorites.build(params[:favorite])

    if @favorite.save
      render json: @favorite.gist #???
    else
      render json: @favorite.errors, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @gist = @favorite.gist
    @favorite.destroy
    render json: @gist
  end
end