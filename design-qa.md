# Design QA — Header / Hero

## Evidence

- Source visual truth:
  - `docs/references/01_hero_desktop.png`
  - `docs/references/01_hero_mobile.png`
  - `docs/design/BEYOND中野_サンプルLP_デザイン定義書_v1.0_20260921.md`
- Implementation screenshots:
  - `.qa/implementation-desktop-final2.png`
  - `.qa/implementation-mobile-cdp.png`
  - `.qa/implementation-mobile-menu.png`
- Combined comparison: `.qa/comparison-final.png`
- Desktop viewport: 1586 × 992 CSS px, device scale factor 1. Source and implementation are both 1586 × 992 px.
- Mobile viewport: 390 × 844 CSS px, device scale factor 1. Implementation is 390 × 844 px. The 724 × 2172 mobile source is a full-page design sheet rather than a viewport capture, so it was used for composition and hierarchy rather than literal pixel scaling.
- State: first Hero slide, top-state Header, menu closed. The open mobile menu was checked separately.

## Full-view comparison

The combined image verifies the Desktop and Mobile references beside the implementation. The implementation preserves the reference hierarchy: transparent Header, large real photography, left-aligned Hero copy, limited Gold CTA/accent, fixed copy with image-only carousel changes, and bottom carousel controls. Differences caused by higher-priority requirements are intentional: five confirmed Hero assets replace the reference's three-slide count; unverified metrics and claims are omitted; Mobile uses the design definition's transparent top state and dedicated vertical crop.

## Focused comparison

The original-resolution Desktop and Mobile implementation captures were inspected separately because Header text, CTA labels, image crop, carousel dots, and 44px controls are too small to judge reliably in the combined sheet. Fonts render as Noto Sans JP and Manrope; spacing follows the 1360px wide container on Desktop and 20px side padding on Mobile; imagery remains sharp at both viewports; all app-specific copy is factual and does not reproduce the reference's unverified `継続率90%以上` claim.

## Required fidelity surfaces

- Fonts and typography: Noto Sans JP for Japanese UI/copy and Manrope for English/numeric labels. Weight, line height, tracking, and responsive H1 wrapping match the design definition.
- Spacing and layout rhythm: Desktop uses the wide container and left copy/right subject composition. Mobile changes crop, line breaks, CTA stacking, and control density rather than scaling the Desktop layout.
- Colors and visual tokens: Ink, Off-white, Nakano Cyan, limited Heritage Gold, inverse text, borders, and focus color map to the design tokens. Gold is limited to the primary action and active carousel state.
- Image quality and asset fidelity: only the five confirmed files in `public/images/hero/` are used. The first slide is the required trainer-and-user image; no AI or placeholder imagery is present.
- Copy and content: no invented trainer details, metrics, prices, or store facts. Unconfirmed reservation and LINE destinations show an explicit sample notice instead of a fake URL.

## Interaction and accessibility checks

- Next control advanced `01 / 05` to `02 / 05`.
- Pause changed to a pressed state and did not auto-resume.
- `prefers-reduced-motion: reduce` held the carousel at `01 / 05` for more than 4 seconds.
- Mobile menu opened, set `aria-expanded="true"`, locked body scroll, and retained a 390px document width.
- Sample CTA displayed the formal-production URL notice.
- Keyboard-labelled controls, semantic buttons/links, alt text, focus-visible, touch swipe handling, and 44px targets are present.
- Browser page console errors/warnings: 0.
- Broken image / horizontal overflow / hydration error: none observed.

## Comparison history

1. Initial pass: P1 Mobile container overflow. The shared container width expression was invalid CSS, allowing content to exceed the intended padded width. Fixed with a valid `calc(100% - padding - padding)` expression. Post-fix CDP evidence reports `innerWidth: 390` and `scrollWidth: 390`.
2. Second pass: P2 Desktop content inset. The wide container inherited the 1200px main-container width. Fixed by applying the 1360px wide token directly to `.container-wide`. The final 1586px capture aligns Header and Hero content with the wide reference composition.
3. Final pass: no actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: The current page ends after Hero because Proof Strip and later sections are outside this implementation scope. Once Proof Strip is added, its Dark continuation should replace the temporary blank area below the 820px Desktop Hero.

final result: passed

---

# Design QA — Access

## Evidence

- Source visual truth: `/Users/shiinakento/.codex/generated_images/01a0c4ce-a171-7742-bb61-7b7b1b5ea4da/exec-0ada6db5-779a-4507-ae0e-3d3712ed0662.png`
- Implementation screenshots: `/private/tmp/access-desktop.png`, `/private/tmp/access-mobile.png`
- Focused rendered-map screenshots: `/private/tmp/access-desktop-viewport.png`, `/private/tmp/access-mobile-viewport.png`
- Combined comparison: `/private/tmp/access-design-comparison.png`
- Source pixels: 1448 × 1086 responsive design board containing Desktop and Mobile references.
- Desktop implementation: 1440 × 1344 section capture at a 1440 × 1100 CSS viewport, device scale factor 1.
- Mobile implementation: 390 × 1750 section capture at a 390 × 844 CSS viewport, device scale factor 1.
- State: all five lazy-loaded route images present; map scrolled into view and rendered; Maps CTA idle.

## Full-view comparison

The implementation preserves the reference hierarchy and visual language: Off-white base, Gold ACCESS label and route numbering, five real photographs in chronological order, thin route lines, and a Near Black shop-information area. Desktop uses the user-requested five-column route and Map / shop-information two-column lower area. Mobile changes to a compact left-side timeline with photo and copy sharing the right content area, then follows Map → shop information → CTA.

## Focused comparison

The full-section captures were checked together with viewport screenshots because a cross-origin Google Maps iframe is not rasterized when it is outside the active viewport in a beyond-viewport capture. The focused screenshots confirm the official map embed renders with the BEYOND中野店 marker. Text wrapping was inspected at Mobile width; the earlier orphaned `す。` was removed by widening the copy column and adjusting only the Access Mobile body scale.

## Required fidelity surfaces

- Fonts and typography: existing Noto Sans JP / Manrope tokens are reused. Heading weight, Gold numeric hierarchy, small English label tracking, body line height, and Japanese wrapping match the established LP direction.
- Spacing and layout rhythm: Desktop uses the existing wide container, five equal route tracks, restrained line rhythm, and a 2-column location area. Mobile uses a single vertical timeline without horizontal scrolling.
- Colors and visual tokens: existing Off-white, Ink, Heritage Gold, inverse text, and border colors are reused; no gradients, shadows, or repeated cards were introduced.
- Image quality and asset fidelity: all five approved WebP route photographs are rendered via `next/image` with quality 90, lazy loading, proportional crops, Japanese alt text, and fixed chronological order.
- Copy and content: heading, lead, all five route instructions, address, rail access, hours, closure note, and CTA match the supplied content. No store facts were inferred.

## Interaction, responsive, and accessibility checks

- Checked widths: 360, 390, 430, 768, 1024, and 1440px.
- ACCESS has no overflowing descendants at any checked width.
- Five route images load successfully at Desktop and Mobile.
- The map iframe uses the same embeddable Google Maps URL as the official BEYOND中野 page and retains `loading="lazy"`.
- CTA retains the user-supplied Google Maps destination, `target="_blank"`, and `rel="noreferrer"`.
- MapPin, Train, Clock, and CalendarDays use Lucide with hidden semantic labels.
- No app runtime exception, hydration error, or missing Access image was observed. The isolated development capture reported only its existing HMR WebSocket transport failure; production build verification is clean.

## Comparison history

1. Initial pass: P1 Google Maps URL was not iframe-compatible, leaving the map area blank. Replaced only the iframe source with the official BEYOND中野 embed URL while preserving the supplied CTA destination. Focused viewport evidence confirms the map renders.
2. Initial Mobile pass: P2 step 01 left `す。` alone on a second line. Reduced the photo track from 44% to 39% and adjusted the Access-only body scale. The final capture keeps the sentence intact.
3. Final pass: no actionable P0, P1, or P2 findings remain.

## Follow-up polish

- None required for the requested Access scope.

final result: passed

---

# Design QA — Price

## Evidence

- Source visual truth: `docs/references/07_price_desktop.png`, `docs/references/07_price_mobile.png`
- Implementation captures: `.qa/price-desktop-closed.png`, `.qa/price-mobile-closed.png`, `.qa/price-mobile-open.png`
- Checked widths: 390px, 430px, 768px, 1024px, 1440px
- States: summary closed, details open, details closed again

## Comparison and interaction findings

- The centered editorial header, two-course summary, restrained Gold hierarchy, fine dividers, compact detail rows, and absence of card/shadow/gradient treatments follow the supplied Price references.
- Mobile uses stacked summary courses and stacked detail-course groups; the H2 remains the intended two lines at 390px and 430px, and prices and long course names do not split awkwardly.
- The accordion opens to all six plans and closes again. Its measured open height at 390px is 1175px, with `aria-expanded` and `aria-hidden` updating in both directions.
- The Price section has no overflowing descendants at any checked width. At 390px, `innerWidth` and document `scrollWidth` are both 390px.
- The existing page has an out-of-scope document-width overflow at 768px (`823px`) originating outside the Price section; the Price section itself reports no overflowing element at that width.
- Reduced-motion removes the accordion transition; focus-visible behavior is inherited from the shared design foundation.
- No new imagery, external pricing link, unconfirmed benefit, installment amount, discount, or campaign copy was added.

## Comparison history

1. Initial Mobile pass: the first H2 line exceeded the 390px content width and was clipped. Reduced only the Price Mobile H2 scale to 34–36px while retaining the fixed two-line composition.
2. Interaction pass: verified opening, all six plan rows, closing, state attributes, and 390px horizontal-fit through an isolated Chrome session.
3. Final pass: no actionable P0, P1, or P2 findings remain within the Price section.

final result: passed
