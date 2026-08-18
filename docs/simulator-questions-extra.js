// シミュレーター追加問題（Check! 確認問題から統合）
const questionDataExtra = {
    failsafe: {
        source: "情報処理技術者試験 高度共通・H31春・午前I 問16",
        diagramTitle: "フェールセーフ設計の考え方（シミュレーター）",
        text: "フェールセーフの考えに基づいて設計したものはどれか。",
        options: [
            { key: "ア", text: "乾電池のプラスとマイナスを逆にすると，乾電池が装填できないようにする。", correct: false },
            { key: "イ", text: "交通管制システムが故障したときには，信号機に赤色が点灯するようにする。", correct: true },
            { key: "ウ", text: "ネットワークカードのコントローラを二重化しておき，片方のコントローラが故障しても運用できるようにする。", correct: false },
            { key: "エ", text: "ハードディスクに RAID1 を採用して，MTBF で示される信頼性が向上するようにする。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>フェールセーフ</strong>とは、システムに何らかの障害が発生した場合に<strong>安全な方向に向かう</strong>ように設計しておくことで、被害を最小限にする方法です。例えば、ファイアウォールに障害が発生した場合にすべてのパケットが通過できないようにするのはフェールセーフです。</p>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-scale-balanced"></i> 関連概念の比較</div>
                <div class="check-grid-2">
                    <div class="check-compare-item good">
                        <strong>イ フェールセーフ ✅</strong>
                        故障時に<strong>安全側</strong>（信号を赤）に倒す設計
                    </div>
                    <div class="check-compare-item bad">
                        <strong>ア フールプルーフ</strong>
                        誤操作・誤使用を<strong>物理的に防止</strong>する設計
                    </div>
                    <div class="check-compare-item bad">
                        <strong>ウ フェールソフト</strong>
                        故障しても<strong>機能を縮小して継続</strong>運用する設計
                    </div>
                    <div class="check-compare-item bad">
                        <strong>エ フォールトトレランス</strong>
                        冗長化等で<strong>故障を許容</strong>し可用性を維持する設計
                    </div>
                </div>
            </div>
        `,
        nodes: {
            left: { name: "交通管制\nシステム", ip: "制御装置", icon: "fa-microchip", color: "var(--primary)" },
            center: { name: "故障検知\n(異常発生)", ip: "障害イベント", icon: "fa-triangle-exclamation", color: "var(--accent)" },
            right: { name: "信号機\n(安全側)", ip: "赤色点灯", icon: "fa-traffic-light", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 正常運用", desc: "<strong>1. 交通管制システムの正常運用</strong><br>信号機は交通管制システムの制御下で、交通状況に応じて適切に切り替わっています。", stateClass: "state-1" },
            { num: 2, btn: "2. 障害発生", desc: "<strong>2. システム障害の発生</strong><br>交通管制システムに故障が発生し、通常の制御ができなくなります。", stateClass: "state-2" },
            { num: 3, btn: "3. 安全側へ倒す", desc: "<strong>3. フェールセーフ設計の作動</strong><br>障害時に安全側（信号を赤）に倒す設計により、事故リスクを最小化します。", stateClass: "state-3" },
            { num: 4, btn: "4. 被害最小化", desc: "<strong>4. 安全状態の維持</strong><br>すべての方向で赤信号が点灯し、交通の安全が確保された状態が維持されます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "制御信号", res: "赤点灯" }
    },
    vlan: {
        source: "情報処理安全確保支援士試験・H31春・午前II問12",
        diagramTitle: "VLANによるブロードキャスト制御（シミュレーター）",
        text: "VLAN機能をもった1台のレイヤ3スイッチに複数のPCを接続している。スイッチのポートをグループ化して複数のセグメントに分けると、スイッチのポートをセグメントに分けない場合に比べて、どのようなセキュリティ上の効果が得られるか。",
        options: [
            { key: "ア", text: "スイッチが、PCから送出されるICMPパケットを全て遮断するので、PC間のマルウェア感染のリスクを低減できる。", correct: false },
            { key: "イ", text: "スイッチが、PCからのブロードキャストパケットの到達範囲を制限するので、アドレス情報の不要な流出のリスクを低減できる。", correct: true },
            { key: "ウ", text: "スイッチが、PCのMACアドレスから接続可否を判別するので、PCの不正接続のリスクを低減できる。", correct: false },
            { key: "エ", text: "スイッチが、物理ポートごとに、決まったIPアドレスをもつPCの接続だけを許可するので、PCの不正接続のリスクを低減できる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>VLAN</strong>は、スイッチに接続されたホストをいくつかのグループに分けることで仮想的に作り出されたLANです。物理的な接続にとらわれず、スイッチの設定変更で自由自在にグループを作成できます。</p>
            <p style="margin-top:0.75rem;">VLANを構築すると個々のVLANは別個のネットワークとなるため、<strong>ブロードキャストパケットも他VLANには送信されません</strong>。これにより、アドレス情報（ARP等）の不要な流出リスクを低減できます。</p>
        `,
        nodes: {
            left: { name: "VLAN-A\n(PC群)", ip: "192.168.1.0/24", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "L3スイッチ\n(VLAN分割)", ip: "ブロードキャスト制御", icon: "fa-network-wired", color: "var(--secondary)" },
            right: { name: "VLAN-B\n(PC群)", ip: "192.168.2.0/24", icon: "fa-laptop", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. VLAN設定", desc: "<strong>1. ポートのVLANグループ化</strong><br>レイヤ3スイッチのポートをグループ化し、複数の仮想セグメント（VLAN）を作成します。", stateClass: "state-1" },
            { num: 2, btn: "2. ブロードキャスト", desc: "<strong>2. VLAN内のブロードキャスト</strong><br>PCがARPリクエスト等のブロードキャストパケットを送出します。", stateClass: "state-2" },
            { num: 3, btn: "3. 到達範囲制限", desc: "<strong>3. 同一VLAN内のみ到達</strong><br>スイッチはブロードキャストの到達範囲を同一VLAN内に制限し、他VLANへは転送しません。", stateClass: "state-3" },
            { num: 4, btn: "4. 情報流出防止", desc: "<strong>4. アドレス情報の流出防止</strong><br>ARP等のアドレス情報が他セグメントに漏れず、不要な情報流出リスクを低減できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "ARP Req", res: "VLAN内のみ" }
    },
    cookie: {
        source: "情報処理安全確保支援士試験・R3秋・午前II問10",
        diagramTitle: "Cookie Secure属性の動作（シミュレーター）",
        text: "cookieにSecure属性を設定しなかったときと比較した、設定したときの動作として、適切なものはどれか。",
        options: [
            { key: "ア", text: "cookieに指定された有効期間を過ぎると、cookieが無効化される。", correct: false },
            { key: "イ", text: "JavaScriptによるcookieの読出しが禁止される。", correct: false },
            { key: "ウ", text: "URL内のスキームがhttpsのときだけ、Webブラウザからcookieが送出される。", correct: true },
            { key: "エ", text: "WebブラウザがアクセスするURL内のパスとcookieによって指定されたパスのプレフィックスが一致するときだけ、Webブラウザからcookieが送出される。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>cookieに<strong>Secure属性</strong>をセットすると、<strong>HTTPS（HTTP over TLS）</strong>で通信している場合のみ当該cookieを送信します。HTTP通信では送信されないため、平文通信でのパケット盗聴によるcookie窃取を防げます。</p>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-cookie"></i> 属性の対応関係</div>
                <div class="check-grid-2">
                    <div class="check-compare-item good"><strong>Secure ✅</strong> HTTPS通信時のみ送信</div>
                    <div class="check-compare-item bad"><strong>HttpOnly（イ）</strong> JavaScriptからの読出し禁止</div>
                    <div class="check-compare-item bad"><strong>Expires/Max-Age（ア）</strong> 有効期限の設定</div>
                    <div class="check-compare-item bad"><strong>Path（エ）</strong> 送信先パスの制限</div>
                </div>
            </div>
        `,
        nodes: {
            left: { name: "Webブラウザ", ip: "Cookie保持", icon: "fa-globe", color: "var(--primary)" },
            center: { name: "通信経路\n(HTTP/HTTPS)", ip: "スキーム判定", icon: "fa-lock", color: "var(--secondary)" },
            right: { name: "Webサーバー", ip: "セッション管理", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. Secure設定", desc: "<strong>1. CookieにSecure属性を設定</strong><br>サーバーがSet-CookieヘッダーでSecure属性付きのcookieを発行します。", stateClass: "state-1" },
            { num: 2, btn: "2. HTTPS接続", desc: "<strong>2. HTTPS通信時の送信</strong><br>URLのスキームがhttpsの場合、ブラウザはcookieをリクエストに含めて送信します。", stateClass: "state-2" },
            { num: 3, btn: "3. HTTP接続", desc: "<strong>3. HTTP通信時は非送信</strong><br>URLのスキームがhttpの場合、Secure属性付きcookieは送信されません。", stateClass: "state-3" },
            { num: 4, btn: "4. 盗聴防止", desc: "<strong>4. 平文通信での窃取防止</strong><br>HTTP通信でのパケット盗聴によるcookie窃取リスクを低減できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "HTTPSのみ", res: "Cookie送信" }
    },
    cache: {
        source: "情報処理安全確保支援士試験・R6春・午前II問20",
        diagramTitle: "Cache-Control no-store（シミュレーター）",
        text: "Webサーバから送信されるHTTPヘッダーのうち、Webサーバからの応答の内容を、Webブラウザやプロキシサーバなどのキャッシュに保持させないようにするものはどれか。",
        options: [
            { key: "ア", text: "Cache-Control: no-cache", correct: false },
            { key: "イ", text: "Cache-Control: no-store", correct: true },
            { key: "ウ", text: "Cache-Control: private", correct: false },
            { key: "エ", text: "Cache-Control: public", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>Cache-Control</strong>ヘッダーはブラウザのキャッシュ動作を管理するHTTPヘッダーです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>no-cache</strong>：キャッシュ可能だが、利用時にはオリジンサーバに有効性を問い合わせる</li>
                    <li><strong>no-store ✅</strong>：<strong>キャッシュを一切禁止</strong>（保持させない）</li>
                    <li><strong>private</strong>：クライアントとオリジンサーバが1対1の関係でのみキャッシュ可能</li>
                    <li><strong>public</strong>：複数クライアント間でシェアするキャッシュも可能</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "Webサーバー", ip: "no-store応答", icon: "fa-server", color: "var(--primary)" },
            center: { name: "プロキシ\n/ブラウザ", ip: "キャッシュ禁止", icon: "fa-database", color: "var(--secondary)" },
            right: { name: "利用者\n(ブラウザ)", ip: "都度取得", icon: "fa-globe", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 応答送信", desc: "<strong>1. no-storeヘッダー付き応答</strong><br>WebサーバーがCache-Control: no-storeを含むHTTPレスポンスを送信します。", stateClass: "state-1" },
            { num: 2, btn: "2. キャッシュ拒否", desc: "<strong>2. キャッシュへの保存禁止</strong><br>ブラウザやプロキシは応答内容をキャッシュに保持しません。", stateClass: "state-2" },
            { num: 3, btn: "3. 再リクエスト", desc: "<strong>3. 毎回オリジンへ問合せ</strong><br>次回アクセス時もキャッシュを使わず、サーバーから最新データを取得します。", stateClass: "state-3" },
            { num: 4, btn: "4. 機密保護", desc: "<strong>4. 機密データの残留防止</strong><br>キャッシュに機密情報が残らないため、共有端末等での情報漏洩リスクを低減します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "GET", res: "no-store" }
    },
    caa: {
        source: "情報処理安全確保支援士試験・R6春・午前II問15",
        diagramTitle: "DNS CAAレコードによる証明書発行制御（シミュレーター）",
        text: "DNSにおいてDNS CAA（Certification Authority Authorization）レコードを設定することによるセキュリティ上の効果はどれか。",
        options: [
            { key: "ア", text: "WebサイトにアクセスしたときのWebブラウザに鍵マークが表示されていれば当該サイトが安全であることを、利用者が確認できる。", correct: false },
            { key: "イ", text: "Webサイトにアクセスする際のURLを短縮することによって、利用者のURLの誤入力を防ぐ。", correct: false },
            { key: "ウ", text: "電子メールを受信するサーバでスパムメールと誤検知されないようにする。", correct: false },
            { key: "エ", text: "不正なサーバ証明書の発行を防ぐ。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>DNSの<strong>CAAレコード</strong>は、証明書の発行を許可する<strong>認証局（CA）のコモンネーム</strong>等を指定することで、<strong>不正なサーバ証明書の発行を防ぐ</strong>ために使用されます。指定外のCAによる当該ドメインの証明書発行を制限できます。</p>
        `,
        nodes: {
            left: { name: "ドメイン所有者", ip: "CAAレコード設定", icon: "fa-user-shield", color: "var(--primary)" },
            center: { name: "DNS\n(CAAレコード)", ip: "許可CA指定", icon: "fa-server", color: "var(--secondary)" },
            right: { name: "認証局\n(CA)", ip: "証明書発行", icon: "fa-certificate", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. CAA設定", desc: "<strong>1. DNSにCAAレコードを設定</strong><br>ドメイン所有者が、証明書発行を許可するCAをCAAレコードで指定します。", stateClass: "state-1" },
            { num: 2, btn: "2. 発行要求", desc: "<strong>2. CAへの証明書発行要求</strong><br>CAがドメインの証明書発行を行う前に、DNSのCAAレコードを確認します。", stateClass: "state-2" },
            { num: 3, btn: "3. 許可判定", desc: "<strong>3. 許可CAかどうかを検証</strong><br>CAAレコードに記載されたCAのみが証明書を発行できます。指定外のCAは拒否されます。", stateClass: "state-3" },
            { num: 4, btn: "4. 不正発行防止", desc: "<strong>4. 不正なサーバ証明書の発行防止</strong><br>悪意あるCAや侵害されたCAによる不正証明書発行を防ぎます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "CAA照会", res: "許可CA" }
    },
    tcpheader: {
        source: "情報処理安全確保支援士試験・R6春・午前II問18",
        diagramTitle: "TCPヘッダーの構成（シミュレーター）",
        text: "TCP ヘッダーに含まれる情報はどれか。",
        options: [
            { key: "ア", text: "宛先ポート番号", correct: true },
            { key: "イ", text: "送信元 IP アドレス", correct: false },
            { key: "ウ", text: "パケット生存時間（TTL）", correct: false },
            { key: "エ", text: "プロトコル番号", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>TCP ヘッダーには、<strong>送信元ポート番号・宛先ポート番号・シーケンス番号・確認応答番号（ACK番号）・ウィンドウサイズ</strong>などの情報が含まれます。</p>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-layer-group"></i> TCP ヘッダー vs IP ヘッダー</div>
                <div class="check-compare">
                    <div class="check-compare-item good">
                        <strong>TCP ヘッダー ✅</strong>
                        送信元/宛先ポート番号、シーケンス番号、ACK番号、ウィンドウサイズ、チェックサム、フラグ（SYN/ACK/FIN等）
                    </div>
                    <div class="check-compare-item bad">
                        <strong>IP ヘッダー（イ〜エ）</strong>
                        送信元/宛先 IP アドレス、TTL、プロトコル番号、ヘッダ長、識別子等
                    </div>
                </div>
            </div>
        `,
        nodes: {
            left: { name: "送信元ホスト", ip: "送信元ポート", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "TCPヘッダー\n(トランスポート層)", ip: "ポート・SEQ・ACK", icon: "fa-layer-group", color: "var(--secondary)" },
            right: { name: "宛先ホスト", ip: "宛先ポート", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. セグメント生成", desc: "<strong>1. TCPセグメントの生成</strong><br>送信元ホストがアプリケーション層のデータにTCPヘッダーを付加します。", stateClass: "state-1" },
            { num: 2, btn: "2. ポート番号設定", desc: "<strong>2. 送信元・宛先ポート番号</strong><br>TCPヘッダーに送信元ポート番号と宛先ポート番号が設定されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 制御情報", desc: "<strong>3. シーケンス番号・ACK番号</strong><br>信頼性のある通信のため、シーケンス番号やACK番号、ウィンドウサイズ等が含まれます。", stateClass: "state-3" },
            { num: 4, btn: "4. IPヘッダーとの区別", desc: "<strong>4. IPヘッダーとの違い</strong><br>IPアドレス・TTL・プロトコル番号はIPヘッダー（ネットワーク層）の情報であり、TCPヘッダーには含まれません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "TCP Seg", res: "Port/SEQ" }
    },
    handshake: {
        source: "情報処理安全確保支援士試験・H30秋・午前II問18",
        diagramTitle: "3ウェイハンドシェイク（シミュレーター）",
        text: "TCP のコネクション確立方式である 3 ウェイハンドシェイクを表す図はどれか。",
        options: [
            { key: "ア", text: "SYN → SYN+ACK → ACK（3回のパケット交換）", correct: true },
            { key: "イ", text: "SYN → ACK → SYN → ACK → SYN → ACK（6回交互）", correct: false },
            { key: "ウ", text: "SYN → SYN → SYN → ACK（SYN 3連続後にACK）", correct: false },
            { key: "エ", text: "SYN → ACK → SYN → ACK → SYN → ACK（別パターン6回）", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>TCP の 3 ウェイハンドシェイクとは、「3 ウェイ」の名が示すように、次の 3 回のパケット送信によってコネクションを確立する方式です。</p>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-arrow-right"></i><strong>① SYN</strong><br>コネクション要求元 → 要求先：接続要求</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node server"><i class="fa-solid fa-arrow-left"></i><strong>② SYN+ACK</strong><br>コネクション要求先 → 要求元：要求受理＋確認</div>
                <div class="check-arrow-down">↓</div>
                <div class="check-node safe"><i class="fa-solid fa-check-double"></i><strong>③ ACK</strong><br>コネクション要求元 → 要求先：最終確認 → 接続確立</div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">イ・エは SYN/ACK が交互に6回続く不正なパターン、ウは SYN が3連続で SYN+ACK がないため、いずれも 3 ウェイハンドシェイクではありません。</p>
        `,
        nodes: {
            left: { name: "クライアント\n(要求元)", ip: "SYN / ACK", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "3ウェイ\nハンドシェイク", ip: "接続確立", icon: "fa-handshake", color: "var(--secondary)" },
            right: { name: "サーバー\n(要求先)", ip: "SYN+ACK", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. SYN送信", desc: "<strong>1. SYN（接続要求）</strong><br>クライアントがサーバーへSYNパケットを送信し、接続要求を行います。", stateClass: "state-1" },
            { num: 2, btn: "2. SYN+ACK", desc: "<strong>2. SYN+ACK（要求受理）</strong><br>サーバーがSYN+ACKパケットで接続要求を受理し、確認応答を返します。", stateClass: "state-2" },
            { num: 3, btn: "3. ACK送信", desc: "<strong>3. ACK（最終確認）</strong><br>クライアントがACKパケットで最終確認を行います。", stateClass: "state-3" },
            { num: 4, btn: "4. 接続確立", desc: "<strong>4. コネクション確立完了</strong><br>3回のパケット交換により、双方向のTCPコネクションが確立されます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SYN", res: "SYN+ACK" }
    },
    ismap: {
        source: "情報処理安全確保支援士試験・R7春・午前II問11",
        diagramTitle: "ISMAP制度の概要（シミュレーター）",
        text: "\"政府情報システムのためのセキュリティ評価制度（ISMAP）\" の説明はどれか。",
        options: [
            { key: "ア", text: "個人情報の取扱いについて政府が求める保護措置を講じる体制を整備している事業者などを評価して，適合を示すマークを付与し，個人情報を取り扱う政府情報システムの運用について，当該マークを付与された者への委託を認める制度", correct: false },
            { key: "イ", text: "個人データを海外に移転する際に，移転先の国の政府が定めた情報システムのセキュリティ基準を評価して，日本が求めるセキュリティ水準が確保されている場合には，本人の同意なく移転できるとする制度", correct: false },
            { key: "ウ", text: "政府が求めるセキュリティ要求を満たしているクラウドサービスをあらかじめ評価，登録することによって，政府のクラウドサービス調達におけるセキュリティ水準の確保を図る制度", correct: true },
            { key: "エ", text: "プライベートクラウドの情報セキュリティ全般に関するマネジメントシステムの規格にパブリッククラウドサービスに特化した管理策を追加した国際規格を基準にして，政府情報システムにおける情報セキュリティ施策を評価する制度", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>ISMAP（Information system Security Management and Assessment Program）</strong>は、政府が求めるセキュリティ要求を満たしているクラウドサービスをあらかじめ<strong>評価・登録</strong>することにより、調達におけるセキュリティ水準の確保を図り、円滑な導入に資することを目的とした制度です。</p>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-scale-balanced"></i> 他の選択肢との違い</div>
                <div class="check-grid-2">
                    <div class="check-compare-item bad"><strong>ア</strong> プライバシーマーク（Pマーク）等の個人情報保護評価制度</div>
                    <div class="check-compare-item bad"><strong>イ</strong> 越境データ移転に関する制度（APEC CBPR 等とは別）</div>
                    <div class="check-compare-item bad"><strong>エ</strong> ISO/IEC 27017（クラウドセキュリティ規格）そのものではない</div>
                    <div class="check-compare-item good"><strong>ウ ISMAP ✅</strong> 政府調達向けクラウドサービスの事前評価・登録制度</div>
                </div>
            </div>
        `,
        nodes: {
            left: { name: "政府機関\n(調達者)", ip: "セキュリティ要求", icon: "fa-landmark", color: "var(--primary)" },
            center: { name: "ISMAP\n(評価・登録)", ip: "事前審査", icon: "fa-clipboard-check", color: "var(--secondary)" },
            right: { name: "クラウド\nプロバイダ", ip: "登録サービス", icon: "fa-cloud", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 評価申請", desc: "<strong>1. クラウドサービスの評価申請</strong><br>クラウドサービスプロバイダが政府のセキュリティ要求を満たすかISMAP評価を受けます。", stateClass: "state-1" },
            { num: 2, btn: "2. セキュリティ審査", desc: "<strong>2. セキュリティ要求の適合審査</strong><br>政府が定めるセキュリティ基準に対して、サービスの適合性が審査されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 登録", desc: "<strong>3. ISMAP登録</strong><br>評価に合格したクラウドサービスがISMAPに登録されます。", stateClass: "state-3" },
            { num: 4, btn: "4. 調達活用", desc: "<strong>4. 政府調達での活用</strong><br>政府機関は登録済みサービスを選択することで、調達時のセキュリティ水準を確保できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "評価申請", res: "登録完了" }
    },
    paas: {
        source: "情報処理安全確保支援士試験・R4春・午前II問12",
        diagramTitle: "PaaSの責務分担（シミュレーター）",
        text: "JIS X 9401:2016（情報技術－クラウドコンピューティング－概要及び用語）の定義によるクラウドサービス区分の一つであり，クラウドサービスカスタマが項番 1 と 2 の責務を負い，クラウドサービスプロバイダが項番 3 ～ 5 の責務を負うものはどれか。（項番1:アプリのアクセス制御・暗号化設定、項番2:セキュアプログラミング・脆弱性診断、項番3:DBMS修正・権限設定、項番4:OS修正・権限設定、項番5:HWアクセス制御・物理セキュリティ）",
        options: [
            { key: "ア", text: "HaaS", correct: false },
            { key: "イ", text: "IaaS", correct: false },
            { key: "ウ", text: "PaaS", correct: true },
            { key: "エ", text: "SaaS", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ（PaaS）」です。</strong></p><br>
            <p>JIS X 9401 における各サービス区分の責務分担は次のとおりです。</p>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-measure-box">
                    <h4>SaaS</h4>
                    <p style="font-size:0.9rem;">利用者はアプリを利用するのみ。OS 等のインフラ管理やアプリ設定はできない。</p>
                </div>
                <div class="check-measure-box" style="border-color:rgba(56,189,248,0.4);">
                    <h4 style="color:var(--primary);">PaaS ✅</h4>
                    <p style="font-size:0.9rem;">利用者は<strong>自ら実装したアプリケーション</strong>の設定・セキュリティ対策を行う。OS・ミドルウェアはプロバイダが管理。</p>
                </div>
                <div class="check-measure-box">
                    <h4>IaaS / HaaS</h4>
                    <p style="font-size:0.9rem;">利用者が OS・ミドルウェアを含むサーバ環境を構築し、各種設定を行う。</p>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">項番1・2（アプリケーション層）はカスタマ、項番3～5（DBMS・OS・HW）はプロバイダ → <strong>PaaS</strong> に該当します。</p>
        `,
        nodes: {
            left: { name: "カスタマ\n(利用者)", ip: "項番1・2", icon: "fa-code", color: "var(--primary)" },
            center: { name: "PaaS\nプラットフォーム", ip: "実行環境提供", icon: "fa-cloud", color: "var(--secondary)" },
            right: { name: "プロバイダ", ip: "項番3～5", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. アプリ開発", desc: "<strong>1. カスタマがアプリを実装</strong><br>利用者はPaaS上に自らアプリケーションを実装・デプロイします（項番1・2の責務）。", stateClass: "state-1" },
            { num: 2, btn: "2. セキュリティ設定", desc: "<strong>2. アプリケーション層のセキュリティ</strong><br>カスタマがアクセス制御・暗号化設定、セキュアプログラミング・脆弱性診断を行います。", stateClass: "state-2" },
            { num: 3, btn: "3. 基盤管理", desc: "<strong>3. プロバイダが基盤を管理</strong><br>DBMS・OS・ハードウェアの修正適用、権限設定、物理セキュリティはプロバイダの責務です（項番3～5）。", stateClass: "state-3" },
            { num: 4, btn: "4. PaaSの分担", desc: "<strong>4. PaaSの責務分担</strong><br>アプリケーション層はカスタマ、ミドルウェア以下はプロバイダというPaaS特有の分担が成立します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "アプリDeploy", res: "基盤管理" }
    },
    vdi: {
        source: "情報処理安全確保支援士試験・R3春・午前II問16",
        diagramTitle: "VDIによるWeb閲覧分離（シミュレーター）",
        text: "内部ネットワークにある PC からインターネット上の Web サイトを参照するときは，DMZ にある VDI（Virtual Desktop Infrastructure）サーバ上の仮想マシンに PC からログインし，仮想マシン上の Web ブラウザを必ず利用するシステムを導入する。インターネット上の Web サイトから内部ネットワークにある PC へのマルウェアの侵入，及びインターネット上の Web サイトへの PC 内のファイルの流出を防止する効果を得るために必要な条件はどれか。",
        options: [
            { key: "ア", text: "PC と VDI サーバ間は，VDI の画面転送プロトコル及びファイル転送を利用する。", correct: false },
            { key: "イ", text: "PC と VDI サーバ間は，VDI の画面転送プロトコルだけを利用する。", correct: true },
            { key: "ウ", text: "VDI サーバが，プロキシサーバとして HTTP 通信を中継する。", correct: false },
            { key: "エ", text: "VDI サーバが，プロキシサーバとして VDI の画面転送プロトコルだけを中継する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>VDI でブラウザ実行環境を PC から分離することで、Web 閲覧によるマルウェア侵入やファイル流出リスクを低減できます。そのためには、PC と VDI サーバ間は<strong>画面転送プロトコルのみ</strong>を許可し、HTTP やファイル転送プロトコル等は禁止する設定が必要です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：ファイル転送を許可すると PC 内ファイルの流出を防げない ❌</li>
                    <li><strong>ウ</strong>：VDI サーバは Web サイトと HTTP 通信するが、プロキシとして中継するわけではない ❌</li>
                    <li><strong>エ</strong>：VDI サーバは画面転送を他ホストに中継するのではなく、PC との間で直接行う ❌</li>
                </ul>
            </div>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-diagram-project"></i> 安全な VDI Web 閲覧の構成</div>
                <div class="check-flow">
                    <div class="check-node browser"><i class="fa-solid fa-laptop"></i>内部 PC<br>画面転送のみ</div>
                    <span class="check-arrow">⇄</span>
                    <div class="check-node server"><i class="fa-solid fa-desktop"></i>DMZ VDI<br>ブラウザ実行</div>
                    <span class="check-arrow">→</span>
                    <div class="check-node safe"><i class="fa-solid fa-globe"></i>インターネット<br>Web サイト</div>
                </div>
            </div>
        `,
        nodes: {
            left: { name: "内部PC", ip: "画面転送のみ", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "DMZ\nVDIサーバ", ip: "ブラウザ実行", icon: "fa-desktop", color: "var(--secondary)" },
            right: { name: "インターネット\nWebサイト", ip: "HTTP通信", icon: "fa-globe", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. VDIログイン", desc: "<strong>1. VDI仮想マシンへログイン</strong><br>内部PCからDMZ上のVDIサーバの仮想マシンにログインします。", stateClass: "state-1" },
            { num: 2, btn: "2. 画面転送", desc: "<strong>2. 画面転送プロトコルのみ利用</strong><br>PCとVDIサーバ間は画面転送プロトコルのみを許可し、ファイル転送等は禁止します。", stateClass: "state-2" },
            { num: 3, btn: "3. ブラウザ閲覧", desc: "<strong>3. VDI上でWeb閲覧</strong><br>仮想マシン上のWebブラウザでインターネット上のWebサイトにアクセスします。", stateClass: "state-3" },
            { num: 4, btn: "4. 分離効果", desc: "<strong>4. マルウェア侵入・ファイル流出防止</strong><br>マルウェアはVDI環境に閉じ込められ、PC内ファイルの流出も防止されます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "画面転送", res: "Web閲覧" }
    },
    casb: {
        source: "情報処理安全確保支援士試験・R6春・午前II問11",
        diagramTitle: "CASBの可視化機能（シミュレーター）",
        text: "セキュリティ対策として、CASB を利用した際の効果はどれか。",
        options: [
            { key: "ア", text: "クラウドサービスカスタマの管理者が，従業員が利用しているクラウドサービスに対して，CASB を利用して脆弱性診断を行うことによって，脆弱性を特定できる。", correct: false },
            { key: "イ", text: "クラウドサービスカスタマの管理者が，従業員が利用しているクラウドサービスに対して，CASB を利用して利用状況の可視化を行うことによって，許可を得ずにクラウドサービスを利用している者を特定できる。", correct: true },
            { key: "ウ", text: "クラウドサービスプロバイダが，運用しているクラウドサービスに対して，CASB を利用して DDoS 攻撃対策を行うことによって，クラウドサービスの可用性低下を緩和できる。", correct: false },
            { key: "エ", text: "クラウドサービスプロバイダが，クラウドサービスを運用している施設に対して，CASB を利用して入退室管理を行うことによって，クラウドサービス運用環境への物理的な不正アクセスを防止できる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>CASB（Cloud Access Security Broker）</strong>は、2012年に Gartner が提唱したクラウド環境におけるセキュリティ対策のコンセプトです。<strong>可視化、コントロール、データ保護、脅威防御</strong>等の機能から構成されます。</p>
            <p style="margin-top:0.75rem;">CASB によりクラウドサービスの<strong>利用状況を可視化</strong>することで、シャドーIT（許可なく利用しているクラウドサービス）を利用している者を特定できます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>CASB の主な機能</h4>
                <ul>
                    <li><strong>可視化</strong>：利用中のクラウドサービス・ユーザーの把握</li>
                    <li><strong>コントロール</strong>：アクセス制御・ポリシ適用</li>
                    <li><strong>データ保護</strong>：DLP、暗号化</li>
                    <li><strong>脅威防御</strong>：不正アクセス・マルウェア検知</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "従業員\n(シャドーIT)", ip: "未許可クラウド", icon: "fa-users", color: "var(--accent)" },
            center: { name: "CASB\n(可視化)", ip: "利用状況監視", icon: "fa-eye", color: "var(--secondary)" },
            right: { name: "管理者", ip: "ポリシ適用", icon: "fa-user-shield", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. クラウド利用", desc: "<strong>1. 従業員のクラウドサービス利用</strong><br>従業員が許可を得ずに各種クラウドサービス（シャドーIT）を利用しています。", stateClass: "state-1" },
            { num: 2, btn: "2. CASB監視", desc: "<strong>2. CASBによるトラフィック監視</strong><br>CASBがクラウドへのアクセスを中継・監視し、利用状況を収集します。", stateClass: "state-2" },
            { num: 3, btn: "3. 可視化", desc: "<strong>3. 利用状況の可視化</strong><br>管理者はどの従業員がどのクラウドサービスを利用しているかを把握できます。", stateClass: "state-3" },
            { num: 4, btn: "4. シャドーIT特定", desc: "<strong>4. 未許可利用者の特定</strong><br>許可を得ずにクラウドサービスを利用している者を特定し、対策を講じられます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "クラウド通信", res: "利用ログ" }
    },
    attck: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問3",
        diagramTitle: "MITRE ATT&CKナレッジベース（シミュレーター）",
        text: "様々なサイバー攻撃手法を分類したナレッジベースはどれか。",
        options: [
            { key: "ア", text: "CVSS", correct: false },
            { key: "イ", text: "MITRE ATT&CK", correct: true },
            { key: "ウ", text: "STIX/TAXII", correct: false },
            { key: "エ", text: "サイバーキルチェーン", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>MITRE ATT&CK</strong>（Adversarial Tactics, Techniques, and Common Knowledge）は、攻撃者の目的・手法を中心としたナレッジベースです。米国政府支援の非営利組織 MITRE が運用し、攻撃プロセスを <strong>14 の Tactics</strong> に分け、各 Tactic 内の攻撃手法を <strong>Techniques / Sub-Techniques</strong> として分類しています。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>CVSS</strong>：脆弱性の深刻度を数値化する仕組み</li>
                    <li><strong>STIX/TAXII</strong>：脅威情報の記述形式と交換プロトコル</li>
                    <li><strong>サイバーキルチェーン</strong>：攻撃プロセスの7段階モデル（分類体系ではあるが ATT&CK ほど詳細な手法分類ではない）</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者\n(Adversary)", ip: "Tactics/Techniques", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "MITRE\nATT&CK", ip: "14 Tactics", icon: "fa-sitemap", color: "var(--secondary)" },
            right: { name: "防御者\n(SOC/Blue)", ip: "対策マッピング", icon: "fa-shield-halved", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 攻撃観察", desc: "<strong>1. 実際の攻撃行動の観察・収集</strong><br>世界中のサイバー攻撃から攻撃者の行動パターンが収集・分析されます。", stateClass: "state-1" },
            { num: 2, btn: "2. Tactics分類", desc: "<strong>2. 14のTactics（戦術）に分類</strong><br>攻撃プロセスをInitial Access、Execution、Persistence等の14戦術に分類します。", stateClass: "state-2" },
            { num: 3, btn: "3. Techniques定義", desc: "<strong>3. Techniques/Sub-Techniquesの定義</strong><br>各戦術内の具体的な攻撃手法（Techniques）とその詳細（Sub-Techniques）が体系化されます。", stateClass: "state-3" },
            { num: 4, btn: "4. 防御活用", desc: "<strong>4. 防御策へのマッピング</strong><br>防御者はATT&CKを参照し、検知ルールや対策のギャップ分析に活用できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "攻撃手法", res: "分類体系" }
    },
    killchain: {
        source: "情報処理安全確保支援士試験・R4春・午前II問5",
        diagramTitle: "サイバーキルチェーン偵察段階（シミュレーター）",
        text: "標的型攻撃における攻撃者の行動をモデル化したものの一つにサイバーキルチェーンがあり、攻撃者の行動を 7 段階に分類している。標的とした会社に対する攻撃者の行動のうち、偵察の段階に分類されるものはどれか。",
        options: [
            { key: "ア", text: "攻撃者が，インターネットに公開されていない社内ポータルサイトから，組織図，社員情報，メールアドレスを入手する。", correct: false },
            { key: "イ", text: "攻撃者が，会社の役員が登録している SNS サイトから，標的とする人物の人間関係や趣味を推定する。", correct: true },
            { key: "ウ", text: "攻撃者が，取引先を装って，標的の会社にマルウェアを添付した攻撃メールを送信する。", correct: false },
            { key: "エ", text: "攻撃者が，ボットに感染した PC を遠隔操作して，社内ネットワーク上の他 PC に次々とマルウェアを感染させ，ユーザ ID やパスワードを入手する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>偵察（Reconnaissance）</strong>段階では、公開情報（OSINT）を収集し、具体的な攻撃方法を検討する材料を集めます。SNS からの情報収集はこれに該当します。</p>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-1"></i>偵察：標的情報の収集（OSINT）</div>
                <div class="check-node server"><i class="fa-solid fa-2"></i>武装化：攻撃ツール・マルウェア作成</div>
                <div class="check-node attacker"><i class="fa-solid fa-3"></i>デリバリ：メール/Web 等で配送</div>
                <div class="check-node danger"><i class="fa-solid fa-4"></i>攻撃（Exploitation）：脆弱性悪用・実行</div>
                <div class="check-node danger"><i class="fa-solid fa-5"></i>インストール：マルウェア定着</div>
                <div class="check-node danger"><i class="fa-solid fa-6"></i>C&C：命令制御通信の確立</div>
                <div class="check-node danger"><i class="fa-solid fa-7"></i>目的の実行：情報窃取等</div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：社内ポータルからの入手は既に内部アクセスが必要 → 偵察ではない ❌</li>
                    <li><strong>ウ</strong>：デリバリ（配送）段階 ❌</li>
                    <li><strong>エ</strong>：インストール・C&C・目的実行に近い ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者", ip: "OSINT収集", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "SNS等\n(公開情報)", ip: "偵察段階", icon: "fa-magnifying-glass", color: "var(--secondary)" },
            right: { name: "標的企業\n(役員等)", ip: "人物情報", icon: "fa-building", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 標的選定", desc: "<strong>1. 攻撃標的の企業・人物を選定</strong><br>攻撃者は標的型攻撃の対象となる企業やキーパーソンを特定します。", stateClass: "state-1" },
            { num: 2, btn: "2. SNS調査", desc: "<strong>2. SNSからの情報収集（偵察）</strong><br>役員のSNSプロフィールから人間関係や趣味等の公開情報を収集します。", stateClass: "state-2" },
            { num: 3, btn: "3. 攻撃計画", desc: "<strong>3. 攻撃手法の検討</strong><br>収集した情報をもとに、スピアフィッシング等の具体的な攻撃方法を計画します。", stateClass: "state-3" },
            { num: 4, btn: "4. 次段階へ", desc: "<strong>4. 武装化・デリバリへ移行</strong><br>偵察で得た情報をもとに、攻撃ツール作成やメール配送（次の段階）に進みます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "OSINT", res: "標的情報" }
    },
    bofstack: {
        source: "情報処理技術者試験・H24秋・午前I問3",
        diagramTitle: "スタック実装の構成要素（シミュレーター）",
        text: "配列を用いてスタックを実装するとき，必要最小限の構成要素はどれか。",
        options: [
            { key: "ア", text: "スタックに最後に入った要素を示す添字変数", correct: true },
            { key: "イ", text: "スタックに最初に入った要素と最後に入った要素を示す添字変数", correct: false },
            { key: "ウ", text: "スタックに直前に入った要素を示す添字変数を格納する配列", correct: false },
            { key: "エ", text: "スタックに途中で入った要素を示す添字変数", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>スタックは<strong>後入れ先出し（LIFO: Last In First Out）</strong>のデータ構造です。最後に入れた要素が最初に取り出されるため、<strong>スタックの先頭（トップ）を指す添字変数</strong>（スタックポインタ）があれば管理できます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>サブルーチン呼び出し時の<strong>戻りアドレス</strong>や<strong>局所変数</strong>の保存に利用</li>
                    <li>サブルーチンから別のサブルーチンを呼び出したり、<strong>再帰呼び出し</strong>を可能にする</li>
                    <li>イは先頭要素の管理は LIFO では不要、ウ・エはスタックの基本操作に不要</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "push操作\n(データ追加)", ip: "SP+1", icon: "fa-arrow-down", color: "var(--primary)" },
            center: { name: "スタック\n(配列)", ip: "LIFO構造", icon: "fa-layer-group", color: "var(--secondary)" },
            right: { name: "スタック\nポインタ(SP)", ip: "トップ位置", icon: "fa-location-arrow", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 配列確保", desc: "<strong>1. スタック用の配列を確保</strong><br>データを格納する配列を用意します。", stateClass: "state-1" },
            { num: 2, btn: "2. SP初期化", desc: "<strong>2. スタックポインタの初期化</strong><br>最後に入った要素（トップ）を示す添字変数（スタックポインタ）を初期化します。", stateClass: "state-2" },
            { num: 3, btn: "3. push/pop", desc: "<strong>3. push/pop操作</strong><br>push時はSPをインクリメントし、pop時はSPをデクリメントしてトップ要素を管理します。", stateClass: "state-3" },
            { num: 4, btn: "4. LIFO管理", desc: "<strong>4. LIFOによるデータ管理</strong><br>スタックポインタだけで後入れ先出しの操作が実現できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "push", res: "pop" }
    },
    rootkit: {
        source: "情報処理安全確保支援士試験・R3秋・午前II問14",
        diagramTitle: "ルートキットの隠蔽機能（シミュレーター）",
        text: "ルートキットの特徴はどれか。",
        options: [
            { key: "ア", text: "OS などに不正に組み込んだツールの存在を隠す。", correct: true },
            { key: "イ", text: "OS の中核であるカーネル部分の脆弱性を分析する。", correct: false },
            { key: "ウ", text: "コンピュータがマルウェアに感染していないことをチェックする。", correct: false },
            { key: "エ", text: "コンピュータやルータのアクセス可能な通信ポートを外部から調査する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>ルートキット</strong>とは、侵入に成功した攻撃者が、その後の不正な活動を行いやすくするために、<strong>自身の存在を隠蔽すること</strong>を目的として使用するソフトウェアなどをまとめたパッケージの呼称（俗称）です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>当初は UNIX 系で <strong>root 権限</strong>を保持したまま管理者に見つからず活動するためのツール</li>
                    <li>現在は Windows など root アカウントが存在しない環境でも、同様の働きをするツールをルートキットと呼ぶ</li>
                    <li>OS やカーネルに組み込み、プロセス・ファイル・通信等の<strong>痕跡を隠す</strong>のが本質的な特徴</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：脆弱性分析ツール（VA 等）の説明 ❌</li>
                    <li><strong>ウ</strong>：ウイルス対策ソフト・整合性チェックの説明 ❌</li>
                    <li><strong>エ</strong>：ポートスキャン（nmap 等）の説明 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者\n(侵入済み)", ip: "不正ツール", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "ルートキット\n(OS組込)", ip: "痕跡隠蔽", icon: "fa-mask", color: "var(--secondary)" },
            right: { name: "管理者\n(検知困難)", ip: "正常に見える", icon: "fa-user-shield", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 侵入成功", desc: "<strong>1. システムへの侵入成功</strong><br>攻撃者がシステムに侵入し、管理者権限を取得します。", stateClass: "state-1" },
            { num: 2, btn: "2. ルートキット設置", desc: "<strong>2. ルートキットのインストール</strong><br>OSやカーネルにルートキットを組み込み、不正ツールを設置します。", stateClass: "state-2" },
            { num: 3, btn: "3. 痕跡隠蔽", desc: "<strong>3. 存在の隠蔽</strong><br>プロセス・ファイル・通信ログ等の痕跡を隠し、管理者から発見されにくくします。", stateClass: "state-3" },
            { num: 4, btn: "4. 持続的活動", desc: "<strong>4. 検知されずに活動継続</strong><br>ルートキットにより攻撃者は長期間、検知されにくい状態で不正活動を継続できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "不正活動", res: "痕跡隠蔽" }
    },
    pth: {
        source: "情報処理安全確保支援士試験・R5春・午前II問14",
        diagramTitle: "Pass the Hash攻撃（シミュレーター）",
        text: "Pass the Hash 攻撃はどれか。",
        options: [
            { key: "ア", text: "パスワードのハッシュ値から導き出した平文パスワードを用いてログインする。", correct: false },
            { key: "イ", text: "パスワードのハッシュ値のみでログインできる仕組みを悪用してログインする。", correct: true },
            { key: "ウ", text: "パスワードを固定して様々なユーザー ID を試し，ユーザー ID 文字列を繰り返しハッシュ化してログインする。", correct: false },
            { key: "エ", text: "ハッシュ化されずに保存された平文パスワードを用いてログインする。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>Windows ではユーザーのパスワードから生成された<strong>ハッシュ値</strong>がメモリ上（キャッシュ）に一時保存されます。<strong>Pass the Hash</strong> 攻撃は、このハッシュ値を不正に取得し、<strong>平文パスワードを解読せずに</strong>ハッシュ値そのものを認証に利用してログインする手法です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：ハッシュから平文を導出してログイン（クラック後の利用）❌</li>
                    <li><strong>ウ</strong>：ユーザー ID の総当たり・ハッシュ化の説明 ❌</li>
                    <li><strong>エ</strong>：平文パスワードの窃取・利用 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者", ip: "ハッシュ窃取", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "侵害端末\n(NTLMキャッシュ)", ip: "ハッシュ値保持", icon: "fa-memory", color: "var(--secondary)" },
            right: { name: "認証サーバー\n(ドメイン)", ip: "ハッシュ認証", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. ハッシュ取得", desc: "<strong>1. メモリからハッシュ値を取得</strong><br>攻撃者は侵害した端末のメモリやLSASS等からNTLMハッシュ値を不正取得します。", stateClass: "state-1" },
            { num: 2, btn: "2. 平文不要", desc: "<strong>2. 平文パスワードの解読は不要</strong><br>Pass the Hashではパスワードの平文を解読する必要がありません。", stateClass: "state-2" },
            { num: 3, btn: "3. ハッシュで認証", desc: "<strong>3. ハッシュ値で認証要求</strong><br>窃取したハッシュ値をそのまま認証に利用し、別のシステムへログインします。", stateClass: "state-3" },
            { num: 4, btn: "4. 横展開", desc: "<strong>4. ネットワーク内への横展開</strong><br>ドメイン内の他のサーバーや端末へも同様の手法でアクセスを拡大できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "NTLM Hash", res: "認証成功" }
    },
    spray: {
        source: "情報処理安全確保支援士試験・R4秋・午前II問14",
        diagramTitle: "パスワードスプレー攻撃（シミュレーター）",
        text: "パスワードスプレー攻撃に該当するものはどれか。",
        options: [
            { key: "ア", text: "対象とする 1 つのユーザー ID を選び，辞書に登録された語句や人名を順に入力してログインを試みる。", correct: false },
            { key: "イ", text: "対象とする 1 つのユーザー ID を選び，パスワードを総当たりでログインを試みる。", correct: false },
            { key: "ウ", text: "複数のユーザー ID に対して，よく使われる少数のパスワードを同時に試し，アカウントロックを避けるために攻撃時間や送信元 IP アドレスを変えながらログインを試みる。", correct: true },
            { key: "エ", text: "他のサイトから不正に入手したユーザー ID とパスワードのリストを用いてログインを試みる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>パスワードスプレー攻撃</strong>は、<strong>少数のよく使われるパスワード</strong>（Password123 等）を<strong>多数のアカウント</strong>に対して試す手法です。1 アカウントあたりの試行回数をアカウントロックの閾値以下に抑え、検知を回避しやすくします。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：辞書攻撃（Dictionary Attack）— 1 アカウントに多数のパスワード ❌</li>
                    <li><strong>イ</strong>：総当たり攻撃（Brute Force）— 1 アカウントに全パスワード ❌</li>
                    <li><strong>エ</strong>：パスワードリスト攻撃（Credential Stuffing）— 漏洩 ID/パスワードの再利用 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者", ip: "少数パスワード", icon: "fa-spray-can", color: "var(--accent)" },
            center: { name: "認証サーバー", ip: "多数アカウント", icon: "fa-key", color: "var(--secondary)" },
            right: { name: "ロック回避\n(検知回避)", ip: "閾値以下", icon: "fa-user-lock", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. パスワード選定", desc: "<strong>1. よく使われる少数のパスワードを選定</strong><br>「Password1!」「Welcome2024」等、よく使われるパスワードを少数選びます。", stateClass: "state-1" },
            { num: 2, btn: "2. 多数アカウント", desc: "<strong>2. 多数のユーザーIDに試行</strong><br>選んだパスワードを複数のユーザーIDに対して同時に試します。", stateClass: "state-2" },
            { num: 3, btn: "3. ロック回避", desc: "<strong>3. アカウントロック回避</strong><br>1アカウントあたりの試行回数をロック閾値以下に抑え、攻撃時間や送信元IPを変えます。", stateClass: "state-3" },
            { num: 4, btn: "4. 侵入成功", desc: "<strong>4. 弱いパスワードのアカウント侵入</strong><br>デフォルトパスワードや弱いパスワードを使うアカウントに侵入が成功します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Login試行", res: "認証突破" }
    },
    mitm: {
        source: "情報処理安全確保支援士試験・H22春・午前II問13",
        diagramTitle: "Man-in-the-middle攻撃（シミュレーター）",
        text: "デジタル証明書を用いずに通信相手間で公開鍵を交換して暗号化通信を行う場合，通信相手になりすまして通信内容を盗聴する目的で行う攻撃はどれか。",
        options: [
            { key: "ア", text: "Man-in-the-middle 攻撃", correct: true },
            { key: "イ", text: "war driving", correct: false },
            { key: "ウ", text: "トロイの木馬", correct: false },
            { key: "エ", text: "ブルートフォース攻撃", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>Man-in-the-middle（中間者）攻撃</strong>は、通信するクライアントとサーバの間に攻撃者が割り込み、クライアントにはサーバ、サーバにはクライアントになりすます攻撃です。デジタル証明書による相手確認がない場合、公開鍵交換の段階で攻撃者の公開鍵が渡され、通信内容の<strong>盗聴・改ざん</strong>が可能になります。</p>
            <div class="check-flow check-flow-vertical" style="margin-top:1rem;">
                <div class="check-node browser"><i class="fa-solid fa-laptop"></i>クライアント</div>
                <div class="check-arrow-down">↕ 攻撃者が中継（なりすまし）</div>
                <div class="check-node attacker"><i class="fa-solid fa-user-secret"></i>Man-in-the-middle</div>
                <div class="check-arrow-down">↕</div>
                <div class="check-node server"><i class="fa-solid fa-server"></i>サーバ</div>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：無線 LAN の探索行為 ❌</li>
                    <li><strong>ウ</strong>：マルウェアによる潜伏・実行 ❌</li>
                    <li><strong>エ</strong>：パスワード等の総当たり試行 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "クライアント", ip: "公開鍵交換", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "攻撃者\n(MitM)", ip: "なりすまし中継", icon: "fa-user-secret", color: "var(--accent)" },
            right: { name: "サーバー", ip: "暗号化通信", icon: "fa-server", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 通信開始", desc: "<strong>1. クライアントとサーバの通信開始</strong><br>デジタル証明書なしで公開鍵を交換して暗号化通信を開始しようとします。", stateClass: "state-1" },
            { num: 2, btn: "2. 中間割込", desc: "<strong>2. 攻撃者が中間に割り込み</strong><br>攻撃者がクライアントとサーバの間に入り、双方になりすまします。", stateClass: "state-2" },
            { num: 3, btn: "3. 鍵すり替え", desc: "<strong>3. 公開鍵のすり替え</strong><br>公開鍵交換時に攻撃者自身の公開鍵を相手に渡し、暗号化通信を中継します。", stateClass: "state-3" },
            { num: 4, btn: "4. 盗聴・改ざん", desc: "<strong>4. 通信内容の盗聴・改ざん</strong><br>攻撃者は復号した通信内容を読み取り、必要に応じて改ざんして再暗号化して転送します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "公開鍵", res: "暗号文" }
    },
    dnspoison: {
        source: "情報処理安全確保支援士試験・H31春・午前II問11",
        diagramTitle: "DNSキャッシュポイズニング対策（シミュレーター）",
        text: "DNS キャッシュポイズニング攻撃に対して有効な対策はどれか。",
        options: [
            { key: "ア", text: "DNS サーバにおいて，侵入したマルウェアをリアルタイムに隔離する。", correct: false },
            { key: "イ", text: "DNS 問合せに使用する DNS ヘッダ内の ID を固定せずにランダムに変更する。", correct: true },
            { key: "ウ", text: "DNS 問合せに使用する送信元ポート番号を 53 番に固定する。", correct: false },
            { key: "エ", text: "外部からの DNS 問合せに対しては，宛先ポート番号 53 のものだけに回答する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>DNS キャッシュポイズニング攻撃を成功させるには、攻撃者が送る偽の応答の<strong>ポート番号</strong>（問合せの送信元ポート＝応答の宛先ポート）と<strong>DNS ヘッダの ID（トランザクション ID）</strong>を、正規の問合せ記録と一致させる必要があります。これらを固定せず<strong>ランダム化</strong>することで、攻撃者が偽応答を受け入れさせる確率を大幅に下げられます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：マルウェア隔離はキャッシュポイズニング対策ではない ❌</li>
                    <li><strong>ウ</strong>：送信元ポートを 53 に<strong>固定</strong>すると推測されやすく逆効果 ❌</li>
                    <li><strong>エ</strong>：宛先ポート 53 への応答制限はポイズニング対策にならない ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者", ip: "偽DNS応答", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "DNSサーバー\n(キャッシュ)", ip: "IDランダム化", icon: "fa-server", color: "var(--secondary)" },
            right: { name: "正規権威\nDNS", ip: "正当な応答", icon: "fa-globe", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. DNS問合せ", desc: "<strong>1. DNSサーバーが権威DNSへ問合せ</strong><br>キャッシュにないレコードについて、DNSサーバーが権威DNSサーバーへ問合せを送信します。", stateClass: "state-1" },
            { num: 2, btn: "2. ランダムID", desc: "<strong>2. トランザクションIDのランダム化</strong><br>DNSヘッダ内のID（トランザクションID）を固定せずランダムに設定します。", stateClass: "state-2" },
            { num: 3, btn: "3. 偽応答阻止", desc: "<strong>3. 偽応答の受け入れ阻止</strong><br>攻撃者が送る偽応答のIDが一致する確率が大幅に低下し、ポイズニングが困難になります。", stateClass: "state-3" },
            { num: 4, btn: "4. キャッシュ保護", desc: "<strong>4. 正規情報のみキャッシュ</strong><br>正当な権威DNSからの応答のみがキャッシュに登録され、名前解決の信頼性が保たれます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "DNS Query", res: "Random ID" }
    },
    dnswater: {
        source: "情報処理安全確保支援士試験・H29春・午前II問6",
        diagramTitle: "DNSウォータートーチャ攻撃（シミュレーター）",
        text: "DNS ウォータートーチャ攻撃（ランダムサブドメイン攻撃）の手法と目的の適切な説明はどれか。",
        options: [
            { key: "ア", text: "ランダムに生成したサブドメイン名に対する大量の問合せを ISP の DNS キャッシュサーバに送り，送信元 IP アドレスを標的サーバの IP アドレスに偽装して，応答を標的サーバに送る。", correct: false },
            { key: "イ", text: "標的ドメインのランダムに生成したサブドメイン名に対する大量の問合せをオープンリゾルバの DNS キャッシュサーバに送り，標的ドメインの権威 DNS サーバに過負荷をかける。", correct: true },
            { key: "ウ", text: "攻撃者が管理するドメインのランダムに生成した大量のサブドメイン名を標的 DNS サーバに送り，強制的にキャッシュさせ，正規の DNS リソースレコードを上書きする。", correct: false },
            { key: "エ", text: "ランダムに生成した大量のサブドメイン名を用いて標的 Web サイトにアクセスし，非公開 Web ページにアクセスする。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>DNS ウォータートーチャ攻撃</strong>（ランダムサブドメイン攻撃）は、存在しないランダムなサブドメインへの問合せを<strong>オープンリゾルバ</strong>等に大量送信します。キャッシュにないため権威 DNS サーバへ問合せが転送され、標的ドメインの<strong>権威 DNS サーバが過負荷</strong>に陥ります（「水滴が石を穿つ」イメージ）。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：送信元 IP 偽装による反射型 DDoS の説明 ❌</li>
                    <li><strong>ウ</strong>：キャッシュポイズニングの説明 ❌</li>
                    <li><strong>エ</strong>：Web ページ探索等 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者\n(Botnet)", ip: "ランダムサブドメイン", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "オープン\nリゾルバ", ip: "キャッシュミス", icon: "fa-server", color: "var(--secondary)" },
            right: { name: "権威DNS\n(標的)", ip: "過負荷", icon: "fa-globe", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. ランダム生成", desc: "<strong>1. ランダムサブドメインの生成</strong><br>攻撃者は標的ドメインの存在しないランダムなサブドメイン名を大量に生成します。", stateClass: "state-1" },
            { num: 2, btn: "2. 大量問合せ", desc: "<strong>2. オープンリゾルバへ大量問合せ</strong><br>生成したランダムサブドメインへの問合せをオープンリゾルバのDNSキャッシュサーバに大量送信します。", stateClass: "state-2" },
            { num: 3, btn: "3. 権威DNS転送", desc: "<strong>3. 権威DNSへの問合せ転送</strong><br>キャッシュにないため、リゾルバは標的ドメインの権威DNSサーバへ問合せを転送します。", stateClass: "state-3" },
            { num: 4, btn: "4. 過負荷", desc: "<strong>4. 権威DNSサーバの過負荷</strong><br>大量の問合せにより権威DNSサーバが過負荷に陥り、名前解決サービスが停止します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Random FQDN", res: "権威DNS転送" }
    },
    dnsdmz: {
        source: "情報処理安全確保支援士試験・H25春・午前II問12",
        diagramTitle: "DMZ DNSサーバのキャッシュポイズニング（シミュレーター）",
        text: "企業の DMZ 内に 1 台の DNS サーバを設置し，インターネット向けと社内向けの両方に共用している。この DNS サーバが DNS キャッシュポイズニングを受けた場合，直接引き起こされる現象はどれか。",
        options: [
            { key: "ア", text: "DNS サーバのハードディスク上のファイルに定義されている DNS サーバ名が書き換えられ，外部からの接続ができなくなる。", correct: false },
            { key: "イ", text: "DNS サーバのメモリ上にワームが潜伏し，DNS サーバを参照するクライアントに悪意のあるプログラムを送る。", correct: false },
            { key: "ウ", text: "社内利用者がインターネット上の特定 Web サーバにアクセスしようとした際，意図した Web サーバとは異なる Web サーバに誘導される。", correct: true },
            { key: "エ", text: "社内利用者間で送受信される電子メールの宛先アドレスが書き換えられ，正常な配送ができなくなる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>DNS キャッシュポイズニングは、DNS サーバのキャッシュに<strong>偽の名前解決情報</strong>を混入させる攻撃です。社内利用者が Web サーバの FQDN を問い合わせた際、<strong>攻撃者の IP アドレス</strong>が返され、意図しない Web サーバへ誘導されます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：設定ファイル改ざん（別種の攻撃）❌</li>
                    <li><strong>イ</strong>：ワーム感染（マルウェア）❌</li>
                    <li><strong>エ</strong>：メール宛先改ざん（MX ポイズニングなら可能性あるが、本問の直接の現象として典型なのは Web 誘導）❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "社内利用者", ip: "Web FQDN問合せ", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "DMZ\nDNSサーバ", ip: "偽キャッシュ", icon: "fa-server", color: "var(--accent)" },
            right: { name: "偽Webサーバー\n(攻撃者)", ip: "誘導先", icon: "fa-globe", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. ポイズニング", desc: "<strong>1. DNSキャッシュへの偽情報混入</strong><br>攻撃者がDMZ内のDNSサーバのキャッシュに偽の名前解決情報を混入させます。", stateClass: "state-1" },
            { num: 2, btn: "2. 名前解決", desc: "<strong>2. 社内利用者の名前解決要求</strong><br>社内利用者がインターネット上のWebサーバのFQDNをDNSサーバに問い合わせます。", stateClass: "state-2" },
            { num: 3, btn: "3. 偽応答", desc: "<strong>3. 偽のIPアドレスが返される</strong><br>ポイズニングされたキャッシュから攻撃者のIPアドレスが返されます。", stateClass: "state-3" },
            { num: 4, btn: "4. Web誘導", desc: "<strong>4. 意図しないWebサーバへ誘導</strong><br>利用者は意図したWebサーバではなく、攻撃者の偽Webサーバにアクセスしてしまいます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "A Record", res: "偽IP" }
    },
    dnskaminsky: {
        source: "情報処理安全確保支援士試験・R7春・午前II問4",
        diagramTitle: "Kaminsky攻撃への対策（シミュレーター）",
        text: "DNS に対する Kaminsky 攻撃に対する対策はどれか。",
        options: [
            { key: "ア", text: "DNS キャッシュサーバと権威 DNS サーバの 2 台で冗長構成とし，過負荷によるサーバ停止のリスクを大幅に低減する。", correct: false },
            { key: "イ", text: "SPF（Sender Policy Framework）を用いて DNS リソースレコードを認証し，電子メールの送信元ドメインのなりすましを検証する。", correct: false },
            { key: "ウ", text: "SQL 文の構築時にプレースホルダを用い，悪意のある SQL インジェクションによって DNS リソースレコードが上書きされることを防ぐ。", correct: false },
            { key: "エ", text: "問合せ時に使用する送信元ポート番号をランダム化し，DNS キャッシュサーバに偽情報がキャッシュされる確率を大幅に低減する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>Kaminsky 攻撃</strong>（2008 年 Dan Kaminsky 氏発表）は、DNS キャッシュポイズニングの高度な手法です。偽応答を受け入れさせるには<strong>トランザクション ID</strong>と<strong>送信元ポート番号</strong>の一致が必要で、<strong>送信元ポートのランダム化</strong>により推測空間が拡大し、攻撃成功確率が大幅に低下します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：冗長構成は可用性対策でありポイズニング対策ではない ❌</li>
                    <li><strong>イ</strong>：SPF はメール送信元認証 ❌</li>
                    <li><strong>ウ</strong>：SQL インジェクション対策 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者", ip: "偽応答大量送信", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "DNSキャッシュ\nサーバ", ip: "ポートランダム化", icon: "fa-server", color: "var(--secondary)" },
            right: { name: "権威DNS", ip: "正当な応答", icon: "fa-globe", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 権威DNS問合せ", desc: "<strong>1. キャッシュサーバが権威DNSへ問合せ</strong><br>DNSキャッシュサーバーが権威DNSサーバーへレコードを問い合わせます。", stateClass: "state-1" },
            { num: 2, btn: "2. ポートランダム化", desc: "<strong>2. 送信元ポート番号のランダム化</strong><br>問合せ時の送信元ポート番号をランダムに設定し、推測空間を拡大します。", stateClass: "state-2" },
            { num: 3, btn: "3. 偽応答拒否", desc: "<strong>3. 偽応答の受け入れ困難化</strong><br>攻撃者がトランザクションIDとポート番号の両方を一致させる確率が大幅に低下します。", stateClass: "state-3" },
            { num: 4, btn: "4. キャッシュ保護", desc: "<strong>4. 偽情報のキャッシュ防止</strong><br>Kaminsky攻撃による偽情報のキャッシュが困難になり、DNSの信頼性が保たれます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "DNS Query", res: "Random Port" }
    },
    dnssec: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問13",
        diagramTitle: "DNSSEC 署名検証（シミュレーター）",
        text: "DNSSEC に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "権威 DNS サーバが，DNS 問合せに対する応答時に，リソースレコードを公開鍵暗号方式で暗号化することによって，通信経路上の盗聴を防ぐ。", correct: false },
            { key: "イ", text: "権威 DNS サーバが，リソースレコードの受信時にデジタル署名を検証することによって，データの作成元の正当性とデータの完全性を確認する。", correct: false },
            { key: "ウ", text: "リゾルバが，DNS 問合せに対する応答時に，リソースレコードを公開鍵暗号方式で暗号化することによって，通信経路上の盗聴を防ぐ。", correct: false },
            { key: "エ", text: "リゾルバが，リソースレコードの受信時にデジタル署名を検証することによって，データの作成元の正当性とデータの完全性を確認する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>DNSSEC</strong>は DNS のセキュリティ拡張であり，次の機能によりリソースレコードの作成元の正当性とデータの完全性を検証します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>権威 DNS サーバが自らの<strong>秘密鍵</strong>で RR に<strong>デジタル署名</strong>（RRSIG）を付加して送信</li>
                    <li><strong>リゾルバ</strong>が送信元の<strong>公開鍵</strong>（DNSKEY）で署名を検証</li>
                    <li>DNSSEC は<strong>暗号化（機密性）</strong>ではなく<strong>署名（真正性・完全性）</strong>を提供</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア・ウ</strong>：暗号化による盗聴防止は DNSSEC の目的ではない ❌</li>
                    <li><strong>イ</strong>：署名の検証はリゾルバ側の役割 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "権威DNS\nサーバ", ip: "秘密鍵で署名", icon: "fa-server", color: "var(--primary)" },
            center: { name: "DNSSEC\nRRSIG", ip: "デジタル署名", icon: "fa-signature", color: "var(--secondary)" },
            right: { name: "リゾルバ", ip: "公開鍵で検証", icon: "fa-shield-halved", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. RR署名", desc: "<strong>1. 権威 DNS が RR に署名</strong><br>権威 DNS サーバが秘密鍵を用いてリソースレコードにデジタル署名（RRSIG）を付加します。", stateClass: "state-1" },
            { num: 2, btn: "2. 応答送信", desc: "<strong>2. 署名付き RR を応答</strong><br>DNS 問合せに対し，署名付きリソースレコードと DNSKEY を返します。", stateClass: "state-2" },
            { num: 3, btn: "3. 署名検証", desc: "<strong>3. リゾルバが署名を検証</strong><br>リゾルバが公開鍵を用いてデジタル署名を検証し，真正性・完全性を確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 検証結果", desc: "<strong>4. 検証成功/失敗</strong><br>検証に成功した RR のみ利用し，失敗時は応答を拒否します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "DNS Query", res: "RRSIG" }
    },
    cwe: {
        source: "情報処理安全確保支援士試験・R6春・午前II問9",
        diagramTitle: "CWE（共通弱点一覧）の位置づけ（シミュレーター）",
        text: "JVN などの脆弱性対策ポータルサイトで採用されている CWE はどれか。",
        options: [
            { key: "ア", text: "IT 製品の脆弱性を評価する手法", correct: false },
            { key: "イ", text: "製品を識別するためのプラットフォーム名の一覧", correct: false },
            { key: "ウ", text: "セキュリティに関連する設定項目を識別するための識別子", correct: false },
            { key: "エ", text: "ソフトウェア及びハードウェアの脆弱性の種類の一覧", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>CWE（Common Weakness Enumeration）</strong>は，ソフトウェア及びハードウェアの脆弱性の<strong>種類（弱点タイプ）</strong>を識別するための共通基準です。SQL インジェクション、クロスサイトスクリプティング、バッファオーバーフローなどを体系化して提供しています。</p>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-compare-item bad"><strong>ア CVSS</strong> 脆弱性の深刻度を数値評価する手法</div>
                <div class="check-compare-item bad"><strong>イ CPE</strong> 製品・プラットフォームを識別する一覧</div>
                <div class="check-compare-item bad"><strong>ウ CCE</strong> セキュリティ設定項目を識別する識別子</div>
                <div class="check-compare-item good"><strong>エ CWE ✅</strong> 脆弱性の種類（弱点タイプ）の一覧</div>
            </div>
        `,
        nodes: {
            left: { name: "JVN\nポータル", ip: "脆弱性情報", icon: "fa-globe", color: "var(--primary)" },
            center: { name: "CWE\n(弱点タイプ)", ip: "SQLi/XSS/BOF等", icon: "fa-sitemap", color: "var(--secondary)" },
            right: { name: "CVE\n(個別脆弱性)", ip: "具体的事例", icon: "fa-bug", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 弱点発見", desc: "<strong>1. ソフトウェアの弱点（Weakness）の存在</strong><br>設計・実装上の弱点タイプ（SQLi、XSS 等）が存在します。", stateClass: "state-1" },
            { num: 2, btn: "2. CWE分類", desc: "<strong>2. CWE による弱点タイプの体系化</strong><br>CWE は弱点の「種類」を ID 付きで一覧化し、共通言語として提供します。", stateClass: "state-2" },
            { num: 3, btn: "3. CVE公表", desc: "<strong>3. 具体的事例として CVE 公表</strong><br>特定製品の特定脆弱性は CVE として JVN 等で公開されます。", stateClass: "state-3" },
            { num: 4, btn: "4. JVN連携", desc: "<strong>4. JVN での CWE 参照</strong><br>JVN 等のポータルサイトでは CVE 情報とともに CWE による弱点タイプ分類が利用されます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "弱点タイプ", res: "CWE-ID" }
    },
    scap: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問12",
        diagramTitle: "SCAP 構成要素（シミュレーター）",
        text: "脆弱性管理，測定，評価を自動化するために NIST が策定した基準はどれか。",
        options: [
            { key: "ア", text: "FIPS（Federal Information Processing Standards）", correct: false },
            { key: "イ", text: "SCAP（Security Content Automation Protocol）", correct: true },
            { key: "ウ", text: "SIEM（Security Information and Event Management）", correct: false },
            { key: "エ", text: "SOAR（Security Orchestration, Automation and Response）", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>SCAP（Security Content Automation Protocol）</strong>は、NIST が策定した、脆弱性管理・測定・評価の<strong>自動化と標準化</strong>を目的としたプロトコル群です。6 つの標準仕様から構成されます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>CVE</strong>：脆弱性の識別</li>
                    <li><strong>CCE</strong>：セキュリティ設定の識別</li>
                    <li><strong>CPE</strong>：製品・プラットフォームの識別</li>
                    <li><strong>CVSS</strong>：脆弱性の深刻度評価</li>
                    <li><strong>XCCDF</strong>：セキュリティ設定チェックリストの記述</li>
                    <li><strong>OVAL</strong>：脆弱性・設定の検査言語</li>
                </ul>
            </div>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-compare-item bad"><strong>ア FIPS</strong> 連邦政府の情報処理標準</div>
                <div class="check-compare-item bad"><strong>ウ SIEM</strong> ログ収集・相関分析ツール</div>
                <div class="check-compare-item bad"><strong>エ SOAR</strong> セキュリティオーケストレーション</div>
            </div>
        `,
        nodes: {
            left: { name: "NIST\n(標準化)", ip: "SCAP策定", icon: "fa-landmark", color: "var(--primary)" },
            center: { name: "SCAP\n(6仕様)", ip: "CVE/CCE/CPE\nCVSS/XCCDF/OVAL", icon: "fa-gears", color: "var(--secondary)" },
            right: { name: "VA ツール\n(自動化)", ip: "脆弱性スキャン", icon: "fa-magnifying-glass", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. NIST策定", desc: "<strong>1. NIST による SCAP 策定</strong><br>米国 NIST が情報セキュリティ対策の自動化・標準化のために SCAP を策定しました。", stateClass: "state-1" },
            { num: 2, btn: "2. 6仕様", desc: "<strong>2. 6 つの標準仕様の統合</strong><br>CVE・CCE・CPE・CVSS・XCCDF・OVAL が SCAP を構成します。", stateClass: "state-2" },
            { num: 3, btn: "3. チェックリスト", desc: "<strong>3. XCCDF/OVAL による自動検査</strong><br>セキュリティ設定チェックリストと検査言語で設定・脆弱性を自動チェックします。", stateClass: "state-3" },
            { num: 4, btn: "4. VA自動化", desc: "<strong>4. 脆弱性管理の自動化</strong><br>VA ツール等が SCAP コンテンツを用いて脆弱性の管理・測定・評価を自動化します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SCAP Content", res: "Scan Result" }
    },
    exploit: {
        source: "情報処理安全確保支援士試験・R2秋・午前II問3",
        diagramTitle: "エクスプロイトコードの役割（シミュレーター）",
        text: "エクスプロイトコードの説明はどれか。",
        options: [
            { key: "ア", text: "攻撃コードとも呼ばれ、ソフトウェアの脆弱性を悪用するコードのことであり、使い方によっては脆弱性の検証に役立つこともある。", correct: true },
            { key: "イ", text: "マルウェア定義ファイルとも呼ばれ、マルウェアを特定するための特徴的なコードのことであり、マルウェア対策ソフトによるマルウェアの検知に用いられる。", correct: false },
            { key: "ウ", text: "メッセージとシークレットデータから計算されるハッシュコードのことであり、メッセージの改ざん検知に用いられる。", correct: false },
            { key: "エ", text: "ログインのたびに変化する認証コードのことであり、窃取されても再利用できないので不正アクセスを防ぐ。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>エクスプロイトコード（exploit code）</strong>は攻撃コードとも呼ばれ、ソフトウェアやハードウェアの<strong>脆弱性を悪用</strong>して攻撃するために作成されたコードです。ペネトレーションテストや脆弱性検証にも利用されます。</p>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-compare-item good"><strong>ア エクスプロイト ✅</strong> 脆弱性を悪用する攻撃コード</div>
                <div class="check-compare-item bad"><strong>イ シグネチャ</strong> マルウェア検知用の定義ファイル</div>
                <div class="check-compare-item bad"><strong>ウ HMAC等</strong> メッセージ改ざん検知用ハッシュ</div>
                <div class="check-compare-item bad"><strong>エ OTP</strong> ワンタイムパスワード</div>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者\n/検証者", ip: "exploit code", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "脆弱性\n(CVE/CWE)", ip: "弱点を突く", icon: "fa-bug", color: "var(--secondary)" },
            right: { name: "対象\nソフトウェア", ip: "権限奪取等", icon: "fa-server", color: "var(--primary)" }
        },
        steps: [
            { num: 1, btn: "1. 脆弱性存在", desc: "<strong>1. ソフトウェアに脆弱性が存在</strong><br>バッファオーバーフロー等の弱点がソフトウェアに存在します。", stateClass: "state-1" },
            { num: 2, btn: "2. コード作成", desc: "<strong>2. エクスプロイトコードの作成</strong><br>脆弱性を悪用する攻撃コード（エクスプロイト）が作成されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 悪用/検証", desc: "<strong>3. 攻撃または脆弱性検証</strong><br>攻撃に悪用されるほか、ペンテスト等で脆弱性の存在確認にも使われます。", stateClass: "state-3" },
            { num: 4, btn: "4. 対策", desc: "<strong>4. パッチ適用等の対策</strong><br>脆弱性が確認されたらパッチ適用や回避策の実施が求められます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Exploit", res: "Shell Access" }
    },
    sbom: {
        source: "情報処理安全確保支援士試験・R6春・午前II問17",
        diagramTitle: "SBOM による脆弱性管理（シミュレーター）",
        text: "ソフトウェアの脆弱性管理のためのツールとしても利用される SBOM（Software Bill of Materials）はどれか。",
        options: [
            { key: "ア", text: "ソフトウェアの脆弱性に対する、ベンダーに依存しないオープンで汎用的な深刻度の評価方法", correct: false },
            { key: "イ", text: "ソフトウェアのセキュリティアップデートを行うときに推奨される管理プロセス、組織体制などをまとめたガイドライン", correct: false },
            { key: "ウ", text: "ソフトウェアを構成するコンポーネント、互いの依存関係などのリスト", correct: true },
            { key: "エ", text: "米国の非営利団体 MITRE によって策定された、ソフトウェアにおけるセキュリティ上の弱点の種類を識別するための基準", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>SBOM（Software Bill of Materials）</strong>は、ソフトウェアを構成する<strong>コンポーネント・依存関係・ライセンス</strong>等を示すリストです。Log4j 等の問題コンポーネントを含む製品を迅速に特定し、脆弱性管理に活用できます。</p>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-compare-item bad"><strong>ア CVSS</strong> 脆弱性深刻度の評価方法</div>
                <div class="check-compare-item bad"><strong>イ ガイドライン</strong> パッチ管理プロセス等</div>
                <div class="check-compare-item good"><strong>ウ SBOM ✅</strong> コンポーネント・依存関係のリスト</div>
                <div class="check-compare-item bad"><strong>エ CWE</strong> 弱点タイプ識別基準</div>
            </div>
        `,
        nodes: {
            left: { name: "ソフトウェア\n製品", ip: "アプリ/OSS", icon: "fa-cube", color: "var(--primary)" },
            center: { name: "SBOM\n(部品表)", ip: "コンポーネント\n依存関係", icon: "fa-list", color: "var(--secondary)" },
            right: { name: "脆弱性\n管理", ip: "影響範囲特定", icon: "fa-shield-virus", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. SBOM生成", desc: "<strong>1. ソフトウェアの SBOM 作成</strong><br>製品を構成する OSS・ライブラリ等の一覧（SBOM）を作成します。", stateClass: "state-1" },
            { num: 2, btn: "2. 脆弱性公表", desc: "<strong>2. コンポーネントの脆弱性公表</strong><br>特定ライブラリ（例：Log4j）に CVE が公表されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 影響調査", desc: "<strong>3. SBOM による影響範囲の特定</strong><br>SBOM と照合し、問題コンポーネントを含む製品・システムを即座に特定します。", stateClass: "state-3" },
            { num: 4, btn: "4. パッチ適用", desc: "<strong>4. 迅速なパッチ・更新</strong><br>影響を受けるシステムに優先的にセキュリティアップデートを適用します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Component", res: "CVE Match" }
    },
    dhcparp: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問20",
        diagramTitle: "DHCP アドレス競合確認（ARP）（シミュレーター）",
        text: "DHCP のクライアントが，サーバから配布された IPv4 アドレスを，クライアント自身のホストアドレスとして設定する際に，そのアドレスが他のホストに使用されていないことを，クライアント自身でも確認することが推奨されている。この確認に使用するプロトコルとして，適切なものはどれか。",
        options: [
            { key: "ア", text: "ARP", correct: true },
            { key: "イ", text: "DNS", correct: false },
            { key: "ウ", text: "ICMP", correct: false },
            { key: "エ", text: "RARP", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>DHCP クライアントは割り当てられた IP アドレスを設定したうえで<strong>ARP リクエスト</strong>を送信し、他ホストからの応答がないことを確認します（アドレス競合検出）。ARP は IP アドレスから MAC アドレスを解決するプロトコルです。</p>
            <div class="check-diagram" style="margin-top:1rem;">
                <div class="check-diagram-title"><i class="fa-solid fa-network-wired"></i> アドレス競合確認の流れ</div>
                <div class="check-flow check-flow-vertical">
                    <div class="check-node browser"><strong>1. DHCP Offer/ACK</strong><br>サーバから IP アドレスを受け取る</div>
                    <div class="check-node server"><strong>2. IP 設定＋ARP Request</strong><br>割当 IP で「この IP の MAC は？」とブロードキャスト</div>
                    <div class="check-node safe"><strong>3. 応答なし → 使用可能</strong><br>他ホストが同 IP を使っていなければ ARP Reply なし</div>
                </div>
            </div>
            <div class="check-grid-2" style="margin-top:1rem;">
                <div class="check-compare-item bad"><strong>イ DNS</strong> 名前解決プロトコル</div>
                <div class="check-compare-item bad"><strong>ウ ICMP</strong> 到達確認（ping）等</div>
                <div class="check-compare-item bad"><strong>エ RARP</strong> MAC → IP（逆方向）</div>
            </div>
        `,
        nodes: {
            left: { name: "DHCP\nクライアント", ip: "IP割当受信", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "ARP\nRequest", ip: "競合確認", icon: "fa-broadcast-tower", color: "var(--secondary)" },
            right: { name: "同一LAN\n他ホスト", ip: "応答の有無", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. IP割当", desc: "<strong>1. DHCP サーバから IP アドレスを受信</strong><br>クライアントは DHCP で IPv4 アドレスの割り当てを受けます。", stateClass: "state-1" },
            { num: 2, btn: "2. IP設定", desc: "<strong>2. 割当 IP をホストに設定</strong><br>受け取った IP アドレスを自身のインタフェースに設定します。", stateClass: "state-2" },
            { num: 3, btn: "3. ARP送信", desc: "<strong>3. ARP リクエストで競合確認</strong><br>その IP アドレスに対して ARP リクエストをブロードキャストし、他ホストの応答を確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 使用開始", desc: "<strong>4. 応答がなければ使用開始</strong><br>どのホストからも ARP 応答がなければ、その IP は未使用と判断して利用を開始します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "ARP Req", res: "No Reply" }
    },
    spf: {
        source: "情報処理安全確保支援士試験・R4秋・午前II問15",
        diagramTitle: "SPF ドメイン認証（シミュレーター）",
        text: "SPF を用いたドメイン認証を実施する場合，送信元の電子メールアドレスのドメイン所有者が SPF の導入時に行う設定はどれか。",
        options: [
            { key: "ア", text: "DNS サーバに SPF レコードを登録する。", correct: true },
            { key: "イ", text: "DNS クエリを受け付けるポート番号を変更する。", correct: false },
            { key: "ウ", text: "メールサーバにデジタル証明書をインストールする。", correct: false },
            { key: "エ", text: "メールサーバの TCP ポート 25 を使用不可にする。", correct: false }
        ],
        explanation: `<p><strong>正解は「ア」です。</strong></p><br><p>SPF は送信元ドメインの DNS に<strong>SPF レコード</strong>（許可 SMTP サーバ IP）を登録し，受信側が MAIL FROM ドメインと送信 IP の整合性を確認します。</p>`,
        nodes: { left: { name: "送信SMTP", ip: "MAIL FROM", icon: "fa-paper-plane", color: "var(--primary)" }, center: { name: "DNS\nSPFレコード", ip: "許可IP一覧", icon: "fa-globe", color: "var(--secondary)" }, right: { name: "受信SMTP", ip: "整合性確認", icon: "fa-inbox", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. SPF登録", desc: "<strong>1. DNS に SPF レコード登録</strong><br>ドメイン所有者が許可する SMTP サーバ IP を DNS TXT レコードに登録します。", stateClass: "state-1" },
            { num: 2, btn: "2. メール受信", desc: "<strong>2. 受信 SMTP がメールを受信</strong><br>MAIL FROM のドメインと送信サーバ IP を取得します。", stateClass: "state-2" },
            { num: 3, btn: "3. DNS照会", desc: "<strong>3. SPF レコードを DNS 照会</strong><br>送信 IP が許可リストに含まれるか確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 判定", desc: "<strong>4. 受入/拒否</strong><br>整合すれば受け入れ，不一致なら拒否します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SPF Query", res: "Pass/Fail" }
    },
    ip25b: {
        source: "情報処理安全確保支援士試験・R2秋・午前II問17",
        diagramTitle: "IP25B（インバウンドポート25遮断）（シミュレーター）",
        text: "インターネットサービスプロバイダ（ISP）が，スパムメール対策として導入する IP25B に該当するものはどれか。",
        options: [
            { key: "ア", text: "自社 ISP ネットワークの動的 IP アドレスから，他 ISP が管理するメールサーバへの SMTP 通信を制限する。", correct: false },
            { key: "イ", text: "自社 ISP のメールサーバが受信した電子メールのうち，スパムメールのシグネチャに合致するものを隔離する。", correct: false },
            { key: "ウ", text: "他 ISP ネットワークの動的 IP アドレスから，自社 ISP のメールサーバへの SMTP 通信を制限する。", correct: true },
            { key: "エ", text: "第三者中継の脆弱性をもつ他 ISP のメールサーバから自社 ISP のメールサーバへ送信された電子メールを隔離する。", correct: false }
        ],
        explanation: `<p><strong>正解は「ウ」です。</strong></p><br><p><strong>IP25B</strong>は他 ISP の動的 IP から自社メールサーバ（ポート 25）への SMTP を遮断する対策です。アは OP25B の説明です。</p>`,
        nodes: { left: { name: "他ISP\n動的IP", ip: "SMTP送信", icon: "fa-user-secret", color: "var(--accent)" }, center: { name: "自社ISP\nIP25B", ip: "Port25遮断", icon: "fa-shield-halved", color: "var(--secondary)" }, right: { name: "自社\nメールサーバ", ip: "受信保護", icon: "fa-server", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. 外部からSMTP", desc: "<strong>1. 他 ISP 動的 IP から SMTP</strong><br>外部の動的 IP から自社メールサーバへポート 25 通信が試みられます。", stateClass: "state-1" },
            { num: 2, btn: "2. IP25B遮断", desc: "<strong>2. IP25B による遮断</strong><br>ISP がインバウンドのポート 25 通信をブロックします。", stateClass: "state-2" },
            { num: 3, btn: "3. スパム防止", desc: "<strong>3. 不正受信の抑制</strong><br>外部ボットネットからのスパム受信を低減します。", stateClass: "state-3" },
            { num: 4, btn: "4. 正規経路", desc: "<strong>4. 正規サーバは許可</strong><br>固定 IP 等の正規送信元は別途許可設定が可能です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SMTP:25", res: "Blocked" }
    },
    dkim: {
        source: "情報処理安全確保支援士試験・R5春・午前II問15",
        diagramTitle: "DKIM 電子署名認証（シミュレーター）",
        text: "DKIM（DomainKeys Identified Mail）の説明はどれか。",
        options: [
            { key: "ア", text: "送信メールサーバがメールヘッダにデジタル署名を付加し，受信メールサーバが公開鍵を用いてそのデジタル署名を検証する仕組み。", correct: true },
            { key: "イ", text: "送信メールサーバで利用者認証を行った場合にのみ，メールの送信を許可する仕組み。", correct: false },
            { key: "ウ", text: "メールヘッダと配送経路情報から得られる送信者情報を用いて，メール送信者の IP アドレスを検証する仕組み。", correct: false },
            { key: "エ", text: "内部ネットワークから外部メールサーバの TCP ポート番号 25 への直接通信を禁止するネットワーク機器の仕組み。", correct: false }
        ],
        explanation: `<p><strong>正解は「ア」です。</strong></p><br><p>DKIM は送信側がヘッダに<strong>デジタル署名</strong>を付与し，受信側が DNS の<strong>公開鍵</strong>で検証します。イ=SMTP-AUTH，ウ=SPF，エ=OP25B。</p>`,
        nodes: { left: { name: "送信SMTP", ip: "署名付与", icon: "fa-signature", color: "var(--primary)" }, center: { name: "DNS\n公開鍵", ip: "DKIMレコード", icon: "fa-key", color: "var(--secondary)" }, right: { name: "受信SMTP", ip: "署名検証", icon: "fa-check-double", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. 署名付与", desc: "<strong>1. 送信サーバが DKIM 署名を付与</strong><br>メールヘッダにデジタル署名を追加します。", stateClass: "state-1" },
            { num: 2, btn: "2. メール配送", desc: "<strong>2. メールが受信サーバへ配送</strong><br>署名付きメールが届きます。", stateClass: "state-2" },
            { num: 3, btn: "3. 公開鍵取得", desc: "<strong>3. DNS から公開鍵を取得</strong><br>署名ドメインの DNS レコードを参照します。", stateClass: "state-3" },
            { num: 4, btn: "4. 検証", desc: "<strong>4. 署名を検証</strong><br>正当な署名なら認証成功，改ざん・なりすましを検出できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Signed Mail", res: "Verify OK" }
    },
    imaps: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問16",
        diagramTitle: "IMAPS 暗号化メール受信（シミュレーター）",
        text: "電子メールをスマートフォンのメールアプリケーションプログラムで受信する際のメールサーバとスマートフォンとの間の通信を，メール本文を含めて暗号化するプロトコルはどれか。",
        options: [
            { key: "ア", text: "APOP", correct: false },
            { key: "イ", text: "IMAPS", correct: true },
            { key: "ウ", text: "POP3", correct: false },
            { key: "エ", text: "SMTP Submission", correct: false }
        ],
        explanation: `<p><strong>正解は「イ」です。</strong></p><br><p><strong>IMAPS</strong>（IMAP over TLS）はメール本文を含む通信全体を暗号化します。APOP は認証のみ，POP3 は平文，SMTP Submission は送信用途です。</p>`,
        nodes: { left: { name: "スマートフォン\nメールアプリ", ip: "IMAPS:993", icon: "fa-mobile-screen", color: "var(--primary)" }, center: { name: "TLS\n暗号化", ip: "通信保護", icon: "fa-lock", color: "var(--secondary)" }, right: { name: "メールサーバ", ip: "IMAP", icon: "fa-server", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. TLS接続", desc: "<strong>1. IMAPS（993）で TLS 接続</strong><br>クライアントとサーバ間の通信路を暗号化します。", stateClass: "state-1" },
            { num: 2, btn: "2. 認証", desc: "<strong>2. 暗号化された認証</strong><br>ID・パスワードも暗号化された経路で送信されます。", stateClass: "state-2" },
            { num: 3, btn: "3. メール取得", desc: "<strong>3. メール本文の取得</strong><br>メール本文も暗号化された通信で受信します。", stateClass: "state-3" },
            { num: 4, btn: "4. 盗聴防止", desc: "<strong>4. 盗聴・改ざんの防止</strong><br>平文 POP3 と異なりパケットキャプチャから内容を読めません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "IMAPS", res: "Encrypted" }
    },
    op25b: {
        source: "情報処理安全確保支援士試験・R7春・午前II問17",
        diagramTitle: "OP25B（アウトバウンドポート25遮断）（シミュレーター）",
        text: "ISP が，OP25B を導入する目的の一つはどれか。",
        options: [
            { key: "ア", text: "ISP 管理下のネットワークから ISP 管理外のネットワークに対する ICMP パケットを用いた DDoS 攻撃を遮断する。", correct: false },
            { key: "イ", text: "ISP 管理下のネットワークから ISP 管理外のネットワークに送信されるスパムメールを制限する。", correct: true },
            { key: "ウ", text: "ISP 管理外のネットワークから ISP 管理下のネットワークに対する ICMP パケットを用いた DDoS 攻撃を遮断する。", correct: false },
            { key: "エ", text: "ISP 管理外のネットワークから ISP 管理下のネットワークに送信されるスパムメールを制限する。", correct: false }
        ],
        explanation: `<p><strong>正解は「イ」です。</strong></p><br><p><strong>OP25B</strong>は自ネットワークの動的 IP から外部ポート 25 への直接 SMTP を遮断し，ボットネット等による<strong>スパム送信</strong>を制限します。エは IP25B に近い説明です。</p>`,
        nodes: { left: { name: "感染PC\n(動的IP)", ip: "スパム送信", icon: "fa-virus", color: "var(--accent)" }, center: { name: "ISP\nOP25B", ip: "Port25遮断", icon: "fa-ban", color: "var(--secondary)" }, right: { name: "外部\nメールサーバ", ip: ":25到達不可", icon: "fa-globe", color: "var(--primary)" } },
        steps: [
            { num: 1, btn: "1. ボット送信", desc: "<strong>1. 感染 PC から外部へ SMTP</strong><br>ISP 管理下の動的 IP からポート 25 へ直接送信を試みます。", stateClass: "state-1" },
            { num: 2, btn: "2. OP25B", desc: "<strong>2. OP25B による遮断</strong><br>ISP がアウトバウンドのポート 25 をブロックします。", stateClass: "state-2" },
            { num: 3, btn: "3. 正規経路", desc: "<strong>3. 正規ユーザーは 587 等を利用</strong><br>Submission ポート＋SMTP-AUTH で正規送信します。", stateClass: "state-3" },
            { num: 4, btn: "4. スパム抑制", desc: "<strong>4. スパム大量送信の抑制</strong><br>ボットネット経由のスパム送信を大幅に低減できます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SMTP:25", res: "Blocked" }
    },
    submission587: {
        source: "情報処理安全確保支援士試験・R6春・午前II問19",
        diagramTitle: "Submission ポート 587（シミュレーター）",
        text: "TCP のサブミッションポート（ポート番号 587）の説明として，適切なものはどれか。",
        options: [
            { key: "ア", text: "FTP サービスで，制御用コネクションのポート番号 21 とは別にデータ転送用に使用する。", correct: false },
            { key: "イ", text: "Web サービスで，ポート番号 80 の HTTP 要求とは別に，サブミットボタンをクリックした際の入力フォームのデータ送信に使用する。", correct: false },
            { key: "ウ", text: "コマンド操作の遠隔ログインで，通信内容を暗号化するために TELNET のポート番号 23 の代わりに使用する。", correct: false },
            { key: "エ", text: "電子メールサービスで，迷惑メール対策などのために SMTP のポート番号 25 の代わりに使用する。", correct: true }
        ],
        explanation: `<p><strong>正解は「エ」です。</strong></p><br><p>ポート <strong>587</strong> はメールクライアントの<strong>Submission</strong>用ポートで，SMTP-AUTH と TLS を組み合わせ，OP25B 下でも正規送信を可能にします。</p>`,
        nodes: { left: { name: "メール\nクライアント", ip: "Port 587", icon: "fa-laptop", color: "var(--primary)" }, center: { name: "SMTP-AUTH\n+TLS", ip: "認証投稿", icon: "fa-lock", color: "var(--secondary)" }, right: { name: "メールサーバ", ip: "MSA/MTA", icon: "fa-server", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. 587接続", desc: "<strong>1. Submission ポート 587 に接続</strong><br>クライアントがポート 25 ではなく 587 を使用します。", stateClass: "state-1" },
            { num: 2, btn: "2. 認証", desc: "<strong>2. SMTP-AUTH で認証</strong><br>利用者 ID・パスワードで認証します。", stateClass: "state-2" },
            { num: 3, btn: "3. TLS暗号化", desc: "<strong>3. TLS で通信暗号化</strong><br>認証情報とメール内容を保護します。", stateClass: "state-3" },
            { num: 4, btn: "4. メール投稿", desc: "<strong>4. サーバへメール投稿</strong><br>認証済みの正規経路でメールが送信されます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "AUTH+MAIL", res: "Submitted" }
    },
    smtpauth: {
        source: "情報処理安全確保支援士試験・R4秋・午前II問14",
        diagramTitle: "SMTP-AUTH（シミュレーター）",
        text: "SMTP-AUTH の特徴はどれか。",
        options: [
            { key: "ア", text: "ISP 管理下の動的 IP アドレスから管理外ネットワークのメールサーバへの SMTP 接続を禁止する。", correct: false },
            { key: "イ", text: "電子メール送信元のメールサーバが送信元ドメインの DNS に登録されていることを確認してから，電子メールを受信する。", correct: false },
            { key: "ウ", text: "メールクライアントからメールサーバへの電子メール送信時に，利用者 ID とパスワードによる利用者認証を行う。", correct: true },
            { key: "エ", text: "メールクライアントからメールサーバへの電子メール送信は，POP 接続で利用者認証済みの場合にだけ許可する。", correct: false }
        ],
        explanation: `<p><strong>正解は「ウ」です。</strong></p><br><p>SMTP-AUTH は送信時に<strong>利用者 ID・パスワード</strong>で認証します。ア=OP25B，イ=SPF，エ=POP before SMTP。</p>`,
        nodes: { left: { name: "メール\nクライアント", ip: "AUTH送信", icon: "fa-user", color: "var(--primary)" }, center: { name: "SMTP\nサーバ", ip: "ID/Pass認証", icon: "fa-key", color: "var(--secondary)" }, right: { name: "送信許可", ip: "認証後投稿", icon: "fa-check", color: "var(--success)" } },
        steps: [
            { num: 1, btn: "1. 接続", desc: "<strong>1. SMTP サーバへ接続</strong><br>クライアントがメールサーバに接続します。", stateClass: "state-1" },
            { num: 2, btn: "2. AUTH", desc: "<strong>2. SMTP-AUTH 認証</strong><br>利用者 ID とパスワードを送信します。", stateClass: "state-2" },
            { num: 3, btn: "3. 認証成功", desc: "<strong>3. 認証成功後に送信許可</strong><br>正規ユーザーのみ MAIL FROM が許可されます。", stateClass: "state-3" },
            { num: 4, btn: "4. 中継防止", desc: "<strong>4. 第三者中継の防止</strong><br>無認証の不正送信・オープンリレー悪用を防ぎます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "AUTH", res: "235 OK" }
    },
    dmarc: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問10",
        diagramTitle: "DMARC 認証失敗時の処理方針（シミュレーター）",
        text: "電子メールの受信者側のメールサーバでの送信ドメイン認証が失敗したときの処理方針を，送信側のドメイン管理者が指定するための仕組みはどれか。",
        options: [
            { key: "ア", text: "DKIM", correct: false },
            { key: "イ", text: "DMARC", correct: true },
            { key: "ウ", text: "SMTP-AUTH", correct: false },
            { key: "エ", text: "SPF", correct: false }
        ],
        explanation: `<p><strong>正解は「イ」です。</strong></p><br><p><strong>DMARC</strong>は SPF/DKIM 認証失敗時の処理（none/quarantine/reject）をドメイン管理者が DNS で指定し，レポートも受け取れます。</p>`,
        nodes: { left: { name: "送信ドメイン\n管理者", ip: "DMARC DNS", icon: "fa-user-shield", color: "var(--primary)" }, center: { name: "受信SMTP", ip: "SPF/DKIM検証", icon: "fa-envelope", color: "var(--secondary)" }, right: { name: "処理方針", ip: "拒否/隔離", icon: "fa-filter", color: "var(--accent)" } },
        steps: [
            { num: 1, btn: "1. ポリシー設定", desc: "<strong>1. DMARC ポリシーを DNS 登録</strong><br>認証失敗時の処理方針を指定します。", stateClass: "state-1" },
            { num: 2, btn: "2. SPF/DKIM", desc: "<strong>2. 受信側が SPF/DKIM を検証</strong><br>送信元ドメイン認証を実施します。", stateClass: "state-2" },
            { num: 3, btn: "3. 失敗時", desc: "<strong>3. 認証失敗時に DMARC 参照</strong><br>ポリシーに従い隔離・拒否等を実施します。", stateClass: "state-3" },
            { num: 4, btn: "4. レポート", desc: "<strong>4. 集計レポート送信</strong><br>なりすまし試行の可視化にも活用します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Auth Fail", res: "Policy" }
    },
    csrf: {
        source: "情報処理安全確保支援士試験・R6春・午前II問1",
        diagramTitle: "CSRF 対策（シミュレーター）",
        text: "クロスサイトリクエストフォージェリ攻撃の対策として，効果がないものはどれか。",
        options: [
            { key: "ア", text: "Web サイトでの決済などの重要な操作の都度，利用者のパスワードを入力させる。", correct: false },
            { key: "イ", text: "Web サイトへのログイン後，毎回異なる値を HTTP レスポンスボディに含め，Web ブラウザからのリクエストごとに送付されるその値を，Web サーバ側で照合する。", correct: false },
            { key: "ウ", text: "Web ブラウザからのリクエスト中の Referer によって正しいリンク元からの遷移であることを確認する。", correct: false },
            { key: "エ", text: "Web ブラウザからのリクエストを Web サーバで受け付けた際に，リクエストに含まれる \"<\", \">\" などの特殊文字を，\"&lt;\", \"&gt;\" などの文字列に置き換える。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>CSRF</strong>は認証済みユーザーのブラウザから意図しないリクエストを送らせる攻撃です。有効な対策は CSRF トークン、Referer 検証、再パスワード入力、SameSite Cookie 等です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：重要操作前の再認証 → CSRF 対策 ✅</li>
                    <li><strong>イ</strong>：CSRF トークン（ワンタイムトークン）→ CSRF 対策 ✅</li>
                    <li><strong>ウ</strong>：Referer 検証 → CSRF 対策 ✅</li>
                    <li><strong>エ</strong>：HTML エスケープ → <strong>XSS 対策</strong>であり CSRF 対策としては無効 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "攻撃者\nサイト", ip: "偽フォーム", icon: "fa-user-secret", color: "var(--accent)" },
            center: { name: "被害者\nブラウザ", ip: "Cookie自動送信", icon: "fa-laptop", color: "var(--primary)" },
            right: { name: "正規\nWebサイト", ip: "CSRFトークン検証", icon: "fa-shield-halved", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. ログイン", desc: "<strong>1. 被害者が正規サイトにログイン</strong><br>セッション Cookie がブラウザに保存されます。", stateClass: "state-1" },
            { num: 2, btn: "2. 偽ページ", desc: "<strong>2. 攻撃者サイトを閲覧</strong><br>攻撃者のページから正規サイトへ自動 POST 等が実行されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 自動送信", desc: "<strong>3. Cookie が自動送信</strong><br>ブラウザがセッション Cookie を付けてリクエストを送信します。", stateClass: "state-3" },
            { num: 4, btn: "4. トークン検証", desc: "<strong>4. CSRF トークンで防御</strong><br>レスポンスに含めたトークンの照合により不正リクエストを拒否します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "偽POST", res: "Token NG" }
    },
    riskident: {
        source: "情報処理安全確保支援士試験・R7春・午前II問10",
        diagramTitle: "JIS Q 27000 用語（シミュレーター）",
        text: "JIS Q 27000：2019（情報セキュリティマネジメントシステム－用語）の用語に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "脅威とは，一つ以上の要因によって付け込まれる可能性がある，資産又は管理策の弱点のことである。", correct: false },
            { key: "イ", text: "脆弱性（ぜいじゃくせい）とは，システム又は組織に損害を与える可能性がある，望ましくないインシデントの潜在的な原因のことである。", correct: false },
            { key: "ウ", text: "リスク対応とは，リスクの大きさが，受容可能か又は許容可能かを決定するために，リスク分析の結果をリスク基準と比較するプロセスのことである。", correct: false },
            { key: "エ", text: "リスク特定とは，リスクを発見，認識及び記述するプロセスのことであり，リスク源，事象，それらの原因及び起こり得る結果の特定が含まれる。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>JIS Q 27000：2019 の用語定義の対応関係：</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>の記述 → <strong>脆弱性</strong>の定義 ❌</li>
                    <li><strong>イ</strong>の記述 → <strong>脅威</strong>の定義 ❌</li>
                    <li><strong>ウ</strong>の記述 → <strong>リスク評価</strong>の定義（リスク対応ではない）❌</li>
                    <li><strong>エ</strong>の記述 → <strong>リスク特定</strong>の定義 ✅</li>
                </ul>
            </div>
            <p style="margin-top:0.75rem;">リスク特定には過去データ，理論分析，専門家意見，ステークホルダーニーズ等を含むことがあります。</p>
        `,
        nodes: {
            left: { name: "資産・脅威\n脆弱性", ip: "リスク源", icon: "fa-database", color: "var(--primary)" },
            center: { name: "リスク特定", ip: "発見・記述", icon: "fa-magnifying-glass", color: "var(--secondary)" },
            right: { name: "リスク分析\n評価", ip: "基準と比較", icon: "fa-scale-balanced", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 文脈確立", desc: "<strong>1. リスクアセスメントの文脈確立</strong><br>スコープとリスク許容基準を設定します。", stateClass: "state-1" },
            { num: 2, btn: "2. リスク特定", desc: "<strong>2. リスクの発見・認識・記述</strong><br>リスク源，事象，原因，起こり得る結果を特定します。", stateClass: "state-2" },
            { num: 3, btn: "3. リスク分析", desc: "<strong>3. 発生可能性と影響度の見積もり</strong><br>定性的・定量的にリスクを分析します。", stateClass: "state-3" },
            { num: 4, btn: "4. リスク評価", desc: "<strong>4. リスク基準との比較</strong><br>許容可能かを判断し，対応の優先度を決定します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "リスク源", res: "特定結果" }
    },
    riskdetail: {
        source: "情報処理安全確保支援士試験・H23秋・午前II問25",
        diagramTitle: "詳細リスク分析（シミュレーター）",
        text: "ISMS におけるリスク分析手法の一つである「詳細リスク分析」で行う作業はどれか。",
        options: [
            { key: "ア", text: "情報セキュリティポリシの作成", correct: false },
            { key: "イ", text: "セーフガードの選択", correct: false },
            { key: "ウ", text: "リスクの評価", correct: true },
            { key: "エ", text: "リスクの容認", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>ISMS における<strong>詳細リスク分析</strong>の作業フロー：</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ol>
                    <li>情報資産の識別</li>
                    <li>情報資産価値の評価及び資産間の依存性の確立</li>
                    <li>脅威の評価</li>
                    <li>脆弱性の評価</li>
                    <li>既存及び計画中のセーフガードの識別</li>
                    <li><strong>リスクの評価</strong></li>
                </ol>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：ポリシ策定 ❌</li>
                    <li><strong>イ</strong>：リスク対応（管理策選定）❌</li>
                    <li><strong>エ</strong>：リスク受容 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "情報資産\n識別", ip: "資産価値評価", icon: "fa-database", color: "var(--primary)" },
            center: { name: "脅威・脆弱性\nセーフガード", ip: "分析", icon: "fa-magnifying-glass-chart", color: "var(--secondary)" },
            right: { name: "リスクの\n評価", ip: "最終作業", icon: "fa-scale-balanced", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 資産識別", desc: "<strong>1. 情報資産の識別</strong><br>保護対象となる情報資産を洗い出します。", stateClass: "state-1" },
            { num: 2, btn: "2. 価値・依存性", desc: "<strong>2. 資産価値の評価と依存性の確立</strong><br>資産の重要度と資産間の依存関係を評価します。", stateClass: "state-2" },
            { num: 3, btn: "3. 脅威・脆弱性", desc: "<strong>3. 脅威と脆弱性の評価</strong><br>想定される脅威と脆弱性を分析します。", stateClass: "state-3" },
            { num: 4, btn: "4. リスク評価", desc: "<strong>4. セーフガード識別とリスクの評価</strong><br>既存・計画中のセーフガードを踏まえ，リスクを評価します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "分析", res: "評価結果" }
    },
    riskavoid: {
        source: "情報処理安全確保支援士試験・H29春・午前II問9",
        diagramTitle: "リスク回避（シミュレーター）",
        text: "個人情報の漏えいに関するリスク対応のうち，リスク回避に該当するものはどれか。",
        options: [
            { key: "ア", text: "個人情報の重要性と対策費用を勘案し，あえて対策をとらない。", correct: false },
            { key: "イ", text: "個人情報の保管場所に外部の者が侵入できないように，入退室をより厳密に管理する。", correct: false },
            { key: "ウ", text: "個人情報を含む情報資産を外部のデータセンタに預託する。", correct: false },
            { key: "エ", text: "収集済みの個人情報を消去し，新たな収集を禁止する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>リスク回避</strong>は，リスク発生の根本原因（作業・事象など）を排除してリスクを処理する方法です。個人情報の収集・保管そのものをやめることが該当します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：リスク<strong>受容</strong> ❌</li>
                    <li><strong>イ</strong>：リスク<strong>低減</strong>（入退室管理）❌</li>
                    <li><strong>ウ</strong>：リスク<strong>移転</strong>（外部預託）❌</li>
                    <li><strong>エ</strong>：リスク源の排除 → <strong>回避</strong> ✅</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "個人情報\n収集・保管", ip: "リスク源", icon: "fa-id-card", color: "var(--accent)" },
            center: { name: "リスク回避", ip: "根本原因の排除", icon: "fa-ban", color: "var(--secondary)" },
            right: { name: "漏えい\nリスクなし", ip: "収集禁止", icon: "fa-shield-halved", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. リスク源", desc: "<strong>1. 個人情報の保有がリスク源</strong><br>収集・保管している個人情報が漏えいリスクの根本原因です。", stateClass: "state-1" },
            { num: 2, btn: "2. 消去", desc: "<strong>2. 収集済み個人情報を消去</strong><br>既存の個人情報を削除し，リスク源を取り除きます。", stateClass: "state-2" },
            { num: 3, btn: "3. 収集禁止", desc: "<strong>3. 新たな収集を禁止</strong><br>今後の収集も禁止し，リスク源の再発生を防ぎます。", stateClass: "state-3" },
            { num: 4, btn: "4. 回避完了", desc: "<strong>4. リスク回避の完了</strong><br>漏えいリスクの根本原因がなくなり，回避が成立します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "個人情報", res: "消去・禁止" }
    },
    secpolicy: {
        source: "情報処理安全確保支援士試験・H25秋・高度共通 午前I問14",
        diagramTitle: "情報セキュリティ基本方針（シミュレーター）",
        text: "ISMS において定義することが求められている情報セキュリティ基本方針に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "重要な基本方針を定めた機密文書であり，社内の関係者以外の目に触れないようにする。", correct: false },
            { key: "イ", text: "情報セキュリティの基本方針を述べたものであり，ビジネス環境や技術が変化しても変更してはならない。", correct: false },
            { key: "ウ", text: "情報セキュリティのための経営陣の方向性及び支持を規定する。", correct: true },
            { key: "エ", text: "特定のシステムについてリスク分析を行い，そのセキュリティ対策とシステム運用の詳細を記述する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>情報セキュリティ<strong>基本方針</strong>は，事業要求と法規制に従い，情報セキュリティに対する<strong>経営陣の方向性及び支持</strong>を示すものです（ISO/IEC 27001 付録 A 5.1）。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>経営層の承認を得て発行し，従業員・関係者に通知する</li>
                    <li>定期的または重大な変化時に<strong>見直し</strong>する</li>
                    <li><strong>ア</strong>：機密限定 → 不適切 ❌</li>
                    <li><strong>イ</strong>：変更禁止 → 不適切 ❌</li>
                    <li><strong>エ</strong>：特定システムの詳細 → 基本方針ではない ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "経営陣", ip: "方向性・支持", icon: "fa-user-tie", color: "var(--primary)" },
            center: { name: "基本方針", ip: "承認・発布", icon: "fa-file-shield", color: "var(--secondary)" },
            right: { name: "従業員\n関係者", ip: "周知・遵守", icon: "fa-users", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 経営承認", desc: "<strong>1. 経営層が基本方針を承認</strong><br>情報セキュリティに対する経営陣の方向性と支持を示します。", stateClass: "state-1" },
            { num: 2, btn: "2. 発布", desc: "<strong>2. 方針を発行・周知</strong><br>従業員及び関係者に通知します。", stateClass: "state-2" },
            { num: 3, btn: "3. 運用", desc: "<strong>3. 組織全体で遵守</strong><br>下位ポリシ・管理策の根拠となります。", stateClass: "state-3" },
            { num: 4, btn: "4. 見直し", desc: "<strong>4. 定期的・変化時に見直し</strong><br>有効性と適切性を維持します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "方針", res: "承認" }
    },
    secorg: {
        source: "オリジナル問題",
        diagramTitle: "情報セキュリティマネジメント体制（シミュレーター）",
        text: "情報セキュリティマネジメント体制に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "情報セキュリティマネジメントに複数の人間がかかわると意見調整に時間を費やしてしまうので，担当者を 1 名選出し，推進をすべて任せるのが望ましい。", correct: false },
            { key: "イ", text: "情報セキュリティマネジメントの推進に当たっては，組織の様々な部署から広く必要な人材を招集するのが望ましい。", correct: true },
            { key: "ウ", text: "情報セキュリティマネジメントの推進においては，経営者の意見が最も重要なので，取締役会に一任するのが望ましい。", correct: false },
            { key: "エ", text: "情報セキュリティマネジメントの推進においては，情報システム部門の意見が最も重要なので，情報システム部門にすべて任せるのが望ましい。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>情報セキュリティは<strong>組織全体</strong>にかかわる重要事項です。特定の部署や担当者 1 名にすべてを任せるべきではなく，関連部署から広く人材を招集して推進するのが望ましいです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：1 名に一任 → 不適切 ❌</li>
                    <li><strong>ウ</strong>：取締役会に一任 → 不適切 ❌</li>
                    <li><strong>エ</strong>：情報システム部門に一任 → 不適切 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "経営層", ip: "方向性・支持", icon: "fa-user-tie", color: "var(--primary)" },
            center: { name: "情報セキュリティ\n委員会", ip: "横断的推進", icon: "fa-users-gear", color: "var(--secondary)" },
            right: { name: "各部門\n情報管理者", ip: "現場の実施", icon: "fa-building", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. 人材招集", desc: "<strong>1. 関連部署から人材を招集</strong><br>組織の様々な部署から必要な人材を集めます。", stateClass: "state-1" },
            { num: 2, btn: "2. 委員会設置", desc: "<strong>2. 横断的な推進体制</strong><br>情報セキュリティ委員会等で方針・計画を推進します。", stateClass: "state-2" },
            { num: 3, btn: "3. 部門連携", desc: "<strong>3. 各部門の情報管理者と連携</strong><br>現場での対策実施を各部門で担います。", stateClass: "state-3" },
            { num: 4, btn: "4. 組織全体", desc: "<strong>4. 組織全体で推進</strong><br>特定部署・個人に依存しない体制を構築します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "体制構築", res: "全体推進" }
    },
    tpm: {
        source: "情報処理安全確保支援士試験・H29春・午前II問4",
        diagramTitle: "TPM（Trusted Platform Module）（シミュレーター）",
        text: "PC などに内蔵されるセキュリティチップ（TPM: Trusted Platform Module）がもつ機能はどれか。",
        options: [
            { key: "ア", text: "TPM 間での共通鍵の交換", correct: false },
            { key: "イ", text: "鍵ペアの生成", correct: true },
            { key: "ウ", text: "デジタル証明書の発行", correct: false },
            { key: "エ", text: "ネットワーク経由の乱数送信", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p><strong>TPM</strong>は耐タンパ性に優れたセキュリティチップで，通常マザーボードに直付けされます。暗号化に用いる<strong>鍵ペアの生成・格納</strong>，暗号化・復号処理などの機能をもちます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：TPM 間の共通鍵交換 → 主機能ではない ❌</li>
                    <li><strong>ウ</strong>：デジタル証明書の発行 → CA の役割 ❌</li>
                    <li><strong>エ</strong>：ネットワーク経由の乱数送信 → 主機能ではない ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "PC / OS", ip: "暗号化要求", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "TPM\nチップ", ip: "耐タンパ領域", icon: "fa-microchip", color: "var(--secondary)" },
            right: { name: "鍵ペア", ip: "生成・格納", icon: "fa-key", color: "var(--success)" }
        },
        steps: [
            { num: 1, btn: "1. TPM搭載", desc: "<strong>1. マザーボードに TPM を搭載</strong><br>耐タンパ性に優れたセキュリティチップが内蔵されます。", stateClass: "state-1" },
            { num: 2, btn: "2. 鍵生成", desc: "<strong>2. 鍵ペアを生成</strong><br>暗号化に用いる公開鍵・秘密鍵のペアを TPM 内で生成します。", stateClass: "state-2" },
            { num: 3, btn: "3. 鍵格納", desc: "<strong>3. 秘密鍵を安全に格納</strong><br>秘密鍵は TPM 内に保持され，外部への漏洩を防ぎます。", stateClass: "state-3" },
            { num: 4, btn: "4. 暗号処理", desc: "<strong>4. 暗号化・復号を実行</strong><br>必要に応じて TPM が暗号化・復号処理を担います。", stateClass: "state-4" }
        ],
        packetLabels: { req: "鍵要求", res: "鍵ペア" }
    },
    tempest: {
        source: "情報処理安全確保支援士試験・R3秋・午前II問13",
        diagramTitle: "TEMPEST 攻撃（シミュレーター）",
        text: "テンペスト攻撃を説明したものはどれか。",
        options: [
            { key: "ア", text: "故意に暗号化演算を誤動作させ，正しい処理結果との差異を解析する。", correct: false },
            { key: "イ", text: "処理時間の差異を計測して解析する。", correct: false },
            { key: "ウ", text: "処理中に機器から放射される電磁波を観測して解析する。", correct: true },
            { key: "エ", text: "チップ内の信号線などに探針を直接当て，処理中のデータを観測して解析する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>TEMPEST</strong>攻撃は，ディスプレイやケーブル等から放射される<strong>微弱な電磁波</strong>を傍受・解析し，入力文字や画面表示情報を盗む手法です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：故障注入攻撃 ❌</li>
                    <li><strong>イ</strong>：タイミング攻撃 ❌</li>
                    <li><strong>エ</strong>：プローブによる直接観測 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "PC / ディスプレイ", ip: "電磁波放射", icon: "fa-desktop", color: "var(--primary)" },
            center: { name: "傍受・解析", ip: "TEMPEST", icon: "fa-satellite-dish", color: "var(--accent)" },
            right: { name: "攻撃者", ip: "情報窃取", icon: "fa-user-secret", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 電磁波放射", desc: "<strong>1. 機器から電磁波が放射</strong><br>ディスプレイやケーブルから微弱な電磁波が漏洩します。", stateClass: "state-1" },
            { num: 2, btn: "2. 傍受", desc: "<strong>2. 攻撃者が電磁波を傍受</strong><br>専用機器等で近傍から電磁波を受信します。", stateClass: "state-2" },
            { num: 3, btn: "3. 解析", desc: "<strong>3. 信号を解析</strong><br>受信した電磁波から画面表示や入力内容を復元します。", stateClass: "state-3" },
            { num: 4, btn: "4. 情報窃取", desc: "<strong>4. 機密情報の窃取</strong><br>物理的に隔離された環境の情報も漏洩し得ます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "電磁波", res: "復元データ" }
    },
    probmgmt: {
        source: "情報処理安全確保支援士試験・R5春・午前II問24",
        diagramTitle: "問題管理（シミュレーター）",
        text: "サービスマネジメントにおける問題管理において実施する活動はどれか。",
        options: [
            { key: "ア", text: "インシデントの発生後に暫定的にサービスを復旧させ，業務を継続できるようにする。", correct: false },
            { key: "イ", text: "インシデントの発生後に未知の根本原因を特定し，恒久的な解決策を策定する。", correct: true },
            { key: "ウ", text: "インシデントの発生に備えて，復旧のための設計をする。", correct: false },
            { key: "エ", text: "インシデントの発生を記録し，関係する部署に状況を連絡する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>サービスマネジメントにおける<strong>問題管理</strong>は，インシデントをはじめ IT サービスにおける問題の<strong>根本原因を特定</strong>して解決するとともに，<strong>恒久的な解決策</strong>を策定することを目的とします。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：インシデント管理（暫定復旧）❌</li>
                    <li><strong>ウ</strong>：可用性管理・継続性設計などに近い ❌</li>
                    <li><strong>エ</strong>：インシデント管理（記録・連絡）❌</li>
                </ul>
            </div>
            <p style="margin-top:0.75rem;">傾向分析や予兆管理により問題の<strong>未然防止</strong>を図ることも重要です。</p>
        `,
        nodes: {
            left: { name: "インシデント", ip: "複数発生", icon: "fa-triangle-exclamation", color: "var(--secondary)" },
            center: { name: "問題管理", ip: "根本原因分析", icon: "fa-magnifying-glass-chart", color: "var(--primary)" },
            right: { name: "恒久対策", ip: "再発防止", icon: "fa-shield-halved", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. インシデント", desc: "<strong>1. インシデントが発生</strong><br>サービス障害などが繰り返し／未知の原因で発生します。", stateClass: "state-1" },
            { num: 2, btn: "2. 分析", desc: "<strong>2. 根本原因を特定</strong><br>インシデントデータや傾向を分析し，問題（Problem）を特定します。", stateClass: "state-2" },
            { num: 3, btn: "3. 恒久策", desc: "<strong>3. 恒久的解決策を策定</strong><br>暫定対応ではなく，再発を防ぐ恒久対策を決めます。", stateClass: "state-3" },
            { num: 4, btn: "4. 再発防止", desc: "<strong>4. 実施と未然防止</strong><br>対策を適用し，予兆管理により今後の発生も防ぎます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "インシデント", res: "根本原因" }
    },
    forensic: {
        source: "情報処理安全確保支援士試験・R7春・午前II問15",
        diagramTitle: "証拠保全の優先順位（シミュレーター）",
        text: "マルウェア感染の調査対象のPCに対して，電源を切る前に全ての証拠保全を行いたい。ARPキャッシュを取得した後に保全すべき情報のうち，最も優先して保全すべきものはどれか。",
        options: [
            { key: "ア", text: "調査対象のPCで動的に追加されたルーティングテーブル", correct: true },
            { key: "イ", text: "調査対象のPCに増設されたHDDにある個人情報を格納したテキストファイル", correct: false },
            { key: "ウ", text: "調査対象のPCのVPN接続情報を記録しているVPNサーバ内のログ", correct: false },
            { key: "エ", text: "調査対象のPCのシステムログファイル", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>デジタルフォレンジックスでは<strong>揮発性の高いものから順</strong>に証拠を保全します（RFC 3227）。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ol>
                    <li>レジスタ，キャッシュ</li>
                    <li>ルーティングテーブル，ARPキャッシュ，プロセステーブル，カーネル統計，メモリ</li>
                    <li>テンポラリファイルシステム</li>
                    <li>ディスク</li>
                    <li>遠隔ロギングと監視データ</li>
                    <li>物理的設定，ネットワークトポロジ</li>
                    <li>アーカイブ用メディア</li>
                </ol>
            </div>
            <p style="margin-top:0.75rem;">ARPキャッシュ取得後，同レベルの<strong>ルーティングテーブル</strong>（ア）を優先します。イ・エはディスク，ウは遠隔ログで揮発性が低いです。</p>
        `,
        nodes: {
            left: { name: "揮発性高", ip: "メモリ／ARP", icon: "fa-memory", color: "var(--secondary)" },
            center: { name: "証拠保全", ip: "RFC 3227", icon: "fa-fingerprint", color: "var(--primary)" },
            right: { name: "揮発性低", ip: "ディスク／遠隔", icon: "fa-hard-drive", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 原則", desc: "<strong>1. 揮発性の高い順に保全</strong><br>電源断で消える情報から先に取得します。", stateClass: "state-1" },
            { num: 2, btn: "2. ARP取得", desc: "<strong>2. ARPキャッシュを取得済み</strong><br>次は同レベルのルーティングテーブル等を保全します。", stateClass: "state-2" },
            { num: 3, btn: "3. ルーティング", desc: "<strong>3. ルーティングテーブルを保全</strong><br>動的に追加された経路情報はメモリ上にあり優先度が高いです。", stateClass: "state-3" },
            { num: 4, btn: "4. その後", desc: "<strong>4. ディスク・遠隔ログへ</strong><br>HDD上のファイルや遠隔サーバのログは後回しにします。", stateClass: "state-4" }
        ],
        packetLabels: { req: "揮発データ", res: "証拠" }
    },
    sim3: {
        source: "情報処理安全確保支援士試験・R6春・午前II問8",
        diagramTitle: "SIM3（シミュレーター）",
        text: "組織のセキュリティインシデント管理の成熟度を評価するために Open CSIRT Foundation が開発したモデルはどれか。",
        options: [
            { key: "ア", text: "CMMC", correct: false },
            { key: "イ", text: "CMMI", correct: false },
            { key: "ウ", text: "SAMM", correct: false },
            { key: "エ", text: "SIM3", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>SIM3</strong>（Security Incident Management Maturity Model）は，Open CSIRT Foundation が開発した，セキュリティインシデント管理の成熟度評価モデルです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>カテゴリ：<strong>O</strong>（Organization）／<strong>H</strong>（Human）／<strong>T</strong>（Tools）／<strong>P</strong>（Processes）</li>
                    <li>44分類の評価項目，レベル0〜5で CSIRT 成熟度を評価</li>
                    <li><strong>ア</strong> CMMC：米国のサイバーセキュリティ成熟度モデル認証 ❌</li>
                    <li><strong>イ</strong> CMMI：プロセス改善の成熟度モデル ❌</li>
                    <li><strong>ウ</strong> SAMM：ソフトウェア保証成熟度モデル ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "CSIRT", ip: "インシデント管理", icon: "fa-users", color: "var(--primary)" },
            center: { name: "SIM3", ip: "成熟度評価", icon: "fa-chart-simple", color: "var(--accent)" },
            right: { name: "O/H/T/P", ip: "レベル0〜5", icon: "fa-layer-group", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 対象", desc: "<strong>1. CSIRT の成熟度を評価</strong><br>組織のインシデント管理能力を測ります。", stateClass: "state-1" },
            { num: 2, btn: "2. 4カテゴリ", desc: "<strong>2. O／H／T／P で評価</strong><br>組織・人材・ツール・プロセスの観点です。", stateClass: "state-2" },
            { num: 3, btn: "3. レベル", desc: "<strong>3. レベル0〜5</strong><br>44分類の項目で段階的に成熟度を判定します。", stateClass: "state-3" },
            { num: 4, btn: "4. 改善", desc: "<strong>4. 改善に活用</strong><br>弱点を可視化し，CSIRT 能力の向上につなげます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "現状", res: "成熟度" }
    },
    soar: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問11",
        diagramTitle: "SOAR（シミュレーター）",
        text: "SOAR（Security Orchestration, Automation and Response）の説明はどれか。",
        options: [
            { key: "ア", text: "脅威インテリジェンスの活用，セキュリティ運用の自動化及びインシデント対応の効率化を行う技術", correct: true },
            { key: "イ", text: "全ての利用者，デバイス，接続元を信頼できないものとして捉え，重要な情報資産やシステムに対するアクセスの正当性や安全性の検証を自動化することによって脅威を防ぐ考え方", correct: false },
            { key: "ウ", text: "組織間でサイバー攻撃に関する情報を効率的に交換するために，脅威情報構造化記述形式で記述された情報の交換を自動化するためのプロトコル仕様", correct: false },
            { key: "エ", text: "ファイアウォール，マルウェア対策製品，侵入検知製品など複数のセキュリティ製品のログの集約及び相関分析を自動化するための専用装置", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>SOAR</strong>は，セキュリティ運用の自動化とインシデント対応の効率化を実現する技術です。定義した<strong>プレイブック</strong>に沿って，各種セキュリティ機器の情報や脅威インテリジェンスを活用し，検知精度向上や対応効率化を図ります。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：ゼロトラスト ❌</li>
                    <li><strong>ウ</strong>：TAXII などに近い説明 ❌</li>
                    <li><strong>エ</strong>：SIEM ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "セキュリティ機器", ip: "アラート／ログ", icon: "fa-server", color: "var(--primary)" },
            center: { name: "SOAR", ip: "プレイブック", icon: "fa-gears", color: "var(--accent)" },
            right: { name: "自動化対応", ip: "効率化", icon: "fa-bolt", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 収集", desc: "<strong>1. 機器・脅威情報を収集</strong><br>セキュリティ製品や脅威インテリジェンスを取り込みます。", stateClass: "state-1" },
            { num: 2, btn: "2. オーケストレーション", desc: "<strong>2. プレイブックで連携</strong><br>定義したワークフローに沿って各製品を連携させます。", stateClass: "state-2" },
            { num: 3, btn: "3. 自動化", desc: "<strong>3. 対応を自動化</strong><br>定型的な調査・封じ込め作業を自動実行します。", stateClass: "state-3" },
            { num: 4, btn: "4. 効率化", desc: "<strong>4. インシデント対応を効率化</strong><br>人手を減らし，迅速かつ一貫した対応を実現します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "アラート", res: "自動対応" }
    },
    contingency: {
        source: "情報セキュリティスペシャリスト試験・H21秋・午前II問4",
        diagramTitle: "コンティンジェンシープラン（シミュレーター）",
        text: "コンティンジェンシープランにおける留意点はどれか。",
        options: [
            { key: "ア", text: "企業のすべてのシステムを対象とするのではなく，システムの復旧の重要性と緊急性を勘案して対象を決定する。", correct: true },
            { key: "イ", text: "災害などへの対応のために，すぐに使用できるよう，バックアップデータをコンピュータ室内又はセンタ内に保存しておく。", correct: false },
            { key: "ウ", text: "バックアップの対象は，機密情報の中から機密度を勘案して選択する。", correct: false },
            { key: "エ", text: "被害状況のシナリオを作成し，これに基づく \"予防策策定手順\" と \"バックアップ対策とその手順\" を策定する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>コンティンジェンシープランでは，復旧の<strong>重要性・緊急性</strong>を勘案して対象システムを選定し，予防措置・検知・対処の内容を策定します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：バックアップは遠隔地保管が基本（同一室内は災害で同時喪失）❌</li>
                    <li><strong>ウ</strong>：バックアップ対象は業務継続上の重要性で選ぶ（機密性のみではない）❌</li>
                    <li><strong>エ</strong>：シナリオに基づくのは主に対処・復旧手順（予防策策定手順という表現は不適切）❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "全システム", ip: "対象候補", icon: "fa-server", color: "var(--primary)" },
            center: { name: "優先度判定", ip: "重要性・緊急性", icon: "fa-filter", color: "var(--accent)" },
            right: { name: "対象選定", ip: "プラン策定", icon: "fa-file-shield", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 洗い出し", desc: "<strong>1. システムを洗い出す</strong><br>すべてのシステムを一律対象にはしません。", stateClass: "state-1" },
            { num: 2, btn: "2. 優先度", desc: "<strong>2. 重要性・緊急性を評価</strong><br>復旧の優先順位を業務影響から決めます。", stateClass: "state-2" },
            { num: 3, btn: "3. 対象決定", desc: "<strong>3. 対象を絞り込み</strong><br>優先度の高いシステムをプラン対象にします。", stateClass: "state-3" },
            { num: 4, btn: "4. 手順策定", desc: "<strong>4. 予防・検知・対処を策定</strong><br>対象ごとに不測事態への備えを文書化します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "候補", res: "対象" }
    },
    rpo: {
        source: "情報処理技術者試験 高度共通・H26秋・午前I問21",
        diagramTitle: "RPO（シミュレーター）",
        text: "目標復旧時点（RPO）を 24 時間に定めているのはどれか。",
        options: [
            { key: "ア", text: "業務アプリケーションをリリースするための中断時間は，24 時間以内とする。", correct: false },
            { key: "イ", text: "業務データの復旧は，障害発生時点から 24 時間以内に完了させる。", correct: false },
            { key: "ウ", text: "障害発生時点の 24 時間前の業務データの復旧を保証する。", correct: true },
            { key: "エ", text: "中断した IT サービスを 24 時間以内に復旧させる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>RPO</strong>（Recovery Point Objective：目標復旧時点）は，業務中断からさかのぼって<strong>いつの時点の状態まで戻すか</strong>を示す指標です。</p>
            <p style="margin-top:0.75rem;"><strong>RTO</strong>（目標復旧時間）は，中断後<strong>いつまでに復旧させるか</strong>の指標です。ア・イ・エはいずれも時間内に復旧させる＝RTO の説明です。</p>
        `,
        nodes: {
            left: { name: "障害発生", ip: "中断", icon: "fa-bolt", color: "var(--secondary)" },
            center: { name: "RPO 24h", ip: "復旧時点", icon: "fa-clock-rotate-left", color: "var(--primary)" },
            right: { name: "24時間前データ", ip: "保証", icon: "fa-database", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 障害", desc: "<strong>1. 業務が中断</strong><br>障害によりサービスやデータ処理が止まります。", stateClass: "state-1" },
            { num: 2, btn: "2. RPO確認", desc: "<strong>2. RPO＝24時間を確認</strong><br>いつの時点のデータまで戻すかを決めます。", stateClass: "state-2" },
            { num: 3, btn: "3. 復旧点", desc: "<strong>3. 24時間前のデータを保証</strong><br>最大で1日分のデータ損失を許容する設定です。", stateClass: "state-3" },
            { num: 4, btn: "4. 区別", desc: "<strong>4. RTO と区別</strong><br>「何時間以内に復旧」は RTO，「何時間前のデータ」は RPO です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "障害", res: "復旧点" }
    },
    dbdirect: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問25",
        diagramTitle: "データベース直接修正の監査指摘（シミュレーター）",
        text: "データベースの直接修正に関して，監査人が，システム監査報告書で報告すべき指摘事項はどれか。ここで，直接修正とは，アプリケーションソフトウェアの機能を経由せずに，特権IDを使用してデータを追加，変更又は削除することをいう。",
        options: [
            { key: "ア", text: "更新ログ上は，アプリケーションソフトウェアの機能を経由したデータ更新として記録していた。", correct: true },
            { key: "イ", text: "事前のデータ変更申請の承認，及び事後のデータ変更結果の承認を行っていた。", correct: false },
            { key: "ウ", text: "直接修正の作業終了時には，直接修正用の特権IDを無効にしていた。", correct: false },
            { key: "エ", text: "利用部門からのデータ変更依頼に基づいて，システム部門が直接修正を実施していた。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>更新ログを加工し，アプリケーションの機能を経由した正常な処理によるログとして残していたとすれば，<strong>ログの改ざん</strong>であり，重大な指摘事項に該当します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ・ウ</strong>：承認や特権IDの無効化は適切な統制 ✅（指摘対象ではない）</li>
                    <li><strong>エ</strong>：依頼に基づく実施自体は手続としてあり得る（ログ改ざんほど重大ではない）</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "特権ID", ip: "直接修正", icon: "fa-user-shield", color: "var(--secondary)" },
            center: { name: "更新ログ", ip: "改ざん", icon: "fa-file-pen", color: "var(--accent)" },
            right: { name: "監査指摘", ip: "重大事項", icon: "fa-clipboard-list", color: "var(--primary)" }
        },
        steps: [
            { num: 1, btn: "1. 直接修正", desc: "<strong>1. 特権IDで直接修正</strong><br>アプリ機能を経由せずデータを追加・変更・削除します。", stateClass: "state-1" },
            { num: 2, btn: "2. ログ加工", desc: "<strong>2. 更新ログを加工</strong><br>アプリ経由の正常更新であるかのように記録します。", stateClass: "state-2" },
            { num: 3, btn: "3. 監査発見", desc: "<strong>3. 監査人が発見</strong><br>実態とログの不一致が明らかになります。", stateClass: "state-3" },
            { num: 4, btn: "4. 指摘", desc: "<strong>4. 報告書で指摘</strong><br>ログ改ざんは重大な指摘事項として報告します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "直接修正", res: "改ざんログ" }
    },
    auditrec: {
        source: "情報処理技術者試験 高度共通・H29春・午前I問22",
        diagramTitle: "改善勧告の記載（シミュレーター）",
        text: "システム監査人が監査報告書に記載する改善勧告に関する説明のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "改善の実現可能性は考慮せず，監査人が改善の必要があると判断した事項だけを記載する。", correct: false },
            { key: "イ", text: "監査証拠による裏付けの有無にかかわらず，監査人が改善の必要があると判断した事項を記載する。", correct: false },
            { key: "ウ", text: "監査人が改善の必要があると判断した事項のうち，被監査部門の責任者が承認した事項だけを記載する。", correct: false },
            { key: "エ", text: "調査結果に事実誤認がないことを被監査部門に確認した上で，監査人が改善の必要があると判断した事項を記載する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>改善勧告は，事実誤認がないことを被監査部門に確認したうえで，監査人が必要と判断した事項を記載します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：実現可能性も考慮する必要がある ❌</li>
                    <li><strong>イ</strong>：監査証拠による裏付けが必要 ❌</li>
                    <li><strong>ウ</strong>：被監査部門の承認は不要 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "監査証拠", ip: "調査結果", icon: "fa-folder-open", color: "var(--primary)" },
            center: { name: "事実確認", ip: "被監査部門", icon: "fa-comments", color: "var(--accent)" },
            right: { name: "改善勧告", ip: "報告書", icon: "fa-file-lines", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 証拠収集", desc: "<strong>1. 監査証拠を収集</strong><br>改善の必要性は証拠に裏付けられる必要があります。", stateClass: "state-1" },
            { num: 2, btn: "2. 事実確認", desc: "<strong>2. 被監査部門に事実確認</strong><br>調査結果に事実誤認がないかを確認します。", stateClass: "state-2" },
            { num: 3, btn: "3. 判断", desc: "<strong>3. 監査人が改善要否を判断</strong><br>実現可能性も考慮しつつ記載対象を決めます。", stateClass: "state-3" },
            { num: 4, btn: "4. 記載", desc: "<strong>4. 報告書に改善勧告を記載</strong><br>被監査部門の承認は不要です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "証拠", res: "勧告" }
    },
    audittec: {
        source: "情報処理技術者試験 高度共通・R元秋・午前I問22",
        diagramTitle: "監査手続の技法（シミュレーター）",
        text: "システム監査基準(平成30年)における監査手続の実施に際して利用する技法に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "インタビュー法とは，システム監査人が，直接，関係者に口頭で問い合わせ，回答を入手する技法をいう。", correct: true },
            { key: "イ", text: "現地調査法は，システム監査人が監査対象部門に直接赴いて，自ら観察・調査するものなので，当該部門の業務時間外に実施しなければならない。", correct: false },
            { key: "ウ", text: "コンピュータ支援監査技法は，システム監査上使用頻度の高い機能に特化した，しかも非常に簡単な操作で利用できる専用ソフトウェアによらなければならない。", correct: false },
            { key: "エ", text: "チェックリスト法とは，監査対象部門がチェックリストを作成及び利用して，監査対象部門の見解を取りまとめた結果をシステム監査人が点検する技法をいう。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>インタビュー法</strong>は，システム監査人が関係者に直接口頭で問い合わせ，回答を入手する技法です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：現地調査は業務時間<strong>内</strong>に実施する ❌</li>
                    <li><strong>ウ</strong>：CAAT は専用ソフトに限定されない（侵入試験的手法等もある）❌</li>
                    <li><strong>エ</strong>：チェックリストを作成するのは<strong>システム監査人</strong> ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "システム監査人", ip: "口頭問合せ", icon: "fa-user-tie", color: "var(--primary)" },
            center: { name: "インタビュー法", ip: "直接確認", icon: "fa-comments", color: "var(--accent)" },
            right: { name: "関係者", ip: "回答入手", icon: "fa-users", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 対象選定", desc: "<strong>1. 関係者を選定</strong><br>監査手続に必要な情報をもつ担当者を特定します。", stateClass: "state-1" },
            { num: 2, btn: "2. 問合せ", desc: "<strong>2. 口頭で問い合わせ</strong><br>監査人が直接質問し，回答を入手します。", stateClass: "state-2" },
            { num: 3, btn: "3. 記録", desc: "<strong>3. 回答を記録・評価</strong><br>得られた情報を監査証拠として整理します。", stateClass: "state-3" },
            { num: 4, btn: "4. 他技法と併用", desc: "<strong>4. 他の技法と組み合わせ</strong><br>現地調査・チェックリスト・CAAT などと併用します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "質問", res: "回答" }
    },
    masteravail: {
        source: "情報処理技術者試験 高度共通・R3春・午前I問21",
        diagramTitle: "マスタファイル管理と可用性（シミュレーター）",
        text: "マスタファイル管理に関するシステム監査項目のうち，可用性に該当するものはどれか。",
        options: [
            { key: "ア", text: "マスタファイルが置かれているサーバを二重化し，耐障害性の向上を図っていること", correct: true },
            { key: "イ", text: "マスタファイルのデータを複数件まとめて検索・加工するための機能が，システムに盛り込まれていること", correct: false },
            { key: "ウ", text: "マスタファイルのメンテナンスは，特権アカウントを付与された者だけに許されていること", correct: false },
            { key: "エ", text: "マスタファイルへのデータ入力チェック機能が，システムに盛り込まれていること", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>可用性（availability）</strong>は，情報システムが必要なときにいつでも正常に利用できるようにすることです。サーバ二重化による耐障害性向上は可用性の典型例です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：利便性・効率性（CIA の可用性ではない）❌</li>
                    <li><strong>ウ</strong>：機密性（アクセス制御）❌</li>
                    <li><strong>エ</strong>：完全性（入力チェック）❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "マスタファイル", ip: "重要データ", icon: "fa-database", color: "var(--primary)" },
            center: { name: "サーバ二重化", ip: "耐障害性", icon: "fa-server", color: "var(--accent)" },
            right: { name: "可用性", ip: "いつでも利用可", icon: "fa-clock", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 対象", desc: "<strong>1. マスタファイルの管理を監査</strong><br>可用性・機密性・完全性の観点で項目を分類します。", stateClass: "state-1" },
            { num: 2, btn: "2. 二重化", desc: "<strong>2. サーバを二重化</strong><br>障害時もサービスを継続できる構成にします。", stateClass: "state-2" },
            { num: 3, btn: "3. 耐障害性", desc: "<strong>3. 耐障害性が向上</strong><br>単一障害点を減らし，利用不能時間を抑えます。", stateClass: "state-3" },
            { num: 4, btn: "4. 可用性", desc: "<strong>4. 可用性に該当</strong><br>必要なときに利用できる状態の確保＝可用性です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "障害", res: "継続運用" }
    },
    fwping: {
        source: "情報処理安全確保支援士試験・H28春・午前II問15",
        diagramTitle: "ping 遮断と ICMP（シミュレーター）",
        text: "インターネットから DMZ 上のコンピュータへの ping による応答がないようにしたい。ファイアウォールで通過を禁止するように設定するものはどれか。",
        options: [
            { key: "ア", text: "ICMP", correct: true },
            { key: "イ", text: "TCP のポート番号 21", correct: false },
            { key: "ウ", text: "TCP のポート番号 110", correct: false },
            { key: "エ", text: "UDP のポート番号 123", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>ping</strong>は ICMP を用いて到達確認を行うため，応答させないには <strong>ICMP</strong> の通過を禁止します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：FTP（TCP 21）❌</li>
                    <li><strong>ウ</strong>：POP3（TCP 110）❌</li>
                    <li><strong>エ</strong>：NTP（UDP 123）❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "インターネット", ip: "ping", icon: "fa-globe", color: "var(--secondary)" },
            center: { name: "ファイアウォール", ip: "ICMP 禁止", icon: "fa-shield-halved", color: "var(--primary)" },
            right: { name: "DMZ ホスト", ip: "無応答", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. ping", desc: "<strong>1. 外部から ping</strong><br>到達確認のため ICMP Echo Request が送られます。", stateClass: "state-1" },
            { num: 2, btn: "2. 判定", desc: "<strong>2. FW がプロトコルを判定</strong><br>ping は ICMP であるため，ICMP ルールが適用されます。", stateClass: "state-2" },
            { num: 3, btn: "3. 遮断", desc: "<strong>3. ICMP を禁止</strong><br>通過禁止により Echo Reply も返りません。", stateClass: "state-3" },
            { num: 4, btn: "4. 結果", desc: "<strong>4. 応答なし</strong><br>外部からはホストが応答しない状態になります。", stateClass: "state-4" }
        ],
        packetLabels: { req: "ICMP Echo", res: "遮断" }
    },
    spi: {
        source: "情報処理安全確保支援士試験・R3秋・午前II問6",
        diagramTitle: "ステートフルパケットインスペクション（シミュレーター）",
        text: "ファイアウォールにおけるステートフルパケットインスペクションの特徴はどれか。",
        options: [
            { key: "ア", text: "IPアドレスの変換が行われることによって，内部のネットワーク構成を外部から隠蔽できる。", correct: false },
            { key: "イ", text: "暗号化されたパケットのデータ部を復号して，許可された通信かどうかを判断できる。", correct: false },
            { key: "ウ", text: "過去に通過したリクエストパケットに対応付けられる戻りのパケットを通過させることができる。", correct: true },
            { key: "エ", text: "パケットのデータ部をチェックして，アプリケーション層での不正なアクセスを防止できる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>SPI（ダイナミックパケットフィルタ）はセッション状態を管理し，許可した要求に対応する<strong>戻りパケットを動的に通過</strong>させます。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：NAT／NAPT ❌</li>
                    <li><strong>イ</strong>：復号機能は持たない ❌</li>
                    <li><strong>エ</strong>：アプリゲートウェイ／WAF 寄り ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "内部ホスト", ip: "要求", icon: "fa-laptop", color: "var(--primary)" },
            center: { name: "SPI FW", ip: "状態管理", icon: "fa-shield-halved", color: "var(--accent)" },
            right: { name: "外部サーバ", ip: "応答", icon: "fa-server", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 要求", desc: "<strong>1. 内部から要求パケット</strong><br>接続開始方向の通信を許可ルールで通します。", stateClass: "state-1" },
            { num: 2, btn: "2. 状態記録", desc: "<strong>2. セッションを記録</strong><br>ステートテーブルに通信状態を保持します。", stateClass: "state-2" },
            { num: 3, btn: "3. 戻り許可", desc: "<strong>3. 戻りパケットを動的許可</strong><br>対応する応答のみ通過させます。", stateClass: "state-3" },
            { num: 4, btn: "4. 終了", desc: "<strong>4. 一時ルールを破棄</strong><br>セッション終了後は動的ルールを削除します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "要求", res: "戻り" }
    },
    spidef: {
        source: "情報処理安全確保支援士試験・R3春・午前II問6",
        diagramTitle: "SPI 方式の定義（シミュレーター）",
        text: "ステートフルパケットインスペクション方式のファイアウォールの特徴はどれか。",
        options: [
            { key: "ア", text: "WebクライアントとWebサーバとの間に配置され，リバースプロキシサーバとして動作する方式であり，通信を中継する際に不正なデータがないかどうかを検査する。", correct: false },
            { key: "イ", text: "アプリケーションプロトコルごとにプロキシソフトウェアを用意する方式であり，クライアントからの通信を目的のサーバに中継する際に不正なデータがないかどうかを検査する。", correct: false },
            { key: "ウ", text: "特定のアプリケーションプロトコルだけを通過させるゲートウェイソフトウェアを利用する方式であり，クライアントからのコネクション要求を受け付けて目的のサーバに改めてコネクションを要求することによってアクセスを制御する。", correct: false },
            { key: "エ", text: "パケットフィルタリングを拡張した方式であり，過去に通過したパケットから通信セッションを認識し，受け付けたパケットを通信セッションの状態に照らし合わせて通過させるか遮断するかを判断する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>SPI はパケットフィルタリングを拡張し，<strong>セッション状態</strong>に基づいて通過／遮断を判断する方式です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：WAF／リバースプロキシ ❌</li>
                    <li><strong>イ</strong>：アプリケーションゲートウェイ ❌</li>
                    <li><strong>ウ</strong>：サーキットレベルゲートウェイ ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "パケット", ip: "受信", icon: "fa-network-wired", color: "var(--primary)" },
            center: { name: "状態テーブル", ip: "セッション照合", icon: "fa-table", color: "var(--accent)" },
            right: { name: "通過／遮断", ip: "動的判定", icon: "fa-traffic-light", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 拡張", desc: "<strong>1. パケットフィルタを拡張</strong><br>ヘッダ判定に加え状態管理を行います。", stateClass: "state-1" },
            { num: 2, btn: "2. 認識", desc: "<strong>2. セッションを認識</strong><br>過去パケットから通信状態を把握します。", stateClass: "state-2" },
            { num: 3, btn: "3. 照合", desc: "<strong>3. 状態と照合</strong><br>受信パケットをセッション情報と照らし合わせます。", stateClass: "state-3" },
            { num: 4, btn: "4. 判定", desc: "<strong>4. 通過または遮断</strong><br>整合しないパケットは遮断します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "パケット", res: "判定" }
    },
    fwdbmove: {
        source: "情報処理安全確保支援士試験・R5秋・午前II問17",
        diagramTitle: "DB サーバ移設と FW ルール（シミュレーター）",
        text: "DBサーバをDMZから内部ネットワークに移動するとき，ステートフルパケットインスペクション型FWで必要となるフィルタリングルール変更の一つはどれか。",
        options: [
            { key: "ア", text: "削除：インターネット → WebAPサーバ，HTTPS，許可", correct: false },
            { key: "イ", text: "削除：運用管理PC → 変更前のDBサーバ，SSH，許可", correct: true },
            { key: "ウ", text: "追加：WebAPサーバ → 変更後のDBサーバ，SSH，許可", correct: false },
            { key: "エ", text: "追加：インターネット → WebAPサーバ，ODBC，許可", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>移設後，運用管理PCとDBは同じ内部ネットワークになり，SSH は FW を経由しません。不要ルールは削除します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア</strong>：インターネット→WebAP の HTTPS は継続して必要 ❌</li>
                    <li><strong>ウ</strong>：WebAP→DB は SSH ではなく ODBC ❌</li>
                    <li><strong>エ</strong>：インターネット→WebAP の ODBC は不要 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "DMZ", ip: "変更前 DB", icon: "fa-server", color: "var(--secondary)" },
            center: { name: "FW", ip: "ルール見直し", icon: "fa-shield-halved", color: "var(--primary)" },
            right: { name: "内部NW", ip: "変更後 DB", icon: "fa-building", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 移設", desc: "<strong>1. DB を内部へ移設</strong><br>DMZ から内部ネットワークへ移動します。", stateClass: "state-1" },
            { num: 2, btn: "2. 経路変化", desc: "<strong>2. 管理PCとの経路が変化</strong><br>同一内部網となり FW 経由が不要になります。", stateClass: "state-2" },
            { num: 3, btn: "3. 削除", desc: "<strong>3. SSH 許可ルールを削除</strong><br>運用管理PC→旧DB の SSH 許可を外します。", stateClass: "state-3" },
            { num: 4, btn: "4. 最小権限", desc: "<strong>4. 必要通信だけ残す</strong><br>条件どおり最小限の許可に整えます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SSH", res: "ルール削除" }
    },
    fwdmz: {
        source: "情報セキュリティスペシャリスト試験・H22秋・午前II問6",
        diagramTitle: "DMZ と内部の FW 設定（シミュレーター）",
        text: "DMZのWebサーバが受けた入力を内部のDBサーバに格納する構成で，インターネットからDMZ経由の不正侵入を防ぐため，DMZと内部の間のFW設定として最も適切なものはどれか。",
        options: [
            { key: "ア", text: "DBサーバの宛先ポート番号を固定し，Webサーバからその宛先ポート番号への通信だけを許可する。", correct: true },
            { key: "イ", text: "DMZからDBサーバへの通信だけを許可する。", correct: false },
            { key: "ウ", text: "Webサーバは任意の送信元ポートを使い，終了済み接続と同じ送信元ポートの通信を拒否する。", correct: false },
            { key: "エ", text: "Webサーバの送信元ポート番号を固定し，その送信元ポートからの通信だけを許可する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>許可すべきは <strong>Webサーバ → DB の特定宛先ポート</strong>のみです。送信元IP・宛先IP／ポートで最小限に絞ります。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>イ</strong>：DMZ 内の DNS 等からも通ってしまう ❌</li>
                    <li><strong>ウ・エ</strong>：送信元ポートによる識別は不適切 ❌</li>
                </ul>
            </div>
        `,
        nodes: {
            left: { name: "DMZ Web", ip: "送信元限定", icon: "fa-globe", color: "var(--primary)" },
            center: { name: "FW", ip: "宛先ポート固定", icon: "fa-shield-halved", color: "var(--accent)" },
            right: { name: "内部 DB", ip: "受信ポート", icon: "fa-database", color: "var(--secondary)" }
        },
        steps: [
            { num: 1, btn: "1. 要件", desc: "<strong>1. Web→DB のみ必要</strong><br>業務上必要な通信を特定します。", stateClass: "state-1" },
            { num: 2, btn: "2. 送信元", desc: "<strong>2. 送信元を Web に限定</strong><br>DMZ 全体許可は避けます。", stateClass: "state-2" },
            { num: 3, btn: "3. 宛先", desc: "<strong>3. DB の宛先ポートを固定</strong><br>待ち受けポートだけ許可します。", stateClass: "state-3" },
            { num: 4, btn: "4. 防御", desc: "<strong>4. 不正侵入経路を抑制</strong><br>インターネット→DMZ→内部の横展開を難しくします。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Web→DB", res: "許可" }
    },
    falseneg: {
        source: "情報処理安全確保支援士試験・H29春・午前II問13",
        diagramTitle: "フォールスネガティブ（シミュレーター）",
        text: "ウイルス対策ソフトでの，フォールスネガティブに該当するものはどれか。",
        options: [
            { key: "ア", text: "ウイルスに感染していないファイルを，ウイルスに感染していないと判断する。", correct: false },
            { key: "イ", text: "ウイルスに感染していないファイルを，ウイルスに感染していると判断する。", correct: false },
            { key: "ウ", text: "ウイルスに感染しているファイルを，ウイルスに感染していないと判断する。", correct: true },
            { key: "エ", text: "ウイルスに感染しているファイルを，ウイルスに感染していると判断する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>フォールスネガティブ</strong>（False Negative）は，本来検知すべき悪意ある活動を，誤って害のないものとして分類すること＝<strong>検知漏れ</strong>です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ア・エ</strong>：正しい判断 ❌</li>
                    <li><strong>イ</strong>：フォールス<strong>ポジティブ</strong>（誤検知）❌</li>
                    <li><strong>ウ</strong>：感染ファイルを未感染と判断 → フォールスネガティブ ✅</li>
                </ul>
            </div>
            <p style="margin-top:0.75rem;">IDS／IPS でも同様に，見逃し（FN）と誤検知（FP）のバランスが重要です。</p>
        `,
        nodes: {
            left: { name: "感染ファイル", ip: "実際は有害", icon: "fa-virus", color: "var(--secondary)" },
            center: { name: "AV / IDS", ip: "判定", icon: "fa-shield-virus", color: "var(--primary)" },
            right: { name: "誤判定", ip: "未感染と判断", icon: "fa-circle-xmark", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 実際", desc: "<strong>1. ファイルは感染している</strong><br>本来は検知・隔離すべき対象です。", stateClass: "state-1" },
            { num: 2, btn: "2. スキャン", desc: "<strong>2. ウイルス対策が判定</strong><br>シグネチャやヒューリスティックで分析します。", stateClass: "state-2" },
            { num: 3, btn: "3. 見逃し", desc: "<strong>3. 未感染と誤判断</strong><br>検知漏れ＝フォールスネガティブです。", stateClass: "state-3" },
            { num: 4, btn: "4. リスク", desc: "<strong>4. マルウェアが実行され得る</strong><br>FN は致命的リスクにつながります。", stateClass: "state-4" }
        ],
        packetLabels: { req: "感染", res: "見逃し" }
    },
    ipsinline: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問13",
        diagramTitle: "インライン・アノマリ型 IPS（シミュレーター）",
        text: "インラインモードで動作するアノマリ型 IPS はどれか。",
        options: [
            { key: "ア", text: "IPS が監視対象の通信経路を流れる全ての通信パケットを経路外からキャプチャできるように通信経路上のスイッチのミラーポートに接続される。異常な通信を定義し，それと合致する通信を不正と判断して遮断する。", correct: false },
            { key: "イ", text: "IPS が監視対象の通信経路を流れる全ての通信パケットを経路外からキャプチャできるように通信経路上のスイッチのミラーポートに接続される。通常時の通信を定義し，それから外れた通信を不正と判断して遮断する。", correct: false },
            { key: "ウ", text: "IPS が監視対象の通信を通過させるように通信経路上に設置される。異常な通信を定義し，それと合致する通信を不正と判断して遮断する。", correct: false },
            { key: "エ", text: "IPS が監視対象の通信を通過させるように通信経路上に設置される。通常時の通信を定義し，それから外れた通信を不正と判断して遮断する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>IPS／NIDS の検知手法は大きく<strong>シグネチャ型</strong>と<strong>アノマリ型</strong>の二つです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>シグネチャ型</strong>：異常・攻撃パターンを定義し，合致した通信を不正と判断</li>
                    <li><strong>アノマリ型</strong>：通常時（正常）の通信を定義し，それから外れたものを不正と判断</li>
                </ul>
            </div>
            <p style="margin-top:0.75rem;"><strong>インラインモード</strong>は，監視対象の通信を通過させるよう経路上に IPS を置く方式です。ミラーポート接続はプロミスキャスモードです。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア・イ</strong>：ミラーポート接続＝プロミスキャス ❌</li>
                <li><strong>ウ</strong>：インラインだがシグネチャ型 ❌</li>
                <li><strong>エ</strong>：インライン＋アノマリ型 ✅</li>
            </ul>
        `,
        nodes: {
            left: { name: "通信経路", ip: "通過させる", icon: "fa-route", color: "var(--secondary)" },
            center: { name: "IPS", ip: "インライン", icon: "fa-shield-halved", color: "var(--primary)" },
            right: { name: "アノマリ", ip: "正常から逸脱", icon: "fa-chart-line", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 配置", desc: "<strong>1. 経路上に設置</strong><br>通信を通過させるインライン配置です。", stateClass: "state-1" },
            { num: 2, btn: "2. 正常", desc: "<strong>2. 通常時通信を定義</strong><br>アノマリ型は正常パターンを基準にします。", stateClass: "state-2" },
            { num: 3, btn: "3. 逸脱", desc: "<strong>3. 逸脱を不正と判断</strong><br>仕様やベースラインから外れた通信を検知します。", stateClass: "state-3" },
            { num: 4, btn: "4. 遮断", desc: "<strong>4. 不正パケットを遮断</strong><br>インラインなので確実にドロップできます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "通信", res: "遮断" }
    },
    waffp: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問12",
        diagramTitle: "WAF のフォールスポジティブ（シミュレーター）",
        text: "WAF におけるフォールスポジティブに該当するものはどれか。",
        options: [
            { key: "ア", text: "HTML の特殊文字 \"<\" を検出したときに通信を遮断するように WAF を設定した場合，数式を入力する Web サイトに \"<\" を数式の一部として含んだ HTTP リクエストが送信されたとき，WAF が攻撃として検知し，遮断する。", correct: true },
            { key: "イ", text: "HTTP リクエストのうち，RFC などに定義されておらず，Web アプリケーションソフトウェアの開発者が独自に追加したフィールドについては WAF が検査しないという仕様を悪用して，攻撃の命令を埋め込んだ HTTP リクエストが送信されたとき，WAF が遮断しない。", correct: false },
            { key: "ウ", text: "HTTP リクエストのパラメータ中に許可しない文字列を検出したときに通信を遮断するように WAF を設定した場合，許可しない文字列をパラメータ中に含んだ不正な HTTP リクエストが送信されたとき，WAF が攻撃として検知し，遮断する。", correct: false },
            { key: "エ", text: "悪意のある通信を正常な通信と見せかけ，HTTP リクエストを分割して送信されたとき，WAF が遮断しない。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>WAF は XSS・SQL インジェクション・OS コマンドインジェクションなどの攻撃を検知・排除し，Web アプリケーションの安全な運用を実現する製品です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>フォールスポジティブ</strong>：本来検知不要な無害な事象を，誤って攻撃として検知すること（誤検知）</li>
                    <li><strong>フォールスネガティブ</strong>：攻撃や不正要求を見逃すこと（検知漏れ）</li>
                </ul>
            </div>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：正規の数式入力を攻撃と誤検知 → フォールスポジティブ ✅</li>
                <li><strong>イ・エ</strong>：攻撃を遮断できない → フォールスネガティブ ❌</li>
                <li><strong>ウ</strong>：正しい遮断（正常動作）❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "正規リクエスト", ip: "数式の <", icon: "fa-file-code", color: "var(--secondary)" },
            center: { name: "WAF", ip: "誤検知", icon: "fa-shield-halved", color: "var(--primary)" },
            right: { name: "遮断", ip: "FP", icon: "fa-ban", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 入力", desc: "<strong>1. 正規の数式に \"&lt;\" を含む</strong><br>攻撃ではなく業務上の正当な入力です。", stateClass: "state-1" },
            { num: 2, btn: "2. ルール", desc: "<strong>2. WAF が \"&lt;\" を攻撃パターンと判定</strong><br>XSS 対策などのシグネチャに合致します。", stateClass: "state-2" },
            { num: 3, btn: "3. 誤遮断", desc: "<strong>3. 無害な通信を遮断</strong><br>これがフォールスポジティブです。", stateClass: "state-3" },
            { num: 4, btn: "4. 影響", desc: "<strong>4. 業務が阻害される</strong><br>チューニングで FP／FN のバランスを取ります。", stateClass: "state-4" }
        ],
        packetLabels: { req: "正規", res: "誤遮断" }
    },
    sandbox: {
        source: "情報処理安全確保支援士試験・H29春・午前II問16",
        diagramTitle: "サンドボックスの仕組み（シミュレーター）",
        text: "サンドボックスの仕組みに関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "Web アプリケーションの脆弱性を悪用する攻撃に含まれる可能性が高い文字列を定義し，攻撃であると判定した場合には，その通信を遮断する。", correct: false },
            { key: "イ", text: "クラウド上で動作する複数の仮想マシン（ゲストOS）間で，お互いの操作ができるように制御する。", correct: false },
            { key: "ウ", text: "プログラムの影響がシステム全体に及ばないように，プログラムが実行できる機能やアクセスできるリソースを制限して動作させる。", correct: true },
            { key: "エ", text: "プログラムのソースコードで SQL 文の雛形の中に変数の場所を示す記号を置いた後，実際の値を割り当てる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>サンドボックスとは，システムの実環境に影響が及ばないように，機能やアクセスできるリソースを制限した<strong>プログラム実行環境</strong>です。仮想環境上で不審なプログラムを実行し，その振る舞いからマルウェアかどうかを判定する用途などに使われます。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：WAF の説明 ❌</li>
                <li><strong>イ</strong>：隔離とは逆の相互操作 ❌</li>
                <li><strong>ウ</strong>：リソース制限による隔離実行 ✅</li>
                <li><strong>エ</strong>：プリペアドステートメントの説明 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "不審プログラム", ip: "実行対象", icon: "fa-bug", color: "var(--secondary)" },
            center: { name: "サンドボックス", ip: "リソース制限", icon: "fa-box", color: "var(--primary)" },
            right: { name: "実環境", ip: "影響なし", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 隔離", desc: "<strong>1. 制限された実行環境を用意</strong><br>機能やリソースへのアクセスを制限します。", stateClass: "state-1" },
            { num: 2, btn: "2. 実行", desc: "<strong>2. 不審プログラムを実行</strong><br>実環境とは切り離して動かします。", stateClass: "state-2" },
            { num: 3, btn: "3. 観察", desc: "<strong>3. 振る舞いを解析</strong><br>ファイル書込み・通信などから判定します。", stateClass: "state-3" },
            { num: 4, btn: "4. 判定", desc: "<strong>4. マルウェアなら遮断・隔離</strong><br>実環境への影響を防ぎます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "実行", res: "隔離" }
    },
    fidopasskey: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問7",
        diagramTitle: "FIDO パスキーと生体情報（シミュレーター）",
        text: "IdP がパスキー認証に対応している。利用者 A がスマートフォンの生体認証機能を FIDO オーセンティケータとして登録した。利用者 A がブラウザ経由で IdP を用いて Web サーバ B にアクセスするとき，利用者 A の生体情報が送信されるものはどれか。",
        options: [
            { key: "ア", text: "利用者 A の Web ブラウザ，Web サーバ B，IdP のいずれにも送信されない。", correct: true },
            { key: "イ", text: "利用者 A の Web ブラウザだけに送信される。", correct: false },
            { key: "ウ", text: "IdP だけに送信される。", correct: false },
            { key: "エ", text: "Web サーバ B と IdP に送信される。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>FIDO</strong>はパスワードレス認証の標準です。利用者のデバイス（スマートフォン）がオーセンティケータとなり，<strong>端末内でローカルに本人確認</strong>します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>ネットワークに送られるのは検証結果（署名など）であり，生体情報そのものではない</li>
                    <li>生体情報は利用者端末内にのみ保持され，サーバには保存・送信されない</li>
                </ul>
            </div>
            <p style="margin-top:0.75rem;">したがってブラウザ・Web サーバ・IdP のいずれにも生体情報は送信されません。</p>
        `,
        nodes: {
            left: { name: "スマホ", ip: "生体は端末内", icon: "fa-mobile-screen", color: "var(--secondary)" },
            center: { name: "ブラウザ", ip: "署名のみ転送", icon: "fa-globe", color: "var(--primary)" },
            right: { name: "IdP", ip: "生体は受信しない", icon: "fa-id-card", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. ローカル", desc: "<strong>1. 端末内で生体認証</strong><br>指紋・顔などはスマホ内で検証します。", stateClass: "state-1" },
            { num: 2, btn: "2. 署名", desc: "<strong>2. 秘密鍵で署名を生成</strong><br>検証成功後にチャレンジへ署名します。", stateClass: "state-2" },
            { num: 3, btn: "3. 送信", desc: "<strong>3. 署名結果だけを送信</strong><br>生体データ自体はネットワークに出ません。", stateClass: "state-3" },
            { num: 4, btn: "4. 検証", desc: "<strong>4. IdP が署名を検証</strong><br>公開鍵で正当性を確認します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "署名", res: "OK" }
    },
    threedsecure: {
        source: "情報処理安全確保支援士試験・R2秋・午前II問9",
        diagramTitle: "3Dセキュア（シミュレーター）",
        text: "オンラインショッピングにおけるクレジットカードの不正使用対策である 3D セキュアの説明として，適切なものはどれか。",
        options: [
            { key: "ア", text: "クレジットカードの暗証番号（PIN）を入力させる。", correct: false },
            { key: "イ", text: "クレジットカードのセキュリティコード（カード記載の 3 桁又は 4 桁の番号）を入力させる。", correct: false },
            { key: "ウ", text: "クレジットカードの有効期限を入力させる。", correct: false },
            { key: "エ", text: "カード会社にあらかじめ登録しておいた，本人だけが知るパスワードを入力させる。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p><strong>3D セキュア</strong>は，オンライン決済時にカード会社へあらかじめ登録したパスワード等で<strong>本人確認</strong>を行う仕組みです。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：対面・ATM 等の PIN 入力に近い ❌</li>
                <li><strong>イ</strong>：セキュリティコード（CVV 等）の入力 ❌</li>
                <li><strong>ウ</strong>：有効期限の入力（カード情報の一部）❌</li>
                <li><strong>エ</strong>：カード会社登録の本人パスワード ✅</li>
            </ul>
        `,
        nodes: {
            left: { name: "利用者", ip: "本人パスワード", icon: "fa-user", color: "var(--secondary)" },
            center: { name: "加盟店", ip: "決済要求", icon: "fa-cart-shopping", color: "var(--primary)" },
            right: { name: "カード会社", ip: "3Dセキュア認証", icon: "fa-building-columns", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 購入", desc: "<strong>1. ネットでカード決済を開始</strong><br>加盟店サイトで購入手続きを行います。", stateClass: "state-1" },
            { num: 2, btn: "2. 認証画面", desc: "<strong>2. カード会社の認証へ誘導</strong><br>3D セキュアの本人確認画面が表示されます。", stateClass: "state-2" },
            { num: 3, btn: "3. パスワード", desc: "<strong>3. 登録済みパスワードを入力</strong><br>本人だけが知る情報で確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 完了", desc: "<strong>4. 認証成功で決済継続</strong><br>不正利用リスクを低減します。", stateClass: "state-4" }
        ],
        packetLabels: { req: "認証", res: "承認" }
    },
    fidouaf: {
        source: "情報処理安全確保支援士試験・R元秋・午前II問1",
        diagramTitle: "FIDO UAF 1.1（シミュレーター）",
        text: "FIDO UAF 1.1 に準拠した認証の処理はどれか。",
        options: [
            { key: "ア", text: "SaaS への接続時の認証において，PIN コードとトークンが表示するワンタイムパスワードを PC から認証サーバへ送信した。", correct: false },
            { key: "イ", text: "SaaS への接続時の認証において，スマートフォンで顔認証を行った後，スマートフォン内の秘密鍵を用いてデジタル署名を生成し，そのデジタル署名を認証サーバへ送信した。", correct: true },
            { key: "ウ", text: "インターネットバンキングへの接続時の認証において，PC に接続したカードリーダでキャッシュカード内のクライアント証明書を読み取り，そのクライアント証明書を認証サーバへ送信した。", correct: false },
            { key: "エ", text: "インターネットバンキングへの接続時の認証において，スマートフォンで指紋情報を読み取り，その指紋情報を認証サーバへ送信した。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>FIDO では，端末（Authenticator）がローカルで本人確認し，<strong>秘密鍵による署名結果</strong>をサーバへ送ります。生体情報などの認証情報自体はネットワークに送られません。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>UAF</strong>：パスワードレス認証</li>
                    <li><strong>U2F</strong>：第二要素としてのセキュリティキー等</li>
                </ul>
            </div>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：PIN＋OTP をサーバ送信（従来型）❌</li>
                <li><strong>イ</strong>：端末内で顔認証→秘密鍵署名を送信＝UAF ✅</li>
                <li><strong>ウ</strong>：クライアント証明書の送信 ❌</li>
                <li><strong>エ</strong>：指紋情報そのものを送信（FIDO に反する）❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "スマホ", ip: "顔認証＋署名", icon: "fa-mobile-screen-button", color: "var(--secondary)" },
            center: { name: "Authenticator", ip: "秘密鍵は端末内", icon: "fa-key", color: "var(--primary)" },
            right: { name: "認証サーバ", ip: "署名を検証", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 生体", desc: "<strong>1. 端末内で顔認証</strong><br>生体データは端末の外に出ません。", stateClass: "state-1" },
            { num: 2, btn: "2. 署名", desc: "<strong>2. 秘密鍵でデジタル署名</strong><br>認証成功後に署名を生成します。", stateClass: "state-2" },
            { num: 3, btn: "3. 送信", desc: "<strong>3. 署名だけをサーバへ</strong><br>指紋・顔データは送信しません。", stateClass: "state-3" },
            { num: 4, btn: "4. 検証", desc: "<strong>4. サーバが署名を検証</strong><br>これが FIDO UAF の流れです。", stateClass: "state-4" }
        ],
        packetLabels: { req: "署名", res: "検証OK" }
    },
    pwtotal: {
        source: "テクニカルエンジニア（情報セキュリティ）試験・H19春・午前問46",
        diagramTitle: "パスワード総数の求め方（シミュレーター）",
        text: "パスワードに使用できる文字の種類の数を M，パスワードの文字数を n とするとき，設定できるパスワードの総数を求める数式はどれか。",
        options: [
            { key: "ア", text: "Mⁿ", correct: true },
            { key: "イ", text: "M! / (M−n)!", correct: false },
            { key: "ウ", text: "M! / (n!(M−n)!)", correct: false },
            { key: "エ", text: "(M+n−1)! / (n!(M−1)!)", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>パスワードでは同一文字の繰り返しが許されるため，各桁で M 通り選べます。文字数が n なので総数は <strong>Mⁿ</strong> です。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：重複を許す順列（各桁独立）＝ Mⁿ ✅</li>
                <li><strong>イ</strong>：重複を許さない順列 ❌</li>
                <li><strong>ウ</strong>：組合せ（C(M,n)）❌</li>
                <li><strong>エ</strong>：重複組合せ ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "文字種 M", ip: "各桁の選択肢", icon: "fa-font", color: "var(--secondary)" },
            center: { name: "長さ n", ip: "桁を並べる", icon: "fa-ruler-horizontal", color: "var(--primary)" },
            right: { name: "総数", ip: "Mⁿ", icon: "fa-calculator", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 1桁目", desc: "<strong>1. 1桁目は M 通り</strong><br>使用可能な文字種から選びます。", stateClass: "state-1" },
            { num: 2, btn: "2. 各桁", desc: "<strong>2. 各桁も同じく M 通り</strong><br>同じ文字の再利用ができます。", stateClass: "state-2" },
            { num: 3, btn: "3. 乗算", desc: "<strong>3. n 桁ぶん掛ける</strong><br>M × M × … × M（n 回）です。", stateClass: "state-3" },
            { num: 4, btn: "4. 結果", desc: "<strong>4. 総数は Mⁿ</strong><br>文字種と長さが増えると急激に増えます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "M,n", res: "Mⁿ" }
    },
    skey: {
        source: "情報セキュリティスペシャリスト試験・H22春・午前II問4",
        diagramTitle: "S/Key ワンタイムパスワード（シミュレーター）",
        text: "S/KEY ワンタイムパスワードに関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "クライアントは認証要求のたびに，サーバへシーケンス番号と種（Seed）からなるチャレンジデータを送信する。", correct: false },
            { key: "イ", text: "サーバはクライアントから送られた使い捨てパスワードを演算し，サーバで記憶している前回の使い捨てパスワードと比較することによって，クライアントを認証する。", correct: true },
            { key: "ウ", text: "時刻認証を基にパスワードを生成し，クライアント，サーバ間でパスワードを時刻で同期させる。", correct: false },
            { key: "エ", text: "利用者が設定したパスフレーズは 1 回ごとに使い捨てる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>S/Key では，クライアントから送られた使い捨てパスワードをサーバがさらに演算（ハッシュ）し，記憶している<strong>前回の使い捨てパスワード</strong>と比較することで認証します。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：チャレンジを送るのは主にサーバ側の役割であり，記述が不適切 ❌</li>
                <li><strong>イ</strong>：前回 OTP との比較による認証 ✅</li>
                <li><strong>ウ</strong>：時間同期式トークンの説明 ❌</li>
                <li><strong>エ</strong>：パスフレーズ自体を毎回捨てるわけではない ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "クライアント", ip: "今回の OTP", icon: "fa-laptop", color: "var(--secondary)" },
            center: { name: "サーバ", ip: "ハッシュして比較", icon: "fa-server", color: "var(--primary)" },
            right: { name: "前回 OTP", ip: "記憶値", icon: "fa-database", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 送信", desc: "<strong>1. 使い捨てパスワードを送信</strong><br>クライアントが OTP を送ります。", stateClass: "state-1" },
            { num: 2, btn: "2. 演算", desc: "<strong>2. サーバがハッシュ演算</strong><br>受け取った OTP をさらに計算します。", stateClass: "state-2" },
            { num: 3, btn: "3. 比較", desc: "<strong>3. 前回 OTP と比較</strong><br>一致すれば正当なクライアントです。", stateClass: "state-3" },
            { num: 4, btn: "4. 更新", desc: "<strong>4. 記憶値を更新</strong><br>次回認証に備えて保持値を差し替えます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "OTP", res: "認証" }
    },
    challenge: {
        source: "情報処理技術者試験 高度共通・H28秋・午前I問13",
        diagramTitle: "チャレンジレスポンス認証（シミュレーター）",
        text: "チャレンジレスポンス認証方式の特徴はどれか。",
        options: [
            { key: "ア", text: "TLS によって，クライアント側で固定パスワードを暗号化して送信する。", correct: false },
            { key: "イ", text: "端末のシリアル番号を，クライアント側で秘密鍵を使って暗号化して送信する。", correct: false },
            { key: "ウ", text: "トークンという装置が表示する毎回異なったデータを，パスワードとして送信する。", correct: false },
            { key: "エ", text: "利用者が入力したパスワードと，サーバから送られてきたランダムなデータとをクライアント側で演算し，その結果を送信する。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>チャレンジレスポンス方式の流れは次のとおりです。</p>
            <ol style="margin-top:0.75rem;">
                <li>サーバが乱数（チャレンジ）をクライアントへ送る</li>
                <li>クライアントはチャレンジとパスワードを演算（例：ハッシュ）し，レスポンスを返す</li>
                <li>サーバも同様に計算し，レスポンスと比較して認証する</li>
            </ol>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：TLS で固定パスワードを送るだけ ❌</li>
                <li><strong>イ</strong>：端末シリアル番号の暗号化送信 ❌</li>
                <li><strong>ウ</strong>：時間／イベント同期型トークンに近い ❌</li>
                <li><strong>エ</strong>：チャレンジとパスワードを演算して送信 ✅</li>
            </ul>
        `,
        nodes: {
            left: { name: "サーバ", ip: "チャレンジ送信", icon: "fa-server", color: "var(--secondary)" },
            center: { name: "クライアント", ip: "演算して応答", icon: "fa-laptop-code", color: "var(--primary)" },
            right: { name: "レスポンス", ip: "比較・認証", icon: "fa-check-double", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. チャレンジ", desc: "<strong>1. サーバが乱数を送信</strong><br>チャレンジと呼ばれるランダムデータです。", stateClass: "state-1" },
            { num: 2, btn: "2. 演算", desc: "<strong>2. パスワードと組み合わせて演算</strong><br>クライアント側でレスポンスを作ります。", stateClass: "state-2" },
            { num: 3, btn: "3. 送信", desc: "<strong>3. レスポンスを返す</strong><br>固定パスワードそのものは送りません。", stateClass: "state-3" },
            { num: 4, btn: "4. 照合", desc: "<strong>4. サーバが同じ計算で照合</strong><br>一致すれば認証成功です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "Challenge", res: "Response" }
    },
    irisauth: {
        source: "情報処理安全確保支援士試験・H30春・午前II問9",
        diagramTitle: "認証デバイスと虹彩認証（シミュレーター）",
        text: "認証デバイスに関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "USB メモリにデジタル証明書を組み込み，認証デバイスとする場合は，その USB メモリを接続する PC の MAC アドレスを組み込む必要がある。", correct: false },
            { key: "イ", text: "成人の虹彩は，経年変化がなく，虹彩認証では，認証デバイスでのパターン更新がほとんど不要である。", correct: true },
            { key: "ウ", text: "静電容量方式の指紋認証デバイスは，LED 照明を設置した室内では正常に認証できなくなる可能性が高くなる。", correct: false },
            { key: "エ", text: "認証に利用する接触型 IC カードは，カード内のコイルの誘導起電力を利用している。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>バイオメトリクス認証には指紋・掌紋・顔・虹彩・声紋・筆跡などがあります。いずれも経年変化が少ないことが特徴ですが，特に<strong>成人の虹彩は経年変化がなく</strong>，認証デバイスでのパターン更新がほとんど不要です。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：証明書を USB に入れる場合に MAC アドレス組込みは必須ではない ❌</li>
                <li><strong>イ</strong>：成人虹彩は経年変化がなく更新がほぼ不要 ✅</li>
                <li><strong>ウ</strong>：静電容量方式は照明の影響を受けにくい（光学方式の話に近い）❌</li>
                <li><strong>エ</strong>：コイルの誘導起電力は主に非接触 IC カード ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "虹彩", ip: "経年変化なし", icon: "fa-eye", color: "var(--secondary)" },
            center: { name: "認証デバイス", ip: "パターン照合", icon: "fa-fingerprint", color: "var(--primary)" },
            right: { name: "更新", ip: "ほぼ不要", icon: "fa-rotate", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 特徴", desc: "<strong>1. 生体特徴を登録</strong><br>指紋・虹彩などをテンプレート化します。", stateClass: "state-1" },
            { num: 2, btn: "2. 虹彩", desc: "<strong>2. 成人の虹彩は安定</strong><br>経年変化がほとんどありません。", stateClass: "state-2" },
            { num: 3, btn: "3. 照合", desc: "<strong>3. デバイスでパターン照合</strong><br>登録テンプレートと比較します。", stateClass: "state-3" },
            { num: 4, btn: "4. 運用", desc: "<strong>4. パターン更新はほぼ不要</strong><br>これが虹彩認証の運用上の利点です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "虹彩", res: "認証OK" }
    },
    timingatk: {
        source: "情報処理安全確保支援士試験・R7春・午前II問14",
        diagramTitle: "タイミング攻撃への対策（シミュレーター）",
        text: "サイドチャネル攻撃の手法であるタイミング攻撃の対策として，最も適切なものはどれか。",
        options: [
            { key: "ア", text: "演算アルゴリズムに処理を追加して，秘密情報の違いによって演算の処理時間に差異が出ないようにする。", correct: true },
            { key: "イ", text: "コンデンサを挿入して，電力消費量が時間的に均一になるようにする。", correct: false },
            { key: "ウ", text: "ハードウェアを自ら診断することによって故障を検出する機構，及び故障を検出したら秘密情報を破壊する機構を設ける。", correct: false },
            { key: "エ", text: "保護層を備えて，内部のデータが不正に書き換えられないようにする。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>サイドチャネル攻撃</strong>は，IC カードや TPM など耐タンパ性を持つ装置から，破壊せずに外部から観測・制御できる情報を使って鍵などの秘密を盗む手法です。</p>
            <p style="margin-top:0.75rem;"><strong>タイミング攻撃</strong>は，暗号化／復号に要する時間差を精密に測って鍵を推定します。したがって，秘密情報の違いで処理時間に差が出ないようにすることが対策です。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：処理時間の差異をなくす＝タイミング攻撃対策 ✅</li>
                <li><strong>イ</strong>：電力解析（電力サイドチャネル）対策に近い ❌</li>
                <li><strong>ウ</strong>：故障検知・ゼロ化（耐タンパの一形態）❌</li>
                <li><strong>エ</strong>：改ざん防止の保護層 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "秘密鍵", ip: "演算入力", icon: "fa-key", color: "var(--secondary)" },
            center: { name: "演算処理", ip: "時間を均一化", icon: "fa-microchip", color: "var(--primary)" },
            right: { name: "攻撃者", ip: "時間差を観測不可", icon: "fa-user-secret", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 観測", desc: "<strong>1. 攻撃者は処理時間を測る</strong><br>秘密の違いが時間差に現れると推定されます。", stateClass: "state-1" },
            { num: 2, btn: "2. 原因", desc: "<strong>2. アルゴリズム依存の時間差</strong><br>鍵ビットなどで処理経路が変わると危険です。", stateClass: "state-2" },
            { num: 3, btn: "3. 対策", desc: "<strong>3. 処理を追加して時間を均一化</strong><br>秘密に依らず処理時間が揃うようにします。", stateClass: "state-3" },
            { num: 4, btn: "4. 効果", desc: "<strong>4. 時間差からの推測を困難に</strong><br>これがタイミング攻撃対策です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "演算", res: "均一時間" }
    },
    eaptls: {
        source: "情報処理安全確保支援士試験・R3秋・午前II問16",
        diagramTitle: "IEEE 802.1X の EAP-TLS（シミュレーター）",
        text: "IEEE 802.1X で用いられる EAP-TLS によって実施される認証はどれか。",
        options: [
            { key: "ア", text: "CHAP を用いたチャレンジレスポンスによる利用者認証", correct: false },
            { key: "イ", text: "事前に登録した共有鍵を用いたサーバ認証と，時刻同期のワンタイムパスワードを用いた利用者認証", correct: false },
            { key: "ウ", text: "デジタル証明書を用いた認証サーバとクライアントの相互認証", correct: true },
            { key: "エ", text: "利用者 ID とパスワードを用いた利用者認証", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p><strong>EAP-TLS</strong>は，サーバとクライアント（サプリカント）が<strong>デジタル証明書で相互認証</strong>する方式です。EAP は PPP の認証機能を拡張・強化した利用者認証プロトコルであり，無線 LAN や有線 LAN の IEEE 802.1X で広く使われます。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：CHAP によるチャレンジレスポンス ❌</li>
                <li><strong>イ</strong>：共有鍵＋時間同期 OTP ❌</li>
                <li><strong>ウ</strong>：証明書による相互認証 ✅</li>
                <li><strong>エ</strong>：ID／パスワード認証 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "クライアント", ip: "クライアント証明書", icon: "fa-laptop", color: "var(--secondary)" },
            center: { name: "EAP-TLS", ip: "相互認証", icon: "fa-certificate", color: "var(--primary)" },
            right: { name: "認証サーバ", ip: "サーバ証明書", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 接続", desc: "<strong>1. 802.1X で認証開始</strong><br>サプリカントがネットワーク接続を要求します。", stateClass: "state-1" },
            { num: 2, btn: "2. TLS", desc: "<strong>2. EAP-TLS を選択</strong><br>証明書ベースの認証方式です。", stateClass: "state-2" },
            { num: 3, btn: "3. 相互", desc: "<strong>3. 双方が証明書を提示</strong><br>サーバとクライアントを互いに確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 許可", desc: "<strong>4. 認証成功で通信許可</strong><br>ポートがオープンされます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "証明書", res: "相互OK" }
    },
    supplicant: {
        source: "情報処理安全確保支援士試験・R6春・午前II問14",
        diagramTitle: "IEEE 802.1X のサプリカント（シミュレーター）",
        text: "IEEE 802.1X におけるサプリカントはどれか。",
        options: [
            { key: "ア", text: "一度の認証で複数のサーバやアプリケーションを利用できる認証システム", correct: false },
            { key: "イ", text: "クライアント側から送信された認証情報を受け取り，認証を行うシステム", correct: false },
            { key: "ウ", text: "クライアント側と認証サーバの仲介役となり，クライアント側から送信された認証情報を受け取り，認証サーバに送信するネットワーク機器", correct: false },
            { key: "エ", text: "認証を要求するクライアント側の装置やソフトウェア", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>IEEE 802.1X はネットワーク環境でユーザ認証を行う規格です。構成要素は次の三つです。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>サプリカント</strong>：認証を要求するクライアント側の装置やソフトウェア ✅（エ）</li>
                <li><strong>オーセンティケータ</strong>：AP や LAN スイッチなど認証の窓口（ウ）</li>
                <li><strong>認証サーバ</strong>：RADIUS など実際に認証するシステム（イ）</li>
            </ul>
            <p style="margin-top:0.75rem;">RADIUS を用いる場合，オーセンティケータが RADIUS クライアントになります。アは SSO の説明です。</p>
        `,
        nodes: {
            left: { name: "サプリカント", ip: "クライアント", icon: "fa-laptop", color: "var(--secondary)" },
            center: { name: "オーセンティケータ", ip: "AP／SW", icon: "fa-network-wired", color: "var(--primary)" },
            right: { name: "認証サーバ", ip: "RADIUS", icon: "fa-server", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 要求", desc: "<strong>1. サプリカントが認証要求</strong><br>クライアント側の装置／ソフトウェアです。", stateClass: "state-1" },
            { num: 2, btn: "2. 仲介", desc: "<strong>2. オーセンティケータが転送</strong><br>AP やスイッチが窓口になります。", stateClass: "state-2" },
            { num: 3, btn: "3. 認証", desc: "<strong>3. RADIUS 等が判定</strong><br>認証サーバが可否を決めます。", stateClass: "state-3" },
            { num: 4, btn: "4. 接続", desc: "<strong>4. 成功ならポート開放</strong><br>ネットワーク利用が可能になります。", stateClass: "state-4" }
        ],
        packetLabels: { req: "認証要求", res: "許可" }
    },
    aaaacct: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問1",
        diagramTitle: "AAA フレームワーク（シミュレーター）",
        text: "RADIUS や Diameter が提供する AAA フレームワークの構成要素は，認証（Authentication），認可（Authorization）と，もう一つはどれか。",
        options: [
            { key: "ア", text: "Accounting", correct: true },
            { key: "イ", text: "Activation", correct: false },
            { key: "ウ", text: "Audit", correct: false },
            { key: "エ", text: "Augmented Reality", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>RADIUS やその後継の Diameter は，<strong>認証（Authentication）</strong>，<strong>認可（Authorization）</strong>，<strong>課金（Accounting）</strong>を行うプロトコルです。Diameter の名称は radius（半径）に対する diameter（直径）に由来します。</p>
        `,
        nodes: {
            left: { name: "Authentication", ip: "認証", icon: "fa-user-check", color: "var(--secondary)" },
            center: { name: "Authorization", ip: "認可", icon: "fa-user-lock", color: "var(--primary)" },
            right: { name: "Accounting", ip: "課金", icon: "fa-file-invoice-dollar", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 認証", desc: "<strong>1. Authentication</strong><br>利用者／端末が本人かを確認します。", stateClass: "state-1" },
            { num: 2, btn: "2. 認可", desc: "<strong>2. Authorization</strong><br>何を許可するかを決めます。", stateClass: "state-2" },
            { num: 3, btn: "3. 課金", desc: "<strong>3. Accounting</strong><br>利用時間や通信量を記録します。", stateClass: "state-3" },
            { num: 4, btn: "4. AAA", desc: "<strong>4. RADIUS／Diameter の枠組み</strong><br>3要素まとめて AAA と呼びます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "AAA", res: "Accounting" }
    },
    samlfeat: {
        source: "情報処理安全確保支援士試験・R7春・午前II問2",
        diagramTitle: "SAML 認証の特徴（シミュレーター）",
        text: "シングルサインオンの実装方式の一つである SAML 認証の特徴として，適切なものはどれか。",
        options: [
            { key: "ア", text: "IdP (Identity Provider) が利用者認証を行い，認証成功後に発行されるアサーションを SP (Service Provider) が検証し，問題がなければクライアントは SP にアクセスできるようになる。", correct: true },
            { key: "イ", text: "Web サーバに導入されたエージェントが認証サーバと連携して利用者認証を行い，クライアントは認証成功後に発行される cookie を使用して SP にアクセスできるようになる。", correct: false },
            { key: "ウ", text: "認証サーバは Kerberos プロトコルを使って利用者認証を行い，クライアントは認証成功後に発行されるチケットを使用して SP にアクセスできるようになる。", correct: false },
            { key: "エ", text: "リバースプロキシで利用者認証が行われ，クライアントは認証成功後にリバースプロキシ経由で SP にアクセスできるようになる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>SAML によるシングルサインオンは，アカウント管理と認証を行う <strong>IdP</strong> と，サービスを提供する <strong>SP</strong> で構成されます。IdP が認証してアサーションを発行し，SP がそれを検証してアクセスを許可します。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：IdP 認証 → アサーション → SP 検証 ✅</li>
                <li><strong>イ</strong>：エージェント型（Cookie） ❌</li>
                <li><strong>ウ</strong>：Kerberos チケット方式 ❌</li>
                <li><strong>エ</strong>：リバースプロキシ型 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "クライアント", ip: "利用者", icon: "fa-laptop", color: "var(--secondary)" },
            center: { name: "IdP", ip: "アサーション発行", icon: "fa-id-badge", color: "var(--primary)" },
            right: { name: "SP", ip: "アサーション検証", icon: "fa-globe", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 要求", desc: "<strong>1. SP へアクセス</strong><br>利用者がサービスを利用しようとします。", stateClass: "state-1" },
            { num: 2, btn: "2. IdP", desc: "<strong>2. IdP が利用者を認証</strong><br>認証成功後にアサーションを発行します。", stateClass: "state-2" },
            { num: 3, btn: "3. 検証", desc: "<strong>3. SP がアサーションを検証</strong><br>改ざんや有効期限などを確認します。", stateClass: "state-3" },
            { num: 4, btn: "4. 許可", desc: "<strong>4. 問題なければアクセス許可</strong><br>これが SAML 認証の流れです。", stateClass: "state-4" }
        ],
        packetLabels: { req: "認証要求", res: "アサーション" }
    },
    oasisaml: {
        source: "情報処理安全確保支援士試験・R6春・午前II問4",
        diagramTitle: "OASIS が策定した SAML（シミュレーター）",
        text: "標準化団体 OASIS が，Web サイトなどを運営するオンラインビジネスパートナー間で認証，属性及び認可の情報を安全に交換するために策定したものはどれか。",
        options: [
            { key: "ア", text: "SAML", correct: true },
            { key: "イ", text: "SOAP", correct: false },
            { key: "ウ", text: "XKMS", correct: false },
            { key: "エ", text: "XML Signature", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p><strong>SAML</strong>（Security Assertion Markup Language）は，異なる Web サーバ間でユーザ ID・パスワード・公開鍵などの認証情報や，アクセス制御情報・属性情報を安全に交換するためのプロトコルです。XML 関連の標準化団体 <strong>OASIS</strong> が策定しました。認証・認可情報を格納する XML ベースの証明書（Assertion）と，それを交換するプロトコルを標準化し，SSO の基盤を提供します。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>SOAP</strong>：XML ベースのメッセージ交換プロトコル ❌</li>
                <li><strong>XKMS</strong>：XML 鍵管理 ❌</li>
                <li><strong>XML Signature</strong>：XML 署名 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "OASIS", ip: "標準化団体", icon: "fa-building", color: "var(--secondary)" },
            center: { name: "SAML", ip: "認証・属性・認可", icon: "fa-file-code", color: "var(--primary)" },
            right: { name: "パートナー", ip: "安全に交換", icon: "fa-handshake", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. OASIS", desc: "<strong>1. OASIS が標準を策定</strong><br>オンラインパートナー間の情報交換が目的です。", stateClass: "state-1" },
            { num: 2, btn: "2. 対象", desc: "<strong>2. 認証・属性・認可</strong><br>これらを安全にやり取りします。", stateClass: "state-2" },
            { num: 3, btn: "3. Assertion", desc: "<strong>3. XML のアサーション</strong><br>認証結果などを格納します。", stateClass: "state-3" },
            { num: 4, btn: "4. SSO", desc: "<strong>4. シングルサインオンの基盤</strong><br>該当するのは SAML です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "交換", res: "SAML" }
    },
    oauthdef: {
        source: "情報処理安全確保支援士試験・R7春・午前II問16",
        diagramTitle: "OAuth 2.0 の目的（シミュレーター）",
        text: "OAuth 2.0 に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "認可を行うためのプロトコルであり，認可サーバが，アクセスしてきた者が利用者（リソースオーナー）本人であるかどうかを確認するためのものである。", correct: false },
            { key: "イ", text: "認可を行うためのプロトコルであり，認可サーバが，利用者（リソースオーナー）の許可を得て，サービス（クライアント）に対し，適切な権限を付与するためのものである。", correct: true },
            { key: "ウ", text: "認証を行うためのプロトコルであり，認証サーバが，アクセスしてきた者が利用者（リソースオーナー）本人であるかどうかを確認するためのものである。", correct: false },
            { key: "エ", text: "認証を行うためのプロトコルであり，認証サーバが，利用者（リソースオーナー）の許可を得て，サービス（クライアント）に対し，適切な権限を付与するためのものである。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「イ」です。</strong></p><br>
            <p>OAuth 2.0 は，信頼関係にある複数のサービス間で，セキュアに<strong>認可情報</strong>をやり取りする仕組み（API）を提供します。認可サーバがリソースオーナーの許可を得て，クライアントにアクセストークンを発行し権限を付与します。本人確認（認証）が主目的ではありません。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：認可プロトコルだが，本人確認が目的ではない ❌</li>
                <li><strong>イ</strong>：認可＋リソースオーナーの許可でクライアントへ権限付与 ✅</li>
                <li><strong>ウ</strong>：認証プロトコルではない ❌</li>
                <li><strong>エ</strong>：認証プロトコルではない ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "リソースオーナー", ip: "許可する", icon: "fa-user", color: "var(--secondary)" },
            center: { name: "認可サーバ", ip: "トークン発行", icon: "fa-key", color: "var(--primary)" },
            right: { name: "クライアント", ip: "権限を付与", icon: "fa-mobile-screen", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 認可", desc: "<strong>1. OAuth 2.0 は認可プロトコル</strong><br>認証（本人確認）が主目的ではありません。", stateClass: "state-1" },
            { num: 2, btn: "2. 許可", desc: "<strong>2. リソースオーナーが許可</strong><br>どの範囲のアクセスを認めるかを決めます。", stateClass: "state-2" },
            { num: 3, btn: "3. 発行", desc: "<strong>3. 認可サーバがトークン発行</strong><br>クライアントへ権限を付与します。", stateClass: "state-3" },
            { num: 4, btn: "4. 利用", desc: "<strong>4. リソースサーバの API を利用</strong><br>限定されたアクセスが可能になります。", stateClass: "state-4" }
        ],
        packetLabels: { req: "許可", res: "トークン" }
    },
    oauthtoken: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問16",
        diagramTitle: "OAuth 2.0 のアクセストークン発行（シミュレーター）",
        text: "利用者Aが所有するリソースBが，WebサービスC上にある。OAuth 2.0において，利用者Aの認可の下，WebサービスDからリソースBへの限定されたアクセスを可能にするときのプロトコルの動作はどれか。ここでWebサービスCは，認可サーバを兼ねているものとする。",
        options: [
            { key: "ア", text: "Web サービス C が，アクセストークンを発行する。", correct: true },
            { key: "イ", text: "Web サービス C が，利用者 A のデジタル証明書を Web サービス D に送信する。", correct: false },
            { key: "ウ", text: "Web サービス D が，アクセストークンを発行する。", correct: false },
            { key: "エ", text: "Web サービス D が，利用者 A のデジタル証明書を Web サービス C に送信する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>本問では Web サービス C がリソースサーバかつ認可サーバ，Web サービス D がクライアント，利用者 A がリソースオーナーです。利用者 A の認可の下で D が C 上のリソース B へ限定アクセスするとき，<strong>C が D にアクセストークンを発行</strong>します。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：認可サーバ兼リソースサーバ C がトークン発行 ✅</li>
                <li><strong>イ</strong>：デジタル証明書の送信ではない ❌</li>
                <li><strong>ウ</strong>：クライアント D はトークンを発行しない ❌</li>
                <li><strong>エ</strong>：証明書の送信ではない ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "利用者A", ip: "リソースオーナー", icon: "fa-user", color: "var(--secondary)" },
            center: { name: "WebサービスC", ip: "RS＋認可サーバ", icon: "fa-server", color: "var(--primary)" },
            right: { name: "WebサービスD", ip: "クライアント", icon: "fa-globe", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 役割", desc: "<strong>1. C＝リソースサーバ兼認可サーバ</strong><br>D はクライアント，A はリソースオーナーです。", stateClass: "state-1" },
            { num: 2, btn: "2. 許可", desc: "<strong>2. 利用者 A が認可</strong><br>D による限定アクセスを認めます。", stateClass: "state-2" },
            { num: 3, btn: "3. 発行", desc: "<strong>3. C がアクセストークンを発行</strong><br>D に権限が付与されます。", stateClass: "state-3" },
            { num: 4, btn: "4. アクセス", desc: "<strong>4. D がリソース B へ限定アクセス</strong><br>デジタル証明書の受け渡しではありません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "認可", res: "トークン" }
    },
    ctrmode: {
        source: "情報処理安全確保支援士試験・R5春・午前II問7",
        diagramTitle: "CTR モード（シミュレーター）",
        text: "ブロック暗号の暗号利用モードの一つである CTR (Counter) モードに関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "暗号化と復号の処理において，出力は，入力されたブロックと鍵ストリームとの排他的論理和である。", correct: true },
            { key: "イ", text: "暗号化の処理において，平文のデータ長がブロック長の倍数でないときにパディングが必要である。", correct: false },
            { key: "ウ", text: "ビット誤りがある暗号文を復号すると，ビット誤りのあるブロック全体と次のブロックの対応するビットが平文ではビット誤りになる。", correct: false },
            { key: "エ", text: "複数ブロックの暗号化の処理は並列に実行できないが，複数ブロックの復号の処理は並列に実行できる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>CTR モードは，nonce と 1 ずつ増加するカウンタから成る鍵ストリームを暗号化し，それと入力された平文ブロックとの<strong>排他的論理和（XOR）</strong>で暗号ブロックを生成します。各ブロックが独立なため，暗号化・復号ともに並列処理できます。パディングは必須ではありません。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：入力ブロックと鍵ストリームの XOR ✅</li>
                <li><strong>イ</strong>：パディング必須ではない ❌</li>
                <li><strong>ウ</strong>：CBC 等の誤り伝搬の説明に近い ❌</li>
                <li><strong>エ</strong>：暗号化も復号も並列可能 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "カウンタ", ip: "nonce＋連番", icon: "fa-hashtag", color: "var(--secondary)" },
            center: { name: "鍵ストリーム", ip: "ブロック暗号", icon: "fa-lock", color: "var(--primary)" },
            right: { name: "XOR", ip: "平文／暗号文", icon: "fa-code-compare", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. カウンタ", desc: "<strong>1. nonce とカウンタを用意</strong><br>ブロックごとに 1 ずつ増やします。", stateClass: "state-1" },
            { num: 2, btn: "2. 暗号化", desc: "<strong>2. カウンタをブロック暗号で暗号化</strong><br>鍵ストリームを生成します。", stateClass: "state-2" },
            { num: 3, btn: "3. XOR", desc: "<strong>3. 平文と XOR</strong><br>暗号化も復号も同じ演算です。", stateClass: "state-3" },
            { num: 4, btn: "4. 並列", desc: "<strong>4. 各ブロックは独立</strong><br>暗号化・復号とも並列にできます。", stateClass: "state-4" }
        ],
        packetLabels: { req: "カウンタ", res: "XOR" }
    },
    hashcol: {
        source: "情報処理安全確保支援士試験・R5春・午前II問4",
        diagramTitle: "衝突発見困難性（シミュレーター）",
        text: "ハッシュ関数の性質の一つである衝突発見困難性に関する記述のうち，適切なものはどれか。",
        options: [
            { key: "ア", text: "SHA-256 の衝突発見困難性を示す，ハッシュ値が一致する二つの元のメッセージの発見に要する最大の計算量は，256 の 2 乗である。", correct: false },
            { key: "イ", text: "SHA-256 の衝突発見困難性を示す，ハッシュ値の元のメッセージの発見に要する最大の計算量は，2 の 256 乗である。", correct: false },
            { key: "ウ", text: "衝突発見困難性とは，ハッシュ値が与えられたときに，元のメッセージの発見に要する計算量が大きいことによる，発見の困難性のことである。", correct: false },
            { key: "エ", text: "衝突発見困難性とは，ハッシュ値が一致する二つの元のメッセージの発見に要する計算量が大きいことによる，発見の困難性のことである。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>衝突発見困難性は，同一ハッシュ値を生成する異なる 2 つのデータ (x, x') を求めることが計算量的に困難であることです。SHA-256 では誕生日のパラドックスにより，平均して 2<sup>128</sup> 程度です。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>ア</strong>：256<sup>2</sup> ではない。2<sup>128</sup> 程度 ❌</li>
                <li><strong>イ</strong>：原像計算（一方向性）の計算量の話に近い ❌</li>
                <li><strong>ウ</strong>：原像計算困難性（一方向性） ❌</li>
                <li><strong>エ</strong>：衝突＝同じハッシュの異なる 2 メッセージ ✅</li>
            </ul>
        `,
        nodes: {
            left: { name: "メッセージ x", ip: "入力1", icon: "fa-file-lines", color: "var(--secondary)" },
            center: { name: "H(x)=H(x')", ip: "衝突", icon: "fa-hashtag", color: "var(--primary)" },
            right: { name: "メッセージ x'", ip: "入力2", icon: "fa-file-lines", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 定義", desc: "<strong>1. 衝突＝同じハッシュの異なる入力</strong><br>H(x) = H(x') かつ x ≠ x' です。", stateClass: "state-1" },
            { num: 2, btn: "2. 困難性", desc: "<strong>2. そのような組を見つけるのが困難</strong><br>これが衝突発見困難性です。", stateClass: "state-2" },
            { num: 3, btn: "3. 誕生日", desc: "<strong>3. n ビットなら約 2<sup>n/2</sup></strong><br>SHA-256 では約 2<sup>128</sup> です。", stateClass: "state-3" },
            { num: 4, btn: "4. 区別", desc: "<strong>4. 原像計算困難性とは別</strong><br>ハッシュから元データを求める話ではありません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "x, x'", res: "同じハッシュ" }
    },
    cryptrec: {
        source: "情報処理安全確保支援士試験・R4春・午前II問10",
        diagramTitle: "CRYPTREC の活動（シミュレーター）",
        text: "CRYPTREC の主な活動内容はどれか。",
        options: [
            { key: "ア", text: "暗号技術の技術的検討並びに国際競争力の向上及び運用面での安全性向上に関する検討を行う。", correct: true },
            { key: "イ", text: "情報セキュリティ政策に係る基本戦略の立案，官民における統一的，横断的な情報セキュリティ政策の推進に係る企画などを行う。", correct: false },
            { key: "ウ", text: "組織の情報セキュリティマネジメントシステムについて評価し認証する制度を運用する。", correct: false },
            { key: "エ", text: "認証機関から貸与された暗号モジュール試験報告書作成支援ツールを用いて暗号モジュールの安全性についての評価試験を行う。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>CRYPTREC は電子政府推奨暗号の安全性を評価・監視し，適切な実装法・運用法を調査・検討するプロジェクトです。暗号技術評価委員会（技術的検討）と暗号技術活用委員会（国際競争力・運用面の安全性）の 2 委員会体制です。</p>
            <ul style="margin-top:0.75rem;">
                <li><strong>イ</strong>：NISC 等の政策立案 ❌</li>
                <li><strong>ウ</strong>：ISMS 認証 ❌</li>
                <li><strong>エ</strong>：JCMVP 等のモジュール試験 ❌</li>
            </ul>
        `,
        nodes: {
            left: { name: "評価委員会", ip: "技術的検討", icon: "fa-microscope", color: "var(--secondary)" },
            center: { name: "CRYPTREC", ip: "推奨暗号", icon: "fa-landmark", color: "var(--primary)" },
            right: { name: "活用委員会", ip: "運用・競争力", icon: "fa-gears", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 目的", desc: "<strong>1. 電子政府推奨暗号の評価・監視</strong><br>実装法・運用法も調査します。", stateClass: "state-1" },
            { num: 2, btn: "2. 評価", desc: "<strong>2. 暗号技術評価委員会</strong><br>安全性の技術的検討です。", stateClass: "state-2" },
            { num: 3, btn: "3. 活用", desc: "<strong>3. 暗号技術活用委員会</strong><br>国際競争力と運用面の安全性です。", stateClass: "state-3" },
            { num: 4, btn: "4. 該当", desc: "<strong>4. アの記述が活動内容</strong><br>政策立案や ISMS 認証ではありません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "評価", res: "推奨暗号" }
    },
    qcrypto: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問9",
        diagramTitle: "量子暗号の特徴（シミュレーター）",
        text: "量子暗号の特徴として，適切なものはどれか。",
        options: [
            { key: "ア", text: "暗号化と復号の処理を，量子コンピュータを用いて行うことができるので，従来のコンピュータでの処理に比べて大量のデータの秘匿を短時間で実現できる。", correct: false },
            { key: "イ", text: "共通鍵暗号方式であり，従来の情報の取扱量の最小単位であるビットの代わりに量子ビットを用いることによって，高速なデータ送受信が実現できる。", correct: false },
            { key: "ウ", text: "量子雑音を用いて共通鍵を生成し，公開鍵暗号方式で共有することによって，解読が困難な秘匿通信が実現できる。", correct: false },
            { key: "エ", text: "量子通信路を用いて安全に共有した乱数列を使い捨ての暗号鍵として用いることによって，原理的に第三者に解読されない秘匿通信が実現できる。", correct: true }
        ],
        explanation: `
            <p><strong>正解は「エ」です。</strong></p><br>
            <p>量子暗号は量子力学に基づく共通鍵暗号の一種で，光ファイバーなどの量子通信路を通じて光子で鍵を配送します。盗聴すると光子が正常に届かなくなり検知できます。共有した乱数列を使い捨ての鍵として用います。</p>
        `,
        nodes: {
            left: { name: "送信者", ip: "光子で鍵配送", icon: "fa-paper-plane", color: "var(--secondary)" },
            center: { name: "量子通信路", ip: "盗聴を検知", icon: "fa-wave-square", color: "var(--primary)" },
            right: { name: "受信者", ip: "使い捨て鍵", icon: "fa-inbox", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. QKD", desc: "<strong>1. 量子通信路で鍵を共有</strong><br>光子で乱数列を配送します。", stateClass: "state-1" },
            { num: 2, btn: "2. 検知", desc: "<strong>2. 盗聴は状態を乱す</strong><br>受信側で異常を検知できます。", stateClass: "state-2" },
            { num: 3, btn: "3. 鍵", desc: "<strong>3. 乱数列を使い捨て鍵に</strong><br>ワンタイムパッド的に使います。", stateClass: "state-3" },
            { num: 4, btn: "4. 秘匿", desc: "<strong>4. 原理的に解読されない通信</strong><br>量子コンピュータで高速暗号化する話ではありません。", stateClass: "state-4" }
        ],
        packetLabels: { req: "光子", res: "鍵共有" }
    },
    pqc: {
        source: "情報処理安全確保支援士試験・R6秋・午前II問5",
        diagramTitle: "PQC（シミュレーター）",
        text: "PQC (Post-Quantum Cryptography) はどれか。",
        options: [
            { key: "ア", text: "量子アニーリングマシンを用いて，回路サイズ，消費電力，処理速度を飛躍的に向上させた実装性能をもつ暗号方式", correct: false },
            { key: "イ", text: "量子コンピュータを用いて効率的に素因数分解を行うアルゴリズムによって，暗号を解読する技術", correct: false },
            { key: "ウ", text: "量子コンピュータを用いても解読が困難であり，安全性を保つことができる暗号方式", correct: true },
            { key: "エ", text: "量子通信路を用いた鍵配送システムを利用し，大容量のデータを高速に送受信する技術", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>PQC は耐量子計算機暗号で，量子コンピュータによる攻撃にも安全性を保つ暗号方式です。Shor のアルゴリズム等で既存の公開鍵暗号が危殆化し得るため，CRYPTREC でも動向が調査されています。イは解読技術，エは量子鍵配送（量子暗号）の説明に近いです。</p>
        `,
        nodes: {
            left: { name: "量子コンピュータ", ip: "Shor 等", icon: "fa-microchip", color: "var(--secondary)" },
            center: { name: "PQC", ip: "耐量子", icon: "fa-shield-halved", color: "var(--primary)" },
            right: { name: "RSA 等", ip: "危殆化の恐れ", icon: "fa-unlock", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 脅威", desc: "<strong>1. 量子コンピュータで既存公開鍵が危ない</strong><br>素因数分解などが効率的になります。", stateClass: "state-1" },
            { num: 2, btn: "2. PQC", desc: "<strong>2. それでも安全な方式を使う</strong><br>従来型コンピュータ上で実装します。", stateClass: "state-2" },
            { num: 3, btn: "3. 調査", desc: "<strong>3. CRYPTREC 等で動向調査</strong><br>標準化・移行が進められています。", stateClass: "state-3" },
            { num: 4, btn: "4. 区別", desc: "<strong>4. QKD や解読アルゴリズムではない</strong><br>ウが定義です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "量子攻撃", res: "耐える" }
    },
    fwdsec: {
        source: "情報処理安全確保支援士試験・R4秋・午前II問8",
        diagramTitle: "前方秘匿性（シミュレーター）",
        text: "前方秘匿性 (Forward Secrecy) の説明として，適切なものはどれか。",
        options: [
            { key: "ア", text: "鍵交換に使った秘密鍵が漏えいしたとしても，それより前の暗号文は解読されない。", correct: true },
            { key: "イ", text: "時系列データをチェーンの形で結び，かつ，ネットワーク上の複数のノードで共有するので，データを改ざんできない。", correct: false },
            { key: "ウ", text: "対となる二つの鍵の片方の鍵で暗号化したデータは，もう片方の鍵でだけ復号できる。", correct: false },
            { key: "エ", text: "データに非可逆処理をして生成される固定長のハッシュ値からは，元のデータを推測できない。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>前方秘匿性は，鍵交換に使った秘密鍵が漏れても，それより前の暗号文は解読されない性質です。セッション鍵を使い捨てにし，長期鍵から過去の鍵を導けないようにします。イはブロックチェーン，ウは公開鍵暗号，エはハッシュの一方向性です。</p>
        `,
        nodes: {
            left: { name: "過去の暗号文", ip: "解読されない", icon: "fa-file-shield", color: "var(--secondary)" },
            center: { name: "使い捨て鍵", ip: "ECDHE 等", icon: "fa-key", color: "var(--primary)" },
            right: { name: "長期秘密鍵", ip: "後から漏洩", icon: "fa-unlock-keyhole", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 性質", desc: "<strong>1. 長期鍵が漏れても過去は守れ</strong><br>これが前方秘匿性です。", stateClass: "state-1" },
            { num: 2, btn: "2. 手段", desc: "<strong>2. セッション鍵は使い捨て</strong><br>長期鍵から過去鍵を導かない。", stateClass: "state-2" },
            { num: 3, btn: "3. 例", desc: "<strong>3. TLS の ECDHE など</strong><br>毎回エフェメラルな DH を使います。", stateClass: "state-3" },
            { num: 4, btn: "4. 非該当", desc: "<strong>4. ブロックチェーンやハッシュではない</strong><br>アが正解です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "鍵漏洩", res: "過去は安全" }
    },
    macmsg: {
        source: "情報処理安全確保支援士試験・R6春・午前II問2",
        diagramTitle: "MAC の性質（シミュレーター）",
        text: "送信者から受信者にメッセージ認証符号（MAC：Message Authentication Code）を付与したメッセージを送り，次に受信者が第三者に転送した。そのときのMACに関する記述のうち，適切なものはどれか。ここで，共通鍵は送信者と受信者だけが知っており，送信者と受信者のそれぞれの公開鍵は第三者を含めた 3 名が知っているものとする。",
        options: [
            { key: "ア", text: "MAC は，送信者がメッセージと共通鍵を用いて生成する。MAC を用いると，受信者がメッセージの完全性を確認できる。", correct: true },
            { key: "イ", text: "MAC は，送信者がメッセージと共通鍵を用いて生成する。MAC を用いると，第三者が送信者の真正性を確認できる。", correct: false },
            { key: "ウ", text: "MAC は，送信者がメッセージと受信者の公開鍵を用いて生成する。MAC を用いると，第三者がメッセージの完全性を確認できる。", correct: false },
            { key: "エ", text: "MAC は，送信者がメッセージと送信者の公開鍵を用いて生成する。MAC を用いると，受信者が送信者の真正性を確認できる。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ア」です。</strong></p><br>
            <p>MAC は共通鍵を用いて生成する固定長のコードで，改ざん検知（完全性）に使います。CMAC や HMAC などがあります。共通鍵は送信者と受信者だけが知るため，第三者は検証できません。公開鍵で生成するものでもありません。</p>
        `,
        nodes: {
            left: { name: "送信者", ip: "メッセージ＋共通鍵", icon: "fa-user", color: "var(--secondary)" },
            center: { name: "MAC", ip: "HMAC／CMAC", icon: "fa-fingerprint", color: "var(--primary)" },
            right: { name: "受信者", ip: "完全性を確認", icon: "fa-user-check", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. 生成", desc: "<strong>1. 送信者が共通鍵で MAC を生成</strong><br>公開鍵は使いません。", stateClass: "state-1" },
            { num: 2, btn: "2. 検証", desc: "<strong>2. 受信者が同じ共通鍵で検証</strong><br>改ざんの有無が分かります。", stateClass: "state-2" },
            { num: 3, btn: "3. 第三者", desc: "<strong>3. 第三者は共通鍵を知らない</strong><br>真正性の第三者検証はできません。", stateClass: "state-3" },
            { num: 4, btn: "4. 完全性", desc: "<strong>4. 受信者による完全性確認</strong><br>アが適切です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "MAC付与", res: "完全性OK" }
    },
    sha512256: {
        source: "情報処理安全確保支援士試験・R7春・午前II問3",
        diagramTitle: "SHA-512/256（シミュレーター）",
        text: "SHA-512/256 の説明はどれか。",
        options: [
            { key: "ア", text: "入力データに SHA-256 に基づいたハッシュ関数を 1 回適用し，256 ビットの値を出力した後，512 ビットに拡張して出力する。", correct: false },
            { key: "イ", text: "入力データに SHA-256 に基づいたハッシュ関数を 512 回繰り返し適用し，256 ビットの値を出力する。", correct: false },
            { key: "ウ", text: "入力データに SHA-512 に基づいたハッシュ関数を 1 回適用し，512 ビットの値を出力した後，256 ビットに切り詰めて出力する。", correct: true },
            { key: "エ", text: "入力データに SHA-512 に基づいたハッシュ関数を 256 回繰り返し適用し，512 ビットの値を出力する。", correct: false }
        ],
        explanation: `
            <p><strong>正解は「ウ」です。</strong></p><br>
            <p>SHA-512/256 は，入力に SHA-512 を 1 回適用して 512 ビットを得たあと，<strong>256 ビットに切り詰めて</strong>出力する方式です。CRYPTREC 暗号リストの推奨ハッシュ関数です。繰り返し適用や 256→512 への拡張ではありません。</p>
        `,
        nodes: {
            left: { name: "入力データ", ip: "任意長", icon: "fa-file", color: "var(--secondary)" },
            center: { name: "SHA-512", ip: "512 ビット", icon: "fa-hashtag", color: "var(--primary)" },
            right: { name: "切り詰め", ip: "256 ビット", icon: "fa-scissors", color: "var(--accent)" }
        },
        steps: [
            { num: 1, btn: "1. SHA-512", desc: "<strong>1. SHA-512 を 1 回適用</strong><br>512 ビットのハッシュを得ます。", stateClass: "state-1" },
            { num: 2, btn: "2. 切詰", desc: "<strong>2. 256 ビットに切り詰める</strong><br>これが SHA-512/256 です。", stateClass: "state-2" },
            { num: 3, btn: "3. 非該当", desc: "<strong>3. 512 回の繰り返しではない</strong><br>SHA-256 からの拡張でもありません。", stateClass: "state-3" },
            { num: 4, btn: "4. 推奨", desc: "<strong>4. CRYPTREC 推奨のハッシュ</strong><br>ウが正解です。", stateClass: "state-4" }
        ],
        packetLabels: { req: "SHA-512", res: "256bit" }
    }
};
