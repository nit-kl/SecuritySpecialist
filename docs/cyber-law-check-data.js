// Check! サイバー関連法制度 9問
const checkCyberLawData = [
    {
        q: "【Q1】 刑法によって処罰可能なコンピュータ犯罪にはどのようなものがあるか。",
        ans: `
            <span class="check-category-badge badge-fundamentals">刑法</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>電子計算機損壊等業務妨害罪</strong>：コンピュータに虚偽情報を与える・不正指令を与える等により，意図に反する動作をさせ又は意図する動作をさせず業務を妨害</li>
                    <li><strong>電子計算機使用詐欺罪</strong>：虚偽情報・不正指令により財産上の利益を得る</li>
                    <li><strong>電磁的記録不正作出・供用罪</strong>：権利・義務に関する電磁的記録を不正に作出し供用</li>
                    <li><strong>不正指令電磁的記録に関する罪</strong>（ウイルス作成罪等）：ウイルス等の作成・提供・供用・取得・保管</li>
                    <li>電磁的記録媒体の損壊等に関する罪など</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 不正アクセス禁止法の特徴について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">不正アクセス禁止法</span>
            <div class="check-measure-box">
                <ul>
                    <li>正式名称：不正アクセス行為の禁止等に関する法律</li>
                    <li><strong>不正アクセス行為</strong>：他人の識別符号を無断利用，セキュリティホール攻撃等により，アクセス制御されたコンピュータに侵入する行為を禁止・処罰</li>
                    <li>識別符号の不正取得・保管・提供，フィッシング等の助長行為も規制</li>
                    <li>アクセス管理者に対する防御措置の努力義務</li>
                    <li>不正アクセス行為の認知時の都道府県公安委員会への申告制度</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 サイバーセキュリティ基本法の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">サイバーセキュリティ基本法</span>
            <div class="check-measure-box">
                <ul>
                    <li>サイバーセキュリティに関する施策の基本理念と国・地方等の責務を定める基本法</li>
                    <li>対象となる情報は，<strong>電磁的方式により記録・発信・伝送・受信される情報</strong>に限られる</li>
                    <li>漏えい・滅失・毀損の防止など安全管理措置が適切に維持されている状態を「サイバーセキュリティ」と定義</li>
                    <li>サイバーセキュリティ戦略の策定，関係機関の連携強化を規定</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 国家サイバー統括室の主な役割について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">国家サイバー統括室</span>
            <div class="check-measure-box">
                <ul>
                    <li>内閣官房に置かれる，政府のサイバーセキュリティ政策を<strong>横断的に統括・調整</strong>する組織</li>
                    <li>サイバー攻撃・重大インシデントへの政府横断的対応の司令塔機能</li>
                    <li>関係省庁・機関との情報共有・連携の強化</li>
                    <li>国家のサイバー安全保障・重要インフラ防護に関する総合調整</li>
                    <li>（体制は法改正・組織再編により名称・所掌が更新され得る点に注意）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 サイバー対処能力強化法の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">サイバー対処能力強化法</span>
            <div class="check-measure-box">
                <ul>
                    <li>国のサイバー攻撃への<strong>対処能力を強化</strong>するための法制（近年整備が進む分野）</li>
                    <li>重要インフラ等へのサイバー攻撃への対応体制の強化</li>
                    <li>情報収集・分析・関係機関連携の拡充</li>
                    <li>能動的サイバー防御（能動的対処）に関する議論・制度整備と関連</li>
                    <li>試験では「国全体のサイバー対処力を高める枠組み」として押さえる</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 情報流通プラットフォーム対処法の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">情報流通プラットフォーム対処法</span>
            <div class="check-measure-box">
                <ul>
                    <li>SNS・掲示板等の<strong>大規模プラットフォーム事業者</strong>に対し，違法・有害情報への対応を求める法制</li>
                    <li>削除請求等への迅速な対応，運用体制・窓口の整備</li>
                    <li>透明性報告（対応状況の公表）などアカウンタビリティの強化</li>
                    <li>従来のプロバイダ責任制限法とあわせ，プラットフォーム責任を強化する流れ</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 サイバーセキュリティ経営ガイドラインの概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">経営ガイドライン</span>
            <div class="check-measure-box">
                <ul>
                    <li>経済産業省と IPA が策定。経営者がサイバー攻撃から企業を守るための指針</li>
                    <li>経営者が認識すべき<strong>3 原則</strong></li>
                    <li>経営者が CISO 等に指示すべき<strong>重要 10 項目</strong></li>
                    <li>対策をコストではなく<strong>投資</strong>として捉え，リーダシップを発揮することを重視</li>
                    <li>業種・規模に応じた実践が前提（一律の全対策義務ではない）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q8】 SECURITY ACTION について述べよ。",
        ans: `
            <span class="check-category-badge badge-fundamentals">SECURITY ACTION</span>
            <div class="check-measure-box">
                <ul>
                    <li>IPA が推進する，中小企業等向けの<strong>自己宣言</strong>制度</li>
                    <li>情報セキュリティ対策に取り組む姿勢を対外的に宣言し，ロゴを掲示できる</li>
                    <li>★一つ星：基本方針の策定など基礎的な取組</li>
                    <li>★★二つ星：より具体的な対策の実施・見直し</li>
                    <li>認証制度ではなく，宣言による意識向上・取組促進が目的</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 電子署名法の目的は何か。",
        ans: `
            <span class="check-category-badge badge-fundamentals">電子署名法</span>
            <div class="check-measure-box">
                <ul>
                    <li>正式名称：電子署名及び認証業務に関する法律</li>
                    <li>電子署名に，手書き署名・押印と<strong>同等の法的効果</strong>を与えることが目的</li>
                    <li>本人性の確認と改ざん防止が確保された電子署名の要件を規定</li>
                    <li>特定認証業務の認定制度により，信頼性の高い電子証明書を供給</li>
                </ul>
            </div>
        `
    }
];
