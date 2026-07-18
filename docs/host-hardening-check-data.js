// Check! ホストの要塞化 5問
const checkHostHardeningData = [
    {
        q: "【Q1】 ホストの要塞化とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">ホスト要塞化（Hardening）</span>
            <div class="check-measure-box">
                <p>サーバやクライアントなどのホストについて，攻撃に利用され得る機能や設定を見直し，<strong>攻撃対象領域（Attack Surface）を最小化</strong>して安全性を高めることです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>不要なサービス・ポート・ソフトウェアの停止／削除</li>
                    <li>セキュリティパッチの適用</li>
                    <li>アカウント・権限・認証設定の強化</li>
                    <li>ファイアウォール，ログ監視，マルウェア対策の有効化</li>
                    <li>安全なベースラインに基づく設定と継続的な見直し</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 なぜ，ホストの要塞化が重要なのか。",
        ans: `
            <span class="check-category-badge badge-isms">要塞化の重要性</span>
            <div class="check-measure-box">
                <ul>
                    <li>既定設定や不要機能に残る<strong>脆弱性・設定不備</strong>の悪用を防ぐ</li>
                    <li>侵入経路を減らし，攻撃の成功確率を下げる</li>
                    <li>侵害された場合の<strong>権限昇格・横展開</strong>を抑制する</li>
                    <li>多層防御の一層として，ネットワーク境界防御をすり抜けた攻撃に備える</li>
                    <li>標準設定を統一し，監査・構成管理・インシデント調査を容易にする</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">導入時だけでなく，脅威や構成の変化に合わせて<strong>継続的に維持</strong>する必要があります。</p>
        `
    },
    {
        q: "【Q3】 ホストの要塞化の具体的な実施項目として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">実施項目</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>構成・機能</h4>
                    <ul>
                        <li>不要なサービス，ポート，プロトコルの無効化</li>
                        <li>不要なアプリケーション・デフォルトコンテンツの削除</li>
                        <li>OS・ミドルウェア・アプリケーションの更新</li>
                        <li>ホスト型ファイアウォール，EDR，マルウェア対策の導入</li>
                        <li>安全な暗号方式・通信プロトコルへの限定</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>認証・運用</h4>
                    <ul>
                        <li>不要・既定アカウントの無効化</li>
                        <li>最小権限，特権IDの分離，多要素認証</li>
                        <li>ファイル・ディレクトリのアクセス権設定</li>
                        <li>監査ログの取得，保護，集中管理</li>
                        <li>CIS Benchmarks などを用いた設定点検</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q4】 パッチ適用における注意事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">パッチ管理</span>
            <div class="check-measure-box">
                <ul>
                    <li>資産・バージョン・適用状況を把握し，脆弱性の<strong>深刻度と悪用状況</strong>から優先順位を決める</li>
                    <li>提供元・電子署名・ハッシュを確認し，正規のパッチを使用する</li>
                    <li>本番適用前に検証環境で<strong>互換性・性能・副作用</strong>を確認する</li>
                    <li>バックアップと<strong>ロールバック手順</strong>を準備する</li>
                    <li>停止時間・業務影響を考慮し，関係者への周知と変更管理を行う</li>
                    <li>適用後に再起動の要否，バージョン，動作，脆弱性解消を確認する</li>
                    <li>直ちに適用できない場合は，アクセス制限などの<strong>代替策</strong>を講じる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 アカウント及びパスワードの設定における注意事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">アカウント・パスワード管理</span>
            <div class="check-measure-box">
                <ul>
                    <li>利用者ごとに<strong>個別アカウント</strong>を発行し，共有を避ける</li>
                    <li>不要・退職者・長期未使用アカウントを速やかに無効化する</li>
                    <li>既定アカウントの無効化・名称変更・初期パスワード変更を行う</li>
                    <li><strong>最小権限</strong>を徹底し，管理者用と通常作業用のアカウントを分離する</li>
                    <li>十分な長さのパスフレーズを用い，使い回し・推測容易な文字列を禁止する</li>
                    <li>多要素認証，ログイン試行回数制限，適切なロックアウトを設定する</li>
                    <li>パスワードは平文で保存せず，ソルト付きの安全なハッシュで保護する</li>
                    <li>定期変更の一律強制より，漏えい・侵害時の即時変更と漏えい済みパスワードの排除を重視する</li>
                </ul>
            </div>
        `
    }
];
