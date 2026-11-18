# Vectra Solutions — Corporate Web Platform

[![Test & Deploy to Cloudflare Pages](https://github.com/Nisal97/VectraTechnologiesWebsite/actions/workflows/deploy-cloudflare.yml/badge.svg)](https://github.com/Nisal97/VectraTechnologiesWebsite/actions/workflows/deploy-cloudflare.yml)

Official web application for **Vectra Solutions**, built with **Next.js** (static export), **TypeScript**, and **Tailwind CSS**, powered at the edge by **Cloudflare Pages Functions**, and protected by a multi-framework automated testing and CI/CD pipeline.

---

## Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js (App Router), React, TypeScript, Tailwind CSS (`output: 'export'` → `out/`) |
| **Edge API** | Cloudflare Pages Functions (`functions/api/contact.ts`) |
| **Unit & Component Tests** | Vitest, React Testing Library, jsdom |
| **End-to-End Tests** | Playwright (TypeScript) & Selenium WebDriver + JUnit 5 + Maven (Java) |
| **CI/CD & Hosting** | GitHub Actions (`wrangler-action`) & Cloudflare Pages |

---

## Project Structure

```text
├── .github/workflows/
│   └── deploy-cloudflare.yml      # Gated CI/CD pipeline (Unit → E2E → Deploy)
├── __tests__/                     # Vitest unit & component test suites
├── app/                           # Next.js App Router pages & layouts
├── components/                    # Reusable UI & contact components
├── e2e/                           # Playwright E2E test specifications
├── e2e-selenium/                  # Java + Maven + JUnit 5 Selenium E2E suite
│   ├── pom.xml
│   └── src/test/java/
├── functions/api/
│   └── contact.ts                 # Cloudflare Pages Function for /api/contact
├── lib/
│   └── contactValidation.ts       # Shared inquiry validation logic
├── playwright.config.ts           # Playwright configuration
└── vitest.config.ts               # Vitest configuration
```

---

## Prerequisites

* **Node.js 22+** and **npm** (Node 22 is required for `jsdom` / `undici` compatibility in Vitest)
* **JDK 17+** and **Apache Maven 3.9+** *(required only if running the Java Selenium E2E suite locally)*
* **Google Chrome / Chromium** *(for local Playwright and Selenium runs)*

---

## Getting Started

1. **Clone the repository and install Node dependencies:**
   ```bash
   git clone [https://github.com/Nisal97/VectraTechnologiesWebsite.git](https://github.com/Nisal97/VectraTechnologiesWebsite.git)
   cd VectraTechnologiesWebsite
   npm ci
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build the static production export:**
   ```bash
   npm run build
   ```
   > **Note:** Building the Next.js frontend (`npm run build`) and running the unit/E2E test suites require **zero environment variables**. Environment variables are only needed when running the `/api/contact` edge function locally with Wrangler or deploying via GitHub Actions.

---

## Environment Variables & Secrets

### 1. Edge Function Runtime Variables (Local `.dev.vars` & Cloudflare Pages)

The contact endpoint (`functions/api/contact.ts`) reads server-side credentials from Cloudflare's runtime environment (`context.env`). Check `functions/api/contact.ts` for the exact variable names used by your handler, then configure them in both places below:

* **Local testing with Wrangler:** Create a `.dev.vars` file in the project root *(gitignored by default)* and run `npx wrangler pages dev out`.
* **Production on Cloudflare:** Open **Cloudflare Dashboard → Workers & Pages → `vectra-solutions-web` → Settings → Variables and Secrets** and add them as encrypted secrets.

| Service | Typical Variable(s) | How to Obtain |
| :--- | :--- | :--- |
| **Resend** *(Transactional Email)* | `RESEND_API_KEY` | Log in to [Resend](https://resend.com) → **API Keys** → **Create API Key** (grant *Sending access* for your verified domain). |
| **Supabase** *(Inquiry Storage)* | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Open your project in [Supabase](https://supabase.com) → **Project Settings (gear icon) → API** → copy the **Project URL** and **`service_role`** secret key. |

Example `.dev.vars` template:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
SUPABASE_URL=[https://your-project-ref.supabase.co](https://your-project-ref.supabase.co)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### 2. GitHub Actions Deployment Secrets

To allow `.github/workflows/deploy-cloudflare.yml` to deploy `out/` to Cloudflare Pages, add the following two secrets under **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**:

| Secret Name | How to Obtain |
| :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | 1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **My Profile** (top-right icon) → **API Tokens**.<br>2. Click **Create Token** → select **Start from scratch** (*Custom token*).<br>3. Under **Permissions**, choose **Account → Cloudflare Pages → Edit**.<br>4. Under **Account Resources**, keep **Include → All accounts** (or select your account).<br>5. Click **Continue to summary → Create Token** and copy the token immediately. |
| `CLOUDFLARE_ACCOUNT_ID` | 1. Open **Cloudflare Dashboard → Workers & Pages**.<br>2. Copy the 32-character **Account ID** from the right-hand sidebar (or directly from the browser URL after `dash.cloudflare.com/`). |

---

## Running Automated Tests

### 1. Unit & Component Tests (Vitest)
Runs validation, API handler, and React component tests:
```bash
npm test
```

### 2. End-to-End Tests (Playwright)
Install Chromium once, then run the Playwright suite (automatically starts `npm run dev`):
```bash
npx playwright install chromium
npx playwright test
```

### 3. End-to-End Tests (Java Selenium + JUnit 5)
Start the Next.js server in one terminal (`npm run dev`), then run Maven in a second terminal:
```bash
# Run with visible Chrome browser
mvn -f e2e-selenium/pom.xml test

# Run in headless mode
mvn -f e2e-selenium/pom.xml test -Dheadless=true
```

---

## CI/CD Pipeline

Every push or merge to `main` triggers **`.github/workflows/deploy-cloudflare.yml`**, which enforces a three-stage release gate:

1. **Stage 1 — Unit Tests (`Vitest`):** Runs `npm test`. Any failure halts the pipeline immediately.
2. **Stage 2 — E2E Validation (`Playwright` & `Java Selenium`):** Runs both browser suites in parallel against the live app once unit tests pass.
3. **Stage 3 — Build & Deploy (`Cloudflare Pages`):** Builds the static export (`npm run build`) and deploys `out/` and `functions/` via `wrangler-action` only after all three test jobs succeed.