# Contributing

Thank you for helping improve Monokai themes!

## How to add a new editor/terminal theme

1. **Check the palette** — All theme colors must match `palette.json`. No arbitrary deviations.
2. **Open an issue first** — Discuss format requirements, file paths, and naming.
3. **Add the theme file** — Place it in its own directory: `$EDITOR/monokai.$ext`
4. **Add install instructions** — Update `README.md` with clear steps.
5. **Add a screenshot** — Place a `.png` in `screenshots/`. Name: `$EDITOR.png`.
6. **Validate** — Run `node scripts/validate.js` to check hex consistency.

## Palette-driven workflow

We maintain `palette.json` as the single source of truth. Every generated and hand-rolled theme file must derive from these hex values. If you need to adjust a color across all targets, change `palette.json` and regenerate.

## Code of conduct

Be respectful, constructive, and patient. This project is maintained by volunteers.
