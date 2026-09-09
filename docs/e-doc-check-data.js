// Check! 電子文書・タイムスタンプ 4問
const checkEDocData = [
    {
        q: "【Q1】 電子帳簿保存法によって何が可能となったか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">電子帳簿保存法</span>
            <div class="check-measure-box">
                <p><strong>電子帳簿保存法</strong>（電子計算機を使用して作成する国税関係帳簿書類の保存方法等の特例に関する法律）により，次が可能になりました。</p>
                <ul style="margin-top:0.75rem;">
                    <li>国税関係の<strong>帳簿・書類</strong>を，一定の要件を満たせば<strong>電子データで保存</strong>できる</li>
                    <li>紙での保存が原則だった帳簿・書類の電子化による保管コスト削減</li>
                    <li>スキャナ保存（紙原本の電子化保存），電子取引データの保存義務の明確化（改正で強化）</li>
                    <li>真実性・可視性の確保（タイムスタンプ，検索機能等）が要件となる場合がある</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 e-文書法によって何が可能となったか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">e-文書法</span>
            <div class="check-measure-box">
                <p><strong>e-文書法</strong>（民間事業者等が行う書面の保存等における情報通信の技術の利用に関する法律等）により，次が可能になりました。</p>
                <ul style="margin-top:0.75rem;">
                    <li>法令で<strong>紙の書面保存</strong>が求められていた文書について，電磁的記録による保存を認める</li>
                    <li>対象は商法・会社法関連書類など，個別法令で紙保存が義務づけられていたもの（電子帳簿保存法の対象外も含む広範な分野）</li>
                    <li>紙と電子の<strong>二重保存負担の軽減</strong>，業務効率化</li>
                </ul>
                <p style="margin-top:0.75rem;">電子帳簿保存法が主に国税関係を対象とするのに対し，e-文書法はより広い法令上の書面保存を電子化可能にする枠組みです。</p>
            </div>
        `
    },
    {
        q: "【Q3】 タイムビジネスとは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">タイムビジネス</span>
            <div class="check-measure-box">
                <ul>
                    <li>信頼できる<strong>時刻情報</strong>を提供・利用する事業・サービス全般を指す</li>
                    <li>正確な時刻源（標準時）に基づき，タイムスタンプや時刻認証を提供</li>
                    <li>電子契約，電子帳簿保存，ログの証拠力強化などに活用</li>
                    <li>時刻認証業務（TSA：Time Stamping Authority）を含むエコシステム</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 タイムスタンプとは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">タイムスタンプ</span>
            <div class="check-measure-box">
                <p><strong>タイムスタンプ</strong>は，特定のデータ（ハッシュ値等）が<strong>ある時刻に存在した</strong>ことを，信頼できる第三者（TSA）が証明する電子的な仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>データの<strong>存在時刻の証明</strong>と<strong>改ざん検知</strong>に利用</li>
                    <li>電子署名と組み合わせ，署名時点の有効性・長期保存を支援</li>
                    <li>電子帳簿保存法のスキャナ保存・電子取引保存で要件となる場合がある</li>
                    <li>トークンには時刻，対象ハッシュ，TSA の署名等が含まれる</li>
                </ul>
            </div>
        `
    }
];
