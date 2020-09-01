class UsersController < ApplicationController

  def index
    @post = Post.includes(:user)
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      flash[:notice] = "プロフィールを編集しました"
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
    user = User.find(params[:id])
    @name = user.name
    @posts = user.posts
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :profile, :image)
  end
end
