// Check! Trusted OS 3問
const checkTrustedOsData = [
    {
        q: "【Q1】 Trusted OS とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">Trusted OS</span>
            <div class="check-measure-box">
                <p><strong>Trusted OS（信頼できる OS）</strong>とは，高いセキュリティ要件を満たすよう設計・評価されたオペレーティングシステムです。機密性の高い情報を扱う環境向けに，強制的なアクセス制御や監査機能などを強化しています。</p>
                <ul style="margin-top:0.75rem;">
                    <li>セキュリティポリシに基づく<strong>強制アクセス制御（MAC）</strong></li>
                    <li>利用者・プロセス・オブジェクトの<strong>識別と監査</strong></li>
                    <li>権限分離，最小権限，改ざん検知などの強化</li>
                    <li>評価保証（例：Common Criteria）を意識した設計・実装</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 通常の OS とはどのような点が異なるか。",
        ans: `
            <span class="check-category-badge badge-isms">通常 OS との違い</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>通常の OS</h4>
                    <ul>
                        <li>主に<strong>DAC</strong>（任意アクセス制御）中心</li>
                        <li>所有者や管理者が権限を柔軟に付与</li>
                        <li>利便性・汎用性を重視</li>
                        <li>管理者権限が広範で，侵害時の影響が大きい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>Trusted OS</h4>
                    <ul>
                        <li><strong>MAC</strong>によりポリシを強制し，所有者でも勝手に権限を緩めにくい</li>
                        <li>役割・ラベルに基づく厳密なアクセス制御</li>
                        <li>監査・完全性保護・分離機能が強化</li>
                        <li>セキュリティ機能そのものの保護（TCR／TCB の考え方）</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「誰が許可したか」だけでなく，「ポリシ上許可されているか」を OS が強制する点が大きな違いです。</p>
        `
    },
    {
        q: "【Q3】 SELinux は通常の Linux とどのような点が異なるのか。",
        ans: `
            <span class="check-category-badge badge-isms">SELinux</span>
            <div class="check-measure-box">
                <p><strong>SELinux</strong>（Security-Enhanced Linux）は，Linux カーネルに組み込まれた強制アクセス制御（MAC）機能です。通常の Linux（主に DAC）に加え，セキュリティコンテキスト（ラベル）に基づいてプロセスとリソースのアクセスを制限します。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ファイル・プロセス・ポートなどに<strong>タイプ／役割／ユーザー</strong>のラベルを付与</li>
                    <li>ポリシにない操作は，root でも原則拒否される</li>
                    <li>侵害されたプロセスの<strong>権限昇格・横展開</strong>を抑制</li>
                    <li>Enforcing／Permissive／Disabled などの動作モードがある</li>
                    <li>通常 Linux の「所有者権限」だけでは防げないアクセスを OS 側で強制制御する</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">SELinux は Trusted OS の考え方を Linux に取り入れた実装の代表例です。</p>
        `
    }
];
