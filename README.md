# Monokai Color Scheme

[![Validate](https://github.com/tommodore/monokai/actions/workflows/validate.yml/badge.svg)](https://github.com/tommodore/monokai/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A collection of Monokai color scheme files for terminals, editors, and IDEs.

The original Monokai color scheme was created by [Wimer Hazenberg](https://monokai.nl).

## Palette

| Name              | Hex       | Preview                                               |
| ----------------- | --------- | ----------------------------------------------------- |
| Background        | `#272822` | ![#272822](https://placehold.co/15/272822/272822.png) |
| Foreground        | `#F8F8F2` | ![#F8F8F2](https://placehold.co/15/F8F8F2/F8F8F2.png) |
| Selection         | `#49483E` | ![#49483E](https://placehold.co/15/49483E/49483E.png) |
| Line Highlight    | `#3E3D31` | ![#3E3D31](https://placehold.co/15/3E3D31/3E3D31.png) |
| Comment           | `#75715E` | ![#75715E](https://placehold.co/15/75715E/75715E.png) |
| Red (keyword)     | `#F92672` | ![#F92672](https://placehold.co/15/F92672/F92672.png) |
| Orange (variable) | `#FD971F` | ![#FD971F](https://placehold.co/15/FD971F/FD971F.png) |
| Yellow (string)   | `#E6DB74` | ![#E6DB74](https://placehold.co/15/E6DB74/E6DB74.png) |
| Green (function)  | `#A6E22E` | ![#A6E22E](https://placehold.co/15/A6E22E/A6E22E.png) |
| Blue (type)       | `#66D9EF` | ![#66D9EF](https://placehold.co/15/66D9EF/66D9EF.png) |
| Violet (constant) | `#AE81FF` | ![#AE81FF](https://placehold.co/15/AE81FF/AE81FF.png) |
| Cyan (support)    | `#A1EFE4` | ![#A1EFE4](https://placehold.co/15/A1EFE4/A1EFE4.png) |

> `palette.json` is the canonical source of truth for all color values.

## Available Themes

| Platform       | File                                                                                                                     | How to Install                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS Terminal | [`Terminal/Monokai.terminal`](Terminal/Monokai.terminal)                                                                 | Open the `.terminal` file                                                                                                                   |
| iTerm2         | [`iTerm/Monokai.itermcolors`](iTerm/Monokai.itermcolors)                                                                 | Open the `.itermcolors` file, or import in iTerm → Preferences → Profiles → Colors → Color Presets                                          |
| WezTerm        | [`wezterm/monokai.toml`](wezterm/monokai.toml)                                                                           | Copy to `~/.config/wezterm/colors/monokai.toml`, add `color_scheme = "monokai"` to `wezterm.lua`                                           |
| Alacritty      | [`alacritty/monokai.yml`](alacritty/monokai.yml)                                                                         | Copy to `~/.config/alacritty/monokai.yml`, import in `alacritty.yml`: `import: [~/.config/alacritty/monokai.yml]`                           |
| Konsole (KDE)  | [`Konsole/monokai.colorscheme`](Konsole/monokai.colorscheme)                                                             | Copy to `~/.local/share/konsole/` (KDE 5) or `~/.kde/share/apps/konsole/` (KDE 4), select in Konsole → Settings → Edit Profile → Appearance |
| Kate (KDE)     | [`Kate/monokai.katescheme`](Kate/monokai.katescheme)                                                                     | Kate → Settings → Configure Kate → Fonts & Colours → Import                                                                                 |
| Vim            | [`vim/colors/monokai.vim`](vim/colors/monokai.vim)                                                                       | Copy to `~/.vim/colors/`, add `colorscheme monokai` to `.vimrc`                                                                             |
| Neovim         | [`vim/colors/monokai.vim`](vim/colors/monokai.vim)                                                                       | Copy to `~/.config/nvim/colors/`                                                                                                            |
| Emacs          | [`emacs/monokai-theme.el`](emacs/monokai-theme.el)                                                                       | Download to `~/.emacs.d/themes/`, add `(load-theme 'monokai t)` to config                                                                   |
| Visual Studio  | [`VisualStudio/monokai.vssettings`](VisualStudio/monokai.vssettings) + [`monokai.vstheme`](VisualStudio/monokai.vstheme) | Tools → Import and Export Settings → Import                                                                                                 |
| VS Code        | [`vscode/monokai.json`](vscode/monokai.json)                                                                             | Copy to `~/.vscode/extensions/` or use Command Palette → Preferences: Color Theme → Import                                                  |
| JetBrains IDEs | [`jetbrains/monokai.icls`](jetbrains/monokai.icls)                                                                       | Copy to `~/.config/JetBrains/*/colors/` or Settings → Editor → Color Scheme → ⚙ → Import                                                    |
| pi-agent (TUI) | [`pi-theme/monokai.json`](pi-theme/monokai.json)                                                                         | Copy to `~/.pi/agent/themes/`, then select via `/settings` in pi                                                                             |
| Atom           | (external)                                                                                                               | UI: [Atom Material](https://atom.io/themes/atom-material-ui), Syntax: [Material Monokai](https://atom.io/themes/material-monokai-syntax)    |

## Screenshots

> Place screenshots in [`screenshots/`](screenshots/). See [screenshots/README.md](screenshots/README.md).

## Project Structure

```
monokai/
├── palette.json          ← Single source of truth for all colors
├── scripts/
│   ├── generate.js       ← Generate themes from palette.json
│   └── validate.js       ← Validate all files against palette.json
├── screenshots/          ← Editor preview images
├── Terminal/
├── iTerm/
├── Konsole/
├── Kate/
├── vim/colors/
├── emacs/
├── VisualStudio/
├── vscode/
├── jetbrains/
├── wezterm/
├── pi-theme/
├── alacritty/
└── Atom/
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

Regenerating themes from the palette:

```bash
node scripts/generate.js
```

Validating all files:

```bash
node scripts/validate.js
```

## License

[MIT](LICENSE). Free for anyone to use.

## Credits

- **Wimer Hazenberg** — creator of the original Monokai color scheme
- **Stephen Way** — Terminal and iTerm theme ports
- **Kelvin Smith** — Emacs theme port
- **sickill** — Vim port via [coloration](https://github.com/sickill/coloration)
- All [contributors](https://github.com/tommodore/monokai/graphs/contributors)
