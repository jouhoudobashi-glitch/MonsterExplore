# MONSTER EXPLORE SERVER 0.17

通信対戦の全画面版（ゲーム0.17、protocol 2）に対応。旧0.16/旧protocol 1とは通信対戦の互換性がありません。既存の接続試験 `/` と `/room/` はそのまま利用できます。

## 更新
既存の非公開 monster-explore-server リポジトリの main 直下に index.js、battle.js、package.json、wrangler.jsonc、README.md を上書き・追加してコミット。CloudflareのDeploymentsの成功を確認してください。既存の ROOMS、SQLite migration、公開URLは変更していません。
https://monster-explore-server.floral-mountain-c1f7.workers.dev/health
期待値: {"ok":true,"version":"0.17","mode":"friend-battle","protocol":2}
その後、ゲーム本体 MonsterExplore の index.html と sw.js をVer.0.17に更新し、両端末で再読み込みしてください。

## 仕様
- Lv.1固定フェアバトル。通常戦のモンスター・技カタログ、通常技4枠、選択式補助技5種類、発動前硬直、クールタイム、移動倍率、相性、急所、ノックバック、近接接触技を参考にサーバーの対戦ルールを更新。CPU補正なし、制限時間180秒、同率なら引き分け。障害物なし・対称移動範囲。
- 既存ゲームの描画関数を通信戦に流用。サーバーが位置・攻撃・HP・勝敗を管理するため描画や入力は同期用アダプター経由。演算・演出の完全一致ではない。SPはLv.1につき未習得、特殊移動（CPU向け）なし、育成レベル・EXP反映なし。
- 6桁コード式、2人、切断時中断、GPSやセーブ本体は送信しない。コードは認証ではなく所有モンスターの真正性を保証する仕組みは未実装。家族や友人同士の試験向け。公開ランキングなし。
- 実Cloudflare通信およびスマホ実機未試験。ローカルNode試験と2ブラウザの模擬Worker通信で動作検証。
