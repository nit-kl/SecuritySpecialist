// Check! バイオメトリクス認証 3問
const checkBiometricsData = [
    {
        q: "【Q1】 バイオメトリクスによる認証とはどのような認証方式か。",
        ans: `
            <span class="check-category-badge badge-isms">バイオメトリクス認証</span>
            <div class="check-measure-box">
                <p><strong>バイオメトリクス認証</strong>は，個人の身体的・行動的特徴（生体情報）を用いて本人を確認する方式です（Something you are）。</p>
                <ul style="margin-top:0.75rem;">
                    <li>身体的特徴：指紋，掌紋，顔，虹彩，静脈，声紋 など</li>
                    <li>行動的特徴：筆跡，キーストローク，歩行 など</li>
                    <li>知識や所有物ではなく，本人固有の特徴で認証する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 バイオメトリクスによる認証は他の認証方式に比べてどのような特徴があるか。",
        ans: `
            <span class="check-category-badge badge-isms">他方式との比較</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>利点</h4>
                    <ul>
                        <li>忘れ・紛失・貸与が起きにくい</li>
                        <li>本人性が高く，なりすまし耐性が比較的高い</li>
                        <li>経年変化が少ない特徴が多い（特に成人の虹彩など）</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>留意点</h4>
                    <ul>
                        <li>変更・再発行が困難（漏えい時の影響大）</li>
                        <li>誤拒否（FRR）・誤受理（FAR）のトレードオフ</li>
                        <li>プライバシー・身体的差異への配慮が必要</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q3】 主なバイオメトリック認証システムを導入・運用する上での問題点として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">導入・運用上の問題点</span>
            <div class="check-measure-box">
                <ul>
                    <li>テンプレート漏えい時にパスワードのように簡単に変更できない</li>
                    <li>FAR／FRR の設定と利用者体験のバランス</li>
                    <li>けが・病気・加齢・環境（乾燥，照明）による認証失敗</li>
                    <li>偽体（レプリカ）攻撃や提示攻撃への対策</li>
                    <li>導入コスト，端末配備，利用者登録の負荷</li>
                    <li>個人情報保護・同意取得・保管場所の管理</li>
                    <li>障害時の代替認証手段の用意</li>
                </ul>
            </div>
        `
    }
];
