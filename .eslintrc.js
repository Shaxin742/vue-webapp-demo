// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "breadcrumbs.enabled": true,
    // "editor.tabSize": 2,
    "editor.renderWhitespace": "boundary",
    "editor.cursorBlinking": "smooth",
    "editor.minimap.renderCharacters": false,
    "editor.fontFamily": "'Fira Code', 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
    "editor.fontLigatures": true,
    "explorer.confirmDragAndDrop": false,
    "extensions.autoUpdate": false,
    "files.insertFinalNewline": true,
    "git.autofetch": true,
    "git.path": "F:\\Program Files\\Git\\cmd\\git.exe",
    "search.exclude": {
      "**/node_modules": true,
      "**/dist": true
    },
    "typescript.locale": "en",
    "window.titleBarStyle": "custom",
    "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
    "workbench.activityBar.visible": true,
    "workbench.colorTheme": "Plastic - deprioritised punctuation",
    "workbench.iconTheme": "vscode-great-icons",
    "workbench.startupEditor": "newUntitledFile",
    "eslint.autoFixOnSave": true,
    "eslint.validate": ["javascript", "javascriptreact", "vue"],
    "vsicons.projectDetection.autoReload": true,
    "vsicons.dontShowNewVersionMessage": true,
    "tslint.autoFixOnSave": true,
    "debugwrapper.wrappers": {
      "default": "console.log('$eSEL', $SEL)"
    },
    "prettier.tslintIntegration": true,
    "cSpell.userWords": [
      "Unmount"
    ],
    "jest.autoEnable": false,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "html",
        "autoFix": true
      },
      {
        "language": "vue",
        "autoFix": true
      }
    ]
  }
}
