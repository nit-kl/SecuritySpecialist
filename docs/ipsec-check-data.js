// Check! IPsec／IKE 9問
const checkIpsecData = [
    {
        q: "【Q1】 IPsec VPN の利用形態にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IPsec VPN の利用形態</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>サイト間 VPN</strong>（ゲートウェイ間）：拠点同士のルータ／ファイアウォール間で IPsec を張り，拠点内端末は透過的に通信する</li>
                    <li><strong>リモートアクセス VPN</strong>（端末〜ゲートウェイ）：ノート PC 等のクライアントと本社ゲートウェイ間で IPsec を張る</li>
                    <li><strong>ホスト間 VPN</strong>：端末同士が直接 IPsec で保護する（サーバ間の保護など）</li>
                </ul>
                <p style="margin-top:0.75rem;">いずれも認証・暗号化・完全性により公衆網上に仮想的な専用路を作ります。</p>
            </div>
        `
    },
    {
        q: "【Q2】 IPsec におけるトランスポートモードとトンネルモードにはどのような違いがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">トランスポート／トンネル</span>
            <div class="check-measure-box">
                <p><strong>トランスポートモード</strong></p>
                <ul>
                    <li>元の IP ヘッダはそのまま使い，ペイロード（上位プロトコル）を保護する</li>
                    <li>主にホスト間通信で利用</li>
                    <li>外側から元の送信元・宛先 IP が見える</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>トンネルモード</strong></p>
                <ul>
                    <li>元の IP パケット全体を新しい IP ヘッダでカプセル化する</li>
                    <li>主にゲートウェイ間（サイト間 VPN）で利用</li>
                    <li>内側の元アドレスを隠せる（外側はゲートウェイのアドレス）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 AH プロトコルと ESP プロトコルではそれぞれのどのような機能が提供されるか。",
        ans: `
            <span class="check-category-badge badge-isms">AH / ESP</span>
            <div class="check-measure-box">
                <p><strong>AH</strong>（Authentication Header）</p>
                <ul>
                    <li>認証（メッセージ認証）と完全性を提供</li>
                    <li><strong>暗号化機能はない</strong></li>
                    <li>IP ヘッダの一部も含めて完全性を検証できる</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>ESP</strong>（Encapsulating Security Payload）</p>
                <ul>
                    <li>暗号化と認証（完全性）の両方を提供できる</li>
                    <li>VPN では ESP がよく使われる</li>
                    <li>ペイロードをカプセル化して秘匿する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 IPsec における SA とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">SA</span>
            <div class="check-measure-box">
                <p><strong>SA</strong>（Security Association）は，IPsec 通信で使うセキュリティパラメータの合意です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>使用プロトコル（AH／ESP），暗号・認証アルゴリズム，鍵，有効期限などを含む</li>
                    <li>片方向の関係として定義されるため，双方向通信では通常 2 本の SA が必要</li>
                    <li>SPI（Security Parameter Index）などで識別する</li>
                    <li>IKE によって自動的に確立・更新されることが多い</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 IKEv1 で通信相手を認証する方式としてどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IKEv1 の認証</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>事前共有鍵</strong>（Pre-Shared Key：PSK）</li>
                    <li><strong>デジタル署名</strong>（公開鍵証明書を用いた署名）</li>
                    <li><strong>公開鍵暗号</strong>（公開鍵による暗号化を用いた認証）</li>
                </ul>
                <p style="margin-top:0.75rem;">フェーズ 1 で相手認証と IKE SA を確立し，その後フェーズ 2 で IPsec SA を確立します。</p>
            </div>
        `
    },
    {
        q: "【Q6】 IKEv1 の SA にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IKEv1 の SA</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>IKE SA</strong>（ISAKMP SA）：フェーズ 1 で確立。鍵交換・相手認証のための SA</li>
                    <li><strong>IPsec SA</strong>：フェーズ 2 で確立。実際の通信データを保護する AH／ESP 用の SA</li>
                </ul>
                <p style="margin-top:0.75rem;">まず IKE SA を作り，その保護下で IPsec SA をネゴシエートする二段階構成です。</p>
            </div>
        `
    },
    {
        q: "【Q7】 IKEv1 と IKEv2 を比較した場合の IKEv2 の特徴や利点を述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">IKEv2 の利点</span>
            <div class="check-measure-box">
                <ul>
                    <li>メッセージ交換が少なく，セットアップが単純・高速</li>
                    <li>NAT トラバーサルが標準で扱いやすい</li>
                    <li>EAP による柔軟な利用者認証（リモートアクセス向け）</li>
                    <li>DoS 耐性の改善（Cookie など）</li>
                    <li>SA の寿命管理・再鍵の仕組みが整理されている</li>
                    <li>モバイル環境でのアドレス変更への対応がしやすい</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 IKEv2 の SA にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IKEv2 の SA</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>IKE_SA</strong>：鍵交換と認証のための SA（IKEv1 の IKE SA に相当）</li>
                    <li><strong>CHILD_SA</strong>：実際の通信を保護する SA（IKEv1 の IPsec SA に相当。AH／ESP）</li>
                </ul>
                <p style="margin-top:0.75rem;">IKE_SA_INIT と IKE_AUTH のやり取りで IKE_SA と最初の CHILD_SA を確立します。</p>
            </div>
        `
    },
    {
        q: "【Q9】 IKEv2 で通信相手を認証する方式としてどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IKEv2 の認証</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>事前共有鍵</strong>（PSK）</li>
                    <li><strong>デジタル署名</strong>（証明書ベース）</li>
                    <li><strong>EAP</strong>：利用者認証と連携（パスワード，証明書，トークン等を載せられる）</li>
                </ul>
                <p style="margin-top:0.75rem;">リモートアクセス VPN では EAP を使った利用者認証がよく用いられます。</p>
            </div>
        `
    }
];
