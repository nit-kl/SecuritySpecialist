// Check! ICカード 5問
const checkIcCardData = [
    {
        q: "【Q1】 IC カードを用いた認証システムにはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">IC カード認証の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>接触型</strong>：端子を接触させて通信（接触型 IC カード）</li>
                    <li><strong>非接触型</strong>：電磁誘導などで通信（NFC／Type A/B/F 等）</li>
                    <li><strong>メモリカード</strong>：データ保持中心（演算能力は限定的）</li>
                    <li><strong>CPU カード（スマートカード）</strong>：カード内で暗号演算・認証処理が可能</li>
                    <li>PIN 併用，PKI 証明書格納，ワンタイムパスワード連携など用途別の構成</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 IC カードの耐タンパ性とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">耐タンパ性</span>
            <div class="check-measure-box">
                <p><strong>耐タンパ性</strong>とは，内部の秘密情報（鍵・証明書・PIN 等）を不正に読み出したり改ざんしたりすることが困難である性質です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>物理的な開封・プローブ攻撃への耐性</li>
                    <li>不正解析時の検知・反応（ゼロ化など）</li>
                    <li>TPM などと同様に，秘密を端末外へ出しにくくする設計思想</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 IC カードは PKI においてどのように活用されているのか。",
        ans: `
            <span class="check-category-badge badge-isms">PKI での活用</span>
            <div class="check-measure-box">
                <ul>
                    <li>秘密鍵・デジタル証明書をカード内に安全に保管</li>
                    <li>署名・復号などの暗号演算をカード内で実行し，秘密鍵を外に出さない</li>
                    <li>本人確認（PIN／生体）後に鍵利用を許可</li>
                    <li>電子申請，社員証，マイナンバーカード，VPN／ログオン証明書などに利用</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 IC カードへの攻撃にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">IC カードへの攻撃</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>物理攻撃</strong>：開封，プロービング，FIB などによる内部解析</li>
                    <li><strong>サイドチャネル攻撃</strong>：タイミング攻撃，電力解析（SPA／DPA），電磁波解析</li>
                    <li><strong>フォールト注入</strong>：電圧・クロック・レーザー等で誤動作を誘発</li>
                    <li>通信の盗聴・リプレイ，不正リーダーの利用</li>
                    <li>PIN の総当たり，ソーシャルエンジニアリング</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 IC カードのセキュリティを高めるための対策としてどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">セキュリティ対策</span>
            <div class="check-measure-box">
                <ul>
                    <li>耐タンパ設計，保護層，改ざん検知・ゼロ化機構</li>
                    <li>サイドチャネル対策：処理時間の均一化，電力消費の平準化など</li>
                    <li>PIN 試行回数制限，ロックアウト</li>
                    <li>セキュアチャネル通信，相互認証</li>
                    <li>鍵のカード内生成・カード内利用，鍵の定期更新</li>
                    <li>紛失時の失効・再発行手順，利用者教育</li>
                </ul>
            </div>
        `
    }
];
