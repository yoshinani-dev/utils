import library from "@yoshinani/style-guide/eslint/library"

const eslintConfig = [
  ...library,
  {
    ignores: ["dist/**", "node_modules/**", "*.config.mjs", "*.config.ts"],
  },
  {
    rules: {
      "import/order": "off",
      "sort-imports": "off",
    },
  },
]

export default eslintConfig
