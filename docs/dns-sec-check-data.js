// Check! DNSセキュリティ 5問
const checkDnsSecData = [
    {
        q: "【Q1】 DNS の主な脆弱性を 3 点挙げよ。",
        ans: `
            <span class="check-category-badge badge-dns">DNS の主な脆弱性</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>認証・暗号化の欠如</strong>：デフォルトの DNS 通信は平文で，送信元・応答内容の真正性を検証できない</li>
                    <li><strong>キャッシュポイズニング</strong>：偽の DNS 応答をキャッシュリゾルバに混入し，名前解決結果を改ざんできる</li>
                    <li><strong>増幅・反射攻撃への悪用</strong>：小さな UDP 問合せで巨大な応答を返す特性を DDoS の踏み台に利用される</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">その他：ゾーン転送（AXFR）の不正利用，オープンリゾルバ，DNS トンネリング等も挙げられます。</p>
        `
    },
    {
        q: "【Q2】 Q1 で挙げた脆弱性を狙った攻撃を受けた場合の影響について述べよ。",
        ans: `
            <span class="check-category-badge badge-dns">DNS 攻撃の影響</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>キャッシュポイズニング・スプーフィング</h4>
                    <ul>
                        <li>正規サイトの<strong>なりすましサイト</strong>へ誘導（フィッシング）</li>
                        <li>Web・メール等の<strong>通信先の改ざん</strong></li>
                        <li>マルウェア配布サイトへの<strong>誘導</strong></li>
                        <li>MX レコード改ざんによる<strong>メール窃取</strong></li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>増幅・DDoS・その他</h4>
                    <ul>
                        <li>DNS サーバ・ネットワークの<strong>可用性低下</strong>（サービス停止）</li>
                        <li>反射攻撃による<strong>第三者（被害者）への DDoS</strong></li>
                        <li>DNS トンネリングによる<strong>データ持ち出し</strong>（FW 迂回）</li>
                        <li>ゾーン転送悪用による<strong>内部構造の情報収集</strong></li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q3】 DNSSEC の仕組みと導入による効果について述べよ。",
        ans: `
            <span class="check-category-badge badge-dns">DNSSEC</span>
            <p><strong>DNSSEC（DNS Security Extensions）</strong>は DNS 応答に<strong>デジタル署名</strong>を付与し，リゾルバが<strong>公開鍵</strong>で検証することで，データの<strong>作成元の正当性（真正性）</strong>と<strong>完全性</strong>を確認する拡張です。</p>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>仕組み</h4>
                <ul>
                    <li>権威 DNS サーバがリソースレコード（RR）に<strong>RRSIG</strong>（署名）を付加</li>
                    <li>DNSKEY レコードで公開鍵を配布，DS レコードで親ゾーンから連鎖的に信頼</li>
                    <li>リゾルバが受信 RR のデジタル署名を検証</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>導入効果</h4>
                <ul>
                    <li>キャッシュポイズニング・応答改ざんの<strong>検知</strong></li>
                    <li>なりすまし DNS 応答の<strong>拒否</strong>（検証失敗時）</li>
                    <li>※通信の<strong>暗号化（機密性）</strong>は提供しない（DoT/DoH は別技術）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 セキュリティを考慮した DNS サーバの構成，設定について述べよ。",
        ans: `
            <span class="check-category-badge badge-dns">セキュアな DNS 構成</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>構成</h4>
                    <ul>
                        <li>権威 DNS とキャッシュ DNS（リゾルバ）の<strong>分離</strong></li>
                        <li>内部向け・外部向け DNS の<strong>役割分離</strong></li>
                        <li>DMZ 配置，Anycast による冗長化・DDoS 耐性</li>
                        <li>管理ネットワークからの<strong>アクセス制限</strong></li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>設定</h4>
                    <ul>
                        <li><strong>DNSSEC</strong>の有効化（署名・検証）</li>
                        <li>ゾーン転送（AXFR）の<strong>許可先制限</strong></li>
                        <li>再帰問合せの<strong>制限</strong>（オープンリゾルバ化の防止）</li>
                        <li>最新パッチ適用，不要サービスの無効化</li>
                        <li>レート制限，ACL，トランザクション ID・ポートのランダム化</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q5】 DNS の 512 オクテット制限と EDNS0 について述べよ。",
        ans: `
            <span class="check-category-badge badge-dns">512 オクテット制限と EDNS0</span>
            <div class="check-measure-box">
                <h4>512 オクテット制限</h4>
                <ul>
                    <li>従来の DNS（UDP）では，メッセージサイズが<strong>512 オクテット</strong>に制限されていた（RFC 1035）</li>
                    <li>大きな応答は<strong>TC（Truncated）フラグ</strong>が立ち，TCP で再問合せが必要</li>
                    <li>DNSSEC 導入後は署名付き RR が 512 バイトを超えやすく，制限が問題に</li>
                </ul>
            </div>
            <div class="check-measure-box" style="margin-top:1rem;">
                <h4>EDNS0（Extension Mechanisms for DNS）</h4>
                <ul>
                    <li>OPT リソースレコードにより DNS メッセージを<strong>拡張</strong></li>
                    <li>クライアントが受け入れ可能な<strong>UDP ペイロードサイズ</strong>（例：4096）を通知</li>
                    <li>512 バイト超の応答を UDP で送受信可能に（DNSSEC 等に必須）</li>
                    <li>DNSSEC の<strong>DO（DNSSEC OK）ビット</strong>等も EDNS0 で伝達</li>
                </ul>
            </div>
        `
    }
];
