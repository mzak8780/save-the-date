# Wedding Save the Date Web App

## Overview
This is a self-hosted digital wedding save-the-date app built using Next.js and Supabase. The app allows personalized save-the-dates with a countdown timer, multi-language support, and an option to add the event to a calendar.

## Features
- **Personalized save the dates**: Guests enter their name to access the save the date.
- **Countdown timer**: Displays a live countdown to the wedding day.
- **Multi-language support**: English, Polish, and Greek translations available.
- **Minimalist and chic UI**: Styled with Tailwind CSS.
- **Hosted on Vercel**: Easy and scalable deployment.

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Database**: Supabase (for storing guest list)
- **Deployment**: Vercel

## Installation
### Prerequisites
- Node.js and npm installed
- Supabase account and project set up

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/wedding-save-the-date.git
   cd wedding-save-the-date
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables: Create a .env.local file and add your Supabase credentials:
   ```sh
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
The app will be available at http://localhost:3000.

## Deployment
Deploy easily with Vercel:
```sh
vercel
```
Follow the on-screen prompts to complete the deployment.

Developed with ❤️ for a special day!

   
   
   
   
