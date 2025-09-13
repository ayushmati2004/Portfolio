# Ayush Mati - Portfolio Website

## 🚀 Modern 3D Portfolio with React & Three.js

A stunning, interactive portfolio website showcasing my work as a Software Developer and Computer Science student. Built with cutting-edge web technologies and featuring immersive 3D elements.

## 🌟 Features

- **3D Interactive Elements**: Immersive hacker room scene with floating React logos, cubes, and rings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Globe**: 3D globe showing my location in New Delhi, India
- **Animated Developer Model**: 3D character with multiple animations in the experience section
- **Contact Form**: Functional contact form with EmailJS integration
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Three.js & React Three Fiber** - 3D graphics and animations
- **React Three Drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### 3D & Animations
- **GSAP** - Professional-grade animation library
- **Maath** - Math utilities for 3D graphics
- **React Globe.GL** - Interactive 3D globe component
- **Three-stdlib** - Three.js utilities and extensions

### Communication
- **EmailJS** - Client-side email sending
- **React Responsive** - Responsive design utilities

## 🎯 Sections

1. **Hero** - 3D hacker room with floating elements and interactive camera
2. **About** - Personal information with interactive globe
3. **Projects** - Showcase of major projects with 3D computer demos
4. **Experience** - Work experience with animated 3D developer character
5. **Clients** - Testimonials and reviews
6. **Contact** - Functional contact form

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ayushmati2004/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── 3D components/   # Three.js 3D models and scenes
│   ├── UI components/   # Buttons, loading, etc.
│   └── ErrorBoundary/   # Error handling
├── sections/            # Main page sections
├── constants/           # Configuration and data
├── hooks/              # Custom React hooks
└── styles/             # CSS and styling
```

## 🎨 Key Components

- **HackerRoom**: Main 3D scene with desk setup
- **Developer**: Animated 3D character with multiple poses
- **Globe**: Interactive 3D Earth with location markers
- **HeroCamera**: Smooth camera movements and controls
- **ErrorBoundary**: Graceful error handling for 3D components

## 📱 Responsive Design

- **Mobile**: Optimized touch interactions and simplified 3D scenes
- **Tablet**: Balanced experience with medium complexity
- **Desktop**: Full 3D experience with all interactive elements

## 🔧 Configuration

### Environment Variables
Create a `.env` file for EmailJS configuration:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 Performance Optimizations

- **Lazy Loading**: 3D models loaded on demand
- **Error Boundaries**: Prevent crashes from 3D component failures
- **Responsive Assets**: Different model complexities for different devices
- **Optimized Textures**: Compressed textures for faster loading

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ayush Mati**
- Email: ayushmati4@gmail.com
- Phone: +91 8178004624
- LinkedIn: [linkedin.com/in/ayush-mati](https://linkedin.com/in/ayush-mati)
- GitHub: [github.com/ayushmati2004](https://github.com/ayushmati2004)
- Location: New Delhi, India

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- React Three Fiber for seamless React integration
- GSAP for professional animations
- All the open-source contributors who made this possible

---

⭐ **Star this repo if you found it helpful!**
