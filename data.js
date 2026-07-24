// 90-Day AI Freelancing Action Plan Data & Action Guides

const DEFAULT_BASELINE_TARGETS = [
    { id: "outreach", label: "20 Outreach Messages Sent", targetCount: 20, type: "counter" },
    { id: "work", label: "2 Hours Focused Deep Work / Client Work", type: "checkbox" },
    { id: "learning", label: "30 Mins Learning (AI / Tech / MBA)", type: "checkbox" },
    { id: "crm", label: "Update CRM & Prospect Log", type: "checkbox" }
];

const TASK_GUIDES = {
    niche: {
        title: "🎯 How to Choose Niche & Define Offer",
        category: "Strategy",
        summary: "Identify a specific industry + specific painful problem + high-value AI solution.",
        steps: [
            "1. Pick a niche: e.g., Real Estate Agencies, E-commerce, Local Healthcare Clinics, B2B SaaS, Marketing Agencies.",
            "2. Define the core offer: 'I build custom AI Voice Agents / RAG Knowledge Bots / Automated Outreach Pipelines that increase lead conversion by 30% in 14 days.'",
            "3. Formulate the Guarantee or Risk-Reversal: Offer a free demo or performance-based pay for the first client.",
            "4. Validate: Search LinkedIn for founders or operations managers in this niche to ensure they have budget."
        ],
        templates: [
            {
                name: "Offer Statement Formula",
                content: "I help [Target Audience] achieve [Desired Outcome] using [AI Technology / Solution] without [Main Pain Point / High Cost]."
            }
        ]
    },
    pricing: {
        title: "💰 Pricing & Service Packages Guide",
        category: "Sales",
        summary: "Structure tier-based pricing for AI solutions (MVP, Automation Suite, Retainer).",
        steps: [
            "1. Tier 1: AI Chatbot / Knowledge Base (Quick win: $500 - $1,500).",
            "2. Tier 2: Custom Multi-Agent / Workflow Automation (Make.com, n8n, LangChain: $2,500 - $5,000).",
            "3. Tier 3: Enterprise AI Integration + Monthly Maintenance Retainer ($1,000 - $3,000/month).",
            "4. Never quote hourly rates. Always price based on business outcome and ROI."
        ],
        templates: [
            {
                name: "Package Breakdown Template",
                content: "• Starter Package ($999): Single AI Agent + 1 Integration + 30 Days Support.\n• Pro Package ($2,499): Multi-Agent System + Custom CRM Integration + Analytics Dashboard + 60 Days Support.\n• Enterprise Retainer ($1,500/mo): Ongoing optimization, monthly prompt updates, system maintenance."
            }
        ]
    },
    portfolio: {
        title: "🌐 Build Portfolio Website",
        category: "Branding",
        summary: "Build a sleek 1-page portfolio showcasing your AI capabilities and live demos.",
        steps: [
            "1. Use HTML/CSS or Vite/Next.js for max speed, clean dark theme.",
            "2. Header: Clear value proposition ('Building High-ROI AI Automations for Growing Businesses').",
            "3. Section 1: Interactive AI Demos (Embedded Chatbot, Voice Agent preview, Automation flow diagrams).",
            "4. Section 2: Case Studies (Problem -> Solution -> Metrics).",
            "5. Section 3: Booking link (Cal.com / Calendly)."
        ],
        templates: [
            {
                name: "Hero Section Headline",
                content: "Transforming Manual Operations into Autonomous AI Workflows. Custom AI Bots, RAG Systems, & Enterprise Automations."
            }
        ]
    },
    linkedin: {
        title: "🚀 Optimize LinkedIn Profile for Leads",
        category: "Branding",
        summary: "Turn your LinkedIn profile into a landing page that converts profile views into inquiries.",
        steps: [
            "1. Headline: AI Automation Engineer | Building Custom AI Agents & Workflows for [Target Niche] | Saving 20+ hrs/wk.",
            "2. About Section: Tell your story. Why AI? What results do you deliver? Include a clear CTA to book a call.",
            "3. Featured Section: Add links to your portfolio, live demo video, or case study doc.",
            "4. Banner: Design a simple banner on Canva highlighting your core service."
        ],
        templates: [
            {
                name: "LinkedIn Connection Note",
                content: "Hi [Name], loved your recent post about [Topic]. I'm building AI automation solutions for [Niche] teams to streamline [Process]. Would love to connect!"
            }
        ]
    },
    outreach: {
        title: "📩 Outreach Execution Playbook (Email & LinkedIn DMs)",
        category: "Outreach",
        summary: "Proven cold messaging methodology focused on high value and zero pushiness.",
        steps: [
            "1. Personalize line 1 based on their recent LinkedIn post, company news, or website detail.",
            "2. Mention a specific inefficiency in their current workflow that AI solves.",
            "3. Offer a low-friction value drop: 'I built a quick 60-second video demo showing how this works for [Niche]. Mind if I send it over?'",
            "4. Send 20 messages daily (10 LinkedIn connections + DMs, 10 Cold emails).",
            "5. Log every lead in your CRM immediately."
        ],
        templates: [
            {
                name: "Cold Email Framework (Value First)",
                content: "Subject: Quick idea for [Company Name] AI lead capture\n\nHey [Name],\n\nNoticed [Company Name] is currently handling customer inquiries manually on your site.\n\nI built a lightweight AI agent for a similar team that qualified incoming leads and booked 14 calls automatically last week.\n\nI created a quick 45-second loom demo tailored for [Company Name]. Would you be open to taking a look?\n\nBest,\n[Your Name]"
            },
            {
                name: "LinkedIn DM Script",
                content: "Hey [Name], saw your team is expanding [Department/Project]. We recently automated [Specific Workflow] for a [Niche] client using AI agents, cutting response times from 4 hrs to 2 mins.\n\nHappy to share the case study if you're curious!"
            }
        ]
    },
    casestudy: {
        title: "📄 Creating High-Converting AI Case Studies",
        category: "Content",
        summary: "Document real or simulated AI projects with quantified results.",
        steps: [
            "1. Context: Who was the client / business scenario?",
            "2. Problem: Manual data entry taking 15 hours/week, lost leads due to slow response times.",
            "3. Solution: Implemented OpenAI API + n8n webhook + Airtable integration.",
            "4. Results: 85% time saved, 3x faster lead response, 0 missed leads."
        ],
        templates: [
            {
                name: "Case Study Outline",
                content: "• Title: How [Niche] Automated Lead Qualification with Custom RAG AI Agent\n• Problem & Challenge\n• Architecture & Tech Stack (LangChain, Python, Next.js, Supabase)\n• Key Metrics & ROI achieved"
            }
        ]
    },
    demo: {
        title: "💻 Building Demo Projects & Proof-of-Concepts",
        category: "Build",
        summary: "Build functional mini-apps that visually demonstrate immediate ROI.",
        steps: [
            "1. Select a high-demand use case: RAG Document Q&A Bot, AI Customer Support Voice Agent, Lead Scraping + AI Enrichment tool.",
            "2. Keep scope minimal: 1 screen, clean UI, immediate wow-factor.",
            "3. Host live on Vercel or GitHub Pages.",
            "4. Record a 60-second Loom video demonstrating input -> AI processing -> instant output."
        ],
        templates: [
            {
                name: "Demo Video Script",
                content: "0-10s: Hook (The problem businesses face)\n10-30s: Live demo of the AI agent in action\n30-50s: Behind-the-scenes architecture\n50-60s: Call to Action to book a call for a custom build."
            }
        ]
    },
    proposal: {
        title: "📑 Winning Proposal & Sales Pitch Template",
        category: "Sales",
        summary: "Structure proposals that clearly justify the investment and close deals.",
        steps: [
            "1. Executive Summary & Client Goals",
            "2. Scope of Work (Deliverables breakdown)",
            "3. Timeline & Milestones (e.g. Week 1 Prototype, Week 2 Integration & Testing)",
            "4. Pricing Options (Anchor high: $3,500 recommended vs $1,500 basic)",
            "5. Terms & Next Steps (50% upfront deposit to begin work)."
        ],
        templates: [
            {
                name: "Proposal Deposit Term",
                content: "Project Investment: $2,500 total. Terms: 50% ($1,250) due upon contract signing to initiate development; 50% ($1,250) due upon final deployment and client sign-off."
            }
        ]
    },
    sales: {
        title: "📞 Sales Call Practice & Objection Handling",
        category: "Sales",
        summary: "Master discovery calls and turning client hesitation into signed contracts.",
        steps: [
            "1. 80/20 Rule: Listen 80% of the time, talk 20%.",
            "2. Ask Discovery Questions: 'What is currently taking up most of your team's manual time?' 'What happens if a lead contacts you at 9 PM?'",
            "3. Pitch Solution as a Business Asset, not code.",
            "4. Handle Objections: If they say 'AI is too risky/unproven', show your live demo and security guardrails."
        ],
        templates: [
            {
                name: "Objection Response (Price)",
                content: "I completely understand budget is a factor. Let's look at the numbers: if this AI bot saves your team 15 hours a week at $40/hr, it pays for itself in under 30 days. Shall we start with the Starter Tier?"
            }
        ]
    },
    review: {
        title: "📊 Weekly Review & Optimization Routine",
        category: "Strategy",
        summary: "Audit your numbers every 7 days to refine outreach and product quality.",
        steps: [
            "1. Outreach Metrics: How many messages sent? Response rate %? Calls booked?",
            "2. If response rate < 5%: Overhaul headline & cold email line 1.",
            "3. If calls booked but 0 closed: Refine discovery call script and offer pricing.",
            "4. Tech Stack: Reorganize reusable code modules built this week into your boilerplate codebase."
        ],
        templates: [
            {
                name: "Weekly Review Checklist",
                content: "[ ] Total Outreach Sent (Target: 140/wk)\n[ ] Responses Received\n[ ] Discovery Calls Booked\n[ ] Code/Feature Reusable Modules Saved\n[ ] Plan Goals for Coming Week"
            }
        ]
    }
};

const ACTION_PLAN_DAYS = [
    { day: 1, title: "Choose niche & define offer", guideKey: "niche", tasks: ["Research 3 potential AI niches", "Define core offer & target result", "Create offer positioning statement"] },
    { day: 2, title: "Create pricing & service packages", guideKey: "pricing", tasks: ["Define Starter, Pro, and Retainer packages", "Calculate pricing based on client ROI", "Draft service breakdown doc"] },
    { day: 3, title: "Build portfolio website", guideKey: "portfolio", tasks: ["Set up HTML/CSS or web app template", "Write hero section & service offerings", "Embed Calendly/Cal.com booking link"] },
    { day: 4, title: "Optimize LinkedIn", guideKey: "linkedin", tasks: ["Update profile headline with niche + offer", "Write value-driven About section", "Add portfolio link to Featured section", "Design profile banner in Canva"] },
    { day: 5, title: "Case study #1", guideKey: "casestudy", tasks: ["Document an AI use case (Problem -> Solution -> Metrics)", "Format as visual 1-pager or PDF", "Publish case study snippet"] },
    { day: 6, title: "Demo project #1", guideKey: "demo", tasks: ["Build a functional AI demo (e.g. Chatbot or Voice Agent)", "Deploy live demo to Vercel/GitHub Pages", "Record 60s Loom demo video"] },
    { day: 7, title: "Publish post & list 100 prospects", guideKey: "outreach", tasks: ["Write & publish a breakdown post on LinkedIn/X", "Research & list 100 target prospect leads in CRM", "Prepare outreach messaging templates"] },
    { day: 8, title: "20 LinkedIn connects + 10 DMs", guideKey: "outreach", tasks: ["Send 20 targeted LinkedIn connection requests", "Send 10 personalized DMs to active prospects", "Log all outreach activity in CRM"] },
    { day: 9, title: "10 cold emails + post", guideKey: "outreach", tasks: ["Send 10 personalized cold emails with loom demo link", "Publish a technical insight post on LinkedIn", "Follow up on initial responses"] },
    { day: 10, title: "Demo #2", guideKey: "demo", tasks: ["Build 2nd specialized AI demo (e.g. RAG Knowledge Base)", "Test multi-document upload and Q&A speed", "Record video walkthrough of Demo #2"] },
    { day: 11, title: "Proposal template", guideKey: "proposal", tasks: ["Create reusable pitch deck & proposal template", "Set up contract agreement terms", "Draft scope of work clauses"] },
    { day: 12, title: "Follow-ups + book calls", guideKey: "outreach", tasks: ["Send follow-ups to non-responders from Days 8-9", "Engage with prospect comments on LinkedIn", "Aim to book 1-2 discovery calls"] },
    { day: 13, title: "Sales practice", guideKey: "sales", tasks: ["Practice discovery call roleplay script", "Prepare responses for common objections (price, timing)", "Review closing framework"] },
    { day: 14, title: "Weekly review", guideKey: "review", tasks: ["Audit Week 1 metrics (Outreach sent vs replies vs booked calls)", "Refine offer based on prospect feedback", "Plan goals for Week 2"] },
    { day: 15, title: "Outreach + follow-ups", guideKey: "outreach", tasks: ["Send 20 fresh outreach messages", "Follow up with warm leads from Week 1", "Update CRM pipeline status"] },
    { day: 16, title: "Client work / Deep build", guideKey: "demo", tasks: ["Build core AI workflow feature", "Integrate OpenAI/Claude API or LangChain/n8n", "Document code & prompt structure"] },
    { day: 17, title: "Build reusable feature", guideKey: "demo", tasks: ["Extract modular code/workflow into boilerplate", "Create reusable AI agent template", "Add template to internal library"] },
    { day: 18, title: "Content + case study", guideKey: "casestudy", tasks: ["Draft & post new AI build breakdown", "Create visual case study graphic", "Share case study with warm prospects"] },
    { day: 19, title: "Sales calls / proposals", guideKey: "proposal", tasks: ["Conduct booked discovery calls", "Send customized proposals within 2 hours of call", "Track proposal status in CRM"] },
    { day: 20, title: "Deep work + demos", guideKey: "demo", tasks: ["Polish demo UI/UX", "Add live testing features", "Prepare client-ready demo links"] },
    { day: 21, title: "Weekly review & planning", guideKey: "review", tasks: ["Conduct 3-week milestone review", "Calculate total prospects engaged & pipeline value", "Set target targets for Week 4"] }
];

// Dynamically generate days 22-90 following the established pattern from the PDF
for (let d = 22; d <= 90; d++) {
    const cycle = (d - 1) % 7;
    let title = "";
    let guideKey = "outreach";
    let tasks = [];

    switch (cycle) {
        case 0: // Day 22, 29, 36...
            title = "Outreach + follow-ups";
            guideKey = "outreach";
            tasks = ["Send 20 daily outreach messages", "Execute sequence follow-ups", "Log lead replies & update CRM"];
            break;
        case 1: // Day 23, 30, 37...
            title = "Client work";
            guideKey = "demo";
            tasks = ["Execute client deliverable / core AI build", "Test API integrations & prompts", "Deliver milestone updates to client"];
            break;
        case 2: // Day 24, 31, 38...
            title = "Build reusable feature";
            guideKey = "demo";
            tasks = ["Develop reusable AI component", "Save modular code/flow to repository", "Update internal developer toolkit"];
            break;
        case 3: // Day 25, 32, 39...
            title = "Content + case study";
            guideKey = "casestudy";
            tasks = ["Publish authority content post on LinkedIn", "Document recent build as mini case study", "Share post link with active prospects"];
            break;
        case 4: // Day 26, 33, 40...
            title = "Sales calls / proposals";
            guideKey = "sales";
            tasks = ["Conduct sales calls with interested leads", "Send out customized proposals", "Follow up on outstanding proposals"];
            break;
        case 5: // Day 27, 34, 41...
            title = "Deep work + demos";
            guideKey = "demo";
            tasks = ["Dedicated 2-hr deep build session", "Refine demo projects & visual proof", "Record quick Loom showcase"];
            break;
        case 6: // Day 28, 35, 42...
            title = "Weekly review & planning";
            guideKey = "review";
            tasks = ["Perform weekly metrics review", "Audit outreach conversion rate", "Plan schedule & priorities for next week"];
            break;
    }

    ACTION_PLAN_DAYS.push({
        day: d,
        title: title,
        guideKey: guideKey,
        tasks: tasks
    });
}
