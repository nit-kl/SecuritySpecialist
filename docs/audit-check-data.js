// Check! 情報セキュリティ監査・システム監査 8問
const checkAuditData = [
    {
        q: "【Q1】 情報セキュリティ監査によって期待される効果について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報セキュリティ監査の効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>情報セキュリティマネジメントの<strong>有効性・妥当性</strong>を客観的に評価できる</li>
                    <li>不備・弱点を洗い出し，<strong>改善勧告</strong>によりリスク低減につなげられる</li>
                    <li>経営層・利害関係者への<strong>説明責任（アカウンタビリティ）</strong>を果たせる</li>
                    <li>取引先・顧客・社会に対する<strong>信頼の向上</strong>（第三者評価の根拠）</li>
                    <li>法令・契約・内部規程への<strong>適合状況</strong>を確認できる</li>
                    <li>継続的改善（PDCA の Check／Act）を促し，<strong>ガバナンス強化</strong>に寄与する</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">監査は「指摘のため」ではなく，組織の情報セキュリティ水準を高め，利害関係者の安心を得る手段です。</p>
        `
    },
    {
        q: "【Q2】 情報セキュリティ管理基準の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報セキュリティ管理基準</span>
            <p>経済産業省が策定した，組織が情報セキュリティを適切に管理するための<strong>判断基準（ベンチマーク）</strong>です。情報セキュリティ監査の際の「何をもって適切とするか」の規準としても用いられます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>ISO/IEC 27001・27002 等の国際規格を踏まえた<strong>管理策の体系</strong></li>
                    <li>方針・組織・資産・人的／物理的／技術的対策，インシデント対応，BCM など広範な領域をカバー</li>
                    <li>「こうあるべき」という<strong>管理の到達目標</strong>を示す（監査手続そのものではない）</li>
                    <li>自己点検や内部監査，外部の情報セキュリティ監査の<strong>評価観点</strong>として活用</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">対になるのが「情報セキュリティ監査基準」（監査人の行為規範）。管理基準＝被監査側の管理水準，監査基準＝監査人のやり方，と区別します。</p>
        `
    },
    {
        q: "【Q3】 情報セキュリティ監査基準の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報セキュリティ監査基準</span>
            <p>情報セキュリティ監査を実施する監査人が従うべき<strong>行為規範・手続の枠組み</strong>です。監査の品質・客観性・一貫性を確保するための基準です。</p>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-measure-box">
                    <h4>主な構成（イメージ）</h4>
                    <ul>
                        <li><strong>倫理基準</strong>：独立性・公正性・機密保持など</li>
                        <li><strong>一般基準</strong>：専門能力，正当な注意義務など</li>
                        <li><strong>実施基準</strong>：計画・証拠収集・評価などの手続</li>
                        <li><strong>報告基準</strong>：報告書の記載事項・表明のあり方</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>ポイント</h4>
                    <ul>
                        <li>監査証拠に基づく<strong>客観的評価</strong></li>
                        <li>保証型／助言型に応じた<strong>報告のあり方</strong></li>
                        <li>管理基準と組み合わせて「規準 × 手続」を構成</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q4】 保証型監査、助言型監査について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">保証型／助言型</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>保証型監査</h4>
                    <ul>
                        <li>監査対象の情報セキュリティの状況について，監査人が<strong>独立した意見（保証）</strong>を表明する</li>
                        <li>あらかじめ定めた規準（管理基準等）への適合を評価</li>
                        <li>利害関係者への<strong>信頼性付与</strong>が主目的</li>
                        <li>証拠の十分性・適切性がより厳格に求められる</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>助言型監査</h4>
                    <ul>
                        <li>意見表明（保証）ではなく，<strong>改善のための助言・勧告</strong>を中心とする</li>
                        <li>課題の発見と具体的な改善策の提示が主目的</li>
                        <li>保証型に比べ，手続・報告の形式は柔軟になりやすい</li>
                        <li>内部改善・経営支援向き</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「保証＝第三者への信頼の付与」「助言＝組織内部の改善支援」と覚えると区別しやすいです。</p>
        `
    },
    {
        q: "【Q5】 ISMS適合性評価制度と情報セキュリティ監査制度の有効な活用方法について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">ISMS と監査制度の活用</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>ISMS 適合性評価制度</h4>
                    <ul>
                        <li>ISO/IEC 27001 に基づく<strong>マネジメントシステム認証</strong></li>
                        <li>第三者認証機関による定期的な審査</li>
                        <li>「仕組みとして適合している」ことの対外アピールに強い</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>情報セキュリティ監査制度</h4>
                    <ul>
                        <li>保証型／助言型など<strong>目的に応じて柔軟</strong></li>
                        <li>特定領域・特定リスクにフォーカス可能</li>
                        <li>認証の有無に依存せず，深度ある評価・助言が可能</li>
                    </ul>
                </div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>有効な使い分け・併用</h4>
                <ul>
                    <li><strong>対外信頼・入札要件</strong> → ISMS 認証を活用</li>
                    <li><strong>特定課題の深掘り・改善</strong> → 情報セキュリティ監査（助言型／テーマ監査）</li>
                    <li><strong>認証維持と実態ギャップの確認</strong> → 認証＋監査の併用で「仕組み」と「実効性」の双方を担保</li>
                    <li>内部監査・自己点検と外部監査を組み合わせ，PDCA を回す</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 システム監査の目的とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">システム監査の目的</span>
            <p>情報システムが，組織の目標達成に貢献するよう<strong>適切に企画・開発・運用・保守されているか</strong>を，独立した立場から検証・評価することです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>情報システムの<strong>信頼性・安全性・効率性</strong>の確保・向上</li>
                    <li>リスクの識別とコントロールの妥当性評価</li>
                    <li>経営者・利害関係者への報告と<strong>改善勧告</strong></li>
                    <li>IT ガバナンス・内部統制の実効性の確認</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">情報セキュリティ監査が「情報セキュリティ」に焦点を当てるのに対し，システム監査は情報システム全般の管理を対象とします（重なる部分もあります）。</p>
        `
    },
    {
        q: "【Q7】 システム監査基準の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">システム監査基準</span>
            <p>経済産業省が示す，システム監査人が監査を実施する際の<strong>規範・手続の基準</strong>です。監査の品質を担保し，統一的な実施を促します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>倫理基準</strong>：公正性，独立性，機密保持など</li>
                    <li><strong>一般基準</strong>：専門的能力，正当な注意，組織上の位置づけなど</li>
                    <li><strong>実施基準</strong>：監査計画，監査手続（インタビュー・現地調査・CAAT 等），証拠の評価</li>
                    <li><strong>報告基準</strong>：監査報告書・改善勧告の記載，事実確認など</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">改善勧告は監査証拠に裏付けられ，被監査部門への事実誤認確認を経たうえで，実現可能性も考慮して記載します。</p>
        `
    },
    {
        q: "【Q8】 システム管理基準の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">システム管理基準</span>
            <p>情報システムを適切に管理するための<strong>管理上の判断基準</strong>です。システム監査では，この基準を「あるべき姿」として監査対象を評価します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>情報システムの<strong>戦略・企画</strong>から開発，運用，保守，廃棄までのライフサイクルをカバー</li>
                    <li>組織体制，外部委託，情報セキュリティ，災害対策など横断的な管理項目を含む</li>
                    <li>「管理が適切か」を測る<strong>評価の物差し</strong>（監査手続そのものではない）</li>
                    <li>自己点検や内部監査のチェックリストとしても活用可能</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">整理：<strong>システム管理基準</strong>＝被監査側の管理水準，<strong>システム監査基準</strong>＝監査人の行為規範。</p>
        `
    }
];
