// Check! SSO／SAML／アイデンティティ管理 8問
const checkSsoData = [
    {
        q: "【Q1】 SSO とはどのような認証システムか。",
        ans: `
            <span class="check-category-badge badge-isms">SSO</span>
            <div class="check-measure-box">
                <p><strong>SSO</strong>（Single Sign-On）は，一度の認証で複数のサーバやアプリケーションを利用できるようにする認証システムです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>利用者は最初のログイン以降，個別システムの ID／パスワード入力を繰り返さなくてよい</li>
                    <li>認証の窓口を集約し，認証状態（チケット，Cookie，アサーション等）を各サービスへ伝える</li>
                    <li>IEEE 802.1X のサプリカント説明などと混同しやすいが，SSO は「一度の認証で複数サービス」が本質</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 SSO を導入することによってどのような効果が期待できるか。",
        ans: `
            <span class="check-category-badge badge-isms">導入効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>パスワード入力回数の削減と利便性の向上</li>
                    <li>パスワード使い回し・メモ書きなどのリスク低減</li>
                    <li>アカウント発行・失効を認証基盤側で一括管理しやすい</li>
                    <li>退職・異動時の権限剥奪漏れを減らせる</li>
                    <li>認証ログを集約し，監査・インシデント調査がしやすい</li>
                </ul>
                <p style="margin-top:0.75rem;">一方で，認証基盤が単一障害点・単一攻撃点になり得る点には注意が必要です。</p>
            </div>
        `
    },
    {
        q: "【Q3】 SSO はどのような方式によって実現されているか。",
        ans: `
            <span class="check-category-badge badge-isms">実現方式</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>エージェント型</strong>：各 Web サーバにエージェントを置き，認証サーバと連携して認証する</li>
                    <li><strong>リバースプロキシ型</strong>：利用者とサーバの間にリバースプロキシを置き，そこで認証してから各サービスへ中継する</li>
                    <li><strong>Cookie 型</strong>：認証成功後の Cookie を使って，同一ドメイン内の複数サービスへアクセスする</li>
                    <li><strong>フェデレーション型（SAML 等）</strong>：IdP がアサーションを発行し，SP が検証してアクセスを許可する</li>
                    <li>Kerberos のチケット方式も，一度の認証で複数サービスを使う点で SSO に近い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 エージェント型とリバースプロキシ型のメリット・デメリットは何か。",
        ans: `
            <span class="check-category-badge badge-isms">方式比較</span>
            <div class="check-measure-box">
                <p><strong>エージェント型</strong></p>
                <ul>
                    <li>メリット：アプリごとに細かい制御ができ，既存の URL 構成を変えにくい</li>
                    <li>デメリット：サーバごとにエージェント導入・保守が必要。対応製品・OS が限られる</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>リバースプロキシ型</strong></p>
                <ul>
                    <li>メリット：各サーバへエージェントを入れなくてよい。認証を一箇所に集約できる</li>
                    <li>デメリット：通信がプロキシを経由するためボトルネックになりやすい。アプリ改修や URL 設計が必要になることがある</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 Cookie を用いた SSO システムにおける制限事項として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">Cookie 型の制限</span>
            <div class="check-measure-box">
                <ul>
                    <li>Cookie は原則として<strong>同一ドメイン</strong>（または親ドメイン）でしか共有できない</li>
                    <li>異なるドメインのサービス間では，Cookie だけでは SSO しにくい</li>
                    <li>第三者による Cookie 窃取（XSS 等）でなりすましのリスクがある</li>
                    <li>Secure／HttpOnly などの属性設定を誤ると漏洩しやすい</li>
                    <li>ドメインをまたぐ連携には SAML などのフェデレーションが向く</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 SAML，アサーション，Artifact とはそれぞれ何か。",
        ans: `
            <span class="check-category-badge badge-isms">SAML の用語</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>SAML</strong>（Security Assertion Markup Language）：異なる Web サーバ間で認証・属性・認可の情報を安全に交換するための XML ベースの標準。OASIS が策定</li>
                    <li><strong>アサーション</strong>：認証結果や属性・認可情報を格納した XML ベースの「証明書」。IdP が発行し SP が検証する</li>
                    <li><strong>Artifact</strong>：アサーション本体の代わりに渡す短い参照（チケット）。SP は Artifact を使って IdP からアサーションを取得する（Artifact Resolution）。URL に大きな XML を載せなくてよい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 SAML を用いた SSO システムはどのような仕組みでユーザを認証するのか。",
        ans: `
            <span class="check-category-badge badge-isms">SAML の仕組み</span>
            <div class="check-measure-box">
                <p>SAML による SSO は，アカウント管理と認証を行う <strong>IdP</strong>（Identity Provider）と，サービスを提供する <strong>SP</strong>（Service Provider）で構成されます。</p>
                <ol style="margin-top:0.75rem;">
                    <li>利用者が SP にアクセスする</li>
                    <li>SP が IdP へ認証を要求する（リダイレクト等）</li>
                    <li>IdP が利用者を認証し，<strong>アサーション</strong>を発行する</li>
                    <li>SP がアサーションを検証し，問題がなければアクセスを許可する</li>
                </ol>
                <p style="margin-top:0.75rem;">エージェント型（Cookie）やリバースプロキシ型，Kerberos チケット方式とは構成が異なります。</p>
            </div>
        `
    },
    {
        q: "【Q8】 アイデンティティ管理を実現する各システムの概要について説明せよ。",
        ans: `
            <span class="check-category-badge badge-isms">アイデンティティ管理</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ディレクトリサービス</strong>：利用者・組織・資源の情報を階層的に格納し，認証・認可の基盤とする</li>
                    <li><strong>メタディレクトリ</strong>：複数ディレクトリの情報を同期・統合し，マスターとして一箇所に集約する</li>
                    <li><strong>仮想ディレクトリ</strong>：複数ディレクトリを仮想的に一つのディレクトリとして見せる（実体のコピーは必ずしも持たない）</li>
                    <li><strong>プロビジョニング</strong>：入社・異動・退職に合わせてアカウントの発行・変更・削除を自動連携する</li>
                    <li><strong>フェデレーション</strong>：組織をまたいで認証情報を連携する（SAML 等）</li>
                    <li><strong>IDaaS</strong>：クラウド上で ID 管理・SSO・多要素認証などを提供するサービス</li>
                </ul>
            </div>
        `
    }
];
