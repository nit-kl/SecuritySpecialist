// Check! 固定式パスワード 3問
const checkFixedPasswordData = [
    {
        q: "【Q1】 どのようなパスワードが破られやすいのか。",
        ans: `
            <span class="check-category-badge badge-isms">破られやすいパスワード</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>短い</strong>パスワード（文字数が少ない）</li>
                    <li>文字種が少ない（数字のみ，英小文字のみなど）</li>
                    <li>辞書に載る単語，人名，地名，誕生日，連番（123456 等）</li>
                    <li>サービス名・ユーザ名と同一・類似のもの</li>
                    <li>使い回しされた漏えい済みパスワード</li>
                    <li>キーボード配列の単純パターン（qwerty 等）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">総当たり・辞書攻撃の対象になりやすいものが典型です。</p>
        `
    },
    {
        q: "【Q2】 固定式パスワードの設定及び管理面での対策を挙げよ。",
        ans: `
            <span class="check-category-badge badge-isms">設定・管理面の対策</span>
            <div class="check-measure-box">
                <ul>
                    <li>十分な長さと文字種の組合せ（複雑性）を求める</li>
                    <li>初期パスワードの強制変更，推測容易な既定値の禁止</li>
                    <li>使い回し禁止，漏えい済みパスワードの拒否</li>
                    <li>パスワードマネージャの利用を推奨</li>
                    <li>共有アカウントの禁止，個別アカウント化</li>
                    <li>定期変更の一律強制より，侵害時の即時変更を重視</li>
                    <li>多要素認証の併用で固定パスワード単体依存を減らす</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 固定式パスワードによる認証システムの実装面での脆弱性とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">実装面の脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li>平文保存，弱いハッシュ（ソルトなし，高速ハッシュのまま等）</li>
                    <li>通信経路での平文送信（暗号化なし）</li>
                    <li>総当たり・スプレー攻撃への<strong>試行回数制限・ロックアウト</strong>不足</li>
                    <li>エラーメッセージによるアカウント存在の漏洩</li>
                    <li>パスワードリセットの設計不備（推測可能な質問，トークン脆弱）</li>
                    <li>ログへのパスワード記録，デバッグ出力への混入</li>
                    <li>クライアント側のみのチェックでサーバ検証がない</li>
                </ul>
            </div>
        `
    }
];
