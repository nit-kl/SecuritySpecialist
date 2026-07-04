// Check! 情報セキュリティポリシ 3問
const checkSecPolicyData = [
    {
        q: "【Q1】 情報セキュリティポリシーの標準的な構成について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報セキュリティポリシの構成</span>
            <div class="check-measure-box">
                <h4>情報セキュリティ基本方針（トップレベル）</h4>
                <ul>
                    <li>経営陣の<strong>方向性と支持</strong>を示す</li>
                    <li>組織全体の情報セキュリティに関する<strong>基本方針</strong></li>
                    <li>経営層の<strong>承認</strong>を得て発布</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>下位ポリシ・規程類</h4>
                <ul>
                    <li><strong>目的・適用範囲</strong></li>
                    <li><strong>役割と責任</strong>（経営層，管理者，利用者）</li>
                    <li><strong>管理策・ルール</strong>（アクセス管理，物理セキュリティ等）</li>
                    <li><strong>遵守事項</strong>と<strong>違反時の措置</strong></li>
                    <li><strong>見直し・改定</strong>の規定</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">基本方針 → 各種ポリシ → 手順書・基準類，という階層構造が一般的です（ISO/IEC 27001 付録 A 5.1 等）。</p>
        `
    },
    {
        q: "【Q2】 情報セキュリティポリシーを策定・運用することにより想定される効果を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">ポリシ策定・運用の効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>経営層の<strong>コミットメント</strong>を組織全体に明示</li>
                    <li>情報セキュリティの<strong>方向性の統一</strong>（全員が同じ目標を共有）</li>
                    <li>対策の<strong>根拠</strong>となり，意思決定の基準になる</li>
                    <li>従業員・関係者への<strong>周知</strong>と<strong>教育</strong>の土台</li>
                    <li>監査・認証（ISMS）における<strong>適合性の証拠</strong></li>
                    <li>インシデント発生時の<strong>対応基準</strong>の明確化</li>
                    <li>法規制・契約要件への<strong>対応</strong>の枠組み</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 情報セキュリティ策定において留意すべき事項を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">策定時の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>経営層の承認</strong>を得て発布する（トップダウン）</li>
                    <li>組織の<strong>事業目的・リスク</strong>に合致した内容とする</li>
                    <li>関連する<strong>法規制・契約</strong>を反映する</li>
                    <li>従業員・関係者に<strong>周知</strong>し，理解を促す</li>
                    <li>定期的または<strong>重大な変化時</strong>に見直す（固定不変にしない）</li>
                    <li>機密扱いにしすぎず，必要な範囲で<strong>公開</strong>する</li>
                    <li>実現可能で<strong>運用可能</strong>な内容とする（形骸化を防ぐ）</li>
                    <li>下位の規程・手順と<strong>整合</strong>させる</li>
                </ul>
            </div>
        `
    }
];
