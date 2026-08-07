# 🧠 AKS WEB SERVICE TECHNOLOGY - AGENT MEMORY & ARCHITECTURE LEDGER

> **INTERNAL AGENT SYSTEM FILE**  
> *This file serves as a comprehensive persistent memory reference for the AI Agent (Antigravity). It documents the entire codebase state, business logic, component registry, asset mapping, theme tokens, and chronological changelog.*

---

## 🏢 1. Company & Project Identity

- **Official Name**: AKS Web Service Technology (also referencing Nerold IT Service brand heritage)
- **Tagline**: Pioneering Digital Architecture & Enterprise Web Solutions Since 2020
- **Location**: Oppo. Attitude Restaurant, BIT Mesra Road, Ranchi, Jharkhand - 835217, India
- **Support & General Inquiries**:
  - **Primary Phone**: `+91 7739339852`
  - **Official Email**: `ownsources001@gmail.com`
  - **WhatsApp Hotline**: `https://wa.me/917739339852`
- **Years of Experience**: 3+ Years (established 2020)
- **Delivered Projects**: 150+ Enterprise Projects (Web Apps, Mobile Apps, SaaS Platforms, Cloud & AI)
- **Client Satisfaction**: 99.4% (377+ Happy Clients)

---

## 🛠️ 2. Technology Stack & Frameworks

| Layer | Technologies Used |
|---|---|
| **Core Framework** | React 18, TypeScript, Vite 5 |
| **Styling** | Tailwind CSS 3.4, Vanilla CSS Design System (`src/index.css`) |
| **Motion & Animation** | Framer Motion (Transitions, LayoutId animations, 3D cards, AnimatePresence) |
| **Icons** | Lucide React (Comprehensive modern icon library) |
| **State Management** | React Context API (`src/context/AppContext.tsx`) with LocalStorage persistence |
| **Build & Tooling** | Vite (`npm run dev`, `npm run build`) |

---

## 🎨 3. Design System & Theme Tokens

- **Brand Signature Color (Logo 'S' Tone)**: `#E84125` (Coral Red / Crimson Orange)
- **Primary Site Background**: `#FFF8F5` (Warm Cream / Logo S Tint)
- **Accent Primary Gradient**: `#0284C7` (Sky Blue) &rarr; `#E84125` (Coral S) &rarr; `#0D9488` (Teal)
- **Dark Sections (Reviews / Call-To-Actions)**: `#020617` (Slate 950) with glassmorphism overlays
- **Card Surfaces**: Pure White `#FFFFFF` with soft borders (`#FED7C8` or `#E2E8F0`) and subtle shadows
- **Text Hierarchy**:
  - Headings: Slate 900 (`#0F172A`), Bold/Black with `-0.025em` tracking
  - Subtitles / Badges: Teal 600 / Teal 400 (`#0D9488` / `#2DD4BF`)
  - Body Text: Slate 600 / Slate 700 (`#475569` / `#334155`)

---

## 🧭 4. Application Navigation & Pages Registry

Routing is handled through `activeTab` state in `src/App.tsx`:

| Tab ID | Page Component | Key Features & Contents |
|---|---|---|
| `home` | `src/pages/HomePage.tsx` | Hero Banner, 3 Feature Cards (24/7 Support, Expert Team, Smart Solutions), 10-Image 3D Stacked Deck inside Top-Notch Box, Why Choose Us, Mission/Vision, Services Grid, 6-Step Agile Process, Tech Stack Matrix, Customer Reviews Carousel with Team Backdrop, Facts & Figures with Reach Us Form, Career Banner, Mailing List Newsletter, FAQ Accordion, Final CTA. |
| `about` | `src/pages/AboutPage.tsx` | Company Story, Leadership, Core Values, Office Location Map, Infrastructure SLA stats. |
| `services` | `src/pages/ServicesPage.tsx` | Full catalog of 6 core service offerings with pricing tiers, technology breakdowns, and direct booking triggers. |
| `portfolio` | `src/pages/PortfolioPage.tsx` | Project showcases, live before/after comparisons, interactive tech filter, 20+ scrolling enterprise client testimonials marquee. |
| `careers` | `src/pages/CareersPage.tsx` | Open engineering positions, job application flow, AI assistant modal trigger, salary/perks. |
| `internships` | `src/pages/InternshipsPage.tsx` | Paid Internship programs (Frontend, Backend, AI/ML, FullStack), certificate generator trigger. |
| `blogs` | `src/pages/BlogsPage.tsx` | Knowledge base, technical architecture articles, category filters, newsletter subscription. |
| `contact` | `src/pages/ContactPage.tsx` | Interactive contact form, WhatsApp chat launcher, Google Map location, direct phone/email cards. |
| `candidate-dashboard` | `src/pages/candidate/CandidateDashboard.tsx` | Candidate Portal for job applicants, application status tracking, live interview schedule, offer letter modal & certificate preview. |

---

## 🧩 5. Interactive Modals & Floating Utilities

1. **AI Career Assistant Modal** (`src/components/ai/AiCareerAssistantModal.tsx`):
   - AI-powered job matching and resume evaluation chat assistant.
2. **Calendly Booking Modal** (`src/components/tools/CalendlyModal.tsx`):
   - Direct 30-minute technical architecture consultation booking widget.
3. **WhatsApp Floating Widget** (`src/components/tools/WhatsAppWidget.tsx`):
   - Direct WhatsApp quick chat button (`+917531073110`) at bottom-right corner.
4. **Offer Letter Modal** (`src/components/documents/OfferLetterModal.tsx`):
   - Official generated employment offer letter with printable format and candidate credentials.
5. **Internship Certificate Modal** (`src/components/documents/InternshipCertificateModal.tsx`):
   - Verifiable digital internship completion certificate with QR verification and download.
6. **Auth / Login Modal** (`src/pages/AuthModal.tsx`):
   - Role switching (Public Client, Job Candidate, Admin).

---

## 🖼️ 6. Static Image Assets Registry (`public/images/`)

| Image Path | Purpose / Used In |
|---|---|
| `/company-logo.jpeg` | Official Brand Logo (Light Mode / Navbar & Footer) |
| `/company-logo-dark.png` | Official Brand Logo (Dark Mode) |
| `/images/top-notch-solutions.png` | Slide 1: React & Next.js 15 Web Architecture |
| `/images/card-metrics-dark.png` | Slide 2: 2.1M Live SaaS Analytics & Metrics |
| `/images/card-brand-red.png` | Slide 3: 400% Brand Conversion & Pitch Deck |
| `/images/card-opportunity-light.png` | Slide 4: Strategic AI Roadmap & Architecture |
| `/images/showcase-mobile.png` | Slide 5: iOS & Android Native Flutter & React Native Apps |
| `/images/showcase-ecommerce.png` | Slide 6: Shopify Plus & Stripe E-Commerce Platforms |
| `/images/showcase-ai.png` | Slide 7: Autonomous Neural AI & Enterprise RAG |
| `/images/showcase-uiux.png` | Slide 8: Luxury UI/UX Glassmorphism Design System |
| `/images/showcase-devops.png` | Slide 9: AWS Kubernetes & DevOps CI/CD Infrastructure |
| `/images/why-choose-us.png` | Slide 10 & Why Choose Us Section Right Column |
| `/images/reviews-bg.png` | Customer Reviews Section Dark Team Collaboration Backdrop |

---

## 📜 7. Chronological History of Key Changes & Customizations

1. **Initial Setup**: Modernized React 18 + TypeScript + Vite + Tailwind enterprise web app.
2. **User Request - PDF Screenshots Alignment**:
   - Implemented Hero banner *"Boost Your Sales with a Powerful E-Commerce Platform"*.
   - Added Top Contact Bar (`Location: Oppo. Attitude Restaurant, BIT Mesra Rd`, `Email: nerold.info@gmail.com`, `Phone: +917531073110`).
   - Implemented 3 Feature Cards (01: 24/7 Customer support, 02: Experience Team, 03: Smart solutions).
   - Added "We Provide Top-notch Web Solutions" section with 3+ Years of Experience badge.
3. **User Request - 3D Isometric Deck Integration**:
   - Replaced static placeholder image with an integrated **10-image 3D stacked/cascading deck** inside the left container of "Top-Notch Solutions", complete with 3.5s autoplay, hover-pause, prev/next arrows, and 10 mini dot navigators.
4. **User Request - Replace Pricing Plans**:
   - Removed "Transparent Investment Plans (Monthly/Yearly)".
   - Added **Customer Reviews ("See What Our Clients Speak")** with client avatars, quotes, star ratings, and backdrop image.
   - Added **Reach Us ("Send a message")** with quick interactive inquiry form and facts/figures.
   - Added **Career Opportunities Banner** and **Join Our Mailing List** newsletter.
5. **User Request - Logo 'S' Warm Tinted Theme**:
   - Updated website global background to `#FFF8F5` (Logo 'S' warm coral tint).
   - Styled glass cards, hero gradient, scrollbars, and selection highlights to match.
6. **User Request - Customer Reviews Contrast Fix**:
   - Fixed CSS stacking context for the dark reviews container so white text and team background image render with maximum clarity and contrast.
7. **User Request - Contact Page AKS Logo Branded Palette**:
   - Replaced basic grey styles on Contact Page with the official AKS Logo gradient:
     - **'A' Sky Blue** (`#0284C7`) for Email & Inquiries.
     - **'K' Amber / Gold** (`#EA580C`) for Direct Hotline & WhatsApp.
     - **'S' Coral Red** (`#E84125`) for Main Office & Hub card and submit button.
   - Updated Ranchi Headquarters address (`Oppo. Attitude Restaurant, BIT Mesra Road, Ranchi, Jharkhand - 835217`) and active WhatsApp & Google Maps links.

---

## ⚡ 8. Quick Agent Guidelines for Future Modifications

- **Always run verification**: Run `npm run build` after editing to verify 0 TypeScript/Rollup errors.
- **Maintain Design System**: Preserve the `#FFF8F5` background, `#E84125` coral accents, and smooth Framer Motion animations.
- **Do NOT delete this file**: Keep `PROJECT_MEMORY.md` updated as new features or modifications are made.
