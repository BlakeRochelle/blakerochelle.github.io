import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import { Contact } from "./components/Contact";
import ReactMarkdown from 'react-markdown';

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
      title: "Commerical Auto Underwriter Research Tool",
      description: "Simplified complex data into clear insights, helping underwriters flag fraud efficiently and saving the company hundreds of thousands each year.",
      role: "UX/UI Designer and Developer",
      duration: "4 months",
      tags: ["Fraud Detection", "Insurance Underwriting", "Data Visualization", "User Research"],
      imageUrl: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE1MjM5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "./images/uwrt/initial_design.png", caption: "Early design of the application which would allow users to review rate changes based on occupation selection." },
        { url: "./images/uwrt/interim_design_1.png", caption: "Secondary iteration of the now \"research tool\" included helpful case-related contact information." },
        { url: "./images/uwrt/interim_design_2.png", caption: "This version of the application provided the underwriter with additional requested resources." },
        { url: "./images/uwrt/final_design.png", caption: "Final design iteration of the Underwriter Research Tool." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As the UX/Product Designer on a lean team, working closely with business stakeholders and underwriters, I led user research, design, and usability-testing for a web application used by underwriters.",
          problemStatement: "Underwriters were tasked with identifying potentially fraudulent activity in the commercial-vehicle insurance quoting process, through occupation changes. The raw data from an occupation-search tool was previously delivered via spreadsheets, which proved time-consuming and difficult to interpret effectively. The business needed a faster, more intuitive way to surface actionable data so underwriters could spot anomalous agent behaviour and reduce loss.",
          solution: "We built a tailored web-app dashboard that surfaces key signals from the occupation search tool (e.g., search terms, occupation changes, occupation selection, etc) in an easy-to-scan tabular format. Underwriters can now begin with a simple lookup (using Quote or Policy ID) and instantly view context-rich data with visual cues, rather than parsing spreadsheets manually. We also uncovered and provide additional resources that would increase productivity, such as Agency and Insured's Information and external resources such as Sunbiz and the BBB.",
        },
        contributions: [
          "Conducted stakeholder interview & user research with ~6 underwriters across all skill levels",
          "Defined the data-and-workflow requirements for the dashboard",
          "Sketches → Lo-fi mocks → Digital prototypes (using AdobeXD) → Iterated with users",
          "Designed the UI: search functionality, tabular & contextual presentation of results, supporting contextual features (e.g., links to verification sites)",
          "Organized & moderated usability testing sessions, captured feedback, and iterated on MVP",
          "Launched MVP, tracked user adoption, and managed ongoing enhancements through feedback loop",
        ],
        research: "We began by identifying key underwriter contacts provided by our stakeholders: six in-house underwriters of varying seniority. We held discovery conversations to understand:\n\n• How they currently use the occupation search data in their investigations\n• Which data points matter most when determining fraud risk\n• How they interpret and act on those data points\n• What workflow or presentation-pain they experience with spreadsheet-based output as well as disparate supporting resources\n\n**Key findings:**\n\n• Underwriters were spending excessive time reviewing spreadsheet data to detect red flags (occupation modifications leading to rate changes).\n• Three strong 'fraud signals' emerged:\n&nbsp;&nbsp;&nbsp;&nbsp;◦ An agent performed multiple searches against occupation before selecting one (indicating browsing vs targeted search)\n&nbsp;&nbsp;&nbsp;&nbsp;◦ A change in occupation group or specific occupation after the initial search\n&nbsp;&nbsp;&nbsp;&nbsp;◦ A rate change triggered after an occupation change (via returning to the Rate screen)\n\n• Underwriters preferred context: e.g., Quote/p\Policy ID, Purchase Date, search erms, selected occupation, rate change, number of rate views.\n• The presentation of raw data lacked narrative structure and required mental heavy-lifting.\n\nThese insights informed both the functionality and the presentation format of the dashboard.",
        design: {
          earlyConcepts: "I sketched flows where underwriters input a quote/policy ID or search terms and immediately see a table with each rate-view row: search term(s) used, selected occupation category, selected occupation, whether a rate changed, and which rate-view iteration it was.\n\nContextual metadata (Quote/Policy ID, purchase date) was placed at the top to frame each record.\n\n**The aim:** deliver maximum signal (the three major fraud indicators) with minimal noise. Duplicate or extraneous data was pruned.",
          prototyping: "We created lo-fi mockups to validate layout and relationship of elements (search input, table, context metadata).\n\nDigital prototypes, using AdobeXD, followed; we iterated multiple times as we gathered feedback and discovered more about underwriters' workflow and needs.\n\nSeveral design ideas were discarded e.g., overly complex visuals that distracted from the key signals, or additional columns that added clutter.",
          finalUI: "Clean search bar (Quote/Policy ID) at top\n\nTable listing rate-views with key columns:\n• Search Terms → Occupation Category → Selected Occupation → Rate Change Flag → View Number\n\nContext strip above table showing Quote/Policy ID, purchase date, agent/insured name for quick orientation\n\nAdditional features surfaced:\n• Links to state verification sites, Google Maps search, internal tools\n• Agency & insured contact information",
        },
        testing: "We were fortunate to have direct access to in-house underwriters an, with management support, conducted multyiple user-testing sessions with this group.\n\nWe observed users walking through the prototype, and interviewed them about clarity, workflow fit, and missing information.\n\nMany features/information items were eliminated because users found them irrelevant or confusing.\n\nWe refined the content presentation—focusing only on the most valuable data points—and improved usability (filtering, sorting, highlighting red flags).\n\nA feedback loop was established: users submitted enhancement requests which we evaluated, designed, and tested iteratively.",
        outcomes: "The MVP launch was successful: underwriters began relying on the tool as an essential part of their workflow.\n\nOngoing enhancements added requested features such as agency & insured contact info, links to external verification tools, Google Maps/Google Search integration, and internal tool links.\n\n**Business impact:** early estimates indicate a cost-savings of approximately $250,000 per year from reduced case research time and improved underwriting efficiency.\n\nMost importantly, a sustained relationship between UX and underwriting stakeholders was formed, enabling rapid iteration and continuous improvement.",
        lessons: [
          "Work closely with domain-experts: The underwriters were the subject matter experts and letting them guide which data was meaningful saved time and prevented feature bloat.",
          "Build a feedback loop: Instead of 'design, hand-off, forget', maintaining a channel for user suggestions turned this into a living product.",
          "Minimize noise, maximize signal: The success hinged on presenting only what mattered—extra columns or visuals risked distracting from the fraud signals.",
          "Provide context to data: Metadata like Quote/Policy ID, purchase date, agent/insured name gave users orientation and confidence the tool was trustworthy.",
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
      title: "Usage-based Insurance Workflow Integration",
      description: "Improved commercial insurance quoting workflow to support a new usage-based insurance (UBI) program, clarifying eligibility and enrollment rules and boosting successful quote completions by 35%.",
      role: "UX Designer",
      duration: "6 months",
      tags: ["Commercial Auto Insurance", "Telematics", "User Testing", "Legacy Systems"],
      imageUrl: "https://images.unsplash.com/photo-1758411897888-3ca658535fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTU2OTUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "./images/telematics/elligibility.png", caption: "Telematics elligibility notification modal which provides the commercial insurance agent with information about the plan." },
        { url: "./images/telematics/unacceptable_driver.png", caption: "On-screen notification altering user that current risk requires enrollment in the telematics program."},
        { url: "./images/telematics/enrollment_notification.png", caption: "Notification banner alerting user of enrollment in telematics program." },
        { url: "./images/telematics/unenrollment_notification.png", caption: "Notification banner alerting user of issues with their current enrollment status." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As the UX/Product Designer, I collaborated with product managers, data analysts, developers, and business stakeholders to integrate a new usage-based insurance (UBI) product into Infinity’s legacy Commercial Auto Rater. The system had strong functionality but lacked the flexibility and feedback mechanisms needed to clearly communicate eligibility rules to users—commercial insurance agents quoting on behalf of clients.",
          problemStatement: "Infinity introduced a new UBI product aimed at expanding coverage to higher-risk occupations and vehicle types that previously fell outside acceptable underwriting criteria. However, to insure these risks, customers were required to enroll in the UBI program. The existing Commercial Rater lacked any clear UX pattern for communicating when a quote required telematics participation, or when quote selections (e.g., ineligible vehicle years or occupations) caused conflicts with UBI eligibility. Agents frequently submitted incomplete or invalid quotes because they didn’t understand the conditions that triggered or disqualified telematics enrollment. The challenge: design a clear, integrated experience—within the constraints of an outdated system—that transparently guided agents through eligibility, enrollment, and conflict resolution without disrupting their workflow.",
          solution: "I designed a lightweight, in-context alert and modal system that surfaced UBI requirements at key moments in the quoting process. Instead of building a separate dashboard, the new UX clarified program eligibility and status directly within the existing interface through contextual banners and modals.\n\n**Key elements included:**\n\n**• Notification banners** that dynamically informed users when a quote required UBI enrollment or when enrollment status changed (e.g., “This risk requires Telematics participation”).\n**• Eligibility modals** providing clear explanations of why UBI was required, how to proceed, and what factors (such as pre-1996 vehicles) might cause disqualification.\n**• Conditional messaging** that updated in real time based on user selections—ensuring agents always knew their quote’s UBI status.\n\nThis approach made the complex UBI rules transparent, reduced quoting errors, and improved agent understanding without requiring major backend UI changes.",
        },
        contributions: [
          "Facilitated stakeholder and user research with commercial agents to identify pain points and clarify business rules around UBI eligibility.",
          "Defined personas and usage scenarios for commercial quoting workflows involving telematics.",
          "Designed the information architecture for integrated alert/modality system within the legacy rater.",
          "Created low-to-high fidelity prototypes in Figma showing alert placement, modal behavior, and conditional messaging logic.",
          "Conducted usability testing and iterated designs for clarity and minimal workflow disruption.",
          "Partnered with developers and QA to ensure proper implementation and data accuracy.",
          "Post-launch, monitored agent completion rates and UBI-related support tickets to measure effectiveness.",
          "Proposed and implemented next-phase enhancements based on feedback and analytics",
        ],
        research: "We conducted targeted interviews and contextual inquiries with commercial auto insurance agents to understand how they used the rating system and where confusion occurred around the new telematics requirements.\n\n**Key findings:**\n\n• Agents had difficulty identifying when a quote required UBI enrollment.\n• Eligibility errors (e.g., selecting pre-1996 vehicles) caused frustration due to lack of clear guidance.\n• The legacy UI’s static form design made it hard to introduce dynamic feedback.\n• Agents preferred non-intrusive, inline guidance rather than page redirects or popups that broke their flow.\n\nThese findings informed the design of lightweight, persistent, and context-sensitive notifications that fit seamlessly into existing workflows.",
        design: {
          earlyConcepts: "Initial explorations tested several ways to communicate UBI requirements: inline tooltips, banners, and modals. After reviewing with agents, banners were chosen for real-time feedback, and modals were reserved for detailed explanations.",
          prototyping: "Created low-fidelity interactive prototypes using Adobe XD to simulate quote progression and real-time updates as agents toggled between eligible and ineligible quote selections.",
          finalUI: "**• Eligibility Notification Modal:** Explains telematics program and next steps.\n**• Enrollment Banners:** Confirm status (“Enrolled,” “Unenrolled,” “Ineligible”).\n**• Conditional Alerts:** Triggered dynamically as users adjusted quote criteria.",
        },
        testing: "Conducted two rounds of usability testing (10 pre-launch, 12 post-launch) with commercial agents.\n\n**Results**\n\n• Agents’ ability to correctly identify UBI-required quotes improved by 40%.\n• Quote completion time reduced by 25%.Error-related support tickets dropped 30% post-launch.\n• Qualitative feedback: “Now I know exactly what’s happening and why.”",
        outcomes: "• Quote completion rate: +35% compared to baseline within 3 months.\n• Reduction in UBI-related support tickets by −30%.\n• Agent satisfaction increased by +16 NPS points for the quoting experience.\n• Faster quote turnaround and fewer underwriting corrections.",
        lessons: [
          "**Design within system constraints:** Even legacy systems can deliver modern UX improvements when guided by clear, contextual communication.",
          "**Transparency drives confidence:** Clarifying program logic built trust between agents and the system.",
          "**Microinteractions matter:** Subtle, inline updates outperformed disruptive modals for agent efficiency.",
          "**Cross-functional alignment:** Early collaboration with business and underwriting teams ensured consistent rule logic and messaging.",
          "**Continuous feedback loops accelerate value:** The post-launch user-checks helped us refine faster and keep the product alive.",
          "**Language mattered to agents:** User wording ('peer percentile', 'driving-score') mattered more than we expected; testing early saved time.",
        ],
        nextSteps: [
          "Expand contextual messaging to other rating products with complex eligibility logic.",
          "Introduce additional content such as inline tooltips for nuanced rule explanations (e.g., “Why is this vehicle ineligible?”).",
          "Explore integration with future telematics dashboards for end-user (Commercial Insurance Agent) transparency."
        ],
      },
    },
    {
      title: "Tax Resolution Workflow Management Application",
      description: "Streamlined complex tax resolution workflow, reducing document turnaround from 14 to 2 days and accelerating client onboarding across multiple user roles.",
      role: "UX/UI Designer and Developer",
      duration: "~1.5 years",
      tags: ["Tax Resolution Services", "Financial Technology", "Enterprise Application", "Interaction Design"],
      imageUrl: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NjE1NzU3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "./images/tax-resolution/suspect_queue.png", caption: "Suspect Queue, which is where call screener would connect with potential clients and collect initial case information." },
        { url: "./images/tax-resolution/tax-consultant_dashboard.png", caption: "The Tax Consultant dashboard view is utilized to continue with case-related information gathering." },
        { url: "./images/tax-resolution/tax-consultant_sales.png", caption: "The Contract services feature is where a Tax Consultant would generate a quote based on services required." },
        { url: "./images/tax-resolution/client-advocate_document_queue.png", caption: "Document queue used for uploading, requesting and haring documents internally as well as between the user roles, clients and the IRS." },
        { url: "./images/tax-resolution/client-advocate_tasks.png", caption: "Client Advocates task notification view." },
        { url: "./images/tax-resolution/client-advocate_service-progression.png", caption: "The Service Progression view gives Client Advocates high-level insight into a clien's open case." }
      ],
      detailedContent: {
        overview: {
          roleAndTeam: "As Lead UX/UI Designer, I collaborated with an offshore development team, Product Owner, dedicatee business liaisons and our user group (which included Call Screeners, Tax Consultants, Compliance Specialists, Document Specialist, etc.) to design and implement a unified tax resolution application.",
          problemStatement: "Jackson Hewitt needed a unified application for their Tax Resolution division to manage cases end-to-end, from initial contact to IRS resolution. Existing workflows were fragmented, slow, and manual: document retrieval turnaround took ~14 days, call transfers were &quot;cold&quot; & inefficient, and multiple user roles had overlapping responsibilities. The system had to serve six distinct &quot;funnels&quot; with multiple users roles. Clients included elderly, rural and non-native English speakers, which sometimes required multiple solutions per feature e.g. document retrieval.",
          solution: "The goal was to streamline workflows, reduce bottlenecks, and improve usability across all user roles, ultimately reducing document turnaround from 14 days to 2 days. We designed a unified application that integrated call queue systems, document management, and role-specific dashboards to create a cohesive end-to-end experience.",
        },
        contributions: [
          "Designed user-centered workflows, dashboards, and conent management interfaces for multiple roles",
          "Integrated call queue system for Screeners, enabling &quot;warm&quot; transfer to Tax Consultants and faster callbacks",
          "Streamlined document generation, validation, and retrievel processes, combining e-sign/wet-sign workflows",
          "Conducted user research and testing across all roles, iterating in real time on rapidly changing requirements",
          "Worked with an offshore development team to retrofit initial design into an in-flight application",
          "Created daily ad hoc designs for evolving requirements in a high-ambiguity environment",
          "Designed accessible portal interface for elderly, rural, and non-native English speakers",
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
      title: "Behavioral Health Practitioner Portal",
      description: "Streamlined complex provider workflows into an intuitive practitioner portal, improving efficiency, usability, and data accuracy.",
      role: "UX Designer",
      duration: "~2 years",
      tags: ["Behavioral Healthcare", "Enterprise Portal", "Modernization", "Design System"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYxNTc1NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      additionalImages: [
        { url: "./images/provider-portal/provider-data-change.png", caption: "Initial design of the stand-alone Provider Data Change Form, which shows sections accessible via accordion compoents." },
        { url: "./images/provider-portal/provider-portal_dashboard.png", caption: "MVP design of the Provider Portal dashboard, which lists associated practices." },
        { url: "./images/provider-portal/provider-portal_manage-practice.png", caption: "Updated Practice Infromation view, functionality that was previously part of the PDCF application."},
        { url: "./images/provider-portal/provider-portal_profile.png", caption: "Profile management functionality which is part of the Practice Information feature."},
        { url: "./images/provider-portal/provider-portal_roster-dashboard.png", caption: "Staff Roster dashboard view."},
        { url: "./images/provider-portal/provider-portal_view-roster.png", caption: "Staff Roster member detail view."}, 
        { url: "./images/provider-portal/provider-portal_admin-tool.png", caption: "Provider Portal admin feature, which allows administrators to set practice associations and user permissions."}

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

      <Skills />  

      <Tools />
      
      <Contact />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
