// Check! メールセキュリティ 10問
const checkMailSecData = [
    {
        q: "【Q1】 スパムメールが可能となる主な原因は何か。",
        ans: `
            <span class="check-category-badge badge-mail">スパムの原因</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>メールサーバ・中継の設定不備</h4>
                    <ul>
                        <li><strong>オープンリレー</strong>（第三者中継）の許可</li>
                        <li>認証なしで誰でもメール送信可能な設定</li>
                        <li>リレー先ドメインの制限不足</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>送信元の偽装・悪用</h4>
                    <ul>
                        <li>SMTP では送信者アドレスの<strong>なりすましが容易</strong></li>
                        <li>ボットネット感染端末からの<strong>大量送信</strong></li>
                        <li>動的 IP からポート 25 への直接送信（OP25B 未導入環境）</li>
                    </ul>
                </div>
                <div class="check-measure-box" style="grid-column:1/-1;">
                    <h4>その他</h4>
                    <ul>
                        <li>メールアドレスの<strong>リスト収集</strong>（Web 掲載、漏洩リスト等）</li>
                        <li>送信コストが極めて低い（大量配信が容易）</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q2】 第三者中継を防ぐ有効な方法は何か。",
        ans: `
            <span class="check-category-badge badge-mail">第三者中継対策</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>リレー制限</strong>：自ドメイン・認証済みユーザーのみ中継許可</li>
                    <li><strong>SMTP-AUTH</strong>：送信前に利用者 ID・パスワードで認証</li>
                    <li><strong>OP25B</strong>：動的 IP から外部ポート 25 への直接送信を遮断</li>
                    <li><strong>Submission ポート（587）</strong>＋認証による正規経路の提供</li>
                    <li>アクセス制御リスト（ACL）で許可 IP・ネットワークを限定</li>
                    <li>オープンリレーの定期的な<strong>設定監査</strong></li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 OP25B の必要性と仕組みを挙げよ。",
        ans: `
            <span class="check-category-badge badge-mail">OP25B</span>
            <p><strong>OP25B（Outbound Port 25 Blocking）</strong>は、ISP が自社管理下の<strong>動的 IP アドレス</strong>から、自社メールサーバを経由せず<strong>外部ネットワークの TCP ポート 25</strong>へ直接 SMTP 通信するパケットを遮断する対策です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>必要性</h4>
                <ul>
                    <li>ボットネット感染 PC からの<strong>スパム大量送信</strong>を防止</li>
                    <li>ISP ネットワークの<strong>評判（レピュテーション）保護</strong></li>
                    <li>正規ユーザーは ISP のメールサーバまたは Submission ポート（587）を利用させる</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;"><strong>IP25B</strong>（Inbound Port 25 Blocking）は逆方向で、他 ISP の動的 IP から自社メールサーバへのポート 25 通信を遮断します。</p>
        `
    },
    {
        q: "【Q4】 Submission ポート経由のメール送信の必要性と仕組みを挙げよ。",
        ans: `
            <span class="check-category-badge badge-mail">Submission ポート（587）</span>
            <p><strong>TCP ポート 587</strong>は、メールクライアントがメールサーバへメールを<strong>投稿（Submission）</strong>するための専用ポートです。OP25B によりポート 25 が遮断された環境でも、正規ユーザーがメールを送信できる経路を提供します。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>SMTP-AUTH</strong>による利用者認証を必須化</li>
                    <li><strong>TLS（Submission over TLS）</strong>による通信暗号化</li>
                    <li>ポート 25 とは役割分離（25＝サーバ間中継、587＝クライアント投稿）</li>
                    <li>スパムボットの無認証送信を困難にする</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 送信元ドメイン認証によって何が可能となるか。",
        ans: `
            <span class="check-category-badge badge-mail">送信元ドメイン認証</span>
            <div class="check-measure-box">
                <ul>
                    <li>送信者アドレス（From ドメイン）の<strong>なりすまし検出</strong></li>
                    <li>フィッシング・スパムメールの<strong>受信拒否・隔離</strong></li>
                    <li>正規の送信サーバ・メッセージの<strong>正当性確認</strong></li>
                    <li>ドメインの<strong>レピュテーション保護</strong>（悪用防止）</li>
                    <li>DMARC レポートによる<strong>なりすまし試行の可視化</strong></li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">主な仕組み：<strong>SPF</strong>（IP ベース）、<strong>DKIM</strong>（電子署名）、<strong>DMARC</strong>（失敗時の処理方針）の組み合わせ。</p>
        `
    },
    {
        q: "【Q6】 IP アドレスによる送信元ドメイン認証と，電子署名による送信元ドメイン認証の特徴を挙げよ。",
        ans: `
            <span class="check-category-badge badge-mail">SPF vs DKIM</span>
            <div class="check-compare">
                <div class="check-compare-item good">
                    <strong><i class="fa-solid fa-network-wired"></i> SPF（IP アドレスベース）</strong>
                    <ul style="margin-left:1rem;margin-top:0.4rem;">
                        <li>送信元ドメインの DNS に<strong>SPF レコード</strong>（許可 SMTP サーバ IP）を登録</li>
                        <li>受信側が MAIL FROM のドメインと<strong>送信サーバ IP</strong>の整合性を確認</li>
                        <li>メール本文は検証対象外</li>
                        <li>転送メールで SPF が失敗しやすい弱点</li>
                    </ul>
                </div>
                <div class="check-compare-item good">
                    <strong><i class="fa-solid fa-signature"></i> DKIM（電子署名ベース）</strong>
                    <ul style="margin-left:1rem;margin-top:0.4rem;">
                        <li>送信サーバがメールヘッダに<strong>デジタル署名</strong>を付与</li>
                        <li>受信側が DNS の<strong>公開鍵</strong>で署名を検証</li>
                        <li>メール内容の<strong>改ざん検知</strong>も可能</li>
                        <li>From ヘッダと署名ドメインが異なる場合の扱いに注意（ADSP/DMARC）</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q7】 DMARC について説明せよ。",
        ans: `
            <span class="check-category-badge badge-mail">DMARC</span>
            <p><strong>DMARC（Domain-based Message Authentication, Reporting and Conformance）</strong>は、SPF・DKIM による送信元ドメイン認証の<strong>結果に基づく処理方針</strong>を、送信側ドメイン管理者が DNS に指定する仕組みです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li><strong>ポリシー指定</strong>：認証失敗時の処理（none / quarantine / reject）</li>
                    <li>SPF・DKIM の<strong>整合性チェック</strong>（From ドメインとの一致）</li>
                    <li><strong>レポート機能</strong>：認証結果・なりすまし試行の集計レポート送信</li>
                    <li>SPF・DKIM を補完し、ドメインなりすまし対策を強化</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 STARTTLS について説明せよ。",
        ans: `
            <span class="check-category-badge badge-mail">STARTTLS</span>
            <p><strong>STARTTLS</strong>は、SMTP 等の平文プロトコル接続を、同一ポート上で<strong>TLS 暗号化通信に切り替える</strong>ための拡張コマンドです。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <ul>
                    <li>最初は平文で接続し、<strong>STARTTLS コマンド</strong>で TLS ハンドシェイクを開始</li>
                    <li>以降の通信（認証情報・メール本文）を<strong>暗号化</strong></li>
                    <li>SMTP（ポート 25/587）、POP3、IMAP 等で利用</li>
                    <li><strong>オポチュニスティック</strong>：相手が対応していなければ平文のまま（強制ではない）</li>
                    <li>証明書検証により<strong>中間者攻撃</strong>のリスク低減</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">暗号化専用ポート（SMTPS 465、IMAPS 993、POP3S 995）とは異なり、同一ポートで TLS にアップグレードする点が特徴です。</p>
        `
    },
    {
        q: "【Q9】 POP3 の脆弱性を挙げよ。",
        ans: `
            <span class="check-category-badge badge-mail">POP3 の脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li>デフォルトでは<strong>認証情報・メール本文が平文</strong>で送信される</li>
                    <li>パケットキャプチャによる<strong>パスワード・メール内容の盗聴</strong></li>
                    <li><strong>APOP</strong>は認証部分のみハッシュ化（完全な暗号化ではない）</li>
                    <li>メールをクライアントに<strong>ダウンロード後サーバから削除</strong>する運用のリスク</li>
                    <li>TLS 未使用時の<strong>中間者攻撃</strong>に脆弱</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">対策：<strong>POP3S（995）</strong>または <strong>STARTTLS</strong> による暗号化、強固なパスワード、可能なら IMAPS への移行。</p>
        `
    },
    {
        q: "【Q10】 インターネットからメールサーバに安全にアクセスしてメールを受信する方法にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-mail">安全なメール受信</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>暗号化プロトコル</h4>
                    <ul>
                        <li><strong>IMAPS</strong>（IMAP over TLS、ポート 993）</li>
                        <li><strong>POP3S</strong>（POP3 over TLS、ポート 995）</li>
                        <li>平文ポートで <strong>STARTTLS</strong> による暗号化</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>その他の方法</h4>
                    <ul>
                        <li><strong>VPN</strong>経由で社内メールサーバにアクセス</li>
                        <li>Web メール（<strong>HTTPS</strong>）の利用</li>
                        <li>証明書の正当性確認（自己署名証明書に注意）</li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">IMAP はサーバ上でメールを管理するため、複数端末からのアクセスに適します。POP3 は端末にダウンロードする方式です。</p>
        `
    }
];
