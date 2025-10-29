/**
 * Firestoreが自動生成するものと同じ20文字のランダムなIDを生成する
 * @see https://github.com/firebase/firebase-js-sdk/blob/6e0e303173c93646c07b9138c7bed8749b514e8f/packages/firestore/src/util/misc.ts#L34
 * @returns ランダムなID
 */
export function autoId(): string {
  // 英数字
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  // `char.length` の倍数で最大の値
  const maxMultiple = Math.floor(256 / chars.length) * chars.length

  let autoId = ""
  const targetLength = 20
  while (autoId.length < targetLength) {
    const bytes = crypto.getRandomValues(new Uint8Array(40))
    bytes.forEach((byte) => {
      // [0, maxMultiple) の値のみを受け取ることで、`chars` に均等にマッピングできるようにする
      if (autoId.length < targetLength && byte < maxMultiple) {
        autoId += chars.charAt(byte % chars.length)
      }
    })
  }

  return autoId
}
