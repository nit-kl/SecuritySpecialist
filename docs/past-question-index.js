// 過去問一覧（すべてシミュレーター 43問）
const pastQuestionIndex = [
    // --- DoS/DDoS (9) ---
    { no: 1,  format: 'simulator', category: 'dos',     key: 'ntp',         source: 'R6秋 午前II問4',   title: 'NTPリフレクション' },
    { no: 2,  format: 'simulator', category: 'dos',     key: 'smurf',       source: 'R6秋 午前II問6',   title: 'Smurf攻撃' },
    { no: 3,  format: 'simulator', category: 'dos',     key: 'mirai',       source: 'R7春 午前II問7',   title: 'マルウェア Mirai' },
    { no: 4,  format: 'simulator', category: 'dos',     key: 'icmp',        source: 'H29春 午前II問18', title: 'ICMP Flood攻撃' },
    { no: 5,  format: 'simulator', category: 'dos',     key: 'synack',      source: 'R6春 午前II問5',   title: 'SYN/ACK大量観測' },
    { no: 6,  format: 'simulator', category: 'dos',     key: 'multivector', source: 'R元秋 午前II問13', title: 'マルチベクトル型 DDoS' },
    { no: 7,  format: 'simulator', category: 'dos',     key: 'services',    source: 'R3春 午前II問1',   title: '悪用されるサービス' },
    { no: 8,  format: 'simulator', category: 'dos',     key: 'notice',      source: 'R5秋 午前II問10',  title: 'IoT調査 "NOTICE"' },
    { no: 9,  format: 'simulator', category: 'dos',     key: 'drdos',       source: 'R7春 午前II問1',   title: 'DRDoS攻撃の定義' },
    // --- Web (7) ---
    { no: 10, format: 'simulator', category: 'web',     key: 'clickjack',   source: 'R6秋 午前II問14',  title: 'クリックジャッキング' },
    { no: 11, format: 'simulator', category: 'web',     key: 'oscmd',       source: 'R5秋 午前II問1',   title: 'OSコマンドインジェクション' },
    { no: 12, format: 'simulator', category: 'web',     key: 'sqlicounter', source: 'R5春 午前II問17',  title: 'SQLi対策の組合せ' },
    { no: 13, format: 'simulator', category: 'web',     key: 'attackpair',  source: 'R3春 午前II問12',  title: '攻撃と対策の組合せ' },
    { no: 14, format: 'simulator', category: 'web',     key: 'dirtraversal',source: 'H27春 午前I問15',  title: 'ディレクトリトラバーサル' },
    { no: 15, format: 'simulator', category: 'web',     key: 'oscmdlog',    source: 'R4春 午前II問1',   title: 'CGIログ解析（OSコマンド）' },
    { no: 58, format: 'simulator', category: 'web',     key: 'csrf',        source: 'R6春 午前II問1',   title: 'CSRF 対策' },
    // --- マルウェア・高度脅威 (7) ---
    { no: 16, format: 'simulator', category: 'malware', key: 'ioc',         source: 'R7春 午前II問13',  title: 'IoC（侵害指標）' },
    { no: 17, format: 'simulator', category: 'malware', key: 'connectback', source: 'R7春 午前II問8',   title: 'コネクトバック' },
    { no: 18, format: 'simulator', category: 'malware', key: 'downloader',  source: 'H30春 午前II問14', title: 'ダウンローダ対策' },
    { no: 19, format: 'simulator', category: 'malware', key: 'behavior',    source: 'R3春 午前II問13',  title: 'ビヘイビア法' },
    { no: 20, format: 'simulator', category: 'malware', key: 'cryptojack',  source: 'R7春 午前II問5',   title: 'クリプトジャッキング' },
    { no: 21, format: 'simulator', category: 'malware', key: 'mitb',        source: 'R5秋 午前II問7',   title: 'MITB・トランザクション署名' },
    { no: 36, format: 'simulator', category: 'malware', key: 'rootkit',     source: 'R3秋 午前II問14',  title: 'ルートキット' },
    // --- 基礎・管理 (1) ---
    { no: 22, format: 'simulator', category: 'fundamentals', key: 'failsafe', source: 'H31春 高度共通 午前I問16', title: 'フェールセーフ' },
    // --- ネットワーク (6) ---
    { no: 23, format: 'simulator', category: 'network', key: 'vlan',       source: 'H31春 午前II問12', title: 'VLANのセキュリティ効果' },
    { no: 24, format: 'simulator', category: 'network', key: 'cookie',     source: 'R3秋 午前II問10',  title: 'Cookie Secure属性' },
    { no: 25, format: 'simulator', category: 'network', key: 'cache',      source: 'R6春 午前II問20',  title: 'Cache-Control' },
    { no: 26, format: 'simulator', category: 'network', key: 'caa',        source: 'R6春 午前II問15',  title: 'DNS CAAレコード' },
    { no: 27, format: 'simulator', category: 'network', key: 'tcpheader',  source: 'R6春 午前II問18',  title: 'TCPヘッダ項目' },
    { no: 28, format: 'simulator', category: 'network', key: 'handshake',  source: 'H30秋 午前II問18', title: '3ウェイハンドシェイク' },
    // --- クラウド・VDI (3) ---
    { no: 29, format: 'simulator', category: 'cloud', key: 'ismap', source: 'R7春 午前II問11', title: 'ISMAP' },
    { no: 30, format: 'simulator', category: 'cloud', key: 'paas',  source: 'R4春 午前II問12', title: 'PaaS責務分担' },
    { no: 31, format: 'simulator', category: 'cloud', key: 'vdi',   source: 'R3春 午前II問16', title: 'VDI安全Web閲覧' },
    // --- ゼロトラスト (1) ---
    { no: 32, format: 'simulator', category: 'zerotrust', key: 'casb', source: 'R6春 午前II問11', title: 'CASB' },
    // --- 脅威・キルチェーン (2) ---
    { no: 33, format: 'simulator', category: 'threat', key: 'attck',     source: 'R6秋 午前II問3', title: 'MITRE ATT&CK' },
    { no: 34, format: 'simulator', category: 'threat', key: 'killchain', source: 'R4春 午前II問5', title: 'サイバーキルチェーン' },
    // --- BOF (1) ---
    { no: 35, format: 'simulator', category: 'bof', key: 'bofstack', source: 'H24秋 高度共通 午前I問3', title: 'スタック領域' },
    // --- 脆弱性 (4) ---
    { no: 44, format: 'simulator', category: 'vuln', key: 'cwe',    source: 'R6春 午前II問9',  title: 'CWE（共通弱点一覧）' },
    { no: 45, format: 'simulator', category: 'vuln', key: 'scap',   source: 'R5秋 午前II問12', title: 'SCAP（脆弱性管理自動化）' },
    { no: 46, format: 'simulator', category: 'vuln', key: 'exploit', source: 'R2秋 午前II問3',  title: 'エクスプロイトコード' },
    { no: 47, format: 'simulator', category: 'vuln', key: 'sbom',   source: 'R6春 午前II問17', title: 'SBOM' },
    // --- パスワード (2) ---
    { no: 37, format: 'simulator', category: 'password', key: 'pth',   source: 'R5春 午前II問14', title: 'Pass the Hash' },
    { no: 38, format: 'simulator', category: 'password', key: 'spray', source: 'R4秋 午前II問14', title: 'パスワードスプレー攻撃' },
    // --- セッション (1) ---
    { no: 39, format: 'simulator', category: 'session', key: 'mitm', source: 'H22春 午前II問13', title: '中間者攻撃（MITM）' },
    // --- DNS (5) ---
    { no: 40, format: 'simulator', category: 'dns', key: 'dnspoison',   source: 'H31春 午前II問11', title: 'DNSキャッシュポイズニング対策' },
    { no: 41, format: 'simulator', category: 'dns', key: 'dnswater',    source: 'H29春 午前II問6',  title: 'DNSウォータートーチャ' },
    { no: 42, format: 'simulator', category: 'dns', key: 'dnsdmz',      source: 'H25春 午前II問12', title: 'DMZ共用DNSとポイズニング' },
    { no: 43, format: 'simulator', category: 'dns', key: 'dnskaminsky', source: 'R7春 午前II問4',   title: 'Kaminsky攻撃対策' },
    { no: 57, format: 'simulator', category: 'dns', key: 'dnssec',      source: 'R5秋 午前II問13',  title: 'DNSSEC 署名検証' },
    { no: 48, format: 'simulator', category: 'network', key: 'dhcparp', source: 'R5秋 午前II問20', title: 'DHCPとARP（アドレス競合確認）' },
    // --- メールセキュリティ (8) ---
    { no: 49, format: 'simulator', category: 'mail', key: 'spf', source: 'R4秋 午前II問15', title: 'SPF ドメイン認証' },
    { no: 50, format: 'simulator', category: 'mail', key: 'ip25b', source: 'R2秋 午前II問17', title: 'IP25B' },
    { no: 51, format: 'simulator', category: 'mail', key: 'dkim', source: 'R5春 午前II問15', title: 'DKIM' },
    { no: 52, format: 'simulator', category: 'mail', key: 'imaps', source: 'R5秋 午前II問16', title: 'IMAPS 暗号化受信' },
    { no: 53, format: 'simulator', category: 'mail', key: 'op25b', source: 'R7春 午前II問17', title: 'OP25B' },
    { no: 54, format: 'simulator', category: 'mail', key: 'submission587', source: 'R6春 午前II問19', title: 'Submission ポート 587' },
    { no: 55, format: 'simulator', category: 'mail', key: 'smtpauth', source: 'R4秋 午前II問14', title: 'SMTP-AUTH' },
    { no: 56, format: 'simulator', category: 'mail', key: 'dmarc', source: 'R6秋 午前II問10', title: 'DMARC' }
];

const pastQuestionCategoryLabels = {
    all: 'すべて',
    dos: 'DoS/DDoS',
    web: 'Web脆弱性',
    malware: 'マルウェア・脅威',
    fundamentals: '基礎・管理',
    network: 'ネットワーク',
    mail: 'メールセキュリティ',
    cloud: 'クラウド・VDI',
    zerotrust: 'ゼロトラスト',
    threat: '脅威・キルチェーン',
    bof: 'BOF',
    vuln: '脆弱性',
    password: 'パスワード',
    session: 'セッション',
    dns: 'DNS'
};
