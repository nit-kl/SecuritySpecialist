// Check! ファイアウォール 12問
const checkFirewallData = [
    {
        q: "【Q1】 ファイアウォールとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">ファイアウォール</span>
            <div class="check-measure-box">
                <p>ネットワークの境界などで通信を監視し，<strong>許可された通信だけを通過</strong>させ，不正・不要な通信を遮断するセキュリティ装置（またはソフトウェア）です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>送信元／宛先 IP，ポート，プロトコルなどに基づくアクセス制御</li>
                    <li>内部ネットワークと外部（インターネット等）の<strong>境界防御</strong>の中核</li>
                    <li>ハードウェア型・ソフトウェア型・クラウド型など形態は多様</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 ファイアウォールに求められる役割は何か。",
        ans: `
            <span class="check-category-badge badge-isms">求められる役割</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>アクセス制御</strong>：ポリシに基づく通過／遮断</li>
                    <li><strong>境界の明確化</strong>：信頼度の異なるネットワーク間の分離</li>
                    <li>不正アクセス・不要通信の<strong>遮断・抑止</strong></li>
                    <li>通信ログの記録による<strong>監視・監査・事後調査</strong>の支援</li>
                    <li>必要に応じた NAT／NAPT，VPN 終端などの付加機能</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 ファイアウォールにはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">種類</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>制御方式</h4>
                    <ul>
                        <li>パケットフィルタリング型</li>
                        <li>ダイナミックパケットフィルタリング（SPI）</li>
                        <li>アプリケーションゲートウェイ（プロキシ）型</li>
                        <li>サーキットレベルゲートウェイ型</li>
                        <li>次世代 FW（NGFW）／UTM</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>配置・形態</h4>
                    <ul>
                        <li>ネットワーク境界 FW</li>
                        <li>ホスト型 FW</li>
                        <li>パーソナル FW</li>
                        <li>クラウド／仮想 FW</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q4】 ファイアウォールはネットワーク上のどこに配置するのか。",
        ans: `
            <span class="check-category-badge badge-isms">配置場所</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>インターネットと内部ネットワークの境界</strong></li>
                    <li>インターネット／DMZ／内部の間（多段・三脚構成など）</li>
                    <li>部門間・拠点間など，信頼度の異なるセグメントの境界</li>
                    <li>重要サーバ直前，クラウド VPC／VNet の境界</li>
                    <li>端末上（ホスト型）での補完</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">DMZ を挟む構成では，外部公開サーバと内部資産を分離して守りやすくなります。</p>
        `
    },
    {
        q: "【Q5】 ファイアウォールでどのような攻撃を防ぐことができるのか。",
        ans: `
            <span class="check-category-badge badge-isms">防げる攻撃例</span>
            <div class="check-measure-box">
                <ul>
                    <li>不要ポートへの不正アクセス・スキャンの遮断</li>
                    <li>許可されていない送信元からの接続試行</li>
                    <li>単純な不正パケット，ポリシ外の通信</li>
                    <li>SPI による，セッション状態に矛盾するパケットの遮断</li>
                    <li>（製品機能による）一部の既知攻撃シグネチャ検知など</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">許可された正規ポート上の攻撃（例：HTTPS 上の Web 攻撃）は，FW 単体では防ぎ切れないことが多いです。</p>
        `
    },
    {
        q: "【Q6】 パケットフィルタリング型ファイアウォールはどのようなところが脆弱なのか。",
        ans: `
            <span class="check-category-badge badge-isms">パケットフィルタの弱点</span>
            <div class="check-measure-box">
                <ul>
                    <li>ヘッダ情報（IP／ポート等）中心で，<strong>アプリケーション内容は見ない</strong></li>
                    <li>静的ルールでは戻り通信の扱いが難しく，設定が複雑・過大許可になりやすい</li>
                    <li>セッション状態を持たない場合，順序矛盾の不正パケットを通しやすい</li>
                    <li>許可ポート上の不正利用（正規プロトコル悪用）を検知しにくい</li>
                    <li>IP 詐称などに対する追加対策が必要</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 パケットフィルタリング型とダイナミックパケットフィルタリング型の違いは何か。",
        ans: `
            <span class="check-category-badge badge-isms">静的 vs ダイナミック（SPI）</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>パケットフィルタリング（静的）</h4>
                    <ul>
                        <li>あらかじめ定義した ACL で個別パケットを判定</li>
                        <li>往路・復路を両方ルール化することが多い</li>
                        <li>状態を持たない（ステートレス）</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>ダイナミック（SPI）</h4>
                    <ul>
                        <li>セッション状態を記憶し，動的に許可／遮断</li>
                        <li>往路許可に対応する<strong>戻りパケットを自動許可</strong></li>
                        <li>終了後は一時ルールを破棄</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q8】 NAT と NAPT の違いは何か。",
        ans: `
            <span class="check-category-badge badge-isms">NAT / NAPT</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>NAT</h4>
                    <ul>
                        <li>IP アドレスを変換</li>
                        <li>基本は 1 対 1（または少数）の対応</li>
                        <li>内部構成の隠蔽に利用</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>NAPT（IPマスカレード）</h4>
                    <ul>
                        <li>IP に加え<strong>ポート番号</strong>も変換</li>
                        <li>多数の内部ホストが少数のグローバル IP を共有</li>
                        <li>一般的なインターネット接続で広く利用</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q9】 ファイアウォールで防げない攻撃にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">防げない／苦手な攻撃</span>
            <div class="check-measure-box">
                <ul>
                    <li>許可されたサービス上の攻撃（SQL インジェクション，XSS 等）→ <strong>WAF</strong> 等が必要</li>
                    <li>暗号化通信内部の不正（中身を見ない場合）</li>
                    <li>内部犯行，正規認証後の悪用</li>
                    <li>マルウェア感染端末からの C&C（許可通信に紛れる場合）</li>
                    <li>物理アクセス，ソーシャルエンジニアリング</li>
                    <li>DoS／DDoS の大規模帯域攻撃（境界 FW だけでは限界）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 ファイアウォールの可用性を高めるにはどのような方法があるか。",
        ans: `
            <span class="check-category-badge badge-isms">可用性向上</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>冗長化</strong>（アクティブ／スタンバイ，クラスタ）</li>
                    <li>負荷分散・複数経路（マルチホーミング）</li>
                    <li>機器・電源・回線の二重化</li>
                    <li>設定・ポリシのバックアップと迅速な切替手順</li>
                    <li>監視・ヘルスチェックによる障害検知とフェイルオーバー</li>
                    <li>過負荷対策（セッション上限，DoS 耐性機能）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q11】 UTM 製品とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">UTM</span>
            <div class="check-measure-box">
                <p><strong>UTM</strong>（Unified Threat Management：統合脅威管理）は，ファイアウォールに加え，侵入検知／防御，アンチマルウェア，URL フィルタ，アンチスパムなどを<strong>一台（一製品）に統合</strong>したセキュリティ製品です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>中小規模環境で導入・運用を簡素化しやすい</li>
                    <li>複数機能をまとめて管理・更新できる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q12】 UTM 製品を導入することによるメリットとデメリットとして何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">UTM のメリデメ</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>メリット</h4>
                    <ul>
                        <li>導入・管理コストの低減</li>
                        <li>運用窓口・設定の一元化</li>
                        <li>複数対策をまとめて実装しやすい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>デメリット</h4>
                    <ul>
                        <li><strong>単一障害点</strong>になりやすい</li>
                        <li>高負荷時に性能ボトルネック</li>
                        <li>機能ごとの専門製品より深い防御が弱い場合がある</li>
                        <li>障害時の影響範囲が大きい</li>
                    </ul>
                </div>
            </div>
        `
    }
];
