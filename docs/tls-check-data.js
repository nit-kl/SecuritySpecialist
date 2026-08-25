// Check! SSL/TLS 7問
const checkTlsData = [
    {
        q: "【Q1】 SSL/TLS にはどのような機能があるか。",
        ans: `
            <span class="check-category-badge badge-isms">SSL/TLS の機能</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>機密性</strong>：通信内容を暗号化し，盗聴を防ぐ</li>
                    <li><strong>完全性</strong>：改ざんを検知する（MAC／AEAD）</li>
                    <li><strong>認証</strong>：主にサーバ証明書で相手の正当性を確認（クライアント認証も可能）</li>
                    <li>アプリケーションに依存せず，HTTP（HTTPS）やメールなど広く利用される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 SSL/TLS はどのようなプロトコルから構成されるか。",
        ans: `
            <span class="check-category-badge badge-isms">構成プロトコル</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ハンドシェイクプロトコル</strong>：暗号スイートの合意，認証，鍵交換</li>
                    <li><strong>レコードプロトコル</strong>：アプリデータを分割・圧縮・暗号化して転送</li>
                    <li><strong>アラートプロトコル</strong>：エラーや接続終了を通知</li>
                    <li><strong>Change Cipher Spec</strong>（TLS 1.2 まで）：暗号パラメータ切替の合図（TLS 1.3 では廃止）</li>
                </ul>
                <p style="margin-top:0.75rem;">アプリケーション層とトランスポート層（主に TCP）の間で動作します。</p>
            </div>
        `
    },
    {
        q: "【Q3】 TLS 1.3 ではどのような手順でハンドシェイクを行うか。",
        ans: `
            <span class="check-category-badge badge-isms">TLS 1.3 ハンドシェイク</span>
            <div class="check-measure-box">
                <ol>
                    <li>クライアントが ClientHello（対応暗号スイート，鍵共有情報など）を送る</li>
                    <li>サーバが ServerHello，証明書，鍵共有，Finished などを返す</li>
                    <li>クライアントが Finished を送り，以降はアプリケーションデータを暗号化通信</li>
                </ol>
                <p style="margin-top:0.75rem;">往復が 1-RTT に短縮され，0-RTT（早期データ）も可能です。弱い暗号（RSA 鍵交換，CBC 等）は廃止され，前方秘匿性のある鍵交換が基本です。</p>
            </div>
        `
    },
    {
        q: "【Q4】 認証付き暗号 (AEAD) とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">AEAD</span>
            <div class="check-measure-box">
                <p><strong>AEAD</strong>（Authenticated Encryption with Associated Data）は，暗号化と認証（改ざん検知）を一体で行う暗号モードです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>例：AES-GCM，ChaCha20-Poly1305</li>
                    <li>関連データ（ヘッダ等）も認証対象に含められる</li>
                    <li>TLS 1.3 の暗号スイートは AEAD ＋ ハッシュの組で構成される</li>
                    <li>暗号化だけ・MAC だけの組み合わせより実装ミスが減りやすい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 SSL-VPN は IPsec VPN と比較してどのようなメリットがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">SSL-VPN のメリット</span>
            <div class="check-measure-box">
                <ul>
                    <li>専用クライアントソフトが不要，または導入が軽い（ブラウザ利用も可能）</li>
                    <li>ファイアウォールで HTTPS（443）が通りやすく，通過しやすい</li>
                    <li>アプリケーション単位のアクセス制御がしやすい（ポータル型）</li>
                    <li>リモートアクセス用途で運用・展開が比較的容易</li>
                </ul>
                <p style="margin-top:0.75rem;">一方，サイト間の常時接続やネットワーク層全体の保護は IPsec が向くことが多いです。</p>
            </div>
        `
    },
    {
        q: "【Q6】 SSL-VPN を Web 以外のアプリケーションで使用する場合にはどのような留意点があるか。",
        ans: `
            <span class="check-category-badge badge-isms">Web 以外での留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>ブラウザだけでは足りず，クライアントソフトやプラグインが必要になることがある</li>
                    <li>アプリが SSL-VPN のポートフォワーディング／トンネルに対応しているか確認が必要</li>
                    <li>プロトコルやポートの制限で一部機能が動かないことがある</li>
                    <li>端末側の設定・権限・証明書配布の運用負荷が増える</li>
                    <li>パフォーマンスや同時接続数の設計に注意する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 HSTS 機構とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">HSTS</span>
            <div class="check-measure-box">
                <p><strong>HSTS</strong>（HTTP Strict Transport Security）は，一度アクセスしたサイトについて，以降の一定期間は HTTPS のみで接続するようブラウザに指示する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>サーバが <code>Strict-Transport-Security</code> ヘッダで <code>max-age</code>（秒）を指定</li>
                    <li>HTTP へのダウングレードや SSL ストリッピング攻撃を防ぐ</li>
                    <li>サブドメインも含める場合は <code>includeSubDomains</code> を付ける</li>
                </ul>
            </div>
        `
    }
];
