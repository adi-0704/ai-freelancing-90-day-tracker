// Real Estate AI Agency — 90-Day Action Plan Data & Action Guides

const DEFAULT_BASELINE_TARGETS = [
    {
        "id": "morning_block",
        "label": "7:00\u20138:00 AM Morning Block (Plan / Content / Learn)",
        "type": "checkbox"
    },
    {
        "id": "outreach",
        "label": "10 Outreach Touches (LinkedIn Connects + Cold Emails)",
        "targetCount": 10,
        "type": "counter"
    },
    {
        "id": "build_session",
        "label": "7:00\u201310:00 PM Focused Build / Client Work",
        "type": "checkbox"
    },
    {
        "id": "crm",
        "label": "Update Pipeline Sheet & CRM (Google Sheets / Notion)",
        "type": "checkbox"
    }
];

const TASK_GUIDES = {
    "brand": {
        "title": "\ud83c\udfe0 Brand Positioning & Niche Focus",
        "category": "Strategy",
        "summary": "Establish your Real Estate AI Agency positioning: AI Automations for Real Estate Teams.",
        "steps": [
            "1. Define Tagline: \"AI Lead Response & Workflow Automations for Growing Real Estate Teams\".",
            "2. Lock Niche Focus: Resale Agents, Property Managers, 10\u201350 Agent Teams, Luxury Brokers, Developers.",
            "3. Write 1-Page Positioning & Offer Document explaining problem, solution, and high-ROI outcomes.",
            "4. Commit initial scaffolding to GitHub repository."
        ],
        "templates": [
            {
                "name": "Agency Elevator Pitch",
                "content": "I build custom AI Lead-Qualifiers, Voice Inquiry Agents, and Auto-Follow-Up Workflows for real estate teams to convert 30% more leads without increasing headcount."
            }
        ]
    },
    "website": {
        "title": "\ud83c\udf10 Real Estate Portfolio Website",
        "category": "Branding",
        "summary": "Build a high-converting, real-estate-specific landing page.",
        "steps": [
            "1. Select Tech Stack: Framer / Webflow free tier, or Next.js + Vercel.",
            "2. Structure Page: Hero (Headline + Demo Video), Services (Lead Qualifier, Voice Agent, CRM Drip), Case Studies, Booking Link.",
            "3. Write Real-Estate-Specific Copy: Highlight instant lead response time & zero missed inquiries.",
            "4. Embed Cal.com / Calendly for discovery call booking."
        ],
        "templates": [
            {
                "name": "Landing Page Hero Headline",
                "content": "Turn Inbound Property Inquiries into Booked Site Visits 24/7 with Autonomous Real Estate AI Agents."
            }
        ]
    },
    "qualifier": {
        "title": "\ud83d\udcac AI Lead-Qualifier Chatbot (WhatsApp / Web)",
        "category": "Build",
        "summary": "Build an AI chatbot that qualifies budget, location, timeline, and buy-vs-rent.",
        "steps": [
            "1. Setup n8n workflow or LangChain / OpenAI Assistant API.",
            "2. Connect WhatsApp Business API / web chat widget.",
            "3. Configure Qualification Flow: Extract location preference, budget range, purchase timeline, and contact info.",
            "4. Push qualified lead data directly into Google Sheets / CRM webhook.",
            "5. Record 60-second Loom demo video showcasing instant qualification."
        ],
        "templates": [
            {
                "name": "Bot Qualification Prompt",
                "content": "You are a helpful real estate assistant. Ask the buyer 4 questions politely: 1. Target location/neighborhood, 2. Budget range, 3. Timeline (Immediate vs 3-6 months), 4. Buy or Rent. Save details and notify the agent."
            }
        ]
    },
    "voice": {
        "title": "\ud83d\udcde AI Property Inquiry Voice Agent",
        "category": "Build",
        "summary": "Build an after-hours voice agent that answers property calls and books site visits.",
        "steps": [
            "1. Setup Vapi.ai / Twilio + n8n + OpenAI GPT-4o.",
            "2. Configure System Prompt with listing specs, price, amenities, and available visit slots.",
            "3. Connect Google Calendar / Calendly API tool call for real-time appointment booking.",
            "4. Test after-hours calls and SMS confirmation fallback.",
            "5. Record Loom demo highlighting phone call execution."
        ],
        "templates": [
            {
                "name": "Voice Agent Greeting Script",
                "content": "Thanks for calling [Agency Name]! I can answer questions about our active listings or schedule a site visit with an agent right now. What property are you calling about?"
            }
        ]
    },
    "followup": {
        "title": "\ud83d\udd04 AI CRM Auto-Follow-Up System",
        "category": "Build",
        "summary": "Automated WhatsApp & Email drip sequence for cold real estate leads.",
        "steps": [
            "1. Set up n8n webhook listening to CRM lead status changes.",
            "2. Build 5-stage automated follow-up workflow (Day 1, 3, 7, 14, 30).",
            "3. Personalize messaging using buyer preferences saved in CRM.",
            "4. Test lead re-engagement triggers when buyer clicks property link.",
            "5. Document workflow diagram for agency sales pitch."
        ],
        "templates": [
            {
                "name": "Day 3 Auto Follow-Up Message",
                "content": "Hi [Name], just checking in! Are you still looking for properties in [Location] under [Budget]? A few new listings just came up that match your criteria. Let me know if you would like the link!"
            }
        ]
    },
    "matcher": {
        "title": "\ud83d\udd0d AI Property-Matching Engine (RAG)",
        "category": "Build",
        "summary": "Match buyer requirements against listing inventory using vector search.",
        "steps": [
            "1. Setup RAG pipeline: Chunk property specs, amenities, and price using OpenAI Embeddings + Pinecone / Chroma.",
            "2. Build FastAPI / Node backend service.",
            "3. Take natural language query (e.g. \"3 BHK under 1.5Cr near Tech Park with pool\") -> semantic search listing DB.",
            "4. Return top 3 matching property cards with match confidence score.",
            "5. Record 60s demo showing instant recommendation."
        ],
        "templates": [
            {
                "name": "RAG Search Prompt",
                "content": "Given buyer requirements: {query}, query vector database for active listings. Return top 3 matches formatted with Property Title, Price, Key Highlights, and Booking Link."
            }
        ]
    },
    "scheduler": {
        "title": "\ud83d\udcc5 AI Site-Visit Scheduler & Reminder Agent",
        "category": "Build",
        "summary": "Book, confirm, and send automated WhatsApp reminders to eliminate no-shows.",
        "steps": [
            "1. Build booking workflow: n8n + WhatsApp Business API + Google Calendar.",
            "2. Send instant WhatsApp confirmation upon booking with map directions.",
            "3. Schedule 24-hr and 2-hr automated reminder messages with \"Confirm / Reschedule\" quick buttons.",
            "4. Reduce site visit no-show rates for agents by up to 50%.",
            "5. Record demo video showing automated WhatsApp reminders."
        ],
        "templates": [
            {
                "name": "WhatsApp Site Visit Reminder",
                "content": "Hi [Name]! Reminder: Your site visit for [Property Name] is scheduled for tomorrow at [Time]. Address: [Location Link]. Reply 1 to Confirm or 2 to Reschedule."
            }
        ]
    },
    "generator": {
        "title": "\u270d\ufe0f AI Listing Description Generator",
        "category": "Build",
        "summary": "Turn raw property bullet points & photos into compelling listing copy.",
        "steps": [
            "1. Build simple web app UI (HTML/JS or Next.js).",
            "2. Form inputs: Property Type, Bedrooms, Sqft, Price, Key Amenities, Target Buyer Persona.",
            "3. Generate 3 copy variations: SEO Portal Listing (99acres/Zillow), Instagram/Facebook Ad Copy, Email Blast.",
            "4. Add 1-click Copy to Clipboard button.",
            "5. Deploy web app live on Vercel."
        ],
        "templates": [
            {
                "name": "Listing Copy Prompt",
                "content": "Generate a high-converting luxury real estate listing for a {property_type} in {location}. Highlight {amenities}. Tone: Premium, inviting, persuasive."
            }
        ]
    },
    "screening": {
        "title": "\ud83d\udccb AI Rental / Buyer Screening Agent",
        "category": "Build",
        "summary": "Pre-screen applicants against landlord/seller criteria automatically.",
        "steps": [
            "1. Build digital screening form with AI document parser.",
            "2. Verify employment income ratio, credit indicators, and lease duration.",
            "3. Generate Tenant Risk Score & Summary Report for property managers.",
            "4. Send automated status notifications to applicants."
        ],
        "templates": [
            {
                "name": "Screening Report Summary",
                "content": "Applicant: [Name] | Status: Recommended | Income-to-Rent: 3.8x | Employment: Verified | Risk Score: Low"
            }
        ]
    },
    "referral": {
        "title": "\u2b50 AI Referral & Review Collector Agent",
        "category": "Build",
        "summary": "Auto-request reviews and referrals from happy clients post-closing.",
        "steps": [
            "1. Trigger workflow 3 days after deal closing in CRM.",
            "2. Send personalized WhatsApp message thanking the client.",
            "3. If rating is 5-star -> direct to Google Business Review link.",
            "4. Request referral intro for friends/colleagues buying property."
        ],
        "templates": [
            {
                "name": "Post-Closing Review Message",
                "content": "Hi [Name], congratulations again on your new property! If you enjoyed working with [Agent Name], would you mind leaving a quick 30-second Google review? It helps us tremendously: [Link]"
            }
        ]
    },
    "multiagent": {
        "title": "\ud83e\udd16 Multi-Agent Real Estate Pipeline (LangGraph)",
        "category": "Build",
        "summary": "Chain Lead-Qualifier + Property-Matcher + Follow-up Agent together.",
        "steps": [
            "1. Build multi-node agent graph using LangGraph.",
            "2. Node 1 (Qualifier): Gathers buyer intent.",
            "3. Node 2 (Matcher): Queries vector DB for matching listings.",
            "4. Node 3 (Follow-up): Schedules visit and sends WhatsApp confirmation.",
            "5. Deploy unified pipeline on Railway / Render."
        ],
        "templates": [
            {
                "name": "LangGraph Orchestration Script",
                "content": "Graph Architecture: User Input -> QualifierNode -> MatcherNode -> SchedulerNode -> CRMOutput"
            }
        ]
    },
    "dashboard": {
        "title": "\ud83d\udcca Real Estate Agency Ops Dashboard",
        "category": "Build",
        "summary": "Internal operational dashboard for tracking leads, pipeline, and agent performance.",
        "steps": [
            "1. Build dashboard interface: Leads pipeline, conversion rate, response times.",
            "2. Connect live webhooks from WhatsApp and web chat bots.",
            "3. Display agent leaderboard & pending site visit follow-ups.",
            "4. Host securely for client demonstration."
        ],
        "templates": [
            {
                "name": "KPI Metric Tracker",
                "content": "Tracked KPIs: Total Inquiries, Avg Response Time (< 60s), Qualified Leads %, Site Visits Booked, Closed Revenue."
            }
        ]
    },
    "outreach": {
        "title": "\ud83d\udce9 Real Estate Outreach & Cold Email Templates",
        "category": "Outreach",
        "summary": "Proven outreach scripts tailored specifically for real estate agents & agencies.",
        "steps": [
            "1. Research target prospect on LinkedIn / 99acres / MagicBricks / Housing.com.",
            "2. Personalize line 1 based on recent listing or area.",
            "3. Send 10 targeted touches daily (6 LinkedIn connects + 4 cold emails).",
            "4. Follow up on Day 3 if no response."
        ],
        "templates": [
            {
                "name": "LinkedIn Connection Request",
                "content": "Hi [Name] \u2014 saw [specific: your recent listing in Whitefield / your agency's expansion / your post about lead follow-up]. I build AI tools for real estate teams (instant lead response, 24/7 inquiry handling) and thought it might be relevant. Open to connecting?"
            },
            {
                "name": "Cold Email \u2014 Resale Agents & Small Teams",
                "content": "Subject: Cutting your lead response time to seconds, [Name]\n\nHi [Name],\n\nMost agents lose 30\u201340% of inbound leads simply because no one replies fast enough.\n\nI build AI chatbots & voice agents that qualify and respond to leads instantly, 24/7.\n\nBuilt one recently for a similar team \u2014 happy to share a 60-second demo, no pressure.\n\nBest,\n[Your Name]"
            },
            {
                "name": "Cold Email \u2014 Property Management / Rentals",
                "content": "Subject: Handling after-hours rental inquiries automatically\n\nHi [Name],\n\nA lot of rental inquiries come in outside office hours and go cold by morning.\n\nI build AI voice/chat agents that answer instantly and book site visits automatically.\n\nHappy to show you a quick demo built for a similar business.\n\nBest,\n[Your Name]"
            },
            {
                "name": "Cold Email \u2014 Agencies (10\u201350 Agents)",
                "content": "Subject: One system, all your agents' follow-ups handled\n\nHi [Name],\n\nMost agencies lose deals to slow or inconsistent follow-up across agents, not bad leads.\n\nI build automated follow-up systems that keep every lead warm regardless of which agent owns it.\n\nHappy to share a short demo.\n\nBest,\n[Your Name]"
            },
            {
                "name": "Follow-Up (Day 3 Rule)",
                "content": "Hi [Name] \u2014 following up in case this got buried. Still happy to share the demo if useful, no worries if not a priority right now. Hope things are going well with [specific: the new launch / your listings this month]!"
            },
            {
                "name": "Discovery Call Opener",
                "content": "Thanks for making time \u2014 before I show anything, help me understand: right now, when a lead comes in after hours or on a weekend, what actually happens to it? And roughly how many leads would you say slip through each month?"
            },
            {
                "name": "Objection Handling (\"We already have a CRM\")",
                "content": "Totally fair \u2014 most agencies do. What I build usually sits on top of your CRM, not instead of it: it handles the instant first response and qualification, then hands off a warm, qualified lead into your existing CRM. Would that be useful, or is the CRM itself the bottleneck?"
            }
        ]
    }
};

const ACTION_PLAN_DAYS = [
    {
        "day": 1,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to n/a \u2014 internal setup week (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to n/a \u2014 internal setup week (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 2,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 3,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Wed: Learning: AI Agents fundamentals (agent loops, tools, memory) \u2014 Anthropic docs + DeepLearning.AI short course \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to n/a \u2014 internal setup week + 2 follow-ups (Day-3 rule). 8\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: AI Agents fundamentals (agent loops, tools, memory) \u2014 Anthropic docs + DeepLearning.AI short course \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to n/a \u2014 internal setup week + 2 follow-ups (Day-3 rule). 8\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 4,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 5,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying AI Agents fundamentals (agent loops, tools, memory).",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying AI Agents fundamentals (agent loops, tools, memory).",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 6,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: Lock brand name, tagline, and positioning as 'AI automation for real estate teams'; write 1-page niche/positioning doc \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 7,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on AI Agents fundamentals (agent loops, tools, memory) + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on AI Agents fundamentals (agent loops, tools, memory) + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 8,
        "title": "Real Estate Portfolio Website",
        "guideKey": "website",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to n/a \u2014 website build week (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to n/a \u2014 website build week (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 9,
        "title": "Real Estate Portfolio Website",
        "guideKey": "website",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 10,
        "title": "Real Estate Portfolio Website",
        "guideKey": "website",
        "morningTask": "Wed: Learning: LangGraph basics \u2014 build a 2-node agent graph \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to n/a \u2014 website build week + 2 follow-ups (Day-3 rule). 8\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: LangGraph basics \u2014 build a 2-node agent graph \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to n/a \u2014 website build week + 2 follow-ups (Day-3 rule). 8\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 11,
        "title": "Real Estate Portfolio Website",
        "guideKey": "website",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 12,
        "title": "Multi-Agent LangGraph Pipeline",
        "guideKey": "multiagent",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying LangGraph basics.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying LangGraph basics.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 13,
        "title": "Real Estate Portfolio Website",
        "guideKey": "website",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: Build portfolio website (Landing, Services, About, Contact) in Framer/Webflow free tier or Next.js+Vercel, all copy real-estate-specific \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 14,
        "title": "Multi-Agent LangGraph Pipeline",
        "guideKey": "multiagent",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on LangGraph basics + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on LangGraph basics + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 15,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Lead-Qualifier Chatbot (WhatsApp/website widget)\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Independent resale agents & small 2\u20135 agent teams (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Lead-Qualifier Chatbot (WhatsApp/website widget)\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Independent resale agents & small 2\u20135 agent teams (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 16,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Lead-Qualifier Chatbot (WhatsApp/website widget)\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Lead-Qualifier Chatbot (WhatsApp/website widget)\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 17,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Wed: Learning: RAG fundamentals \u2014 chunking, embeddings, retrieval \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Independent resale agents & small 2\u20135 agent teams + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: RAG fundamentals \u2014 chunking, embeddings, retrieval \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Independent resale agents & small 2\u20135 agent teams + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 18,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 19,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying RAG fundamentals.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying RAG fundamentals.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 20,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Lead-Qualifier Chatbot (WhatsApp/website widget) \u2014 captures budget, location, timeline, buy-vs-rent using n8n + OpenAI + Google Sheets \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 21,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on RAG fundamentals + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on RAG fundamentals + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 22,
        "title": "AI Property Inquiry Voice Agent",
        "guideKey": "voice",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Property Inquiry Voice Agent\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Property management / rental companies (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Property Inquiry Voice Agent\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Property management / rental companies (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 23,
        "title": "AI Property Inquiry Voice Agent",
        "guideKey": "voice",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Property Inquiry Voice Agent\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Property Inquiry Voice Agent\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 24,
        "title": "AI Property Inquiry Voice Agent",
        "guideKey": "voice",
        "morningTask": "Wed: Learning: Vector databases \u2014 Chroma/Pinecone free tier hands-on \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Property management / rental companies + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Vector databases \u2014 Chroma/Pinecone free tier hands-on \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Property management / rental companies + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 25,
        "title": "AI Property Inquiry Voice Agent",
        "guideKey": "voice",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 26,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Vector databases.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Vector databases.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 27,
        "title": "AI Property Inquiry Voice Agent",
        "guideKey": "voice",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Property Inquiry Voice Agent \u2014 answers after-hours calls, books site visits via Vapi/Twilio + n8n + Google Calendar \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 28,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Vector databases + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Vector databases + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 29,
        "title": "AI CRM Auto-Follow-Up System",
        "guideKey": "followup",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI CRM Auto-Follow-Up System\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Multi-agent real estate agencies (10\u201350 agents) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI CRM Auto-Follow-Up System\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Multi-agent real estate agencies (10\u201350 agents) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 30,
        "title": "AI CRM Auto-Follow-Up System",
        "guideKey": "followup",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI CRM Auto-Follow-Up System\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI CRM Auto-Follow-Up System\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 31,
        "title": "AI CRM Auto-Follow-Up System",
        "guideKey": "followup",
        "morningTask": "Wed: Learning: MCP (Model Context Protocol) \u2014 build a simple MCP server \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Multi-agent real estate agencies (10\u201350 agents) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: MCP (Model Context Protocol) \u2014 build a simple MCP server \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Multi-agent real estate agencies (10\u201350 agents) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 32,
        "title": "AI CRM Auto-Follow-Up System",
        "guideKey": "followup",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 33,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying MCP (Model Context Protocol).",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying MCP (Model Context Protocol).",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 34,
        "title": "AI CRM Auto-Follow-Up System",
        "guideKey": "followup",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI CRM Auto-Follow-Up System \u2014 automated WhatsApp/email drip sequence for cold leads with n8n + CRM webhook \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 35,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on MCP (Model Context Protocol) + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on MCP (Model Context Protocol) + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 36,
        "title": "AI Property-Matching Engine",
        "guideKey": "matcher",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Property-Matching Engine\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Luxury / high-ticket agents (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Property-Matching Engine\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Luxury / high-ticket agents (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 37,
        "title": "AI Property-Matching Engine",
        "guideKey": "matcher",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Property-Matching Engine\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Property-Matching Engine\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 38,
        "title": "AI Property-Matching Engine",
        "guideKey": "matcher",
        "morningTask": "Wed: Learning: Docker \u2014 containerize one of your agents \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Luxury / high-ticket agents + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Docker \u2014 containerize one of your agents \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Luxury / high-ticket agents + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 39,
        "title": "AI Property-Matching Engine",
        "guideKey": "matcher",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 40,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Docker.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Docker.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 41,
        "title": "AI Property-Matching Engine",
        "guideKey": "matcher",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Property-Matching Engine \u2014 matches buyer requirements to listing inventory using RAG over a listings database (FastAPI + OpenAI + vector DB) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 42,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Docker + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Docker + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 43,
        "title": "AI Site-Visit Scheduler & Reminders",
        "guideKey": "scheduler",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Site-Visit Scheduler + Reminder Agent\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to New-project developers / builders (pre-launch sales teams) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Site-Visit Scheduler + Reminder Agent\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to New-project developers / builders (pre-launch sales teams) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 44,
        "title": "AI Site-Visit Scheduler & Reminders",
        "guideKey": "scheduler",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Site-Visit Scheduler + Reminder Agent\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Site-Visit Scheduler + Reminder Agent\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 45,
        "title": "AI Site-Visit Scheduler & Reminders",
        "guideKey": "scheduler",
        "morningTask": "Wed: Learning: Deployment \u2014 Render/Railway, env vars, custom domains \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to New-project developers / builders (pre-launch sales teams) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Deployment \u2014 Render/Railway, env vars, custom domains \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to New-project developers / builders (pre-launch sales teams) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 46,
        "title": "AI Site-Visit Scheduler & Reminders",
        "guideKey": "scheduler",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 47,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Deployment.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Deployment.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 48,
        "title": "AI Site-Visit Scheduler & Reminders",
        "guideKey": "scheduler",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Site-Visit Scheduler + Reminder Agent \u2014 books, confirms, and sends automated reminders (n8n + WhatsApp API + Calendar) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 49,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Deployment + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Deployment + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 50,
        "title": "AI Listing Description Generator",
        "guideKey": "generator",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Listing Description Generator\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Commercial real estate brokers (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Listing Description Generator\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Commercial real estate brokers (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 51,
        "title": "AI Listing Description Generator",
        "guideKey": "generator",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Listing Description Generator\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Listing Description Generator\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 52,
        "title": "AI Listing Description Generator",
        "guideKey": "generator",
        "morningTask": "Wed: Learning: Security basics \u2014 API key vaults, auth, rate limiting \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Commercial real estate brokers + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Security basics \u2014 API key vaults, auth, rate limiting \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Commercial real estate brokers + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 53,
        "title": "AI Listing Description Generator",
        "guideKey": "generator",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 54,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Security basics.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Security basics.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 55,
        "title": "AI Listing Description Generator",
        "guideKey": "generator",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Listing Description Generator \u2014 turns raw property data/photos into polished listing copy (OpenAI + simple web form) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 56,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Security basics + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Security basics + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 57,
        "title": "AI Rental/Buyer Screening Agent",
        "guideKey": "screening",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Rental/Buyer Application Screening Agent\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Resale agents & small teams (round 2 \u2014 deeper, using case studies now) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Rental/Buyer Application Screening Agent\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Resale agents & small teams (round 2 \u2014 deeper, using case studies now) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 58,
        "title": "AI Rental/Buyer Screening Agent",
        "guideKey": "screening",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Rental/Buyer Application Screening Agent\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Rental/Buyer Application Screening Agent\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 59,
        "title": "AI Rental/Buyer Screening Agent",
        "guideKey": "screening",
        "morningTask": "Wed: Learning: Kubernetes basics \u2014 concepts only (pods, deployments) \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Resale agents & small teams (round 2 \u2014 deeper, using case studies now) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Kubernetes basics \u2014 concepts only (pods, deployments) \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Resale agents & small teams (round 2 \u2014 deeper, using case studies now) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 60,
        "title": "AI Rental/Buyer Screening Agent",
        "guideKey": "screening",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 61,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Kubernetes basics.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Kubernetes basics.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 62,
        "title": "AI Rental/Buyer Screening Agent",
        "guideKey": "screening",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Rental/Buyer Application Screening Agent \u2014 pre-screens applicants against landlord/seller criteria \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 63,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Kubernetes basics + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Kubernetes basics + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 64,
        "title": "AI Referral & Review Collector",
        "guideKey": "referral",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Referral & Testimonial Collector Agent\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Multi-agent agencies (referral & retainer push) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"AI Referral & Testimonial Collector Agent\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Multi-agent agencies (referral & retainer push) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 65,
        "title": "AI Referral & Review Collector",
        "guideKey": "referral",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Referral & Testimonial Collector Agent\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"AI Referral & Testimonial Collector Agent\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 66,
        "title": "AI Referral & Review Collector",
        "guideKey": "referral",
        "morningTask": "Wed: Learning: Negotiation \u2014 anchoring, framing, walk-away price \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Multi-agent agencies (referral & retainer push) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Negotiation \u2014 anchoring, framing, walk-away price \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Multi-agent agencies (referral & retainer push) + 2 follow-ups (Day-3 rule). 8\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 67,
        "title": "AI Referral & Review Collector",
        "guideKey": "referral",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 68,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Negotiation.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Negotiation.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 69,
        "title": "AI Referral & Review Collector",
        "guideKey": "referral",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: AI Referral & Testimonial Collector Agent \u2014 auto-requests reviews/referrals post-closing via WhatsApp/email \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 70,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Negotiation + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Negotiation + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 71,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph)\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Property management companies (testimonial + SOP focus) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph)\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Property management companies (testimonial + SOP focus) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 72,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph)\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph)\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 73,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Wed: Learning: Sales fundamentals \u2014 SPIN selling, discovery questions \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Property management companies (testimonial + SOP focus) + 2 follow-ups (Day-3 rule). 8\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Sales fundamentals \u2014 SPIN selling, discovery questions \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Property management companies (testimonial + SOP focus) + 2 follow-ups (Day-3 rule). 8\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 74,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 75,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Sales fundamentals.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Sales fundamentals.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 76,
        "title": "AI Lead-Qualifier Chatbot",
        "guideKey": "qualifier",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: Multi-agent pipeline: lead-qualifier + property-matcher + follow-up agent chained together (LangGraph) \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 77,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Sales fundamentals + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Sales fundamentals + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 78,
        "title": "Real Estate Agency Ops Dashboard",
        "guideKey": "dashboard",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Internal Real-Estate Agency Ops Dashboard\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Best-converting segment so far (double down using your own data) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Internal Real-Estate Agency Ops Dashboard\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Best-converting segment so far (double down using your own data) (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 79,
        "title": "Real Estate Agency Ops Dashboard",
        "guideKey": "dashboard",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Internal Real-Estate Agency Ops Dashboard\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Internal Real-Estate Agency Ops Dashboard\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 80,
        "title": "Real Estate Agency Ops Dashboard",
        "guideKey": "dashboard",
        "morningTask": "Wed: Learning: Finance for freelancers \u2014 GST/TDS basics (India), savings & tax planning \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Best-converting segment so far (double down using your own data) + 2 follow-ups (Day-3 rule). 8\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Finance for freelancers \u2014 GST/TDS basics (India), savings & tax planning \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Best-converting segment so far (double down using your own data) + 2 follow-ups (Day-3 rule). 8\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 81,
        "title": "Real Estate Agency Ops Dashboard",
        "guideKey": "dashboard",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 82,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Finance for freelancers.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Finance for freelancers.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 83,
        "title": "Real Estate Agency Ops Dashboard",
        "guideKey": "dashboard",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: Internal Real-Estate Agency Ops Dashboard \u2014 leads, pipeline, revenue, KPIs \u2014 the tool you actually run your business on \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    },
    {
        "day": 84,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Sun: 9:00\u201312:00 PM Learning: deep-dive on Finance for freelancers + build a small standalone practice exercise.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
        "outreachTarget": "Reply to weekend leads",
        "deliverable": "Review doc complete + next week's goals set",
        "tasks": [
            "Morning (7-8 AM): Sun: 9:00\u201312:00 PM Learning: deep-dive on Finance for freelancers + build a small standalone practice exercise.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Weekly Review \u2014 KPIs vs targets, next week's 3 goals.",
            "Target: Reply to weekend leads",
            "Deliverable: Review doc complete + next week's goals set"
        ]
    },
    {
        "day": 85,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Warm pipeline across all segments \u2014 reactivation (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 setup/scaffolding, first GitHub commit.",
        "outreachTarget": "10 outreach touches",
        "deliverable": "Week goals set + 10 outreach logged + repo created",
        "tasks": [
            "Morning (7-8 AM): Mon: Weekly Planning (Notion): review last week's KPIs vs targets, set this week's 3 goals for \"Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 LinkedIn connection requests + 4 cold emails to Warm pipeline across all segments \u2014 reactivation (find via LinkedIn search + local real estate portals like 99acres/MagicBricks/Housing.com agent directories or Apollo.io free tier). Log in CRM (Google Sheet \"Pipeline\"). 8\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 setup/scaffolding, first GitHub commit.",
            "Target: 10 outreach touches",
            "Deliverable: Week goals set + 10 outreach logged + repo created"
        ]
    },
    {
        "day": 86,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2\" (Notion \u2192 LinkedIn native).",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 build core feature #1.",
        "outreachTarget": "1 LinkedIn post scheduled",
        "deliverable": "Post live + feature #1 working",
        "tasks": [
            "Morning (7-8 AM): Tue: Content: draft + schedule 1 LinkedIn post \u2014 real estate automation lesson/insight tied to \"Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2\" (Notion \u2192 LinkedIn native).",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 build core feature #1.",
            "Target: 1 LinkedIn post scheduled",
            "Deliverable: Post live + feature #1 working"
        ]
    },
    {
        "day": 87,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Wed: Learning: Review: revisit weakest technical topic from Weeks 1\u201312 \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
        "eveningTask": "Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Warm pipeline across all segments \u2014 reactivation + 2 follow-ups (Day-3 rule). 8\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 build feature #2.",
        "outreachTarget": "6 new + 2 follow-ups",
        "deliverable": "Learning notes + feature #2 working",
        "tasks": [
            "Morning (7-8 AM): Wed: Learning: Review: revisit weakest technical topic from Weeks 1\u201312 \u2014 45 min + 15 min notes in Notion \"Learning Log\".",
            "Evening/Build: Job 10\u20136. 7\u20138 PM: Outreach \u2014 6 new touches to Warm pipeline across all segments \u2014 reactivation + 2 follow-ups (Day-3 rule). 8\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 build feature #2.",
            "Target: 6 new + 2 follow-ups",
            "Deliverable: Learning notes + feature #2 working"
        ]
    },
    {
        "day": 88,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
        "eveningTask": "Job 10\u20136. 7\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 integrate + test end-to-end, record raw Loom demo clip.",
        "outreachTarget": "10 meaningful engagements",
        "deliverable": "Project milestone + demo clip saved",
        "tasks": [
            "Morning (7-8 AM): Thu: Content: engage \u2014 comment on 10 real-estate-industry posts, reply to all comments/DMs on your own posts.",
            "Evening/Build: Job 10\u20136. 7\u201310 PM: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 integrate + test end-to-end, record raw Loom demo clip.",
            "Target: 10 meaningful engagements",
            "Deliverable: Project milestone + demo clip saved"
        ]
    },
    {
        "day": 89,
        "title": "Real Estate Outreach & Lead Gen",
        "guideKey": "outreach",
        "morningTask": "Fri: Learning: hands-on mini-exercise applying Review: revisit weakest technical topic from Weeks 1\u201312.",
        "eveningTask": "Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
        "outreachTarget": "Clear inbox + follow-ups",
        "deliverable": "KPI sheet updated + GitHub backed up",
        "tasks": [
            "Morning (7-8 AM): Fri: Learning: hands-on mini-exercise applying Review: revisit weakest technical topic from Weeks 1\u201312.",
            "Evening/Build: Job 10\u20136. 7\u20139 PM: Weekly Wrap \u2014 KPI Dashboard update, invoices (Refrens/Zoho), reply to warm leads, backup code to GitHub.",
            "Target: Clear inbox + follow-ups",
            "Deliverable: KPI sheet updated + GitHub backed up"
        ]
    },
    {
        "day": 90,
        "title": "Brand Positioning & Strategy",
        "guideKey": "brand",
        "morningTask": "Sat: 9:00\u201312:00 PM Deep Work: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
        "eveningTask": "12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
        "outreachTarget": "3\u20134 posts drafted",
        "deliverable": "Project deployed + demo video edited",
        "tasks": [
            "Morning (7-8 AM): Sat: 9:00\u201312:00 PM Deep Work: Consulting company groundwork: LLP/Pvt Ltd research, brand deck, real-estate-specific service packages v2 \u2014 hardest remaining piece, polish UI/UX, fix bugs.",
            "Evening/Build: 12\u20133 PM buffer. 3\u20137 PM MBA class. 7:30\u20139:30 PM: Content batch \u2014 write 3\u20134 real-estate LinkedIn posts for next week + deploy project (Render/Railway/Vercel) + edit demo video (CapCut).",
            "Target: 3\u20134 posts drafted",
            "Deliverable: Project deployed + demo video edited"
        ]
    }
];
