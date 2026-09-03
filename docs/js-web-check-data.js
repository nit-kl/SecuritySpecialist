// Check! JavaScript／Web 技術 6問
const checkJsWebData = [
    {
        q: "【Q1】 ECMAScript の言語としての主な特徴を三つ挙げよ。",
        ans: `
            <span class="check-category-badge badge-web">ECMAScript</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>スクリプト言語</strong>：コンパイル不要でインタプリタ実行，動的に動作を記述できる</li>
                    <li><strong>オブジェクト指向（プロトタイプベース）</strong>：クラスよりプロトタイプによる継承</li>
                    <li><strong>動的型付け</strong>：変数の型は実行時に決まる</li>
                    <li>（参考）イベント駆動，第一級関数，JSON との親和性が高い</li>
                </ul>
                <p style="margin-top:0.75rem;">JavaScript は ECMAScript 標準の実装の一つであり，Web ブラウザや Node.js 等で広く利用される。</p>
            </div>
        `
    },
    {
        q: "【Q2】 文字列リテラルにおいて最低限エスケープ処理を行うべき文字を挙げよ。",
        ans: `
            <span class="check-category-badge badge-web">エスケープ</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>\\</strong>（バックスラッシュ）：エスケープ自体</li>
                    <li><strong>"</strong>：ダブルクォートで囲む文字列内</li>
                    <li><strong>'</strong>：シングルクォートで囲む文字列内</li>
                    <li><strong>改行，タブ</strong>等の制御文字（\\n，\\t 等）</li>
                    <li>HTML に埋め込む場合は <strong>&lt; &gt; &amp;</strong> 等もエスケープ（XSS 対策）</li>
                </ul>
                <p style="margin-top:0.75rem;">エスケープしないと文字列の終端がずれたり，HTML/JavaScript インジェクションの原因になる。</p>
            </div>
        `
    },
    {
        q: "【Q3】 グローバル変数とローカル変数の取扱いにおける留意点を挙げよ。",
        ans: `
            <span class="check-category-badge badge-web">変数のスコープ</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>グローバル変数は最小限</strong>にし，名前空間の汚染を避ける</li>
                    <li>他スクリプトから<strong>上書き・改ざん</strong>され得る（XSS 時のリスク増大）</li>
                    <li><strong>let / const</strong> でブロックスコープを使い，意図しない共有を防ぐ</li>
                    <li>モジュール（ES Modules）や IIFE で<strong>スコープを隔離</strong></li>
                    <li>ローカル変数で一時データを閉じ込め，漏えいを防ぐ</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 Ajax とはどのような技術か。",
        ans: `
            <span class="check-category-badge badge-web">Ajax</span>
            <div class="check-measure-box">
                <p><strong>Ajax</strong>（Asynchronous JavaScript and XML）は，Web ブラウザ上の JavaScript から<strong>非同期</strong>にサーバと通信し，<strong>ページ全体を再読み込みせず</strong>に部分的な更新を行う技術です。</p>
                <ul style="margin-top:0.75rem;">
                    <li>従来は XMLHttpRequest，現在は <strong>fetch API</strong> も利用</li>
                    <li>ユーザー体験の向上（待ち時間の短縮）</li>
                    <li>通信内容の検証不足は XSS，CSRF 等の脆弱性につながり得る</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 JSON, JSONP の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-web">JSON／JSONP</span>
            <div class="check-measure-box">
                <p><strong>JSON</strong>（JavaScript Object Notation）は，軽量なデータ交換フォーマットです。</p>
                <ul>
                    <li>オブジェクト <code>{ "key": value }</code>，配列 <code>[ ... ]</code></li>
                    <li>言語非依存で，REST API 等で広く利用</li>
                    <li>キーは二重引用符，値は文字列・数値・真偽・null・オブジェクト・配列</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>JSONP</strong>（JSON with Padding）は，<code>&lt;script&gt;</code> タグのクロスドメイン読み込みを利用して異なるドメインから JSON 相当データを取得する手法です。</p>
                <ul>
                    <li>同一オリジンポリシーの回避（レガシー手法）</li>
                    <li>コールバック関数名を指定し，信頼できないソースは<strong>XSS リスク</strong>がある</li>
                    <li>現代では CORS が推奨される</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 API の REST 原則について述べよ。",
        ans: `
            <span class="check-category-badge badge-web">REST</span>
            <div class="check-measure-box">
                <p><strong>REST</strong>（Representational State Transfer）は，Web の仕組みを活かした API 設計の考え方です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>リソース</strong>を URI で一意に識別（例：<code>/products/123</code>）</li>
                    <li><strong>HTTP メソッド</strong>で操作を表現（GET 取得，POST 作成，PUT/PATCH 更新，DELETE 削除）</li>
                    <li><strong>ステートレス</strong>：各リクエストは独立（セッション状態をサーバに持たない）</li>
                    <li><strong>表現</strong>：JSON や XML 等でリソースを表現</li>
                    <li>統一インタフェース，キャッシュ可能性，階層化システム等</li>
                </ul>
            </div>
        `
    }
];
