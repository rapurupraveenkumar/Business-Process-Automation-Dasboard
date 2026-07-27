export const INITIAL_BOTS = [
  {
    id: "BOT-101",
    name: "SAP Invoice Sync & OCR Extractor",
    department: "Finance",
    type: "Python RPA",
    status: "running",
    lastRunTime: "2 mins ago",
    avgDuration: "42s",
    successRate: 99.4,
    executionCount: 1420,
    hoursSavedPerWeek: 38,
    estMonthlyCostSavings: 4200,
    assignedOwner: "Sarah Jenkins (Finance Ops)",
    scheduleCron: "*/15 * * * *",
    description: "Monitors vendor invoice inbox, performs ABBYY FineReader OCR, validates line items, and posts entries to SAP S/4HANA.",
    pipeline: [
      { id: "p1", name: "Email Watcher", status: "completed", time: "1.2s" },
      { id: "p2", name: "OCR PDF Extraction", status: "running", time: "18.4s" },
      { id: "p3", name: "GL Code Matcher", status: "pending", time: "0.0s" },
      { id: "p4", name: "SAP API Endpoint Sync", status: "pending", time: "0.0s" }
    ],
    logs: [
      { time: "09:18:02", level: "INFO", message: "[BOT-101] Triggered by Inbox Watcher Service v2.4" },
      { time: "09:18:04", level: "INFO", message: "Fetching incoming attachments: 14 PDFs downloaded." },
      { time: "09:18:12", level: "INFO", message: "Processing Invoice #INV-88391 with Tesseract OCR engine." },
      { time: "09:18:25", level: "SUCCESS", message: "Extracted line items total: $48,250.00 USD. Confidence: 99.8%" },
      { time: "09:18:31", level: "INFO", message: "Executing GL Code alignment ruleset #FIN-RULES-2026..." }
    ]
  },
  {
    id: "BOT-102",
    name: "Employee Onboarding Provisioner",
    department: "HR & IT",
    type: "PowerShell & Workday API",
    status: "idle",
    lastRunTime: "45 mins ago",
    avgDuration: "3m 15s",
    successRate: 98.2,
    executionCount: 380,
    hoursSavedPerWeek: 24,
    estMonthlyCostSavings: 2800,
    assignedOwner: "David Chen (IT Systems)",
    scheduleCron: "0 8 * * 1-5",
    description: "Reads new hire payloads from Workday, generates Active Directory accounts, provisions Google Workspace emails, and sends welcome kits.",
    pipeline: [
      { id: "p1", name: "Workday Webhook", status: "completed", time: "0.8s" },
      { id: "p2", name: "Azure AD Account Gen", status: "completed", time: "45.0s" },
      { id: "p3", name: "Google Workspace Provision", status: "completed", time: "22.1s" },
      { id: "p4", name: "Slack / Email Welcome Package", status: "completed", time: "4.2s" }
    ],
    logs: [
      { time: "08:30:00", level: "INFO", message: "[BOT-102] Scheduled execution started." },
      { time: "08:30:15", level: "INFO", message: "Querying Workday HCM API for hires starting 2026-07-28." },
      { time: "08:31:02", level: "INFO", message: "Provisioning AD User: j.doe@company.com with RBAC policy HR-STANDARD." },
      { time: "08:32:45", level: "SUCCESS", message: "Completed provisioning for 3 new team members. Notification dispatched." }
    ]
  },
  {
    id: "BOT-103",
    name: "Customer Refund Audit Bot",
    department: "Customer Service",
    type: "Node.js Microservice",
    status: "failed",
    lastRunTime: "12 mins ago",
    avgDuration: "1m 10s",
    successRate: 91.5,
    executionCount: 890,
    hoursSavedPerWeek: 18,
    estMonthlyCostSavings: 1950,
    assignedOwner: "Alex Rivera (CustOps)",
    scheduleCron: "0 */2 * * *",
    description: "Audits Zendesk refund requests against Stripe payment logs to detect duplication or high-value anomaly flags before automated release.",
    errorDetails: {
      errorCode: "ERR_STRIPE_RATE_LIMIT_429",
      message: "Stripe API HTTP 429: Too Many Requests. Rate limit exceeded for key pk_live_...",
      failingStep: "Stripe Payment History Lookup",
      stackTrace: "ApiRateLimitError: Rate limit exceeded\n  at StripeResource._request (node_modules/stripe/lib/StripeResource.js:214:15)\n  at processTicksAndRejections (node:internal/process/task_queues:95:5)\n  at async AuditEngine.verifyTransaction (src/services/audit.js:88:12)"
    },
    pipeline: [
      { id: "p1", name: "Zendesk Queue Fetch", status: "completed", time: "3.5s" },
      { id: "p2", name: "Stripe Payment Lookup", status: "failed", time: "0.2s" },
      { id: "p3", name: "Anomaly Scoring Model", status: "pending", time: "0.0s" },
      { id: "p4", name: "Auto-Approve / Flag Escalate", status: "pending", time: "0.0s" }
    ],
    logs: [
      { time: "09:05:00", level: "INFO", message: "[BOT-103] Initializing Customer Refund Verification Job." },
      { time: "09:05:04", level: "INFO", message: "Retrieved 18 pending refund tickets from Zendesk API." },
      { time: "09:05:06", level: "ERROR", message: "API Call Failed: HTTP 429 Rate Limit exceeded on Stripe API endpoint /v1/charges/ch_3M9x..." },
      { time: "09:05:06", level: "FATAL", message: "Script execution halted due to unhandled API Throttling Exception." }
    ]
  },
  {
    id: "BOT-104",
    name: "Daily Inventory & ERP Reorder Pipeline",
    department: "Supply Chain",
    type: "ETL Pipeline",
    status: "running",
    lastRunTime: "Just now",
    avgDuration: "5m 40s",
    successRate: 99.8,
    executionCount: 410,
    hoursSavedPerWeek: 45,
    estMonthlyCostSavings: 5600,
    assignedOwner: "Marcus Vance (Logistics)",
    scheduleCron: "0 4 * * *",
    description: "Calculates safety stock levels across 12 regional distribution hubs and auto-generates Purchase Orders when threshold drops below safety index.",
    pipeline: [
      { id: "p1", name: "WMS Inventory Query", status: "completed", time: "1m 12s" },
      { id: "p2", name: "Demand Forecast ML Model", status: "running", time: "2m 04s" },
      { id: "p3", name: "PO Safety Stock Rules", status: "pending", time: "0s" },
      { id: "p4", name: "Supplier EDI Transmitter", status: "pending", time: "0s" }
    ],
    logs: [
      { time: "09:15:00", level: "INFO", message: "[BOT-104] Connecting to PostgreSQL Warehouse Cluster..." },
      { time: "09:16:12", level: "INFO", message: "Analyzed 14,200 SKU stock indices across North America." },
      { time: "09:17:05", level: "INFO", message: "Running Predictive Lead Time Model (XGBoost v1.8)..." }
    ]
  },
  {
    id: "BOT-105",
    name: "Social Sentiment & Lead Scraper",
    department: "Marketing",
    type: "Python Web Scraper",
    status: "paused",
    lastRunTime: "3 hours ago",
    avgDuration: "8m 20s",
    successRate: 96.0,
    executionCount: 150,
    hoursSavedPerWeek: 15,
    estMonthlyCostSavings: 1400,
    assignedOwner: "Elena Rostova (Growth)",
    scheduleCron: "0 */6 * * *",
    description: "Extracts brand mentions across X (Twitter), LinkedIn, and Reddit, performs NLP sentiment tagging, and posts high-intent leads to HubSpot CRM.",
    pipeline: [
      { id: "p1", name: "API Rate Check", status: "completed", time: "2.1s" },
      { id: "p2", name: "Social Stream Ingestion", status: "completed", time: "4m 10s" },
      { id: "p3", name: "NLP Sentiment Analyzer", status: "completed", time: "3m 40s" },
      { id: "p4", name: "HubSpot CRM Push", status: "completed", time: "25.0s" }
    ],
    logs: [
      { time: "06:00:00", level: "INFO", message: "[BOT-105] Scheduled morning scrape cycle started." },
      { time: "06:04:10", level: "INFO", message: "Ingested 3,400 raw social mentions." },
      { time: "06:08:15", level: "SUCCESS", message: "Identified 42 high-intent SQL leads. Dispatched to Sales SDR queue." },
      { time: "06:15:00", level: "WARN", message: "Script manually paused by operator Elena Rostova for campaign maintenance." }
    ]
  },
  {
    id: "BOT-106",
    name: "Database Backup & Encryption Sanitizer",
    department: "IT",
    type: "Bash / AWS CLI",
    status: "scheduled",
    lastRunTime: "1 day ago",
    avgDuration: "12m 45s",
    successRate: 100.0,
    executionCount: 730,
    hoursSavedPerWeek: 30,
    estMonthlyCostSavings: 3800,
    assignedOwner: "DevOps Automated Worker",
    scheduleCron: "0 2 * * *",
    description: "Performs hourly incremental and daily full database snapshots, encrypts with AES-256 keys, and syncs to AWS S3 Glacier immutable storage.",
    pipeline: [
      { id: "p1", name: "PG Dump Compression", status: "pending", time: "0s" },
      { id: "p2", name: "KMS KMS AES-256 Encryption", status: "pending", time: "0s" },
      { id: "p3", name: "S3 Glacier Transfer", status: "pending", time: "0s" },
      { id: "p4", name: "Checksum Verification", status: "pending", time: "0s" }
    ],
    logs: [
      { time: "Yesterday 02:00", level: "INFO", message: "[BOT-106] Daily Snapshot Cron Triggered." },
      { time: "Yesterday 02:12", level: "SUCCESS", message: "Successfully synced 480 GB snapshot to s3://prod-backups-vault-us-east-1/" }
    ]
  }
];

export const SYSTEM_METRICS = {
  activeBots: 4,
  totalBots: 6,
  successRateOverall: 97.4,
  totalHoursSavedMonthly: 608,
  totalCostSavedMonthly: 19750,
  activeFailuresCount: 1,
  queueThroughputPerMin: 148,
  cpuUtilizationPct: 28.4,
  memoryUsagePct: 41.2
};

export const SYSTEM_ANALYTICS = {
  weeklyRuns: [
    { day: "Mon", total: 420, success: 412, failure: 8 },
    { day: "Tue", total: 510, success: 501, failure: 9 },
    { day: "Wed", total: 480, success: 472, failure: 8 },
    { day: "Thu", total: 590, success: 578, failure: 12 },
    { day: "Fri", total: 640, success: 625, failure: 15 },
    { day: "Sat", total: 310, success: 307, failure: 3 },
    { day: "Sun", total: 290, success: 288, failure: 2 }
  ],
  departmentBreakdown: [
    { name: "Finance", percentage: 32, count: 1840, hours: 152 },
    { name: "IT & DevOps", percentage: 28, count: 1610, hours: 216 },
    { name: "Supply Chain", percentage: 20, count: 1150, hours: 180 },
    { name: "HR", percentage: 12, count: 690, hours: 96 },
    { name: "Marketing", percentage: 8, count: 460, hours: 60 }
  ]
};

export const TECHNICAL_DOCS = {
  title: "Business Process Automation Dashboard - System Architecture & Technical Specifications",
  version: "v2.4.0",
  sections: [
    {
      id: "architecture",
      title: "1. System Architecture & Topology",
      content: `The Business Process Automation (BPA) Dashboard operates as a centralized control plane for heterogeneous automation assets. 
      
### Control Plane Architecture:
- **Agent Orchestrator**: Manages state, heartbeat signals, and remote execution triggers over WebSockets (WSS).
- **Telemetry & Event Ingestion**: Ingests structured stdout/stderr streams, execution duration, and exit codes into a high-throughput time-series buffer.
- **Incident Escalation Engine**: Listens for failure patterns and rate-limit violations to automatically notify triage channels (PagerDuty, Slack, Email) and execute retry fallback policies.`
    },
    {
      id: "bot-integration",
      title: "2. Bot Integration & Telemetry SDK",
      content: `To register a Python, PowerShell, or Node.js script into the BPA Control Plane, include the lightweight telemetry wrapper:

\`\`\`python
# Python Telemetry Wrapper Example
from bpa_sdk import AutomationBot, LogLevel

bot = AutomationBot(bot_id="BOT-101", secret_key=os.getenv("BPA_SECRET"))

@bot.pipeline_step("OCR PDF Extraction")
def extract_pdf_data(file_path):
    bot.log(LogLevel.INFO, f"Extracting {file_path}...")
    # Business logic here
    return extracted_data

if __name__ == "__main__":
    with bot.execution_scope():
        extract_pdf_data("invoice_88391.pdf")
\`\`\``
    },
    {
      id: "sla-security",
      title: "3. Security, RBAC & Compliance SLA",
      content: `### Security Controls:
- **Zero Trust Secret Vault**: All API keys, database connection strings, and RPA credentials are encrypted using HashiCorp Vault with AES-256.
- **Role-Based Access Control (RBAC)**:
  - **Operator**: Trigger runs, pause scripts, view non-sensitive log telemetry.
  - **Bot Developer**: Create and update bot pipeline configurations, modify cron triggers.
  - **Admin**: Manage security credentials, purge logs, configure system alerts.`
    }
  ]
};
