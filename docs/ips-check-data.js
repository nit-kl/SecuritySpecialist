// Check! IPS 5問
const checkIpsData = [
    {
        q: "【Q1】 IPS とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">IPS</span>
            <div class="check-measure-box">
                <p><strong>IPS</strong>（Intrusion Prevention System：侵入防止システム）は，ネットワーク上の通信を監視し，不正な侵入や攻撃を<strong>検知したうえで遮断・防御</strong>する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>IDS が主に検知・通知であるのに対し，IPS は<strong>防御（遮断）</strong>まで行う</li>
                    <li>シグネチャ型・アノマリ型などの検知手法を用いる</li>
                    <li>インライン配置により通信経路上でパケットを検査・遮断できる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 IPS と NIDS とは何が違うのか。",
        ans: `
            <span class="check-category-badge badge-isms">IPS vs NIDS</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>NIDS</h4>
                    <ul>
                        <li>主に<strong>検知・通知</strong></li>
                        <li>ミラーポート等で経路外から監視（プロミスキャス）</li>
                        <li>通信自体は通過させる</li>
                        <li>攻撃の確実な遮断は難しい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>IPS</h4>
                    <ul>
                        <li><strong>検知＋遮断・防御</strong></li>
                        <li>インラインで経路上に設置可能</li>
                        <li>不正パケットをドロップできる</li>
                        <li>可用性・誤遮断への配慮が必要</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">検知手法（シグネチャ／アノマリ）は共通するが，<strong>遮断できるかどうか</strong>が大きな違いです。</p>
        `
    },
    {
        q: "【Q3】 IPS を用いることで何ができるのか。",
        ans: `
            <span class="check-category-badge badge-isms">IPS の効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>既知攻撃や異常通信の<strong>リアルタイム検知と遮断</strong></li>
                    <li>DoS 兆候，不正アクセス，マルウェア通信などの防御</li>
                    <li>ファイアウォールでは見落としやすいアプリケーション層攻撃への対応強化</li>
                    <li>インライン配置により攻撃を<strong>確実に阻止</strong>しやすい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 IPS ではどのようにしてパケットを遮断するのか。",
        ans: `
            <span class="check-category-badge badge-isms">遮断の仕組み</span>
            <div class="check-measure-box">
                <p><strong>インラインモード</strong>では，IPS を通信経路上に置き，通過するパケットを検査します。</p>
                <ul style="margin-top:0.75rem;">
                    <li>不正と判断したパケットを<strong>ドロップ（破棄）</strong></li>
                    <li>接続のリセット（TCP RST 送信など）によるセッション切断</li>
                    <li>ポリシーに基づく遮断・隔離・アラート</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">経路外監視（プロミスキャス）だけでは確実な遮断が難しく，インライン配置が防御の要です。</p>
        `
    },
    {
        q: "【Q5】 IPS の運用上考慮すべき課題として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">運用上の課題</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>フォールスポジティブ</strong>（誤検知）による正規通信の遮断</li>
                    <li>インライン配置時の<strong>単一障害点</strong>・レイテンシ増加</li>
                    <li>シグネチャ更新・チューニングの継続的な負荷</li>
                    <li>暗号化通信（TLS）の検査限界</li>
                    <li>ゼロデイや未知攻撃への検知漏れ（フォールスネガティブ）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">冗長化，段階的導入，SIEM 連携，ルールの定期見直しが運用のポイントです。</p>
        `
    }
];
