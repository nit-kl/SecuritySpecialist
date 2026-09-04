// Check! セキュリティ規格・フレームワーク 15問
const checkStandardsData = [
    {
        q: "【Q1】 ISO/IEC 15408 では何を評価・認証の対象としているか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">ISO/IEC 15408</span>
            <div class="check-measure-box">
                <p><strong>ISO/IEC 15408</strong>（コモンクライテリア：CC）は，IT 製品・システムの<strong>セキュリティ機能</strong>とその<strong>保証</strong>を評価・認証するための国際規格です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>評価対象（TOE：Target of Evaluation）は OS，ファイアウォール，スマートカード，暗号モジュール等の製品・システム</li>
                    <li>組織の ISMS そのものではなく，製品のセキュリティ要件適合を評価する</li>
                    <li>日本では JISEC 等による認証が行われている</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 ST, PP とは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">ST／PP</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>PP</strong>（Protection Profile：プロテクションプロファイル）：ある製品カテゴリに対する<strong>汎用的なセキュリティ要件</strong>をまとめた文書。複数製品で共通利用できる</li>
                    <li><strong>ST</strong>（Security Target：セキュリティターゲット）：特定の TOE（評価対象製品）に対する<strong>個別のセキュリティ要件・対策方針</strong>を記述した文書。評価の根拠となる</li>
                    <li>ST は PP に準拠して作成されることが多い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 セキュリティ機能コンポーネントとは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">セキュリティ機能コンポーネント</span>
            <div class="check-measure-box">
                <p>ISO/IEC 15408 における<strong>セキュリティ機能要件</strong>（SFR：Security Functional Requirements）を構成する部品です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>TOE が提供すべきセキュリティ機能（識別・認証，アクセス制御，暗号，監査ログ等）を標準化された形で記述</li>
                    <li>機能クラス（例：FAU 監査，FDP ユーザデータ保護，FIA 識別認証）に分類</li>
                    <li>ST／PP で必要な機能を選んで組み合わせる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 セキュリティ保証コンポーネントとは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">セキュリティ保証コンポーネント</span>
            <div class="check-measure-box">
                <p>ISO/IEC 15408 における<strong>セキュリティ保証要件</strong>（SAR：Security Assurance Requirements）を構成する部品です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>機能が正しく実装・運用されていることを<strong>どの程度厳密に保証するか</strong>を規定</li>
                    <li>開発プロセス，テスト，脆弱性分析，ライフサイクル支援，評価方法等を含む</li>
                    <li>EAL（評価保証レベル）は保証コンポーネントのパッケージとして定義される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 EAL の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">EAL</span>
            <div class="check-measure-box">
                <p><strong>EAL</strong>（Evaluation Assurance Level：評価保証レベル）は，CC における保証の深さを示す段階です（EAL1〜EAL7）。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>EAL1</strong>：機能テスト（最低）</li>
                    <li><strong>EAL2</strong>：構造テスト</li>
                    <li><strong>EAL3</strong>：方法的テストとチェック</li>
                    <li><strong>EAL4</strong>：方法的設計・テスト・レビュー（商用でよく利用）</li>
                    <li><strong>EAL5</strong>：準形式的設計とテスト</li>
                    <li><strong>EAL6</strong>：準形式的検証設計とテスト</li>
                    <li><strong>EAL7</strong>：形式的検証設計とテスト（最高）</li>
                </ul>
                <p style="margin-top:0.75rem;">レベルが高いほど評価コスト・期間が増える。EAL は機能の「強さ」ではなく保証の「厳密さ」である点に注意。</p>
            </div>
        `
    },
    {
        q: "【Q6】 CMMI は何を目的としているか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">CMMI</span>
            <div class="check-measure-box">
                <p><strong>CMMI</strong>（Capability Maturity Model Integration）は，組織のプロセス能力・成熟度を評価・改善するためのフレームワークです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ソフトウェア開発・サービス提供等の<strong>プロセス改善</strong>が主目的</li>
                    <li>成熟度レベル（初期〜最適化）で組織のプロセス状態を示す</li>
                    <li>セキュリティ製品の機能認証（CC）とは目的が異なる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 CMMI の二つの評価モデルの概要を述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">CMMI のモデル</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>段階表現（Staged）</strong>：組織全体の成熟度レベル（1〜5）で評価。プロセス領域の達成を段階的に進める</li>
                    <li><strong>連続表現（Continuous）</strong>：個々のプロセス領域ごとに能力レベルを評価。重点領域を柔軟に選べる</li>
                </ul>
                <p style="margin-top:0.75rem;">用途に応じて，組織横断の成熟度把握（段階）か，特定プロセスの能力強化（連続）かを選ぶ。</p>
            </div>
        `
    },
    {
        q: "【Q8】 ISO/IEC 15408 と CMMI-DEV はそれぞれどのような特徴があり，どのような用途に用いるべきか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">15408 と CMMI-DEV</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ISO/IEC 15408</strong>：製品・システムのセキュリティ機能と保証を第三者評価。<strong>製品調達・認証</strong>に用いる</li>
                    <li><strong>CMMI-DEV</strong>：開発組織のプロセス成熟度を評価・改善。<strong>開発プロセスの品質向上</strong>に用いる</li>
                    <li>製品のセキュリティ適合を示したい → 15408／CC</li>
                    <li>開発組織のプロセス能力を高めたい → CMMI-DEV</li>
                    <li>両者は補完関係にあり，目的が異なる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 PCI DSS の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">PCI DSS</span>
            <div class="check-measure-box">
                <p><strong>PCI DSS</strong>（Payment Card Industry Data Security Standard）は，クレジットカード会員データを取り扱う組織向けの<strong>セキュリティ基準</strong>です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>Visa，Mastercard 等のカードブランドが設立した PCI SSC が管理</li>
                    <li>加盟店，決済代行，サービスプロバイダ等が対象</li>
                    <li>カード会員データの保護と侵害防止が目的</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 PCI DSS の主な要件と，その特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">PCI DSS の要件</span>
            <div class="check-measure-box">
                <p>PCI DSS はおおむね次のような要件群で構成されます（バージョンにより詳細は更新される）。</p>
                <ul style="margin-top:0.75rem;">
                    <li>安全なネットワークの構築・維持（FW，デフォルトパスワード変更等）</li>
                    <li>カード会員データの保護（保存・送信時の暗号化）</li>
                    <li>脆弱性管理プログラム（パッチ，マルウェア対策）</li>
                    <li>アクセス制御の強化（最小権限，一意の ID）</li>
                    <li>ネットワークの定期的な監視・テスト</li>
                    <li>情報セキュリティポリシの維持</li>
                </ul>
                <p style="margin-top:0.75rem;">特徴：業界標準であり，準拠しないとカードブランド取引が制限され得る。</p>
            </div>
        `
    },
    {
        q: "【Q11】 PCI DSS に基づく認定プログラムの概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">PCI DSS 認定</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>QSA</strong>（Qualified Security Assessor）：認定監査人によるオンサイト評価</li>
                    <li><strong>SAQ</strong>（Self-Assessment Questionnaire）：自己評価質問票（規模・取扱形態により種類が分かれる）</li>
                    <li><strong>ASV</strong>（Approved Scanning Vendor）：外部脆弱性スキャンの実施</li>
                    <li>取引量等に応じて，自己評価か QSA 監査かが決まる</li>
                    <li>準拠証明（AoC：Attestation of Compliance）等を提出する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q12】 ITSMS とは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">ITSMS</span>
            <div class="check-measure-box">
                <p><strong>ITSMS</strong>（IT Service Management System）は，IT サービスの企画・設計・移行・運用・改善を組織的に管理する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>規格の中心は <strong>ISO/IEC 20000</strong>（IT サービスマネジメント）</li>
                    <li>サービスの品質，可用性，インシデント対応等を PDCA で継続改善</li>
                    <li>ISMS（ISO/IEC 27001）は情報セキュリティ，ITSMS はサービス提供のマネジメント</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q13】 ITIL とは何に関する書籍群か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">ITIL</span>
            <div class="check-measure-box">
                <p><strong>ITIL</strong>（IT Infrastructure Library）は，IT サービスマネジメントの<strong>ベストプラクティス</strong>をまとめた書籍群（フレームワーク）です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>インシデント管理，問題管理，変更管理，サービスレベル管理等のプロセスを体系化</li>
                    <li>ISO/IEC 20000 の実務的な実装指針としてよく参照される</li>
                    <li>規格そのものではなく，実践ガイドである点が特徴</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q14】 EDSA 認証の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">EDSA</span>
            <div class="check-measure-box">
                <p><strong>EDSA</strong>（Embedded Device Security Assurance）は，<strong>組込み機器である制御機器</strong>を評価対象としたセキュリティ認証制度です（ISASecure 等）。</p>
                <ul style="margin-top:0.75rem;">
                    <li>産業制御システム（ICS／OT）向けの組込みデバイスを対象</li>
                    <li>EDSA 2.0.0 の評価項目例：ロバストネス試験，機能セキュリティ評価，セキュリティ開発ライフサイクル，開発成果物</li>
                    <li>施設全体や組織のポリシ評価ではなく，<strong>機器そのもの</strong>が評価対象</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q15】 NIST CSF 2.0 における 6 つの機能について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">NIST CSF 2.0</span>
            <div class="check-measure-box">
                <p>NIST サイバーセキュリティフレームワーク（CSF）2.0 のコアは，次の<strong>6 機能</strong>です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>GOVERN</strong>（統治）：方針・リスク・役割などサイバーセキュリティのガバナンス（2.0 で追加）</li>
                    <li><strong>IDENTIFY</strong>（識別）：資産・リスクの把握</li>
                    <li><strong>PROTECT</strong>（防御）：アクセス制御，教育，データ保護等</li>
                    <li><strong>DETECT</strong>（検知）：異常・インシデントの検知</li>
                    <li><strong>RESPOND</strong>（対応）：インシデント対応</li>
                    <li><strong>RECOVER</strong>（復旧）：復旧計画の実行・改善</li>
                </ul>
            </div>
        `
    }
];
