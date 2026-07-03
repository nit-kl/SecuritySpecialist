// Check! リスクアセスメント 7問
const checkRiskData = [
    {
        q: "【Q1】 リスクとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">リスクの定義</span>
            <p><strong>リスク</strong>とは，目的に対する<strong>不確実性の影響</strong>，または<strong>脅威が脆弱性を悪用して資産に与える損害の可能性</strong>を指します（JIS Q 27000 / ISO/IEC 27000）。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>リスクは「<strong>ゼロ</strong>」にはなり得ない（完全排除は困難）</li>
                    <li><strong>受容可能な水準</strong>まで低減・管理することが目標</li>
                    <li>情報セキュリティでは<strong>機密性・完全性・可用性</strong>への影響として捉える</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 情報リスクの構成要素を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報リスクの構成要素</span>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-sitemap"></i> リスクの主要要素</div>
                <div class="check-flow">
                    <div class="check-node safe"><i class="fa-solid fa-database"></i>資産</div>
                    <div class="check-arrow">×</div>
                    <div class="check-node danger"><i class="fa-solid fa-user-secret"></i>脅威</div>
                    <div class="check-arrow">×</div>
                    <div class="check-node browser"><i class="fa-solid fa-unlock"></i>脆弱性</div>
                    <div class="check-arrow">→</div>
                    <div class="check-node attacker"><i class="fa-solid fa-triangle-exclamation"></i>リスク<br>（影響）</div>
                </div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>資産</strong>：保護対象（情報，システム，サービス，人的資産等）</li>
                    <li><strong>脅威</strong>：資産に損害を与える可能性のある事象の原因</li>
                    <li><strong>脆弱性</strong>：脅威に付け込まれる資産又は管理策の弱点</li>
                    <li><strong>影響（結果）</strong>：リスクが顕在化した際の損害の大きさ</li>
                    <li><strong>管理策</strong>：リスクを低減するための対策（コントロール）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 リスクの顕在化による損失にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">損失の種類</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>分類の観点</h4>
                    <ul>
                        <li><strong>直接的損失</strong>：システム復旧費，データ再作成費等</li>
                        <li><strong>間接的損失</strong>：機会損失，生産性低下，信用失墜</li>
                        <li><strong>有形損失</strong>：金銭的に測定可能な損害</li>
                        <li><strong>無形損失</strong>：ブランド毀損，顧客離反，法的責任</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>具体例</h4>
                    <ul>
                        <li>情報漏えいによる<strong>賠償・罰金</strong></li>
                        <li>サービス停止による<strong>売上減少</strong></li>
                        <li>インシデント対応の<strong>人件費・調査費</strong></li>
                        <li>再発防止のための<strong>対策投資</strong></li>
                        <li>個人情報保護法違反等の<strong>行政処分</strong></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q4】 リスクアセスメントの目的と効果について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスクアセスメント</span>
            <div class="check-measure-box">
                <h4>目的</h4>
                <ul>
                    <li>情報セキュリティリスクを<strong>体系的に特定・分析・評価</strong>する</li>
                    <li>許容できないリスクに対して<strong>適切な対応</strong>を決定する根拠を得る</li>
                    <li>ISMS の<strong>計画（Plan）</strong>フェーズの中核プロセス</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>効果</h4>
                <ul>
                    <li>リスクの<strong>優先順位付け</strong>（限られた資源の効率的配分）</li>
                    <li>経営層の<strong>意思決定</strong>を支援</li>
                    <li>管理策選定の<strong>根拠</strong>（SoA 作成の基礎）</li>
                    <li>残余リスクの<strong>可視化</strong>と受容判断</li>
                    <li>継続的改善（<strong>PDCA</strong>）のフィードバック</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 リスク分析手法の種類と特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスク分析手法</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>定性的分析</h4>
                    <ul>
                        <li>発生可能性・影響度を<strong>高・中・低</strong>等の段階で評価</li>
                        <li>実施が比較的<strong>容易</strong>，専門知識の要求が低い</li>
                        <li>主観が入りやすく，<strong>精度は限定的</strong></li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>定量的分析</h4>
                    <ul>
                        <li><strong>数値</strong>で発生可能性・損害額を算出</li>
                        <li>例：ALE = SLE × ARO（年間期待損失額）</li>
                        <li><strong>客観性</strong>が高いが，データ収集・算出が<strong>困難</strong></li>
                    </ul>
                </div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>半定量的分析</h4>
                <ul>
                    <li>定性的・定量的の<strong>中間</strong>的手法</li>
                    <li>スコアリングや重み付けにより数値化しつつ，実施負荷を抑える</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 リスク評価手法の種類と特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスク評価手法</span>
            <div class="check-measure-box">
                <h4>リスクマトリクス（リスク評価マトリクス）</h4>
                <ul>
                    <li>発生可能性と影響度を<strong>2 軸の表</strong>にマッピング</li>
                    <li>セルの色分け等で<strong>リスクレベル</strong>を視覚化</li>
                    <li>最も広く用いられる<strong>定性的評価</strong>手法</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>リスク基準との比較</h4>
                <ul>
                    <li>分析結果を組織が定めた<strong>リスク許容基準</strong>と比較</li>
                    <li>許容可能 / 要対応 / 即時対応等に<strong>分類</strong></li>
                    <li>経営層が事前に定めた<strong>リスク受容水準</strong>に基づく判断</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">※「リスク評価」は分析結果を基準と比較して重要度を決めるプロセス。「リスク対応」は評価後に取る処置（低減・受容等）です。</p>
        `
    },
    {
        q: "【Q7】 詳細リスク分析・評価のステップと作業の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">詳細リスク分析・評価のステップ</span>
            <p>ISO/IEC 27005 に基づくリスクアセスメントの主要ステップ：</p>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-1"></i><strong>1. 文脈の確立</strong><br>スコープ，基準，リスク許容水準の設定</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node safe"><i class="fa-solid fa-2"></i><strong>2. リスク特定</strong><br>資産，脅威，脆弱性，リスク源の発見・記述</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node server"><i class="fa-solid fa-3"></i><strong>3. リスク分析</strong><br>発生可能性と影響度の見積もり</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node browser"><i class="fa-solid fa-4"></i><strong>4. リスク評価</strong><br>リスク基準と比較し優先度を決定</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node safe"><i class="fa-solid fa-5"></i><strong>5. リスク対応</strong><br>低減・受容・回避・共有の選択と管理策決定</div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>各ステップの作業概要</h4>
                <ul>
                    <li><strong>リスク特定</strong>：過去データ，理論分析，専門家意見，ステークホルダーニーズの活用</li>
                    <li><strong>リスク分析</strong>：定性的 / 定量的 / 半定量的手法の適用</li>
                    <li><strong>リスク評価</strong>：マトリクス等で許容基準と比較，対応要否の判断</li>
                    <li><strong>記録</strong>：リスク登録簿等への文書化，経営層への報告</li>
                </ul>
            </div>
        `
    }
];
