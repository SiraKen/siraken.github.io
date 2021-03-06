---
title: ファンクラブなど気に入った動画を『個人で楽しむために』保存する方法
description: 「個人で楽しむため」←これ重要
image: 2020/save_webvideo.jpg
date: 2020-09-01
draft: false
---

こんにちは、白澤です。

今日の記事は単刀直入に言うと、いのりまち(水瀬いのりちゃんのファンクラブ)の動画を保存したいということなんですよ。

「まちの映画館」なるFC限定動画が見れる場所があるんですけど、期間限定というか、一定期間が経つと他の動画に変わったりするので、ずっと見ることができないわけです。

それはさすがに寂しいということで、配信されている動画を保存しちゃおうということにしました。 

ただし！この方法でダウンロードできるからといって悪用は厳禁ですよ。FCのコンテンツを外部に出してはいけないので。個人利用に限って利用してくださいね。

## 準備

まずは、ffmpegというものをインストールします。これはもともと動画のエンコード向けのソフトウェアですが、今回のような用途にも使える有名なスグレモノです。

インストール手順は[こちらのサイト](https://fukatsu.tech/install-ffmpeg)を参照してください。Macの他にもWindowsやCent OS系の解説もリンク先にあります。

ffmpegは幅広いOSに対応しているので、Ubuntuとか、うまくいけばChrome OSにもインストールできるかもしれません（試してないですが）。

…インストールできたでしょうか？もし失敗などした場合でもGoogle先生に頼ればなんとかなるので安心してください！(自分も助けられました)

それでは本題。今回はいのりまちですが、同じような形式で動画を配信している場合は.m3u8というファイルがダウンロードする鍵になります。

このファイルはどのようなものかと言うと、動画ファイルである.tsというものがあって、それらは1本の動画が分割されて複数の.tsファイルになってます。その複数の動画ファイルを1つにまとめてあげているリスト的なものが.m3u8ファイルというわけです。

だから、このm3u8を直接落としたからといって動画がダウンロードできたわけではなく、tsの場所が書かれたテキストファイルです。これはテキストエディタでm3u8を開けばわかりますが。

ではそのm3u8を探しましょうか。以下、基本的にはmacOSの環境で進めていくのでお使いの環境に置き換えて読んでください。画像はChromeのものですが、お使いのブラウザのデベロッパーツールを開いて、「Network」を選択してください。そして、大量に出てくると思うのでm3u8でフィルタします。もし出てこない場合はページのリロードを試してみてください。

![screenshot](/blog/2020/save_webvideo.jpg)

見つけたm3u8を右クリックして、Copy→Copy link addressの順で選択してください。操作はブラウザによりますが、基本はこんな感じでm3u8までのリンクをコピーできれば問題ありません。

できましたかね？それでは進みます。 ターミナル等を開き、以下を入力します。「m3u8ファイルがある場所のリンク.m3u8」はコピーしたリンクを使ってください。一応言っておきますが、$は入れませんよ！

```bash
$ ffmpeg -i https://m3u8ファイルがある場所のリンク.m3u8 -movflags faststart -c copy -bsf:a aac_adtstoasc 保存ファイル名.mp4
```

できたでしょうか？処理が終わると動画が保存されています。自分の環境ではユーザのホームフォルダ(/Users/UserName/)にmp4ファイルとして保存されていました。やり方さえ覚えてしまえば簡単ですね。それでは素敵な動画ライフを！

※もう一度言っておきますが、悪用はしないでくださいね。限定コンテンツを垂れ流したり法に触れることなどはしないようお願いします。