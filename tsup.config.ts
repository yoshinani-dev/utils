import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    "date-util/index": "src/date-util/index.ts",
    "file-util/index": "src/file-util/index.ts",
  },
  format: "esm",
  target: "es2022",
  outDir: "dist",
  dts: true,
  sourcemap: true,
  bundle: false,
  clean: true,
})
