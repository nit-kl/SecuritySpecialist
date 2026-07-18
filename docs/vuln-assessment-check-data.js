// Check! 脆弱性診断 10問
const checkVulnAssessmentData = [
    {
        q: "【Q1】 なぜ、脆弱性診断を実施する必要があるのか。",
        ans: `
            <span class="check-category-badge badge-vuln">脆弱性診断の必要性</span>
            <div class="check-measure-box">
                <ul>
                    <li>システムやアプリに潜む<strong>弱点を早期に発見</strong>し、悪用される前に対策する</li>
                    <li>パッチ未適用・設定不備・開発時の欠陥など、<strong>見落としやすいリスク</strong>を可視化する</li>
                    <li>優先度付けにより、限られたリソースで<strong>効果的な是正</strong>を行う</li>
                    <li>法令・ガイドライン・契約・顧客要求への対応（説明責任）</li>
                    <li>リリース前・構成変更後の品質確認として、インシデント予防につなげる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 脆弱性診断を実施する対象となるのは何か。",
        ans: `
            <span class="check-category-badge badge-vuln">診断対象</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>OS・ミドルウェア・市販ソフトウェア</strong>（サーバ、クライアント、ネットワーク機器等）</li>
                    <li><strong>Webアプリケーション</strong>・API・モバイルアプリ</li>
                    <li>クラウド設定・コンテナ・仮想化基盤</li>
                    <li>ネットワーク機器・無線LAN・IoT／組込み機器</li>
                    <li>外部公開資産（ドメイン、公開IP、証明書など）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">対象は資産台帳・公開面・業務重要度に基づいて選定します。</p>
        `
    },
    {
        q: "【Q3】 OSや市販ソフトウェアの診断は、なぜ継続的に定期的に実施する必要があるのか。",
        ans: `
            <span class="check-category-badge badge-vuln">定期診断が必要な理由</span>
            <div class="check-measure-box">
                <ul>
                    <li>新たな脆弱性が<strong>継続的に公開</strong>されるため</li>
                    <li>パッチ適用状況や設定が時間とともに<strong>ドリフト</strong>する</li>
                    <li>構成変更・追加導入・権限変更で<strong>新たな弱点</strong>が生じる</li>
                    <li>攻撃手法・悪用状況（KEV 等）が変化し、<strong>優先度が変わる</strong></li>
                    <li>一度の診断では、その時点のスナップショットにすぎない</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 OSや市販ソフトウェアの診断を実施する際の留意点としては何があるか。",
        ans: `
            <span class="check-category-badge badge-vuln">OS・市販ソフト診断の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>資産・バージョン・公開面を正確に把握してから実施する</li>
                    <li>本番影響（負荷・可用性）を考慮し、必要なら検証環境や時間帯を調整する</li>
                    <li>認証情報の扱い、スキャン権限、対象範囲を事前に合意する</li>
                    <li>誤検知・過検知を踏まえ、<strong>人手での確認</strong>と優先度付けを行う</li>
                    <li>発見後はパッチ適用・設定修正・代替策まで<strong>是正管理</strong>する</li>
                    <li>診断ツール自体の更新と、結果の記録・再診断計画を残す</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 Webアプリケーションの診断を実施する際の留意点としては何があるか。",
        ans: `
            <span class="check-category-badge badge-vuln">Webアプリ診断の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>対象URL・アカウント・権限・テストデータの範囲を明確にする</li>
                    <li>認証付き画面・API・ファイルアップロード等、<strong>業務フロー全体</strong>をカバーする</li>
                    <li>本番診断ではデータ破壊・大量リクエストに注意し、必要ならステージングを使う</li>
                    <li>OWASP Top 10 等を踏まえ、自動診断と手動診断を組み合わせる</li>
                    <li>診断結果の再現手順・影響・対策案を開発側に共有する</li>
                    <li>修正後に<strong>再診断</strong>し、回帰がないことを確認する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 ファジングとは何か。",
        ans: `
            <span class="check-category-badge badge-vuln">ファジング（Fuzzing）</span>
            <div class="check-measure-box">
                <p>プログラムやプロトコルに対し、<strong>不正・予期しない・ランダムな入力</strong>を大量に与え、クラッシュや異常応答などから脆弱性を検出する自動テスト手法です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>バッファオーバーフロー、パーサ欠陥、入力検証不足などの発見に有効</li>
                    <li>ブラックボックス／グレーボックス／ホワイトボックスなど実装形態がある</li>
                    <li>カバレッジ誘導型ファジングは、実行経路を広げて欠陥を探しやすい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 ASMの実施による効果として何があるか。",
        ans: `
            <span class="check-category-badge badge-vuln">ASM（Attack Surface Management）</span>
            <div class="check-measure-box">
                <ul>
                    <li>インターネット公開資産（ドメイン、IP、証明書、サービス）の<strong>継続的な可視化</strong></li>
                    <li>シャドーIT・忘れられたサーバ・意図しない公開の発見</li>
                    <li>攻撃面の変化を早期に把握し、診断・是正の優先順位付けに活用</li>
                    <li>外部からの見え方に近い視点で、露出リスクを低減</li>
                    <li>資産台帳の鮮度維持と、脆弱性管理プロセスの効率化</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 ASMと脆弱性診断の違いについて述べよ。",
        ans: `
            <span class="check-category-badge badge-vuln">ASM と脆弱性診断</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>ASM</h4>
                    <ul>
                        <li>「何が攻撃面として見えるか」を<strong>継続的に発見・監視</strong></li>
                        <li>資産・公開サービスの洗い出しが中心</li>
                        <li>変化の検知と優先度付けに強い</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>脆弱性診断</h4>
                    <ul>
                        <li>特定対象に対し、<strong>既知／潜在の弱点を深く検査</strong></li>
                        <li>スキャン・手動検証で脆弱性の有無を確認</li>
                        <li>是正の根拠となる詳細な所見を提供</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">ASMで攻撃面を把握し、脆弱性診断で深掘りする、という<strong>補完関係</strong>が一般的です。</p>
        `
    },
    {
        q: "【Q9】 TLPTの概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-vuln">TLPT（Threat-Led Penetration Testing）</span>
            <div class="check-measure-box">
                <p>脅威インテリジェンスに基づき、<strong>現実の攻撃者を模したシナリオ</strong>で組織のサイバーレジリエンスを検証するペネトレーションテスト手法です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>単なる網羅的スキャンではなく、想定脅威に沿った攻撃シミュレーション</li>
                    <li>検知・対応・復旧を含む運用能力の評価に重点</li>
                    <li>金融分野などで枠組み化されている（例：TIBER 系の考え方）</li>
                    <li>事前合意したルール・範囲・安全対策のもとで実施</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 TLPTにおけるレッドチーム、ブルーチームの役割について述べよ。",
        ans: `
            <span class="check-category-badge badge-vuln">レッド／ブルーチーム</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>レッドチーム</h4>
                    <ul>
                        <li>攻撃側を演じ、脅威シナリオに沿って侵入・横展開などを試みる</li>
                        <li>防御の抜け穴や検知漏れを明らかにする</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>ブルーチーム</h4>
                    <ul>
                        <li>防御・監視・インシデント対応側として攻撃を検知し対処する</li>
                        <li>アラート対応、封じ込め、復旧手順の実効性を検証する</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">両者の攻防結果を通じて、技術・プロセス・人の両面から改善点を抽出します。ホワイトチームが調整役となる場合もあります。</p>
        `
    }
];
