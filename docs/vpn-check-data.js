// Check! VPN 2問
const checkVpnData = [
    {
        q: "【Q1】 VPN はどのような仕組みで通信路をセキュアにするのか。",
        ans: `
            <span class="check-category-badge badge-isms">VPN</span>
            <div class="check-measure-box">
                <p><strong>VPN</strong>（Virtual Private Network）は，インターネットなどの公衆網の上に，仮想的な専用通信路を作り，遠隔拠点や遠隔利用者との通信を保護する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>認証</strong>：通信相手が正当な拠点・利用者であることを確認する</li>
                    <li><strong>暗号化</strong>：経路上の盗聴に対して機密性を確保する</li>
                    <li><strong>完全性</strong>：改ざんを検知する（IPsec の AH／ESP の ICV，TLS の MAC 等）</li>
                    <li><strong>カプセル化（トンネリング）</strong>：元のパケットを別プロトコルで包み，安全な経路として運ぶ</li>
                </ul>
                <p style="margin-top:0.75rem;">代表例は IPsec-VPN（サイト間），SSL-VPN／TLS-VPN（リモートアクセス）です。専用線を引かずに，論理的な専用網相当の安全性を得ることが目的です。</p>
            </div>
        `
    },
    {
        q: "【Q2】 カプセル化，トンネリングとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">カプセル化／トンネリング</span>
            <div class="check-measure-box">
                <p><strong>カプセル化</strong>は，元のパケット（ペイロード）を別のヘッダで包み，別のプロトコルとして転送できるようにすることです。</p>
                <p style="margin-top:0.75rem;"><strong>トンネリング</strong>は，カプセル化したパケットを，中間のネットワークを意識せずに入口から出口まで運ぶ技術です。途中のルータは外側のヘッダだけを見て転送します。</p>
                <ul style="margin-top:0.75rem;">
                    <li>VPN では，社内向けの IP パケットを IPsec／GRE／TLS などで包み，インターネット上を通す</li>
                    <li>出口でカプセルを外し，元のパケットを復元する</li>
                    <li>暗号化と組み合わせると，経路上では中身が見えない</li>
                    <li>プライベートアドレスや異なるプロトコルも，トンネル越しに運べる</li>
                </ul>
            </div>
        `
    }
];
