# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open in Browser
Navigate to: **http://localhost:5173**

---

## 🎯 Demo Credentials

Use these credentials to test the application:
- **Email**: `user@example.com`
- **Password**: `password123`

---

## 📍 Key Pages

### 🏠 Home Page (`/`)
- Landing page with features and testimonials
- AI chatbot for quick questions
- Call-to-action sections

### 🔐 Login Page (`/login`)
- Secure authentication
- Sign up for new users
- Password strength indicator
- Social login options (UI only)

### 📊 Dashboard (`/dashboard`)
- Health metrics overview
- Mood tracking
- Quick actions
- Health insights

### 🧍 Body Map (`/body`)
- 3D symptom visualization
- Interactive body model
- Symptom details

### 🚨 Alerts (`/status`)
- Health alerts and anomalies
- AI-detected patterns
- Doctor contact feature

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev          # Start dev server with hot reload
```

### Production
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

---

## 🎨 Key Features Implemented

✅ Responsive mobile-first design
✅ Professional navigation with mobile menu
✅ User authentication system
✅ Password strength validation
✅ Health metrics dashboard
✅ Mood tracking with visualization
✅ 3D body symptom mapping
✅ AI anomaly detection alerts
✅ Interactive chatbot
✅ Professional footer with newsletter
✅ Testimonials section
✅ Trust badges and stats
✅ Loading states
✅ Smooth animations
✅ Accessibility features

---

## 🔧 Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR_HERE',
}
```

### Modify Fonts
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');
```

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

---

## 💡 Pro Tips

- All data is currently **mock data** - perfect for demos
- The authentication uses **localStorage** for persistence
- Chatbot responses are **simulated** - ready for AI integration
- Forms include **client-side validation** only
- The app is **fully responsive** - test on different devices

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf dist
npm run build
```

---

## 📱 Testing Responsive Design

### Using Browser DevTools
1. Open DevTools (F12)
2. Click device toggle button (Ctrl+Shift+M)
3. Select different devices or custom dimensions

### Recommended Test Devices
- iPhone SE (375px)
- iPad (768px)
- Desktop (1440px)

---

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Router](https://reactrouter.com)

---

**Happy Coding! 🎉**
