import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/**/*.ts", "!src/**/*.spec.ts"],
  unbundle: true,
  exports: true,
  dts: true,
  sourcemap: true,
  clean: true,
})
