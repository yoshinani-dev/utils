import { formatDateToYYYYMMDD, formatTimeToHHmm } from "./index"

describe("formatTimeToHHmm", () => {
  it("時刻をHH:mm形式でフォーマットする", () => {
    const testCases = [
      { input: new Date("2025-01-15T09:30:00"), expected: "09:30" },
      { input: new Date("2025-01-15T14:05:00"), expected: "14:05" },
      { input: new Date("2025-01-15T23:59:00"), expected: "23:59" },
      { input: new Date("2025-01-15T00:00:00"), expected: "00:00" },
      { input: new Date("2025-01-15T12:00:00"), expected: "12:00" },
    ]

    testCases.forEach(({ input, expected }) => {
      expect(formatTimeToHHmm(input)).toBe(expected)
    })
  })

  it("異なる日付でも時刻のみが正しくフォーマットされる", () => {
    const time1 = new Date("2025-01-15T15:30:00")
    const time2 = new Date("2024-12-31T15:30:00")

    expect(formatTimeToHHmm(time1)).toBe("15:30")
    expect(formatTimeToHHmm(time2)).toBe("15:30")
  })
})

describe("formatDateToYYYYMMDD", () => {
  it("日付をyyyyMMdd形式でフォーマットする", () => {
    const testCases = [
      { input: new Date("2025-01-15"), expected: "20250115" },
      { input: new Date("2025-12-31"), expected: "20251231" },
      { input: new Date("2025-02-01"), expected: "20250201" },
      { input: new Date("2024-12-31"), expected: "20241231" },
      { input: new Date("2025-03-08"), expected: "20250308" },
    ]

    testCases.forEach(({ input, expected }) => {
      expect(formatDateToYYYYMMDD(input)).toBe(expected)
    })
  })

  it("時刻情報があっても日付のみが正しくフォーマットされる", () => {
    const date1 = new Date("2025-01-15T09:30:00")
    const date2 = new Date("2025-01-15T23:59:59")

    expect(formatDateToYYYYMMDD(date1)).toBe("20250115")
    expect(formatDateToYYYYMMDD(date2)).toBe("20250115")
  })

  it("月末の日付が正しくフォーマットされる", () => {
    const endOfMonth = new Date("2025-01-31")
    expect(formatDateToYYYYMMDD(endOfMonth)).toBe("20250131")
  })
})

describe("エッジケース", () => {
  it("閏年の2月29日が正しくフォーマットされる", () => {
    const leapYearDate = new Date("2024-02-29")
    expect(formatDateToYYYYMMDD(leapYearDate)).toBe("20240229")
  })

  it("世紀の変わり目が正しくフォーマットされる", () => {
    const centuryChange = new Date("2000-01-01")
    expect(formatDateToYYYYMMDD(centuryChange)).toBe("20000101")
  })
})
