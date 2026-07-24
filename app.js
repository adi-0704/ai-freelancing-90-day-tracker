// 90-Day AI Freelancing Command Center Core Logic

const STORAGE_KEY_PROGRESS = "ai_freelance_progress_v1";
const STORAGE_KEY_CONFIG = "ai_freelance_config_v1";

// Global Application State
let appState = {
    startDate: getTodayFormatted(),
    currentViewDay: 1,
    progress: {} // Day number -> { baseline: { outreach: 0, work: false, learning: false, crm: false }, tasks: [bool] }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromStorage();
    setupEventListeners();
    updateCalculatedTodayDay();
    populateDayDropdown();
    renderCurrentDay();
    renderMatrix();
    updateOverallStats();
});

// Helper: Format Date as YYYY-MM-DD
function getTodayFormatted() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for readable display
function getReadableDate(dateStr) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

// Calculate active day index (1 - 90) based on start date
function getCalculatedActiveDay() {
    const start = new Date(appState.startDate);
    const today = new Date();
    // Strip time components
    start.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    
    const diffTime = today - start;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    if (diffDays < 1) return 1;
    if (diffDays > 90) return 90;
    return diffDays;
}

function updateCalculatedTodayDay() {
    const calculatedDay = getCalculatedActiveDay();
    // Default current view day to today's calculated day on initial load
    appState.currentViewDay = calculatedDay;
}

// Storage Operations
function loadStateFromStorage() {
    const savedConfig = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (savedConfig) {
        try {
            const config = JSON.parse(savedConfig);
            if (config.startDate) appState.startDate = config.startDate;
        } catch (e) { console.error("Error reading saved config", e); }
    } else {
        // Save initial config with start date as today
        saveConfigToStorage();
    }

    const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (savedProgress) {
        try {
            appState.progress = JSON.parse(savedProgress);
        } catch (e) { console.error("Error reading saved progress", e); }
    }
}

function saveConfigToStorage() {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify({ startDate: appState.startDate }));
}

function saveProgressToStorage() {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(appState.progress));
}

// Get or initialize day progress object
function getDayProgress(dayNum) {
    if (!appState.progress[dayNum]) {
        const dayData = ACTION_PLAN_DAYS.find(d => d.day === dayNum);
        const taskCount = dayData ? dayData.tasks.length : 3;
        appState.progress[dayNum] = {
            baseline: { outreach: 0, work: false, learning: false, crm: false },
            tasks: new Array(taskCount).fill(false)
        };
    }
    return appState.progress[dayNum];
}

// UI Event Handlers Setup
function setupEventListeners() {
    // Navigation
    document.getElementById("btnPrevDay").addEventListener("click", () => changeViewDay(appState.currentViewDay - 1));
    document.getElementById("btnNextDay").addEventListener("click", () => changeViewDay(appState.currentViewDay + 1));
    document.getElementById("btnToday").addEventListener("click", () => {
        const calculatedToday = getCalculatedActiveDay();
        changeViewDay(calculatedToday);
    });
    
    document.getElementById("daySelect").addEventListener("change", (e) => {
        changeViewDay(parseInt(e.target.value, 10));
    });

    // Outreach Counter Buttons
    document.getElementById("btnOutreachMinus").addEventListener("click", () => updateOutreachCount(-1));
    document.getElementById("btnOutreachPlus").addEventListener("click", () => updateOutreachCount(1));
    document.getElementById("btnOutreachMax").addEventListener("click", () => setOutreachCount(10));

    // Modals
    document.getElementById("btnOpenGuide").addEventListener("click", openActionGuideModal);
    document.getElementById("btnCloseGuide").addEventListener("click", () => closeModal("guideModal"));
    document.getElementById("btnSettings").addEventListener("click", openSettingsModal);
    document.getElementById("btnCloseSettings").addEventListener("click", () => closeModal("settingsModal"));

    // Matrix Filter
    document.getElementById("filterWeek").addEventListener("change", (e) => filterMatrix(e.target.value));

    // Settings actions
    document.getElementById("startDateInput").addEventListener("change", (e) => {
        if (e.target.value) {
            appState.startDate = e.target.value;
            saveConfigToStorage();
            updateCalculatedTodayDay();
            renderCurrentDay();
            renderMatrix();
            updateOverallStats();
        }
    });

    document.getElementById("btnExportData").addEventListener("click", exportDataJSON);
    document.getElementById("importFileInput").addEventListener("change", importDataJSON);
    document.getElementById("btnResetData").addEventListener("click", resetAllData);
}

// Populate Day Selection Dropdown
function populateDayDropdown() {
    const select = document.getElementById("daySelect");
    select.innerHTML = "";
    ACTION_PLAN_DAYS.forEach(d => {
        const option = document.createElement("option");
        option.value = d.day;
        option.textContent = `Day ${d.day}: ${d.title}`;
        select.appendChild(option);
    });
}

function changeViewDay(newDayNum) {
    if (newDayNum < 1 || newDayNum > 90) return;
    appState.currentViewDay = newDayNum;
    renderCurrentDay();
    renderMatrix();
}

// Render Active Day Details
function renderCurrentDay() {
    const dayNum = appState.currentViewDay;
    const dayData = ACTION_PLAN_DAYS.find(d => d.day === dayNum) || ACTION_PLAN_DAYS[0];
    const dayProg = getDayProgress(dayNum);
    const calculatedToday = getCalculatedActiveDay();

    // Header Chips & Status
    document.getElementById("currentDayChip").textContent = `Day ${dayNum}`;
    document.getElementById("daySelect").value = dayNum;
    
    // Calculate Date corresponding to this Day
    const startDateObj = new Date(appState.startDate);
    const dayDateObj = new Date(startDateObj.getTime() + (dayNum - 1) * 24 * 60 * 60 * 1000);
    document.getElementById("dateDisplay").innerHTML = `<i class="fa-regular fa-calendar"></i> ${getReadableDate(dayDateObj)}`;

    const statusBadge = document.getElementById("dayStatusBadge");
    if (dayNum === calculatedToday) {
        statusBadge.textContent = "Today's Active Focus";
        statusBadge.className = "badge badge-active";
    } else if (dayNum < calculatedToday) {
        statusBadge.textContent = "Past Day Log";
        statusBadge.className = "badge badge-accent";
    } else {
        statusBadge.textContent = "Upcoming Roadmap";
        statusBadge.className = "badge";
    }

    // Focus Card Content
    const guideObj = TASK_GUIDES[dayData.guideKey] || TASK_GUIDES.outreach;
    document.getElementById("dayCategory").textContent = `${guideObj.category} • Day ${dayNum} Focus`;
    document.getElementById("dayTitle").textContent = dayData.title;

    // Outreach Display Counter
    document.getElementById("outreachCount").textContent = dayProg.baseline.outreach || 0;

    // Render Baseline Checklist
    renderBaselineChecklist(dayProg);

    // Render Specific Deliverables Checklist
    renderSpecificTasksChecklist(dayData, dayProg);

    // Calculate and update daily completion percentage
    updateDailyPercentDisplay(dayData, dayProg);
}

function renderBaselineChecklist(dayProg) {
    const container = document.getElementById("baselineTargetsList");
    container.innerHTML = "";

    DEFAULT_BASELINE_TARGETS.forEach(target => {
        if (target.type === "counter") return; // Outreach counter handled separately in sidebar

        const isChecked = dayProg.baseline[target.id] || false;
        const itemDiv = document.createElement("div");
        itemDiv.className = `task-item ${isChecked ? 'completed' : ''}`;
        itemDiv.innerHTML = `
            <div class="task-checkbox-wrapper">
                <div class="custom-checkbox">
                    ${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}
                </div>
                <span class="task-label">${target.label}</span>
            </div>
            <span class="badge ${isChecked ? 'badge-active' : ''}">${isChecked ? 'Done' : 'Pending'}</span>
        `;
        itemDiv.addEventListener("click", () => {
            dayProg.baseline[target.id] = !isChecked;
            saveProgressToStorage();
            renderCurrentDay();
            renderMatrix();
            updateOverallStats();
        });
        container.appendChild(itemDiv);
    });
}

function renderSpecificTasksChecklist(dayData, dayProg) {
    const container = document.getElementById("specificTasksList");
    container.innerHTML = "";

    dayData.tasks.forEach((taskText, idx) => {
        const isChecked = dayProg.tasks[idx] || false;
        const itemDiv = document.createElement("div");
        itemDiv.className = `task-item ${isChecked ? 'completed' : ''}`;
        itemDiv.innerHTML = `
            <div class="task-checkbox-wrapper">
                <div class="custom-checkbox">
                    ${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}
                </div>
                <span class="task-label">${taskText}</span>
            </div>
            <span class="badge ${isChecked ? 'badge-active' : ''}">${isChecked ? 'Completed' : 'To Do'}</span>
        `;
        itemDiv.addEventListener("click", () => {
            dayProg.tasks[idx] = !isChecked;
            saveProgressToStorage();
            renderCurrentDay();
            renderMatrix();
            updateOverallStats();
        });
        container.appendChild(itemDiv);
    });
}

// Calculate Percent Completion for a single day
function calculateDayPercent(dayData, dayProg) {
    let totalItems = 3 + dayData.tasks.length; // 3 non-counter baseline items + specific tasks
    let completedItems = 0;

    if (dayProg.baseline.work || dayProg.baseline.morning_block || dayProg.baseline.build_session) completedItems++;
    if (dayProg.baseline.learning) completedItems++;
    if (dayProg.baseline.crm) completedItems++;
    if (dayProg.baseline.outreach >= 10) completedItems += 0.5; // Bonus credit for outreach target

    dayProg.tasks.forEach(t => { if (t) completedItems++; });

    const pct = Math.min(100, Math.round((completedItems / totalItems) * 100));
    return pct;
}

function updateDailyPercentDisplay(dayData, dayProg) {
    const pct = calculateDayPercent(dayData, dayProg);
    document.getElementById("dailyPercent").textContent = `${pct}%`;
    document.getElementById("dailyProgressFill").style.width = `${pct}%`;
}

// Outreach Counter Logic
function updateOutreachCount(delta) {
    const dayProg = getDayProgress(appState.currentViewDay);
    const current = dayProg.baseline.outreach || 0;
    const newCount = Math.max(0, current + delta);
    dayProg.baseline.outreach = newCount;
    saveProgressToStorage();
    renderCurrentDay();
    renderMatrix();
    updateOverallStats();
}

function setOutreachCount(count) {
    const dayProg = getDayProgress(appState.currentViewDay);
    dayProg.baseline.outreach = count;
    saveProgressToStorage();
    renderCurrentDay();
    renderMatrix();
    updateOverallStats();
}

// Overall Stats, Streaks & Ring Calculations
function updateOverallStats() {
    let completedDays = 0;
    let totalOutreach = 0;
    const calculatedToday = getCalculatedActiveDay();

    ACTION_PLAN_DAYS.forEach(d => {
        const prog = appState.progress[d.day];
        if (prog) {
            if (prog.baseline && prog.baseline.outreach) {
                totalOutreach += prog.baseline.outreach;
            }
            const pct = calculateDayPercent(d, prog);
            if (pct >= 75) {
                completedDays++;
            }
        }
    });

    const totalPct = Math.round((completedDays / 90) * 100);

    // Calculate Streak (consecutive completed days up to calculatedToday)
    let streak = 0;
    for (let dayNum = 1; dayNum <= calculatedToday; dayNum++) {
        const prog = appState.progress[dayNum];
        if (prog) {
            const dayData = ACTION_PLAN_DAYS.find(d => d.day === dayNum);
            const pct = calculateDayPercent(dayData, prog);
            if (pct >= 50) {
                streak++;
            } else {
                streak = 0;
            }
        } else {
            streak = 0;
        }
    }

    // Update Header Badges
    document.getElementById("headerStreak").textContent = `${streak} ${streak === 1 ? 'Day' : 'Days'}`;
    document.getElementById("headerTotalProgress").textContent = `${totalPct}%`;

    // Sidebar Ring & Details
    document.getElementById("overallPercentText").textContent = `${totalPct}%`;
    document.getElementById("completedDaysCount").textContent = completedDays;
    document.getElementById("totalOutreachSent").textContent = totalOutreach;

    // SVG Ring Offset (Circle circumference = 2 * PI * 48 ≈ 301.59)
    const ring = document.getElementById("overallRing");
    const circumference = 301.59;
    const offset = circumference - (totalPct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
}

// Render 90-Day Matrix Tiles
function renderMatrix(filter = "all") {
    const grid = document.getElementById("matrixGrid");
    grid.innerHTML = "";
    const calculatedToday = getCalculatedActiveDay();

    ACTION_PLAN_DAYS.forEach(d => {
        // Apply filter
        if (filter === "w1" && d.day > 7) return;
        if (filter === "w2" && (d.day < 8 || d.day > 14)) return;
        if (filter === "w3" && (d.day < 15 || d.day > 21)) return;
        if (filter === "w4" && (d.day < 22 || d.day > 28)) return;
        if (filter === "w5" && (d.day < 29 || d.day > 60)) return;
        if (filter === "w9" && d.day < 61) return;

        const prog = getDayProgress(d.day);
        const pct = calculateDayPercent(d, prog);
        const isCurrentView = d.day === appState.currentViewDay;
        const isToday = d.day === calculatedToday;

        let tileClass = "day-tile";
        if (isCurrentView) tileClass += " active-day";
        if (pct >= 75) tileClass += " completed-day";

        let statusText = `${pct}% Done`;
        if (isToday) statusText = "★ Today";

        const tile = document.createElement("div");
        tile.className = tileClass;
        tile.innerHTML = `
            <div class="day-tile-number">Day ${d.day}</div>
            <div class="day-tile-title">${d.title}</div>
            <div class="day-tile-status">${statusText}</div>
        `;
        tile.addEventListener("click", () => changeViewDay(d.day));
        grid.appendChild(tile);
    });
}

function filterMatrix(filterValue) {
    renderMatrix(filterValue);
}

// Modal Operations: Action Guides
function openActionGuideModal() {
    const dayData = ACTION_PLAN_DAYS.find(d => d.day === appState.currentViewDay) || ACTION_PLAN_DAYS[0];
    const guide = TASK_GUIDES[dayData.guideKey] || TASK_GUIDES.outreach;

    document.getElementById("modalCategory").textContent = guide.category;
    document.getElementById("modalTitle").textContent = guide.title;

    const body = document.getElementById("modalBody");
    let html = `
        <p style="font-size:1.05rem; margin-bottom:1rem; color:#93c5fd;"><strong>Overview:</strong> ${guide.summary}</p>
        <h3 style="font-family:var(--font-heading); margin-top:1.25rem;">Step-by-Step Execution Plan:</h3>
        <div class="guide-step-list">
    `;

    guide.steps.forEach(step => {
        html += `<div class="guide-step">${step}</div>`;
    });

    html += `</div>`;

    if (guide.templates && guide.templates.length > 0) {
        html += `<h3 style="font-family:var(--font-heading); margin-top:1.5rem;">Copyable Action Templates & Scripts:</h3>`;
        guide.templates.forEach((tmpl, idx) => {
            html += `
                <div class="template-box">
                    <button class="btn-copy" onclick="copyTemplateText('${tmpl.name.replace(/'/g, "\\'")}', ${idx})">
                        <i class="fa-solid fa-copy"></i> Copy Script
                    </button>
                    <strong style="color:#f8fafc; font-size:0.9rem;">${tmpl.name}:</strong>
                    <pre id="tmpl-${idx}">${tmpl.content}</pre>
                </div>
            `;
        });
    }

    body.innerHTML = html;
    openModal("guideModal");
}

function copyTemplateText(name, idx) {
    const pre = document.getElementById(`tmpl-${idx}`);
    if (pre) {
        navigator.clipboard.writeText(pre.textContent).then(() => {
            alert(`Copied "${name}" to clipboard!`);
        });
    }
}

// Modal Helpers
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

function openSettingsModal() {
    document.getElementById("startDateInput").value = appState.startDate;
    openModal("settingsModal");
}

// Export / Import Data
function exportDataJSON() {
    const exportObject = {
        config: { startDate: appState.startDate },
        progress: appState.progress,
        exportedAt: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ai_freelance_backup_${getTodayFormatted()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported.progress) {
                appState.progress = imported.progress;
                saveProgressToStorage();
            }
            if (imported.config && imported.config.startDate) {
                appState.startDate = imported.config.startDate;
                saveConfigToStorage();
            }
            alert("Progress data imported successfully!");
            closeModal("settingsModal");
            updateCalculatedTodayDay();
            renderCurrentDay();
            renderMatrix();
            updateOverallStats();
        } catch (err) {
            alert("Error importing JSON file. Please verify file format.");
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    if (confirm("Are you sure you want to reset all tracked progress? This cannot be undone.")) {
        appState.progress = {};
        appState.startDate = getTodayFormatted();
        saveProgressToStorage();
        saveConfigToStorage();
        closeModal("settingsModal");
        updateCalculatedTodayDay();
        renderCurrentDay();
        renderMatrix();
        updateOverallStats();
    }
}
