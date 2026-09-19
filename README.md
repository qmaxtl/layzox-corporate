# LAYZOX corporate website

The LAYZOX website, built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. The public site includes products, services, company information, engineering perspectives, and project enquiries.

## Development

Install dependencies with `npm ci`, then run:

```sh
npm run dev
```

Open `http://localhost:3000`. For a production build and server:

```sh
npm run build
npm run start
```

Validation commands:

```sh
npx tsc --noEmit
npm run lint
npm run build
```

Browser QA should cover desktop and mobile in both themes, keyboard navigation, product disclosures, forms, and the demonstration. Playwright is included as a development dependency. These instructions describe checks to run; they are not a test-results report.

## Brand and content

- The public brand is **LAYZOX**. The legal footer reads: `© 2026 Layzox India Pvt Ltd. All rights reserved.`
- The approved logo is `public/brand/layzox-master-logo.png`. Keep this artwork unmodified. Its warm-white backing is embedded in the image; the full-width masthead and footer logo band match that backing in both themes, without adding a separate box around the logo.
- The portfolio in `data/products.ts` contains exactly **LAYZOX GROWTH**, **LAYZOX REVENUE**, and **LAYZOX ACCOUNTS**, all **Coming Soon**. Product copy describes development direction, without announcing availability or launch dates.
- Colors, typography, and responsive composition are defined in `app/globals.css`. The design uses navy, blue, cyan, teal, green, and lime derived from the brand.

Light and dark themes use the root `data-theme` attribute. The saved preference lives under `layzox-theme` in local storage; without a saved choice, the site follows the system preference. An early initialization script applies the theme before the page paints, and the toggle also works when persistent storage is unavailable.

## Project enquiries

Copy `.env.example` to `.env.local` and configure the server environment when enabling online delivery:

| Variable | Purpose |
| --- | --- |
| `ENQUIRY_WEBHOOK_URL` | HTTPS endpoint that accepts an enquiry JSON payload by POST. |
| `ENQUIRY_WEBHOOK_TOKEN` | Optional token sent as `Authorization: Bearer …`. |

Keep these values server-side; do not use a `NEXT_PUBLIC_` prefix or commit credentials. Configure the same variables in the deployment environment.

`POST /api/enquiry` validates and limits submissions, then forwards the enquiry to the configured endpoint. It reports success only after that endpoint returns a successful HTTP status. There is no local enquiry database or fallback logging of personal details. Rate limiting is best-effort per server instance; distributed hosting should provide its own request limits.

With no webhook configured, online submission reports its unavailability. The project form can still prepare the completed brief in the visitor's email app for review and sending. The careers form also prepares an email draft; it does not claim an introduction has been delivered.

## Engineering demonstration

`/work/businessflow` explains the sample workflow; `/demo/businessflow` is the interactive demonstration. Its fictional records and edits remain in that browser's local storage. It has no shared production database, processes no real payments, and is separate from the three upcoming products. Use sample data and the reset control to restore the initial records.
