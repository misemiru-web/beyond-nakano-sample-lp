# BEYOND中野 営業提案用サンプルLP デザイン定義書 v1.0

**作成日：2026年9月21日**  
**対象：BEYOND中野店を主対象、中野ANNEX店を副対象**  
**上位仕様：要件定義書 v1.1**  
**用途：リファレンス画像作成 → Next.js / React / CSS実装**

---

## 0. 前提と優先順位

本LPは、「黒くて格好いいジムサイト」を作ることを目的としない。

BEYOND中野店の現在の公式訴求は、単なる短期ダイエットではなく、**「一生続けられる習慣」「無理のない食事管理」「また来たくなる空間」**に置かれている。したがって今回のアートディレクションでも、筋肉・威圧感・ストイックさだけを強調せず、**専門性 × 継続しやすさ × 人の温度 × 上質な空間**を同時に成立させる。

現在の公式中野店ページでは中野駅北口徒歩1分、レンタルウェア・シューズ、シャワー等の設備が確認できるため、「駅近」「手ぶら」「環境」は実際の価値としてデザイン上も重要視する。

### 要件定義書との整合上の注意

- 生成済みリファレンス画像に含まれていた「継続率90%以上」等の未確認表現は**実装では使用しない**。
- 参考画像に問い合わせフォームが存在するが、要件定義書v1.1により、**営業サンプルでは個人情報を収集しない**。
- 中野店営業時間等に公式内表記差がある場合は、要件定義書の情報源優先順位に従う。

---

## 1. デザインコンセプト

### コンセプト名

**URBAN CONTINUITY — 都市の中で、続けられる強さ。**

BEYOND中野の魅力は、「鍛える場所」としてだけではなく、中野駅から近く、上質な空間とトレーナーとの関係の中で継続できることにある。

サイト全体を、**Dark Studio × Human Warmth × Urban Cyan** で構成する。

黒い店内、木目、植物、肌の温度、青緑系の間接照明という実店舗写真そのものをデザイン言語として使う。

### 与えたい印象

| 優先 | 印象 |
|---:|---|
| 1 | 信頼できる |
| 2 | 上質だが入りにくくない |
| 3 | トレーナーとの距離が近い |
| 4 | 都会的・洗練 |
| 5 | 継続できそう |
| 6 | 身体を変えられそう |

「高級」より**「質が高い」**を優先する。

高級ホテル的な装飾やラグジュアリー感を盛るのではなく、写真の品質、余白、文字組み、静かな動きから質を感じさせる。

### デザインキーワード

**Focused / Human / Premium / Urban / Clean / Sustainable / Confident**

---

## 2. デザイン原則

### Principle 01 — REAL BEFORE DECORATION

装飾より実写。店舗、トレーナー、実際の指導、受付、設備を主役にする。

背景模様や抽象図形を大量に追加しない。

### Principle 02 — CONTRAST CREATES RHYTHM

全セクションを白背景カードにしない。

**Dark → Light → Dark → Editorial Light → Photo Dark** と背景・情報密度を意図的に切り替え、スクロールにリズムを作る。

### Principle 03 — ONE PRIMARY ACTION

1画面内で、主CTAを複数種類競合させない。

基本のPrimary Actionは一貫して**「無料体験を予約する」**。Secondaryとして**「LINEで相談する」**を扱う。

### Principle 04 — PEOPLE OVER EQUIPMENT

マシンそのものより、人が利用している状態を優先。

「設備がすごい」だけでなく、**誰と、どのような時間を過ごせるか**を感じさせる。

### Principle 05 — READ FIRST, MOVE SECOND

モーションは文章を読む前に目を奪ってはいけない。

アニメーションは階層理解・状態変化・視線誘導のためだけに使用する。

---

## 3. カラーシステム

以下は**本LP用デザイントークン**であり、BEYOND本部が公開している公式ブランドHEX値とは断定しない。

既存サイト、ロゴ、店舗内装、青緑系照明、Award系ゴールドから再構成したものとする。

| Token | HEX | 用途 |
|---|---|---|
| Primary / Ink | `#0B0D0F` | Hero、Dark section、主要文字 |
| Secondary / Nakano Cyan | `#44AFC3` | ブランド補助、細線、ラベル、選択状態 |
| Interactive Cyan Dark | `#0B6D7C` | Light背景上のリンク・フォーカス補助 |
| Accent / Heritage Gold | `#B6923B` | CTA、Award、限定的な強調 |
| Accent Gold Text | `#8A6A20` | Light背景上で使用するゴールド文字 |
| Background | `#F7F6F2` | 基本Light section |
| Surface | `#FFFFFF` | 必要な情報面 |
| Surface Dark | `#171A1C` | Trainers、CTA等 |
| Surface Dark 2 | `#202428` | 階層差 |
| Text Primary | `#151719` | Light背景本文 |
| Text Primary Inverse | `#F7F7F4` | Dark背景 |
| Text Secondary | `#5C6268` | Light背景補助 |
| Text Secondary Inverse | `#C7CDD1` | Dark背景補助 |
| Border | `#D7D9D7` | Light separator |
| Border Dark | `#33383C` | Dark separator |
| Focus | `#70D3E0` | Dark背景focus ring |

### 色の役割

`#44AFC3` は既存サイトのシアン系表現・店舗照明との接続に使うが、**白背景上の小さい本文色には使わない**。

Goldは全ページを金色にするための色ではなく、**CTA / Award / 重要数字**に限定する。

### CTA

Primary CTA：

- Normal: `#B6923B`
- Hover: `#C39F46`
- Active: `#9E7C2F`
- Label: `#0B0D0F`
- 角丸: `4px`

一般的なSaaSのような大きいpill型にはしない。

---

## 4. タイポグラフィ

### Font Family

#### Japanese

**Noto Sans JP**

理由：BEYONDロゴのモダン・幾何学的な印象を邪魔せず、長文・Mobile・日本語UIで安定して読めるため。

#### English / Number

**Manrope**

英字のEyebrow、数字、`TRAINERS / ACCESS / NAKANO` 等に使用。

Logoには使用しない。

### Type Scale

| Style | Desktop | Mobile | Weight | Line Height | Letter Spacing |
|---|---:|---:|---:|---:|---:|
| H1 | `clamp(52px,5vw,76px)` | 38–46px | 700 | 1.18 | -0.02em |
| H2 | 44–52px | 30–36px | 700 | 1.3 | -0.015em |
| H3 | 26–30px | 22–24px | 600 | 1.45 | -0.01em |
| Lead | 19–20px | 17px | 400 | 1.9 | 0 |
| Body | 16px | 16px | 400 | 1.85 | 0.01em |
| Body Small | 14px | 14px | 400 | 1.75 | 0.01em |
| Caption | 12–13px | 12px | 500 | 1.6 | 0.04em |
| Eyebrow EN | 12px | 11px | 700 | 1.5 | 0.16em |
| CTA | 16px | 15–16px | 700 | 1 | 0.04em |

### H1ルール

最大3行。日本語1行あたり13〜16文字を目安。

強調部分だけGoldまたはWhiteを変えることは可能だが、1つのH1で3色以上使わない。

### 長文

本文1行はPCで**30〜42全角程度**を理想とし、最大幅を`680–720px`程度に抑える。

---

## 5. レイアウト・グリッド

### Containers

```css
--container-main: 1200px;
--container-wide: 1360px;
--container-text: 720px;
```

写真中心セクションのみ1360pxを許可。

本文中心セクションで1360px幅いっぱいに文字を広げない。

### Grid

#### Desktop ≥ 1024px

12 columns / Gutter 24px

#### Tablet 768–1023px

8 columns / Gutter 20px

#### Mobile < 768px

4 columns / Gutter 16px

### Side Padding

| Width | Padding |
|---|---:|
| ≥1440px | 64–80px |
| 1024–1439px | 40px |
| 768–1023px | 32px |
| <768px | 20px |

### Vertical Rhythm

基本spacing scale：`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

通常Section：

- Desktop: 112–128px
- Tablet: 88–104px
- Mobile: 64–80px

すべてのSectionを同じ128pxに固定しない。

写真系セクションでは余白を狭め、コピー中心では広げる。

---

## 6. 写真・画像アートディレクション

今回の品質を決める最重要要素。

### 写真優先順位

#### Priority A

中野店で実際に撮影された以下を最優先。

- トレーナー × 利用者
- 店舗内観
- トレーナー
- 受付
- 設備

#### Priority B

- Award
- アメニティ
- プロテイン
- 食事
- 道順
- ANNEX

#### Priority C

既存Heroで使用されていた女性モデル等のブランドイメージ写真。

Priority Cを禁止はしないが、**店舗固有写真より先に見せない。**

### Hero写真

推奨初期スライド：**トレーナーが女性利用者を指導している実写。**

理由：「設備」ではなく、**BEYONDで実際に何が起きる場所か**が1枚で伝わるため。

推奨順：

1. トレーナー × 女性利用者
2. ランニングマシン × 暗い店舗
3. バーベルトレーニング後ろ姿
4. 女性モデル Wide
5. 女性モデル Close
6. 必要な場合のみ追加

### Hero Crop

Desktop：`16:9〜1.9:1`

Hero自体は`min-height: 680px`、最大820px程度。

Mobileは同一画像の単純中央Cropではなく、**4:5〜3:4の専用Crop**を作る。

### 文字用Overlay

Desktop目安：

```css
linear-gradient(
  90deg,
  rgba(7,9,10,.88) 0%,
  rgba(7,9,10,.68) 32%,
  rgba(7,9,10,.24) 64%,
  rgba(7,9,10,.05) 100%
)
```

Mobile：下側・左側に濃度を集中。

人物の顔や身体を暗く潰す全面Overlayは禁止。

### Color Grading

- 黒を潰しすぎない
- 肌色は自然
- Cyan照明の彩度を過度に上げない
- コントラストは軽度強化
- 暖色の木材・肌とCyan照明の対比を残す
- 強いInstagramフィルターは禁止
- VignetteはHero Overlay以外原則不要

### Trainer Portrait

Aspect Ratio：**4:5**

顔のEye lineを上から35〜42%程度。

円形Cropは使用しない。

現在素材に円形切り抜きされた画像しかない場合は使用可能だが、可能な限り元矩形画像を優先する。

---

## 7. UIコンポーネント

### Header

#### Top State

Hero上では透明。

- White logo
- White navigation
- Top側に黒のsoft gradient
- 高さ Desktop 76px / Mobile 64px

#### Scrolled State

24〜48px以上スクロールで、`rgba(247,246,242,.94)` へ変化。

Logoは黒版、NavigationもInkへ。

`backdrop-filter`を使う場合は軽度。

#### Mobile

Logo + CTA + Menu。

すべてのDesktop navigationを無理に並べない。

### Button / CTA

#### Primary

Gold fill。

- Height: Desktop 54–56px / Mobile 52px
- Horizontal padding: 28–32px

#### Secondary

Transparent + 1px border。

HeroではWhite border、Light sectionではInk border。

#### States

Hover：明度変化 + `translateY(-1px)` / duration 160ms。

Active：transform 0 + darker fill。

Focus-visible：3px Focus ring + 2px offset。

### Icon

原則 `lucide-react`。

推奨：`Menu`, `X`, `ChevronRight`, `ChevronDown`, `ChevronLeft`, `Pause`, `Play`, `ArrowRight`, `MapPin`, `TrainFront`, `Dumbbell`, `Utensils`, `Shirt`, `Clock`, `Phone`, `Instagram`, `MessageCircle`。

基本：20px / stroke-width `1.75`。

大きなfeature iconでも24〜28px程度。

**48pxの巨大アイコンを装飾として並べない。**

### Card

カードを標準レイアウト単位にしない。

使用を許可するのは、店舗選択 / 料金比較 / 明確に独立したコンテンツ群など、**情報の境界が必要な場合のみ**。

Radius：0 / 4 / 最大8px。

大量の16〜24px Rounded Cardは禁止。

### Link

本文リンクは原則Underlineあり。

NavigationはUnderlineなし。

Hover / Focus時にCyan underline。

### FAQ

カードではなく**Divider Accordion**。

各行：`padding: 24px 0`

QuestionとLucide `Plus / Minus`。

背景Boxを何重にも囲わない。

### Reservation / Contact

**サンプル版では入力フォームを実装しない。**

Reference画像でフォームが使われていても、実LPでは以下を集約したCTA panelとする。

- 無料体験を予約する
- LINEで相談する
- 電話で問い合わせる

Production移行後、自前フォームが必要になった場合のみフォームデザインを追加する。

### Footer

情報を詰め込みすぎない。

Desktop：左ロゴ / 中央ナビ / 右連絡先。

Mobile：Logo → Contact → Navigation → Copyright。

---

## 8. セクション別アートディレクション

### 8.1 Header

**役割：操作**

デザインを主張しない。Heroを邪魔しないことを最優先。

PCでは透明→Light stickyへ変化。

MobileでCTAは「無料体験」の短いラベルに縮小可能。

### 8.2 Hero

**役割：世界観＋CV**

#### PC

Full-width。

人物を右55〜70%側に寄せ、Copyを左。

Copy block幅：`520–620px`。

構成：Eyebrow → H1 → Lead → CTA 2つ → Carousel controls。

画面最下部に、`01 / 05` + Progress line + Pause + Dotsを配置。

#### Mobile

画像を縦Crop。

Copyは中央揃えではなく**左揃え**。

Hero高さは`min(780px, 88svh)`程度。

CTAは縦2段。

#### 前後との差

次のProofまでDark toneを連続させ、Heroの世界観をすぐ切らない。

### 8.3 Proof Strip

**役割：即時の安心材料**

カード禁止。

Dark背景上に4項目を横並び。

例：中野駅北口徒歩1分 / 手ぶらOK / 年中無休 / 無料体験。

項目間は1px separator。

アイコンは原則不要。

Mobileは2×2。

数字や事実そのものを視覚主役とする。

### 8.4 Reasons

**役割：理由の理解**

背景：`#F7F6F2`

4枚均等カードを作らない。

#### PC

**非対称Editorial Layout**。

左6〜7colに大きな指導写真。

右5〜6colに、01 続けられる指導 / 02 無理のない食事 / 03 手ぶら / 04 駅近 を縦に配置。

各項目は大きな番号＋H3＋2〜3行。

Background boxなし。

#### Mobile

写真 → 4理由の順。

理由の間をDividerで区切る。

### 8.5 Trainers

**役割：人への信頼**

背景：`#0B0D0F`

Hero後で2回目のDark世界観。

#### PC

3名の場合は3 columns。

完全均等なカードに見せず、中央または代表的な写真を5〜8%上へずらす等の軽い非対称性を入れる。

写真の下：Trainer name / Qualification・Role / 1 sentence。

Surface cardは使わず、背景に直接配置。

#### Mobile

1 column。

写真は横幅100%。

人物名と文章をしっかり読めるサイズにする。

横スワイプのみにはしない。

### 8.6 Training × Food

**役割：サービス理解**

背景：Warm Light。

#### PC

左右Split。

左：トレーニング写真 / 右：コピー。

右下またはOverlapでFood imageを小さく配置。

見出し：`TRAIN / EAT / CONTINUE` の3要素を英字の小ラベルとして使用可。

#### Mobile

Training photo → Copy → Food photo → Food copyの順。

無理にOverlapさせない。

### 8.7 Facility

**役割：世界観訴求**

ここは最も写真を大きく見せる。

背景：Graphite / Dark。

#### PC

Main visual 8col / Copy 4col。

その下に3〜4枚の写真をサイズ不均等のMasonry風で配置。

CSS Gridで`2fr 1fr 1fr`程度の比率でよい。

#### Mobile

Main image 16:10。

Detail写真は2 columns。

説明は最小限。

「設備一覧」をここで大量に文字化しない。

### 8.8 Results / Case Study（Should）

**役割：Proof**

使う場合は1事例を大きく。

大量のBefore/Afterカード一覧にしない。

#### PC

左 Before/After / 右 Result data + short story。

#### Mobile

写真 → 数字 → story。

数字の強調にGoldを使用可。

掲載しない場合は、このSectionを丸ごと削除する。

### 8.9 Trial Flow

**役割：不安解消**

背景：`#F7F6F2`

#### PC

横5 steps。

カードに入れず、Number / Label / 短文をhorizontal lineでつなぐ。

必要な1〜2stepのみ実写画像を添える。

#### Mobile

Vertical timeline。

左に番号、右に内容。

線自体を目立たせすぎない。

### 8.10 Plan（Should）

価格確定前は詳細Pricing tableを作らない。

表示する場合、**初回カウンセリング・体験 0円 / 詳しい料金を見る**程度。

3種類の豪華な料金カードを捏造しない。

### 8.11 Stores

**役割：2店舗の関係整理**

背景：White。

#### PC

中野店を大きく。

ANNEXをその横または下に30〜40%小さく配置。

「2店舗が同格」に見せない。

#### Mobile

Nakano → ANNEX。

住所・アクセス等を明確に店名と紐づける。

### 8.12 Access

**役割：来店不安の解消**

現時点で提示された道順写真は**中野店用**。

ANNEXの道順として流用しない。

#### PC

5 stepsを横並び。

画像Aspect：`4:3`

写真下にGoldの番号。

その下に最大2行の説明。

白いカード背景は使わない。

#### Mobile

5stepを縦。

写真を横幅100%。

Google Maps CTAを最後に配置。

### 8.13 FAQ

**役割：最終懸念の除去**

背景：White。

最大幅：`800–880px`

中央寄せ。質問行は左揃え。

余計な写真・装飾を入れない。

このSectionで視覚的に一度静かにする。

### 8.14 Final CTA / Reservation

**役割：CV集中**

背景：店舗またはトレーニング写真のFull Bleed。

Dark overlay。

コピーの文字量は最大2〜3行。

CTA：Primary = 無料体験 / Secondary = LINE。

電話はテキストリンク。

ここでフォームは置かない。

### 8.15 Footer

Final CTAのDarkから**Light Footer**へ戻して終了。

Logoは黒版。

Accentを使いすぎない。

---

## 9. モーション

### Hero Carousel

- Auto: 4,000ms
- Transition: 650–800ms
- Cross Fade
- 画像Slide movementは基本使わない
- Ken Burns風の常時Zoomも不要

#### Interaction

- Previous
- Next
- Dots
- Pause / Play
- Swipe
- Keyboard

Focus中はAuto pause。

手動Pause後は自動復帰しない。

### Scroll Reveal

- Distance: 16–24px
- Opacity: 0 → 1
- Duration: 500–650ms
- Stagger: 60–100ms

Section全体を一斉に大量アニメーションさせない。

### Hover

Photo：`scale(1.015)`程度。

Button：`translateY(-1px)`。

200ms以下。

### Header

背景切替：200–240ms。

Menu：240–300ms。

### Reduced Motion

`prefers-reduced-motion: reduce`時：

- Hero autoplay OFF
- Scroll transform OFF
- Fadeは即時または100ms程度
- smooth scrolling無効
- hover transform無効

---

## 10. レスポンシブ方針

Mobileは「Desktopの1カラム化」ではない。

### Hero

PCは横構図。

Mobile用に人物位置を再Crop。

Copyを画像下へ完全分離せず、世界観は維持する。

### Trainers

PC 3列 → Mobile 1列。

写真サイズを維持。

### Reasons

PC非対称写真＋文章 → Mobileでは写真先行。

### Facility

PC Gallery → Mobile 2列Gallery。

### Access

PC 5 columns → Mobile vertical steps。

### Navigation

PC navはMobileでDrawer。

Drawer width 100%。

Dark背景。

Primary CTAをDrawer下部に固定しない。

コンテンツを隠す固定UIを増やさない。

---

## 11. アクセシビリティ・実装ルール

アクセシビリティは「行政サイト化」するためではなく、**マーケティングLPを誰でも迷わず利用できるための品質要件**として扱う。

### Contrast

通常本文：4.5:1以上。

非テキストUI：3:1以上。

Gold `#B6923B`を白背景本文には使用しない。

### Tap Target

Buttonは原則、**44×44 CSS px以上**。

小リンクでも24×24未満にならない。

### Focus

`:focus-visible`を必ず実装。

Outlineを`none`だけで削除禁止。

### HTML

`header`, `nav`, `main`, `section`, `figure`, `article`, `footer` 等を適切に使用。

見出し階層はH1 → H2 → H3を視覚都合で飛ばさない。

### Button / Link

ページ遷移：`<a>`

UI操作：`<button>`

Carousel Next / Pauseを`<div onClick>`で作らない。

### Alt

装飾画像：`alt=""`

意味のある写真：文脈上必要な情報を書く。

例：「BEYOND中野店でトレーナーが利用者のトレーニングをサポートしている様子」

「image1」「ジム画像」は禁止。

### Zoom

200%拡大時に以下を起こさない。

- 横スクロール
- CTA消失
- テキスト重なり

---

## 12. NGデザイン

### UI系

- Material風Rounded Card大量配置
- Apple風Glass UIの模倣
- デジタル庁サイトの視覚模倣
- 管理画面・Dashboard的Layout
- 同サイズ4カードの連続使用
- 全Section中央揃え
- 全Section白背景
- 全Section `max-width:1200px` の箱内だけで完結

### Card

- 左に太いBorder + Title + Text
- 同一Rounded Card 6〜10枚
- 無意味なShadow
- 角丸24px乱用

### Color

- Gold Gradient乱用
- Rainbow Gradient
- Cyanをすべてのボタンへ使用
- Neon Gym風にしすぎる
- 真黒 `#000` と純白 `#FFF` だけで全面構成

### Typography

- Mincho多用
- 英字筆記体
- 5種類以上のfont weight乱用
- H1を極端に細いWeightにする
- Heroで長文

### Photos

- AI人物を実在トレーナーの代わりに使用
- 過度なHDR
- 肌色変更
- 全写真を同じ暗さにする
- stock写真が実店舗写真より主役になる

### Motion

- Scroll hijacking
- 自動横スクロール
- 常時Zoom
- 大きなParallax
- 4秒ごとにコピー自体が切り替わるHero

### Icons

- 絵文字
- 意味のないLucide icon
- アイコン＋カードを理由なく大量反復

---

## 13. リファレンス画像生成時の固定条件

次工程でセクションごとのリファレンス画像を生成する際は、以下を全画像の共通前提にする。

- Black / Off-white / Nakano Cyan / limited Gold
- Actual photography first
- Sharp, minimal geometry
- Radius 0–8px
- Large photography + deliberate whitespace
- Noto Sans JP × Manrope
- No generic SaaS cards
- No glassmorphism
- No emoji
- No fake metrics
- No invented trainer details

リファレンス画像は「完成画像をそのまま実装する」のではなく、**構図・余白・階層・写真比率を決める設計図**として使用する。

---

## 14. このLPで最も重要なデザイン上の判断

### 1. Goldではなく「実店舗のDark × Cyan」をブランドの土台にする

生成済みモックのBlack × Goldは見栄えがよい一方、それだけでは一般的な高級ジムLPになりやすい。

中野店の黒い空間、植物、木材、青緑照明を取り込むことで店舗固有性を出す。

GoldはCTA・Award等に限定する。

### 2. Heroは「実在する人との体験」を第一スライドにする

無人の高級ジム写真より、トレーナーが利用者を支えている写真を最初に見せる。

### 3. 同じカードUIを連続させず、Sectionごとに役割を変える

Reasons＝Editorial / Trainers＝Portrait / Facility＝Photography / Trial＝Timeline / Access＝Steps / FAQ＝Text。

これにより長いLPでも単調にならない。

### 4. サンプルではフォームより予約導線を優先する

要件定義書v1.1を優先し、個人情報を取得する見せかけのフォームを実装しない。

「無料体験」「LINE」の2つを明確にする。

### 5. 高級感は装飾ではなく、余白・写真・文字組みから作る

Gold、Shadow、Gradient、角丸を増やして高級に見せるのではなく、実写の品質と情報量の制御でBEYOND中野らしいプレミアム感を作る。

---

## 参考する設計思想・一次ソース

- デジタル庁デザインシステム：https://design.digital.go.jp/dads/
- Google Material Design 3：https://m3.material.io/
- Apple Human Interface Guidelines：https://developer.apple.com/design/human-interface-guidelines/
- BEYOND中野店 公式：https://beyond-gym.com/gym/gym-nakano/
- BEYOND中野ANNEX店 公式：https://beyond-gym.com/gym/gym-nakano-annex/
- BEYONDについて 公式：https://beyond-gym.com/about/
- BEYOND中野 独自公式：https://beyond-nakano.jp/
