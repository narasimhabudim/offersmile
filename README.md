# Offer A Smile Foundation Website

A modern, responsive website for the Offer A Smile Foundation NGO with an admin console for easy content management.

## Features

- 🎨 Modern, responsive design
- 🔧 Admin console for content management
- 📱 Mobile-friendly interface
- 🛠 Easy to maintain and update
- 🔒 Secure admin authentication

## Local Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd offer-a-smile-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Update the environment variables (optional for demo mode)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

### Database Setup (Optional)

The website works in demo mode without a database. To enable full functionality:

1. **Create a Supabase account** at https://supabase.com
2. **Create a new project**
3. **Get your project URL and API key**
4. **Update `.env` file** with your Supabase credentials
5. **Create database tables** using the SQL scripts in `/database` folder

### Admin Access

- Click "Admin Login" in the header
- In demo mode, any email/password will show a demo message
- With Supabase configured, use your registered admin credentials

### Project Structure

```
src/
├── components/
│   ├── admin/          # Admin panel components
│   ├── layout/         # Header, Footer
│   └── sections/       # Page sections
├── contexts/           # React contexts
├── lib/               # Utilities and configurations
└── styles/            # CSS and styling
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

1. **Update content** in the component files
2. **Change colors** in `tailwind.config.js`
3. **Modify styles** in `src/index.css`
4. **Add new sections** by creating components in `src/components/sections/`

### Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider

### Support

For questions or issues, please contact the development team.