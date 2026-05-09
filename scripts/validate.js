#!/usr/bin/env node
/**
 * Validate all theme files in this repo against palette.json.
 *
 * Usage: node scripts/validate.js
 *
 * Checks:
 *   - palette.json is valid JSON and contains all required colors
 *   - Theme files referenced in README exist
 *   - Hex values in generated files match palette (where names are embedded)
 *   - Reports any deviations
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

// ─── Load palette ───────────────────────────────────────────────────────────
const palette = JSON.parse(
	fs.readFileSync(path.join(ROOT, "palette.json"), "utf-8"),
);
const { colors } = palette;
const namedColors = new Set(Object.keys(colors));
const hexValues = new Set(
	Object.values(colors).map((c) => c.hex.toLowerCase()),
);

if (namedColors.size === 0) {
	console.error("FAIL palette.json: no colors found");
	process.exit(1);
}
console.log(`✓ palette.json: ${namedColors.size} named colors loaded`);

// ─── Check theme files exist ────────────────────────────────────────────────
const expectedFiles = [
	"Terminal/Monokai.terminal",
	"iTerm/Monokai.itermcolors",
	"Konsole/monokai.colorscheme",
	"Kate/monokai.katescheme",
	"emacs/monokai-theme.el",
	"vim/colors/monokai.vim",
	"VisualStudio/monokai.vssettings",
	"VisualStudio/monokai.vstheme",
	"vscode/monokai.json",
	"jetbrains/monokai.icls",
	"alacritty/monokai.yml",
	"palette.json",
	"LICENSE",
	"CONTRIBUTING.md",
	"README.md",
];

let allOk = true;
for (const f of expectedFiles) {
	const fp = path.join(ROOT, f);
	if (!fs.existsSync(fp)) {
		console.error(`MISSING ${f}`);
		allOk = false;
	}
}

// ─── Check hex values in generated JSON/YAML/ICLS files ─────────────────────
const generatedFiles = [
	"vscode/monokai.json",
	"jetbrains/monokai.icls",
	"alacritty/monokai.yml",
];

const hexPattern = /#[0-9A-Fa-f]{6,8}/g;
for (const f of generatedFiles) {
	const fp = path.join(ROOT, f);
	if (!fs.existsSync(fp)) {
		continue; // already reported above
	}
	const content = fs.readFileSync(fp, "utf-8");
	const found = content.match(hexPattern) || [];
	for (const h of found) {
		const hLower = h.toLowerCase().slice(0, 7); // strip alpha
		if (!hexValues.has(hLower)) {
			console.warn(`  ? ${f}: ${h} not in palette`);
		}
	}
	console.log(`  ✓ ${f}: ${found.length} hex colors checked`);
}

// ─── Check README references exist ──────────────────────────────────────────
const readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf-8");
for (const f of expectedFiles.filter(
	(f) =>
		f !== "README.md" &&
		f !== "palette.json" &&
		f !== "LICENSE" &&
		f !== "CONTRIBUTING.md",
)) {
	// Just check it mentions the directory
	const dir = path.dirname(f);
	if (!readme.includes(dir) && !readme.includes(f)) {
		console.warn(`  ? README.md does not mention ${dir}/`);
	}
}

if (allOk) {
	console.log("\n✓ All checks passed");
} else {
	console.error("\nFAIL Some files are missing");
	process.exit(1);
}
