# Ellvin Energy React

A production-ready React website converted from an existing HTML landing page.

## Project Overview

Ellvin Energy React is a Vite + React 19 application with Tailwind CSS styling, React Router navigation, and a floating AI chat widget.

## Features

- React 19 + Vite
- Multi-page routing with `react-router-dom`
- Tailwind CSS utility-first styling
- Floating AI chat widget component
- Responsive navigation and layout
- Shared layout with `Navbar` and `Footer`
- Framer Motion animations
- Axios ready for API integrations
- ESLint and Prettier configured

## Folder Structure

```
src/
├── assets/
├── components/
│   ├── chat/
│   │   └── AIChatWidget.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── ui/
│   │   ├── FeatureCard.jsx
│   │   ├── StatsCard.jsx
│   │   └── TestimonialCard.jsx
├── context/
│   └── ChatContext.jsx
├── hooks/
├── pages/
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── Careers.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Services.jsx
├── routes/
│   └── AppRoutes.jsx
├── services/
│   └── api.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Installation

```bash
npm install
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Deployment

1. Build the app: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## Troubleshooting

- If styling is missing, verify `tailwind.config.js` content paths.
- If import errors occur, confirm file names and component paths.
- Run `npm install` again if packages are missing.
