# 🐉 Dragon News

**Live Demo:** https://dragon-news-nextjs-navy.vercel.app/

A modern, responsive news portal application built with **Next.js** and **React 19**. Browse news articles by category, authenticate users securely, and enjoy a seamless reading experience.

> **Journalism Without Fear or Favour**

## ✨ Features

- **📰 News Portal**: Browse news articles organized by categories
- **🔐 Authentication**: Secure user registration and login system
- **⚡ Breaking News**: Scrolling banner with the latest breaking news
- **🎯 Category Filtering**: Explore news by different categories
- **📖 Detailed News Views**: Full article pages with author information
- **⭐ Interactive Elements**: Save articles, share functionality, ratings, and view counts
- **👤 User Profiles**: Display user information and profile images
- **📱 Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **🎨 Modern UI**: Built with HeroUI components for a polished user experience
- **📅 Date Formatting**: Automatically formatted dates on news items
- **🔄 Server-side Rendering**: Optimized performance with Next.js SSR

## 🛠️ Tech Stack

### Frontend
- **Next.js** 16.2.4 - React framework for production
- **React** 19.2.4 - UI library
- **React DOM** 19.2.4
- **Tailwind CSS** 4 - Utility-first CSS framework
- **DaisyUI** 5.5.19 - Component library
- **HeroUI** 3.0.3 - Premium React component library
- **React Hook Form** 7.74.0 - Performant form validation
- **React Fast Marquee** 1.6.5 - Marquee animations
- **React Icons** 5.6.0 - Icon library
- **Gravity UI Icons** 2.18.0 - Additional icon set
- **date-fns** 4.1.0 - Date formatting and manipulation

### Backend & Database
- **Better Auth** 1.6.9 - Authentication and session management
- **MongoDB** 7.2.0 - NoSQL database
- **MongoDB Adapter** for Better Auth - Database adapter

### Development Tools
- **ESLint** 9 - Code linting
- **Babel React Compiler** 1.0.0 - React compilation optimization

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed
- MongoDB instance running (local or Atlas)

## 🗂️ Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page (redirects to category 01) |
| `/category/[id]` | News by category |
| `/news/[id]` | Individual news article |
| `/about` | About page |
| `/career` | Career opportunities |
| `/login` | User login |
| `/register` | User registration |

## 🔐 Authentication

- **Provider**: Better Auth
- **Database**: MongoDB
- **Features**:
  - Email/password registration
  - Secure login
  - Session management
  - User profile storage (name, email, profile image)
  - Persistent authentication with callbacks

## 📡 API Integration

The application integrates with the **Programming Hero News API**:

- `GET /api/news/categories` - Fetch all news categories
- `GET /api/news/category/{categoryId}` - Get news by category
- `GET /api/news/{newsId}` - Get detailed news article

## 📦 Deployment

The project is deployed on **Vercel** and automatically updates on every push to the main branch.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy with one click or automatic deployment on push

**Current Deployment**: https://dragon-news-nextjs-navy.vercel.app/


**Learning is fun if you give time to it**