// Check! 情報セキュリティマネジメント体制 2問
const checkSecOrgData = [
    {
        q: "【Q1】 情報セキュリティ委員会の役割として想定されることを挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報セキュリティ委員会</span>
            <div class="check-measure-box">
                <ul>
                    <li>情報セキュリティに関する<strong>方針・計画</strong>の審議・承認支援</li>
                    <li>リスクアセスメント結果に基づく<strong>管理策の選定</strong>・優先順位付け</li>
                    <li>各部門間の<strong>調整・合意形成</strong>（横断的課題の解決）</li>
                    <li>インシデント対応の<strong>統括・報告</strong></li>
                    <li>情報セキュリティの<strong>監視・見直し</strong>（PDCA の推進）</li>
                    <li>経営層への<strong>報告・提言</strong></li>
                    <li>教育・啓発活動の<strong>推進</strong></li>
                    <li>外部監査・認証（ISMS）への<strong>対応</strong></li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">組織の規模により名称や構成は異なりますが，<strong>横断的な推進機関</strong>として機能することが重要です。</p>
        `
    },
    {
        q: "【Q2】 各部門の情報管理者の役割として想定されることを挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">各部門の情報管理者</span>
            <div class="check-measure-box">
                <ul>
                    <li>所管部門の<strong>情報資産の把握・管理</strong>（台帳の維持）</li>
                    <li>部門内の<strong>ポリシ・規程の周知</strong>と遵守の促進</li>
                    <li>部門の<strong>リスクアセスメント</strong>への参画・情報提供</li>
                    <li>部門内の<strong>アクセス権限</strong>の適切な管理</li>
                    <li>部門内の<strong>教育・訓練</strong>の実施</li>
                    <li>インシデント発生時の<strong>初動対応・報告</strong></li>
                    <li>情報セキュリティ委員会との<strong>連携・報告</strong></li>
                    <li>部門固有の業務に応じた<strong>セキュリティ対策</strong>の実施・改善</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">情報セキュリティは組織全体の課題ですが，<strong>現場（各部門）</strong>での実効性を確保する役割を担います。</p>
        `
    }
];
