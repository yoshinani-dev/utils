/**
 * 半角文字列を全角に変換する
 * @param str 変換する文字列
 * @returns 全角に変換された文字列
 */
export const toFullWidth = (str: string): string => {
  return str.replace(/[A-Za-z0-9]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) + 0xfee0)
  })
}

/**
 * 文字列をUTF-8でURLエンコードする
 * @param str エンコードする文字列
 * @returns URLエンコードされた文字列
 */
export const encodeUrl = (str: string): string => {
  return encodeURIComponent(str)
    .replace(/!/g, "%21") // encodeURIComponentだけでは!がエンコードされないため
    .replace(/\(/g, "%28") // encodeURIComponentだけでは(がエンコードされないため
    .replace(/\)/g, "%29") // encodeURIComponentだけでは)がエンコードされないため
}
