# 🚀 90-Day AI Freelancing Command Center & Action Tracker

An interactive, high-performance web dashboard built to track and execute your 90-Day AI Freelancing Action Plan (`3_Month_AI_Freelancing_Action_Plan.pdf`).

## 🌟 Key Features

1. **Auto-Updating Daily Focus**:
   - Automatically determines your active day (e.g. Day 1, Day 2, etc.) starting from today.
   - Jump to Today button or inspect any past/future day (Day 1 through Day 90).

2. **Interactive Checklists & Live Math**:
   - Check off daily targets (Focused Deep Work, 30-min Learning, CRM Updates) and day-specific deliverables.
   - Interactive **Outreach Counter (+ / -)** to log daily messages sent.
   - Real-time calculation of today's completion % and overall 90-day progress ring.

3. **Step-by-Step Execution Playbooks & Templates**:
   - Built-in **Execution Guide** modals for every task category (Outreach scripts, LinkedIn connection notes, Cold Email frameworks, Pricing tier breakdowns, Case Study templates, Discovery Call scripts).
   - One-click copy buttons for outreach templates.

4. **Streak Counter & 90-Day Roadmap Matrix**:
   - Visual 90-Tile interactive matrix to view completion status at a glance.
   - Filterable by Week 1 to 13, Month 2, and Month 3.
   - Daily streak tracking for consistent execution.

5. **Local Persistence & Data Backups**:
   - Auto-saves all progress in browser `localStorage`.
   - Backup progress to JSON and restore anytime.

---

## ⚡ How to Run Locally

You can open `index.html` directly in your browser or run a simple local web server:

Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Publish Live 24/7 on GitHub Pages

1. **Initialize Git & Commit Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 90-Day AI Freelancing Tracker Dashboard"
   ```

2. **Create a GitHub Repository & Push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
   - The `.github/workflows/deploy.yml` workflow will automatically build and publish your site live 24/7!
