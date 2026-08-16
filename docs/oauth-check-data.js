// Check! ID連携／OAuth／OpenID Connect 2問
const checkOauthData = [
    {
        q: "【Q1】 ID連携とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">ID連携</span>
            <div class="check-measure-box">
                <p><strong>ID連携</strong>（フェデレーション）は，異なる組織やドメインの間で認証・属性情報を安全にやり取りし，相手先サービスごとに新たにアカウントを作らなくても利用できるようにする仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>認証を担う側（IdP）とサービスを提供する側（SP／RP）が信頼関係を結ぶ</li>
                    <li>代表的な技術：SAML，OAuth 2.0，OpenID Connect</li>
                    <li>利便性（SSO）と，パスワードの渡し合いを避けるセキュリティ向上が期待できる</li>
                    <li>相手組織の認証結果を信頼するため，信頼関係とトークン検証が重要</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 OAuth と OpenID Connect について説明せよ。",
        ans: `
            <span class="check-category-badge badge-isms">OAuth / OpenID Connect</span>
            <div class="check-measure-box">
                <p><strong>OAuth 2.0</strong>は<strong>認可</strong>のためのプロトコルです。リソースオーナーの許可を得て，クライアントにアクセストークンを発行し，リソースサーバ上の資源へ限定的にアクセスさせます。本人確認（認証）そのものが目的ではありません。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>リソースオーナー</strong>：資源の所有者（利用者）</li>
                    <li><strong>クライアント</strong>：API を利用するサービス</li>
                    <li><strong>リソースサーバ</strong>：API／資源を提供するサービス</li>
                    <li><strong>認可サーバ</strong>：利用者の許可を得てアクセストークンを発行する</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>OpenID Connect（OIDC）</strong>は OAuth 2.0 の上に載る<strong>認証</strong>の層です。認可サーバ（OpenID Provider）が ID トークンを発行し，「誰がログインしたか」をクライアント（Relying Party）に伝えます。ログイン連携には OIDC，API への権限委譲には OAuth 2.0 という使い分けが基本です。</p>
            </div>
        `
    }
];
