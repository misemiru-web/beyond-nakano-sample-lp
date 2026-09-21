# AGENTS.md

## Project
BEYOND 中野店 / 中野ANNEX店の営業提案用サンプルLP。

このリポジトリでは、提示済みの要件定義書・デザイン定義書・reference・承認済み写真素材を正として、Next.js / React / TypeScript / CSS で本番レベルのLPを実装する。

## Source of truth
実装判断の優先順位は以下。

1. `docs/requirements/` — 要件定義書
2. `docs/design/` — デザイン定義書
3. `docs/references/` — PC / Mobile reference
4. `ASSET_PLACEMENT.md` / `asset_manifest.csv` — 画像配置・採用判断
5. `public/images/` — 実装用の確定素材
6. 公開されているBEYOND公式情報

矛盾がある場合は、勝手に補完せず確認する。
店舗固有情報・料金・実績・受賞歴・トレーナー情報・数値は推測しない。

## Permission / content rules
- サンプルLP作成許可：取得済み
- 公式Instagram写真の使用許可：取得済み
- 提示・承認された写真素材を優先する
- 第三者媒体、雑誌表紙、他社ロゴ等は、権利確認が必要なため `docs/assets/review-required/` のまま扱う
- `docs/assets/excluded/` の素材は使用しない
- `docs/assets/candidates/` は店舗固有性・人物・権利等が確認できるまで本番UIに使用しない
- 実在人物の顔、実店舗、アクセス経路をAIで生成・改変しない
- アクセス写真の建物・看板・道路など事実情報を改変しない

## Tech stack
- Next.js
- React
- TypeScript
- App Router
- ESLint
- CSS（Tailwind CSSは使用しない）
- `src/` directory
- import alias: `@/*`

既存設定を尊重し、必要のないライブラリ追加を避ける。

## Design direction
必ず以下を維持する。

- Black / Off-white / Nakano Cyan / limited Gold
- Actual photography first
- Sharp, minimal geometry
- Border radius: 0–8px
- Large photography + deliberate whitespace
- Noto Sans JP × Manrope
- 写真・余白・サイズ・タイポグラフィで強弱を作る
- セクションごとの役割と構図を変える

禁止・抑制:
- generic SaaS cards
- glassmorphism
- emoji
- fake metrics
- invented trainer details
- 不要な角丸カードの反復
- 左ボーダー付きアクセントカードの多用
- 白背景＋中央揃えだけの単調な反復
- 意味のないグラデーション
- Material Design / Apple HIG / デジタル庁UIの外観コピー

UIアイコンが必要な場合は原則 `lucide-react` を使用する。

## Assets
本番UIで使う画像は原則 `public/images/` の確定素材から選ぶ。

主な分類:
- `public/images/brand/`
- `public/images/hero/`
- `public/images/reasons/`
- `public/images/trainers/`
- `public/images/training-food/`
- `public/images/facility/`
- `public/images/trust/`
- `public/images/results/`
- `public/images/trial/`
- `public/images/access/`
- `public/images/details/`

ルール:
- ロゴは透過PNGを使用する
- 写真は必要に応じて `next/image` を使用する
- Before / After のラベル、数値、矢印、説明は画像に焼き込まずReact/CSSで実装する
- LINE / 電話 / メール CTA は画像化せずReact/CSSで実装する
- Trial Flowの透過素材は全て並べず、デザイン定義書に従い1〜2点を主役として使う
- Accessは確定した5枚の原写真を使用し、`object-fit: cover` / `object-position` で調整する
- `public/images_old/` はローカル退避用。実装から参照しない

## Responsive
PC版を単純縮小しない。

- referenceのDesktop / Mobileをそれぞれ確認する
- 必要に応じて写真順、コピー改行、レイアウト、CTA位置、余白を変更する
- 横スクロールを発生させない
- Mobileでは情報密度を下げ、主要CTAを優先する

## Accessibility
- semantic HTMLを優先
- 見出し階層を正しく保つ
- `button` と `a` を用途で使い分ける
- キーボード操作を妨げない
- `:focus-visible` を用意する
- タップ領域は十分確保する
- 画像に適切な `alt` を付ける
- コントラストを確保する
- `prefers-reduced-motion` に対応する
- 装飾画像は必要に応じて空altを使用する

## Motion
派手な演出より品質・操作性を優先。

- Scroll Reveal: 控えめ
- Hover: 操作可能要素の意味が伝わる範囲
- Header / Menu: 短く自然
- Hero carousel: 要件定義・referenceに従う
- `prefers-reduced-motion` では自動・大きな動きを抑える

## Implementation rules
- まずreferenceとの再現性を優先し、その後レスポンシブを調整する
- 1つの巨大コンポーネントにせず、意味単位で分割する
- 重複するUIはコンポーネント化するが、見た目まで機械的に同一化しない
- 不要な抽象化はしない
- ハードコードされた仮情報を残さない
- コンソールエラー、hydration error、404画像を残さない
- 外部リンクは要件定義で確認されたURLだけ使用する
- フォームやバックエンド機能を要件外で勝手に追加しない

## Quality gate
変更後は最低限以下を確認する。

```bash
npm run lint
npm run build
```

加えてローカルで:

```bash
npm run dev
```

確認事項:
- Desktop / Mobile referenceとの方向性
- 主要画像の表示
- Hero切替
- CTA
- Navigation / Menu
- FAQ
- Access
- focus-visible
- reduced motion
- 画像404なし
- hydration errorなし
- 横スクロールなし

## Git
- `main` を基準ブランチとする
- 小さく意味のある単位でcommitする
- 大きな変更前はcommitを作る
- `node_modules/`, `.next/`, `public/images_old/` はcommitしない
- 実装に使用しない候補素材を `public/` に増やさない

## Working style
- 要件定義書との矛盾を勝手に解決しない
- 不明点を推測しない
- 既存デザインの完全コピーではなく、BEYOND中野の素材・ブランドを使って独自LPとして再構成する
- 「動く」だけでなく、営業提案として見せられる完成度まで仕上げる
