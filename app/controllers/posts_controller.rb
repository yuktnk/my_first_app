class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :show, :search]

  def index
    @post = Post.new
    @posts = Post.includes(:user)
    # @posts = Post.includes(:user)
  end

  def new
    @post =Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      redirect_to root_path, notice: '送信されました'
    else
      @posts = Post.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def search
    @posts = Post.search(params[:keyword])
  end


  def destroy
  post = Post.find(params[:id])
  post.destroy
  end

  def show
    @post = Post.find(params[:id])
    @comment = Comment.new
    @comments = @post.comments.includes(:user)
    @like = Like.new
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
  end

  private

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end

  def post_params
    params.require(:post).permit(:title, :comment, :image, :F, :SS, :ISO).merge(user_id: current_user.id)
  end
end
