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
