/**
 * SAMPLE PROPOSAL DATA
 * Copy this file and rename it to create a new proposal.
 * Example: cp _sample-proposal.js my-client-proposal.js
 * Then update index.html: <script src="data/my-client-proposal.js"></script>
 */
const PROPOSAL_DATA = {
    "title": "Project Name - Quotation",
    "date": "DD Month YYYY",

    "company": {
        "name": "TechSerm",
        "logo": "assets/logo.svg",
        "favicon": "assets/favicon.svg",
        "footer": "assets/footer.svg",
        "website": "www.techserm.io",
        "email": "contact@techserm.io",
        "phone": "01777564786"
    },

    "coverLetter": {
        "date": "DD Month YYYY",
        "greeting": "Dear Sir/Madam,",
        "paragraphs": [
            "First paragraph of your cover letter. Introduce your company and the project.",
            "Second paragraph. Describe your approach and commitment.",
            "Third paragraph. Mention the attached report and transparency.",
            "Final paragraph. Invite questions and express enthusiasm."
        ],
        "signature": {
            "name": "Your Name",
            "role": "Your Role",
            "company": "TechSerm"
        }
    },

    "overview": [
        "First paragraph describing the project overview. Use <strong>bold</strong> for emphasis.",
        "Second paragraph about your approach and priorities."
    ],

    "techStack": [
        { "sector": "UI/UX Design", "technology": "Figma, Sketch" },
        { "sector": "Frontend", "technology": "React / Vue / Flutter" },
        { "sector": "Backend", "technology": "Node.js / Laravel / Dart" },
        { "sector": "Database", "technology": "MySQL / PostgreSQL / MongoDB" }
    ],

    "workProcess": [
        {
            "label": "a",
            "title": "Requirements Finalization",
            "items": [
                "Gather and document all requirements.",
                "Confirm features, data fields, and user roles."
            ]
        },
        {
            "label": "b",
            "title": "Planning",
            "items": [
                "Create wireframes for key pages.",
                "Define user flows and system architecture."
            ]
        },
        {
            "label": "c",
            "title": "Design",
            "items": [
                "Design UI with responsive layout.",
                "Create design mockups for client approval."
            ]
        },
        {
            "label": "d",
            "title": "Development",
            "items": [
                "Front-End: Build pages and components.",
                {
                    "text": "Back-End:",
                    "subItems": [
                        "Set up database and API endpoints.",
                        "Implement business logic.",
                        "Add authentication and security."
                    ]
                }
            ]
        },
        {
            "label": "e",
            "title": "Testing & Deployment",
            "items": [
                "Perform QA testing.",
                "Deploy to production server.",
                "Configure domain and SSL."
            ]
        }
    ],

    "resourceCosting": {
        "columns": ["Title", "Count", "Responsibility", "Duration (Days)", "Daily Rate (BDT)", "Total (BDT)"],
        "rows": [
            { "title": "Project Manager", "count": "1", "responsibility": "Project Management", "duration": "", "rate": "", "total": "" },
            { "title": "UI/UX Designer", "count": "1", "responsibility": "Design UI/UX", "duration": "", "rate": "", "total": "" },
            { "title": "Developer", "count": "2", "responsibility": "Frontend and Backend development", "duration": "", "rate": "", "total": "" },
            { "title": "QA Engineer", "count": "1", "responsibility": "Test Application", "duration": "", "rate": "", "total": "" }
        ],
        "footerTotal": ["", "Total", "", "", "", ""]
    },

    "features": [
        {
            "title": "Feature Module 1",
            "details": [
                "Sub-feature description 1",
                "Sub-feature description 2"
            ],
            "cost": "", "pm": "", "ui": "", "dev": "", "qa": "", "total": ""
        },
        {
            "title": "Feature Module 2",
            "details": [
                "Sub-feature description 1",
                "Sub-feature description 2",
                "Sub-feature description 3"
            ],
            "cost": "", "pm": "", "ui": "", "dev": "", "qa": "", "total": ""
        },
        {
            "title": "Feature Module 3",
            "details": [
                "Sub-feature description 1"
            ],
            "cost": "", "pm": "", "ui": "", "dev": "", "qa": "", "total": ""
        }
    ],

    "featureItemsPerPage": 5,

    "releasePlan": [
        {
            "release": 1,
            "features": ["Feature Module 1", "Feature Module 2"],
            "days": ""
        },
        {
            "release": 2,
            "features": ["Feature Module 3"],
            "days": ""
        }
    ],

    "payment": {
        "subtotal": "\u2014",
        "milestones": [
            { "label": "1<sup>st</sup> payment", "milestone": "Inception Report", "percent": "25%", "amount": "" },
            { "label": "2<sup>nd</sup> Payment", "milestone": "After First Release", "percent": "25%", "amount": "" },
            { "label": "3<sup>rd</sup> Payment", "milestone": "After Second Release", "percent": "25%", "amount": "" },
            { "label": "Final Payment", "milestone": "After Final Release", "percent": "25%", "amount": "" }
        ],
        "totalPercent": "100%",
        "totalAmount": "",
        "note": "* Payment will be updated based on the requirements"
    }
};