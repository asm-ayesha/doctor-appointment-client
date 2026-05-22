# Doctor Appointment Client

## Live Link
https://doctor-appointment-server-ezqf.vercel.app

## Project Name
Doctor Appointment Client

## Description
Doctor Appointment Client is a polished, responsive frontend application built with Next.js and React. It enables patients to browse doctors, view appointment availability, register/login securely, and access a protected dashboard. The application integrates Better Auth and MongoDB to handle authentication, session management, and user authorization.

This project follows the Next.js App Router structure and is designed to work with a backend authentication API powered by Better Auth.

## Key Features
- User registration and login with email/password
- OAuth-ready social login support via Google
- Protected routes for dashboard and appointment details
- Dynamic appointment pages for doctor booking information
- Responsive homepage with doctor highlights, search, and testimonials
- Animated UI components using Framer Motion
- Dark/light theme support with Next Themes
- Toast notifications for user actions
- Clean component-driven architecture

## What You Can Do
- Browse doctors and appointment slots
- Read service highlights and ratings
- Register a new account or sign in as an existing user
- Visit a protected dashboard after login
- Access appointment details on dedicated pages
- Use search and filters to find doctors faster

## Installation
### Prerequisites
- Node.js 20+ recommended
- npm, yarn, or pnpm installed
- A MongoDB database for authentication
- Google OAuth credentials if using Google login

### Setup
```bash
git clone https://github.com/asm-ayesha/doctor-appointment-client.git
cd doctor-appointment-client
npm install
```

### Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm run start
```

## Configuration
Create a `.env.local` file in the project root and add the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.example.com/mydatabase
GOOGLE_CLIENTID=your-google-client-id
GOOGLE_SECTRET=your-google-client-secret
```

### Important Details
- `NEXT_PUBLIC_API_URL` is used for frontend API requests and public config.
- `BETTER_AUTH_URL` is required for the Better Auth React client.
- `MONGODB_URI` connects the authentication server to MongoDB.
- `GOOGLE_CLIENTID` / `GOOGLE_SECTRET` are optional and support Google social login.

### Example `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://user:password@cluster0.mongodb.net/doctor-appointment?retryWrites=true&w=majority
GOOGLE_CLIENTID=1234567890-abcdefg.apps.googleusercontent.com
GOOGLE_SECTRET=abcdefg12345
```

## Folder Structure

```
.
├── app
│   ├── (auth)
│   │   ├── login
│   │   │   ├── LoginFrom.jsx
│   │   │   └── page.jsx
│   │   └── register
│   │       ├── RegisterFrom.jsx
│   │       └── page.jsx
│   ├── all-appointment
│   │   ├── loading.jsx
│   │   ├── page.jsx
│   │   └── [id]
│   │       ├── loading.jsx
│   │       └── page.jsx
│   ├── api
│   │   └── auth
│   │       └── [...all]
│   │           └── route.js
│   ├── appointment-card
│   │   └── [id]
│   │       ├── AppointmentCard.jsx
│   │       └── page.jsx
│   ├── dashboard
│   │   ├── Dashboard.jsx
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.jsx
│   └── page.js
├── components
│   ├── AppointmentBtn.jsx
│   ├── BlogHighlights.jsx
│   ├── bookingCard.jsx
│   ├── DoctorsCard.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProfileCard.jsx
│   ├── SearchBar.jsx
│   ├── Testimoials.jsx
│   └── TopRatedDoctors.jsx
├── lib
│   ├── auth-client.js
│   ├── auth.js
│   └── doctor
│       └── data.js
├── public
│   └── assets
└── src
    └── proxy.js
```

### Folder Purpose
- `app/`: Next.js App Router pages, layouts, route handlers, and protected page segments.
- `components/`: Reusable UI components used across pages.
- `lib/`: Authentication helpers, auth configuration, and static doctor data.
- `public/assets/`: Static image and asset files.
- `src/proxy.js`: Route protection helper for authenticated pages.

## Application Routes
- `/` — Home page
- `/login` — Login form
- `/register` — User registration page
- `/all-appointment` — Appointment listing page
- `/all-appointment/[id]` — Appointment details page
- `/appointment-card/[id]` — Doctor appointment card detail page
- `/dashboard` — User dashboard (protected)

## Technology Used
- Next.js 16.2.6
- React 19.2.4
- Tailwind CSS 4
- Better Auth
- MongoDB
- Framer Motion
- Swiper
- React Hot Toast
- React Icons
- Lucide React
- Next Themes
- @heroui/react
- @heroui/styles

## Deployment
This project can be deployed on Vercel or any platform supporting Next.js.

### Deploy to Vercel
1. Push the repo to GitHub.
2. Create a new Vercel project.
3. Set the environment variables in Vercel.
4. Deploy the app.

## Troubleshooting
- If the app cannot connect to MongoDB, verify `MONGODB_URI` and network access.
- If authentication fails, confirm `BETTER_AUTH_URL` points to the correct backend.
- For Google login issues, ensure the OAuth credentials are valid and permitted for your domain.

## Contributing
- Submit bug reports or feature requests via GitHub issues.
- Open a pull request with code improvements or fixes.
