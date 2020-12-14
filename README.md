![トップページ確認用](https://user-images.githubusercontent.com/67771199/94377329-95b12b80-015b-11eb-8d61-759ec46c8853.jpg)

## アプリケーション名

カメコミュ｜カメラ好きのためのコミュニケーションサイト

## 接続先情報

### URL

　http://13.115.29.120/
 （※転職活動終了したため、現在は非公開）
### テストアカウント

　ヘッダー部分「ゲストログイン」よりログインできます。

## 使用技術(開発環境)

Haml/Scss  
Ruby/Ruby on Rails  
jQuery  
MySQL  
GitHub  
AWS(EC2,S3)  
Visual Studio Code  
「学習してきた機能をなるべく網羅的に盛り込みつつ、＋αで自分自身が興味がある機能を調べながら実装する」という意識で制作しています。

## 動作確認方法

Chromeの最新版を利用してアクセスしてください。（デプロイ等で接続できないタイミングもございます。その際は少し時間をおいてから接続ください。）  
接続先およびログイン情報については、上記の通りです。  
同時に複数の方がログインしている場合に、ログインできない可能性がございます。  
確認後、ログアウト処理をお願いします。  

## 概要(このアプリでできること)

- 写真の投稿
- 投稿した写真を元に、ユーザーごとにフォトギャラリーの作成
- ユーザー同士のコミュニケーション（コメント機能、いいね機能）

## 制作背景

### テーマの設定理由

>私自身がカメラが好きということもあり、「インスタグラムは気軽でいいけど、パソコンの大画面で綺麗に表示される投稿サイトないかな」と思ったことがきっかけで、アプリの構想がスタートしました。  
スマホではなくカメラ（一眼レフやミラーレスカメラなど）で写真を撮る、"コアなカメラ好き" が使いたくなるサイトを目指し、撮影情報の投稿や写真のレイアウトといった点にこだわっています。


## 工夫したポイント

### 1, 写真の見せ方
テーマが「写真」ということもあり、写真のレイアウトやアプリ自体のデザインにこだわりました。  
具体的には、以下の3点です。  


- シンプルな構成、表示にすること。
>ピックアップ写真、全ユーザーの写真ギャラリーという2つの領域で構成することで、直感的にアプリの構成が理解できるようにしました。  
また、「見せたいもの＝写真」ということを意識し、写真のタイトルや投稿者名などの情報は極力表示をせず、マウスホバーした際に初めて表示されるよう、JavaScriptを用いて実装しました。


- 上部の大きく表示される写真の見せ方を工夫する。
>大きく表示する写真が変わることで、アプリの印象がガラッと変わるようなイメージを持って実装しました。  
背景に同じ画像をぼかして表示することで、見た人により強いインパクトを与えることを狙っています。


- 写真ギャラリー内で、写真それぞれの縦横比を維持したまま表示すること。
>私がインスタグラムを使用する際に感じていた不満点は、「ギャラリー部分で表示される写真が全て正方形になること」でした。  
 撮影者は「縦で撮るか横で撮るか、縦横比はどうするか」ということを考えているので、その意図がギャラリー部分にも反映されるようにすることが一番の課題でした。  
 jQueryのプラグインであるMasonryを導入することで、縦横比を維持したままタイルレイアウトしています。


### 2,投稿するだけで綺麗なレイアウトで自分のフォトギャラリーを作成できる
![ユーザー画面確認用](https://user-images.githubusercontent.com/67771199/94377337-a792ce80-015b-11eb-8ae8-c0f48d2233c3.jpg)

　「綺麗に撮れた写真たちを見て欲しい！」という気持ちは誰しもあると思います。  
 そんな私自身の欲求を満たすためにも(笑)、投稿するだけで綺麗なレイアウトでユーザーごとにフォトギャラリーができあがるようにしました。  
 また、撮るテーマは人物、風景、動物、花など人それぞれ個性があるので、他のユーザーのフォトギャラリーを見るのも楽しみのひとつになると考えています。

## 課題や今後実装したい機能
- カメラの情報（カメラ名、レンズ名、撮影情報）なども同時に投稿できるようにする
- RSpecでの単体テスト
- 細かなビューの修正（読みやすいようにフォントサイズ、色を修正）
- 軽微なエラーの解消
- ユーザーごとのギャラリーページの充実（フォロー機能、もらったいいね数の表示、など）
- インクリメンタルサーチ
- 画像を複数枚投稿できるようにする
- いいね数でのランキング表示
- ユーザー間のフォロー機能
- いいね機能の活用（いいね数に応じて表示順を変更する、総いいね数表示、など）

## 作成を通して感じていること
### 自由で楽しい！...しかしそれ故の難しさもある
>テーマの設定から搭載する機能やデザインまで、何もかもが自分で決めることができるため、作成するのがとても楽しいと感じています。  
その反面、「こんな機能があったらいいのに」とアイデアが浮かび実装にチャレンジするも、難しくてまだ実装しきれていない機能もあります。  
今の自分ができることとできないことの確認にもなり、今後学習したいことがたくさん見えてきています。

### 世の中にある既存のサービスって、すごい！
>本アプリ作成を通して、"普段何気なく利用しているサービスってすごい！"と感じています。  
多くのアプリが多機能で直感的な使いやすいUIで提供されていることに気付きました。  
具体的にどのような仕組みになっているかなど、技術的な部分はわかりませんが、以前とは違った見方や感じ方でサービスを利用するようになりました。  
エンジニアへのリスペクトと共に、自分もそのようなサービスの作成に携わりたいと思いを強くしています。



