class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_user_name(params[:user_name])

    @user.new_session_token
    session[:session_token] = @user.session_token

    redirect_to root_url
  end

  def destroy
    session.delete(:session_token)
    redirect_to new_session_url
  end
end