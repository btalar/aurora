/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: [
    "dist/**/*.css",
    "node_modules/**/*.css",
    "storybook-static/**/*.css"
  ],
  rules: {
    "custom-property-empty-line-before": null,
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,

    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local", "export"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["value"] // For CSS Modules @value
      }
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme"]
      }
    ],
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-empty-line-before": null,
    "comment-empty-line-before": null,
    "color-function-notation": "modern",
    "alpha-value-notation": "number",
    "media-feature-range-notation": "context",
    "no-empty-source": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
  },
  overrides: [
    {
      files: ["**/*.css"],
    },
    {
      files: ["**/*.module.css"],
      rules: {
        "selector-class-pattern": null,
      }
    }
  ]
}
