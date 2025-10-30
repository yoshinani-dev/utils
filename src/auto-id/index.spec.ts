import { describe, expect, it } from "vitest"

import { autoId } from "./index.js"

describe("autoId", () => {
  it("should generate a 20-character string", () => {
    const id = autoId()
    expect(id).toHaveLength(20)
  })

  it("should generate a string containing only alphanumeric characters", () => {
    const id = autoId()
    const alphanumericRegex = /^[a-zA-Z0-9]+$/
    expect(alphanumericRegex.test(id)).toBe(true)
  })

  it("should generate different IDs on subsequent calls", () => {
    const id1 = autoId()
    const id2 = autoId()
    expect(id1).not.toBe(id2)
  })
})
