// Check! 人的セキュリティ 3問
const checkHumanSecData = [
    {
        q: "【Q1】 内部犯罪を防ぐ上で有効な人的セキュリティ対策は何か。",
        ans: `
            <span class="check-category-badge badge-isms">内部犯罪対策</span>
            <div class="check-grid-2">
                <div class="check-measure-box">
                    <h4>組織・権限</h4>
                    <ul>
                        <li><strong>職務の分離</strong>・相互牽制（一人に権限を集中させない）</li>
                        <li><strong>最小権限の原則</strong>に基づくアクセス権付与</li>
                        <li>重要業務の<strong>複数人承認</strong>・ダブルチェック</li>
                        <li><strong>強制休暇</strong>・ジョブローテーション（不正の隠蔽防止）</li>
                    </ul>
                </div>
                <div class="check-measure-box">
                    <h4>人事・契約・監視</h4>
                    <ul>
                        <li>採用時の<strong>身元確認</strong>・経歴確認</li>
                        <li><strong>秘密保持契約</strong>（NDA）の締結</li>
                        <li>退職・異動時の<strong>権限剥奪</strong>・資産返却</li>
                        <li>ポリシ違反に対する<strong>懲戒規定</strong>の明示</li>
                        <li>操作ログの<strong>監視・監査</strong></li>
                    </ul>
                </div>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">技術的対策だけでは防げないため，<strong>人の意識・行動・組織設計</strong>を組み合わせることが重要です。</p>
        `
    },
    {
        q: "【Q2】 教育・訓練の計画及び実施における要点を述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">教育・訓練</span>
            <div class="check-measure-box">
                <ul>
                    <li><strong>対象者・役割</strong>に応じた内容設計（経営層，一般社員，管理者，開発者など）</li>
                    <li>入社時・異動時・定期（年次）など<strong>タイミング</strong>を計画に組み込む</li>
                    <li>ポリシ・規程の周知，脅威事例，インシデント対応など<strong>実務に直結</strong>した内容</li>
                    <li>座学に加え，フィッシング訓練・机上演習など<strong>実践的訓練</strong>を実施</li>
                    <li>受講状況・理解度の<strong>記録・効果測定</strong>と未受講者へのフォロー</li>
                    <li>結果を踏まえた<strong>計画の見直し</strong>（PDCA）</li>
                    <li>経営層の<strong>関与・メッセージ</strong>による組織全体への浸透</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">一度きりで終わらせず，<strong>継続的</strong>に実施し，行動変容につなげることが要点です。</p>
        `
    },
    {
        q: "【Q3】 委託先の管理における要点を述べよ。",
        ans: `
            <span class="check-category-badge badge-isms">委託先管理</span>
            <div class="check-measure-box">
                <ul>
                    <li>委託先選定時の<strong>セキュリティ評価</strong>（体制，認証，実績）</li>
                    <li>契約への<strong>セキュリティ要件</strong>・秘密保持・インシデント報告義務の明記</li>
                    <li>委託業務に必要な範囲に限定した<strong>アクセス権限</strong>の付与</li>
                    <li>定期的な<strong>監査・モニタリング</strong>（報告書確認，現地確認）</li>
                    <li><strong>再委託</strong>の可否・条件の明確化と管理</li>
                    <li>委託終了時の情報・媒体の<strong>返却・消去</strong>と権限削除</li>
                    <li>SLA・責任分界の明確化，違反時の<strong>是正・契約解除</strong>条項</li>
                </ul>
            </div>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-top:1rem;">委託しても責任は委託元に残るため，<strong>選定〜契約〜運用〜終了</strong>まで一貫して管理します。</p>
        `
    }
];
