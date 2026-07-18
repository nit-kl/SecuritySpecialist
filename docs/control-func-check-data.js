// Check! 対策の機能 4問
const checkControlFuncData = [
    {
        q: "【Q1】 予防の働きをする対策にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">予防</span>
            <p>事故・不正の<strong>発生そのものを未然に減らす</strong>働きをする対策です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>情報セキュリティポリシ・規程の整備と<strong>周知・教育・訓練</strong></li>
                    <li>リスクアセスメント，脆弱性診断・管理</li>
                    <li>パッチ適用計画，セキュアな設計・開発（セキュアコーディング）</li>
                    <li>採用時の身元確認，退職時の手続など<strong>人的管理</strong></li>
                    <li>監視カメラ設置の周知，懲戒規定などによる<strong>抑止効果</strong>を伴う施策</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">「起きにくくする」段階の対策です。技術的な壁（FW 等）は主に防止・防御側に分類されることが多いです。</p>
        `
    },
    {
        q: "【Q2】 防止・防御の働きをする対策にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">防止・防御</span>
            <p>脅威の侵入や被害の拡大を<strong>技術・手続で食い止める</strong>働きをする対策です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>ファイアウォール，WAF，IPS（遮断機能），ネットワーク分離</li>
                    <li>認証・認可，アクセス制御，最小権限，暗号化</li>
                    <li>ウイルス対策ソフト，アプリケーション制御，実行制限</li>
                    <li>入退室管理，施錠，生体認証などの<strong>物理的防御</strong></li>
                    <li>入力チェック，パラメータバインドなどアプリ側の防御策</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">予防が「起きにくくする」のに対し，防止・防御は「入らせない・通さない・読ませない」イメージです。</p>
        `
    },
    {
        q: "【Q3】 検知・追跡の働きをする対策にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">検知・追跡</span>
            <p>異常や不正を<strong>早期に発見</strong>し，原因・影響範囲を<strong>追跡</strong>する働きをする対策です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>IDS／IPS（検知），SIEM，ログ監視・相関分析</li>
                    <li>EDR，不正検知システム，改ざん検知</li>
                    <li>入退室記録，操作ログ，特権ID の利用監視</li>
                    <li>DLP，通信の異常検知，ハニーポット</li>
                    <li>インシデント対応における<strong>フォレンジック・証跡保全</strong></li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">内部不正対策では，予防・防止だけでは不十分なことが多く，検知・追跡の強化が特に重要です。</p>
        `
    },
    {
        q: "【Q4】 回復の働きをする対策にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">回復</span>
            <p>インシデント発生後，業務・システムを<strong>正常な状態へ戻す</strong>働きをする対策です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>バックアップの取得・遠隔地保管，リストア手順</li>
                    <li>冗長化・フェールオーバ，代替機・代替拠点の準備</li>
                    <li>BCP／コンティンジェンシープラン，復旧訓練</li>
                    <li>インシデント対応手順（封じ込め→根絶→復旧）</li>
                    <li>システムの再構築，クリーンな環境への切替え</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">可用性（Availability）と直結する機能です。サーバ二重化なども回復・可用性確保の典型例です。</p>
        `
    }
];
