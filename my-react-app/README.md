# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Web Development Project 1 - *Famous Restaurants Must Eat*

Submitted by: **Thien An Truong**

This web app: **World's Famous Restaurants Must Eat - A comprehensive guide to the best restaurants across different categories, from fast food favorites to fine dining experiences.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [✅] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [✅] Header/title describing the theme is displayed
- [✅] **At least 10 unique events or resources are displayed in a responsive card format**
  - [✅] There are 39 restaurant cards displayed across 9 categories
  - [✅] The cards are displayed in an organized grid format
  - [✅] Each card includes restaurant name, image, and star rating

## Optional Features

The following **optional** features are implemented:

- [✅] **The site is responsive for both desktop and mobile formats**
  - [✅] Web app is responsive across desktop, tablet, and mobile devices
  - [✅] Mobile-optimized layout with touch-friendly cards
  - [✅] Adaptive grid system (4 columns → 2 columns → 1 column)

## Additional Features

The following **additional** features are implemented:

- [✅] **Professional UI Design**: Beautiful blue gradient backgrounds with glass morphism effects
- [✅] **High-quality Images**: Professional food photography for each restaurant
- [✅] **Interactive Elements**: Hover effects and smooth animations
- [✅] **Category Organization**: Restaurants organized into 9 distinct categories
- [✅] **Dynamic Ratings**: Star ratings with randomized scores for realism
- [✅] **Cross-browser Compatibility**: Works across all modern browsers
- [✅] **Performance Optimized**: Lazy loading images and efficient CSS

## Video Walkthrough

Here's a walkthrough of implemented required features:

**🎯 App Features Demonstrated:**
- **9 Restaurant Categories**: Fast Food, Pizza, Coffee & Breakfast, Casual Dining, Asian Cuisine, Premium Burgers, Fine Dining, International, Specialty
- **39+ Unique Restaurants** with professional food photography
- **Responsive Design**: Beautiful blue gradient background with glass morphism effects
- **Interactive Cards**: Hover effects, ratings, and smooth animations
- **Mobile Optimization**: Adaptive grid layout for all screen sizes

**📱 Live Demo Available**: The app runs locally with `npm run dev`

**🎨 Visual Highlights**:
- Beautiful food photography for each restaurant
- Color-coded category sections (red titles, gradient cards)
- Professional UI with backdrop blur effects
- Star ratings for each restaurant (4.0-5.0 range)

GIF created with [Kap](https://getkap.co/) for macOS  
*Note: Original video was compressed for GitHub compatibility*

## Technical Implementation

**Technologies Used:**
- React 19.1.1 with functional components
- Vite 7.1.7 for fast development and building
- CSS3 with Flexbox and Grid layouts
- Responsive design with mobile-first approach

**Key Statistics:**
- 39 unique restaurants across 9 categories
- Responsive breakpoints: 768px, 480px, 360px
- Professional food images from Unsplash API
- Modern CSS with backdrop-filter support

## Notes

**Challenges encountered while building the app:**
- Implementing proper mobile responsiveness across different screen sizes
- Balancing text contrast against the blue gradient background
- Optimizing image loading performance with lazy loading
- Creating smooth animations that work well on mobile devices
- Ensuring cross-browser compatibility for backdrop-filter effects

## License

    Copyright [2025] [Thien An Truong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.