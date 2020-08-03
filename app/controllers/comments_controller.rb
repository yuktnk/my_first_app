class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      # format.html {redirect_to "/posts/#{comment.post.id}"} # コメントと結びつくポストの詳細画面に遷移する
      format.json
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_back(fallback_location: root_path)  end
# 
  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, post_id: params[:post_id])
      # user_idカラムには、ログインしているユーザーのidとなるcurrent_user.idを保存し、
      # tweet_idカラムは、paramsで渡されるようにするので、params[:tweet_id]として保存しています。
  end
end

