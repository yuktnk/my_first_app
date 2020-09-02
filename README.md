# README
## アプリケーション名
カメコミュ
##  概要(このアプリでできること)
写真の投稿、マイギャラリーの作成、ユーザー同士のコミュニケーション
## 本番環境(デプロイ先 テストアカウント＆ID)
http://13.115.29.120/
テストアカウント 
Eメール：testuser@example.com
パスワード：testuser
## 制作背景
ケータイやスマホではなく、カメラ（一眼レフやミラーレスカメラなど）で写真を撮る人が自分の写真をUPしたり、
コミュニケーションを行えるような、"インスタグラムユーザーよりもコアなカメラ好き"が使いたくなるサイトを作りたいと考えました。
## 工夫したポイント
写真をテーマとしているので、写真の見せ方、余白の取り方
投稿するだけで綺麗なレイアウトで自分のフォトギャラリーを作成できること
## 使用技術(開発環境)
Haml/Scss
Ruby/Ruby on Rails
jQuery
MySQL
GitHub
AWS
Visual Studio Code
## 課題
カメラの情報（カメラ名、レンズ名、撮影情報）なども同時に投稿できるようにする

## 今後実装したい機能
・インクリメンタルサーチ
・画像を複数枚投稿できるようにする
・いいね数でのランキング表示
・ユーザー間のフォロー機能
・ユーザーの総いいね数表示
# DB設計


<!-- ⇒どんな課題や不便なことを解決するためにこのアプリを作ったのか。
・DEMO(gifで動画や写真を貼って、ビューのイメージを掴んでもらいます)
⇒特に、デプロイがまだできていない場合はDEMOをつけることで見た目を企業側に伝えることができます。 -->





## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :posts
- has_many :comments


## postsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
|text|text|null: false|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
- has_many :tags, through: :posts_tags



## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
### Association
- belongs_to :photo
- has_many :posts, through: :posts_tags


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
### Association
belongs_to :user
belongs_to :post


## posts_tagsテーブル
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
|tag_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :tag
