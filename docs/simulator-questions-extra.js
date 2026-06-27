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
    }
};
