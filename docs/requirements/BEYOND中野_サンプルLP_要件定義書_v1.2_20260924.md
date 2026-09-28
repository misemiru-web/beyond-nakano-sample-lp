# BEYOND中野 サンプルLP 要件定義書 v1.2

**更新日：2026年9月27日**  
**対象：BEYOND中野店 / BEYOND中野ANNEX店**  
**制作区分：営業提案用サンプルLP**  
**品質基準：本番公開候補レベル**  
**上位方針：ミセミルWeb 事業設計書 v1.4**  
**本版：v1.2**

---

## 0. v1.2の位置づけ

本書を、2026年9月27日時点の最終実装・QA判断を反映した**要件の正本**とする。

以降は **要件定義書 v1.2 → デザイン定義書 v1.1 → 実装 → QA → サンプル公開** の順で更新する。

v1.2では、特に以下を確定・追加した。

- 料金詳細は外部公式サイトへ逃がさず、LP内で展開して理解できる構成にする
- Accessは写真5ステップ + Google Map + 店舗情報までLP内で完結させる
- FAQは実際の来店前不安を短く解消する
- サンプルでは自前フォームを実装せず、無料体験 / LINE / 電話へ集約する
- Final CTAは実写背景、FooterはDark基調とする
- Resultsだけでなく、**Customer Voice / Trust・Awards**を追加し、判断材料の密度を上げる
- PriceはSummary / Inline Detail AccordionともDark基調で統一する
- Customer Voiceは公式掲載内容を要約した3件のEditorial Card UIとする
- TrainersはDesktopの4列表示を維持し、MobileはCompact Profile Rowとする
- Trust / Awardsは2025年をMain Recognition、2020〜2023年をRecognition Historyとして構成する
- BlogはFAQとFinal CTAの間に最新3件を実装し、既存記事へ外部リンクする
- Mobile HeaderはFull Width Dark Menu、Desktop HeaderはPrice anchorを含む構成とする
- Footerに営業提案用サンプルである旨を明記する

色、フォント、余白、背景リズム、各セクションの具体レイアウトはデザイン定義書 v1.1で確定する。

### 実装前ブロッカー

現在、公開中のBEYOND公式情報内で**営業時間・料金に表記差**があるため、数値を最終確定値として固定する前に店舗確認が必要である。

- 中野店営業時間：公式店舗ページでは `10:00〜22:30`、公式中野区一覧では `10:00〜22:00` の表記が確認される
- 料金：現行総合公式FAQの例示額と、旧/独自公式サイト由来の詳細料金画像で差異がある

構造・UIは先に実装可能だが、**差異のある数値は content-source.md で `pending-client-confirmation` として管理する。**

## 1. プロジェクト目的

今回の制作は、Webサイトを持っていない店舗への新規制作ではない。

BEYOND中野にはすでに以下が存在する。

- BEYOND総合公式店舗ページ
- 中野独自公式サイト
- 公式Instagram
- LINE
- 豊富な実店舗写真
- トレーナー写真
- 利用事例
- Award / 第三者評価・メディア掲載情報
- BLOG記事
- 体験導線

したがってLPの役割は、単純に情報量を増減することではなく、**BEYONDブランドの信頼 × 中野店固有の人・空間・実績・通いやすさを、無料体験の意思決定順に再編集すること**とする。

既存サイトが持つ信頼・検索資産を安易に削除しない。サンプルは「1ページに全部詰め込んだ代替サイト」ではなく、**CVを担う高品質トップページ案**として設計し、正式採用時には必要なBLOG・下層ページ・既存URL資産の継承を別途行う。

## 2. プロジェクトゴール

### Primary Goal

**無料体験・無料カウンセリングへの送客。**

ユーザーがLP閲覧後、

- ここなら続けられそう
- この人たちなら相談できそう
- 一度体験してみたい

という状態へ移行することを目標とする。

### Secondary Goal

既存Webよりも、**人・空間・継続性・地域性**を短時間で理解できる情報構造へ改善する。

### Business Goal

今回のサンプルを、**「既存サイトが十分整備されている事業者に対しても、ミセミルWebがUX・デザイン・情報設計を改善できる」ことを示す営業実績候補**とする。

---

## 3. 非目的 / Out of Scope

サンプル段階では以下を実装対象外とする。

| 項目 | サンプル |
|---|---|
| 独自予約システム | 対象外 |
| 会員管理 | 対象外 |
| 決済 | 対象外 |
| ログイン | 対象外 |
| データベース | 対象外 |
| CMS | 対象外 |
| 本物の問い合わせ送信 | 原則対象外 |
| 個人情報保存 | 行わない |
| メール送信API | 実装しない |
| 本番SEO運用 | 対象外 |
| GA4本番計測 | 原則対象外 |
| 新規写真撮影 | 対象外 |
| 根拠のない実績生成 | 禁止 |

正式契約後に必要であれば別途確定する。

ミセミルWebの標準LPでも、独自予約・データベース・大規模フォーム等は標準範囲外とする。

---

## 4. 対象店舗

### 主対象：BEYOND中野店

現在の公式店舗ページで確認できる情報：

- JR中野駅北口 徒歩1分
- 東京メトロ東西線 中野駅北口 徒歩1分
- 営業時間 10:00〜22:30
- 年中無休
- TEL 03-5318-9431

### 副対象：BEYOND中野ANNEX店

現在の公式店舗ページで確認できる情報：

- JR中野駅 徒歩5分
- 東京メトロ東西線 中野駅 徒歩5分
- 営業時間 10:00〜22:30
- 年中無休
- TEL 03-5318-9431

また、ANNEXは中野店の実績・利用増加を背景に開設された2店舗目として公式情報で説明されている。

### 本LPでの扱い

**中野店を主役、ANNEXを中野エリアの補完拠点として扱う。**

正式制作段階では、2店舗統合LPとして運用する意向があるかを店舗へ確認する。

---

## 5. 情報ソースの優先順位

公式情報同士にも差異があるため、以下の順で確定する。

| 優先 | 情報源 |
|---:|---|
| 1 | 店舗担当者から直接得た最新情報 |
| 2 | BEYOND総合公式の当該店舗ページ |
| 3 | BEYOND総合公式の地域一覧 |
| 4 | beyond-nakano.jp |
| 5 | 公式Instagram / LINE |
| 6 | 第三者媒体 |

情報が矛盾する場合は**制作側で推測して統一しない。**

---

## 6. 情報管理要件

リポジトリ内に以下を保持する。

### `content-source.md`

主要情報について、`項目 / 内容 / URL / 確認日 / 状態` を記録する。

対象例：営業時間、住所、電話、料金、トレーナー、資格、Award、設備、無料体験条件。

### `asset-inventory.md`

使用画像について、`ファイル名 / 出典 / 店舗提供or公開素材 / 使用許可 / 使用箇所 / alt` を記録する。

これにより、将来的に他店舗展開しても情報管理方式を流用できるようにする。

---

## 7. 想定ユーザー

中心ユーザーは、中野周辺でパーソナルジムを探している人。

LP設計上は以下を中心に想定する。

- 初心者
- 自己流で続かなかった人
- ダイエットやボディメイクをしたい人
- 仕事帰りに利用したい人
- 食生活も相談したい人

これはLP制作上の**マーケティング仮説**であり、BEYONDから提供された顧客統計ではない。

公式FAQで女性会員が多数を占める旨が案内されているため、男性的な筋力トレーニング表現だけに偏らない設計とする。

---

## 8. コンバージョン設計

### Primary CTA

**無料体験 / 無料カウンセリング予約**

### Secondary CTA

**LINEで相談**

### Supporting CTA

- 電話
- Google Maps
- Instagram
- 料金を見る
- ANNEXを見る

CTAの優先順位は全ページで統一する。

---

## 9. 計測対象

正式版でGA4等を導入する場合、最低限以下をイベント対象とする。

| Event | 内容 |
|---|---|
| `reserve_click` | 無料体験予約 |
| `line_click` | LINE |
| `tel_click` | 電話 |
| `map_click` | Google Maps |
| `price_click` | 料金 |
| `instagram_click` | Instagram |
| `annex_click` | ANNEX情報 |
| `hero_slide_interaction` | Hero手動操作 |

計測仕様は正式公開前に顧客名義環境で確定する。

---

## 10. 機能・セクション優先順位

### Must / 必須

| Section | 目的 |
|---|---|
| Header | ナビゲーション・予約 |
| Hero | 第一印象・価値提示 |
| Proof | 即時の安心材料 |
| Reasons | 選ばれる理由 |
| Trainers | 人への信頼 |
| Training × Food | サービス理解 |
| Facility | 空間への信頼 |
| Results / Case Study | 定量的な変化の根拠 |
| Customer Voice | 定性的な体験・安心材料 |
| Trust / Awards / Media | 第三者評価・ブランド信頼 |
| Stores | 中野2拠点の関係整理 |
| Trial Flow | 初回不安低減 |
| Price | 料金理解・比較 |
| Access | 来店不安低減 |
| FAQ | 懸念解消 |
| Blog Preview | 専門性・更新性・既存検索資産の提示 |
| Final CTA | CV集中 |
| Footer | 店舗情報・サイト回遊 |

### Should / 優先度高

- 料金詳細Accordion
- Google Map埋め込み
- ANNEXへの導線

### Could / 正式制作時に判断

- BLOG/CMSそのものの再構築
- Media掲載の詳細一覧
- Instagram投稿紹介
- 独自問い合わせフォーム

ページ長を短くする場合も、**Proof系（Results / Voice / Trust）を一括で削除しない。** 説明文を削る前に、重複・装飾・不要な長文を整理する。

## 11. Header要件

**REQ-FE-001**

PCでは固定または追従型Headerとし、BEYOND NAKANOロゴ / Concept / Trainers / Facility / Price / Access / FAQ / 無料体験CTAを表示する。Priceは`#price`へ遷移する。

Mobileではロゴ＋無料体験CTA＋Menuを維持し、Menu押下時にHeader直下からFull WidthのDark Menuを表示する。メニュー項目はConcept / Trainers / Facility / Price / Access / FAQ / Blogとし、各section anchorへ遷移する。

Mobile Menuは以下を満たす。

- `Menu / X`を状態に応じて切り替え、`aria-label` / `aria-expanded` / `aria-controls`を設定する
- 項目およびCTA選択後、Escape押下時、Desktop幅への遷移時に閉じる
- Open中はbody scrollを停止し、Close後に復帰する
- Hero等の背面に回らないz-indexとし、必要な場合のみ縦スクロールを許可する
- `prefers-reduced-motion`では開閉motionを抑制する

Headerによってアンカー遷移先のタイトルが隠れないよう `scroll-margin-top` 等で調整する。

---

## 12. Hero要件

**REQ-FE-010**

既存サイトで使われているHero写真を活用した、**実写カルーセルHero**とする。

### 表示仕様

- 確定素材から選定した4枚
- 標準切替間隔：4秒
- クロスフェードまたは穏やかなトランジション
- headline / subcopy / CTAは基本固定
- 写真のみ切り替える
- 細いProgress lineと現在位置表示
- Previous / Next
- Pause / Play
- Touch Swipe
- Keyboard操作

重要なコピーまで4秒ごとに変更すると読了を妨げるため、**コピーを固定し、ビジュアルのみ変化させる。**

### Accessibility

- Focus時：自動停止
- Pause操作後：勝手に再開しない
- `prefers-reduced-motion: reduce`：初期自動再生OFF
- Pause / Playにaria-label
- Slide情報に適切なラベル

---

## 13. First View受入条件

390×844px相当のMobile表示で、以下の3つがスクロール前または最小スクロールで認識できること。

- ブランド
- Heroコピー
- Primary CTA

PCではHeroが過度に高くならず、次のコンテンツの存在が把握できる構成とする。

---

## 14. Proof Strip

**REQ-UI-020**

Hero直後に3〜4項目。

掲載候補：**中野駅北口徒歩1分 / 手ぶらOK / 年中無休 / 無料体験・カウンセリング**。

### 禁止

根拠未確認の以下のような数値・表現を生成しない。

- 継続率90%
- 満足度98%
- 中野No.1

---

## 15. Reasons

**REQ-CONTENT-030**

基本3〜4項目。

1. Continue：続けられるトレーニング
2. Food：無理のない食事管理
3. Space：通いたくなる環境
4. Access：駅近・手ぶら

---

## 16. Trainers

**REQ-CONTENT-040**

今回のLPの主要コンテンツとする。

提供済み実写写真を使用。

Desktopは4名を4列で配置し、円形切り抜き済みの確定素材、Name / Roman name / Qualification / Messageを表示する。

未確認の資格・実績・肩書は追加しない。

Mobileでは縦方向の過長化を避け、**左に120〜150px程度の円形Portrait、右にNumber / Name / Roman name / Qualification / Short Messageを置くCompact Profile Row**とする。4名を同一階層で扱い、各Row間をthin dividerで区切る。

---

## 17. Training × Food

**REQ-CONTENT-050**

単純な「筋トレ紹介」ではなく、**TRAIN / EAT / CONTINUE** の関係が伝わる構成とする。

提供済みのトレーニング写真・食事・プロテイン写真を利用可能。

医療的効果や結果保証は記載しない。

---

## 18. Facility

**REQ-CONTENT-060**

施設写真を大きく使用する。

必須候補：店内全景 / マシン / ダンベル / 受付 / アメニティ / 洗面 / BEYONDロゴ / 植物・照明。

アイコン一覧だけで終わらせず、**「ここでトレーニングしたい」と感じる空間体験**を重視する。

---

## 19. Results / Before After

**REQ-CONTENT-070 / Must**

Resultsは、抽象的な「変われる」訴求ではなく、**公式公開済みの個別事例**を根拠として見せる。

- 1件をFeatured Caseとして大きく見せる
- ソースと素材が揃う場合、追加で1〜2件をSecondary Caseとして掲載可能
- 写真 / 期間 / 体重 / 体脂肪率 / ウエスト等は、同一事例の公式情報と一致させる
- 「結果には個人差があります」等の注記を明示する
- 一例を一般化し、「誰でも同様に変化する」と読める表現は禁止

### 19.1 Customer Voice

**REQ-CONTENT-071 / Must**

Resultsが数値的変化を担当するのに対し、Customer Voiceは**通いやすさ・トレーナーとの関係・食事管理・継続感**を伝える。

- J・K様 / A・S様 / A・T様の3件を表示する
- 公式掲載済みの声、または店舗から使用許可を得た声のみ使用
- 原文を改変して架空の口コミを作らない
- 長文をそのまま大量掲載せず、要点を90〜140字程度に整理する
- 要約する場合は「公式掲載内容を要約」等、原文引用と誤認させない
- Off White背景上に3件の独立したEditorial Cardを配置する
- Card内はHeader rowの`Number / Quote`、Name、Attribute、Voiceの順とする
- Desktopは3 columns / equal height、Mobileは1 columnとする
- Sourceは3件の下に共通で1回だけ表示する
- 星評価・写真は使用しない。写真・原文の転載可否は正式制作時確認事項とする

### 19.2 Trust / Awards / Media

**REQ-CONTENT-072 / Must**

第三者評価・Awardは、**2025年の現在地**と**2020〜2023年の評価の積み重ね**を分けて見せる。

- Main Recognition：`BEYOND AWARD 2025`の集合写真を主役とし、TRAINER 優良賞 / トレーナー部門、STORE 優秀賞 / 店舗部門をHTMLテキストでも表示する
- Recognition History：BEST GYM AWARD 2020、GETFIT AWARD 2021〜2023を時間軸で表示する
- 2021〜2023は3年分の連続性が分かる構成とする
- すべて`public/images/awards/`の`*_optimized.webp`を使用し、旧JPGを参照しない
- 2025集合写真は人物・賞状を切らず、ロゴ画像は原則containで表示する

- Award名 / 年 / 主催・媒体を確認する
- `No.1`・`3年連続`等は対象範囲・調査条件・年が確認できる場合のみ使用
- Awardロゴ・媒体ロゴは利用条件を確認する
- 古い「今最も注目」等の時点依存コピーを、そのまま現在の事実として再利用しない
- 低解像度画像を巨大表示せず、テキスト主体のProof表現へ置換可能

## 20. Stores

**REQ-CONTENT-080**

中野店とANNEXを明確に区別する。

MobileではTabまたはCard形式を候補とする。

ユーザーが**「今見ている情報がどちらの店舗か」分からなくなるUIは禁止。**

---

## 21. Trial Flow

**REQ-CONTENT-090**

初回利用までの流れを4〜6ステップで表示。

公式情報を基礎として、受付 / ヒアリング / 身体確認 / 体験 / 案内 等を簡潔に見せる。

正式工程と異なる内容を作らない。

---

## 22. Price

**REQ-CONTENT-100 / Must**

料金セクションは、ユーザーが他サイトへ移動しなくても**コースの違いと概算費用を理解できる**構成とする。

セクション全体をNear Black（`#0B0D0F`前後）とし、Summary / Detailを一貫したDark UIとして設計する。GoldはSection label / Course number / Price / thin rule等に限定し、カード・Shadow・Gradientを使わない。

### Summary

最初に2系統を比較できるようにする。

1. 回数券コース：自分のペースでトレーニングを続けたい方向け
2. ライフプランニングコース：トレーニング + 食事管理で集中的に取り組みたい方向け

Desktopは2 columnsと中央divider、MobileはCourse 01 → Course 02の縦配置とする。金額をGoldで最も強く表示する。

`16回 / 2ヶ月` のように対象が曖昧な表記は禁止し、以下のように意味を明示する。

- `トレーニング16回 / 食事指導2ヶ月`
- `トレーニング24回 / 食事指導3ヶ月`

### Detail

Gold borderの`料金・プランの詳細を見る`ボタンで**LP内の詳細を展開**する。閉状態はLucide `Plus`、開状態は`Minus`を使用する。正式サイト化後も、単なる旧公式サイトへの外部リンクに依存しない。

展開領域は`#151719`前後のDark Surfaceとし、背景差とthin dividerでSummaryとの階層を作る。Desktopは2 course columns、Mobileは1 columnとする。

詳細は以下を持つ。

- プラン名
- トレーニング回数
- 食事指導期間（該当時）
- 税込価格
- 1回あたり参考額
- 含まれるサポート

回数券とライフプランニングの特典を混同しない。

- 回数券：食事管理が含まれると誤認させない
- 公式情報で確認できる場合、ACHIEVE 20 / BEYOND 30等の対象プランにプロテイン特典を明示
- ライフプランニング：食事管理 + プロテイン等、公式確認済み内容を明示

料金比較の後に`SUPPORT / 特典・サポート`を横断配置し、回数券とライフプランニングを別columnで明示する。回数券側は対象プランのアフタープロテインのみ、ライフプランニング側はパーソナル食事管理とアフタープロテインを表示する。その後に分割払い補足、最終CTAを置く。

### 分割払い

分割払い対応の案内は掲載可能。ただし、**最大回数・月額例・対象カード等の条件は店舗確認後に確定**する。未確認段階で確定数値を出さない。

### 料金差異の扱い

2026-09-24時点で、現行総合公式FAQの例示額と、独自公式サイト由来の詳細料金画像に差異が確認される。よって実装前に店舗へ最新料金を確認し、`content-source.md` の価格行を更新してからProduction用コピーを確定する。

サンプル中に暫定額を表示する場合は、**営業提案用サンプルであり正式料金は店舗確認後に確定する**旨を明示する。

## 23. Access

**REQ-CONTENT-110 / Must**

中野駅北口から中野店までの**5ステップ実写道順**を活用し、初来店でも迷いにくい状態を作る。

### Desktop

- 5 steps横並び
- Number / Photo / 1〜2行説明
- 矢印・Connectorは各番号の視覚中心に揃える
- 写真比率・高さを統一する

### Mobile

- **縦積みを基本**とし、画像と文章を横並びにして重ねない
- Number → Photo → Textの順で1stepずつ完結させる
- 画像は原則 `width:100%`
- 320pxでも横スクロールを発生させない
- H2 `中野駅から、徒歩1分。` は意図しない途中改行を避ける

### Map / Shop Information

- Google Mapを埋め込む
- 地図にCSSのgrayscale / saturation:0等を適用せず、**通常のカラー表示**とする
- 地図横または直下にDarkのShop Information panelを配置
- 住所 / 駅 / 営業時間 / 定休日 / Google Maps CTAを表示
- アイコンは原則 `lucide-react`

### 情報差異

中野店営業時間は公式情報内に表記差があるため、正式公開前に確認する。UIに値をハードコードする場合も、データ定義を一箇所に集約する。

## 24. FAQ

**REQ-CONTENT-120 / Must**

FAQは検索語を増やすためではなく、**無料体験直前の不安を短時間で解消すること**を目的とする。

基本6〜8項目。

候補：

- 本当に無料で体験できますか？
- 運動初心者でも大丈夫ですか？
- 持ち物は必要ですか？
- 仕事が忙しくても通えますか？
- 回数券とライフプランニングコースの違いは？
- 分割払いはできますか？
- 中野店へのアクセスは？

### 実装

- Divider Accordion
- 質問行は`button`
- `aria-expanded` / `aria-controls`
- Lucide `Plus / Minus` または `ChevronDown`
- 回答はSSR/HTML上で検索・支援技術が扱える構造にする
- 回答は最初の1文で結論を述べ、その後必要な補足を書く

H2は**「よくあるご質問。」**を基本とし、「来店前の、」は付けない。

## 24.1 Blog Preview / Content Continuity

**REQ-CONTENT-125 / Must**

FAQとFinal CTAの間に配置し、CMSは構築せず、既存BLOGの最新3件を静的に紹介する。

掲載内容は現行実装の以下3件とする。

1. `2026.08.28` 肩の痛みと肩甲骨の動き｜インピンジメントを防ぐために知っておきたいこと
2. `2026.08.19` ㊗️ ２店舗目、BEYOND中野ANNEX店オープン！！🎉
3. `2026.07.31` ストレッチしても体が硬い理由は「水不足」？コーヒー好きがハマるコリの落とし穴

記事タイトルは公式掲載タイトルを改変せず表示する。UI装飾として絵文字を追加することは禁止するが、公式タイトルに含まれる文字は原文維持の対象とする。

- Section HeaderはBLOG / H2 / 導入文とし、Desktopのみ右側にBEYOND NAKANOの黒背景ロゴ画像をEditorial visualとして表示する
- 3記事はDate / Title / `記事を読む` + Lucide `ArrowUpRight`の同一階層とする
- Desktopは3 columns、Mobileは1 columnとし、カード背景・Shadowを使わない
- 3件共通のダミーThumbnailを反復せずText-firstにする
- 記事とBLOG一覧は既存BLOGへ`target="_blank"` / `rel="noopener noreferrer"`でリンクする
- 正式サイト置換時は、新サイト内のBLOG一覧・記事ページへ内部リンクする

BLOGはFinal CTAより強い視覚主役にしない。目的は**検索資産・専門性・継続更新の存在を示すこと**であり、CV導線を分散させない。

---

## 25. Reservation / Contact

### サンプル版

**REQ-BE-001**

**個人情報を収集しない。**

既存フォームを再現して入力させるのではなく、Final CTAで以下に集約する。

1. Primary：無料体験を予約する
2. Secondary：LINEで相談する
3. Supporting：電話で問い合わせる

Final CTAは実写写真 + Dark Overlayを基本とし、サンプル内の主要予約導線をここへ集約する。

Mobileでは固定高さ・`100vh`依存で下部に大きな空白を作らず、**コンテンツ量に応じた高さ**とする。

正式版で独自フォームが必要な場合のみ、次節の要件を適用する。簡易フォームはLP標準仕様とは別機能として扱う。

## 26. 正式版フォーム要件

正式契約後に自前フォームを実装する場合のみ適用。

**REQ-BE-010**

以下を必須とする。

- Client-side validation
- Server-side validation
- Spam対策
- Rate limiting
- 送信成功 / 失敗処理
- 通知失敗時の処理
- 環境変数による秘密情報管理
- HTTPS
- ログへの不要な個人情報保存禁止
- プライバシーポリシー
- 利用目的明示

性別・年齢等は**運用上必要か店舗に確認したうえでのみ取得する。**

---

## 27. Responsive

**REQ-FE-100**

Mobile First。

最低確認幅：

| Width | 用途 |
|---:|---|
| 360 | Small Mobile |
| 390 | Standard Mobile |
| 430 | Large Mobile |
| 768 | Tablet |
| 1024 | Small Desktop |
| 1440 | Desktop |

320pxでも横スクロールを発生させないことを目標とする。

---

## 28. Browser Support

正式QA対象：**Chrome / Safari / Edge / Firefox**。

現行主要版＋直近主要版を基本とする。

MobileはiOS Safari・Android Chromeを必須確認対象とする。

---

## 29. Accessibility

**REQ-A11Y-001**

目標：**WCAG 2.2 AA相当を意識した実装。**

必須項目：

- semantic HTML
- `lang="ja"`
- h1 1つを基本
- 適切なHeading hierarchy
- alt
- keyboard操作
- visible focus
- reduced motion
- label付きフォーム
- aria属性は必要な箇所のみ
- 色だけで意味を示さない

通常テキストは4.5:1以上、大きな文字は3:1以上のコントラストを基準とする。

操作要素はWCAG 2.2の24×24 CSS px以上を最低基準とし、本案件では内部品質基準として**原則44×44 CSS px以上**を目標にする。

Keyboard focusを非表示にしない。

---

## 30. Performance

**REQ-PERF-001**

正式サイトで目標とするCore Web Vitals：

| Metric | Good |
|---|---:|
| LCP | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |

---

## 31. Lighthouse

サンプル公開後、Production Buildで3回計測し中央値を見る。

目標：

- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 90

ただしLighthouseスコア単体を品質の絶対指標にはしない。

---

## 32. 画像パフォーマンス

今回の最重要パフォーマンス項目。

### First Hero

優先読込。

### 2枚目以降

遅延・段階的ロード。

### その他画像

Viewport外はLazy Load。

可能な限り、**AVIF / WebP + responsive `srcset`** を使用する。

---

## 33. Next.js Static Export

**REQ-TECH-010**

サンプルは静的Export可能な構成とする。

Static Export時の画像最適化は以下のいずれかを採用する。

- A. 事前最適化画像を`public`配信
- B. custom loader

不必要に複雑化しないため、今回のサンプルは**Aを第一候補**とする。

---

## 34. 技術構成

基本：**Next.js / React / TypeScript**。

コンポーネント例：

```text
Header
HeroCarousel
ProofStrip
Reasons
Trainers
TrainingAndFood
Facility
Results
CustomerVoice
TrustProof
Stores
TrialFlow
PriceSummary
PriceDetailsAccordion
AccessSteps
AccessMap
FAQ
BlogPreview
FinalCTA
Footer
```

コンテンツとUIロジックを可能な限り分離する。

店舗情報・料金・営業時間・URL等、更新される可能性が高い値はComponentへ直接散在させず、**content/data layerへ集約**する。

## 35. Repository

ミセミルWeb Organization配下。

**Private repositoryを正本**とする。

必須：

- README
- requirements
- design
- content-source
- asset-inventory
- source code

---

## 36. Hosting

### 営業サンプル

GitHub Pages使用可。ただし、**営業提案用サンプル**であることが分かる表示を入れる。

### 正式商用

GitHub Pagesを標準本番ホストにしない。

正式版は顧客名義の商用利用可能環境へ移行する。

---

## 37. Sample SEO

サンプルURLは検索獲得を目的としない。

必須：

```html
<meta name="robots" content="noindex,nofollow">
```

または同等設定。

- sitemapへの追加なし
- Search Console登録なし
- サンプルURLを公式サイトと誤認させない
- 「営業提案用サンプル」表記

正式契約後に削除する。

---

## 38. Production SEO

正式版のみ、以下を実施する。

- title
- description
- canonical
- OGP
- favicon
- robots
- sitemap
- semantic HTML
- NAP確認
- LocalBusiness / HealthClub等の構造化データ検討
- BLOG / 下層ページへのクロール可能な内部リンク
- 実ユーザーの疑問に答えるpeople-first content

構造化データには必ず店舗確認済み情報のみ使用する。

### 既存サイトを置き換える場合

中野独自公式サイトには既存BLOG・個別URLが存在するため、正式サイト置換では以下を必須とする。

1. 既存URL一覧を取得
2. 新URLとの1対1マッピングを作成
3. URL変更時は原則301/308の恒久リダイレクト
4. 旧記事を大量にトップページへ一括リダイレクトしない
5. 内部リンク / sitemap / canonicalを更新
6. Search Consoleで移行後を監視

BLOGを新サイトに残さない場合も、検索流入・被リンク・コンテンツ価値を確認したうえで移行方針を決める。

## 39. Animation

許可：

- Hero Fade
- Reveal
- Hover
- Smooth scroll
- 軽いImage scale
- Accordion

禁止：

- 過剰Parallax
- 常時大きく動く要素
- 読了を待たせるAnimation
- Scroll hijacking
- Cursor強制変更

Animationは**情報理解を補助する場合のみ**使用する。

---

## 40. デザイン要求

次工程で詳細確定するが、要件として以下を固定する。

### Brand Character

**Premium / Clean / Human / Strong / Approachable**

### 写真

実店舗・実トレーナーを主役とする。

### AI画像

今回の主要コンテンツには原則不要。

### カラー

Black / Whiteを基礎。

Gold / Cyan / Turquoise等のアクセントは、既存ブランド資産と整合を確認したうえでデザイン定義書で確定する。

**生成した参考LPのGoldを、そのままブランドカラーとは扱わない。**

---

## 41. Mobileページ長対策

MobileではDesktopと同じ情報を単純に縦長化しない。ただし、**契約判断に必要なProofを削って短く見せることもしない。**

圧縮方法：

- Price詳細：Accordion / Show More
- FAQ：Accordion
- Trainers：Compact Profile Row
- Customer Voice：3件のEditorial Cardを1 columnで縦配置
- Trust / Awards：2025 Main Recognition + compact Recognition History
- Facility：Main + 2列Gallery
- Stores：中野店 → ANNEXの優先順

Accessの道順はHorizontal scrollにせず、Mobileでは縦積みを基本とする。

長文は1段落を短くし、見出し・数字・引用・Dividerで走査性を作る。重要情報を`display:none`で安易に隠さない。

## 42. External Links

外部リンクは用途を明確にする。

新規タブを使う場合、`rel="noopener noreferrer"` 等を適切に設定。

予約中に誤ってページ遷移することを防ぐUXも考慮する。

---

## 43. Error Handling

サンプル版は外部リンク中心のため、以下を必須とする。

- 404リンクなし
- 空URLなし
- `href="#"` のダミーCTAなし

未確定リンクは無理に有効化せず、**「サンプル表示のみ / 正式制作時設定」**と分かる状態にする。

---

## 44. Console品質

Production buildで以下を必須とする。

- Console Error 0件
- 明確なWarningも原則解消
- Broken image 0件
- Hydration error 0件

---

## 45. QAマトリクス

最低限以下を実施。

| QA | PC | Mobile |
|---|---:|---:|
| Layout | ✓ | ✓ |
| Header | ✓ | ✓ |
| Hero | ✓ | ✓ |
| Slider | ✓ | ✓ |
| CTA | ✓ | ✓ |
| Images | ✓ | ✓ |
| FAQ | ✓ | ✓ |
| Access | ✓ | ✓ |
| External links | ✓ | ✓ |
| Keyboard | ✓ | ✓ |
| Reduced Motion | ✓ | ✓ |
| Lighthouse | ✓ | ✓ |
| Console | ✓ | ✓ |

---

## 46. Definition of Done

本案件は以下を**すべて**満たして完成とする。

1. 要件定義書v1.2と実装が一致
2. Desktop / Mobile崩れなし
3. 320px以上で意図しない横スクロールなし
4. Heroが4秒で動作
5. Pause可能
6. reduced-motion対応
7. Keyboard操作可能
8. CTAリンク正常
9. 根拠不明な情報なし
10. 中野 / ANNEX混同なし
11. Results / Voice / Trustの出典管理済み
12. Priceのコース差が明確
13. Price詳細がLP内で理解可能
14. 営業時間・料金の差異が解消済み、またはサンプル注記済み
15. Access Mobileで画像・文章の重なりなし
16. Google Mapが通常カラーで表示
17. FAQ accordionがKeyboard / aria対応
18. Final CTA Mobile下部に不自然な大余白なし
19. FooterはDark基調で情報階層が明確
20. HeaderのDesktop Price anchor / Mobile Full Width Menuが正常
21. Customer Voice 3件と共通出典注記が表示される
22. Trustはoptimized WebPのみを参照する
23. Blog最新3件と一覧の外部リンクが正常
24. Footerに営業提案用サンプル表記がある
25. Console Error 0
26. Broken Image 0
27. 404 Link 0
28. Sampleは個人情報収集なし
29. Sampleはnoindex
30. Source管理済み
31. Asset権利管理済み
32. Lighthouse目標を確認
33. 実機Mobile確認済み
34. GitHub stable commit / tagあり
35. README更新済み
36. **そのまま店舗担当者へ提示しても「無料サンプルだから粗い」と感じさせない品質**

最後の項目のみ主観評価のため、他35項目を客観条件として品質を担保する。

## 47. リスク管理

| Risk | 対処 |
|---|---|
| 公式間で営業時間不一致 | 店舗確認まで正本値を決めない |
| 現行料金と旧料金資産が不一致 | 料金UIとデータを分離し、店舗確認後に差替え |
| Heroが重い | 初期画像のみ優先 |
| LPが長すぎる | 説明文・重複を圧縮し、Proofは維持 |
| Proofが少なく判断材料不足 | Results / Voice / Trustを役割分担して掲載 |
| Award誤表記 | 年・主催・条件・ロゴ利用条件を確認 |
| Customer Voice改変 | 公式掲載内容または許諾素材のみ |
| 既存BLOG検索資産の消失 | 正式移行時にURL inventory + 301 mapping |
| 写真が多すぎる | 使用目的を明確化、WebP/AVIF最適化 |
| 既存サイトとの差が弱い | UX・情報階層・CV導線で差別化 |
| Brandから外れる | 既存ブランド資産優先 |
| 個人情報事故 | Sampleでは収集しない |
| ANNEX混同 | 店舗名常時明示 |

## 48. 正式制作前の確認事項

| 確認事項 | 2026-09-27時点 |
|---|---|
| 2店舗統合LPでよいか | 未確認 |
| 中野店営業時間 | **公式内差異あり：10:00〜22:30 / 10:00〜22:00。店舗確認必須** |
| ANNEX営業時間 | 公式店舗ページでは10:00〜22:30、正式時再確認 |
| 最新料金 | **公式内・旧資産で差異あり。店舗確認必須** |
| 分割払い最大回数・月額例 | 要確認 |
| 各プランのプロテイン / 食事管理対象 | 最新条件を要確認 |
| 最新所属トレーナー | 要確認 |
| Award正式表記 / ロゴ利用 | 要確認 |
| Customer Voice利用範囲 | 要確認 |
| Before / After再利用 | 要確認 |
| 予約URL | 実装前確認 |
| LINE URL | 実装前確認 |
| Instagram URL | 正式制作時設定 |
| ANNEXとの予約関係 | 要確認 |
| BLOGを新サイトへ移管するか | 契約後決定 |
| 既存URL / 301移行方針 | 正式サイト置換時に必須 |
| 本番フォーム | 契約後決定 |

## 49. 変更管理

v1.2確定後、**要件変更 → 要件定義書更新 → デザイン更新 → 実装** の順番を守る。

実装だけを先に変更しない。

軽微なコピー・余白変更はデザイン定義側で処理可能だが、以下は要件変更として扱う。

- セクション追加・削除
- CTA変更
- フォーム追加
- Customer Voice / Award等の新しい証拠情報追加
- BLOG/CMS追加
- 新しい動的機能
- 店舗追加
- 料金体系の変更
- 正式サイトへの移行方式変更

## 50. v1.2確定方針

今回の制作で最も重要なのは、**既存サイトより情報量を減らすことでも、派手にすることでもない。意思決定に必要な情報を短く読みやすくしつつ、既存サイトが持つ「信頼の根拠」を失わないこと。**

制作原則：

- Hero = 実写 × 4秒スライダー
- Proof = 事実のみ
- People = 実トレーナー
- Space = 実店舗
- Results = 個別実績
- Voice = 実利用者の体験
- Trust = 確認済みAward / Mediaのみ
- Price = LP内で理解できる
- Price UI = Summary / DetailともDark
- Access = 写真道順 + Color Map
- Blog = FAQとFinal CTAの間に最新3件
- CTA = 無料体験 / LINE / 電話
- Sample = 個人情報を取らない
- Footer = Dark基調
- Production = 既存BLOG・URL資産を移行設計する
- Performance / Accessibility / QAまで本番品質

**文章量そのものをKPIにしない。説明より、実写・数字・事例・声・第三者評価を優先する。**

## 参考一次ソース

- BEYOND中野店 公式：https://beyond-gym.com/gym/gym-nakano/
- BEYOND中野ANNEX店 公式：https://beyond-gym.com/gym/gym-nakano-annex/
- BEYONDについて 公式：https://beyond-gym.com/about/
- BEYOND中野 独自公式：https://beyond-nakano.jp/
- Google Search Central サイト移転：https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=ja
- Google Search Central リダイレクト：https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Google Search Central Helpful Content：https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- GitHub Pages limits：https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Next.js Static Exports：https://nextjs.org/docs/app/guides/static-exports
- W3C Carousels Tutorial：https://www.w3.org/WAI/tutorials/carousels/
- WCAG 2.2 Target Size：https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Web Vitals：https://web.dev/articles/vitals
- 個人情報保護委員会：https://www.ppc.go.jp/personalinfo/faq/APPI_QA/
