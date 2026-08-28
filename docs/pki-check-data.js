// Check! PKI／デジタル証明書 12問
const checkPkiData = [
    {
        q: "【Q1】 デジタル証明書とはどのような用途に使用するのか。",
        ans: `
            <span class="check-category-badge badge-isms">デジタル証明書</span>
            <div class="check-measure-box">
                <p><strong>デジタル証明書</strong>は，公開鍵とその所有者（主体）の情報を CA がデジタル署名して保証する電子データです。主な用途は次のとおりです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>通信相手の認証</strong>：TLS／SSL，IPsec，VPN などでサーバ・クライアントを確認</li>
                    <li><strong>鍵交換の支援</strong>：公開鍵暗号によるセッション鍵の安全な共有</li>
                    <li><strong>デジタル署名</strong>：S/MIME，PDF 署名，コード署名などで本人性・完全性を示す</li>
                    <li><strong>電子政府・電子契約</strong>：特定認証業務，JPKI など</li>
                </ul>
                <p style="margin-top:0.75rem;">規格は主に ITU-T X.509（RFC 5280）です。</p>
            </div>
        `
    },
    {
        q: "【Q2】 デジタル証明書による認証基盤を構成する要素として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">PKI の構成要素</span>
            <div class="check-measure-box">
                <p><strong>PKI（公開鍵基盤）</strong>を構成する主な要素は次のとおりです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>CA</strong>（Certification Authority：認証局）：デジタル証明書を発行・失効</li>
                    <li><strong>RA</strong>（Registration Authority：登録局）：本人確認，申請審査</li>
                    <li><strong>利用者</strong>：鍵ペアを生成し証明書を取得・利用</li>
                    <li><strong>CRL／OCSP</strong>：証明書失効情報の配布・照会</li>
                    <li><strong>リポジトリ／ディレクトリ</strong>：証明書・CRL の公開</li>
                    <li><strong>CPS／CP</strong>：認証局運用規程，証明書ポリシー</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q3】 CA と RA はそれぞれどのような役割を担うのか。",
        ans: `
            <span class="check-category-badge badge-isms">CA と RA</span>
            <div class="check-measure-box">
                <p><strong>CA（認証局）</strong></p>
                <ul>
                    <li>デジタル証明書の発行・更新・失効</li>
                    <li>申請者の公開鍵と主体情報に CA の秘密鍵でデジタル署名</li>
                    <li>CRL の発行，下位 CA への証明書発行</li>
                    <li>証明書保持者と公開鍵の信頼性を保証</li>
                </ul>
                <p style="margin-top:0.75rem;"><strong>RA（登録局）</strong></p>
                <ul>
                    <li>本人確認，資格審査（発行・失効申請の承認／却下）</li>
                    <li>利用者情報の登録，鍵の一括管理</li>
                    <li>証明書・鍵の配付，ディレクトリへの保管</li>
                    <li>証明書保持者の身元を保証（CA が RA 役を兼ねる場合もある）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q4】 CRL とはどのような用途に使用するのか。",
        ans: `
            <span class="check-category-badge badge-isms">CRL</span>
            <div class="check-measure-box">
                <p><strong>CRL</strong>（Certificate Revocation List：証明書失効リスト）は，有効期限前に<strong>失効された</strong>デジタル証明書のシリアル番号などを CA が一覧化して公開するリストです。</p>
                <ul style="margin-top:0.75rem;">
                    <li>秘密鍵漏洩，退職，端末紛失などで証明書を無効化したことを通知</li>
                    <li>クライアントは証明書検証時に CRL を取得し，失効していないか確認</li>
                    <li>X.509（RFC 5280）で定義，CA がデジタル署名して改ざんを防止</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q5】 CRL を利用する上での注意点とは何か。",
        ans: `
            <span class="check-category-badge badge-isms">CRL の注意点</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>更新遅延</strong>：CRL は定期更新のため，失効直後は最新でない場合がある</li>
                    <li><strong>取得コスト</strong>：CRL が大きくなるとダウンロード・検索に時間がかかる</li>
                    <li><strong>可用性</strong>：CRL 配布サーバに到達できないと失効確認ができない</li>
                    <li><strong>nextUpdate の確認</strong>：CRL の有効期間内のものを使う</li>
                    <li><strong>OCSP との併用</strong>：リアルタイム確認が必要な場合は OCSP を検討</li>
                    <li>有効期限切れ証明書は CRL から削除される（失効分のみ掲載）</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q6】 OCSP レスポンダとはどのような用途に使用するのか。",
        ans: `
            <span class="check-category-badge badge-isms">OCSP</span>
            <div class="check-measure-box">
                <p><strong>OCSP</strong>（Online Certificate Status Protocol）は，特定のデジタル証明書が失効しているかを<strong>リアルタイムに問い合わせ</strong>るプロトコルです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>OCSP レスポンダ</strong>：失効状態を返答するサーバ（CA または委託先）</li>
                    <li>クライアント（OCSP クライアント）が証明書のシリアル番号等を送信</li>
                    <li>レスポンダが good／revoked／unknown などを返す</li>
                    <li>CRL 全体をダウンロードせずに済むため効率的</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q7】 デジタル署名によって何が確認できるのか。",
        ans: `
            <span class="check-category-badge badge-isms">デジタル署名</span>
            <div class="check-measure-box">
                <p>デジタル署名により，次のことが確認できます。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>完全性</strong>：署名対象データが署名後に改ざんされていない</li>
                    <li><strong>本人性（非否認性）</strong>：署名者の秘密鍵で署名されたこと（否認防止）</li>
                    <li>証明書と組み合わせれば<strong>署名者の身元</strong>も CA 経由で確認可能</li>
                </ul>
                <p style="margin-top:0.75rem;">機密性は提供しません（暗号化は別途必要）。</p>
            </div>
        `
    },
    {
        q: "【Q8】 デジタル署名の検証にデジタル証明書を使う際に留意すべき点は何か。",
        ans: `
            <span class="check-category-badge badge-isms">署名検証の留意点</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>証明書の有効期間</strong>：notBefore／notAfter 内か確認</li>
                    <li><strong>失効確認</strong>：CRL または OCSP で失効していないか</li>
                    <li><strong>信頼チェーン</strong>：中間 CA からルート CA までのパスを検証</li>
                    <li><strong>用途制限</strong>：Key Usage，Extended Key Usage が署名用途に合うか</li>
                    <li><strong>主体の一致</strong>：署名者 DN と証明書の Subject が一致するか</li>
                    <li><strong>アルゴリズムの強度</strong>：弱いハッシュ（SHA-1 等）や鍵長に注意</li>
                    <li>タイムスタンプがある場合は署名時点の有効性も考慮</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q9】 タイムスタンプとは何か。タイムスタンプによって何が保証されるのか。",
        ans: `
            <span class="check-category-badge badge-isms">タイムスタンプ</span>
            <div class="check-measure-box">
                <p><strong>タイムスタンプ</strong>（TSA：Time Stamping Authority が付与）は，特定のデータ（ハッシュ値等）が<strong>ある時刻以前に存在した</strong>ことを TSA がデジタル署名で証明する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>存在時刻の証明</strong>：いつそのデータが存在したか</li>
                    <li><strong>長期検証の支援</strong>：署名者の証明書失効後も，署名時点の有効性を示し得る</li>
                    <li>電子契約，ログ，電子保存の証拠力強化に利用</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q10】 電子文書の原本性確保及び長期保存における課題として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">長期保存の課題</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>署名・証明書の失効</strong>：保存期間中に CA やアルゴリズムが無効化される</li>
                    <li><strong>アルゴリズムの陳腐化</strong>：SHA-1，RSA 1024 などが解読可能になる</li>
                    <li><strong>フォーマットの陳腐化</strong>：旧ファイル形式が将来開けなくなる</li>
                    <li><strong>ハードウェア・媒体劣化</strong>：保存媒体の寿命</li>
                    <li><strong>改ざん検知</strong>：長期間の完全性維持</li>
                    <li>タイムスタンプ，アーカイブ署名，フォーマット変換などの対策が必要</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q11】 電子文書の長期保存に適したファイル形式として何があるか。",
        ans: `
            <span class="check-category-badge badge-isms">長期保存フォーマット</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>PDF/A</strong>：ISO 19005，アーカイブ向け PDF（埋め込みフォント，外部依存を排除）</li>
                    <li><strong>PDF/A-1／2／3</strong>：世代により埋め込み可能な形式が異なる</li>
                    <li>自己完結型で，将来も再現可能な文書保存を目的とする</li>
                    <li>XML ベースの文書＋デジタル署名（XAdES 等）も長期署名と組み合わせて利用</li>
                    <li>プロプライエタリ形式や実行可能なマクロ付き形式は避ける</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q12】 アーカイブタイムスタンプとは何か。どのような情報が含まれるのか。",
        ans: `
            <span class="check-category-badge badge-isms">アーカイブタイムスタンプ</span>
            <div class="check-measure-box">
                <p><strong>アーカイブタイムスタンプ</strong>（Archive Timestamp，RFC 3161 等）は，電子文書や署名データの<strong>長期保存・検証</strong>のために，将来の失効やアルゴリズム変更後も有効性を示せるよう設計されたタイムスタンプです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>タイムスタンプトークン</strong>：TSA による署名付き時刻情報</li>
                    <li><strong>対象データのハッシュ値</strong>（messageImprint）</li>
                    <li><strong>時刻</strong>（genTime）</li>
                    <li><strong>シリアル番号，TSA 名</strong>など</li>
                    <li>必要に応じて<strong>証明書チェーン</strong>や<strong>以前のタイムスタンプ</strong>への参照</li>
                </ul>
                <p style="margin-top:0.75rem;">電子署名（XAdES-A 等）と組み合わせ，数十年単位の保存を想定します。</p>
            </div>
        `
    }
];
