# Kadai09 React Native版メモ帳アプリ

## DEMO

  - （追記予定）

## 紹介と使い方

  - React Native と Expo を使用した、モバイル版メモ帳アプリです。（データベースは Firebase の Cloud Firestore を使用）

  - ユーザー登録・ログイン機能、メモ登録＆削除機能のついたシンプルなメモアプリ。iOS & Android 対応。

## 工夫した点

  - X Code iOS Simulator と Android Studio Emulator を使用して、iPhone & Android での対応確認しています（実機確認はiPhoneのみ）
  - React Native の機能を生かしたインタラクション 
  - Expo Router を使用したページ切り替え
  - 当初、卒業制作をデスクトップアプリとモバイル版PWAで作成しようと思っていたのですが、諸般の事情によりモバイルアプリへの鞍替えをすることにしたため、まずは練習と検討のためにReact Nativeに挑戦しました。現状ではまだ、使用技術をReact Nativeにするか、flutterにするか、ネイティブ言語（Swift & Kotlin）にするか検討中ですが、React と TypeScript はこれまでの課題でも使用しており慣れてきているため、まずReact Nativeを試してみています。

## 苦戦した点

  - Expo の環境構築が結構大変でした。最初、古い情報のチュートリアルに従って環境構築してしまい、その処理に苦労した。
  - XCodeとAndroid Studioの環境構築もそれなりに時間がかかった。
  - もうちょっと機能追加してみたかったが、上記の通り環境構築に膨大な時間がかかってしまい、時間切れに。 

## 参考にした web サイトなど

  - Udemy講座：React Native, Firebase, Expo でアプリ開発をゼロから始めよう！https://www.udemy.com/course/react-native-ios-android/
  - React Native: https://reactnative.dev/
  - Expo: https://expo.dev/
  - X Code:　https://developer.apple.com/jp/xcode/
  - Android Studio:　https://developer.android.com/studio?hl=ja 
  - React Native Vector Icon: https://oblador.github.io/react-native-vector-icons/
  - IcoMoon: https://icomoon.io/ （アイコン画像をフォント化してダウンロードできる）


