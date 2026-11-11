# Handoff: The Busy Woman's Weight Loss System, Sales Page

## Overview
A single long-scroll sales/landing page for a digital product (ebook + companion workbook + bonuses + community) by **Delipher Ventino**. Audience: busy working women (primarily Nigerian; prices shown in ₦ and $). Goal: one conversion action, buying the package for **₦15,000 / $15** (reference price ₦30,000 / $30).

## About the design files
`reference/Busy Woman Weight Loss v6.dc.html` is a **design reference built in HTML**. It shows the intended look and behaviour; it is not production code to copy. Recreate it in the target codebase's stack (e.g. Next.js/React, Astro, plain HTML + Tailwind). If no codebase exists, a static site (Astro or plain HTML/CSS + a few lines of JS) is the right choice: there is no backend, and the only dynamic behaviour is a mobile menu, a scroll-triggered sticky bar and FAQ accordions.

To view the reference: open the .dc.html file in a browser with `support.js` next to it (both are in `reference/`). All styling is inline on each element, so you can inspect any element for exact values.

## Fidelity
**High-fidelity.** Colours, type, spacing, copy and interactions are final. Recreate it pixel-accurately. **Copy is final and approved word for word; do not rewrite, shorten or "improve" it.**

## ⚠️ No-drift rules (read first)
These decisions were made deliberately through many rounds of client feedback. Do not reverse them:
1. **No em dashes (—) anywhere** in copy. Use full stops, commas or "·".
2. **No blush/pink, plum, forest green or lime.** The palette is light blue + soft black + neutrals only (see tokens).
3. **Font is Nunito only** (Google Fonts, weights 300–800). No serif, no Inter, no second family.
4. **Corner radius stays modest:** 14px large panels, 12px cards, 10px buttons/tags/sticky bar, 8px number tiles. **No pill buttons.** Full circles only for the small check/bullet dots and the video play button.
5. **Headline style:** light (300) text with a **bold (700) key phrase**. In light sections the bold phrase is `#2f3136`; in dark panels it's light blue `#9cc4ec`. No italics.
6. **Hero "weight"** is extra-bold (800), 1.1em of the headline (1.15em under 600px), **same soft-black colour as the headline, not blue, no highlighter**.
7. **The treadmill under "gym."** is a custom 2.5D SVG illustration (in `assets/treadmill.svg`). Keep it, keep the moving belt, keep it flat (not tilted). Do not swap in an icon or emoji.
8. **Logo is the mark only** (three slanted bars). The "Busy Woman" wordmark text was removed from both the nav and footer on purpose.
9. **Header is solid** `#fafaf9` (no transparency/blur) with a 1px bottom border, and stays pinned at the top on scroll (`position: fixed`, with an 80px spacer before the content).
10. **Sections deliberately removed; do not add back:** "Everything you'll receive when you join" (guide/workbook/bonus cards) and the black closing "You don't need another Monday" price section. The hero "See what's inside" secondary link is also hidden (`display:none`). Leave it out.
11. Only two dark (`#23252a`) panels: the **"What if" statement** and the badge in the offer. Don't add more black blocks.
12. **Mobile (< 600px) renders at `zoom: .9`** on `body` (the client tested this on an iPhone 13 and approved it). Keep it, or reproduce the equivalent scale.

## Page structure (top to bottom)
Content max-widths: 1160px (wide), 1000px (standard), 900px (hero), 760px (FAQ, "not discipline"), 680px (note). Horizontal page padding: `clamp(20px,4vw,40px)`, or `clamp(16px,3vw,40px)` for panel sections. Vertical rhythm: section top padding `clamp(80px,12vw,140px)`, bottom `clamp(64px,10vw,110px)`.

### 1. Header (fixed)
- Full-width bar, bg `#fafaf9`, border-bottom `1px #e8eaec`, z-index 20. Inner: max-width 1160, padding 18px × `clamp(20px,4vw,40px)`, flex space-between.
- **Logo** (links to top, aria-label "The Busy Woman's Weight Loss System, home"): three bars, 11px wide, 6px radius, `skewX(-16deg)`, gap 5px, bottom-aligned: heights 18 / 30 / 30, colours `#cfe2f5` / `#4d7aa6` / `#2f3136`.
- **Desktop (≥ 900px):** links "Sound familiar?" (#week), "The system" (#system), "What's inside" (#buy), "FAQ" (#faq). 15px/500, `#5f6268`, hover `#23252a`, gap 34px. CTA "Get the system" → #buy: bg `#9cc4ec`, text `#1f2126`, 14px/600, padding 12×22, radius 10, hover `#87b5e3`.
- **Mobile (< 900px):** links and CTA hidden; show the menu button: height 44, padding 0 16 0 14, radius 10, bg `#23252a`, white 14px/600 label "Menu" (reads "Close" when open). The icon is three 2px bars, right-aligned, gap 4: widths 18 (`#9cc4ec`), 12, 15 (white).
- **Mobile menu panel** (below the bar, same bg): padding 0 20 20, stacked links at 18px, `#23252a`, padding 15×4, 1px `#ebedef` dividers; then a full-width CTA "Get the system · ₦15,000" (bg `#9cc4ec`, 16px/600, padding 16, radius 10). Tapping any link closes the menu.
- `html { scroll-padding-top: 90px; scroll-behavior: smooth }` so anchors land below the header.

### 2. Hero
Centred column, max-width 900, padding `clamp(56px,9vw,112px) 20px clamp(40px,6vw,64px)`, gap 26.
- Eyebrow: "The Busy Woman's Weight Loss System", 13px/600, letter-spacing .18em, uppercase, `#2c5680`.
- H1: "Lose **weight** without living in the gym." `clamp(42px,7vw,84px)`, weight 300, line-height 1.02, letter-spacing -0.035em, `text-wrap: balance`, colour `#23252a`.
  - "weight": 800, 1.1em, letter-spacing -0.045em.
  - "gym." is wrapped in an inline-block (`position:relative; isolation:isolate; white-space:nowrap; padding:0 .04em .3em; margin-right:.85em`) with the treadmill SVG absolutely positioned behind it: `left:-.12em; bottom:-.1em; width:2.9em; height:1.45em; z-index:-1; overflow:visible`. Sizing in em keeps it locked to the headline at every breakpoint.
  - Mobile < 600px: h1 40px, line-height 1.14, letter-spacing -0.015em; "weight" 1.15em, letter-spacing -0.02em.
- Sub: "A practical guide for women balancing work, family, long commutes and deadlines." `clamp(17px,2vw,19px)`, line-height 1.6, `#5f6268`, max-width 480.
- CTA: "Get it for ₦15,000" → #buy. Padding 17×32, radius 10, bg `#9cc4ec`, `#1f2126` 16px/600, shadow `0 14px 30px -14px rgba(60,100,150,.35)`, hover `#87b5e3`.
- Price line: "~~₦30,000 / $30~~ · ₦15,000 / $15 · One-time payment", 14px, `#8a8d93`.

### 3. Video
Max-width 1160. A 16:8 frame (min-height 220, width 100%, box-sizing border-box), radius 14, bg `#e9f0f8`, shadow `0 40px 80px -50px rgba(40,70,110,.3)`. Centred play button: 76px white circle, shadow `0 10px 30px -10px rgba(40,70,110,.3)`, `#2f3136` triangle. **Replace the placeholder with the client's video** (embed or `<video>` with a poster; keep the same frame, radius and shadow).

### 4. "Have you been here before?" (#week)
Max-width 1000, two flex columns that wrap (left `1 1 280px`, right `1.4 1 340px`), gap `clamp(28px,6vw,80px)`.
- Left: eyebrow "Be honest with yourself" (`#4d7aa6`); H2 "Have you been **here before?**"; body (17px, `#5f6268`, max-width 340): "Monday, you're determined. You promise to eat better, drink more water, stop snacking and start exercising. You even buy the groceries. Then real life happens."
- Right: a timeline of 5 rows (padding 20px 0, 1px `#e8eaec` dividers, label column 84px, 13px/600 `#4d7aa6`; text 19px, line-height 1.4):
  - Morning: You wake up late and rush to work without breakfast.
  - Lunch: Whatever you can quickly buy around the office.
  - 3pm: Someone brings cake. "I'll only have a little."
  - Evening: Traffic. Exhausted. You order food and promise to start again tomorrow.
  - Then (`#2f3136`, text bold): And somehow, tomorrow becomes next Monday.

### 5. "Not discipline" statement
Centred, max-width 760. Line 1: `clamp(22px,2.8vw,28px)`, weight 300, line-height 1.35: "It's not always that you lack discipline. **The advice you've been following was never designed for your lifestyle.**" Line 2 (17px, `#5f6268`, max-width 560): "Most plans expect hours to cook, daily gym time and energy for complicated meals. You're a working woman with responsibilities. You need something that works even when your schedule doesn't."

### 6. "Why the usual approach keeps becoming difficult"
Max-width 1160; 1px `#e8eaec` top rule, then H2 "Why the usual approach **keeps becoming difficult**". Grid `repeat(auto-fit,minmax(min(100%,340px),1fr))` (2×2 on desktop, 1 column on mobile), gap 36×56. Each item: number (14px/700 `#4d7aa6`), H3 19px/700, body 15px/1.65 `#5f6268`:
1. Routines that don't fit your schedule: A two-hour gym routine sounds good until meetings run late, the children need attention or you get home exhausted.
2. Treating your favourite foods like the enemy: Rice, yam, plantain, potatoes, pasta, swallow. Healthier eating doesn't mean abandoning your culture or the meals you grew up on.
3. Relying on motivation, not a routine: Motivation won't always be there after a stressful day. You need small habits you can return to when life gets busy.
4. One difficult day feels like failure: One meal doesn't erase your progress. The goal is to keep going instead of constantly starting over.

### 7. "What if" statement (dark panel)
Max-width 1160, panel radius 14, bg `#23252a`, white text, padding `clamp(40px,7vw,80px) clamp(24px,5vw,64px)`. Grid `repeat(auto-fit,minmax(min(100%,320px),1fr))`, gap `clamp(32px,5vw,64px)`.
- Left: eyebrow "Imagine this" (`#9cc4ec`); H2 `clamp(32px,4.6vw,52px)` "What if weight loss could fit **the life you already have?**" (bold part `#9cc4ec`); body 17px `#b9bcc2`: "No new diet every Monday. Just better choices with the foods already around you."
- Right: numbered list (01–04 in 13px/700 `#9cc4ec`, text 18px white, rows padding 18px 0, dividers `#3a3d44`): Knowing what to eat · Knowing how to move · Handling office temptations · A plan for when your schedule gets overwhelming.
- Full-width bottom strip (top border `#3a3d44`): "That's why Delipher created **The Busy Woman's Weight Loss System**. It isn't about perfection. It's about a routine you can actually maintain." (18px `#d7d9dd`), plus the CTA "Get instant access for ₦15,000" → #buy (light-blue button, 15px/600, padding 16×30).

### 8. The system (#system)
Max-width 1000. Centred header: eyebrow "The system", H2 "Make weight-loss habits **work around your life**", sub (17px `#5f6268`) "Inside the guide, you'll work through nine practical areas." Grid `minmax(min(100%,270px),1fr)`, gap 36×44. Each item: 38px number tile (radius 8, bg `#e3eefa`, 14px/700 `#2f3136`), title 17px/700, description 15px/1.6 `#5f6268`:
1. Understand what's in the way: Office snacks, sugary drinks, skipped meals, stress eating and weekend routines.
2. Change your approach: Stop treating every meal as a test of discipline. Focus on consistency, not perfection.
3. Build a routine that fits: Simple morning, afternoon and evening habits that work around your responsibilities.
4. Eat smarter, keep your favourites: Portions and balanced meals using familiar foods you already enjoy.
5. Handle office temptations: Birthday cakes, meeting snacks, takeaways and days lunch is bought outside.
6. Make movement routine: Walking, home workouts, stairs, dancing and strength exercises. No hours at the gym.
7. Understand stress eating: Notice when you're reaching for food because you're overwhelmed, not hungry.
8. Track progress calmly: Look beyond the scale at habits, energy, sleep and other changes.
9. Stay consistent when life gets busy: Return to your routine after travel, celebrations, deadlines and surprises.

### 9. Who it's for
Max-width 1000; two columns (`minmax(min(100%,340px),1fr)`).
- "This is for you if…" (30px/700 `#2f3136`), with 8px filled `#4d7aa6` dots, 16px text: You're a working woman with a busy schedule · You've tried different diets but struggled to maintain them · You want healthier habits without giving up familiar meals · Long work hours make meal planning hard · You want simple movement that fits into your day · You keep starting over every Monday · You want a guide and workbook to stay organised.
- "This may not be for you if…" (30px/700 `#8a8d93`), with 8px ring dots (`#c3c6cb`), text `#6c6f75`: You're looking for an overnight transformation · You expect a guaranteed number of kilograms to disappear · You're unwilling to practise or build new habits · You want an extreme diet or quick fix.
- Footer line (centred, 17px/600, top border): "Realistic habits and sustainable progress, not promises of instant results."

### 10. Testimonials
H2 "What women **are saying**". Three cards (`minmax(min(100%,260px),1fr)`, gap 16): white, 1px `#ebedef`, radius 12, padding 28, min-height 200, with a large "“" in `#a9c9ea`. **Placeholders. Only fill these with real testimonials used with the person's permission.** Suggested content: customer feedback screenshots, reader messages, genuine progress stories, workbook feedback. If none exist yet, show real product previews or sample workbook pages.

### 11. Offer (#buy)
Max-width 1160. A white card (1px `#e8eaec`, radius 14, shadow `0 40px 80px -60px rgba(40,70,110,.35)`, overflow hidden), with a two-column grid (`minmax(min(100%,380px),1fr)`).
- Left (padding `clamp(32px,6vw,64px)`): eyebrow "The complete system"; H2 `clamp(30px,4vw,44px)` "Everything, **in one package.**"; body "Not just a few pages of advice. Instead of buying each resource separately, get the complete package together."; a check list (22px circle `#e3eefa` with ✓, 15px, grid `minmax(190px,1fr)`): Main ebook · Companion workbook · 7-day meal planner · Grocery checklist · Weekly habit tracker · 30-day challenge · Restaurant cheat sheet · 90-day action plan · Community access.
- Right (bg `#f4f8fc`, left border `#e8eaec`): badge "Today's offer · Save 50%" (bg `#23252a`, white 13px/700, radius 10); price "₦15,000" `clamp(52px,7vw,72px)`/700 plus "/ $15" (20px `#5f6268`); "Reference price ~~₦30,000 / $30~~" (15px `#8a8d93`); full-width CTA **"Get the complete system now"** (bg `#9cc4ec`, 16px/700, padding 18×32, radius 10), **href currently `#`, so wire it to the real checkout/payment link**; note "One payment · Digital product · No monthly subscription" (13px `#8a8d93`).
- Compliance: only show the promotional price (and any limited-quantity claim) while the offer is genuinely available.

### 12. FAQ (#faq)
Max-width 760. H2 "Frequently asked **questions**" (centred). A native `<details>` accordion: rows separated by 1px `#e8eaec`, summary 18px/600 with padding 22px 0 and a "+" (24px/300 `#4d7aa6`) that rotates 45° when open (0.2s); answer 16px/1.65 `#5f6268`. Nine Q&As, verbatim from the reference file:
1. Do I have to stop eating the foods I love?
2. Do I need to go to the gym?
3. Will this work with a busy work schedule?
4. What exactly am I buying?
5. Is this a physical book?
6. How quickly will I lose weight?
7. Do I get access to a community?
8. Do I have to pay every month?
9. What if I have a medical condition or special dietary needs?
(Copy the answers exactly from the reference. #6 and #9 are health/legal disclaimers and must not be edited.)

### 13. A note from Delipher Ventino
Max-width 680. Eyebrow "A note from Delipher Ventino"; two 19px/1.7 paragraphs (the second in `#5f6268`); bold 21px line "Start where you are. Build a routine that works for you. Keep going."; signature "Delipher Ventino" (16px/700) / "The Busy Woman's Weight Loss System" (14px `#8a8d93`).

### 14. Footer
Max-width 1160, padding `clamp(56px,8vw,96px)` × page padding, 120px bottom (room for the sticky bar).
- Left: logo mark only + "Realistic weight-loss habits for women with full lives." (15px `#5f6268`, max-width 320).
- Right: columns with 12px/700 uppercase `#2c5680` headings. **Explore:** The system (#system), What's inside (#buy), Pricing (#buy). **Help:** FAQ (#faq), Contact (**href `#`: needs the client's email or WhatsApp link**). Links are 15px `#5f6268`, hover `#23252a`.
- Bottom bar (top border `#e8eaec`, 13px `#8a8d93`): "© 2026 The Busy Woman's Weight Loss System · Delipher Ventino" / "General education, not medical advice."

### 15. Sticky price bar
Fixed, bottom 20px, centred, z-index 30, max-width `calc(100% - 32px)`. bg `#2a2c31`, radius 10, padding 6 6 6 22, shadow `0 14px 34px -12px rgba(20,24,32,.45)`. "₦15,000" (15px/600 white) + "~~₦30,000~~" (`#a3a6ab`), and a white "Get access" button (`#2f3136`, 14px/700, padding 11×20, radius 10) → #buy. **Only visible once `scrollY > 600`**, so it never covers the hero CTA.

## Interactions & behaviour
- Mobile menu: toggle open/closed; label switches Menu ↔ Close; closes on any link tap; hidden at ≥ 900px.
- Sticky bar: a scroll listener (passive) shows it when `window.scrollY > 600`.
- FAQ: native `<details>`, "+" rotates 45° (0.2s).
- Treadmill belt: SVG dashed line (`stroke-dasharray: 14 22`, width 6, `rgba(255,255,255,.75)`) animated with `@keyframes bwtread { to { stroke-dashoffset: 36 } }` over 0.45s, linear, infinite. Add a `prefers-reduced-motion` override that pauses it.
- Button hovers: light-blue `#9cc4ec` → `#87b5e3`. Nav and footer links hover to `#23252a`.
- Smooth anchor scrolling with a 90px scroll-padding.
- Breakpoints: 900px (nav switches to the mobile menu); 600px (body zoom .9 and the hero type tweaks). Everything else is fluid: `clamp()` sizes, plus `auto-fit/minmax` grids and wrapping flex.

## State
- `menuOpen: boolean`
- `scrolledPastHero: boolean` (scrollY > 600)
- `stickyBarEnabled`, a config flag (default true)
No data fetching.

## Design tokens
**Colours**
- Page bg `#fafaf9`; white surfaces `#fff`
- Ink `#23252a` (body text); headline bold `#2f3136`; darkest `#1f2126` (text on light blue)
- Muted text `#5f6268`; faint `#8a8d93`; list-muted `#6c6f75`
- Borders `#e8eaec`, `#ebedef`; ring dots `#c3c6cb`
- Light blue (primary button) `#9cc4ec`, hover `#87b5e3`
- Mid blue (eyebrows/numbers) `#4d7aa6`; deep blue (hero eyebrow, footer headings) `#2c5680`
- Pale blue tints: `#cfe2f5` (logo bar), `#e3eefa` (tiles/checks), `#e9f0f8` (video), `#f4f8fc` (offer right), `#a9c9ea` (quote mark)
- Dark panel `#23252a`, sticky bar `#2a2c31`, dark dividers `#3a3d44`, on-dark text `#b9bcc2` / `#d7d9dd` / `#a3a6ab`
- Treadmill greys: `#4a4d55`, `#3a3d44`, `#2f3136`, `#1f2126`, highlight `#6a6e77`

**Typography:** Nunito 300/400/500/600/700/800. H1 `clamp(42px,7vw,84px)`/300. Section H2 `clamp(32px,4.4vw,48px)`/300, line-height 1.08, letter-spacing -0.03em, bold span 700. Eyebrows 13px/600, uppercase, letter-spacing .18em. Body 15–19px, line-height 1.6–1.7.

**Radius:** 14 (panels/video), 12 (testimonial cards), 10 (buttons/badges/sticky bar/menu button), 8 (number tiles), 50% (dots and play button only).

**Shadows:** primary CTA `0 14px 30px -14px rgba(60,100,150,.35)`; video `0 40px 80px -50px rgba(40,70,110,.3)`; offer card `0 40px 80px -60px rgba(40,70,110,.35)`; sticky bar `0 14px 34px -12px rgba(20,24,32,.45)`.

## Assets
- `assets/treadmill.svg`: the hero treadmill illustration (custom, viewBox 600×300). Inline it in the H1 (don't use an `<img>`) so it scales in em with the headline, and mark it `aria-hidden`.
- Logo: pure CSS/HTML bars (spec above), or recreate as an SVG.
- **Still needed from the client:** hero video, real testimonials, checkout URL, contact link.

## Screenshots
`screenshots/01–12-desktop.jpg`: desktop captures, top to bottom: 01 hero, 02 video, 03 your week, 04 why it's difficult, 05 what if, 06 the system, 07 who it's for, 08 testimonials, 09 offer, 10 FAQ, 11 note, 12 footer. Use them as a visual check for proportions and balance; exact values come from this README and the reference file. For mobile, open the reference file at 390px width in browser devtools.

## Files
- `reference/Busy Woman Weight Loss v6.dc.html`: the full design (source of truth for any value not listed here)
- `reference/support.js`: runtime needed only to open the reference file in a browser
- `assets/treadmill.svg`
- `screenshots/`: desktop reference captures

## Pre-launch checklist
- [ ] Copy matches the reference verbatim; no em dashes
- [ ] Checkout link wired (offer CTA); every other CTA anchors to #buy
- [ ] Video embedded in the video frame
- [ ] Testimonials are real and used with permission (or replaced with product previews)
- [ ] Contact link set
- [ ] Promo price shown only while the offer is real
- [ ] Meta title/description and OG image added
- [ ] Tested at 375, 390 (iPhone 13), 768, 1024 and 1440px widths
- [ ] `prefers-reduced-motion` pauses the treadmill belt
