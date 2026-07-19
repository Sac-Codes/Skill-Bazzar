# TODO

## Team Section Refinement
- [x] Update `src/components/About/TeamSection.tsx`:
  - [x] Replace current grid with CSS Grid that matches exact responsive requirements (3×2 desktop/laptop, 2×3 tablet, 1×6 mobile)


  - [ ] Ensure centered container and equal card heights (no awkward stretching)
  - [ ] Refine TeamCard glassmorphism: gradient border, soft blue glow, improved shadow, larger radius, subtle hover lift
  - [ ] Improve profile image frame: larger circular frame, gradient border, soft blue glow, hover zoom
  - [ ] Polish typography hierarchy and badge pill styling
  - [ ] Enforce contribution max 2 lines with line-clamp / fallback
  - [ ] Improve section header layout + subtle non-distracting background mesh/blobs
- [ ] If needed, update `src/index.css` with minimal helpers (only grid/line-clamp fallback)
- [ ] Run dev server + verify responsive widths listed (320..1920)
- [ ] Verify: no overflow, correct grid layout, equal heights, balanced spacing

