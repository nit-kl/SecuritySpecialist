// Check! 個人情報保護 11問
const checkPrivacyData = [
    {
        q: "【Q1】 個人情報保護法における次の用語の定義について述べよ。個人情報、個人識別符号、個人情報データベース等、個人データ、保有個人データ、個人情報取扱事業者、要配慮個人情報、匿名加工情報、仮名加工情報、個人関連情報。",
        ans: `
            <span class="check-category-badge badge-fundamentals">用語定義</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>個人情報</strong>：生存する個人に関する情報で，氏名・生年月日等により特定の個人を識別できるもの（他の情報と容易に照合できるものを含む）</li>
                    <li><strong>個人識別符号</strong>：身体の特徴を変換した符号，旅券番号・マイナンバー等，個人を識別できる符号</li>
                    <li><strong>個人情報データベース等</strong>：個人情報を含む情報の集合物で，体系的に構成され検索できるもの</li>
                    <li><strong>個人データ</strong>：個人情報データベース等を構成する個人情報</li>
                    <li><strong>保有個人データ</strong>：個人情報取扱事業者が開示等の権限を有する個人データ（6 か月以内に消去するもの等を除く，改正で期間要件は見直しあり）</li>
                    <li><strong>個人情報取扱事業者</strong>：個人情報データベース等を事業の用に供している者</li>
                    <li><strong>要配慮個人情報</strong>：人種，信条，病歴，犯罪の経歴等，不当な差別・不利益を生じさせるおそれがあるため特に配慮を要する個人情報</li>
                    <li><strong>匿名加工情報</strong>：特定の個人を識別できないよう加工し，復元できないようにした情報</li>
                    <li><strong>仮名加工情報</strong>：他の情報と照合しない限り特定の個人を識別できないよう加工した情報</li>
                    <li><strong>個人関連情報</strong>：生存する個人に関する情報で，個人情報・仮名加工情報・匿名加工情報のいずれにも該当しないもの（Cookie 等）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 個人情報保護法は，個人情報取扱事業者に対して何を求めているか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">事業者の義務</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>利用目的の特定・通知・公表</strong>，目的外利用の制限</li>
                    <li><strong>適正な取得</strong>（偽りその他不正な手段の禁止）</li>
                    <li><strong>データ内容の正確性の確保</strong></li>
                    <li><strong>安全管理措置</strong>（漏えい等の防止）</li>
                    <li><strong>従業者・委託先の監督</strong></li>
                    <li><strong>第三者提供の制限</strong>（同意，オプトアウト，委託等の例外）</li>
                    <li><strong>開示・訂正・利用停止等</strong>への対応</li>
                    <li>漏えい等発生時の<strong>個人情報保護委員会への報告・本人通知</strong>（改正で義務化）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 個人情報保護法の主な改正内容について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">主な改正</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>個人情報保護委員会</strong>の設置と監督権限の強化</li>
                    <li><strong>要配慮個人情報</strong>の創設，取得時の原則同意</li>
                    <li><strong>匿名加工情報</strong>・<strong>仮名加工情報</strong>・<strong>個人関連情報</strong>の規律</li>
                    <li>漏えい等の<strong>報告義務・本人通知義務</strong></li>
                    <li>利用停止・消去請求の拡充，開示方法の多様化</li>
                    <li><strong>罰則の強化</strong>，域外適用の明確化</li>
                    <li>Cookie 等の第三者提供に関する規制強化</li>
                    <li>公的部門・民間の規律の一本化（令和 3 年改正等）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 個人情報保護法のガイドラインでは，個人データの安全管理のために講じるべき措置として，どのような観点が示されているか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">安全管理措置</span>
            <div class="check-measure-box">
                <p>個人情報保護委員会のガイドラインでは，おおむね次の観点から措置が示されています。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>組織的安全管理措置</strong>：責任者，規程，事故対応，点検</li>
                    <li><strong>人的安全管理措置</strong>：教育，秘密保持</li>
                    <li><strong>物理的安全管理措置</strong>：入退室，盗難防止，機器・媒体の管理</li>
                    <li><strong>技術的安全管理措置</strong>：アクセス制御，不正アクセス防止，漏えい防止</li>
                    <li>（参考）外的環境の把握（外国での取扱い等）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 番号法（マイナンバー法）の概要と基本理念（目的）について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">番号法</span>
            <div class="check-measure-box">
                <p><strong>番号法</strong>（行政手続における特定の個人を識別するための番号の利用等に関する法律）は，個人番号を用いた効率的な情報管理・行政手続を定めつつ，特定個人情報の適正な取扱いを確保する法律です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>行政運営の効率化，国民の利便性向上</li>
                    <li>公平・公正な給付と負担</li>
                    <li>個人情報の保護との両立（利用範囲の限定，安全管理）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 個人番号（マイナンバー），特定個人情報とは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">個人番号／特定個人情報</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>個人番号（マイナンバー）</strong>：住民票を有する者に付番される 12 桁の番号。一生変わらない識別番号</li>
                    <li><strong>特定個人情報</strong>：個人番号をその内容に含む個人情報</li>
                    <li>特定個人情報は一般の個人情報より厳格な取扱い（提供・収集の制限）が課される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 事業者による個人番号の利用範囲について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">利用範囲</span>
            <div class="check-measure-box">
                <ul>
                    <li>事業者は法律で定められた事務に限り個人番号を利用できる</li>
                    <li>主な例：<strong>税</strong>（源泉徴収，支払調書），<strong>社会保障</strong>（健康保険，厚生年金），<strong>災害対策</strong>関連</li>
                    <li>目的外利用やみだりな提供・収集は禁止</li>
                    <li>従業員等から番号を取得する際は利用目的の明示が必要</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 特定個人情報の適正な取扱いに関するガイドラインの概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">特定個人情報ガイドライン</span>
            <div class="check-measure-box">
                <ul>
                    <li>個人情報保護委員会が示す，番号法に基づく取扱いの指針</li>
                    <li><strong>取得・利用・提供・保管・廃棄</strong>の各段階での留意点</li>
                    <li>委託先管理，アクセス制御，漏えい対策などの安全管理措置</li>
                    <li>事務取扱担当者の明確化，規程整備，教育</li>
                    <li>特定個人情報保護評価（PIA）の実施（行政機関等）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 JIS Q 15001:2023 附属書 A における主な管理策を挙げよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">JIS Q 15001</span>
            <div class="check-measure-box">
                <p><strong>JIS Q 15001</strong>は個人情報保護マネジメントシステム（PMS）の規格です。附属書 A の管理策には次のようなものが含まれます。</p>
                <ul style="margin-top:0.75rem;">
                    <li>個人情報の特定，個人情報管理台帳の整備・見直し</li>
                    <li>利用目的の特定・通知，同意取得</li>
                    <li>取得・利用・提供に関する制限</li>
                    <li>安全管理措置（組織的・人的・物理的・技術的）</li>
                    <li>委託先の監督，苦情対応，内部監査，是正</li>
                    <li>本人からの開示等請求への対応</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 プライバシーマーク制度の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">プライバシーマーク</span>
            <div class="check-measure-box">
                <ul>
                    <li>一般財団法人日本情報経済社会推進協会（JIPDEC）が運用する認定制度</li>
                    <li><strong>JIS Q 15001</strong>に準拠した個人情報保護体制を構築している事業者を認定</li>
                    <li>マーク表示により，適切な取扱いを対外的に示す</li>
                    <li>定期的な更新審査・内部監査が求められる</li>
                    <li>個人情報管理台帳は少なくとも<strong>年 1 回</strong>見直し，最新状態を維持する必要がある</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q11】 GDPR の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">GDPR</span>
            <div class="check-measure-box">
                <p><strong>GDPR</strong>（General Data Protection Regulation）は EU の一般データ保護規則です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>EU 域内の個人データの処理・域外移転を規律</li>
                    <li>域外企業でも EU 居住者のデータを扱う場合に<strong>域外適用</strong>され得る</li>
                    <li>適法性（同意，契約履行等），データ最小化，目的制限</li>
                    <li>データ主体の権利（アクセス，消去＝忘れられる権利等）</li>
                    <li>DPO の任命，影響評価（DPIA），侵害通知義務</li>
                    <li>違反時の高額制裁金</li>
                </ul>
            </div>
        `
    }
];
