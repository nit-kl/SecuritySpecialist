// Check! ソフトウェア開発工程のセキュリティ 6問
const checkSdlcSecurityData = [
    {
        q: "【Q1】 要件定義工程において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">要件定義</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>セキュリティ要求の明確化</strong>：機密性・完全性・可用性，非否認性などの要求を定義</li>
                    <li><strong>法令・規制・契約</strong>：個人情報保護法，業界規制，SLA 等の遵守要求を洗い出す</li>
                    <li><strong>脅威・リスクの初期評価</strong>：想定利用者，データ分類，攻撃シナリオの整理</li>
                    <li><strong>セキュリティポリシ・基準</strong>：組織の方針・基準への適合を確認</li>
                    <li><strong>セキュリティ機能要求</strong>：認証，認可，暗号化，ログ，監査証跡などを要求に含める</li>
                    <li>ステークホルダーとの合意，トレーサビリティの確保</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 システム方式設計工程において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">システム方式設計</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>セキュリティアーキテクチャ</strong>：多層防御，ネットワーク分割（DMZ 等）の設計</li>
                    <li><strong>認証・認可方式</strong>：ID 管理，SSO，RBAC 等の選定</li>
                    <li><strong>暗号・鍵管理</strong>：TLS，データ暗号化，鍵ライフサイクルの方針</li>
                    <li><strong>セキュリティ製品選定</strong>：FW，WAF，IDS/IPS 等の配置方針</li>
                    <li><strong>可用性・冗長化</strong>：単一障害点の排除，BC/DR の考慮</li>
                    <li>セキュリティ要求と設計の<strong>トレーサビリティ</strong>確認</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 ユーザインタフェース設計／システム構造設計／プログラム構造設計工程において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">詳細設計</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>UI 設計</strong>：入力値検証，エラー表示の情報漏えい防止，セッション管理</li>
                    <li><strong>システム構造設計</strong>：最小権限，職務分離，モジュール間の信頼境界</li>
                    <li><strong>プログラム構造設計</strong>：セキュアコーディングガイドラインの適用</li>
                    <li>インタフェース定義，API の認証・認可設計</li>
                    <li>ログ・監査証跡の設計，機密データの扱い</li>
                    <li>設計レビュー（脅威モデリング，ウォークスルー）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 システム基盤構築／プログラミング／プログラムテスト工程において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">実装・単体テスト</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>基盤構築</strong>：OS・ミドルウェアのセキュア設定（ハードニング），不要サービスの停止</li>
                    <li><strong>プログラミング</strong>：セキュアコーディング，入力値検証，エスケープ，パラメータ化</li>
                    <li><strong>静的解析・コードレビュー</strong>：脆弱性パターンの検出</li>
                    <li><strong>プログラムテスト</strong>：境界値，異常系，セキュリティ機能の単体テスト</li>
                    <li>依存ライブラリの脆弱性確認，秘密情報のハードコード禁止</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 結合テスト／システムテスト／運用テスト・移行工程において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">結合・システム・移行</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>結合テスト</strong>：認証・認可連携，暗号通信，ログ出力の結合確認</li>
                    <li><strong>システムテスト</strong>：セキュリティ要求の充足確認，性能・負荷下のセキュリティ</li>
                    <li><strong>脆弱性診断・ペネトレーションテスト</strong>：外部からの攻撃シミュレーション</li>
                    <li><strong>運用テスト・移行</strong>：本番同等環境での設定確認，データ移行時の機密性確保</li>
                    <li>受入テスト，セキュリティチェックリストによる最終確認</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 本番移行後（運用・保守）において実施すべきセキュリティ対策について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">運用・保守</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>パッチ管理</strong>：OS，ミドルウェア，アプリの脆弱性対応</li>
                    <li><strong>ログ監視・インシデント対応</strong>：SIEM，アラート，インシデント手順</li>
                    <li><strong>設定変更管理</strong>：変更の承認，影響評価，ロールバック</li>
                    <li><strong>定期監査・脆弱性診断</strong>：継続的なセキュリティ評価</li>
                    <li><strong>バックアップ・復旧</strong>：BC/DR，復旧テスト</li>
                    <li>アクセス権の定期見直し，退職者アカウント削除，セキュリティ教育</li>
                </ul>
            </div>
        `
    }
];
