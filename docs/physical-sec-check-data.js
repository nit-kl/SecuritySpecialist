// Check! 物理セキュリティ 6問
const checkPhysicalSecData = [
    {
        q: "【Q1】 災害や障害への設備面の対策を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">設備面の対策</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>災害対策</h4>
                    <ul>
                        <li>耐震・免震構造，<strong>防火・防水</strong>対策</li>
                        <li>UPS（無停電電源装置），<strong>発電機</strong></li>
                        <li>データセンタの<strong>二拠点化</strong>・遠隔地バックアップ</li>
                        <li>空調・湿度管理（機器保護）</li>
                        <li>避雷・接地</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>障害・可用性</h4>
                    <ul>
                        <li>サーバ・ネットワークの<strong>冗長化</strong></li>
                        <li>RAID，ミラーリング，クラスタ構成</li>
                        <li>定期<strong>バックアップ</strong>と復旧手順</li>
                        <li>火災感知・消火設備（ガス消火等）</li>
                        <li>BCP・DR（災害復旧）計画</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q2】 不法侵入などの物理環境における人的脅威への対策を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">人的脅威への対策</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>入退室管理</strong>（IC カード，生体認証，暗証番号）</li>
                    <li><strong>物理的区画</strong>（ゾーニング，施錠，フェンス）</li>
                    <li><strong>受付・来訪者管理</strong>（同伴，バッジ，記録）</li>
                    <li><strong>監視カメラ</strong>（CCTV）と録画</li>
                    <li><strong>警備員</strong>・巡回</li>
                    <li>重要区域への<strong>多要素認証</strong>・二重扉</li>
                    <li>退職者・委託先の<strong>アクセス権限剥奪</strong></li>
                    <li>清掃・保守業者への<strong>立会い</strong></li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 物理区画の分類における留意点を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">物理区画の分類</span>
            <div class="check-measure-box">
                <ul>
                    <li>情報資産の<strong>重要度</strong>に応じて区画レベルを決める</li>
                    <li>一般区域・制限区域・重要区域など<strong>段階的</strong>に区分</li>
                    <li>区画ごとに<strong>入退室資格</strong>と管理策を明確化</li>
                    <li>区画の<strong>境界</strong>を物理的に識別できるようにする</li>
                    <li>共用区域と機密区域の<strong>分離</strong></li>
                    <li>区画変更時の<strong>見直し</strong>（レイアウト変更，組織変更）</li>
                    <li>標識・表示による<strong>周知</strong></li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">ISO/IEC 27002 の物理的セキュリティ（Perimeter security, Entry controls 等）と整合させます。</p>
        `
    },
    {
        q: "【Q4】 一般的な入退室管理システムの種類によるメリット・デメリットについて述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">入退室管理システム</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>IC カード / 磁気カード</h4>
                    <ul>
                        <li><strong>メリット</strong>：導入容易，コスト低，ログ取得</li>
                        <li><strong>デメリット</strong>：カードの貸与・紛失，なりすまし</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>生体認証（指紋・虹彩等）</h4>
                    <ul>
                        <li><strong>メリット</strong>：本人性が高い，カード不要</li>
                        <li><strong>デメリット</strong>：コスト高，プライバシー，障害時の代替手段</li>
                    </ul>
                </div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>暗証番号（PIN）</h4>
                <ul>
                    <li><strong>メリット</strong>：低コスト，シンプル</li>
                    <li><strong>デメリット</strong>：肩越し盗み見，使い回し，推測可能</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">重要区域では<strong>多要素</strong>（カード＋PIN，カード＋生体）の組合せが推奨されます。</p>
        `
    },
    {
        q: "【Q5】 監視カメラの必要性と設置による効果について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">監視カメラ（CCTV）</span>
            <div class="check-measure-box">
                <h4>必要性</h4>
                <ul>
                    <li>不法侵入・不正行為の<strong>抑止</strong>（威嚇効果）</li>
                    <li>インシデント発生時の<strong>事後調査</strong>（証拠保全）</li>
                    <li>入退室記録との<strong>相互補完</strong></li>
                    <li>24 時間監視が必要な区域の<strong>目視代替</strong></li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>設置効果・留意点</h4>
                <ul>
                    <li>死角の排除，適切な<strong>画角・解像度</strong></li>
                    <li>録画データの<strong>保管期間</strong>とアクセス制御</li>
                    <li>個人情報保護・<strong>プライバシー</strong>への配慮（掲示，目的限定）</li>
                    <li>定期点検・メンテナンス</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 人的脅威への対策における運用管理上の留意点を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">運用管理上の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>入退室<strong>ログの定期確認</strong>と異常検知</li>
                    <li>アクセス権限の<strong>定期見直し</strong>（退職・異動時の即時変更）</li>
                    <li>来訪者・委託先の<strong>ルール周知</strong>と教育</li>
                    <li>清掃・保守時の<strong>立会い</strong>と記録</li>
                    <li>鍵・カードの<strong>貸与・返却・紛失</strong>手続</li>
                    <li>テールゲート（後続者の無断入室）への<strong>注意喚起</strong></li>
                    <li>監視映像・ログの<strong>保管・廃棄</strong>ポリシ</li>
                    <li>物理セキュリティの<strong>訓練・点検</strong></li>
                </ul>
            </div>
        `
    }
];
