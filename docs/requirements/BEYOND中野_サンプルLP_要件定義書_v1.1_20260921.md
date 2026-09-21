# BEYOND中野 サンプルLP 要件定義書 v1.1

**作成日：2026年9月21日**  
**対象：BEYOND中野店 / BEYOND中野ANNEX店**  
**制作区分：営業提案用サンプルLP**  
**品質基準：本番公開候補レベル**  
**上位方針：ミセミルWeb 事業設計書 v1.4**  
**前版：要件定義書 v1.0**  
**本版：v1.1**

---

## 0. v1.1の位置づけ

本書を、以降の「デザイン定義 → 実装 → QA → サンプル公開」における要件の正本とする。

色、フォント、余白、具体的なレイアウトなどのビジュアル仕様は次工程のデザイン定義書で決定する。

ミセミルWebの上位方針である「見えている魅力を整理し、勝手に盛らない」「完成サイトに近い1ページLPを制作する」「Next.js / Reactを基本とする」という運用基準にも従う。

---

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
- 体験導線

したがってLPの役割は、既存情報の量を増やすことではなく、**BEYONDブランドの信頼 × 中野店固有の人・空間・実績・通いやすさを再編集し、無料体験への意思決定を容易にすること**とする。

---

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
| Proof | 安心材料 |
| Reasons | 選ばれる理由 |
| Trainers | 人への信頼 |
| Facility | 空間への信頼 |
| Trial Flow | 初回不安低減 |
| Access | 来店不安低減 |
| FAQ | 懸念解消 |
| Final CTA | CV |
| Footer | 店舗情報 |

### Should / 優先度高

- Food Support
- Plan概要
- ANNEX紹介
- Results / Case Study

### Could / 必要に応じ

- Award詳細
- Media掲載
- プロテイン紹介
- Instagram投稿紹介

ページが過度に長くなる場合はCouldから削減する。

---

## 11. Header要件

**REQ-FE-001**

PCでは固定または追従型Header。

表示候補：BEYOND NAKANOロゴ / Concept / Trainers / Facility / Access / FAQ / 無料体験CTA。

Mobileではロゴ＋Menu＋CTAを基本とする。

Headerによってアンカー遷移先のタイトルが隠れないよう `scroll-margin-top` 等で調整する。

---

## 12. Hero要件

**REQ-FE-010**

既存サイトで使われているHero写真を活用した、**実写カルーセルHero**とする。

### 表示仕様

- 最大6枚
- 標準切替間隔：4秒
- クロスフェードまたは穏やかなトランジション
- headline / subcopy / CTAは基本固定
- 写真のみ切り替える
- `01 / 06` またはDotsで現在位置表示
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

カード構成：**Photo → Name → Role / Qualification → Message**。

未確認の資格・実績・肩書は追加しない。

Mobileでは横3枚縮小ではなく、**1枚ずつ十分な大きさで表示**する。

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

**REQ-CONTENT-070 / Should**

使用する場合は、公式公開済み情報・写真利用許可範囲・数値・期間を一致させる。

結果を一般化する表現は禁止する。

---

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

**REQ-CONTENT-100 / Should**

価格は正式確認まで慎重に扱う。

公式情報内でも記載差があるため、サンプルでは詳細価格を大量に掲載せず、**「無料体験 / 詳しい料金を見る」**を中心とする。

正式版では店舗確認済み価格のみ使用。

---

## 23. Access

**REQ-CONTENT-110**

提供済み「中野駅から店舗までの5ステップ」を活用。

PC：**横5カード**。

Mobile：**縦ステップ**。

各ステップには番号 / 写真 / 1〜2行説明を表示する。

Google Maps CTAを設ける。

---

## 24. FAQ

**REQ-CONTENT-120**

5〜8項目を基本。

Accordion形式可。

FAQは検索エンジン向けに水増しせず、実際のユーザー不安解消を目的とする。

---

## 25. Reservation / Contact

### サンプル版

**REQ-BE-001**

**個人情報を収集しない。**

既存フォーム風UIをデザインとして見せる場合でも、実際の送信APIを接続しない。

推奨は、**「無料体験を予約する」→ 公式予約 / 「LINEで相談」→ LINE** への外部遷移。

---

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
Stores
TrialFlow
Plan
Access
FAQ
FinalCTA
Footer
```

コンテンツとUIロジックを可能な限り分離する。

---

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
- LocalBusiness / HealthClub schema検討
- NAP確認

構造化データには必ず店舗確認済み情報のみ使用する。

---

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

すべての情報をPCと同じ密度で縦並びにしない。

統合候補：

- Training + Food
- Facility + Amenities
- Stores + Access

MobileではAccordion / Horizontal Scroll / Tabs / Show Moreを適切に使用する。

ただし重要情報を隠しすぎない。

---

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

1. 要件定義書と実装が一致
2. Desktop / Mobile崩れなし
3. Heroが4秒で動作
4. Pause可能
5. reduced-motion対応
6. Keyboard操作可能
7. CTAリンク正常
8. 根拠不明な情報なし
9. 中野 / ANNEX混同なし
10. Console Error 0
11. Broken Image 0
12. 404 Link 0
13. Sampleは個人情報収集なし
14. Sampleはnoindex
15. Source管理済み
16. Asset権利管理済み
17. Lighthouse目標を確認
18. 実機Mobile確認済み
19. GitHub stable commit / tagあり
20. README更新済み
21. **そのまま店舗担当者へ提示しても「無料サンプルだから粗い」と感じさせない品質**

最後の項目のみ主観評価のため、他20項目を客観条件として品質を担保する。

---

## 47. リスク管理

| Risk | 対処 |
|---|---|
| 公式間で情報不一致 | 店舗確認まで断定しない |
| Heroが重い | 初期画像のみ優先 |
| LPが長すぎる | Should / Could削減 |
| 写真が多すぎる | 使用目的を明確化 |
| 既存サイトとの差が弱い | UX・情報階層で差別化 |
| Brandから外れる | 既存ブランド資産優先 |
| 個人情報事故 | Sampleでは収集しない |
| 料金更新 | 詳細価格は正式確認 |
| Award誤表記 | 正式名称確認 |
| ANNEX混同 | 店舗名常時明示 |

---

## 48. 正式制作前の確認事項

| 確認事項 | サンプル段階 |
|---|---|
| 2店舗統合LPでよいか | 未確認 |
| 最新営業時間 | 公式情報使用可・正式時確認 |
| 最新料金 | 要確認 |
| 最新所属トレーナー | 要確認 |
| Award正式表記 | 要確認 |
| Before / After再利用 | 要確認 |
| 予約URL | 実装前確認 |
| LINE URL | 実装前確認 |
| ANNEXとの予約関係 | 要確認 |
| 本番フォーム | 契約後決定 |

---

## 49. 変更管理

v1.1確定後、**要件変更 → 要件定義書更新 → デザイン更新 → 実装** の順番を守る。

実装だけを先に変更しない。

軽微なコピー・余白変更はデザイン定義側で処理可能だが、以下は要件変更として扱う。

- セクション追加
- CTA変更
- フォーム追加
- 新しい動的機能
- 店舗追加

---

## 50. v1.1確定方針

今回の制作で最も重要なのは、**既存サイトより派手なサイトを作ることではなく、既存資産を整理し直して「中野でBEYONDを選ぶ理由」がより早く、より分かりやすく、より信頼感を持って伝わる状態を作ること。**

制作原則：

- Hero = 実写 × 4秒スライダー
- Trust = 事実のみ
- People = 実トレーナー
- Space = 実店舗
- CTA = 無料体験 / LINE
- Sample = 個人情報を取らない
- Performance / Accessibility / QAまで本番品質

---

## 参考一次ソース

- BEYOND中野店 公式：https://beyond-gym.com/gym/gym-nakano/
- BEYOND中野ANNEX店 公式：https://beyond-gym.com/gym/gym-nakano-annex/
- BEYONDについて 公式：https://beyond-gym.com/about/
- BEYOND中野 独自公式：https://beyond-nakano.jp/
- GitHub Pages limits：https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Next.js Static Exports：https://nextjs.org/docs/app/guides/static-exports
- W3C Carousels Tutorial：https://www.w3.org/WAI/tutorials/carousels/
- WCAG 2.2 Target Size：https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- Web Vitals：https://web.dev/articles/vitals
- 個人情報保護委員会：https://www.ppc.go.jp/personalinfo/faq/APPI_QA/
