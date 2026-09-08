// Check! 知的財産権 7問
const checkIpData = [
    {
        q: "【Q1】 産業財産権とは何を目的としており，何が含まれるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">産業財産権</span>
            <div class="check-measure-box">
                <p><strong>産業財産権</strong>は，産業の発達に寄与するため，発明・デザイン・ブランド等を保護し，その利用を図る権利です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>特許権</strong>（特許法）：発明</li>
                    <li><strong>実用新案権</strong>（実用新案法）：物品の形状等に係る考案</li>
                    <li><strong>意匠権</strong>（意匠法）：工業デザイン</li>
                    <li><strong>商標権</strong>（商標法）：商品・サービスを識別する標章</li>
                </ul>
                <p style="margin-top:0.75rem;">著作権は著作権法で保護され，産業財産権とは区別されます。</p>
            </div>
        `
    },
    {
        q: "【Q2】 特許法の目的，特許を受けるための要件，特許権の存続期間について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">特許法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>目的</strong>：発明の保護及び利用を図り，発明を奨励し，産業の発達に寄与する</li>
                    <li><strong>要件</strong>：産業上利用可能性，新規性，進歩性，先願，公序良俗に反しないこと等</li>
                    <li><strong>存続期間</strong>：出願日から原則<strong>20 年</strong>（医薬品等で延長あり）</li>
                    <li>出願・審査・登録により権利が発生する（登録主義）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 著作権法が保護の対象としているのは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">著作権の対象</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>思想又は感情を創作的に表現したもの</strong>であって，文芸・学術・美術・音楽の範囲に属するもの</li>
                    <li>例：小説，論文，プログラム，データベース（創作性あるもの），音楽，絵画，写真，映画，Web ページの文章・デザイン等</li>
                    <li>創作と同時に権利が発生（無方式主義）。登録は必須ではない</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 著作権の対象とならないものを挙げよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">非保護対象</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>事実・データそのもの</strong>（創作的表現でないもの）</li>
                    <li><strong>アイデア・手法・アルゴリズム</strong>（表現ではなく思想）</li>
                    <li><strong>法令・通達・裁判所の判決</strong>等（著作権の目的とならない）</li>
                    <li><strong>ニュースの事実報道</strong>（単なる事実の伝達）</li>
                    <li>ありふれた表現，短すぎて創作性がないもの</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 著作者人格権について説明せよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">著作者人格権</span>
            <div class="check-measure-box">
                <p>著作者の人格的利益を保護する権利で，原則として<strong>譲渡不可</strong>・一身専属です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>公表権</strong>：未公表著作物を公表するかどうか決める権利</li>
                    <li><strong>氏名表示権</strong>：実名・変名・無名で表示する権利</li>
                    <li><strong>同一性保持権</strong>：意に反する改変を受けない権利</li>
                </ul>
                <p style="margin-top:0.75rem;">著作財産権（複製権・公衆送信権等）とは区別されます。</p>
            </div>
        `
    },
    {
        q: "【Q6】 不正競争防止法が保護の対象としているのは何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">不正競争防止法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>営業秘密</strong>の侵害</li>
                    <li>周知・著名な<strong>商品等表示</strong>の混同・冒用</li>
                    <li>商品形態の模倣</li>
                    <li>原産地・品質等の<strong>誤認惹起表示</strong></li>
                    <li>技術的制限手段の回避装置等の提供</li>
                    <li><strong>ドメイン名</strong>の不正取得・使用</li>
                    <li>信用毀損，代理人等による商標冒用，限定提供データの不正取得等</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 不正競争防止法における営業秘密の要件について説明せよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">営業秘密の3要件</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>秘密管理性</strong>：秘密として管理されていること</li>
                    <li><strong>有用性</strong>：生産方法，販売方法その他の事業活動に有用な技術上又は営業上の情報であること</li>
                    <li><strong>非公知性</strong>：公然と知られていないこと</li>
                </ul>
                <p style="margin-top:0.75rem;">顧客名簿・ノウハウ等も，上記を満たせば営業秘密として保護されます。</p>
            </div>
        `
    }
];
