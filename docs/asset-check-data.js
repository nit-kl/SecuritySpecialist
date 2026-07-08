// Check! 情報資産管理 9問
const checkAssetData = [
    {
        q: "【Q1】 情報資産の洗出しにおいて記入すべき項目を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報資産の洗出し</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>資産名称</strong>・識別番号</li>
                    <li><strong>資産の種類</strong>（文書，データ，媒体，人的資産など）</li>
                    <li><strong>所在</strong>（保管場所，サーバ，部門）</li>
                    <li><strong>管理者・所有者</strong>（責任者）</li>
                    <li><strong>利用者</strong>・利用範囲</li>
                    <li><strong>重要度・分類</strong>（機密性・完全性・可用性）</li>
                    <li><strong>媒体・形式</strong>（紙，電子ファイル，DB など）</li>
                    <li><strong>作成日・更新日</strong>，保管期間</li>
                    <li><strong>関連システム</strong>・業務プロセス</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">洗出し結果は<strong>情報資産台帳</strong>として管理し，定期的に更新します。</p>
        `
    },
    {
        q: "【Q2】 個人情報の洗出しにおいて記入すべき項目を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">個人情報の洗出し</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>個人情報の名称</strong>・内容（氏名，住所，メール等の項目）</li>
                    <li><strong>取得目的</strong>・利用目的</li>
                    <li><strong>取得方法</strong>・取得元</li>
                    <li><strong>保管場所</strong>・保管方法（暗号化の有無など）</li>
                    <li><strong>管理者・取扱担当者</strong></li>
                    <li><strong>提供先</strong>（第三者提供の有無）</li>
                    <li><strong>保管期間</strong>・廃棄方法</li>
                    <li><strong>件数</strong>の概数</li>
                    <li><strong>要配慮個人情報</strong>の有無</li>
                    <li>関連する<strong>法規制・ポリシ</strong></li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 情報システムの洗出しにおいて記入すべき項目を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">情報システムの洗出し</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>システム名称</strong>・識別情報</li>
                    <li><strong>目的・機能</strong>・扱う業務</li>
                    <li><strong>構成</strong>（サーバ，OS，ミドルウェア，DB）</li>
                    <li><strong>設置場所</strong>・ネットワーク構成</li>
                    <li><strong>管理者・運用担当</strong></li>
                    <li><strong>利用者</strong>・アクセス権限の概要</li>
                    <li><strong>取り扱う情報資産</strong>・個人情報の有無</li>
                    <li><strong>開発・保守業者</strong>（外部委託の有無）</li>
                    <li><strong>重要度</strong>・バックアップ方針</li>
                    <li>稼働・停止の<strong>影響</strong>（BCP 観点）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 情報資産を分類する目的は何か。",
        ans: `
            <span class="check-category-badge badge-isms">情報資産の分類の目的</span>
            <div class="check-measure-box">
                <ul>
                    <li>資産の<strong>重要度</strong>に応じた保護レベルを決める</li>
                    <li>限られた資源を<strong>優先順位</strong>付けして配分する</li>
                    <li>取扱いルール（アクセス制御，暗号化，保管）を<strong>統一</strong>する</li>
                    <li>利用者に<strong>取扱いの区別</strong>を分かりやすく示す</li>
                    <li>リスクアセスメントの<strong>基礎</strong>とする</li>
                    <li>法令・契約上の要求（個人情報，営業秘密等）に対応する</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">一般に「極秘・機密・社外秘・公開」など，組織の分類体系に従います。</p>
        `
    },
    {
        q: "【Q5】 情報資産のラベル付けを行う目的は何か。",
        ans: `
            <span class="check-category-badge badge-isms">ラベル付けの目的</span>
            <div class="check-measure-box">
                <ul>
                    <li>分類結果を<strong>明示</strong>し，誰でも取扱いレベルを認識できるようにする</li>
                    <li>誤った公開・持ち出し・廃棄を<strong>防止</strong>する</li>
                    <li>電子文書のヘッダ／フッタ，紙文書の捺印・スタンプなどで<strong>視覚化</strong>する</li>
                    <li>DLP やアクセス制御との<strong>連携</strong>（ラベルに応じた制御）</li>
                    <li>監査時に分類の運用実態を<strong>確認</strong>しやすくする</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">分類してもラベル付けがなければ，現場での誤りを防ぎにくくなります。</p>
        `
    },
    {
        q: "【Q6】 情報資産のライフサイクルとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">情報資産のライフサイクル</span>
            <p>情報資産が<strong>生成（取得）から廃棄（消去）まで</strong>たどる一連の段階のことです。</p>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-1"></i><strong>1. 作成・取得</strong></div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node server"><i class="fa-solid fa-2"></i><strong>2. 利用・加工</strong></div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node browser"><i class="fa-solid fa-3"></i><strong>3. 保管・保存</strong></div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node server"><i class="fa-solid fa-4"></i><strong>4. 提供・共有</strong>（必要に応じて）</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node safe"><i class="fa-solid fa-5"></i><strong>5. 廃棄・消去</strong></div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">各段階で適切な管理策を適用し，責任者・手順を明確にします。</p>
        `
    },
    {
        q: "【Q7】 情報資産のライフサイクルにおいて，情報セキュリティの観点から特に留意すべき事項を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">ライフサイクル上の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>作成時</strong>：分類・ラベル付け，取扱い権限の設定</li>
                    <li><strong>利用時</strong>：最小権限，持ち出し管理，画面の覗き見防止</li>
                    <li><strong>保管時</strong>：暗号化，バックアップ，保管場所の物理的保護</li>
                    <li><strong>提供時</strong>：承認手続，暗号化通信，相手先の確認</li>
                    <li><strong>廃棄時</strong>：完全消去，媒体の物理破壊，廃棄記録の残し方</li>
                    <li>委託先での取扱い・契約上の<strong>管理義務</strong></li>
                    <li>不要データの<strong>長期保管</strong>の回避（過剰保持リスク）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 個人情報の取扱いにおいて留意すべき点を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">個人情報の取扱い</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>利用目的</strong>の特定・通知・公表</li>
                    <li><strong>取得の適正性</strong>（偽りその他不正な手段によらない）</li>
                    <li><strong>安全管理措置</strong>（組織的・人的・物理的・技術的）</li>
                    <li><strong>第三者提供</strong>の制限と記録</li>
                    <li><strong>委託先</strong>の監督</li>
                    <li><strong>開示等請求</strong>への対応体制</li>
                    <li><strong>要配慮個人情報</strong>の取得・取扱いの厳格化</li>
                    <li>漏えい等発生時の<strong>報告・本人通知</strong>（個人情報保護法）</li>
                    <li>保管期間経過後の<strong>適切な削除</strong></li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 クライアント PC の管理において，情報セキュリティの観点から明確にしておくべき事項を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">クライアント PC の管理</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>運用・設定</h4>
                    <ul>
                        <li>利用者の<strong>責任範囲</strong>・貸与ルール</li>
                        <li><strong>ソフトウェア</strong>の導入・更新方針</li>
                        <li>パッチ適用・<strong>ウイルス対策</strong></li>
                        <li>暗号化（ディスク・リムーバブル）</li>
                        <li>画面ロック・パスワード方針</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>持ち出し・廃棄</h4>
                    <ul>
                        <li><strong>持ち出し</strong>の許可・記録</li>
                        <li>私用端末（BYOD）の可否と条件</li>
                        <li>紛失・盗難時の<strong>報告手順</strong></li>
                        <li>返却・廃棄時の<strong>データ消去</strong></li>
                        <li>台帳管理（資産番号，利用者）</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">TPM（Trusted Platform Module）による鍵管理など，端末のハードウェアレベルの保護も関連します。</p>
        `
    }
];
