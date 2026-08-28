// Check! その他のセキュア通信（IP-VPN／SSH／S/MIME 等）8問
const checkSecureCommData = [
    {
        q: "【Q1】 IP-VPN はどのような特徴をもつネットワーク技術か。",
        ans: `
            <span class="check-category-badge badge-isms">IP-VPN</span>
            <div class="check-measure-box">
                <p><strong>IP-VPN</strong>は，通信事業者が提供する閉域の IP ネットワーク上に，契約者専用の仮想プライベート網を構築するサービスです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>インターネットを経由せず，キャリア網内で拠点間を接続する</li>
                    <li>転送には <strong>MPLS</strong>（ラベルによる高速転送）がよく使われる</li>
                    <li>利用者は暗号化の設定・運用をキャリアに任せられることが多い</li>
                    <li>拠点間 VPN として，IPsec VPN と対比して説明される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 IP-VPN と IPsec VPN を機密性の観点から比較した場合の違いは何か。",
        ans: `
            <span class="check-category-badge badge-isms">機密性の比較</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>IPsec VPN</strong>：利用者側で暗号化（ESP 等）を行うため，インターネット上でも通信内容を秘匿しやすい。鍵・アルゴリズムを自組織で管理できる</li>
                    <li><strong>IP-VPN</strong>：閉域網であり第三者からの盗聴は一般に困難だが，網内の暗号化はキャリアの実装・契約に依存する。利用者自身がパケットを暗号化するとは限らない</li>
                    <li>インターネット経由で強い機密性が必要な場合は IPsec（や TLS）が明確。閉域性をキャリアに委ねるのが IP-VPN</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 IP-VPN と IPsec VPN を可用性の観点から比較した場合の違いは何か。",
        ans: `
            <span class="check-category-badge badge-isms">可用性の比較</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>IP-VPN</strong>：キャリアが網の冗長化・品質保証（SLA）を担うことが多く，可用性はサービス品質に依存する。インターネットの輻輳の影響を受けにくい</li>
                    <li><strong>IPsec VPN</strong>：インターネットの経路・品質に依存し，輻輳や障害の影響を受けやすい。拠点側ルータの冗長化は利用者責任になりやすい</li>
                    <li>安定した拠点間接続をキャリア保証で得たい場合は IP-VPN，自前でインターネット上に張る場合は IPsec VPN</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 SSH は主にどのような用途で用いられるか。",
        ans: `
            <span class="check-category-badge badge-isms">SSH</span>
            <div class="check-measure-box">
                <p><strong>SSH</strong>（Secure Shell）は，通信の暗号化と利用者認証の機能をもち，遠隔コンピュータへ安全にログインするために広く使われます。</p>
                <ul style="margin-top:0.75rem;">
                    <li>リモートログイン（TELNET の代替）</li>
                    <li>リモートでのコマンド実行</li>
                    <li>ファイル転送（SCP／SFTP）</li>
                    <li>ポートフォワーディング（トンネル）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 PPTP と L2TP にはどのような違いがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">PPTP / L2TP</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>PPTP</strong>（Point to Point Tunneling Protocol）：Microsoft が開発。PPP フレームを IP でカプセル化しトンネルを作る。独自の暗号化はあるが，現在は脆弱とされ非推奨のことが多い</li>
                    <li><strong>L2TP</strong>（Layer 2 Tunneling Protocol）：L2F と PPTP を統合した層 2 トンネル。単体では強い暗号化をもたず，通常は <strong>IPsec と併用</strong>（L2TP/IPsec）して機密性を確保する</li>
                    <li>どちらもリモートアクセス VPN のトンネル技術として説明される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 S/MIME と PGP の特徴と両者の違いについて述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">S/MIME / PGP</span>
            <div class="check-measure-box">
                <p><strong>PGP</strong>（Pretty Good Privacy）は 1991 年に開発され，RSA や IDEA などを用いるメール暗号化・署名の仕組みです。公開鍵は利用者（メールアドレス）単位で用意し，信頼の輪（Web of Trust）で鍵を信頼します。</p>
                <p style="margin-top:0.75rem;"><strong>S/MIME</strong>は RSA Security が開発した，MIME にセキュリティを加えた方式です。利用者が公開鍵を生成し，<strong>S/MIME 証明書</strong>（PKI／CA）を取得して使うため，不特定多数との信頼性の高いやり取りに向きます。</p>
                <ul style="margin-top:0.75rem;">
                    <li>どちらもメール本文の暗号化・電子署名が目的</li>
                    <li>鍵管理：PGP は個人間の信頼，S/MIME は証明書（CA）が中心</li>
                    <li>公開鍵の単位はどちらもメールアドレス単位（SMTP over TLS のサーバ単位とは異なる）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 S/MIME を導入するメリットと留意点は何か。",
        ans: `
            <span class="check-category-badge badge-isms">S/MIME の導入</span>
            <div class="check-measure-box">
                <p><strong>メリット</strong></p>
                <ul>
                    <li>メールの機密性（暗号化）と真正性・完全性（署名）を確保できる</li>
                    <li>証明書ベースで組織的な展開・失効管理がしやすい</li>
                    <li>多くのメールクライアントが標準対応している</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>留意点</strong></p>
                <ul>
                    <li>証明書の発行・更新・失効の運用負荷</li>
                    <li>相手も S/MIME 対応でなければ暗号化メールを読めない</li>
                    <li>ゲートウェイでのウイルス検査と暗号化の両立が難しいことがある</li>
                    <li>テキストの正規化など，署名検証のための実装要件がある</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 S/MIME においてテキストデータの正規化が必要なのはなぜか。",
        ans: `
            <span class="check-category-badge badge-isms">テキストの正規化</span>
            <div class="check-measure-box">
                <p>電子署名は，署名対象のバイト列が 1 ビットでも変わると検証に失敗します。メールは転送途中で改行コード（CRLF／LF）や文字コードの扱いが変わり得るため，送信側と受信側で同じ正規化規則を適用し，署名対象を一致させる必要があります。</p>
                <ul style="margin-top:0.75rem;">
                    <li>改行・空白・文字符号化などの差異を吸収する</li>
                    <li>正規化しないと，改ざんがなくても署名検証エラーになり得る</li>
                    <li>S/MIME の仕様で正規化手順が定められている</li>
                </ul>
            </div>
        `
    }
];
