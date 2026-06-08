# Nurovaq Digital - Professional Portfolio Website

A modern, professional portfolio website for Nurovaq Digital, showcasing innovative software solutions and applications under development.

## 🚀 Features

- **Modern & Professional Design** - Clean, corporate aesthetic with premium feel
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Apps Showcase** - Display your applications with descriptions and features
- **About Section** - Tell your company story and core values
- **Blog/News Section** - Share updates and industry insights
- **Team Profiles** - Introduce your team members and expertise
- **Contact Form** - Easy way for clients to reach out
- **Smooth Navigation** - Sticky header with smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with TypeScript
- **Styling**: Tailwind CSS 3+
- **Tools**: ESLint for code quality
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page combining all sections
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── AppsShowcase.tsx # Apps showcase section
│   ├── About.tsx        # About company section
│   ├── Blog.tsx         # Blog/News section
│   ├── Team.tsx         # Team profiles section
│   ├── Contact.tsx      # Contact form section
│   └── Footer.tsx       # Footer
└── styles/
    └── globals.css      # Global styles and Tailwind directives
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Company Information
Update the following files with your information:
- `src/components/Hero.tsx` - Hero section messaging
- `src/components/About.tsx` - Company story and mission
- `src/components/Team.tsx` - Team members and profiles
- `src/components/Contact.tsx` - Contact information and email

### Apps Showcase
Edit `src/components/AppsShowcase.tsx` to add your applications:
```typescript
const apps = [
  {
    id: 1,
    title: 'Your App Name',
    description: 'App description',
    status: 'In Development',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // Add more apps...
]
```

### Blog Posts
Update `src/components/Blog.tsx` to add your blog posts and news

### Colors & Branding
- Primary color: `#1a73e8` (defined in `tailwind.config.ts`)
- Customize in `tailwind.config.ts` under `theme.extend.colors`

## 🌐 Deployment

This Next.js app can be easily deployed to:
- **Vercel** (recommended) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **AWS Amplify** - [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
- Any Node.js hosting provider

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 License

This project is private and proprietary to Nurovaq Digital.

## 👤 Company Information

**Company**: Nurovaq Digital  
**Founder**: Sahaan Kesavan  
**Email**: hello@nurovaqdigital.com

---

Built with ❤️ by Nurovaq Digital