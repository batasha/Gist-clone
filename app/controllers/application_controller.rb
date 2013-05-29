class ApplicationController < ActionController::Base
 # protect_from_forgery

  def require_login
    unless current_user
      redirect_to new_session_url
    end
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
end