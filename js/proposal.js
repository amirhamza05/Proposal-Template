/**
 * TechSerm Proposal Generator
 * Reusable component-based proposal renderer.
 *
 * Usage:
 *   Load a JSON file and call renderProposal(data) to generate the full proposal.
 *   Open index.html?proposal=alumni-proposal to render data/alumni-proposal.json
 */

// ─── SVG ICONS (reused across components) ───
const ICONS = {
    website: '<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'
};

const WATERMARK_SVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(100,100)">
        <rect x="-70" y="-70" width="140" height="140" fill="none" stroke="#003C5B" stroke-width="6" transform="rotate(45)"/>
        <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#003C5B" stroke-width="4" transform="rotate(45)"/>
        <circle cx="0" cy="0" r="25" fill="none" stroke="#003C5B" stroke-width="4"/>
        <line x1="-70" y1="0" x2="-30" y2="0" stroke="#003C5B" stroke-width="3"/>
        <line x1="30" y1="0" x2="70" y2="0" stroke="#003C5B" stroke-width="3"/>
        <line x1="0" y1="-70" x2="0" y2="-30" stroke="#003C5B" stroke-width="3"/>
        <line x1="0" y1="30" x2="0" y2="70" stroke="#003C5B" stroke-width="3"/>
    </g>
</svg>`;

// ─── SHARED COMPONENTS ───

function topBar() {
    return `<div class="top-bar">
        <div class="top-bar-teal"></div>
        <div class="top-bar-navy"></div>
    </div>`;
}

function watermarkImg(favicon) {
    return `<div class="watermark">
        <img src="${favicon}" alt="Watermark">
    </div>`;
}

function watermarkSvg() {
    return `<div class="watermark">${WATERMARK_SVG}</div>`;
}

function innerFooter(footerImg) {
    return `<div class="page-footer">
        <img src="${footerImg}" alt="Footer" style="width: 100%; height: auto; display: block;">
    </div>`;
}

function pageNumber(num) {
    return `<div class="page-number">Page: ${num}</div>`;
}

/**
 * Wraps content in a standard inner page shell (top bar, watermark, footer, page number).
 */
function pageShell(content, pageNum, company) {
    return `<div class="page">
    ${topBar()}
    ${watermarkImg(company.favicon)}
    <div class="page-content">
        ${content}
    </div>
    ${pageNumber(pageNum)}
    ${innerFooter(company.footer)}
</div>`;
}


// ─── PAGE 1: COVER PAGE ───

function coverPage(data) {
    const c = data.company;
    return `<div class="page cover-page">
    ${topBar()}

    <!-- Left border accents -->
    <div class="left-accent">
        <div class="left-accent-top"></div>
        <div class="left-accent-bottom"></div>
    </div>

    <!-- Top-right corner decoration -->
    <svg class="corner-decor-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,0 200,0 200,180" fill="#003C5B"/>
        <polygon points="110,0 200,0 200,120" fill="#018BBC"/>
    </svg>

    <!-- Watermark -->
    ${watermarkImg(c.favicon)}

    <!-- Logo -->
    <div class="logo-container">
        <img src="${c.logo}" alt="${c.name} Logo">
    </div>

    <!-- Cover content -->
    <div class="cover-content">
        <h1 class="cover-title">${data.title}</h1>
        <p class="cover-date">${data.date}</p>
    </div>

    <!-- Footer -->
    <div class="page-footer">
        <div class="footer-cover-wrap">
            <div class="footer-cover-hump">
                <div class="footer-item">
                    <div class="icon">${ICONS.website}</div>
                    <div class="label">Website</div>
                    <div class="value">${c.website}</div>
                </div>
                <div class="footer-item">
                    <div class="icon">${ICONS.email}</div>
                    <div class="label">Email</div>
                    <div class="value">${c.email}</div>
                </div>
                <div class="footer-item">
                    <div class="icon">${ICONS.phone}</div>
                    <div class="label">Phone</div>
                    <div class="value">${c.phone}</div>
                </div>
            </div>
            <div class="footer-cover-wings"></div>
            <div class="footer-cover-navy"></div>
        </div>
    </div>
</div>`;
}


// ─── PAGE 2: COVER LETTER ───

function coverLetterPage(data, pageNum) {
    const cl = data.coverLetter;
    const paragraphs = cl.paragraphs.map(p => `<p>${p}</p>`).join('\n            ');

    const content = `
        <h2 class="section-heading">Cover Letter</h2>

        <p class="letter-date">Date: ${cl.date}</p>
        <p class="letter-greeting">${cl.greeting}</p>

        <div class="letter-body">
            ${paragraphs}
        </div>

        <div class="letter-sign">
            Sincerely,<br>
            ${cl.signature.name}<br>
            ${cl.signature.role}<br>
            ${cl.signature.company}
        </div>`;

    return pageShell(content, pageNum, data.company);
}


// ─── PAGE 3: OVERVIEW + TECH STACK ───

function overviewPage(data, pageNum) {
    const overviewHtml = data.overview.map(p => `<p class="overview-text">${p}</p>`).join('\n        ');

    const techRows = data.techStack.map(t =>
        `<tr>
            <td class="text-bold">${t.sector}</td>
            <td>${t.technology}</td>
        </tr>`
    ).join('\n                ');

    const content = `
        <h2 class="section-heading">1.0 Overview</h2>

        ${overviewHtml}

        <br><br>

        <h2 class="section-heading">2.0 Tools and Technology</h2>

        <table class="styled-table">
            <thead>
                <tr>
                    <th>Sector</th>
                    <th>Technology</th>
                </tr>
            </thead>
            <tbody>
                ${techRows}
            </tbody>
        </table>`;

    return pageShell(content, pageNum, data.company);
}


// ─── PAGE 4: WORK PROCESS ───

function renderProcessItem(item) {
    if (typeof item === 'string') {
        return `<li>${item}</li>`;
    }
    // Item with sub-items
    const subItems = item.subItems.map(s => `<li>${s}</li>`).join('\n                        ');
    return `<li>${item.text}
                    <ul class="process-sublist">
                        ${subItems}
                    </ul>
                </li>`;
}

function workProcessPage(data, pageNum) {
    const sections = data.workProcess.map(p => {
        const items = p.items.map(renderProcessItem).join('\n                ');
        return `<div class="process-section">
            <p class="process-title">${p.label}. ${p.title}</p>
            <ul class="process-list">
                ${items}
            </ul>
        </div>`;
    }).join('\n\n        ');

    const content = `
        <h2 class="section-heading">3.0 Work Process</h2>

        ${sections}`;

    return pageShell(content, pageNum, data.company);
}


// ─── PAGE 5: RESOURCE COSTING ───

function resourceCostingPage(data, pageNum) {
    const rc = data.resourceCosting;
    const headers = rc.columns.map(c => `<th>${c}</th>`).join('\n                    ');

    const rows = rc.rows.map(r =>
        `<tr>
            <td class="text-left text-bold">${r.title}</td>
            <td>${r.count}</td>
            <td>${r.responsibility}</td>
            <td>${r.duration}</td>
            <td>${r.rate}</td>
            <td>${r.total}</td>
        </tr>`
    ).join('\n                ');

    const footerCells = rc.footerTotal.map(c => `<td>${c}</td>`).join('\n                    ');

    const content = `
        <h2 class="section-heading">4.0 Resource Costing</h2>

        <table class="styled-table">
            <thead>
                <tr>
                    ${headers}
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
            <tfoot>
                <tr>
                    ${footerCells}
                </tr>
            </tfoot>
        </table>`;

    return pageShell(content, pageNum, data.company);
}


// ─── PAGES 6-7: FEATURE MODULE WISE COSTING ───

function featureRow(feature, index) {
    const details = feature.details.map(d => `<li>${d}</li>`).join('\n                            ');
    return `<tr>
        <td>${index + 1}</td>
        <td class="func-cell">
            <div class="func-title">${feature.title}</div>
            <ul>
                ${details}
            </ul>
        </td>
        <td>${feature.cost}</td>
        <td>${feature.pm}</td>
        <td>${feature.ui}</td>
        <td>${feature.dev}</td>
        <td>${feature.qa}</td>
        <td>${feature.total}</td>
    </tr>`;
}

function featurePages(data, startPageNum) {
    const features = data.features;
    const perPage = data.featureItemsPerPage || 5;
    const pages = [];
    let currentPage = startPageNum;

    for (let i = 0; i < features.length; i += perPage) {
        const chunk = features.slice(i, i + perPage);
        const isFirstPage = (i === 0);
        const isLastChunk = (i + perPage >= features.length);

        const rows = chunk.map((f, idx) => featureRow(f, i + idx)).join('\n                ');

        let tableHtml = '';

        if (isFirstPage) {
            // First page: has heading + thead
            tableHtml = `
        <h2 class="section-heading">5.0 Feature Module Wise Costing</h2>

        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 5px;">*Efforts for each resource is given in man days</p>
        <p style="font-size: 13px; color: var(--text-body); margin-bottom: 20px;">PM = Project Manager, UI = UI/UX Designer, D = Developer, QA= QA Engineer</p>

        <table class="feature-table">
            <thead>
                <tr>
                    <th style="width: 30px;">#</th>
                    <th style="width: 240px;">Functionalities</th>
                    <th>Cost</th>
                    <th>PM</th>
                    <th>UI</th>
                    <th>D</th>
                    <th>QA</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
            ${!isLastChunk ? '' : `<tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>`}
        </table>`;
        } else {
            // Continuation page: no heading, just table body
            tableHtml = `
        <table class="feature-table">
            <tbody>
                ${rows}
            </tbody>
            ${isLastChunk ? `<tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>` : ''}
        </table>`;
        }

        pages.push(pageShell(tableHtml, currentPage, data.company));
        currentPage++;
    }

    return { html: pages.join('\n\n'), nextPage: currentPage };
}


// ─── RELEASE PLAN PAGE ───

function releasePlanPage(data, pageNum) {
    const rows = data.releasePlan.map(r => {
        const featureList = r.features.map(f => `<li><strong>${f}</strong></li>`).join('\n                            ');
        return `<tr>
            <td>${r.release}</td>
            <td class="text-left">
                <ul style="padding-left: 18px; margin: 0;">
                    ${featureList}
                </ul>
            </td>
            <td>${r.days}</td>
        </tr>`;
    }).join('\n                ');

    const content = `
        <!-- Release Plan -->
        <h2 class="section-heading">Release Plan (Module Wise)</h2>
        <hr class="section-divider">

        <table class="styled-table">
            <thead>
                <tr>
                    <th>Release Number</th>
                    <th>Features</th>
                    <th>Approximate Time (Days)</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>`;

    return pageShell(content, pageNum, data.company);
}


// ─── PAYMENT BREAKDOWN PAGE ───

function paymentPage(data, pageNum) {
    const p = data.payment;

    const milestoneRows = p.milestones.map((m, i) =>
        `<tr>
            <td>${i + 1}</td>
            <td>${m.label}</td>
            <td>${m.milestone}</td>
            <td>${m.percent}</td>
            <td>${m.amount}</td>
        </tr>`
    ).join('\n                ');

    const content = `
        <!-- Payment Breakdown -->
        <h2 class="section-heading">Payment Breakdown (Module Wise)</h2>
        <hr class="section-divider">

        <!-- Subtotal box -->
        <table class="payment-subtotal">
            <thead>
                <tr>
                    <th colspan="2">Project Cost Overview</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Payment Subtotal</td>
                    <td style="text-align: right;">${p.subtotal}</td>
                </tr>
            </tbody>
        </table>

        <!-- Payment milestones table -->
        <table class="payment-milestones">
            <thead>
                <tr>
                    <th>Sl. No</th>
                    <th>Payment</th>
                    <th>Milestone</th>
                    <th>Percent (%)</th>
                    <th>Amount (BDT)</th>
                </tr>
            </thead>
            <tbody>
                ${milestoneRows}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">Total</td>
                    <td>${p.totalPercent}</td>
                    <td>${p.totalAmount}</td>
                </tr>
            </tfoot>
        </table>

        <p class="note-text">${p.note}</p>`;

    return pageShell(content, pageNum, data.company);
}


// ─── MAIN RENDERER ───

function renderProposal(data) {
    let pageNum = 2; // Cover page has no number; inner pages start at 2

    const pages = [];

    // Page 1: Cover
    pages.push(coverPage(data));

    // Page 2: Cover Letter
    pages.push(coverLetterPage(data, pageNum++));

    // Page 3: Overview + Tech Stack
    pages.push(overviewPage(data, pageNum++));

    // Page 4: Work Process
    pages.push(workProcessPage(data, pageNum++));

    // Page 5: Resource Costing
    pages.push(resourceCostingPage(data, pageNum++));

    // Pages 6+: Feature Module Wise Costing (auto-paginated)
    const featureResult = featurePages(data, pageNum);
    pages.push(featureResult.html);
    pageNum = featureResult.nextPage;

    // Release Plan
    pages.push(releasePlanPage(data, pageNum++));

    // Payment Breakdown
    pages.push(paymentPage(data, pageNum++));

    document.body.innerHTML = pages.join('\n\n');
}


// ─── AUTO-LOAD ───
// Data is loaded via <script src="data/xxx.js"> which sets PROPOSAL_DATA global

document.addEventListener('DOMContentLoaded', function () {
    if (typeof PROPOSAL_DATA !== 'undefined') {
        renderProposal(PROPOSAL_DATA);
    } else {
        document.body.innerHTML = `
            <div style="max-width: 600px; margin: 100px auto; font-family: sans-serif; text-align: center;">
                <h1 style="color: #c0392b;">Proposal Data Not Found</h1>
                <p style="color: #555;">No <code>PROPOSAL_DATA</code> variable found.</p>
                <p style="margin-top: 30px; color: #777;">
                    Make sure to include a data script before proposal.js:<br>
                    <code>&lt;script src="data/alumni-proposal.js"&gt;&lt;/script&gt;</code>
                </p>
            </div>`;
    }
});