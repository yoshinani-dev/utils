## CI と検査（yoshinani 共通ルール）

GitHub Actions では検査を実行しない。検査はすべてローカルで行う（正本: [CI_POLICY.md](https://github.com/yoshinani-dev/.github/blob/main/CI_POLICY.md)）。

- `pnpm verify`: `git push` のたびに pre-push フックで自動実行される。失敗すると push できない。中身: `pnpm run check && pnpm exec vitest run`
- `pnpm verify:full`: PR をマージする前に必ず実行し、結果を PR の「テスト項目」に書く。中身: `pnpm run verify && pnpm build`
- フックが動かないときは `pnpm install` を一度実行する（`prepare` で有効になる）
- `git push --no-verify` は緊急時だけ。使ったら PR に理由を書く
- 依存パッケージは月1回ローカルで更新する（`pnpm update` → `pnpm verify:full`）。Dependabot のバージョン更新は使わない（脆弱性アラートだけ有効）
- Actions に検査用のワークフローを追加しない（置いてよいのは PR の自動ラベル付け・デプロイ・リリースだけ）
