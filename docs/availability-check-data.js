// Check! 可用性（RAID／クラスタ）3問
const checkAvailabilityData = [
    {
        q: "【Q1】 可用性を向上させる対策にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">可用性（Availability）の向上</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>冗長化</strong>：サーバ／回線／電源などを二重化し単一障害点をなくす</li>
                    <li><strong>負荷分散</strong>：複数台で処理を分散し、処理能力不足を抑える</li>
                    <li><strong>クラスタリング</strong>／<strong>フェイルオーバ</strong>：障害時に別ノードへ切替</li>
                    <li><strong>バックアップ・DR</strong>：データ損失や広域障害に備え復旧手順を用意</li>
                    <li><strong>運用監視</strong>：死活監視・ログ監視・自動復旧による停止時間の短縮</li>
                </ul>
            </div>
        `
    },
    {
        q: "【Q2】 RAID にはどのような種類があるか。",
        ans: `
            <span class="check-category-badge badge-isms">RAID の種類</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>RAID0（ストライピング）</h4>
                    <ul>
                        <li>高速化：複数ディスクに分散して読み書き</li>
                        <li>冗長性なし：1 台でも故障すると全体が失われやすい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>RAID1（ミラーリング）</h4>
                    <ul>
                        <li>冗長化：同じデータを複数ディスクに複製</li>
                        <li>耐障害性が高い（読み取り性能も向上しうる）</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>RAID5（パリティ分散）</h4>
                    <ul>
                        <li>パリティ情報を分散して冗長化</li>
                        <li>ディスク故障に耐えるが、書き込み性能は低下しやすい</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>RAID6（ダブルパリティ）</h4>
                    <ul>
                        <li>パリティを二重化し、より高い耐障害性</li>
                        <li>ディスク容量効率は RAID5 より低め</li>
                    </ul>
                </div>
                <div class="check-measure-box" style="grid-column:1/-1;">
                    <h4>RAID10（ミラー＋ストライピング）</h4>
                    <ul>
                        <li>高速化と冗長性を両立しやすい構成</li>
                        <li>必要ディスク数が多くなりがち</li>
                    </ul>
                </div>
            </div>
        `
    },
    {
        q: "【Q3】 クラスタリングシステムとはどのようなシステムか。",
        ans: `
            <span class="check-category-badge badge-isms">クラスタリング</span>
            <div class="check-measure-box">
                <p><strong>クラスタリング（clustering）</strong>とは、複数台の計算機（ノード）を連携させ、<strong>障害に耐えてサービスを継続</strong>する仕組みです。</p>
                <ul style="margin-top:0.75rem;">
                    <li><strong>Active-Active</strong>：複数ノードが同時に処理</li>
                    <li><strong>Active-Standby</strong>：待機ノードが障害時に引き継ぐ</li>
                    <li>障害検知と切替のために<strong>ハートビート</strong>等を用いる</li>
                    <li>共有ストレージ（共有ディスク）またはレプリケーションによりデータ整合を確保する</li>
                </ul>
                <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">可用性向上には、切替の速さ（RTO）と、失われにくさ（RPO）を意識するのがポイントです。</p>
            </div>
        `
    }
];

