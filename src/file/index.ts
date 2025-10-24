import { TaggedError } from "@nakanoaas/tagged-error"

export const getFileExtension = (
  file: File,
): string | TaggedError<"INVALID_FILE_EXTENSION"> => {
  const extension = file.name.split(".").at(-1)
  if (!extension) {
    return new TaggedError("INVALID_FILE_EXTENSION", {
      message: "ファイルの拡張子が不正です",
    })
  }
  return extension
}
