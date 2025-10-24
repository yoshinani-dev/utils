import { describe, expect, it } from "vitest"

import { encodeUrl, toFullWidth } from "./index.js"

describe("string-utilのテスト", () => {
  describe("toFullWidthのテスト", () => {
    it("半角英数字を全角に変換できること", () => {
      expect(toFullWidth("abcABC123")).toBe("ａｂｃＡＢＣ１２３")
    })

    it("変換対象外の文字はそのまま返却できること", () => {
      expect(toFullWidth("あいうＡＢＣ")).toBe("あいうＡＢＣ")
    })
  })

  describe("encodeUrlのテスト", () => {
    it("日本語をURLエンコードできること", () => {
      expect(encodeUrl("こんにちは")).toBe(
        "%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF",
      )
    })

    it("スペースをURLエンコードできること", () => {
      expect(encodeUrl("Hello World")).toBe("Hello%20World")
    })

    it("特殊文字をURLエンコードできること", () => {
      expect(encodeUrl("!@#$%^&*()")).toBe("%21%40%23%24%25%5E%26*%28%29")
    })
  })
})
