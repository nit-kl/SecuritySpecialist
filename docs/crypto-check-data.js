// Check! 暗号技術 9問
const checkCryptoData = [
    {
        q: "【Q1】 共通鍵暗号方式、公開鍵暗号方式にはどのような特徴があるか。",
        ans: `
            <span class="check-category-badge badge-isms">共通鍵／公開鍵</span>
            <div class="check-measure-box">
                <p><strong>共通鍵暗号方式</strong>（秘密鍵暗号）は，暗号化と復号に同じ鍵を用いる方式です。</p>
                <ul>
                    <li>処理が高速で，大量データの暗号化に向く</li>
                    <li>通信相手ごとに鍵を共有する必要があり，鍵配送が課題</li>
                    <li>例：AES，Camellia，3DES</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>公開鍵暗号方式</strong>は，公開鍵で暗号化し秘密鍵で復号する（または署名は逆）方式です。</p>
                <ul>
                    <li>公開鍵は公開してよく，鍵配送が容易</li>
                    <li>処理が遅く，大量データには不向き</li>
                    <li>デジタル署名・認証にも利用できる</li>
                    <li>例：RSA，楕円曲線暗号（ECC）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 ストリーム暗号とブロック暗号にはどのような違いがあるか。",
        ans: `
            <span class="check-category-badge badge-isms">ストリーム／ブロック</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ストリーム暗号</strong>：ビットまたはバイト単位で，鍵ストリームと平文を XOR して暗号化する。遅延が小さくリアルタイム通信向き。同じ鍵ストリームの再利用は危険</li>
                    <li><strong>ブロック暗号</strong>：固定長（例：128 ビット）のブロック単位で暗号化する。AES など。データ長がブロック長の倍数でない場合，モードによってはパディングが必要</li>
                    <li>CTR モードなどはブロック暗号をストリーム暗号的に使う</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 ブロック暗号の強度を高める手法にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">強度を高める手法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>鍵長を長くする</strong>（例：AES-128 より AES-256）</li>
                    <li><strong>ラウンド数を増やす</strong></li>
                    <li><strong>多重暗号化</strong>（例：3DES の 3 重暗号化）</li>
                    <li><strong>適切な暗号利用モード</strong>：ECB を避け，CBC／CTR／GCM などを使う</li>
                    <li><strong>IV／nonce を適切に使う</strong>（予測不能・再利用しない）</li>
                    <li>認証付き暗号（GCM 等）で改ざん検知も組み合わせる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 ハイブリッド暗号方式はどのような仕組みで暗号処理を行うか。",
        ans: `
            <span class="check-category-badge badge-isms">ハイブリッド暗号</span>
            <div class="check-measure-box">
                <p>公開鍵暗号と共通鍵暗号を組み合わせ，それぞれの長所を使う方式です（TLS など）。</p>
                <ol style="margin-top:0.75rem;">
                    <li>送信側がセッション鍵（共通鍵）を乱数で生成する</li>
                    <li>平文データは<strong>共通鍵暗号</strong>で高速に暗号化する</li>
                    <li>セッション鍵は受信者の<strong>公開鍵</strong>で暗号化して送る</li>
                    <li>受信者は自分の秘密鍵でセッション鍵を取り出し，データを復号する</li>
                </ol>
                <p style="margin-top:0.75rem;">鍵配送の容易さと，データ暗号化の速さの両立が目的です。</p>
            </div>
        `
    },
    {
        q: "【Q5】 量子暗号と耐量子暗号について説明せよ。",
        ans: `
            <span class="check-category-badge badge-isms">量子暗号／PQC</span>
            <div class="check-measure-box">
                <p><strong>量子暗号</strong>（量子鍵配送：QKD）は，量子力学に基づく共通鍵暗号の一種です。量子通信路で光子により乱数列を共有し，使い捨ての暗号鍵として用います。盗聴すると光子の状態が乱れるため検知でき，原理的に第三者に解読されない秘匿通信を目指します。</p>
                <p style="margin-top:0.75rem;"><strong>耐量子暗号</strong>（PQC：Post-Quantum Cryptography）は，量子コンピュータを用いても解読が困難な，従来型コンピュータ上で動く暗号方式です。RSA 等の公開鍵暗号は Shor のアルゴリズムで危殆化し得るため，格子暗号などが研究・標準化されています。CRYPTREC でも動向調査が行われています。</p>
            </div>
        `
    },
    {
        q: "【Q6】 ハッシュ関数の性質と用途について述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">ハッシュ関数</span>
            <div class="check-measure-box">
                <p>任意長の入力から固定長のハッシュ値を生成する関数です。求められる主な性質は次の三つです。</p>
                <ul>
                    <li><strong>衝突発見困難性</strong>：同じハッシュ値になる異なる 2 つのデータを見つけることが困難</li>
                    <li><strong>第 2 原像計算困難性</strong>：あるデータと同じハッシュ値になる別データを見つけることが困難</li>
                    <li><strong>原像計算困難性（一方向性）</strong>：ハッシュ値から元データを求めることが困難</li>
                </ul>
                <p style="margin-top:0.75rem;">衝突発見は誕生日のパラドックスにより，n ビットならおおむね 2<sup>n/2</sup> 程度。用途は改ざん検知，パスワード保存，デジタル署名の対象圧縮，フィンガプリントなど。</p>
            </div>
        `
    },
    {
        q: "【Q7】 フィンガプリントとは何か。入手にあたって留意すべきことは何か。",
        ans: `
            <span class="check-category-badge badge-isms">フィンガプリント</span>
            <div class="check-measure-box">
                <p><strong>フィンガプリント</strong>は，公開鍵やファイルなどのデータをハッシュ関数で要約した短い値です。鍵やファイルが改ざん・すり替えされていないかの確認に使います。</p>
                <ul style="margin-top:0.75rem;">
                    <li>入手経路は，鍵そのものとは<strong>別の信頼できる経路</strong>（公式サイトの HTTPS，対面，署名付きメール等）で照合する</li>
                    <li>同じ経路で鍵とフィンガプリントを取ると，中間者攻撃で両方をすり替えられる</li>
                    <li>表示形式（16 進，区切り）を合わせて比較する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 Diffie-Hellman 鍵交換とはどのようなものか。",
        ans: `
            <span class="check-category-badge badge-isms">Diffie-Hellman</span>
            <div class="check-measure-box">
                <p><strong>Diffie-Hellman（DH）鍵交換</strong>は，事前に秘密を共有していなくても，公開情報のやり取りだけで共通鍵を合意する方式です。安全性は離散対数問題の困難さに依ります。</p>
                <ul style="margin-top:0.75rem;">
                    <li>双方が秘密の指数を持ち，公開値を交換して同じ共有秘密を計算する</li>
                    <li>経路上の盗聴だけでは共有鍵を求めにくい</li>
                    <li>認証が無いと<strong>中間者攻撃</strong>に弱い（相手の公開値のすり替え）</li>
                    <li>楕円曲線版の ECDH も広く使われる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 前方秘匿性について説明せよ。",
        ans: `
            <span class="check-category-badge badge-isms">前方秘匿性</span>
            <div class="check-measure-box">
                <p><strong>前方秘匿性</strong>（Forward Secrecy）は，鍵交換に使った長期の秘密鍵が漏えいしても，<strong>それより前の暗号文は解読されない</strong>という性質です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>セッション鍵を長期鍵から直接導出せず，使い捨て（エフェメラル）にする</li>
                    <li>TLS の ECDHE などが代表例</li>
                    <li>データ暗号化の鍵から別の鍵を生成しない，という運用も求められる</li>
                </ul>
            </div>
        `
    }
];
