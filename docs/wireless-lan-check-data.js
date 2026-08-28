// Check! 無線 LAN 6問
const checkWirelessLanData = [
    {
        q: "【Q1】 無線 LAN にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">無線 LAN の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>インフラストラクチャ型</strong>：端末がアクセスポイント（AP）経由で通信する一般的な形態</li>
                    <li><strong>アドホック型</strong>：AP を介さず端末同士が直接通信する</li>
                    <li><strong>メッシュ型</strong>：複数 AP が連携してカバレッジを広げる</li>
                    <li>規格は IEEE 802.11 系（a/b/g/n/ac/ax 等）で，周波数帯（2.4GHz／5GHz／6GHz）や速度が異なる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 IEEE 802.11i 規格による無線 LAN のセキュリティ強化策とはどのような内容か。",
        ans: `
            <span class="check-category-badge badge-isms">IEEE 802.11i</span>
            <div class="check-measure-box">
                <p><strong>IEEE 802.11i</strong>は WEP の弱点を克服するための無線 LAN セキュリティ規格です。主な内容は次のとおりです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>CCMP</strong>（AES ベース）による強固な暗号化・完全性</li>
                    <li><strong>4 ウェイハンドシェイク</strong>で暗号鍵を安全に確立</li>
                    <li><strong>IEEE 802.1X</strong> による利用者認証と動的鍵配布</li>
                    <li>実装として <strong>WPA2</strong> が広く普及した</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 WPA ではどのようにして WEP の脆弱性が克服されているのか。",
        ans: `
            <span class="check-category-badge badge-isms">WPA と WEP</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>TKIP</strong>：WEP の RC4 を使いつつも，鍵を定期的に更新し IV の使い回し問題を緩和</li>
                    <li><strong>802.1X 認証</strong>：利用者認証を導入し，固定鍵の使い回しを減らす</li>
                    <li><strong>メッセージ完全性チェック</strong>（MIC）で改ざん検知を強化</li>
                    <li>その後 WPA2 では AES-CCMP へ移行し，WEP より根本的に強化された</li>
                </ul>
                <p style="margin-top:0.75rem;">WEP は短い IV・弱い鍵管理・RC4 の問題で容易に解読され得たため，WPA 以降は鍵更新と認証が必須になった。</p>
            </div>
        `
    },
    {
        q: "【Q4】 WPA3 の特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">WPA3</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>WPA3-Personal</strong>：SAE（Simultaneous Authentication of Equals）で辞書攻撃に強いパスワード認証</li>
                    <li><strong>WPA3-Enterprise</strong>：192 ビットセキュリティモードなど企業向け強化</li>
                    <li><strong>Forward Secrecy</strong>：セッション鍵漏洩でも過去通信を守りやすい</li>
                    <li><strong>OWE</strong>（Opportunistic Wireless Encryption）：パスワードなしでも通信を暗号化（Enhanced Open）</li>
                    <li>PMF（管理フレーム保護）の強化など</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 Enhanced Open とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">Enhanced Open</span>
            <div class="check-measure-box">
                <p><strong>Enhanced Open</strong>（OWE：Opportunistic Wireless Encryption）は，Wi-Fi Alliance が定めた仕様で，<strong>パスワード入力なし</strong>で端末と AP 間の通信を暗号化する技術です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>公開無線 LAN など，認証なしのオープン接続向け</li>
                    <li><strong>Diffie-Hellman 鍵交換</strong>で共通鍵を確立し通信を暗号化</li>
                    <li>従来のオープン Wi-Fi の平文通信リスクを低減する</li>
                    <li>WPA3 の一部として位置づけられる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 プライバシーセパレータ機能について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">プライバシーセパレータ</span>
            <div class="check-measure-box">
                <p><strong>プライバシーセパレータ</strong>（Privacy Separator／Client Isolation）は，同一 AP に接続した無線端末同士の直接通信を遮断する機能です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ゲスト Wi-Fi や公共無線 LAN で，他利用者への不正アクセスを防ぐ</li>
                    <li>端末は AP 経由でのみインターネット等へ通信でき，相互には見えない</li>
                    <li>ARP スプーフィングや LAN 内スキャンを抑制する効果がある</li>
                </ul>
            </div>
        `
    }
];
