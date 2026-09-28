# BEYOND Nakano Sample LP

BEYOND 中野店 / 中野ANNEX店向けに制作する、ミセミルWebの営業提案用サンプルLPです。

既存の公式サイト・Instagram・提供素材をもとに、BEYOND中野のブランド性、施設、トレーナー、初回来店の安心感、アクセス情報を整理し、予約・問い合わせにつながる1ページLPとして再構成します。

> このリポジトリはサンプル提案用です。掲載内容は要件定義書・デザイン定義書・確認済み公開情報を正とし、不明な店舗固有情報は推測しません。

## Status

- Requirements: v1.2（2026-09-24）
- Design definition: v1.1（2026-09-24）
- Desktop / Mobile references: prepared
- Asset selection: prepared
- Next.js project: initialized
- Content source / asset inventory: maintained
- Implementation: current specification aligned（未確定情報を除く）

## Tech Stack

- Next.js
- React
- TypeScript
- App Router
- ESLint
- CSS
- `src/` directory
- import alias: `@/*`

Tailwind CSSは使用していません。

## Design Direction

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

デジタル庁デザインシステム、Material Design 3、Apple Human Interface Guidelinesは、外観の模倣ではなく、アクセシビリティ・可読性・状態設計・レスポンシブ等の品質基準のみ参考にします。

## Source of Truth

実装時は最新版の以下2ファイルを正とします。

```text
docs/requirements/BEYOND中野_サンプルLP_要件定義書_v1.2_20260924.md
docs/design/BEYOND中野_サンプルLP_デザイン定義書_v1.1_20260924.md
content-source.md
asset-inventory.md
public/images/
```

優先順位:

1. `docs/requirements/`
2. `docs/design/`
3. `content-source.md`
4. `asset-inventory.md`
5. `public/images/`
6. `docs/references/`（最新版定義書と矛盾しない場合のみ）

矛盾・不足がある場合は推測せず確認します。

## Assets

LPで使用する確定素材は `public/images/` に置きます。

```text
public/images/
├─ brand/
├─ hero/
├─ reasons/
├─ trainers/
├─ training-food/
├─ facility/
├─ trust/
├─ results/
├─ trial/
├─ access/
└─ details/
```

### Asset rules

- ロゴは透過PNG
- 実在人物・施設・アクセス写真はAIで作り直さない
- Accessは確定した原写真を使用
- Before / Afterの文字・数値・矢印はReact/CSSで構築
- LINE / 電話 / メールCTAはReact/CSSで構築
- `docs/assets/review-required/` は権利・事実確認前の素材
- `docs/assets/excluded/` は使用しない
- `public/images_old/` はローカルバックアップで、Git管理・実装対象外

## Development

依存関係をインストール:

```bash
npm install
```

開発サーバー:

```bash
npm run dev
```

ブラウザ:

```text
http://localhost:3000
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

## Implementation Policy

- Desktop / Mobile referenceを別々に確認する
- PC版の単純縮小でMobileを作らない
- セクションごとに構図・情報量・写真の役割を変える
- 画像にUIテキストを焼き込まない
- 店舗固有情報・トレーナー情報・実績・数値を作らない
- 外部リンクは確認済みURLのみ使用する
- 不要な依存関係を追加しない
- `prefers-reduced-motion` に対応する
- semantic HTML / focus-visible / alt / キーボード操作を考慮する

詳細なコーディングルールは [`AGENTS.md`](./AGENTS.md) を参照してください。

## Project Structure

```text
beyond-nakano-sample-lp/
├─ docs/
│  ├─ assets/
│  ├─ design/
│  ├─ references/
│  └─ requirements/
├─ public/
│  └─ images/
├─ src/
│  ├─ app/
│  └─ components/
├─ AGENTS.md
├─ CLAUDE.md
├─ README.md
├─ next.config.ts
├─ package.json
└─ tsconfig.json
```

## Permissions / Rights

本案件では、サンプルLP作成および公式Instagram写真の使用許可を取得済みです。

ただし、雑誌・メディア掲載物、第三者ロゴ等については別の権利が関係する可能性があるため、確認前の素材は `docs/assets/review-required/` に分離します。

## Before Commit

最低限以下を実行します。

```bash
npm run lint
npm run build
```

さらに目視で以下を確認します。

- Desktop / Mobile
- Hero
- 画像404
- Navigation / Menu
- CTA
- FAQ
- Access
- focus-visible
- reduced motion
- hydration error
- 横スクロール

## Repository

GitHub Organization: `misemiru-web`

Repository:

```text
beyond-nakano-sample-lp
```

Default branch:

```text
main
```
