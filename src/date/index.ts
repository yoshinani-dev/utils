import { format } from "date-fns"

/**
 * 時刻をHH:mm形式でフォーマットする
 * @param time フォーマット対象の時刻
 * @returns "HH:mm"形式の文字列（例: "14:30"）
 */
export const formatTimeToHHmm = (time: Date): string => {
  return format(time, "HH:mm")
}

/**
 * 日付をyyyyMMdd形式でフォーマットする
 * @param date フォーマット対象の日付
 * @returns "yyyyMMdd"形式の文字列（例: "20250814"）
 */
export const formatDateToYYYYMMDD = (date: Date): string => {
  return format(date, "yyyyMMdd")
}

export const formatDateToYYYYMMDD_HHmm = (date: Date): string => {
  return format(date, "yyyy年MM月dd日 HH:mm")
}
