// Check! 認証 7問
const checkAuthData = [
    {
        q: "【Q1】 認証にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">認証の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>知識認証</strong>（Something you know）：パスワード，PIN，秘密の質問</li>
                    <li><strong>所有物認証</strong>（Something you have）：IC カード，トークン，スマホ，セキュリティキー</li>
                    <li><strong>生体認証</strong>（Something you are）：指紋，顔，虹彩，静脈</li>
                    <li><strong>位置・行動など</strong>：接続元 IP，端末情報，行動パターン（リスクベース認証で利用）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">本人性確認の要素を組み合わせるほど，なりすまし耐性が高まります。</p>
        `
    },
    {
        q: "【Q2】 個人認証の各方式の長所と短所は何か。",
        ans: `
            <span class="check-category-badge badge-isms">長所・短所</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>知識認証</h4>
                    <ul>
                        <li><strong>長所</strong>：導入容易，追加デバイス不要</li>
                        <li><strong>短所</strong>：推測・使い回し・漏えい・フィッシングに弱い</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>所有物認証</h4>
                    <ul>
                        <li><strong>長所</strong>：知識だけでは突破しにくい</li>
                        <li><strong>短所</strong>：紛失・盗難・貸与，配布・管理コスト</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>生体認証</h4>
                    <ul>
                        <li><strong>長所</strong>：本人性が高く，忘れにくい</li>
                        <li><strong>短所</strong>：変更困難，誤認識，プライバシー，偽造リスク</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>端末情報確認</h4>
                    <ul>
                        <li><strong>長所</strong>：普段使わない端末を検知しやすい</li>
                        <li><strong>短所</strong>：端末共有・機種変更・なりすまし端末への対応が必要</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q3】 端末情報確認がユーザにもたらす利点は何か。",
        ans: `
            <span class="check-category-badge badge-isms">端末情報確認の利点</span>
            <div class="check-measure-box">
                <ul>
                    <li>普段使わない端末からのログインを検知し，追加認証や通知で保護できる</li>
                    <li>パスワード漏えい時でも，未知端末からの利用を抑制しやすい</li>
                    <li>利用者は「いつもの端末」では追加操作が少なく，利便性を保ちやすい</li>
                    <li>不正ログインの早期発見・アカウント保護につながる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 二要素（多要素）認証と二段階認証について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">2FA / MFA / 二段階</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>二要素認証（2FA）</strong>：知識・所有・生体のうち<strong>異なる2要素</strong>を組み合わせる</li>
                    <li><strong>多要素認証（MFA）</strong>：2 つ以上の要素を用いる総称</li>
                    <li><strong>二段階認証</strong>：認証を2回行うこと。同じ要素（例：パスワード＋秘密の質問）でも成立し得る</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">試験では「二段階＝必ず二要素」ではない点に注意します。要素の種類が異なるかがポイントです。</p>
        `
    },
    {
        q: "【Q5】 リスクベース認証とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">リスクベース認証</span>
            <div class="check-measure-box">
                <p>ログイン時の状況（端末，IP，場所，時間帯，行動など）から<strong>リスクを評価</strong>し，リスクが高い場合だけ追加認証を求める方式です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>通常端末・通常場所：パスワードのみ等で通過</li>
                    <li>未知端末・海外 IP・異常操作：ワンタイムパスワードや生体認証を追加</li>
                    <li>利便性とセキュリティのバランスを取りやすい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 FIDO と FIDO2 について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">FIDO / FIDO2</span>
            <div class="check-measure-box">
                <p><strong>FIDO</strong>（Fast IDentity Online）は，FIDO Alliance が推進するパスワードレス認証の標準です。端末（Authenticator）がローカルで本人確認し，秘密鍵で署名した結果だけをサーバへ送ります。<strong>生体情報自体はネットワークに送られません</strong>。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>UAF</strong>：パスワードレス認証</li>
                    <li><strong>U2F</strong>：第二要素としてのセキュリティキー等</li>
                    <li><strong>FIDO2</strong>：WebAuthn（ブラウザ API）＋ CTAP により Web でもパスワードレスを実現</li>
                    <li><strong>パスキー（Passkey）</strong>：FIDO2 を用いた使いやすい認証方式</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 CAPTCHA について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">CAPTCHA</span>
            <div class="check-measure-box">
                <p><strong>CAPTCHA</strong>は，操作主体が人間かプログラム（ボット）かを区別するための仕組みです。画像の文字認識，画像選択，チェックボックス等の課題を提示します。</p>
                <ul style="margin-top:0.75rem;">
                    <li>目的：自動アカウント作成，ブルートフォース，スクレイピング等の抑制</li>
                    <li>本人認証そのものではなく，<strong>ボット対策</strong>が主目的</li>
                    <li>高度なボットやアクセシビリティへの配慮が課題</li>
                </ul>
            </div>
        `
    }
];
