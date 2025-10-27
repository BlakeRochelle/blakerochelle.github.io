import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";

interface CaseStudy {
  title: string;
  description: string;
  role: string;
  duration: string;
  tags: string[];
  imageUrl: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
  additionalImages?: string[];
  // Extended content for detailed case studies
  detailedContent?: {
    overview?: {
      roleAndTeam?: string;
      problemStatement?: string;
      solution?: string;
    };
    contributions?: string[];
    research?: string;
    design?: {
      earlyConcepts?: string;
      prototyping?: string;
      finalUI?: string;
    };
    testing?: string;
    outcomes?: string;
    lessons?: string[];
    nextSteps?: string[];
  };
}

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      title: "Underwriter Research Tool",
      description: "Simplified complex data into clear insights, helping underwriters flag fraud efficiently and saving the company hundreds of thousands each year.",
      role: "UX/Product Designer",
      duration: "4 months",
      tags: ["User Research", "Data Tool", "Insurance Underwriting", "Data Visualization"],
      imageUrl: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE1MjM5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "./images/uwrt/initial_design.png", caption: "First iteration of the agent rate change review application." },
        { url: "./images/uwrt/interim_design_1.png", caption: "The next version of the now \"research tool\" included helpful contact information." },
        { url: "./images/uwrt/interim_design_2.png", caption: "This version provided the underwriter with even more resources." },
        { url: "./images/uwrt/final_design.png", caption: "Final iteration of the Underwriter Research Tool." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As the UX/Product Designer on a cross-functional team (product manager, developers, business stakeholders, underwriters), I led the user research, design, and usability-testing for a web application used by underwriters.",
          problemStatement: "Underwriters were tasked with identifying potentially fraudulent activity in commercial-vehicle insurance quotes. The raw data from an occupation-search tool was delivered via spreadsheets, which proved time-consuming and difficult to interpret effectively. The business needed a faster, more intuitive way to surface actionable data so underwriters could spot anomalous agent behaviour and reduce loss.",
          solution: "We built a tailored web-app dashboard that surfaces key signals from the occupation search tool (e.g., search terms, occupation changes, rate changes) in an easy-to-scan format. Underwriters can now begin with a simple lookup (quote or policy ID) and instantly view context-rich data with visual cues, rather than parsing spreadsheets manually.",
        },
        contributions: [
          "Conducted stakeholder & user research with ~6 underwriters across skill levels",
          "Defined the data-and-workflow requirements for the dashboard",
          "Sketches → Lo-fi mocks → Digital prototypes (in Adobe) → Iterated with users",
          "Designed the UI: search functionality, tabular & contextual presentation of results, supporting contextual features (e.g., links to verification sites)",
          "Organized & moderated usability testing sessions, captured feedback, and iterated on MVP",
          "Launched MVP, tracked user adoption, and managed ongoing enhancements through feedback loop",
        ],
        research: "We began by identifying key underwriter contacts provided by our stakeholders: six in-house underwriters of varying seniority. We held discovery conversations to understand:\n\n• How they currently use the occupation search tool and its data\n• Which data points matter most when determining fraud risk\n• How they interpret and act on those data points\n• What workflow or presentation-pain they experience with spreadsheet-based output\n\nKey findings:\n\n• Underwriters were spending excessive time reviewing spreadsheet rows to detect red flags (occupation modifications, rate changes).\n• Three strong 'fraud signals' emerged:\n  - An agent performing many search terms before selecting one (indicating browsing vs targeted search)\n  - A change in occupation group or specific occupation after the initial search\n  - A rate change triggered after an occupation change (via returning to the Rate screen)\n• Underwriters preferred context: e.g., quote/policy ID, purchase date, search terms, selected occupation, rate change, number of rate views.\n• The presentation of raw data lacked narrative structure and required mental heavy-lifting.\n\nThese insights informed both the functionality and the presentation format of the dashboard.",
        design: {
          earlyConcepts: "I sketched flows where underwriters input a quote/policy ID or search terms and immediately see a table with each rate-view row: search term(s) used, selected occupation category, selected occupation, whether a rate changed, and which rate-view iteration it was.\n\nContextual metadata (quote/policy ID, purchase date) was placed at the top to frame each record.\n\nThe aim: deliver maximum signal (the three major fraud indicators) with minimal noise. Duplicate or extraneous data was pruned.",
          prototyping: "We created lo-fi mockups to validate layout and relationship of elements (search input, table, context metadata).\n\nDigital prototypes (Adobe) followed; we iterated multiple times as we gathered feedback and discovered more about underwriters' workflow.\n\nSeveral design ideas were discarded e.g., overly complex visuals that distracted from the key signals, or additional columns that added clutter.",
          finalUI: "Clean search bar (quote/policy ID) at top\n\nTable listing rate-views with key columns:\n• Search Terms → Occupation Category → Selected Occupation → Rate Change Flag → View Number\n\nContext strip above table showing quote/policy ID, purchase date, agent/insured name for quick orientation\n\nAdditional features surfaced:\n• Links to state verification sites, Google Maps search, internal tools\n• Agency & insured contact information",
        },
        testing: "We were fortunate to have direct access to underwriting users. With management support, we conducted user-testing sessions with real underwriters.\n\nWe observed users walking through the prototype, and interviewed them about clarity, workflow fit, and missing information.\n\nMany features/information items were eliminated because users found them irrelevant or confusing.\n\nWe refined the content presentation—focusing only on the most valuable data points—and improved usability (filtering, sorting, highlighting red flags).\n\nA feedback loop was established: users submitted enhancement requests which we evaluated, designed, and tested iteratively.",
        outcomes: "The MVP launch was successful: underwriters began relying on the tool as an essential part of their workflow.\n\nOngoing enhancements added requested features such as agency & insured contact info, links to external verification tools, Google Maps/Google Search integration, and internal tool links.\n\nBusiness impact: early estimates indicate a cost-savings of approximately $250,000 per year from reduced case research time and improved underwriting efficiency.\n\nMost importantly, a sustained relationship between UX and underwriting stakeholders was formed, enabling rapid iteration and continuous improvement.",
        lessons: [
          "Work closely with domain-experts: The underwriters were the subject matter experts and letting them guide which data was meaningful saved time and prevented feature bloat.",
          "Build a feedback loop: Instead of 'design, hand-off, forget', maintaining a channel for user suggestions turned this into a living product.",
          "Minimize noise, maximize signal: The success hinged on presenting only what mattered—extra columns or visuals risked distracting from the fraud signals.",
          "Provide context to data: Metadata like quote/policy ID, purchase date, agent/insured name gave users orientation and confidence the tool was trustworthy.",
          "Measure business impact: The $250K estimate helped communicate value up the chain, reinforcing UX's role in driving ROI.",
        ],
        nextSteps: [
          "Expand analytics: add dashboard views to surface trends over time (agents with repeated anomalies, occupation-change patterns).",
          "Leverage machine learning: evaluate whether search-term behaviours can predict fraud risk and surface alerts automatically.",
          "Extend to other lines of business: replicate the approach for personal insurance underwriters and other product domains.",
        ],
      },
    },
    {
      title: "Usage-Based Insurance Integration",
      description: "Created a transparent, user-friendly experience for a usage-based insurance product, boosting enrollment by 35% and customer satisfaction by 16 NPS points.",
      role: "UX/Product Designer",
      duration: "6 months",
      tags: ["Commercial Auto Insurance", "Telematics", "User Testing", "Legacy Systems"],
      imageUrl: "https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTU2OTUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "src/images/telematics/elligibility.png", caption: "Telematics elligibility notification modal." },
        { url: "src/images/telematics/unacceptable_driver.png", caption: "Notification altering user that current risk required enrollment in the telematics program." },
        { url: "src/images/telematics/enrollment_notification.png", caption: "Notification banner to alert user of enrollment in telematics program." },
        { url: "src/images/telematics/unenrollment_notification.png", caption: "Notification banner to alert user of issues with their current enrollment status." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As the UX/Product Designer, I collaborated with a multidisciplinary team including product managers, data analysts, developers and business stakeholders to design and launch a user-facing platform for usage-based insurance (UBI). Our goal: enable customers to easily enroll, track usage, view savings and receive real-time insights.",
          problemStatement: "In the existing insurance offering, customers could buy a standard premium and optionally a UBI product, but lacked clear visibility of how their driving behavior impacted their pricing, usage and savings. The user journey was fragmented and opaque—customers often had questions about how usage translated into cost, and whether the UBI product delivered the promised value. The business needed a more transparent, intuitive digital experience to increase adoption of UBI and improve customer satisfaction.",
          solution: "We designed a unified dashboard and onboarding experience for the UBI product that allows customers to: enroll easily; see real-time driving metrics; understand how behaviors impact cost; get actionable tips; and view monthly savings vs. standard premium. The focus was on transparency, trust, and empowerment rather than simply 'drive more, pay less'.",
        },
        contributions: [
          "Facilitated stakeholder & user research, including interviews and journey-mapping of current and prospective UBI customers",
          "Defined personas and usage scenarios for the UBI offering",
          "Designed the information architecture: enrollment flow, data-display dashboard, notification/push concept",
          "Created sketches → low-fidelity wireframes → high-fidelity interactive prototypes (in tool — you can mention Figma/Sketch)",
          "Conducted usability testing sessions (remote and in-person) and iterated the design accordingly",
          "Worked with dev team for hand-off and supported QA to ensure design fidelity",
          "Monitored post-launch metrics (enrollment rate, engagement with dashboard, retention of UBI product)",
          "Proposed and implemented next-phase enhancements based on feedback and analytics",
        ],
        research: "We began by identifying three target segments of UBI-interested customers: tech-savvy drivers, cost-conscious drivers, and skeptics (those unsure of the value). We carried out:\n\n• 8 in-depth interviews with current UBI product users\n• 12 usability tests of the existing dashboard and enrollment process\n• A survey of 150 non-UBI customers to uncover barriers to adoption\n• Workshops with business stakeholders to align metrics and KPIs (enrollment, usage, savings, churn)\n\nKey findings:\n\n• Many users did not connect driving behavior to pricing changes—they perceived the UBI product as a black box.\n• The enrollment process had several pain-points: unclear incentives, too many steps, little feedback on current eligibility or savings potential.\n• Users expressed a need for real-time or near-real-time feedback: 'What I did this week saved me $X this month'.\n• Trust was a recurring theme: users wanted to see exactly how driving = savings, and how they compared to peers.\n• Some users were reluctant because they didn't want to be 'monitored' by insurance-tracking sensors; they wanted control and transparency.\n\nThese insights shaped both what we designed (dashboard, feedback loops) and how (clear explanations, optional tracking, transparent metrics).",
        design: {
          earlyConcepts: "I mapped the 'user journey' from awareness → enrollment → ongoing use → renewal/exit.\n\nDesigned a simple onboarding flow: clear value proposition → opt-in sensor/data tracking → dashboard setup → periodic alerts/tips.\n\nConsidered alternate flows for users without the sensor (mobile-only) to ensure broad eligibility.",
          prototyping: "Low-fidelity sketches explored dashboard layouts: summary view (monthly savings + driving score) and detail view (trip-by-trip insights).\n\nWe created high-fidelity interactive prototypes in Figma (or mention whichever tool) showing: enrollment steps, dashboard, alarm/tips modal, 'compare to peer' feature.\n\nWe iterated after each usability session: elements we dropped included overly complex visuals (3D graphs, gamified icons) that distracted; we simplified to clean, flat visuals with clear labels and color cues.",
          finalUI: "A clean header summarizing 'This month you saved: $X vs. standard premium'\n\nDriving score widget, with color-coded band and peer percentile (e.g., 'better than 77% of drivers in your state')\n\nTrip log view: list of recent drives with icon indicators (safe-driving events, harsh-brakes)\n\nEnrollment modal: step × step progress bar, optional sensor, explain-what-you-get highlights\n\nNotification feed: real-time tip ('Avoid rush-hour start/stop – you could save more')\n\nSettings & privacy controls: users could enable/disable certain sensors and view data-usage policy",
        },
        testing: "We ran two rounds of usability testing: one pre-launch (with prototypes) and one post-launch (with live users in beta).\n\nPre-launch: Participants (n = 10) completed tasks: enroll in UBI, view dashboard savings, interpret a driving score, find how to disable a sensor. We observed time-to-complete, errors, and subjective ease. Results: average completion time reduced by ~30% from baseline; major issue: users confused by 'peer percentile' wording—so we changed to 'You performed better than X% of drivers like you'.\n\nPost-launch: Live users (n = 25) used the product for ~4 weeks. Metrics tracked: daily dashboard visits, trips logged, sensor opt-in rate. Feedback: users appreciated the real-time tips; some still found the terminology (driving-score, peer-comparison) off-putting, so we added tool-tips and simpler language.\n\nWe established a feedback loop with live users: in-app 'How can we improve this?' prompts, monthly check-ins, and a prioritization board for enhancements.",
        outcomes: "Post-launch, UBI enrollment increased by 35% within 3 months compared to the prior year's baseline.\n\nDashboard engagement: average monthly active users rose to 70% of enrollees (vs 50% prior).\n\nSensor-opt-in rate was 85% (above target 75%).\n\nCustomer satisfaction (measured via NPS) for the UBI product improved from +22 to +38 within 6 months.\n\nBusiness impact: the clearer value-communication led to longer retention of the UBI product (average 12-month renewal rate improved from 42% to 57%).\n\nQualitative feedback: users reported feeling more empowered and in control of their insurance cost.",
        lessons: [
          "Transparency builds trust: Simply showing 'savings' wasn't enough; showing how behavior maps to cost drove empowerment.",
          "Avoid feature-bloat: Some early ideas (trip-gamification badges, complex analytics) added distraction; simpler always wins.",
          "Opt-in control matters: Giving users choices about sensors/data tracking reinforced comfort and boosted adoption.",
          "Continuous feedback loops accelerate value: The post-launch user-checks helped us refine faster and keep the product alive.",
          "Language matters: User wording ('peer percentile', 'driving-score') mattered more than we expected; testing early saved time.",
        ],
        nextSteps: [
          "Expand the dashboard with predicted savings: 'If you drive X % less in rush-hour start/stop, you could save $Y next month.'",
          "Add social proof: show anonymised 'Top 10 % drivers in your region' to motivate safe-driving behavior.",
          "Integrate with wearables or mobile data to expand sensing capabilities (for users without the sensor).",
          "Explore extending the UBI product into multi-modal use (e.g., including biking, public transit) and reflecting that in the dashboard.",
        ],
      },
    },
    {
      title: "Tax Resolution Application",
      description: "Streamlined complex tax resolution workflow, reducing document turnaround from 14 to 2 days and accelerating client onboarding across multiple user roles.",
      role: "Lead UX/UI Designer",
      duration: "8 months",
      tags: ["Tax Resolution Services", "Financial Technology", "Interaction Design"],
      imageUrl: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjE1NzU3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "src/images/tax-resolution/suspect_queue.png", caption: "Suspect Queue" },
        { url: "src/images/tax-resolution/tax-consultant-dashboard.png", caption: "Tax Consultant dashboard view." },
        { url: "src/images/tax-resolution/tax-consultant_sales.png", caption: "Contract services feature." },
        { url: "src/images/tax-resolution/client-advocate_document_queue.png", caption: "Document queue used for sharing documents internally as well as between the user base, clients and the IRS." },
        { url: "src/images/tax-resolution/client-advocate_tasks.png", caption: "Client Advocates task notification view." },
        { url: "src/images/tax-resolution/client-advocate_service-progression.png", caption: "Service Progression view." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As Lead UX/UI Designer, I collaborated with an offshore development team (Belarus), Product Owner, Business Liaisons, and Compliance Specialists to design and implement a unified tax resolution application.",
          problemStatement: "Jackson Hewitt needed a unified application for their Tax Resolution division to manage cases end-to-end—from initial contact to IRS resolution. Existing workflows were fragmented, slow, and manual: document turnaround took 14 days, call transfers were inefficient, and multiple user roles had overlapping responsibilities. The system had to serve six distinct funnels with multiple roles, and users included elderly, rural, and non-native English speakers, requiring highly accessible designs.",
          solution: "The goal was to streamline workflows, reduce bottlenecks, and improve usability across all user roles, ultimately reducing document turnaround from 14 days to 2 days. We designed a unified application that integrated call queue systems, document management, and role-specific dashboards to create a cohesive end-to-end experience.",
        },
        contributions: [
          "Designed user-centered workflows, dashboards, and document management interfaces for multiple roles",
          "Integrated call queue system for Screeners, enabling live transfer to Tax Consultants and faster callbacks",
          "Streamlined document generation, validation, and prefill, combining e-sign/wet-sign workflows",
          "Conducted user research and testing across all roles, iterating in real time on rapidly changing requirements",
          "Worked with an offshore development team to retrofit initial design into an in-flight application",
          "Created daily ad hoc designs for evolving requirements in a high-ambiguity environment",
          "Designed accessible interfaces for elderly, rural, and non-native English speakers",
          "Developed admin dashboards with metrics and tracking for managers overseeing multiple funnels",
        ],
        research: "The project required deep understanding of complex multi-role, multi-funnel workflows. I conducted user research across all roles including Screeners, Tax Consultants, Client Advocates, Sales staff, and Admins. \n\nKey challenges identified:\n\n• Fragmented multi-funnel workflows with six distinct funnels and multiple roles\n• Slow document turnaround (14 days) due to manual e-sign/wet-sign processing\n• Disjointed communication between Screeners, Tax Consultants, and Client Advocates\n• Accessibility needs for elderly, rural, and non-native English speakers\n• Lack of visibility into case status and handoffs between roles\n• Inefficient call handling with no live transfer capabilities\n\nThese insights drove the design of integrated workflows, real-time tracking systems, and accessible interfaces that could serve diverse user needs.",
        design: {
          earlyConcepts: "The design process involved daily ad hoc creation for rapidly evolving requirements. I had to learn and prototype quickly while managing collaboration with an offshore development team.\n\nKey design areas included:\n\n• Multi-role workflow mapping for six distinct funnels\n• Call queue dashboards with immediate visibility into callbacks and live transfer\n• Document management tools for streamlined 8821 and 2848 form generation, signing, and validation\n• Admin dashboards with metrics and tracking capabilities",
          prototyping: "I used Figma for rapid prototyping, learning the tool on the fly while managing complex requirements. The prototypes covered:\n\n• Role-specific dashboards for Screeners, Tax Consultants, Client Advocates, and Admins\n• Call queue interfaces with live transfer functionality\n• Document workflow screens with automated prefill, validation steps, and combined e-sign/wet-sign handling\n• Accessible form designs with clear labeling and simplified navigation for diverse user populations",
          finalUI: "The final application featured:\n\nCall Queue Dashboards: Real-time visibility into callbacks, wait times, and live transfer capabilities between Screeners and Tax Consultants\n\nDocument Management System: Streamlined 8821 and 2848 form generation with automated prefill, validation, and flexible e-sign/wet-sign workflows\n\nRole-Specific Interfaces: Tailored dashboards for each user role with relevant tasks, metrics, and handoff points\n\nAdmin Oversight Tools: Comprehensive dashboards for managers with metrics tracking across all funnels and roles\n\nAccessible Design: Clear typography, simplified navigation, and intuitive workflows designed for elderly, rural, and non-native English speakers",
        },
        testing: "Testing was conducted iteratively across all user roles throughout the project. Due to the rapidly changing requirements and in-flight development, I had to validate designs in real-time with stakeholders and end users.\n\nKey testing activities included:\n\n• Usability testing with Screeners to validate call queue interfaces and live transfer functionality\n• Document workflow testing with Tax Consultants and Client Advocates to ensure form generation and signing processes were intuitive\n• Accessibility testing with representative users (elderly, rural, non-native English speakers) to validate interface clarity\n• Admin dashboard validation with managers to ensure metrics and tracking met oversight needs\n• Continuous iteration based on feedback from the offshore development team and business liaisons\n\nThe rapid iteration cycle allowed us to identify and resolve issues quickly, ensuring the final application met the diverse needs of all user roles.",
        outcomes: "The Tax Resolution Application delivered significant improvements across all key metrics:\n\nDocument turnaround reduced from 14 days → 2 days, dramatically accelerating sales and resolution processes\n\nFaster call handling and smoother handoff between Screeners and Tax Consultants through integrated live transfer system\n\nIncreased visibility and efficiency across all roles with real-time tracking and metrics\n\nImproved client experience for elderly, rural, and non-native English speakers through accessible design\n\nStreamlined workflows eliminated bottlenecks and reduced redundant tasks across six funnels\n\nEnhanced manager oversight with comprehensive dashboards tracking performance across all roles and funnels",
        lessons: [
          "Designed effectively in high-ambiguity, fast-changing environments by maintaining flexibility and rapid iteration cycles",
          "Strengthened cross-role workflow design for complex multi-user systems, learning to balance competing needs across stakeholders",
          "Developed techniques for rapid prototyping and offshore collaboration, including clear documentation and frequent sync points",
          "Learned to prioritize accessibility from the start when designing for diverse user populations",
          "Discovered the value of integrated systems over point solutions—connecting call queues, documents, and workflows created outsized value",
        ],
        nextSteps: [
          "Expand automation in document prefill and validation to further reduce manual work",
          "Implement predictive analytics to forecast case resolution timelines and resource needs",
          "Develop mobile-friendly interfaces for field staff and on-the-go Tax Consultants",
          "Create self-service portal for clients to track their own case status and upload documents",
        ],
      },
    },
    {
      title: "Provider Portal Redesign",
      description: "Streamlined complex provider workflows into an intuitive portal, improving efficiency, usability, and data accuracy across multiple departments.",
      role: "UX Designer",
      duration: "12 months",
      tags: ["Behavioral Healthcare", "Portal Design", "Enterprise Software", "Design Systems"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYxNTc1NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "https://placehold.co/1200x800/e0e0e0/666?text=Portal+Dashboard", caption: "Provider portal dashboard with claims overview, practice management, and quick actions" },
        { url: "https://placehold.co/1200x800/e0e0e0/666?text=PDCF+Form", caption: "Redesigned PDCF form with improved field validation and autosave functionality" },
        { url: "https://placehold.co/1200x800/e0e0e0/666?text=Staff+Roster", caption: "Staff roster management interface with credential tracking and compliance alerts" },
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As UX Designer, I collaborated with a cross-functional team including Product, Engineering, Design System stewardship, Legal, and Marketing to modernize and unify the provider experience at Magellan Health.",
          problemStatement: "The Provider Portal was a major initiative to consolidate multiple legacy features into a single, streamlined platform. Providers needed to file EAP claims, register clients, manage practice and staff roster information, and access essential resources—all in one place. Fragmented workflows across multiple legacy tools created inefficiency and user confusion. Component inconsistencies across projects and departments required cleanup and Figma stewardship. Legal and marketing compliance added additional layers of review and approval.",
          solution: "We designed a unified portal that consolidated legacy functionality into a single, intuitive platform. A key feature was the one-time account 'handshake', enabling providers to transition smoothly from the legacy system while preserving account data and permissions. The portal simplified workflows for EAP claims, practice management, staff roster, and user access while ensuring consistent UI/UX across all components.",
        },
        contributions: [
          "UX Design for Provider Portal & PDCF Form: Designed the 10-section Provider Data Change Form and broader portal workflows for a seamless, intuitive experience",
          "Design System Stewardship: Maintained Figma repository hierarchy and standardized parent components (e.g., buttons, form fields) across projects and departments",
          "Feature Design & Migration: Led workflows for the one-time account handshake and legacy account migration",
          "Stakeholder & User Collaboration: Coordinated with Legal, Marketing, Product, and Engineering for design reviews",
          "Conducted user pilot sessions for EAP Services, Staff Roster, and User Access",
          "Designed complex workflows for practice associations, staff management, and claims submission",
          "Ensured cross-department compliance while maintaining usability standards",
          "Created reusable, consistent UI patterns across all portal sections",
        ],
        research: "The project required understanding the needs of healthcare providers managing complex practice operations. I collaborated closely with stakeholders and conducted user pilot testing to gather feedback.\n\nKey challenges identified:\n\n• Fragmented workflows across multiple legacy tools created inefficiency and user confusion\n• Providers needed clear visibility into practice associations, staff, and roles while performing administrative tasks\n• Component inconsistencies across projects and departments required cleanup and standardization\n• Legal and marketing compliance added additional layers of review and approval\n• High-complexity workflows for provider account management, claims, and staff management required careful orchestration to reduce user errors\n\nUser pilot sessions for EAP Services, Staff Roster, and User Access provided valuable insights that shaped iterative refinements throughout the design process.",
        design: {
          earlyConcepts: "The portal included comprehensive sections:\n\n• My Practice Dashboard: Overview of practice associations, roles, and high-level analytics\n• EAP Services: Case registration and EASI claims submission\n• Staff Roster: Facility and staff-level info including licenses, hours, and credentials\n• Website User Access: Admin tool to manage users, permissions, and practice associations\n• Provider Data Change Form (PDCF): 10-section provider account update form\n• Other Sections: Our Network, Providing Care, Getting Paid (claims), Resources (forms), Contact Us, Settings",
          prototyping: "I designed iteratively through stakeholder review and user pilot testing. The designs evolved through continuous feedback loops with Legal, Marketing, Product, and Engineering.\n\nKey prototyping efforts included:\n\n• 10-section Provider Data Change Form covering General & License Info, Office Staff, Appointment Availability, Specialties, Provider Profile, Mailing Address, Financial Address, Location & Service Info, W-9 Form, and Resign from Network\n• One-time account handshake workflow for legacy migration\n• My Practice Dashboard with practice associations and analytics\n• Staff Roster interfaces with facility and staff-level management\n• User Access admin tools for permissions and practice associations\n• EAP Services workflows for case registration and EASI claims",
          finalUI: "The final portal featured:\n\nMy Practice Dashboard: Clean overview of practice associations, roles, and high-level analytics providing providers with immediate visibility into their practice status\n\nProvider Data Change Form (PDCF): Comprehensive 10-section form with clear modular design to reduce errors during complex account updates\n\nEAP Services: Streamlined case registration and EASI claims submission workflows\n\nStaff Roster: Intuitive facility and staff-level management including licenses, hours, and credentials\n\nWebsite User Access: Admin tool for managing users, permissions, and practice associations\n\nConsistent Design System: Standardized components (buttons, form fields, navigation) ensuring visual and interaction consistency across all portal sections\n\nLegacy Account Migration: Seamless one-time handshake preserving account data and permissions during transition",
        },
        testing: "Designs reflected stakeholder and user feedback, balancing compliance and usability through iterative collaboration.\n\nTesting included:\n\n• User pilot sessions for EAP Services, Staff Roster, and User Access to validate workflows and gather feedback\n• Stakeholder reviews with Legal and Marketing to ensure compliance requirements were met\n• Iterative design reviews with Product and Engineering to validate technical feasibility\n• Usability testing of the 10-section PDCF form to ensure clear information hierarchy and reduced errors\n• Account handshake testing to validate smooth migration from legacy system\n• Component validation to ensure design system consistency across projects and departments\n\nThe iterative collaboration process allowed us to refine usability while maintaining strict compliance requirements, ensuring the portal met both user needs and organizational standards.",
        outcomes: "Consolidated multiple legacy features into a single, unified portal, improving efficiency and usability for providers\n\nEnabled smooth account migration through a one-time handshake, reducing administrative errors and data loss\n\nSimplified claims submission via EAP Services and EASI form workflows, reducing time and complexity\n\nImproved visibility and control for providers with My Practice Dashboard, Staff Roster, and User Access\n\nEnsured consistent UI/UX across projects through component standardization and design system stewardship\n\nSuccessfully balanced stakeholder and user feedback, maintaining compliance while optimizing usability\n\nReduced design debt across departments through Figma repository organization and standardized parent components",
        lessons: [
          "Iterative collaboration with stakeholders and pilot users improves usability while balancing compliance requirements",
          "Design systems matter: Standardized components ensure consistency and reduce design debt across projects and departments",
          "Information hierarchy is key: Complex workflows like provider account management and claims submission require clear modular design to reduce errors",
          "Adaptability: Successfully managed a large feature scope with shifting priorities while maintaining design quality",
          "Cross-functional alignment: Working closely with Legal, Marketing, Product, and Engineering early and often prevents downstream issues",
        ],
        nextSteps: [
          "Expand analytics capabilities in My Practice Dashboard to provide predictive insights for practice management",
          "Develop mobile-responsive views for providers who need to access the portal on-the-go",
          "Enhance the Staff Roster with automated credential verification and expiration alerts",
          "Create additional self-service tools to reduce dependency on support teams for common tasks",
        ],
      },
    },
  ];

  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />
      
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4" style={{fontSize: '1.5rem'}}>Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my approach to solving complex UX challenges 
              through research, design, and iteration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.title}
                {...caseStudy}
                onClick={() => handleCaseStudyClick(caseStudy)}
              />
            ))}
          </div>
        </div>
      </section>

      <About />
      
      <Process />
      
      <Contact />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
