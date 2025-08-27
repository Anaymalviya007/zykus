# ZYKUS - Streetwear Brand Website

A modern, responsive streetwear brand website built with Next.js 14, featuring smooth animations, contemporary design, and mobile-first approach.

## 🚀 Features

- **Modern Design**: Clean, minimalistic interface with vibrant streetwear imagery
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA attributes
- **SEO Ready**: Optimized meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd zykus-streetwear
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Homepage component
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Theme provider component
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # Utility functions (cn, etc.)
├── public/
│   └── *.png                # Streetwear product images
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Black (#000000) for main branding and CTAs
- **Background**: White (#FFFFFF) for clean sections
- **Muted**: Light gray (#F5F5F5) for subtle backgrounds
- **Accent**: Medium gray (#8B8B8B) for secondary elements

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, readable)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Layout
- **Mobile-first**: Responsive design starting from 320px
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Max Width**: 7xl (1280px) for content containers
- **Spacing**: Consistent 4px grid system

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
\`\`\`bash
# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📱 Features Overview

### Homepage Sections
- **Hero Section**: Full-screen with parallax background and call-to-action
- **Collections**: Grid layout showcasing latest streetwear drops
- **Philosophy**: Brand story and vision with imagery
- **Footer**: Links, social media, and company information

### Animations
- **Page Load**: Staggered entrance animations
- **Scroll**: Parallax effects and scroll-triggered animations
- **Hover**: Smooth transitions on interactive elements
- **Navigation**: Fixed header with backdrop blur

## 🔧 Customization

### Adding New Collections
Edit the `collections` array in `app/page.tsx`:
\`\`\`typescript
const collections = [
  {
    id: 1,
    name: "Your Collection Name",
    image: "/your-image.png",
    priceFrom: 99,
  },
  // Add more collections...
]
\`\`\`

### Updating Brand Colors
Modify the CSS variables in `app/globals.css`:
\`\`\`css
:root {
  --primary: oklch(0 0 0); /* Your primary color */
  --background: oklch(1 0 0); /* Your background color */
  /* Update other colors as needed */
}
\`\`\`

### Changing Fonts
Update font imports in `app/layout.tsx`:
\`\`\`typescript
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
})
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for clean, consistent icons

## 📞 Support

For support, email support@zykus.com or join our Discord community.

---

**ZYKUS** - Authentic streetwear for the urban generation. Express yourself boldly.
