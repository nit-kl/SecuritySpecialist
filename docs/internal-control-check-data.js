// Check! 内部統制 5問
const checkInternalControlData = [
    {
        q: "【Q1】 内部統制とは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">内部統制</span>
            <div class="check-measure-box">
                <p><strong>内部統制</strong>とは，組織の目標達成に向けて，業務の有効性・効率性，財務報告の信頼性，法令等の遵守，資産の保全などを確保するために，組織内で整備・運用されるプロセスです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>経営者をはじめ全社が関与する継続的な仕組み</li>
                    <li>リスクの低減と不正・誤謬の防止・発見に寄与</li>
                    <li>金融商品取引法（J-SOX）や会社法と関連が深い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 日本における内部統制の四つの目的と六つの基本的要素を挙げよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">目的と基本的要素</span>
            <div class="check-measure-box">
                <p><strong>四つの目的</strong>（金融庁「財務報告に係る内部統制の評価及び監査の基準」等）</p>
                <ul>
                    <li>業務の有効性及び効率性</li>
                    <li>財務報告の信頼性</li>
                    <li>事業活動に関わる法令等の遵守</li>
                    <li>資産の保全</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>六つの基本的要素</strong></p>
                <ul>
                    <li>統制環境</li>
                    <li>リスクの評価と対応</li>
                    <li>統制活動</li>
                    <li>情報と伝達</li>
                    <li>モニタリング（監視活動）</li>
                    <li>IT への対応</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 会社法（新会社法）では，内部統制システムについて何を義務付けているか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">会社法と内部統制</span>
            <div class="check-measure-box">
                <ul>
                    <li>大会社等において，取締役会は<strong>内部統制システム（業務の適正を確保するための体制）の整備</strong>に関する決定を行うことが求められる</li>
                    <li>例：法令遵守体制，リスク管理体制，情報保存・管理体制，効率的な職務執行の体制，監査役の監査が実効的に行われるための体制など</li>
                    <li>金融商品取引法の「財務報告に係る内部統制」とは目的・範囲が異なる点に注意（会社法は業務の適正全般）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 IT統制における業務処理統制とIT全般統制について説明せよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">IT統制</span>
            <div class="check-measure-box">
                <p><strong>業務処理統制</strong>（アプリケーションコントロール）</p>
                <ul>
                    <li>個々の業務システム（アプリケーション）の処理過程に組み込まれた統制</li>
                    <li>入力・編集・計算・転送・保管・消去等における正当性・正確性・網羅性・一貫性の確保</li>
                    <li>例：入力チェック，例外処理・再処理，マスタの業務別メンテナンス，入力情報の完全性確保</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>IT 全般統制</strong>（ジェネラルコントロール）</p>
                <ul>
                    <li>組織全体の IT 基盤・方針・体制に関する統制</li>
                    <li>業務処理統制が有効に機能するための土台</li>
                    <li>例：システム開発・保守の管理，アクセス管理，運用管理，外部委託管理</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 COBIT とは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">COBIT</span>
            <div class="check-measure-box">
                <p><strong>COBIT</strong>（Control Objectives for Information and Related Technology）は，ISACA が策定する IT ガバナンス・マネジメントのフレームワークです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>IT を通じて企業目標を達成するための原則・プロセス・目標を体系化</li>
                    <li>内部統制・IT 監査・リスク管理の実務で参照される</li>
                    <li>ガバナンスとマネジメントを区分し，評価・改善の指針を提供</li>
                </ul>
            </div>
        `
    }
];
