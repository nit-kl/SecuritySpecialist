// Check! Webセキュリティ 8問
const checkWebSecData = [
    {
        q: "【Q1】 セッション管理に関する脆弱性にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-web">セッション管理の脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>セッション ID の推測・固定化</strong>：規則性のある ID、認証前後で ID を再生成しない</li>
                    <li><strong>セッション ID の漏洩</strong>：URL パラメータ送信、HTTP 平文通信、Referer 経由の漏えい</li>
                    <li><strong>Cookie 属性の不備</strong>：HttpOnly / Secure / SameSite 未設定</li>
                    <li><strong>セッション有効期限の不適切な設定</strong>：タイムアウトなし、ログアウト時に無効化しない</li>
                    <li><strong>セッション ID の再利用</strong>：ログアウト後も同一 ID が有効</li>
                    <li><strong>XSS 等との組合せ</strong>：Cookie 窃取によるセッションハイジャック</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 セキュリティを考慮したセッション管理とはどのようなものか。",
        ans: `
            <span class="check-category-badge badge-web">セキュアなセッション管理</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>セッション ID の管理</h4>
                    <ul>
                        <li>十分な長さの<strong>暗号学的乱数</strong>で生成</li>
                        <li>認証成功時に<strong>セッション ID を再生成</strong></li>
                        <li>URL に含めず <strong>Cookie のみ</strong>で送信</li>
                        <li>適切な<strong>タイムアウト</strong>とログアウト時の無効化</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>通信・Cookie 属性</h4>
                    <ul>
                        <li><strong>HTTPS（TLS）</strong>による通信の暗号化</li>
                        <li>Cookie：<strong>HttpOnly, Secure, SameSite</strong></li>
                        <li>重要操作前の<strong>再認証</strong></li>
                        <li>セッション固定化・ハイジャック対策の多層防御</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q3】 CSRF によってどのような問題が発生し、どのような対策があるのか。",
        ans: `
            <span class="check-category-badge badge-web">CSRF</span>
            <div class="check-measure-box">
                <h4>発生する問題</h4>
                <ul>
                    <li>認証済みユーザーのブラウザから<strong>意図しないリクエスト</strong>を送らせる</li>
                    <li>決済・送金・パスワード変更・設定変更等の<strong>不正操作</strong></li>
                    <li>被害者のセッション Cookie が自動送信されるため，サーバは正規ユーザーの操作と区別しにくい</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>対策</h4>
                <ul>
                    <li><strong>CSRF トークン</strong>（ワンタイムトークン）：レスポンスに含め，リクエスト時に照合</li>
                    <li><strong>Referer / Origin ヘッダ</strong>の検証</li>
                    <li>重要操作の<strong>再パスワード入力</strong></li>
                    <li>Cookie の <strong>SameSite</strong> 属性（Strict / Lax）</li>
                    <li>重要操作後の<strong>確認メール送信</strong></li>
                    <li>副作用のある操作は <strong>GET ではなく POST</strong> 等で実装</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">※ HTML エスケープは XSS 対策であり，CSRF 対策としては効果がない。</p>
        `
    },
    {
        q: "【Q4】 HTTP のプロトコルの仕様にはどのような脆弱性があるか。",
        ans: `
            <span class="check-category-badge badge-web">HTTP プロトコルの脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>平文通信</strong>：盗聴・改ざんが容易（機密性・完全性がない）</li>
                    <li><strong>ステートレス</strong>：セッション管理をアプリ側に委ね，実装ミスが起きやすい</li>
                    <li><strong>送信元の真正性がない</strong>：IP・ヘッダの偽装，リクエストのなりすまし</li>
                    <li><strong>GET に副作用操作</strong>を実装すると CSRF 等のリスク増大</li>
                    <li><strong>Host ヘッダ</strong>の検証不備によるキャッシュポイズニング等</li>
                    <li>HTTP/1.x の<strong>ヘッダインジェクション</strong>（CRLF インジェクション）</li>
                    <li>古いプロトコル（HTTP/0.9 等）や<strong>弱い TLS</strong>の許容</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">対策の基本は <strong>HTTPS（TLS）の全面利用</strong>と安全な実装です。</p>
        `
    },
    {
        q: "【Q5】 Web サーバの実装や設定の不備による脆弱性にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-web">Web サーバの脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ディレクトリリスティング</strong>：ディレクトリ内容の一覧表示</li>
                    <li><strong>デフォルトページ・サンプル CGI</strong>の放置</li>
                    <li><strong>不要な HTTP メソッド</strong>（PUT, DELETE, TRACE 等）の有効化</li>
                    <li><strong>バージョン情報の露出</strong>（Server ヘッダ等）</li>
                    <li><strong>設定ファイル・バックアップ</strong>（.bak, .htaccess 等）への外部アクセス</li>
                    <li><strong>仮想ホスト設定ミス</strong>，アクセス制御（ACL）の不備</li>
                    <li><strong>既知の脆弱性</strong>を持つ Web サーバソフトの未パッチ</li>
                    <li><strong>SSL/TLS 設定の不備</strong>（弱い暗号スイート，古いプロトコル）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 Web サーバに対する不正アクセスを防ぐためにはどのような対策が有効か。",
        ans: `
            <span class="check-category-badge badge-web">Web サーバの防御</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>設定・構成</h4>
                    <ul>
                        <li>最新パッチ適用，<strong>最小権限</strong>での実行</li>
                        <li>ディレクトリリスティング無効化</li>
                        <li>不要なモジュール・CGI・メソッドの<strong>無効化</strong></li>
                        <li>Server ヘッダ等の<strong>バージョン情報非表示</strong></li>
                        <li><strong>アクセス制御</strong>（IP 制限，Basic 認証，管理画面の分離）</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>通信・監視</h4>
                    <ul>
                        <li><strong>HTTPS</strong>の強制，HSTS の利用</li>
                        <li><strong>WAF</strong>による不正リクエストの遮断</li>
                        <li>ログの取得・<strong>監視</strong>，IDS/IPS</li>
                        <li>DMZ 配置，ファイアウォールによるポート制限</li>
                        <li>定期的な<strong>脆弱性診断</strong></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q7】 Web アプリケーションの仕様や実装による脆弱性にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-web">Web アプリの脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>インジェクション</strong>：SQLi，OS コマンド，LDAP，XPath 等</li>
                    <li><strong>XSS</strong>（反射型・格納型・DOM-based）</li>
                    <li><strong>CSRF</strong>，<strong>クリックジャッキング</strong></li>
                    <li><strong>認可の不備</strong>（IDOR，水平・垂直権限昇格）</li>
                    <li><strong>セッション管理の不備</strong>，<strong>セッション固定化</strong></li>
                    <li><strong>ディレクトリトラバーサル</strong>，<strong>ファイルアップロード</strong>の不備</li>
                    <li><strong>SSRF</strong>，<strong>XXE</strong>，<strong>デシリアライゼーション</strong>の脆弱性</li>
                    <li><strong>エラーメッセージ</strong>による情報漏えい，<strong>デバッグ機能</strong>の本番残留</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">OWASP Top 10 等が代表的な分類の参考になります。</p>
        `
    },
    {
        q: "【Q8】 Web アプリケーションによる情報漏えいとしてどのようなケースが想定されるか。",
        ans: `
            <span class="check-category-badge badge-web">情報漏えいのケース</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>SQL インジェクション</strong>による DB 内容の窃取</li>
                    <li><strong>ディレクトリトラバーサル</strong>による設定ファイル・ソースコードの取得</li>
                    <li><strong>エラーメッセージ</strong>（スタックトレース，SQL 文）の表示</li>
                    <li><strong>認可不備</strong>による他ユーザーデータへの不正アクセス</li>
                    <li><strong>バックアップファイル</strong>（.sql, .zip 等）の Web 公開</li>
                    <li><strong>API キー・認証情報</strong>のハードコードや Git へのコミット</li>
                    <li><strong>ログファイル</strong>への個人情報記録と外部からの閲覧</li>
                    <li><strong>キャッシュ</strong>（共有 PC，プロキシ）への機密ページの残留</li>
                    <li><strong>HTTP 平文通信</strong>による通信内容の盗聴</li>
                </ul>
            </div>
        `
    }
];
