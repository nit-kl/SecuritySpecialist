// Check! インシデント対応・サイバーレジリエンス 8問
const checkIncidentData = [
    {
        q: "【Q1】 インシデント発生に備えた対応において行うべき事項と留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">事前準備（Preparedness）</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>CSIRT</strong>・対応体制の整備（役割・責任・連絡網）</li>
                    <li>インシデント対応<strong>手順書・プレイブック</strong>の策定</li>
                    <li>検知手段（SIEM，IDS/IPS，ログ監視）の整備</li>
                    <li>証拠保全手順・フォレンジック体制の準備</li>
                    <li>社内外の<strong>連絡先・報告ルート</strong>（経営層，法務，広報，IPA 等）の明確化</li>
                    <li>定期的な<strong>訓練・机上演習</strong>と手順の見直し</li>
                    <li>バックアップ・復旧手順の確認（BCP との連携）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">発生時に慌てないよう，平時からの<strong>準備・訓練・改善</strong>が最も重要です。</p>
        `
    },
    {
        q: "【Q2】 インシデント検知／連絡受付における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">検知・受付</span>
            <div class="check-measure-box">
                <ul>
                    <li>監視アラート・利用者報告・外部通報など<strong>複数の入口</strong>を用意する</li>
                    <li>連絡受付時に<strong>発生時刻・内容・影響範囲・報告者</strong>を正確に記録する</li>
                    <li>初動で証拠を損なう操作を避け，必要に応じて<strong>保全指示</strong>を出す</li>
                    <li>受付窓口を一本化し，情報の<strong>散逸・重複対応</strong>を防ぐ</li>
                    <li>偽報・誤検知の可能性も考慮しつつ，重大事象は迅速にエスカレーションする</li>
                    <li>受付からトリアージまでの<strong>SLA・目標時間</strong>を定めておく</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 インシデントのトリアージ／対応要否の決定における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">トリアージ・対応要否</span>
            <div class="check-measure-box">
                <ul>
                    <li>影響度・緊急度・機密性などで<strong>優先度</strong>を判定する</li>
                    <li>インシデントか否か（誤検知・通常障害との区別）を迅速に判断する</li>
                    <li>対応要否・対応レベル（自力／外部依頼／経営報告）を決定する</li>
                    <li>限られたリソースを<strong>重大事案に集中</strong>させる</li>
                    <li>判断根拠と決定内容を<strong>記録</strong>し，後続対応・事後検証に残す</li>
                    <li>法的報告義務（個人情報漏えい等）の有無を早期に確認する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 脅威の封じ込め／影響範囲の特定／応急処理における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">封じ込め・影響特定・応急</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>封じ込め・応急</h4>
                    <ul>
                        <li>感染端末の<strong>ネットワーク隔離</strong>・アカウント停止</li>
                        <li>短絡的な電源断で証拠を失わないよう注意</li>
                        <li>業務継続との<strong>バランス</strong>（過剰隔離による二次被害）</li>
                        <li>暫定措置と恒久対策を区別する</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>影響範囲の特定</h4>
                    <ul>
                        <li>ログ・IoC から横展開・漏洩範囲を調査</li>
                        <li>影響資産・利用者・データの洗い出し</li>
                        <li>タイムラインの再構築</li>
                        <li>必要に応じフォレンジックを実施</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q5】 対応策（復旧措置・連絡・広報など）の決定／実施における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">対応策の決定・実施</span>
            <div class="check-measure-box">
                <ul>
                    <li>根絶（マルウェア除去等）後の<strong>安全な復旧</strong>（クリーンなバックアップからの復元）</li>
                    <li>パッチ適用・設定変更・認証情報の<strong>リセット</strong>など再発防止を含む復旧</li>
                    <li>経営層・関係部門・委託先・顧客・監督官庁への<strong>適時・正確な連絡</strong></li>
                    <li>対外<strong>広報</strong>は事実確認後に統一窓口から発信（憶測・未確認情報の拡散防止）</li>
                    <li>個人情報漏えい時は法令・ガイドラインに沿った<strong>本人通知・当局報告</strong></li>
                    <li>対応状況を記録し，関係者間で<strong>情報共有</strong>する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 インシデント収束後の対応における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">収束後（Post-Incident）</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>事後レビュー</strong>（ポストモーテム）で原因・対応の妥当性を検証する</li>
                    <li>再発防止策（技術・運用・教育）を策定し，実施状況を追跡する</li>
                    <li>手順書・プレイブック・検知ルールを<strong>更新</strong>する</li>
                    <li>インシデント報告書を作成し，経営層へ報告する</li>
                    <li>証拠・ログの<strong>保管期間</strong>と廃棄方針を守る</li>
                    <li>得られた教訓を組織のセキュリティ改善（PDCA）に反映する</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「収束＝終了」ではなく，<strong>学習と改善</strong>までが対応サイクルです。</p>
        `
    },
    {
        q: "【Q7】 サイバーレジリエンスとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">サイバーレジリエンス</span>
            <div class="check-measure-box">
                <p>サイバー攻撃や障害が発生しても，組織が<strong>予測・耐性・応答・回復</strong>を通じて，事業・サービスを継続・復旧できる能力のことです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>Anticipate（予測）</strong>：脅威の把握，備え</li>
                    <li><strong>Withstand（耐性）</strong>：攻撃を受けても致命傷を避ける設計</li>
                    <li><strong>Recover（回復）</strong>：迅速な復旧</li>
                    <li><strong>Adapt（適応）</strong>：学習し，次回に備えて改善</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「侵入を完全に防ぐ」だけでなく，<strong>発生を前提に継続・回復する</strong>考え方が特徴です。</p>
        `
    },
    {
        q: "【Q8】 PDCA に対する OODA の特徴と実施内容について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">OODA ループ</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>OODA の4ステップ</h4>
                    <ul>
                        <li><strong>Observe（観察）</strong>：状況・脅威情報の収集</li>
                        <li><strong>Orient（情勢判断）</strong>：分析・意味づけ</li>
                        <li><strong>Decide（意思決定）</strong>：対応方針の決定</li>
                        <li><strong>Act（行動）</strong>：実行し，再び観察へ</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>PDCA との違い・特徴</h4>
                    <ul>
                        <li>PDCA：計画的・継続的な<strong>改善サイクル</strong></li>
                        <li>OODA：変化の速い状況での<strong>迅速な意思決定</strong></li>
                        <li>インシデント対応など<strong>リアルタイム性</strong>が求められる場面に適する</li>
                        <li>両者は対立せず，平時は PDCA，有事は OODA と使い分ける</li>
                    </ul>
                </div>
            </div>
        `
    }
];
