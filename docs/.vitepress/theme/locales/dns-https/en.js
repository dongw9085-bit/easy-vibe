export default {
  resolution: {
    title: '🔍 DNS Resolution Simulator',
    placeholder: 'Enter a domain, such as www.example.com',
    resolving: 'Resolving...',
    start: 'Start resolution',
    reset: 'Reset',
    completed: '✅ Resolution complete',
    totalTime: 'Total time: about {time}ms (simulated)',
    infoPrefix: 'Resolution flow:',
    infoText:
      'When the browser visits a website, it first translates the domain name into an IP address. This process checks multiple caches and servers until the matching IP is found.',
    foundRecord: 'Record found! IP = {ip}',
    steps: [
      {
        icon: '🌐',
        label: 'Browser cache',
        result: 'Miss, continue querying...'
      },
      { icon: '💻', label: 'OS cache', result: 'Miss, continue querying...' },
      {
        icon: '🔄',
        label: 'Recursive resolver',
        result: 'Querying the root server...'
      },
      {
        icon: '🌍',
        label: 'Root name server',
        result: 'Returns the .com TLD server address'
      },
      {
        icon: '📂',
        label: 'TLD server',
        result: 'Returns the authoritative server address'
      },
      { icon: '🏠', label: 'Authoritative DNS server', result: '' }
    ]
  },
  records: {
    title: '📋 DNS Record Type Cheatsheet',
    exampleTitle: 'Example record',
    usageTitle: 'Common uses',
    tipPrefix: 'Tip:',
    tipText:
      'DNS does more than translate domains into IP addresses. It also supports mail routing, domain verification, load balancing, and other features through different record types.',
    items: [
      {
        type: 'A',
        name: 'Address record',
        desc: 'Maps a domain name to an IPv4 address. This is the most common DNS record type and is ultimately what browsers need when visiting a site.',
        example: 'example.com.  IN  A  93.184.216.34',
        usages: [
          'Point a website domain to a server IP',
          'Point subdomains to different servers',
          'Return multiple IPs for load balancing'
        ]
      },
      {
        type: 'AAAA',
        name: 'IPv6 Address record',
        desc: 'Maps a domain name to an IPv6 address. As IPv4 addresses run out, AAAA records become increasingly important.',
        example: 'example.com.  IN  AAAA  2606:2800:220:1:248:1893:25c8:1946',
        usages: [
          'Support devices on IPv6 networks',
          'Dual-stack deployment with A and AAAA records',
          'Prepare for future network architecture'
        ]
      },
      {
        type: 'CNAME',
        name: 'Canonical Name record',
        desc: 'Points one domain name to another domain name as an alias. The browser continues resolving the target until it finds an A record.',
        example: 'www.example.com.  IN  CNAME  example.com.',
        usages: [
          'Point www to the root domain',
          'Use a CDN provider domain',
          'Point multiple domains to the same service'
        ]
      },
      {
        type: 'MX',
        name: 'Mail Exchange record',
        desc: 'Specifies the mail servers and priorities responsible for receiving email for the domain. Lower numbers have higher priority.',
        example: 'example.com.  IN  MX  10 mail.example.com.',
        usages: [
          'Configure business email such as Gmail or Outlook',
          'Set mail server priority',
          'Provide mail backup and disaster recovery'
        ]
      },
      {
        type: 'TXT',
        name: 'Text record',
        desc: 'Stores arbitrary text. Commonly used for domain ownership verification and mail security policies such as SPF, DKIM, and DMARC.',
        example: 'example.com.  IN  TXT  "v=spf1 include:_spf.google.com ~all"',
        usages: [
          'Prevent email spoofing with SPF',
          'Verify domain ownership for SSL certificates',
          'Confirm ownership for third-party services'
        ]
      },
      {
        type: 'NS',
        name: 'Name Server record',
        desc: 'Specifies which DNS servers are responsible for resolving the domain. This is the core of DNS delegation.',
        example: 'example.com.  IN  NS  ns1.exampledns.com.',
        usages: [
          'Host a domain with a DNS provider',
          'Delegate subdomains to different teams',
          'Migrate DNS service'
        ]
      }
    ]
  },
  comparison: {
    title: '🔐 HTTP vs HTTPS Data Transfer',
    httpMode: 'HTTP (plaintext)',
    httpsMode: 'HTTPS (encrypted)',
    sending: 'Transmitting...',
    send: 'Send data',
    browser: 'Browser',
    server: 'Server',
    originalDataTitle: 'Original data',
    receivedDataTitle: 'Received data',
    plainTransmission: '🔓 Plaintext transfer',
    encryptedTransmission: '🔒 Encrypted transfer',
    hackerPlain: 'A man-in-the-middle can eavesdrop',
    hackerEncrypted: 'A man-in-the-middle cannot decrypt it',
    encryptedData: 'a7f2c9...3b8e1d (ciphertext)',
    headers: ['Item', 'HTTP', 'HTTPS'],
    rows: [
      { label: 'Port', http: '80', https: '443' },
      {
        label: 'Data encryption',
        http: 'None (plaintext)',
        https: 'TLS symmetric encryption'
      },
      {
        label: 'Identity verification',
        http: 'None',
        https: 'CA certificate verifies server identity'
      },
      {
        label: 'Data integrity',
        http: 'No guarantee',
        https: 'MAC check prevents tampering'
      },
      {
        label: 'SEO impact',
        http: 'Search engines may rank it lower',
        https: 'Preferred by search engines'
      },
      {
        label: 'Performance cost',
        http: 'No extra overhead',
        https: 'TLS handshake adds about 1-2 RTT'
      }
    ]
  },
  handshake: {
    title: '🤝 TLS Handshake Demo',
    running: 'Handshake running...',
    start: 'Start TLS handshake',
    reset: 'Reset',
    client: 'Client (browser)',
    server: 'Server',
    success:
      '✅ TLS handshake complete. All following HTTP data is transferred with symmetric encryption, so third parties cannot eavesdrop.',
    messages: [
      {
        name: 'Client Hello',
        direction: 'right',
        desc: 'Send supported TLS versions, cipher suites, and random number',
        detail:
          'The browser starts the connection and tells the server which TLS versions it supports, such as TLS 1.3, which cipher suites are available, such as AES-256-GCM, and a client random value. It is like saying: "I support these encryption methods; please choose one."'
      },
      {
        name: 'Server Hello',
        direction: 'left',
        desc: 'Choose TLS version, cipher suite, and server random number',
        detail:
          'The server chooses the best cipher suite from the client list and returns its own server random value. It is like replying: "Good, we will use TLS 1.3 plus AES-256-GCM."'
      },
      {
        name: 'Certificate',
        direction: 'left',
        desc: 'Server sends its digital certificate with public key',
        detail:
          'The server sends its digital certificate to the browser. The certificate contains the server public key, domain information, and CA signature. The browser checks whether the certificate was issued by a trusted CA, whether it is expired, and whether the domain matches.'
      },
      {
        name: 'Key Exchange',
        direction: 'right',
        desc: 'Both sides negotiate and generate a session key',
        detail:
          'In TLS 1.3, the client and server exchange key material with ECDHE. Both sides generate temporary key pairs, exchange public keys, independently compute the same premaster secret, then combine it with the random values to derive the final symmetric session key.'
      },
      {
        name: 'Finished',
        direction: 'right',
        desc: 'Both sides confirm the handshake and start encrypted communication',
        detail:
          'Both sides send Finished messages containing a digest of all previous handshake messages encrypted with the negotiated key. If the peer can decrypt and verify it, key negotiation succeeded and all following data uses symmetric encryption.'
      }
    ]
  },
  certificate: {
    title: '🔗 Certificate Trust Chain',
    intro:
      'Click each certificate layer to inspect its details and role in the trust chain.',
    issuedBy: 'issues',
    verifyTitle: '🔍 Browser Verification Flow',
    certs: [
      {
        icon: '🏛️',
        title: 'Root Certificate (Root CA)',
        subtitle: 'Starting point of trust',
        color: '#c62828',
        explain:
          'The root certificate is the anchor of the whole trust chain. It is self-signed by a root certificate authority and preinstalled in operating systems and browsers. Only a small number of root CAs exist globally, protected by strict audits and physical security. Root CA private keys are usually stored offline in hardware security modules.',
        details: [
          { label: 'Issuer', value: 'DigiCert Global Root G2 (self-signed)' },
          { label: 'Validity', value: '25 years (2013 - 2038)' },
          { label: 'Key length', value: 'RSA 2048-bit' },
          { label: 'Storage', value: 'OS/browser built-in trust store' },
          {
            label: 'Scale',
            value: 'About 150 trusted root certificates globally'
          }
        ]
      },
      {
        icon: '🏢',
        title: 'Intermediate Certificate (Intermediate CA)',
        subtitle: 'Bridge of trust',
        color: '#e65100',
        explain:
          'The intermediate certificate is issued by the root CA and bridges the root certificate and server certificate. This layered design means that if an intermediate certificate leaks, it can be revoked without affecting the root certificate. Intermediate CAs handle daily certificate issuance so root CA private keys can remain offline.',
        details: [
          { label: 'Issuer', value: 'DigiCert Global Root G2' },
          {
            label: 'Subject',
            value: 'DigiCert SHA2 Extended Validation Server CA'
          },
          { label: 'Validity', value: '10 years' },
          { label: 'Purpose', value: 'Issue end-entity server certificates' },
          { label: 'Revocable', value: 'Yes, through CRL or OCSP' }
        ]
      },
      {
        icon: '🌐',
        title: 'Server Certificate',
        subtitle: 'Website identity card',
        color: '#1565c0',
        explain:
          'The server certificate is how a website proves its identity to the browser. It is issued by an intermediate CA and includes the website domain, public key, and validity period. After receiving it, the browser verifies upward along the trust chain until it reaches a trusted root certificate.',
        details: [
          {
            label: 'Issuer',
            value: 'DigiCert SHA2 Extended Validation Server CA'
          },
          { label: 'Subject', value: 'www.example.com' },
          { label: 'Validity', value: '1 year (industry standard)' },
          { label: 'Public key', value: 'ECDSA P-256 public key' },
          {
            label: 'Validation level',
            value: 'EV (Extended Validation) / DV (Domain Validation)'
          }
        ]
      }
    ],
    verifySteps: [
      'Browser receives the server certificate and reads issuer information.',
      'It finds the intermediate certificate and verifies the server certificate signature with the intermediate CA public key.',
      'It then verifies the intermediate certificate signature with the root CA public key.',
      'It confirms the root certificate exists in the local trust store, so the whole chain is valid.'
    ]
  }
}
