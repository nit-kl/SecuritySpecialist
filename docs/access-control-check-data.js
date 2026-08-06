// Check! アクセス制御 8問
const checkAccessControlData = [
    {
        q: "【Q1】 アクセス制御は，なぜ必要なのか。",
        ans: `
            <span class="check-category-badge badge-isms">必要性</span>
            <div class="check-measure-box">
                <p>アクセス制御は，情報資産へのアクセスを<strong>正当な主体に限定</strong>し，不正利用・漏えい・改ざん・破壊を防ぐために必要です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>機密性</strong>：権限のない者の閲覧を防ぐ</li>
                    <li><strong>完全性</strong>：不正な変更・削除を防ぐ</li>
                    <li><strong>可用性</strong>：権限のある利用者の利用を妨げない範囲で保護する</li>
                    <li>内部不正・権限乱用・侵害後の横展開を抑制する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 アクセス制御の実施プロセスについて述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">実施プロセス</span>
            <div class="check-measure-box">
                <ol>
                    <li><strong>識別（Identification）</strong>：誰（何）であるかを名乗り，主体を特定する</li>
                    <li><strong>認証（Authentication）</strong>：名乗った主体が本物であることを確認する</li>
                    <li><strong>認可（Authorization）</strong>：認証された主体に，どの資源へ何を許可するかを決定する</li>
                    <li><strong>アクセスの許可／拒否</strong>：ポリシに基づき実際に制御する</li>
                    <li><strong>監査・ログ</strong>：アクセス結果を記録し，事後検証・検知に用いる</li>
                </ol>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「識別 → 認証 → 認可 → 監査」の流れで覚えると整理しやすいです。</p>
        `
    },
    {
        q: "【Q3】 「認可」とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">認可（Authorization）</span>
            <div class="check-measure-box">
                <p><strong>認可</strong>とは，認証済みの主体に対して，対象資源への操作（読取・書込・実行など）を<strong>許可するか拒否するか</strong>を決定することです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>認証＝「本人か」を確認する</li>
                    <li>認可＝「何をしてよいか」を決める</li>
                    <li>ACL，ロール，ポリシ，ラベルなどに基づいて判断する</li>
                    <li>最小権限の原則に従い，必要最小限だけ許可する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 アクセス制御はどのような場所で実施する必要があるか。",
        ans: `
            <span class="check-category-badge badge-isms">実施場所</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ネットワーク境界</strong>：FW，VPN，ゼロトラストゲートウェイ</li>
                    <li><strong>ホスト／OS</strong>：ファイル権限，プロセス権限，ホスト FW</li>
                    <li><strong>アプリケーション</strong>：画面・機能・API・データ単位の権限</li>
                    <li><strong>データベース</strong>：テーブル／行／列レベルの権限</li>
                    <li><strong>物理環境</strong>：入退室管理，ラック施錠</li>
                    <li><strong>クラウド／管理コンソール</strong>：IAM，特権アクセス管理</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">一点だけでは不十分で，多層で実施することが重要です。</p>
        `
    },
    {
        q: "【Q5】 アクセス制御にはどのような方式があるか。",
        ans: `
            <span class="check-category-badge badge-isms">方式の種類</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>DAC（任意アクセス制御）</h4>
                    <ul>
                        <li>資源の所有者が権限を付与・変更できる</li>
                        <li>柔軟だが，権限の拡散や設定ミスに弱い</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>MAC（強制アクセス制御）</h4>
                    <ul>
                        <li>システムがポリシ／ラベルに基づき強制する</li>
                        <li>所有者でも勝手に権限を緩めにくい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>RBAC（ロールベース）</h4>
                    <ul>
                        <li>役割（ロール）に権限を割り当て，利用者にロールを付与</li>
                        <li>組織運用と相性が良く，広く使われる</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>ABAC／その他</h4>
                    <ul>
                        <li>属性（部署，端末，場所，時間など）で動的に判定</li>
                        <li>ルールベース，ACL ベースなども併用される</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q6】 MLS はどのような考え方でアクセス制御を行うのか。",
        ans: `
            <span class="check-category-badge badge-isms">MLS（Multi-Level Security）</span>
            <div class="check-measure-box">
                <p><strong>MLS</strong>は，情報と利用者に<strong>機密区分（セキュリティレベル／ラベル）</strong>を付け，レベルの高低に基づいてアクセスを制御する考え方です。MAC の代表的な適用例です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>例：極秘＞秘密＞社外秘＞公開 などの階層ラベル</li>
                    <li><strong>読取り</strong>：原則として，自分のレベル以下の情報のみ（No Read Up）</li>
                    <li><strong>書込み</strong>：原則として，自分のレベル以上への書込みを制限し，下位への書込みを防ぐ（No Write Down）</li>
                    <li>Bell-LaPadula モデルなどに代表される</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">機密性の高い情報の「上方向の読取り」と「下方向の書込み」を防ぐのが要点です。</p>
        `
    },
    {
        q: "【Q7】 アクセス制御はどのような手順で実施する必要があるか。",
        ans: `
            <span class="check-category-badge badge-isms">実施手順</span>
            <div class="check-measure-box">
                <ol>
                    <li>保護対象の資産と，アクセス主体（人・端末・プロセス）を洗い出す</li>
                    <li>業務上必要な権限を整理し，<strong>最小権限</strong>で許可範囲を定義する</li>
                    <li>制御方式（DAC／MAC／RBAC 等）とポリシを設計する</li>
                    <li>識別・認証・認可の仕組みを実装する（ID 管理，ロール，ACL 等）</li>
                    <li>特権 ID は分離し，申請・承認・期限付き利用にする</li>
                    <li>ログ取得・監視・定期レビューで権限の棚卸しを行う</li>
                    <li>異動・退職・委託終了時に権限を速やかに剥奪する</li>
                </ol>
            </div>
        `
    },
    {
        q: "【Q8】 アクセス制御を実施する上で特に注意すべき事項としては何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">注意事項</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>最小権限</strong>と職務分離の徹底（過剰付与を避ける）</li>
                    <li>特権アカウントの共有禁止，管理強化，監査</li>
                    <li>デフォルト許可ではなく，原則拒否（Default Deny）</li>
                    <li>権限の陳腐化（異動・退職後の残存権限）への対策</li>
                    <li>設定ミス・例外ルールの増加による穴の作り込み</li>
                    <li>認証突破後の横展開を想定した多層制御</li>
                    <li>ログの保全と，拒否・許可両方の記録</li>
                    <li>利便性とのバランス（過度な制限によるシャドー IT 誘発）</li>
                </ul>
            </div>
        `
    }
];
