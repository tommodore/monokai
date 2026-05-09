const fs = require("fs");
const path = require("path");

const palette = JSON.parse(
	fs.readFileSync(path.join(__dirname, "..", "palette.json"), "utf-8"),
);
const { colors, aliases } = palette;

/** Resolve an alias or color name to its hex string */
function hex(name) {
	const c = colors[name] || colors[aliases[name]];
	if (!c) throw new Error(`Unknown color: ${name}`);
	return c.hex;
}

// ─── VS Code ────────────────────────────────────────────────────────────────
function generateVSCode() {
	const theme = {
		$schema: "vscode://schemas/color-theme",
		name: "Monokai",
		type: "dark",
		colors: {
			"editor.background": hex("background"),
			"editor.foreground": hex("foreground"),
			"editorCursor.foreground": hex("cursor"),
			"editor.selectionBackground": hex("selection"),
			"editor.inactiveSelectionBackground": hex("selection") + "80",
			"editor.lineHighlightBackground": hex("line-highlight"),
			"editorLineNumber.foreground": hex("line-number"),
			"editorLineNumber.activeForeground": hex("foreground"),
			"editorIndentGuide.background": hex("line-highlight"),
			"editorIndentGuide.activeBackground": hex("comment"),
			"editor.selectionHighlightBackground": hex("selection"),
			"editorBracketMatch.background": hex("selection"),
			"editorBracketMatch.border": hex("comment"),
			"editorWidget.background": hex("line-highlight"),
			"editorWidget.border": hex("status-bg"),
			"editorSuggestWidget.background": hex("background"),
			"editorSuggestWidget.selectedBackground": hex("selection"),
			"editorSuggestWidget.border": hex("status-bg"),
			"input.background": hex("line-highlight"),
			"input.foreground": hex("foreground"),
			"input.border": hex("status-bg"),
			"list.activeSelectionBackground": hex("selection"),
			"list.activeSelectionForeground": hex("foreground"),
			"list.hoverBackground": hex("line-highlight"),
			"list.focusBackground": hex("selection"),
			"sideBar.background": hex("background"),
			"sideBar.foreground": hex("foreground"),
			"sideBar.border": hex("status-bg"),
			"sideBarTitle.foreground": hex("foreground"),
			"activityBar.background": hex("background"),
			"activityBar.foreground": hex("foreground"),
			"activityBar.border": hex("status-bg"),
			"statusBar.background": hex("status-bg"),
			"statusBar.foreground": hex("status-fg"),
			"statusBar.noFolderBackground": hex("status-bg"),
			"statusBar.debuggingBackground": hex("red"),
			"tab.activeBackground": hex("background"),
			"tab.activeForeground": hex("foreground"),
			"tab.inactiveBackground": hex("background"),
			"tab.inactiveForeground": hex("comment"),
			"tab.border": hex("status-bg"),
			"editorGroupHeader.tabsBackground": hex("background"),
			"editorGroup.border": hex("status-bg"),
			"editorGroupHeader.tabsBorder": hex("status-bg"),
			"panel.background": hex("background"),
			"panel.border": hex("status-bg"),
			"panelTitle.activeForeground": hex("foreground"),
			"panelTitle.inactiveForeground": hex("comment"),
			"titleBar.activeBackground": hex("background"),
			"titleBar.activeForeground": hex("foreground"),
			"titleBar.border": hex("status-bg"),
			"notification.background": hex("line-highlight"),
			"notification.buttonBackground": hex("selection"),
			"notification.buttonForeground": hex("foreground"),
			"notification.infoBackground": hex("blue"),
			"notification.warningBackground": hex("orange"),
			"notification.errorBackground": hex("red"),
			"scrollbar.shadow": "#00000044",
			"scrollbarSlider.background": hex("line-highlight"),
			"scrollbarSlider.hoverBackground": hex("status-bg"),
			"scrollbarSlider.activeBackground": hex("comment"),
			"editorError.foreground": hex("red"),
			"editorWarning.foreground": hex("orange"),
			"editorInfo.foreground": hex("blue"),
			"editorGutter.background": hex("background"),
			"editorGutter.modifiedBackground": hex("orange") + "66",
			"editorGutter.addedBackground": hex("green") + "66",
			"editorGutter.deletedBackground": hex("red") + "66",
			"diffEditor.insertedTextBackground": hex("green") + "33",
			"diffEditor.removedTextBackground": hex("red") + "33",
			"editorHoverWidget.background": hex("line-highlight"),
			"editorHoverWidget.border": hex("status-bg"),
			"peekView.background": hex("line-highlight"),
			"peekViewResult.background": hex("background"),
			"peekViewTitle.background": hex("line-highlight"),
			"peekView.border": hex("comment"),
			"peekViewEditor.background": hex("background"),
			"peekViewResult.matchHighlightBackground": hex("selection"),
			"peekViewEditor.matchHighlightBackground": hex("selection"),
			focusBorder: hex("comment"),
			"widget.shadow": "#00000066",
			"progressBar.background": hex("blue"),
			"button.background": hex("selection"),
			"button.hoverBackground": hex("status-bg"),
			"button.foreground": hex("foreground"),
			"debugIcon.breakpointForeground": hex("red"),
			"debugToolBar.background": hex("line-highlight"),
			"settings.headerForeground": hex("foreground"),
			"settings.modifiedItemIndicator": hex("orange"),
		},
		tokenColors: [
			{
				scope: "comment",
				settings: { foreground: hex("comment"), fontStyle: "italic" },
			},
			{
				scope: "comment.block.documentation",
				settings: { foreground: hex("comment") },
			},
			{ scope: "string", settings: { foreground: hex("yellow") } },
			{ scope: "string.quoted", settings: { foreground: hex("yellow") } },
			{ scope: "string.regexp", settings: { foreground: hex("orange") } },
			{ scope: "constant.numeric", settings: { foreground: hex("violet") } },
			{ scope: "constant.language", settings: { foreground: hex("violet") } },
			{ scope: "constant.character", settings: { foreground: hex("violet") } },
			{ scope: "constant.other", settings: { foreground: hex("violet") } },
			{ scope: "keyword", settings: { foreground: hex("red") } },
			{ scope: "keyword.control", settings: { foreground: hex("red") } },
			{ scope: "keyword.operator", settings: { foreground: hex("red") } },
			{ scope: "keyword.other.unit", settings: { foreground: hex("orange") } },
			{ scope: "storage", settings: { foreground: hex("red") } },
			{ scope: "storage.type", settings: { foreground: hex("blue") } },
			{ scope: "storage.modifier", settings: { foreground: hex("red") } },
			{ scope: "entity.name.function", settings: { foreground: hex("green") } },
			{ scope: "entity.name.type", settings: { foreground: hex("blue") } },
			{
				scope: "entity.other.attribute-name",
				settings: { foreground: hex("green") },
			},
			{ scope: "entity.name.tag", settings: { foreground: hex("red") } },
			{
				scope: "entity.other.inherited-class",
				settings: { foreground: hex("blue") },
			},
			{ scope: "support.function", settings: { foreground: hex("green") } },
			{ scope: "support.class", settings: { foreground: hex("blue") } },
			{ scope: "support.type", settings: { foreground: hex("blue") } },
			{ scope: "support.constant", settings: { foreground: hex("violet") } },
			{ scope: "variable", settings: { foreground: hex("orange") } },
			{ scope: "variable.language", settings: { foreground: hex("orange") } },
			{ scope: "variable.parameter", settings: { foreground: hex("orange") } },
			{ scope: "variable.other", settings: { foreground: hex("foreground") } },
			{
				scope: "invalid",
				settings: { foreground: hex("foreground"), background: hex("red") },
			},
			{
				scope: "invalid.deprecated",
				settings: { foreground: hex("foreground"), background: hex("orange") },
			},
			{ scope: "markup.bold", settings: { fontStyle: "bold" } },
			{ scope: "markup.italic", settings: { fontStyle: "italic" } },
			{ scope: "markup.underline", settings: { fontStyle: "underline" } },
			{
				scope: "markup.heading",
				settings: { foreground: hex("green"), fontStyle: "bold" },
			},
			{ scope: "markup.raw", settings: { foreground: hex("yellow") } },
			{ scope: "markup.deleted", settings: { foreground: hex("red") } },
			{ scope: "markup.inserted", settings: { foreground: hex("green") } },
			{ scope: "markup.changed", settings: { foreground: hex("orange") } },
			{ scope: "meta.separator", settings: { foreground: hex("comment") } },
			{ scope: "meta.preprocessor", settings: { foreground: hex("red") } },
			{ scope: "punctuation", settings: { foreground: hex("foreground") } },
			{
				scope: "punctuation.definition.tag",
				settings: { foreground: hex("blue") },
			},
			{
				scope: "punctuation.definition.string",
				settings: { foreground: hex("yellow") },
			},
			{
				scope: "punctuation.definition.comment",
				settings: { foreground: hex("comment") },
			},
		],
	};

	const outDir = path.join(__dirname, "..", "vscode");
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(
		path.join(outDir, "monokai.json"),
		JSON.stringify(theme, null, 2),
	);
	console.log("✓ Generated vscode/monokai.json");
}

// ─── JetBrains .icls ────────────────────────────────────────────────────────
function generateJetBrains() {
	const e = (name, fg, bg, fontType) => {
		const opts = [
			`scheme="${name}"`,
			fg ? `foreground="${fg}"` : "",
			bg ? `background="${bg}""` : "",
			fontType ? `fontType="${fontType}"` : "",
		];
		return `    <option ${opts.filter(Boolean).join(" ")} />`;
	};

	const lines = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<!DOCTYPE scheme PUBLIC "-//JetBrains//DTD IDE 6.0 Scheme//EN" "">`,
		`<scheme name="Monokai" version="1" parent_scheme="Darcula">`,
		`  <meta>`,
		`    <property name="author" value="Monokai Community" />`,
		`    <property name="description" value="Monokai color scheme" />`,
		`  </meta>`,
		`  <option name="LINE_SPACING" value="1.0" />`,
		`  <option name="EDITOR_FONT_SIZE" value="14" />`,
		`  <option name="EDITOR_FONT_NAME" value="JetBrains Mono" />`,
		`  <colors>`,
		`    <option name="CARET_ROW_COLOR" value="${hex("line-highlight")}" />`,
		`    <option name="CARET_COLOR" value="${hex("cursor")}" />`,
		`    <option name="SELECTION_BACKGROUND" value="${hex("selection")}" />`,
		`    <option name="SELECTION_FOREGROUND" value="${hex("foreground")}" />`,
		`    <option name="LINE_NUMBERS_COLOR" value="${hex("line-number")}" />`,
		`    <option name="ANNOTATION_COLOR" value="${hex("comment")}" />`,
		`    <option name="WHITESPACES" value="${hex("comment")}" />`,
		`    <option name="INDENT_GUIDE" value="${hex("line-highlight")}" />`,
		`    <option name="GUTTER_BACKGROUND" value="${hex("background")}" />`,
		`    <option name="NOTIFICATION_BACKGROUND" value="${hex("line-highlight")}" />`,
		`    <option name="TABS_BACKGROUND" value="${hex("background")}" />`,
		`    <option name="TABS_UNDERLINE_COLOR" value="${hex("green")}" />`,
		`    <option name="BREADCRUMBS_DELIMITER" value="${hex("comment")}" />`,
		`    <option name="BREADCRUMBS_DEFAULT" value="${hex("foreground")}" />`,
		`    <option name="BREADCRUMBS_HOVERED" value="${hex("green")}" />`,
		`    <option name="BREADCRUMBS_CURRENT" value="${hex("yellow")}" />`,
		`  </colors>`,
		`  <attributes>`,
		...["TEXT", ""].map(() => ""), // placeholder
		`    <option name="DEFAULT_TAG">
      <value />
    </option>`,
		`    <option name="TEXT">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
        <option name="BACKGROUND" value="${hex("background")}" />
      </value>
    </option>`,
		`    <option name="FOLDED_TEXT">
      <value>
        <option name="FOREGROUND" value="${hex("comment")}" />
      </value>
    </option>`,
		`    <option name="LINE_NUMBER">
      <value>
        <option name="FOREGROUND" value="${hex("line-number")}" />
      </value>
    </option>`,
		`    <option name="TODO_DEFAULT_ATTRIBUTES">
      <value>
        <option name="FOREGROUND" value="${hex("orange")}" />
        <option name="FONT_TYPE" value="bold" />
      </value>
    </option>`,
		`    <option name="KEYWORD">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="KEYWORD_ARGUMENT">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
        <option name="FONT_TYPE" value="italic" />
      </value>
    </option>`,
		`    <option name="CLASS_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("blue")}" />
      </value>
    </option>`,
		`    <option name="INTERFACE_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("blue")}" />
        <option name="FONT_TYPE" value="italic" />
      </value>
    </option>`,
		`    <option name="ENUM_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="TYPE_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("blue")}" />
      </value>
    </option>`,
		`    <option name="FUNCTION_DECLARATION">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="FUNCTION_CALL">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="PARAMETER">
      <value>
        <option name="FOREGROUND" value="${hex("orange")}" />
      </value>
    </option>`,
		`    <option name="LOCAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="GLOBAL_VARIABLE">
      <value>
        <option name="FOREGROUND" value="${hex("orange")}" />
      </value>
    </option>`,
		`    <option name="INSTANCE_FIELD">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="STATIC_FIELD">
      <value>
        <option name="FOREGROUND" value="${hex("violet")}" />
        <option name="FONT_TYPE" value="italic" />
      </value>
    </option>`,
		`    <option name="STRING">
      <value>
        <option name="FOREGROUND" value="${hex("yellow")}" />
      </value>
    </option>`,
		`    <option name="NUMBER">
      <value>
        <option name="FOREGROUND" value="${hex("violet")}" />
      </value>
    </option>`,
		`    <option name="BOOLEAN">
      <value>
        <option name="FOREGROUND" value="${hex("violet")}" />
      </value>
    </option>`,
		`    <option name="OPERATION_SIGN">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="PARENTHS">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="BRACKETS">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="BRACES">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="DOT">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="SEMICOLON">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="COMMA">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="DOT_IDE_KEYWORD">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="ANNOTATION_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("violet")}" />
      </value>
    </option>`,
		`    <option name="DOC_COMMENT">
      <value>
        <option name="FOREGROUND" value="${hex("comment")}" />
        <option name="FONT_TYPE" value="italic" />
      </value>
    </option>`,
		`    <option name="LINE_COMMENT">
      <value>
        <option name="FOREGROUND" value="${hex("comment")}" />
      </value>
    </option>`,
		`    <option name="BLOCK_COMMENT">
      <value>
        <option name="FOREGROUND" value="${hex("comment")}" />
      </value>
    </option>`,
		`    <option name="XML_TAG">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="XML_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="XML_ATTRIBUTE_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="XML_ATTRIBUTE_VALUE">
      <value>
        <option name="FOREGROUND" value="${hex("yellow")}" />
      </value>
    </option>`,
		`    <option name="HTML_TAG">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="HTML_TAG_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("red")}" />
      </value>
    </option>`,
		`    <option name="HTML_ATTRIBUTE_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="HTML_ATTRIBUTE_VALUE">
      <value>
        <option name="FOREGROUND" value="${hex("yellow")}" />
      </value>
    </option>`,
		`    <option name="CSS_PROPERTY_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("blue")}" />
      </value>
    </option>`,
		`    <option name="CSS_PROPERTY_VALUE">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="CSS_SELECTOR">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="CSS_CLASS_NAME">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="CSS_ID_SELECTOR">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
      </value>
    </option>`,
		`    <option name="MARKDOWN_HEADER">
      <value>
        <option name="FOREGROUND" value="${hex("green")}" />
        <option name="FONT_TYPE" value="bold" />
      </value>
    </option>`,
		`    <option name="MARKDOWN_LINK">
      <value>
        <option name="FOREGROUND" value="${hex("blue")}" />
        <option name="FONT_TYPE" value="underline" />
      </value>
    </option>`,
		`    <option name="MARKDOWN_CODE">
      <value>
        <option name="FOREGROUND" value="${hex("yellow")}" />
        <option name="BACKGROUND" value="${hex("line-highlight")}" />
      </value>
    </option>`,
		`    <option name="MARKDOWN_CODE_BLOCK">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
        <option name="BACKGROUND" value="${hex("line-highlight")}" />
      </value>
    </option>`,
		`    <option name="MARKDOWN_LIST_ITEM">
      <value>
        <option name="FOREGROUND" value="${hex("foreground")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BLACK">
      <value>
        <option name="FOREGROUND" value="${hex("background")}" />
        <option name="BACKGROUND" value="${hex("background")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_RED">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-red")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_GREEN">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-green")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_YELLOW">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-yellow")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BLUE">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-blue")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_MAGENTA">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-magenta")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_CYAN">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-cyan")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_GRAY">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-white")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_DARKGRAY">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-black")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_RED">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-red")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_GREEN">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-green")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_YELLOW">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-yellow")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_BLUE">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-blue")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_MAGENTA">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-magenta")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_CYAN">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-cyan")}" />
      </value>
    </option>`,
		`    <option name="CONSOLE_BRIGHT_WHITE">
      <value>
        <option name="FOREGROUND" value="${hex("ansi-bright-white")}" />
      </value>
    </option>`,
		`  </attributes>`,
		`</scheme>`,
	];

	const outDir = path.join(__dirname, "..", "jetbrains");
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, "monokai.icls"), lines.join("\n"));
	console.log("✓ Generated jetbrains/monokai.icls");
}

// ─── Alacritty YAML ─────────────────────────────────────────────────────────
function generateAlacritty() {
	const h = (name) => `"${hex(name)}"`;
	const yaml = `# Monokai color scheme for Alacritty
# Generated from palette.json — do not edit directly
colors:
  primary:
    background: ${h("background")}
    foreground: ${h("foreground")}
  cursor:
    text: ${h("background")}
    cursor: ${h("cursor")}
  selection:
    text: ${h("foreground")}
    background: ${h("selection")}
  normal:
    black:   ${h("ansi-black")}
    red:     ${h("ansi-red")}
    green:   ${h("ansi-green")}
    yellow:  ${h("ansi-yellow")}
    blue:    ${h("ansi-blue")}
    magenta: ${h("ansi-magenta")}
    cyan:    ${h("ansi-cyan")}
    white:   ${h("ansi-white")}
  bright:
    black:   ${h("ansi-bright-black")}
    red:     ${h("ansi-bright-red")}
    green:   ${h("ansi-bright-green")}
    yellow:  ${h("ansi-bright-yellow")}
    blue:    ${h("ansi-bright-blue")}
    magenta: ${h("ansi-bright-magenta")}
    cyan:    ${h("ansi-bright-cyan")}
    white:   ${h("ansi-bright-white")}
  indexed_colors:
    - { index: 16, color: ${h("orange")} }
`;

	const outDir = path.join(__dirname, "..", "alacritty");
	fs.mkdirSync(outDir, { recursive: true });
	fs.writeFileSync(path.join(outDir, "monokai.yml"), yaml);
	console.log("✓ Generated alacritty/monokai.yml");
}

// ─── Run ────────────────────────────────────────────────────────────────────
generateVSCode();
generateJetBrains();
generateAlacritty();
