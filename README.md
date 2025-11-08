# Shine Store - Premium Cleaning Solutions

## About Shine Store

Shine Store is a modern, responsive website for **Shine Enterprises**, a leading provider of premium cleaning products and solutions located in Coimbatore, Tamil Nadu, India. We specialize in high-quality cleaning supplies for homes, offices, and industrial applications.

### Store Information

- **Address**: 34 Edyar Street, Coimbatore, Tamil Nadu 641001, India
- **Phone**: +91 9443106008
- **Email**: shinestoredotin@gmail.com
- **Hours**: Mon-Sat: 9:00 AM - 8:00 PM

## Website Features

- **Modern Design**: Clean, professional interface with responsive design
- **Product Showcase**: Interactive product gallery with hover effects
- **Store Locator**: Integrated Google Maps with directions
- **Partner Network**: Carousel displaying trusted partners (AAA, LuLu, Emerald, Amrita, Anandhaas, Mikro Grafio)
- **Mobile Optimized**: Fully responsive design for all devices
- **Contact Information**: Easy access to store details and contact methods

## Technologies Used

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: shadcn/ui component library
- **Fonts**: Montserrat (headings) and Open Sans (body text) via Google Fonts
- **Maps Integration**: Google Maps API for store location
- **Icons**: Lucide React for modern iconography
- **Carousel**: Embla Carousel for product/partner displays

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/insane-developers/shinestore.in.git
   cd shinestore.in
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Google Maps API Key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_google_maps_api_key_here
   ```
   
   To get a Google Maps API key:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Maps JavaScript API
   - Generate an API key
   - Add website restrictions for security

4. **Start development server**

   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
bun run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── Products.tsx    # Product showcase
│   ├── Partners.tsx    # Partner carousel
│   ├── Directions.tsx  # Store location & maps
│   ├── Navbar.tsx      # Navigation
│   ├── Footer.tsx      # Footer section
│   └── ui/             # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
└── types/              # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Shine Enterprises.

## Contact

For any inquiries about this website or our products:

- **Website**: [shinestore.in](https://shinestore.in)
- **Email**: shinestoredotin@gmail.com
- **Phone**: +91 9443106008
- **Address**: 34 Edyar Street, Coimbatore, Tamil Nadu 641001, India
