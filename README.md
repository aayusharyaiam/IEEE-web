# IEEE Student Branch BIT Patna

Welcome to the official frontend repository for the **IEEE Student Branch at BIT Patna**.
This project has been completely overhauled to deliver a production-grade, premium user experience based on the **Lumina IEEE** (Light) and **Cybernetic Ether** (Dark) design systems. It accurately replicates the custom Stitch templates with high-fidelity mobile responsiveness and smooth layout transitions.

## 🚀 Features

- **1:1 Premium UI Replication**: Identical layout matches to the custom Stitch templates.
- **Dynamic Theming**: **Cybernetic Ether (Dark Mode)** is set as the default striking experience, with a fully compatible and scalable **Lumina IEEE (Light Mode)** handled via CSS variables and `radial-gradient` glow effects.
- **Responsive Architecture**: Fully responsive layouts across all breakpoint dimensions (Mobile, Tablet, Desktop) utilizing custom CSS grids, flexbox solutions, and scaled typography (`text-[2.5rem]` mobile hero fonts).
- **Mobile Navigation**: Integrated responsive hamburger edge-drawer with frosted glass backdrop styling.
- **Fluid Animation System**: High-yield entry and scroll-triggered animations powered by **GSAP ScrollTrigger**. Includes staggering entry hooks for the Member cards, Gallery masonry, and Home events.

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [GSAP (GreenSock)](https://gsap.com/)
- **Icons**: Google Material Symbols Outlined

## 📂 Architecture & Key Components

The `/src` directory is strictly divided between `pages` and `components`:
- `Navbar.jsx`: Implements responsive navigation, dynamic active routes, the interactive mobile drawer, and Theme Mode state management.
- `Home.jsx`: The primary landing interface featuring abstract glowing orbs, Vision & Mission geometry, a 4-column Stats tracking grid, and the Upcoming Events scrollable carousel.
- `Events.jsx`: Features an alternating left-to-right vertical timeline layout and an integrated Newsletter subscription banner.
- `Members.jsx`: Scalable pure CSS grid (`grid-cols-2` scaling to `lg:grid-cols-4`) mapping exact content for the Executive Committee, along with a "Join the Team" CTA placeholder.
- `Gallery.jsx`: Asymmetrical CSS-Columns masonry layout with staggered GSAP entry logic and a featured spotlight section.
- `Contact.jsx`: Dual-column layout featuring floating-labels and integrated abstract Map overlays.

**Design System Note:** 
The CSS constants are hard-compiled into `src/index.css` via custom tailwind logic. Over 35 distinct UI variables (Surface, Tertiary-Fixed, Primary-Container, etc.) seamlessly swap behavior depending on the `.dark` class state stored on the `<html>` node.

## 💻 Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Local Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Content Management
The text content on this website adheres strictly to the `content.md` specification. Structural hierarchies should never deviate unless formally modified inside `content.md` and approved by the branch counselor.
