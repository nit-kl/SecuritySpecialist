// Check! リスクマネジメント 6問
const checkRiskMgmtData = [
    {
        q: "【Q1】 リスクマネジメントの四つのプロセスを挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスクマネジメントのプロセス</span>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-1"></i><strong>1. リスク特定</strong><br>リスク源・事象・原因・結果の発見・記述</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node server"><i class="fa-solid fa-2"></i><strong>2. リスク分析</strong><br>発生可能性と影響度の見積もり</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node browser"><i class="fa-solid fa-3"></i><strong>3. リスク評価</strong><br>リスク基準と比較し優先度を決定</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node safe"><i class="fa-solid fa-4"></i><strong>4. リスク対応</strong><br>低減・回避・移転・受容などの処置</div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">1〜3 をまとめて<strong>リスクアセスメント</strong>と呼ぶこともあります。全体は PDCA で継続的に改善します。</p>
        `
    },
    {
        q: "【Q2】 リスク対応で考慮すべきことは何か。",
        ans: `
            <span class="check-category-badge badge-isms">リスク対応で考慮すべきこと</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>リスクの大きさ</strong>と組織の<strong>リスク許容水準</strong></li>
                    <li><strong>対策費用</strong>と期待される効果（費用対効果）</li>
                    <li>対応後に残る<strong>残余リスク</strong>の評価と受容判断</li>
                    <li>法規制・契約・ステークホルダーの要求</li>
                    <li>業務への影響，実現可能性，運用負荷</li>
                    <li>複数の対応オプションの組合せ（低減＋移転など）</li>
                    <li>経営層による<strong>承認</strong>と文書化</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 リスクコントロールとリスクファイナンシングの概要を説明せよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスクコントロールとリスクファイナンシング</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>リスクコントロール</h4>
                    <ul>
                        <li>リスクの<strong>発生可能性</strong>や<strong>影響度</strong>そのものを抑える手法</li>
                        <li>技術的・物理的・人的な<strong>管理策</strong>の実施</li>
                        <li>例：回避，低減（予防・軽減），分散</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>リスクファイナンシング</h4>
                    <ul>
                        <li>リスクが顕在化した際の<strong>金銭的損失</strong>に備える手法</li>
                        <li>損失負担の<strong>資金調達・移転</strong>に着目</li>
                        <li>例：保険，契約による責任移転，引当金</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">両者は排他ではなく，コントロールで低減しつつファイナンシングで残余損失に備える，といった併用が一般的です。</p>
        `
    },
    {
        q: "【Q4】 リスクコントロールにおけるリスク対応手法の種類とその具体例を述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスクコントロールの手法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>リスク回避</strong>：リスク源そのものを排除する<br>例：個人情報の収集・保管をやめる，インターネット接続を取りやめる</li>
                    <li><strong>リスク低減（予防）</strong>：発生可能性を下げる<br>例：入退室管理，アクセス制御，パッチ適用，教育</li>
                    <li><strong>リスク低減（軽減）</strong>：発生時の影響度を下げる<br>例：バックアップ，冗長化，インシデント対応計画</li>
                    <li><strong>リスク分散</strong>：影響を複数箇所に分ける<br>例：データセンターの地理的分散，職務分離</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 リスクファイナンシングにおけるリスク対応手法の種類とその具体例を述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">リスクファイナンシングの手法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>リスク移転（転嫁・共有）</strong>：損失負担を第三者に移す<br>例：サイバー保険，外部データセンタへの預託，アウトソーシング契約</li>
                    <li><strong>リスク保有（自己負担）</strong>：損失を自組織で賄う資金を用意する<br>例：引当金，自己保険，予備費の確保</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">移転はリスクそのものが消えるわけではなく，金銭的影響の負担先を変える点に注意します。</p>
        `
    },
    {
        q: "【Q6】 リスクの受容とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">リスクの受容</span>
            <p><strong>リスクの受容</strong>とは，リスクの大きさと対策費用などを勘案し，<strong>あえて追加の対策をとらず</strong>，現状のリスクを許容することです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>リスクが<strong>許容基準以下</strong>である場合に選択される</li>
                    <li>対策費用が期待効果を上回る場合にも検討される</li>
                    <li>受容したリスクは<strong>文書化</strong>し，経営層等の承認を得る</li>
                    <li>状況変化に応じて<strong>再評価</strong>する（一度受容したら放置ではない）</li>
                    <li>回避・低減・移転とは異なり，リスク源や影響を積極的に変えない</li>
                </ul>
            </div>
        `
    }
];
