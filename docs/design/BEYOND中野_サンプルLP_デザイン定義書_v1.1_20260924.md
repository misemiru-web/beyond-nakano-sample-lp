# BEYOND中野 営業提案用サンプルLP デザイン定義書 v1.1

**更新日：2026年9月27日**  
**対象：BEYOND中野店を主対象、中野ANNEX店を副対象**  
**上位仕様：要件定義書 v1.2**  
**用途：リファレンス画像作成 → Next.js / React / CSS実装**

---

## 0. 前提と優先順位

本LPは、「黒くて格好いいジムサイト」を作ることを目的としない。

BEYOND中野店の公式訴求で確認できる、**継続しやすさ / 食事管理 / 実トレーナー / 駅近 / 手ぶら / 空間品質**を、実写と静かな編集デザインで伝える。

v1.1では、9月27日までに確定した最終実装とQA判断を反映する。

### v1.1で固定する主な変更

- Price：Summary + Inline Detail AccordionをNear Black基調で統一
- Access：実写5step + Color Google Map + Dark Shop Information
- FAQ：H2は「よくあるご質問。」、Divider Accordion
- Final CTA：Hero 1枚目系の実写を再利用可。Mobileの高さはcontent-driven
- Footer：**LightではなくInk/Dark基調**
- Customer Voice：3件のEditorial Card UI + 共通出典注記
- Trainers：Desktop 4 columns / Mobile Compact Profile Row
- Trust / Awards：2025 Main Recognition + 2020〜2023 Recognition History
- Blog Preview：FAQとFinal CTAの間にEditorialな最新3件を実装
- Header：Desktop Price anchor、Mobile Full Width Dark Menu
- Footer：営業提案用サンプル表記を最下部に表示

### 要件との整合上の注意

- 料金・営業時間など公式内に差異がある項目は、デザイン側で勝手に正解を決めない
- 未確認の`No.1`・継続率・満足度等を装飾目的で追加しない
- サンプルでは個人情報を収集するフォームを実装しない
- 中野 / ANNEXを混同しない

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

背景・情報密度を意図的に切り替え、長いLPでも区切りが理解できるようにする。

推奨リズム：

`Hero Dark → Proof Dark → Reasons Light → Trainers Dark → Training/Food Light → Facility Dark → Results Light → Voice Off White → Trust Dark → Stores Light → Trial Light → Price Dark → Access Light → FAQ White → Blog Off White → Final CTA Photo Dark → Footer Ink`

「3セクション以上ほぼ同じ白背景」が続く場合、境界線だけで済ませず、Compact Dark Proofや写真密度でリズムを作る。

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

確定順は、コピーを固定した4枚のCinematic Image Sequenceとする。

1. トレーナー × 女性利用者
2. ランニングマシン × 暗い店舗
3. バーベルトレーニング後ろ姿
4. 女性モデル系の確定素材

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

確定済みの円形切り抜き素材をそのまま使用する。

Desktopは4 columns内で十分な大きさを確保する。Mobileは`aspect-ratio: 1 / 1`、120〜150px程度の円形Portraitとして左側に置き、顔・上半身が自然に見える位置へ調整する。

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

Menu押下時はHeader直下から画面全体へFull Width Dark Menuを表示する。Concept / Trainers / Facility / Price / Access / FAQ / Blogを縦配置し、最下部に無料体験CTAを置く。

- `Menu / X`、`aria-expanded`、状態別`aria-label`を使用
- anchor / CTA選択、Escape、Desktop幅への遷移で閉じる
- Open中はbody scroll lock、Close時に復帰
- `height: calc(100dvh - header height)`、必要時のみ`overflow-y:auto`
- 200〜300msのopacity + 微細なtranslate。Reduced Motionでは無効化

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

背景は`#0B0D0F`を基本とする。

Desktop：左ロゴ / 中央ナビ / 右店舗情報。

Mobile：Logo → 店舗情報 → Social/Map/LINE → Navigation → Sample note → Copyright。

- 白文字 + Gold iconは限定使用
- Dividerは`Border Dark`
- 情報ブロック間の余白は十分に取るが、Mobile下端に巨大な空白を作らない
- Socialは公式ブランドロゴを無理にLucideで偽装せず、`Instagram` / `MapPin` / `MessageCircle`等の意味アイコン + テキストで統一可能

---

## 8. セクション別アートディレクション

### 8.1 Header

**役割：操作**

デザインを主張しない。Heroを邪魔しないことを最優先。

PCでは透明→Light stickyへ変化。NavigationはConcept / Trainers / Facility / Price / Access / FAQとし、Priceは`#price`へリンクする。

MobileでCTAは「無料体験」の短いラベルに縮小可能。

### 8.2 Hero

**役割：世界観＋CV**

#### PC

Full-width。人物を右55〜70%側、Copyを左。

Copy block幅：`520–620px`。

Eyebrow → H1 → Lead → CTA → Carousel controls。

#### Mobile

専用縦Crop。Copyは左揃え。

Heroは`svh`に固定しすぎず、主要CTAが見えた後に大きな空白を残さない。

CTAは縦2段。

### 8.3 Proof Strip

**役割：即時の安心材料**

Dark背景。カード禁止。

中野駅北口徒歩1分 / 手ぶらOK / 年中無休 / 無料体験等を3〜4項目。

Mobileは2×2。

### 8.4 Reasons

**役割：理由の理解**

背景：Off White。

PCは大きな実写 + Editorial text。4枚均等カードは使わない。

Mobileは写真 → 理由。Dividerで区切る。

### 8.5 Trainers

**役割：人への信頼**

背景：Ink / Dark。

実トレーナー写真を主役にし、名前・肩書・短いメッセージを直接配置。

PCは4 columns。Mobileは1 columnのCompact Profile Rowとし、左に120〜150pxの円形Portrait、右にNumber / Name / Roman name / Qualification / Short messageを配置する。各Rowは32〜40px程度のpaddingとthin dividerで区切り、横スワイプにはしない。

### 8.6 Training × Food

**役割：サービス理解**

背景：Warm Light。

Training photo / Copy / Food photo / Copyの関係を明確にする。

食事管理が全料金プラン共通と誤認される表現は避ける。

### 8.7 Facility

**役割：空間価値**

背景：Graphite / Dark。

Main visualを大きく、DetailはMasonry/Grid。

説明文より写真を優先。

### 8.8 Results / Case Study

**役割：定量Proof**

背景：Warm Off White。

Featured 1件を大きく見せる。

PC：Before/After 2枚 + 右側Data / Short Story。

Mobile：Before/After → Data → Story。

追加事例を置く場合、Featuredより視覚階層を下げる。

数字のBefore → AfterはGoldで変化後を強調してよい。

### 8.9 Customer Voice

**役割：定性Proof**

背景：`#F7F6F2`前後のOff White。

公式掲載内容を要約した3件を、Premium / Clean / HumanなEditorial Cardとして表示する。

#### PC

3 columns / equal height / gap 20〜24px。

- White surface / 1px low-contrast border / radius 6〜8px / Shadowなし
- Card header row：左Number、右Lucide `Quote`
- Name → Attribute → 28〜32pxの間隔 → Voice本文
- Quoteは28px前後、Gold、opacity .7〜.8、stroke 1.4〜1.5
- 3カードの下にLucide `BadgeCheck` + 共通出典注記を1回だけ表示

#### Mobile

1 column / gap 16px。H2は`続けられる理由を、 / 会員様の声から。`の2行に固定する。

Card padding 24〜28px、本文16px / line-height 1.8〜1.9程度。Accordionにはしない。

### 8.10 Trust / Awards / Media

**役割：第三者信頼**

背景：Ink / Dark。

#### Main Recognition

Desktopは左にLabel + H2、中央にBEYOND AWARD 2025集合写真、右に受賞内容。H2は`積み重ねた実績を、 / 評価のかたちに。`。右側は`BEYOND AWARD 2025`、`TRAINER / 優良賞 / トレーナー部門`、`STORE / 優秀賞 / 店舗部門`をthin dividerで整理する。

#### Recognition History

Section labelは`RECOGNITION HISTORY`。2020 BEST GYM AWARDを横長のまま表示し、2021〜2023 GETFIT AWARDは3年連続の時間軸として並べる。Year / Award nameはHTMLテキストでも表示する。

画像は`public/images/awards/`のoptimized WebPのみを使用する。Getfit 3画像はoptical sizeを揃え、2025集合写真を最も強く見せる。カード・Shadow・Gradient・汎用Awardアイコンは使用しない。

### 8.11 Stores

**役割：2店舗の関係整理**

背景：Lightを維持する。TrustをDarkにすることで、Results〜Trial間の白背景連続を分断する。

PC：中野店を大きく、ANNEXを30〜40%小さく配置。

Mobile：Nakano → ANNEX。店舗名と住所・アクセスを近接させる。

Card化せず、写真 + 店名 + MetaのEditorial layout。

### 8.12 Trial Flow

**役割：初回不安解消**

背景：Warm Light。

PCは横5 steps。各stepに実写を使用してよい。

NumberはManrope 500 / Gold。Number間のConnectorは**番号の光学中心に揃える**。

#### Number Style

- Desktop: 36–44px
- Mobile: 34–40px
- Weight: 500
- Letter spacing: `-0.03em`
- Box / Circle / Badge化しない

Mobileは縦Timeline。画像と文章を重ねない。

### 8.13 Price

**役割：価格理解・比較**

#### Summary

背景：`#0B0D0F`前後。

H2 + 2 course columns。Off White文字、Muted Gray本文、Goldの番号・価格、低contrast dividerで構成し、過度なカード・Shadowなし。

Course number `01 / 02`はGoldのEditorial numberとして扱う。

#### Detail Open State

背景：`#151719`前後。Summaryから白へ戻さず、わずかなDark Surface差で階層を作る。

PCは左右2 columns。左右のPrice list領域はGridで同一行構造に近づけ、**下端の高さ差を極端に出さない**。

各PlanはDivider list：Plan name / 内容 / Price / Unit price。

`16回 / 2ヶ月`単体ではなく、`トレーニング16回 / 食事指導2ヶ月`のように意味を明示。

SupportはPrice listの下に**Full-width section**として分離し、内部を2 course columnsにする。

- 回数券側：対象プランのAfter Proteinのみ
- Life Planning側：Personal Food Support + After Protein

これにより2コースの特典混同を防ぐ。

Mobileは左右Gridを解除し、Course 01 → Course 02 → Support → installment → CTAの順。SummaryもDarkを維持し、thin horizontal dividerで区切る。

本文・補助文字を小さくしすぎない。Price detail本文はMobile 15–16px以上を基本。

### 8.14 Access

**役割：来店不安解消**

背景：Off White。

H2：`中野駅から、徒歩1分。`

#### PC

5 steps横並び。Photoは同一高さ。

Number + Connector + ArrowはFlex/Gridで配置し、画像幅に依存したabsolute位置調整を避ける。

#### Mobile

各stepを**Number → Image → Text**で縦に完結。

横並びの文章を画像右に残さない。画像は100%。

H2はMobile 42–48pxを目安にし、`徒歩1分。`が不自然に一文字単位で折れないよう`text-wrap`・`<br>`を制御する。

#### Map / Shop Info

MapはカラーのGoogle Map。

PC：Map 2/3 + Dark Shop Info 1/3。

Mobile：Map → Dark Shop Info。

Shop Info iconは`MapPin`, `TrainFront`, `Clock`, `CalendarDays`を基本とする。

### 8.15 FAQ

**役割：最終懸念の除去**

背景：White。

Eyebrow `FAQ`、H2は**「よくあるご質問。」**。

最大幅：`1040–1120px`程度。Question / Answerは左揃え。

Divider Accordion。

- Question: Desktop 20–22px / Mobile 18–20px / 600
- Answer: Desktop 16px / Mobile 16–17px / 1.85
- Q label: Gold, Manrope 600
- Toggle: Lucide `Plus/Minus`

Mobileで本文を28px等に拡大しない。可読性とページ長を両立する。

### 8.16 Blog Preview

**役割：専門性・更新性・検索資産の存在提示**

背景：Off White。FAQ → BLOG → Final CTAの順に配置する。

最新3件のみ。

Desktop Headerは左約50%にBLOG / H2 / 導入文、右約50%に黒背景のBEYOND NAKANOロゴ画像を`object-fit:contain`で置く。画像はMobileでは非表示。

記事一覧はDesktop 3 columns、Mobile 1 column。3記事を同じ情報階層・同じ幅で扱う。

Card背景を付けず、Date → Title → `記事を読む` + Lucide `ArrowUpRight`。記事間はthin dividerのみ。

記事ごとに実サムネイルがない場合、同じBEYONDロゴ画像を3枚繰り返さない。Text-first listへ切替える。

`BLOG一覧を見る` + Lucide `ArrowRight`は記事直下へ置き、Primary CTAより目立たせない。記事・一覧とも既存BLOGへの外部リンクとし、新規タブで開く。

### 8.17 Final CTA / Reservation

**役割：CV集中**

背景：Hero first visual系の実写を再利用可。Dark overlay。

H2：`まずは、体験から。`を基本。

CTA：Primary = 無料体験 / Secondary = LINE / Supporting = 電話。

Mobileでは`min-height:100vh`を使わず、内容 + `padding-block: 72–88px`を基本にする。

背景画像の下側を見せるためだけの巨大な空白は禁止。

### 8.18 Footer

**役割：情報の着地・回遊**

背景：`#0B0D0F`。

#### Desktop

3 columns：Logo / Navigation / Store Information。

Vertical dividerは細く、Social rowは店舗情報下。

#### Mobile

Logo → Divider → Store Information → Social → Divider → 2col Navigation → Sample note → Copyright。

- Store titleの不自然な1文字折返しを避ける
- Address / Accessは16px前後、line-height 1.7
- TELは少し強め
- Socialの区切り線を均等
- Copyrightが画面下で切れないpaddingを確保
- Footer全体を不要に長くしない
- `このページは営業提案用サンプルです。`をcopyright直上にGrayの小さな文字で表示する

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
- Current count + Progress line
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

PC 4列 → Mobile 1列のCompact Profile Row。

Mobileは左Portrait 120〜150px、右Profile textとし、巨大写真と大余白の反復を避ける。

### Reasons

PC非対称写真＋文章 → Mobileでは写真先行。

### Facility

PC Gallery → Mobile 2列Gallery。

### Results / Voice / Trust

Results：写真 → 数字 → Story。

Voice：1 columnのEditorial Card。

Trust：2025 Main Recognition → Divider → BEST GYM 2020 → GETFIT 2021〜2023。Getfit 3画像のみ横3列可。

### Price

Summary 2 columns → 1 column。DetailはCourseごとに縦積み。

### Access

PC 5 columns → Mobile vertical steps。画像・文章の横並び禁止。

### FAQ

Question / Answerのfontを過度に拡大せず、本文幅を確保。

### Footer

3 columns → 1 column。Dark toneを維持。

### Navigation

PC navはMobileでFull Width Menu。

Menu width 100%。

Dark背景。

Primary CTAをMenu下部に固定しない。

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

中野店の黒い空間、植物、木材、青緑照明を取り込み、GoldはCTA・Award・Price数字等に限定する。

### 2. Heroは「実在する人との体験」を第一スライドにする

無人設備より、トレーナーが利用者を支えている実写を最初に見せる。

### 3. 情報を削るのではなく、Proofを圧縮して残す

Results＝数値 / Voice＝体験 / Trust＝第三者評価、と役割分担する。

長文説明を増やすより、**実写・数字・声・出典**で判断材料を増やす。

### 4. 3セクション以上同じ白背景を続けない

Results / Voiceの後にCompact Dark Trustを入れ、Stores・Trialへつなぐ。Storesを無理に黒化しなくても背景リズムを確保できる。

### 5. PriceはDark上で「比較→詳細→特典」の順に理解させる

SummaryからDetailまでNear Blackを維持し、安価なSaaS料金カードにせず、背景差・Editorial divider・タイポグラフィで上質に見せる。

### 6. MobileはDesktopの縮小ではない

Accessの画像・文章重なり、H2の変な改行、Final CTAの大余白、Footerの過長化を明示的に防ぐ。

### 7. LucideはUI意味アイコンに限定する

`MapPin`, `TrainFront`, `Clock`, `CalendarDays`, `Phone`, `Instagram`, `MessageCircle`, `ArrowRight`, `Plus/Minus`等を使用する。

公式ブランドロゴそのものが必要な場合は、Lucideで偽装しない。

### 8. サンプルではフォームより予約導線を優先する

無料体験 / LINE / 電話を明確にし、個人情報を取得しない。

### 9. FooterはLightではなくDarkで閉じる

Final CTAから連続したDark worldで着地させ、情報階層は線・余白・タイポグラフィで作る。

### 10. Blogは更新性を示し、Final CTAと競合させない

FAQとFinal CTAの間に最新3記事を同格で置き、既存BLOGへの導線を保つ。共通ロゴ画像はSection HeaderのEditorial visualとしてのみ使い、記事サムネイルとして反復しない。

### 11. 高級感は装飾ではなく、余白・写真・文字組みから作る

Gold、Shadow、Gradient、角丸を増やして高級に見せるのではなく、実写の品質と情報密度の制御でBEYOND中野らしいプレミアム感を作る。

## 参考する設計思想・一次ソース

- デジタル庁デザインシステム：https://design.digital.go.jp/dads/
- Google Material Design 3：https://m3.material.io/
- Apple Human Interface Guidelines：https://developer.apple.com/design/human-interface-guidelines/
- BEYOND中野店 公式：https://beyond-gym.com/gym/gym-nakano/
- BEYOND中野ANNEX店 公式：https://beyond-gym.com/gym/gym-nakano-annex/
- BEYONDについて 公式：https://beyond-gym.com/about/
- BEYOND中野 独自公式：https://beyond-nakano.jp/
- Google Search Central Helpful Content：https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central Site Move：https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=ja
