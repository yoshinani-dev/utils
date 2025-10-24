# YOSHINANI Utils

[![npm version](https://badge.fury.io/js/@yoshinani%2Futils.svg)](https://badge.fury.io/js/@yoshinani%2Futils)

## 概要

このリポジトリは、株式会社YOSHINANIの開発で使用する汎用的なユーティリティ関数のコレクションです。

## インストール

```sh
# npm を使う場合
npm i @yoshinani/utils

# pnpm を使う場合
pnpm add @yoshinani/utils

# Yarn を使う場合
yarn add @yoshinani/utils
```

## 利用可能なユーティリティ

### Date Utils

日付操作に関するユーティリティ関数群です。

```typescript
import { formatTimeToHHmm, formatDateToYYYYMMDD, formatDateToYYYYMMDD_HHmm } from "@yoshinani/utils/date-util"

// 時刻をHH:mm形式でフォーマット
const time = formatTimeToHHmm(new Date()) // "14:30"

// 日付をyyyyMMdd形式でフォーマット
const date = formatDateToYYYYMMDD(new Date()) // "20250814"

// 日付と時刻をyyyy年MM月dd日 HH:mm形式でフォーマット
const dateTime = formatDateToYYYYMMDD_HHmm(new Date()) // "2025年08月14日 14:30"
```

#### 利用可能な関数

- `formatTimeToHHmm(time: Date): string` - 時刻をHH:mm形式でフォーマット
- `formatDateToYYYYMMDD(date: Date): string` - 日付をyyyyMMdd形式でフォーマット
- `formatDateToYYYYMMDD_HHmm(date: Date): string` - 日付と時刻をyyyy年MM月dd日 HH:mm形式でフォーマット

### String Utils

文字列操作に関するユーティリティ関数群です。

```typescript
import { toFullWidth, encodeUrl } from "@yoshinani/utils/string-util"

// 半角文字列を全角に変換
const fullWidth = toFullWidth("ABC123") // "ＡＢＣ１２３"

// 文字列をUTF-8でURLエンコード
const encoded = encodeUrl("こんにちは(世界)!") // "%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%28%E4%B8%96%E7%95%8C%29%21"
```

#### 利用可能な関数

- `toFullWidth(str: string): string` - 半角文字列を全角に変換
- `encodeUrl(str: string): string` - 文字列をUTF-8でURLエンコード（`!`, `(`, `)` も含む）

### File Utils

ファイル操作に関するユーティリティ関数群です。

```typescript
import { getFileExtension } from "@yoshinani/utils/file-util"

// ファイルから拡張子を取得
const file = new File([""], "example.txt")
const extension = getFileExtension(file) // "txt"

// 拡張子がない場合はTaggedErrorを返す
const invalidFile = new File([""], "example")
const result = getFileExtension(invalidFile) // TaggedError<"INVALID_FILE_EXTENSION">
```

#### 利用可能な関数

- `getFileExtension(file: File): string | TaggedError<"INVALID_FILE_EXTENSION">` - ファイルから拡張子を取得

## 開発

### ビルド

```sh
pnpm build
```

### テスト

```sh
pnpm test
```

### リリース

```sh
pnpm release
```

## コントリビュート

プルリクエストを作成する前に、[コントリビュートガイド](./CONTRIBUTING.md)をお読みください。

## ライセンス

MIT
