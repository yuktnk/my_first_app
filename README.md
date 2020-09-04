# README
## アプリケーション名
カメコミュ
##  概要(このアプリでできること)
- 写真の投稿
- マイギャラリーの作成
- ユーザー同士のコミュニケーション
## 本番環境(デプロイ先 テストアカウント＆ID)
### URL
http://13.115.29.120/<br>
### テストアカウント
Eメール：testuser@example.com<br>
パスワード：testuser<br>
## 制作背景
私自身がカメラが好きということもあり「インスタグラムは気軽でいいけど、<br>
パソコンの大画面で綺麗に表示される投稿サイトないかな」と思ったことがきっかけで、<br>
アプリの構想がスタートしました。<br>
スマホではなくカメラ（一眼レフやミラーレスカメラなど）で写真を撮る、<br>
"コアなカメラ好き"が使いたくなるサイトを目指し、撮影情報の投稿や写真のレイアウトといった点にこだわっています。
## 工夫したポイント
- 写真の見せ方、余白の取り方
- 投稿するだけで綺麗なレイアウトで自分のフォトギャラリーを作成できること
## 使用技術(開発環境)
- Haml/Scss
- Ruby/Ruby on Rails
- jQuery
- MySQL
- GitHub
- AWS(EC2,S3)
- Visual Studio Code
## 課題（現在作成 / 修正中）
- カメラの情報（カメラ名、レンズ名、撮影情報）なども同時に投稿できるようにする
- RSpecでの単体テスト
- 細かなビューの修正（読みやすいようにフォントサイズ、色を修正）
- エラーの解消
## 今後実装したい機能（現在作成 / 修正中）
- ユーザーごとのギャラリーページの充実
- インクリメンタルサーチ
- 画像を複数枚投稿できるようにする
- いいね数でのランキング表示
- ユーザー間のフォロー機能
- いいね機能の活用（いいね数に応じて表示順を変更する、総いいね数表示、など）
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



<!-- ## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
### Association
- belongs_to :photo
- has_many :posts, through: :posts_tags -->


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
