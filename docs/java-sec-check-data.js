// Check! Java セキュリティ 6問
const checkJavaSecData = [
    {
        q: "【Q1】 Java のメモリ管理上の特性について述べよ。",
        ans: `
            <span class="check-category-badge badge-bof">Java のメモリ管理</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>ガーベジコレクション（GC）</strong>：不要になったオブジェクトを JVM が自動回収</li>
                    <li>開発者が <code>free</code> 相当の解放を明示的に行う必要がない</li>
                    <li>オブジェクトは主に<strong>ヒープ</strong>に確保され，参照（reference）経由でアクセス</li>
                    <li>C/C++ のような生ポインタ演算は通常行えず，<strong>メモリ安全性</strong>が高い</li>
                    <li>GC 実行時は一時的に<strong>応答性や CPU 使用率</strong>に影響し得る</li>
                    <li>スタック上のプリミティブ型とヒープ上のオブジェクトを区別する</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 サンドボックスモデルとはどのようなものか。",
        ans: `
            <span class="check-category-badge badge-bof">サンドボックス</span>
            <div class="check-measure-box">
                <p><strong>サンドボックスモデル</strong>は，信頼できないコード（例：Java アプレット）を<strong>制限された実行環境</strong>で動かし，危険な操作を防ぐ仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>ローカルファイル，ネットワーク，システム API 等へのアクセスを<strong>権限で制限</strong></li>
                    <li><strong>SecurityManager</strong>（従来）やクラスローダによる隔離</li>
                    <li>許可された操作のみ実行可能（ポリシーファイル等で定義）</li>
                    <li>侵害されても<strong>ホスト環境全体</strong>への影響を抑える</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 フィールドを不正や誤りによる書換えから防ぐにはどうするべきか。",
        ans: `
            <span class="check-category-badge badge-bof">フィールド保護</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>private</strong>：外部クラスから直接アクセス不可</li>
                    <li><strong>final</strong>：一度代入したら再代入不可（不変フィールド）</li>
                    <li>setter を設けない，または setter 内で<strong>入力検証</strong>を行う</li>
                    <li>コレクションは<strong>不変ビュー</strong>（Collections.unmodifiableList 等）を返す</li>
                    <li>防御的コピー（defensive copy）で内部状態の漏えいを防ぐ</li>
                    <li>immutable オブジェクト設計（String 等）を活用</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 レースコンディションとは何か、どのような対策があるか。",
        ans: `
            <span class="check-category-badge badge-bof">レースコンディション</span>
            <div class="check-measure-box">
                <p><strong>レースコンディション</strong>は，複数スレッドが<strong>共有データ</strong>に同時アクセスし，実行順序によって結果が変わる問題です。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>synchronized</strong>，<strong>Lock</strong>（ReentrantLock 等）による排他制御</li>
                    <li><strong>AtomicInteger</strong> 等の原子操作クラス</li>
                    <li><strong>ConcurrentHashMap</strong> 等のスレッドセーフコレクション</li>
                    <li>共有 mutable 状態を<strong>最小化</strong>，不変オブジェクトの利用</li>
                    <li>volatile（可視性の保証，完全な排他ではない点に注意）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 不正なクラスの継承を防ぐにはどうする必要があるか。",
        ans: `
            <span class="check-category-badge badge-bof">継承の制限</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>final クラス</strong>：サブクラスを作成できない（String 等）</li>
                    <li><strong>final メソッド</strong>：オーバーライド不可</li>
                    <li>パッケージプライベート（同一パッケージ外から継承不可）</li>
                    <li>セキュリティ上重要なクラスは<strong>継承を想定しない設計</strong></li>
                    <li>クラスローダ，モジュールシステムによる読み込み制御</li>
                    <li>Composition over inheritance（継承より委譲）の検討</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 例外処理の概要について述べよ。",
        ans: `
            <span class="check-category-badge badge-bof">例外処理</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>try-catch-finally</strong>：例外発生時の処理と後処理</li>
                    <li><strong>checked 例外</strong>：コンパイル時に処理が必須（IOException 等）</li>
                    <li><strong>unchecked 例外</strong>：RuntimeException 系（NullPointerException 等）</li>
                    <li><strong>throw / throws</strong>：例外の送出と宣言</li>
                    <li>try-with-resources でリソースの確実なクローズ</li>
                    <li>セキュリティ上：詳細なスタックトレースをユーザーに見せない，例外を握りつぶさない</li>
                </ul>
            </div>
        `
    }
];
