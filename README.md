This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## RSVP system

- **Invite links:** `https://yoursite.com/?code=x1a7` (and other codes in `src/lib/invite-codes.ts`). When a valid code is present, a modal opens with an RSVP button; after submitting, a “Thank you {name}” screen with a green checkmark is shown.
- **Dependencies:** Use Supabase for the database: `npm install @supabase/supabase-js`. If you have `@vercel/postgres` installed, remove it: `npm uninstall @vercel/postgres`.
- **Database:** Set env vars: `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (from Supabase → Settings → API). Create the `rsvps` table by running the SQL in `scripts/init-rsvps.sql` in the Supabase SQL Editor.
- **Admin list:** Visit `/admin/rsvps` and sign in with the password in `ADMIN_RSVP_PASSWORD` to view who has RSVP’d.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
