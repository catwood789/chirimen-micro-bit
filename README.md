<p align="right">Language: <a href="https://chirimen.org/chirimen-micro-bit/">Japanese</a>, <a href="https://translate.google.co.jp/translate?sl=ja&tl=en&u=https%3A%2F%2Fchirimen.org%2Fchirimen-micro-bit%2F">English (Google Translation)</a></p>

![CHIRIMEN with micro:bit](imgs/CHIRIMEN_MICROBIT.png "CHIRIMEN with micro:bit")

# CHIRIMEN with micro:bit

## 概要
[micro:bit](https://microbit.org/)を利用した[CHIRIMEN](https://chirimen.org/#about)の実装を公開しています。CHIRIMENとはボードコンピュータの端子につないだセンサやアクチュエータを使用した(ブラウザ上で動作する)ウェブアプリを動作させる環境です。[WebGPIO](https://github.com/browserobo/WebGPIO)と[WebI2C](https://github.com/browserobo/WebI2C) APIが使えるようになります。
micro:bitではウェブラウザは(多分:-)動きませんが、Bluetoothを介して、PC等で動くウェブブラウザ(Chromeなど[webBluetooth](https://webbluetoothcg.github.io/web-bluetooth/)をサポートしたもの)とmicro:bitを接続することで、CHIRIMEN環境を構築します。
また、CHIRIMEN with micro:bitでは、WebGPIO,WebI2Cに加え、micro:bitが内蔵しているセンサーやLEDをウェブアプリで使うことができる機能が追加されています。

## 使い方

- [スタートアップガイド](guidebooks/startup.md)
- [チュートリアル](https://tutorial.chirimen.org/microbit/)

## サンプルコード集 (Examples)

以下のページに使用例を掲載します。
- [Examples](examples/)

## その他の情報
- [拡張機能](guidebooks/extendedFunctions.md)
- [CHIRIMEN for Raspberry Pi3との差分](guidebooks/diff_rpi3.md)
- [システム構成の説明](guidebooks/systemConfiguration.md)
- [micro:bit 標準搭載機能を使う際のポイント](guidebooks/features.md)

### 注記
この実装は、webGPIOだけを実装した[webGPIO-etc-on-microbit-via-webBluetooth](https://github.com/chirimen-oh/webGPIO-etc-on-microbit-via-webBluetooth)を前身として持ちます。しかしmicro:bitのリソース上の制限から、この実装はそれとまったく異なるものになっています。

