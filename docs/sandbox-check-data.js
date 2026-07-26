// Check! サンドボックス 4問
const checkSandboxData = [
    {
        q: "【Q1】 サンドボックスとは何か。",
        ans: `
            <span class="check-category-badge badge-isms">サンドボックス</span>
            <div class="check-measure-box">
                <p><strong>サンドボックス</strong>とは，システムの実環境に影響が及ばないように，プログラムが実行できる機能やアクセスできるリソースを<strong>制限した実行環境</strong>です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>隔離された空間で不審なプログラムを実行・観察できる</li>
                    <li>振る舞いからマルウェアかどうかを判定する用途に使われる</li>
                    <li>ブラウザやモバイル OS でもアプリの権限制限として用いられる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 サンドボックス製品にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">製品の種類</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ネットワーク型</strong>：メール添付やダウンロードファイルを経路上で隔離実行し解析</li>
                    <li><strong>ホスト型／エンドポイント型</strong>：端末上で不審ファイルを隔離環境で実行</li>
                    <li><strong>クラウド型</strong>：クラウド上の仮想環境で解析し結果を返す</li>
                    <li><strong>ブラウザ／OS 組み込み型</strong>：プロセスや権限を制限して実行する仕組み</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 サンドボックス製品によってどのような効果が期待できるか。",
        ans: `
            <span class="check-category-badge badge-isms">期待できる効果</span>
            <div class="check-measure-box">
                <ul>
                    <li>シグネチャに無い<strong>未知のマルウェア</strong>を振る舞い検知で発見</li>
                    <li>実環境を汚染せずに動的解析ができる</li>
                    <li>メール・Web 経由の脅威を入口で遮断・隔離しやすい</li>
                    <li>SOC への詳細な挙動レポート提供</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 サンドボックス製品の検知／遮断における課題として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">検知・遮断の課題</span>
            <div class="check-measure-box">
                <ul>
                    <li>解析環境を検知して動作を止める<strong>アンチサンドボックス</strong>手法</li>
                    <li>長時間待機してから発動するマルウェア（タイムディレイ）</li>
                    <li>解析に時間がかかり，リアルタイム遮断が遅れる場合がある</li>
                    <li>誤検知・見逃し，暗号化・難読化への対応限界</li>
                    <li>コスト・性能負荷，運用・チューニングの負担</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">AV／EDR／WAF などとの多層防御と組み合わせることが重要です。</p>
        `
    }
];
