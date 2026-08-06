// Check! ログ分析 4問
const checkLogData = [
    {
        q: "【Q1】 ログ分析によってどのような事象を発見することが可能となるか。",
        ans: `
            <span class="check-category-badge badge-isms">ログ分析で発見できる事象</span>
            <div class="check-measure-box">
                <ul>
                    <li>不正ログインや権限昇格の試み</li>
                    <li>マルウェア感染，C2 通信，横展開の兆候</li>
                    <li>DoS／スキャンなどの攻撃や異常な通信量</li>
                    <li>設定変更，重要ファイルへの不正アクセス</li>
                    <li>内部不正やポリシー違反の痕跡</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">複数システムのログを突き合わせることで，単体では見えにくいインシデントの全体像を把握できます。</p>
        `
    },
    {
        q: "【Q2】 ログ分析によってなりすまし行為を発見するためにはどのような方法があるか。",
        ans: `
            <span class="check-category-badge badge-isms">なりすましの発見</span>
            <div class="check-measure-box">
                <ul>
                    <li>同一アカウントの<strong>地理的に不可能な連続ログイン</strong>（不可能な移動）</li>
                    <li>普段と異なる端末・IP・時間帯からのアクセス</li>
                    <li>認証成功後の異常な権限操作や大量データ取得</li>
                    <li>複数アカウントからの同一送信元 IP によるログイン試行</li>
                    <li>認証ログとアプリ操作ログの突合（セッション盗用の疑い）</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">ベースライン（平常時の行動）との比較が有効です。</p>
        `
    },
    {
        q: "【Q3】 ログを安全に保存するための対策として，どのような方法があるか。",
        ans: `
            <span class="check-category-badge badge-isms">ログの安全な保存</span>
            <div class="check-measure-box">
                <ul>
                    <li>改ざん防止：書き込み専用媒体，WORM，ハッシュ検証，デジタル署名</li>
                    <li>集中管理：SIEM／ログサーバへ転送し，ローカル改ざんリスクを低減</li>
                    <li>アクセス制御：閲覧・削除権限の最小化，管理者操作の分離</li>
                    <li>暗号化とバックアップ，適切な保存期間の設定</li>
                    <li>NTP による時刻同期（相関分析の前提）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 ログの分析における留意点について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">分析の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li>必要なログが取得・保存されているか（欠損がないか）を確認する</li>
                    <li>時刻同期のずれが相関分析を誤らせないよう注意する</li>
                    <li>正規業務との区別が難しく，誤検知・見逃しに配慮する</li>
                    <li>個人情報や機密がログに含まれる場合の取扱い（マスキング等）</li>
                    <li>分析結果だけで断定せず，他の証跡と組み合わせて判断する</li>
                    <li>分析手順・閾値を文書化し，再現性と監査可能性を確保する</li>
                </ul>
            </div>
        `
    }
];
