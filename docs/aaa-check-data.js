// Check! RADIUS／Kerberos／802.1X など 12問
const checkAaaData = [
    {
        q: "【Q1】 RADIUS は認証システムとして主にどのような目的で用いられるか。",
        ans: `
            <span class="check-category-badge badge-isms">RADIUS</span>
            <div class="check-measure-box">
                <p><strong>RADIUS</strong>（Remote Authentication Dial-In User Service）は，遠隔アクセスやネットワーク接続時の利用者認証を，認証サーバで一元管理するためのプロトコルです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>AAA</strong>（Authentication／Authorization／Accounting）を提供</li>
                    <li>ダイヤルアップ，VPN，無線 LAN（802.1X）などの接続認証に広く利用</li>
                    <li>NAS（アクセスサーバ）が RADIUS クライアントとなり，認証サーバへ問い合わせる</li>
                    <li>通信には UDP を用いる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 Diameter はどのような認証システムか。",
        ans: `
            <span class="check-category-badge badge-isms">Diameter</span>
            <div class="check-measure-box">
                <p><strong>Diameter</strong>は RADIUS の後継として設計された AAA プロトコルです。名称は radius（半径）に対する diameter（直径）に由来します。</p>
                <ul style="margin-top:0.75rem;">
                    <li>TCP または SCTP を用い，信頼性が高い</li>
                    <li>エラー処理，フェイルオーバ，拡張属性が強化されている</li>
                    <li>モバイル通信（3G／LTE 等）の課金・認証基盤でも利用される</li>
                    <li>認証・認可・課金（Accounting）を提供する点は RADIUS と共通</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 TACACS，TACACS+ はどのような認証システムか。",
        ans: `
            <span class="check-category-badge badge-isms">TACACS / TACACS+</span>
            <div class="check-measure-box">
                <p><strong>TACACS</strong>／<strong>TACACS+</strong>は，主にネットワーク機器の管理者ログインを集中認証するためのプロトコルです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>Cisco 系機器の装置管理（ルータ／スイッチへのログイン）でよく使われる</li>
                    <li>TACACS+ は TCP を用い，認証・認可・アカウンティングを分離して扱える</li>
                    <li>RADIUS よりコマンド単位の認可（どの操作を許可するか）が細かい</li>
                    <li>パケット全体を暗号化できる（RADIUS はパスワード部分中心）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 Kerberos は認証システムとしてどのような基本的な考え方に基づいているか。",
        ans: `
            <span class="check-category-badge badge-isms">Kerberos の考え方</span>
            <div class="check-measure-box">
                <ul>
                    <li>信頼できる第三者（<strong>KDC</strong>）がチケットを発行して認証する</li>
                    <li>パスワードを毎回ネットワークに流さず，<strong>チケット</strong>でサービスを利用する</li>
                    <li>共通鍵暗号を用い，時刻同期を前提とする（リプレイ防止）</li>
                    <li>一度認証すれば複数サービスを利用できる（SSO に近い）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 Kerberos 認証システムを構成するサーバの役割について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">Kerberos の構成</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>KDC</strong>（Key Distribution Center）：認証の中核。AS と TGS から成る</li>
                    <li><strong>AS</strong>（Authentication Server）：利用者を認証し，TGT を発行</li>
                    <li><strong>TGS</strong>（Ticket Granting Server）：TGT を確認し，各サービス用チケットを発行</li>
                    <li>各サービスサーバ（ファイルサーバ等）はチケットを検証してアクセスを許可</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 Kerberos における利用者認証の手順について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">Kerberos の手順</span>
            <div class="check-measure-box">
                <ol>
                    <li>クライアントが AS に認証要求を送る</li>
                    <li>AS が利用者を確認し，<strong>TGT</strong>（Ticket Granting Ticket）を返す</li>
                    <li>クライアントが TGT を添えて TGS にサービスチケットを要求する</li>
                    <li>TGS が対象サービス用のチケットを発行する</li>
                    <li>クライアントがそのチケットをサービスサーバへ提示し，利用が許可される</li>
                </ol>
            </div>
        `
    },
    {
        q: "【Q7】 ディレクトリサービスとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">ディレクトリサービス</span>
            <div class="check-measure-box">
                <p><strong>ディレクトリサービス</strong>は，組織内の利用者・機器・資源などの情報を階層的に格納し，検索・参照できるようにする仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>例：Active Directory，OpenLDAP</li>
                    <li>ユーザアカウント，グループ，証明書，プリンタ情報などを一元管理</li>
                    <li>認証・認可の基盤として利用されることが多い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 ディレクトリサービスの導入によってどのような効果が期待できるか。",
        ans: `
            <span class="check-category-badge badge-isms">導入効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>アカウント情報の<strong>一元管理</strong>（追加・変更・削除の効率化）</li>
                    <li>シングルサインオンや統合認証の基盤になる</li>
                    <li>アクセス権限の一貫した適用</li>
                    <li>退職・異動時の権限剥奪漏れを減らせる</li>
                    <li>アプリケーションごとの個別ユーザ管理を減らせる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 LDAP プロトコルはどのような目的で用いられるか。",
        ans: `
            <span class="check-category-badge badge-isms">LDAP</span>
            <div class="check-measure-box">
                <p><strong>LDAP</strong>（Lightweight Directory Access Protocol）は，ディレクトリサービスへ問い合わせ・更新するためのプロトコルです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ユーザ検索，認証バインド，属性の参照・変更</li>
                    <li>標準ポートは 389（LDAP），636（LDAPS）</li>
                    <li>多くの認証基盤・メール・グループウェアが LDAP を利用する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 EAP プロトコルはどのような目的で用いられるか。",
        ans: `
            <span class="check-category-badge badge-isms">EAP</span>
            <div class="check-measure-box">
                <p><strong>EAP</strong>（Extensible Authentication Protocol）は，PPP の認証機能を拡張・強化した利用者認証プロトコルです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>複数の認証方式（TLS，PEAP，TTLS 等）を載せられる枠組み</li>
                    <li>無線 LAN や有線 LAN の IEEE 802.1X で広く利用</li>
                    <li>クライアントの正当性・安全性を確認する技術として使われる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q11】 IEEE 802.1X とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">IEEE 802.1X</span>
            <div class="check-measure-box">
                <p><strong>IEEE 802.1X</strong>は，ネットワーク接続時にポート単位で利用者／端末認証を行う規格です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>サプリカント</strong>：認証を要求するクライアント側の装置やソフトウェア</li>
                    <li><strong>オーセンティケータ</strong>：AP や LAN スイッチなど，認証の窓口となる機器</li>
                    <li><strong>認証サーバ</strong>：RADIUS サーバなど，実際に認証を行うシステム</li>
                    <li>RADIUS を用いる場合，オーセンティケータが RADIUS クライアントになる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q12】 EAP がサポートする各種認証方式のセキュリティ面での特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">EAP 認証方式の特徴</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>EAP-TLS</strong>：サーバとクライアントがデジタル証明書で相互認証。強度が高い</li>
                    <li><strong>PEAP／EAP-TTLS</strong>：まずサーバ証明書で TLS トンネルを張り，その中で利用者認証（ID／パスワード等）</li>
                    <li><strong>EAP-MD5</strong>：チャレンジレスポンスだが相互認証がなく，無線では非推奨</li>
                    <li>証明書運用の負荷と，パスワード方式の使いやすさのトレードオフがある</li>
                </ul>
            </div>
        `
    }
];
