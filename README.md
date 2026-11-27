# MONSTER EXPLORE Server Ver.0.16

MONSTER EXPLORE Ver.0.15 の通信対戦ベータ専用サーバー。以前の接続試験ページ `/` と `/room/` も維持。ゲーム本体の GitHub Pages (`https://jouhoudobashi-glitch.github.io/MonsterExplore/`) から `/battle/` へ WebSocket で接続します。

## 更新手順
既存の非公開 `monster-explore-server` リポジトリの main 直下に、ZIPを解凍した `index.js`、`battle.js`、`package.json`、`wrangler.jsonc`、`README.md` をまとめて上書き・追加し、Commit changes を押してください。ルートは `/`、Deploy command は `npx wrangler deploy` のまま。既存の Durable Object `ROOMS` と migration `v1` を変更していません。新規プロジェクトや課金プランは不要です。デプロイの成功と production URL を確認してください。

正常時の確認先: https://monster-explore-server.floral-mountain-c1f7.workers.dev/health

期待値: {"ok":true,"version":"0.16","mode":"friend-battle","protocol":1}

次にゲーム本体のリポジトリに Ver.0.15 の `index.html` と `sw.js` を上書きします。音源や画像、育成記録は変更しません。2台でゲームを開き、通信対戦ボタンから6桁コードで接続し、横画面で両者が準備完了してください。

## ベータ仕様
- 仲間のモンスターIDだけを送信し、Lv.1相当の基礎能力で戦います。サーバーが移動・射程・発動・クールタイム・ダメージ・HP・勝敗を判定。4番目は相手に有効な対策技。障害物なしのコロシアム、120秒、時間切れはHP残存割合で決着（同率は引き分け）。入力は約12回/秒/人。両者の入力イベントでシミュレーションを進めます。永続的なタイマーは起動しません。
- 特殊移動、補助技、SP技、既存の全モーション・ゴング演出、育成レベル反映は未搭載。戦闘は独立した簡易エンジンです。EXP・捕獲・育成記録・優勝記録への反映なし。切断・停止・再起動時は中断。再戦は新しい部屋を作る方式です。
- 6桁コードは認証ではなく、ブラウザのOrigin制限も所有モンスターの真正性を保証しません。身内での試験に限定し、他人にコードを公開しないでください。公開ランク戦、サーバー保存、アカウント認証なし。GPS、セーブデータ全体は送信しません。
- Workers無料枠の制限はアカウントの現行プランを確認してください。実機2台・Cloudflare本番通信は未検証。ローカルでの戦闘ロジック、2ブラウザ模擬通信（実際のWorker処理を模擬ランタイムで実行）を確認済み。
