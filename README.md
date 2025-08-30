# Modern Web App

Bu proje React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş modern bir web uygulamasıdır.

## 🚀 Özellikler

- ⚡ **Vite** ile ultra hızlı geliştirme
- 🛡️ **TypeScript** ile tip güvenliği
- 🎨 **Tailwind CSS** ile modern tasarım
- 📱 Responsive tasarım
- 🔥 Hot Module Replacement (HMR)

## 🛠️ Teknolojiler

- React 18
- TypeScript
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview
```

## 🌐 Deployment

Bu uygulama aşağıdaki platformlarda kolayca deploy edilebilir:

### GitHub Pages
1. Repository'yi GitHub'a push edin
2. Settings > Pages > Source: Deploy from a branch
3. Branch: `main`, folder: `/docs` veya `/root`

### Vercel
1. [Vercel](https://vercel.com)'e giriş yapın
2. "New Project" seçin
3. GitHub repository'nizi import edin
4. Otomatik deploy!

### Netlify
1. [Netlify](https://netlify.com)'e giriş yapın
2. "New site from Git" seçin
3. GitHub repository'nizi bağlayın
4. Build command: `npm run build`
5. Publish directory: `dist`

## 📁 Proje Yapısı

```
my-web-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Geliştirme

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Production build oluşturur
- `npm run preview` - Build'i önizler
- `npm run lint` - ESLint ile kod kontrolü

## 📄 Lisans

MIT License

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
