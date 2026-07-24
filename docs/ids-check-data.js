// Check! IDS 5問
const checkIdsData = [
    {
        q: "【Q1】 IDS とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">IDS</span>
            <div class="check-measure-box">
                <p><strong>IDS</strong>（Intrusion Detection System：侵入検知システム）は，ネットワークやホスト上の通信・ログ・動作を監視し，<strong>不正な侵入や異常な挙動を検知</strong>して管理者に通知する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>主に<strong>検知・通知</strong>が目的（遮断は IPS の役割）</li>
                    <li>シグネチャ（既知攻撃）と異常検知（ベースラインからの逸脱）などの手法</li>
                    <li>ログ分析，アラート生成，SOC 連携などに活用</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 NIDS でどのような事象が検知できるのか。",
        ans: `
            <span class="check-category-badge badge-isms">NIDS（Network IDS）</span>
            <div class="check-measure-box">
                <ul>
                    <li>ネットワーク上を流れる<strong>不正パケット・攻撃トラフィック</strong>（ポートスキャン，DoS 兆候など）</li>
                    <li>既知攻撃パターン（シグネチャ一致）</li>
                    <li>プロトコル異常，大量通信，不審な通信先</li>
                    <li>横展開の兆候（内部ネットワーク間の不審通信）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">スイッチのミラーポートや TAP などで<strong>通信を傍受</strong>して解析します。</p>
        `
    },
    {
        q: "【Q3】 HIDS でどのような事象が検知できるのか。",
        ans: `
            <span class="check-category-badge badge-isms">HIDS（Host IDS）</span>
            <div class="check-measure-box">
                <ul>
                    <li>ホスト上の<strong>ログイン失敗，権限昇格，設定変更</strong></li>
                    <li>重要ファイルの改ざん，レジストリ変更</li>
                    <li>不審プロセスの起動，ルートキットの兆候</li>
                    <li>OS・ミドルウェアのログ異常</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">サーバや端末<strong>内部</strong>の挙動を詳細に監視できるのが強みです。</p>
        `
    },
    {
        q: "【Q4】 NIDS と HIDS はどう違うのか。",
        ans: `
            <span class="check-category-badge badge-isms">NIDS vs HIDS</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>NIDS</h4>
                    <ul>
                        <li>ネットワーク上の通信を監視</li>
                        <li>広範囲を一括監視しやすい</li>
                        <li>暗号化通信の中身は見えにくい</li>
                        <li>ホスト内部の詳細は見えない</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>HIDS</h4>
                    <ul>
                        <li>各ホスト上のログ・ファイル・プロセスを監視</li>
                        <li>内部侵害後の挙動を捉えやすい</li>
                        <li>ホストごとにエージェント導入が必要</li>
                        <li>管理・更新コストがかかる</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">両方を組み合わせることで，境界と内部の両面から検知できます。</p>
        `
    },
    {
        q: "【Q5】 IDS が検知できない攻撃とは何か，それについてはどのような解決策が考えられるか。",
        ans: `
            <span class="check-category-badge badge-isms">検知困難な攻撃と対策</span>
            <div class="check-measure-box">
                <h4>検知しにくい攻撃例</h4>
                <ul>
                    <li>暗号化通信内の攻撃（TLS 内の Web 攻撃など）</li>
                    <li>低速・分散型攻撃，既知シグネチャのないゼロデイ</li>
                    <li>正規認証後の内部犯行，権限を持った正規操作の悪用</li>
                    <li>大量のフォールスネガティブ（見逃し）を招く高度な回避</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>解決策</h4>
                <ul>
                    <li><strong>IPS</strong>，<strong>WAF</strong>，EDR などとの併用</li>
                    <li>ログ相関分析，SIEM，SOAR による多層監視</li>
                    <li>異常検知のチューニング，脅威インテリジェンスの活用</li>
                    <li>ネットワーク分離，最小権限，多要素認証など予防策</li>
                    <li>定期的なルール更新，インシデント対応訓練</li>
                </ul>
            </div>
        `
    }
];
