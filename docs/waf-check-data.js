// Check! WAF 5問
const checkWafData = [
    {
        q: "【Q1】 WAF とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">WAF</span>
            <div class="check-measure-box">
                <p><strong>WAF</strong>（Web Application Firewall）は，Web アプリケーションへの HTTP／HTTPS 通信を検査し，XSS・SQL インジェクション・OS コマンドインジェクションなどの<strong>アプリケーション層攻撃を検知・遮断</strong>する製品・サービスです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ネットワーク FW や IPS では防ぎにくい Web 固有の攻撃に特化</li>
                    <li>リクエスト／レスポンスの内容（パラメータ，ヘッダ，本文）を解析</li>
                    <li>オンプレミス機器，クラウド型，ホスト型など形態がある</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 WAF にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">WAF の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ネットワーク型（アプライアンス）</strong>：通信経路上に設置し，通過トラフィックを検査</li>
                    <li><strong>ホスト型（ソフトウェア）</strong>：Web サーバ上にエージェント等を導入</li>
                    <li><strong>クラウド型（WaaS）</strong>：DNS やリバースプロキシ経由でクラウド上の WAF に誘導</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">検知方式としてはシグネチャ型・ホワイトリスト型・学習型などもあります。</p>
        `
    },
    {
        q: "【Q3】 WAF を用いることで何ができるのか。",
        ans: `
            <span class="check-category-badge badge-isms">WAF の効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>XSS，SQL インジェクション，ディレクトリトラバーサルなどの<strong>既知 Web 攻撃の遮断</strong></li>
                    <li>不正な HTTP パラメータ・ヘッダの検出</li>
                    <li>アプリケーション改修前の暫定防御（仮想パッチ）</li>
                    <li>ボットやスキャナによる大量不正アクセスの抑制</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 WAF ではどのようにして攻撃を遮断するのか。",
        ans: `
            <span class="check-category-badge badge-isms">遮断の仕組み</span>
            <div class="check-measure-box">
                <ul>
                    <li>シグネチャやルールに合致したリクエストを<strong>ドロップ／拒否応答</strong></li>
                    <li>許可しない文字列・パターンをパラメータ中から検出して遮断</li>
                    <li>ホワイトリスト（許可通信のみ通過）による厳格な制御</li>
                    <li>異常スコアに基づくブロック，セッション遮断など</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">クライアントと Web サーバの間（リバースプロキシ等）で HTTP を終端・検査する構成が一般的です。</p>
        `
    },
    {
        q: "【Q5】 WAF の導入や運用において考慮すべき課題としては何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">導入・運用の課題</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>フォールスポジティブ</strong>（正規通信の誤遮断）とチューニング負荷</li>
                    <li><strong>フォールスネガティブ</strong>（検知漏れ）への対策不足</li>
                    <li>暗号化通信の検査（証明書・鍵管理）</li>
                    <li>アプリ改修に伴うルール更新，シグネチャの陳腐化</li>
                    <li>レイテンシ増加，単一障害点，コスト</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">検知モードから段階導入し，ログ監視とアプリ側セキュアコーディングを併用することが重要です。</p>
        `
    }
];
