// Check! BCM・BCP 3問
const checkBcmData = [
    {
        q: "【Q1】 BCM 確立における要点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">BCM の確立</span>
            <div class="check-measure-box">
                <ul>
                    <li>経営層の<strong>方針・コミットメント</strong>と責任体制の明確化</li>
                    <li><strong>適用範囲</strong>の決定（重要業務・拠点・システム）</li>
                    <li><strong>BIA</strong>（ビジネスインパクト分析）による重要業務・許容中断時間の把握</li>
                    <li>脅威・脆弱性を踏まえた<strong>リスクアセスメント</strong></li>
                    <li>継続戦略・代替手段の選定（バックアップ，代替拠点など）</li>
                    <li><strong>BCP</strong>・手順書の策定と周知</li>
                    <li>教育・訓練・机上演習による実効性の確認</li>
                    <li>定期的な<strong>見直し・改善</strong>（PDCA）と文書管理</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">BCM（Business Continuity Management）は，事業継続を組織的に管理する枠組みであり，BCP はその成果物の一つです。</p>
        `
    },
    {
        q: "【Q2】 RTO, RPO について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">RTO / RPO</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>RTO（Recovery Time Objective）</h4>
                    <ul>
                        <li><strong>目標復旧時間</strong></li>
                        <li>業務・IT サービスが中断してから，いつまでに復旧させるかを示す指標</li>
                        <li>例：「障害後 4 時間以内にサービスを再開」</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>RPO（Recovery Point Objective）</h4>
                    <ul>
                        <li><strong>目標復旧時点</strong></li>
                        <li>業務中断からさかのぼって，いつの時点の状態までデータを戻すかを示す指標</li>
                        <li>許容できる<strong>データ損失量</strong>（時間）に相当</li>
                        <li>例：「障害発生の 24 時間前のデータを保証」→ RPO＝24 時間</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">RTO は「時間」，RPO は「どの時点のデータか」で区別します。バックアップ頻度は主に RPO に影響します。</p>
        `
    },
    {
        q: "【Q3】 BCP における復旧までの四つの段階について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">BCP 復旧の4段階</span>
            <div class="check-measure-box">
                <ol>
                    <li><strong>緊急事態対応</strong>：人命・安全の確保，被害状況の把握，初動対応，関係者への連絡</li>
                    <li><strong>暫定復旧（代替運用）</strong>：代替拠点・手動運用・縮退運転などにより，重要業務を暫定的に継続</li>
                    <li><strong>本格復旧</strong>：本来のシステム・拠点・体制を復旧し，通常に近い水準へ戻す</li>
                    <li><strong>平常運用への復帰</strong>：代替手段の終了，通常運用への完全移行，事後検証と改善</li>
                </ol>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">段階ごとに役割・手順・判断基準を BCP に明記し，訓練で確認しておくことが重要です。</p>
        `
    }
];
