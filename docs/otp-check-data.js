// Check! ワンタイムパスワード 9問
const checkOtpData = [
    {
        q: "【Q1】 ワンタイムパスワード方式とはどのようなものか。",
        ans: `
            <span class="check-category-badge badge-isms">ワンタイムパスワード（OTP）</span>
            <div class="check-measure-box">
                <p><strong>ワンタイムパスワード</strong>は，認証のたびに異なる使い捨てパスワードを用いる方式です。一度使ったパスワードは再利用できません。</p>
                <ul style="margin-top:0.75rem;">
                    <li>盗聴・リプレイ攻撃への耐性が，固定パスワードより高い</li>
                    <li>知識要素や所有物要素（トークン・スマホ）と組み合わせて使われる</li>
                    <li>二要素認証の一要素としても広く利用される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 ワンタイムパスワードを実現する手法としてどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">実現手法の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>チャレンジレスポンス方式</strong>：サーバが乱数（チャレンジ）を送り，クライアントが演算結果（レスポンス）を返す</li>
                    <li><strong>S/Key</strong>：ハッシュの連鎖により使い捨てパスワードを生成</li>
                    <li><strong>時間同期式トークン</strong>（TOTP 等）：時刻と秘密鍵から生成</li>
                    <li><strong>イベント同期式／カウンタ同期式</strong>（HOTP 等）：利用回数に応じて生成</li>
                    <li>SMS／メール／アプリ通知によるワンタイムコード配信</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 チャレンジレスポンス方式では，なぜパスワードが盗まれにくくなるのか。",
        ans: `
            <span class="check-category-badge badge-isms">盗まれにくい理由</span>
            <div class="check-measure-box">
                <ul>
                    <li>通信路上を流れるのは固定パスワードそのものではなく，<strong>チャレンジとパスワードから計算したレスポンス</strong></li>
                    <li>チャレンジは毎回変わるため，傍受したレスポンスをそのまま再利用できない（リプレイ耐性）</li>
                    <li>盗聴者がレスポンスを得ても，元のパスワードを直ちに復元しにくい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 チャレンジレスポンス方式ではセキュリティ上の問題は発生しないのか。",
        ans: `
            <span class="check-category-badge badge-isms">残るリスク</span>
            <div class="check-measure-box">
                <ul>
                    <li>サーバ側にパスワード（または等価な秘密）が保存されていれば，サーバ侵害で漏えいする</li>
                    <li>中間者攻撃でチャレンジ／レスポンスを改ざん・詐取される可能性</li>
                    <li>クライアント側マルウェアによるパスワード入力の盗取</li>
                    <li>弱いハッシュや実装不備があると総当たり・オフライン解析のリスク</li>
                    <li>チャレンジの予測可能性や再利用を許す実装は危険</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「盗聴耐性が上がる」のであって，万能ではありません。</p>
        `
    },
    {
        q: "【Q5】 S/Key ではどのようにしてワンタイムパスワードを生成するのか。",
        ans: `
            <span class="check-category-badge badge-isms">S/Key の生成</span>
            <div class="check-measure-box">
                <p>S/Key は，パスフレーズとシードからハッシュを繰り返し適用した<strong>ハッシュ連鎖</strong>で使い捨てパスワードを作ります。</p>
                <ul style="margin-top:0.75rem;">
                    <li>クライアントは，シーケンス番号に応じた回数だけハッシュした値を OTP として送信</li>
                    <li>サーバは受け取った OTP をさらにハッシュし，保持している<strong>前回の OTP</strong>と比較して認証</li>
                    <li>認証成功後，サーバは保持値を今回の OTP に更新する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 S/Key を使用する場合にセキュリティ上留意すべき事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">S/Key の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>シーケンス番号が尽きる前に再初期化（リキー）が必要</li>
                    <li>初期設定時のパスフレーズ・シードの保護</li>
                    <li>リストに印刷した OTP を紛失・盗取されないよう管理する</li>
                    <li>中間者攻撃や端末マルウェアへの対策は別途必要</li>
                    <li>ハッシュアルゴリズムの強度と実装の正しさ</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 トークンによるワンタイムパスワード方式（時間同期式）はどのようにしてパスワードを生成するのか。",
        ans: `
            <span class="check-category-badge badge-isms">時間同期式トークン</span>
            <div class="check-measure-box">
                <p>トークンと認証サーバが共有する<strong>秘密鍵</strong>と，現在時刻（時間枠）を入力としてワンタイムパスワードを生成します（TOTP など）。</p>
                <ul style="margin-top:0.75rem;">
                    <li>一定間隔（例：30 秒）ごとに表示が変わる</li>
                    <li>サーバも同じ秘密鍵と時刻で検証用 OTP を計算し照合する</li>
                    <li>時計のずれに対し，前後の時間枠を許容する実装が多い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 認証サーバの運用上考慮すべき事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">認証サーバの運用</span>
            <div class="check-measure-box">
                <ul>
                    <li>秘密鍵・パスフレーズ・シード等の厳重な保護とバックアップ</li>
                    <li>時刻同期（NTP）の維持（時間同期式 OTP では特に重要）</li>
                    <li>冗長化・可用性の確保，障害時の代替認証手段</li>
                    <li>ログ監視，不正試行の検知，アカウントロック方針</li>
                    <li>利用者登録・失効・再発行の手続整備</li>
                    <li>サーバ自体の要塞化と特権管理</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 トークンの運用管理上考慮すべき事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">トークンの運用管理</span>
            <div class="check-measure-box">
                <ul>
                    <li>配布・回収・廃棄の管理，所有者の紐付け</li>
                    <li>紛失・盗難時の迅速な失効と再発行</li>
                    <li>電池切れ・故障への対応手順</li>
                    <li>初期シードの安全な配布（平文メール等を避ける）</li>
                    <li>貸与・共有の禁止，棚卸しの実施</li>
                    <li>利用者教育（覗き見防止，保管方法）</li>
                </ul>
            </div>
        `
    }
];
