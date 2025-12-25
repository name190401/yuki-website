# **YUKI HIGURASHI オフィシャルサイト 仕様書**

**バージョン:** 1.0

**作成日:** 2025/12/08

**対象サイト:** YUKI HIGURASHI Official Website

## **1\. サイト概要 (Overview)**

### **1.1 目的**

* 「日暮 有希」および「株式会社ANGELICA」のブランディング強化。  
* Instagram (@yukisroom2025) と連携し、信頼感（静）と親しみやすさ（動）を両立させる。  
* サービス（カウンセリング、ウエディング、スタイリング）の認知拡大と予約・問い合わせへの導線確保。

### **1.2 ターゲット**

* 自分らしいライフスタイルや結婚式を模索している女性。  
* メンタルケアや自己実現に関心がある層。  
* Instagramのフォロワーおよび検索流入ユーザー。

### **1.3 コンセプト**

**テーマ:** 「Life with Bloom & Breath」

**キーワード:** 大人ピンク、余白、品格、静寂、信頼、あたたかさ。

男性的な「重厚感」ではなく、女性的な「しなやかさ・凛とした芯の強さ」を表現する。

## **2\. デザイン仕様 (Design System)**

### **2.1 カラーパレット**

サイト全体を通して、落ち着いた「大人ピンク」をアクセントに使用し、ベースは白と薄いグレーで清潔感を保つ。

| 役割 | 色名 | カラーコード | 用途 |
| :---- | :---- | :---- | :---- |
| **Main Text** | Charcoal | \#4a4a4a | 本文、見出し（柔らかい黒） |
| **Sub Text** | Light Gray | \#888888 | 英字サブタイトル、補足情報 |
| **Accent** | Dusty Pink | \#b78d95 | リンクホバー、装飾線、強調箇所 |
| **Background** | Snow White | \#ffffff | メイン背景色 |
| **Sub BG** | Pale Pink | \#fdf8f8 | モバイルメニュー背景、Contact背景 |

### **2.2 タイポグラフィ (Fonts)**

Google Fontsを使用し、和文と欧文を使い分けることで「和モダン」な雰囲気を演出。

* **和文 (Japanese):** [Shippori Mincho](https://fonts.google.com/specimen/Shippori+Mincho)  
  * 明朝体。繊細で可読性が高く、品格を感じさせる。  
* **欧文 (English):** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)  
  * セリフ体。クラシックでエレガントな印象。見出しやナビゲーションに使用。

### **2.3 レイアウト方針**

* **レスポンシブデザイン:** PC（1200px max）、タブレット、スマホ（768px以下）に対応。  
* **余白 (White Space):** セクション間の余白を大きく取り（padding: 120px）、ゆったりとした世界観を作る。  
* **非対称性 (Asymmetry):** 画像とテキストを少しずらして配置するなど、動きのあるレイアウトを採用。

## **3\. ページ構成・コンテンツ (Sitemap)**

シングルページアプリケーション（SPA）風の縦長1ページ構成。

### **3.1 Header (Global Navigation)**

* **Logo:** 左上に配置。サイトタイトルを表示。  
* **PC Menu:** 右上に配置。About, Gallery, Service, Contact へのアンカーリンク。ホバー時に下線アニメーション。  
* **Mobile Menu:** ハンバーガーメニュー（三本線）。クリックでドロワーメニューが右からスライドイン。

### **3.2 Hero Section (Main Visual)**

* 画面いっぱいに背景画像を表示（100vh）。  
* オーバーレイで薄いピンクフィルターと白霧効果を適用し、文字の可読性を確保。  
* キャッチコピー「人生を、装う。」を縦書きで中央に配置。

### **3.3 About Section**

* プロフィール画像とテキストの2カラムレイアウト（スマホでは1カラム）。  
* 画像の背面にピンクの枠線をずらして配置し、デザインアクセントとする。  
* 代表者プロフィール、株式会社ANGELICAの紹介。

### **3.4 Gallery Section**

* Instagramの世界観を補完する静止画ギャラリー。  
* グリッドレイアウト。ホバー時にオーバーレイでテキストを表示。

### **3.5 Service Section**

* 3つの主要サービスをカード形式で紹介。  
  1. **Counseling:** メイクセラピー・個人相談  
  2. **Wedding:** ウエディングプロデュース  
  3. **Styling:** パーソナルスタイリング  
* ホバー時にカードが浮き上がるインタラクション。

### **3.6 Contact Section**

* Instagramへの誘導を主目的としたシンプルなエリア。  
* 背景色を薄いピンク（\#fdf8f8）に変更し、エリアの区切りを明確化。

### **3.7 Footer**

* コピーライト、会社名、SNSアイコンを表示。背景はダークグレーで引き締める。

## **4\. 機能・技術仕様 (Technical Spec)**

### **4.1 使用技術**

* **HTML5:** セマンティックなマークアップ。  
* **CSS3:** Flexbox, Gridレイアウト, CSS Variables（変数）, Media Queries。  
* **JavaScript (Vanilla JS):** 外部ライブラリ（jQuery等）不使用で軽量化。

### **4.2 実装機能**

1. **スクロールフェードイン (Scroll Animation):**  
   * IntersectionObserver APIを使用。  
   * 要素が画面内に入ると、下からふわっと浮き上がるクラス（.fade-in-up）を付与。  
2. **ハンバーガーメニュー (Mobile Navigation):**  
   * JavaScriptでクラスの着脱（.active）を制御。  
   * アイコンのアニメーション（×印への変形）を含む。  
   * メニューリンククリック時に自動で閉じる仕様。  
3. **外部リソース:**  
   * 画像: Unsplash（高品質フリー素材）のURLを直接指定。  
   * アイコン: FontAwesome CDN。

### **4.3 ブラウザ互換性**

* Chrome, Safari, Edge, Firefox の最新版で動作確認。  
* Mobile Safari (iOS), Mobile Chrome (Android) 対応。

## **5\. ディレクトリ構成 (File Structure)**

現状は単一ファイル構成ですが、将来的な拡張を見据えた構成案です。

root/  
│  
├── index.html          \# メインファイル（HTML/CSS/JSすべて内包）  
│  
└── assets/             \# (将来的) 画像やCSSを分割する場合  
    ├── css/  
    │   └── style.css  
    ├── js/  
    │   └── main.js  
    └── images/  
        ├── logo.png  
        ├── profile.jpg  
        └── ...

## **6\. 運用・更新について**

* **画像の差し替え:** img タグの src 属性を、実際の写真ファイルのパスまたはURLに変更することで行う。  
* **リンクの変更:** Instagram以外のリンク先（予約フォームなど）ができた場合は、a タグの href 属性を変更する。