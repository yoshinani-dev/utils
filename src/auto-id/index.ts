const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// `CHARS.length` の倍数で最大の値
const MAX_MULTIPLE = Math.floor(256 / CHARS.length) * CHARS.length
const TARGET_LENGTH = 20

/**
 * Firestoreが自動生成するものと同じ20文字のランダムなIDを生成する
 * @see https://github.com/firebase/firebase-js-sdk/blob/6e0e303173c93646c07b9138c7bed8749b514e8f/packages/firestore/src/util/misc.ts#L34
 * @returns ランダムなID
 */
export function autoId(): string {
  let autoId = ""
  while (autoId.length < TARGET_LENGTH) {
    const bytes = crypto.getRandomValues(new Uint8Array(40))
    bytes.forEach((byte) => {
      // [0, MAX_MULTIPLE) の値のみを受け取ることで、`CHARS` に均等にマッピングできるようにする
      if (autoId.length < TARGET_LENGTH && byte < MAX_MULTIPLE) {
        autoId += CHARS.charAt(byte % CHARS.length)
      }
    })
  }

  return autoId
}
