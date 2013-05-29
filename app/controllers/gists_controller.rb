class GistsController < ApplicationController
  respond_to :html, only: [:index]
  respond_to :json

  def index
    @user = current_user

    @gists = Gist.where(user_id: @user.id)

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @gists }
    end
  end
end
