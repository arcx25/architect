export type Category =
  | "scrapers"
  | "bots"
  | "exploits"
  | "automation"
  | "ai-ml"
  | "networking"
  | "crypto"
  | "osint"

export interface Listing {
  id: string
  title: string
  description: string
  longDescription: string
  price: string
  xmrPrice: string
  category: Category
  vendor: string
  vendorId: string
  rating: number
  reviews: number
  sales: number
  created: string
  tags: string[]
  featured: boolean
}

export interface Vendor {
  id: string
  name: string
  joined: string
  sales: number
  rating: number
  reviews: number
  bio: string
  pgpKey: string
  listings: string[]
}

export const categories: { slug: Category; name: string; count: number; description: string }[] = [
  { slug: "scrapers", name: "Scrapers", count: 42, description: "Web scraping and data extraction tools" },
  { slug: "bots", name: "Bots", count: 38, description: "Automation bots for various platforms" },
  { slug: "exploits", name: "Exploits", count: 15, description: "Security research and vulnerability tools" },
  { slug: "automation", name: "Automation", count: 56, description: "Workflow and task automation scripts" },
  { slug: "ai-ml", name: "AI / ML", count: 31, description: "Machine learning models and AI utilities" },
  { slug: "networking", name: "Networking", count: 24, description: "Network analysis and packet tools" },
  { slug: "crypto", name: "Crypto", count: 19, description: "Cryptocurrency utilities and wallets" },
  { slug: "osint", name: "OSINT", count: 27, description: "Open source intelligence gathering" },
]

export const listings: Listing[] = [
  {
    id: "shadow-scraper-pro",
    title: "ShadowScraper Pro",
    description: "Advanced multi-threaded web scraper with proxy rotation, CAPTCHA solving, and stealth mode. Undetectable by Cloudflare and major WAFs.",
    longDescription: "ShadowScraper Pro is the ultimate web scraping toolkit built in Python 3.11+. Features include automatic proxy rotation from 50+ sources, integrated CAPTCHA solving via multiple providers, browser fingerprint randomization, and stealth request headers. Bypasses Cloudflare, Akamai, and PerimeterX with ease. Includes async support for massive parallelism and built-in rate limiting to avoid detection. Exports to JSON, CSV, SQLite, or direct database insertion.",
    price: "0.15",
    xmrPrice: "0.15 XMR",
    category: "scrapers",
    vendor: "ph4ntom",
    vendorId: "ph4ntom",
    rating: 4.9,
    reviews: 127,
    sales: 342,
    created: "2025-08-15",
    tags: ["proxy", "captcha", "cloudflare", "async"],
    featured: true,
  },
  {
    id: "discord-raid-toolkit",
    title: "Discord Mass DM Engine",
    description: "High-performance Discord outreach tool with token management, delay randomization, and detailed analytics dashboard.",
    longDescription: "Professional-grade Discord mass DM engine built for large-scale outreach campaigns. Features intelligent token rotation, human-like typing delays, message template randomization, and comprehensive analytics. Supports multiple accounts simultaneously with automatic token health checks. Built-in proxy support and anti-detection measures.",
    price: "0.25",
    xmrPrice: "0.25 XMR",
    category: "bots",
    vendor: "n1ghtcrawler",
    vendorId: "n1ghtcrawler",
    rating: 4.7,
    reviews: 89,
    sales: 215,
    created: "2025-09-22",
    tags: ["discord", "mass-dm", "outreach", "tokens"],
    featured: true,
  },
  {
    id: "neural-bypass",
    title: "NeuralBypass v3",
    description: "AI-powered WAF evasion framework with adaptive payload generation. Uses transformer models to craft novel bypass techniques.",
    longDescription: "NeuralBypass v3 leverages cutting-edge transformer models to generate novel WAF bypass payloads in real-time. The framework learns from failed attempts and adapts its approach automatically. Supports SQL injection, XSS, SSRF, and command injection vectors. Includes a training pipeline for custom model fine-tuning on specific target WAFs.",
    price: "0.8",
    xmrPrice: "0.80 XMR",
    category: "exploits",
    vendor: "zer0day_collective",
    vendorId: "zer0day-collective",
    rating: 4.8,
    reviews: 43,
    sales: 89,
    created: "2025-11-01",
    tags: ["ai", "waf", "bypass", "transformer"],
    featured: true,
  },
  {
    id: "autoflow-pipeline",
    title: "AutoFlow Pipeline",
    description: "Visual workflow automation engine for Python. Chain tasks, schedule jobs, handle failures gracefully with automatic retries.",
    longDescription: "AutoFlow Pipeline is a powerful workflow automation framework that lets you build complex data pipelines with a simple Python API. Features include visual DAG editor, cron-based scheduling, automatic retry with exponential backoff, webhook triggers, email/Discord notifications, and comprehensive logging. Perfect for ETL, data processing, and scheduled task management.",
    price: "0.12",
    xmrPrice: "0.12 XMR",
    category: "automation",
    vendor: "pipemaster",
    vendorId: "pipemaster",
    rating: 4.6,
    reviews: 156,
    sales: 487,
    created: "2025-07-10",
    tags: ["pipeline", "dag", "scheduler", "etl"],
    featured: false,
  },
  {
    id: "deepfake-detector",
    title: "DeepScan Detector",
    description: "State-of-the-art deepfake detection using ensemble CNN models. 99.2% accuracy on FaceForensics++ benchmark.",
    longDescription: "DeepScan Detector employs an ensemble of EfficientNet-B7 and XceptionNet models for state-of-the-art deepfake detection. Achieves 99.2% accuracy on the FaceForensics++ benchmark. Supports image and video analysis, batch processing, and real-time webcam detection. Includes pre-trained models and a fine-tuning pipeline for custom datasets.",
    price: "0.35",
    xmrPrice: "0.35 XMR",
    category: "ai-ml",
    vendor: "ml_phantom",
    vendorId: "ml-phantom",
    rating: 4.9,
    reviews: 67,
    sales: 198,
    created: "2025-10-05",
    tags: ["deepfake", "cnn", "detection", "video"],
    featured: true,
  },
  {
    id: "packet-phantom",
    title: "PacketPhantom",
    description: "Advanced packet crafting and network analysis toolkit. Custom protocol support with real-time traffic visualization.",
    longDescription: "PacketPhantom is a comprehensive network analysis toolkit featuring custom packet crafting, protocol dissection, real-time traffic visualization, and automated network mapping. Supports TCP, UDP, ICMP, and custom protocols. Includes ARP spoofing detection, DNS analysis, and bandwidth monitoring capabilities.",
    price: "0.18",
    xmrPrice: "0.18 XMR",
    category: "networking",
    vendor: "netspectre",
    vendorId: "netspectre",
    rating: 4.5,
    reviews: 92,
    sales: 156,
    created: "2025-06-20",
    tags: ["packets", "analysis", "protocol", "sniffing"],
    featured: false,
  },
  {
    id: "xmr-mixer-cli",
    title: "XMR Mixer CLI",
    description: "Command-line Monero transaction mixer with configurable delay, multi-hop routing, and Tor integration.",
    longDescription: "XMR Mixer CLI provides additional privacy layers for Monero transactions through configurable multi-hop routing, random delay injection, and automatic Tor circuit rotation. Features include stealth address generation, ring signature optimization, and detailed transaction logging with encrypted storage.",
    price: "0.5",
    xmrPrice: "0.50 XMR",
    category: "crypto",
    vendor: "crypto_wraith",
    vendorId: "crypto-wraith",
    rating: 4.7,
    reviews: 34,
    sales: 112,
    created: "2025-09-01",
    tags: ["monero", "mixer", "tor", "privacy"],
    featured: false,
  },
  {
    id: "osint-reaper",
    title: "OSINT Reaper",
    description: "All-in-one OSINT framework with 200+ modules. Username lookup, email tracing, social graph mapping, and dark web monitoring.",
    longDescription: "OSINT Reaper is a comprehensive open-source intelligence framework with over 200 collection modules. Features include cross-platform username enumeration, email-to-identity resolution, social media graph analysis, breach database querying, domain reconnaissance, and dark web monitoring. Outputs structured reports in multiple formats.",
    price: "0.3",
    xmrPrice: "0.30 XMR",
    category: "osint",
    vendor: "shadowint",
    vendorId: "shadowint",
    rating: 4.8,
    reviews: 78,
    sales: 267,
    created: "2025-08-28",
    tags: ["osint", "recon", "social", "darkweb"],
    featured: true,
  },
  {
    id: "stealth-mailer",
    title: "StealthMailer",
    description: "High-deliverability email sending engine with SMTP rotation, warmup automation, and inbox placement optimization.",
    longDescription: "StealthMailer is an advanced email infrastructure tool that maximizes inbox placement rates. Features rotating SMTP providers, automated domain warmup schedules, DKIM/SPF/DMARC configuration, email template randomization, and real-time deliverability analytics. Supports millions of sends per day across distributed infrastructure.",
    price: "0.2",
    xmrPrice: "0.20 XMR",
    category: "automation",
    vendor: "mailghost",
    vendorId: "mailghost",
    rating: 4.4,
    reviews: 112,
    sales: 389,
    created: "2025-07-30",
    tags: ["email", "smtp", "deliverability", "warmup"],
    featured: false,
  },
  {
    id: "gpt-jailbreak-kit",
    title: "GPT Jailbreak Kit",
    description: "Collection of 500+ verified jailbreak prompts with auto-rotation and success rate tracking for major LLM providers.",
    longDescription: "The GPT Jailbreak Kit contains over 500 verified jailbreak prompts organized by LLM provider and technique. Features automatic prompt rotation based on success rates, real-time testing against multiple providers, and a contribution system for community-discovered prompts. Includes bypass techniques for content filters, system prompt extraction methods, and DAN-style persona injection.",
    price: "0.1",
    xmrPrice: "0.10 XMR",
    category: "ai-ml",
    vendor: "promptbreaker",
    vendorId: "promptbreaker",
    rating: 4.3,
    reviews: 201,
    sales: 612,
    created: "2025-10-20",
    tags: ["gpt", "jailbreak", "llm", "prompts"],
    featured: false,
  },
  {
    id: "instagram-ghost",
    title: "InstaGhost Bot",
    description: "Full Instagram automation suite. Follow/unfollow, like, comment, story view, and DM automation with anti-ban measures.",
    longDescription: "InstaGhost Bot is a comprehensive Instagram automation platform with intelligent action scheduling, human-like behavior simulation, and multi-account management. Features follow/unfollow campaigns, targeted liking, AI-generated comments, story mass viewing, DM automation, and hashtag research. Built-in cooldown management and account health monitoring.",
    price: "0.22",
    xmrPrice: "0.22 XMR",
    category: "bots",
    vendor: "socialghost",
    vendorId: "socialghost",
    rating: 4.6,
    reviews: 145,
    sales: 423,
    created: "2025-09-15",
    tags: ["instagram", "automation", "social", "growth"],
    featured: false,
  },
  {
    id: "wifi-phantom",
    title: "WiFi Phantom Suite",
    description: "Wireless network auditing toolkit with deauth, evil twin AP, WPA3 cracking, and client isolation bypass modules.",
    longDescription: "WiFi Phantom Suite is an advanced wireless security auditing framework. Includes deauthentication attacks, evil twin access point creation, WPA2/WPA3 handshake capture and cracking, PMKID attacks, client isolation bypass, and rogue RADIUS server deployment. Features a modular architecture for easy extension and comprehensive reporting.",
    price: "0.4",
    xmrPrice: "0.40 XMR",
    category: "networking",
    vendor: "aircrack_dev",
    vendorId: "aircrack-dev",
    rating: 4.7,
    reviews: 56,
    sales: 134,
    created: "2025-11-10",
    tags: ["wifi", "wpa3", "deauth", "wireless"],
    featured: false,
  },
]

export const vendors: Vendor[] = [
  {
    id: "ph4ntom",
    name: "ph4ntom",
    joined: "2024-03-15",
    sales: 342,
    rating: 4.9,
    reviews: 127,
    bio: "Elite scraping specialist with 5+ years in the game. All tools come with lifetime updates and 24/7 support via encrypted channels.",
    pgpKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBGV...truncated\n-----END PGP PUBLIC KEY BLOCK-----",
    listings: ["shadow-scraper-pro"],
  },
  {
    id: "n1ghtcrawler",
    name: "n1ghtcrawler",
    joined: "2024-06-01",
    sales: 215,
    rating: 4.7,
    reviews: 89,
    bio: "Discord infrastructure expert. Building tools that scale. Escrow-only transactions. PGP-verified communications.",
    pgpKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBGV...truncated\n-----END PGP PUBLIC KEY BLOCK-----",
    listings: ["discord-raid-toolkit"],
  },
  {
    id: "zer0day-collective",
    name: "zer0day_collective",
    joined: "2024-01-20",
    sales: 89,
    rating: 4.8,
    reviews: 43,
    bio: "Security research collective. We build what others dream about. All tools for authorized penetration testing only.",
    pgpKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBGV...truncated\n-----END PGP PUBLIC KEY BLOCK-----",
    listings: ["neural-bypass"],
  },
  {
    id: "shadowint",
    name: "shadowint",
    joined: "2024-04-10",
    sales: 267,
    rating: 4.8,
    reviews: 78,
    bio: "OSINT specialist. Former intelligence analyst. Building tools for the community since 2019.",
    pgpKey: "-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBGV...truncated\n-----END PGP PUBLIC KEY BLOCK-----",
    listings: ["osint-reaper"],
  },
]

export function getListingsByCategory(cat: Category): Listing[] {
  return listings.filter((l) => l.category === cat)
}

export function getFeaturedListings(): Listing[] {
  return listings.filter((l) => l.featured)
}

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id)
}

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id)
}

export function getVendorListings(vendorId: string): Listing[] {
  return listings.filter((l) => l.vendorId === vendorId)
}

export function searchListings(query: string): Listing[] {
  const q = query.toLowerCase()
  return listings.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.tags.some((t) => t.includes(q))
  )
}
