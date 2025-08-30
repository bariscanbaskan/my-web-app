# 🚀 Deployment Rehberi

Bu dosya, uygulamanızı GitHub Pages'e deploy etmek için adım adım talimatları içerir.

## 📋 Ön Gereksinimler

- GitHub hesabı
- Git yüklü (zaten var)
- Node.js yüklü (zaten var)

## 🔧 Adım Adım Deployment

### 1. GitHub Repository Oluşturma

1. [GitHub.com](https://github.com)'a gidin
2. Sağ üst köşedeki "+" butonuna tıklayın
3. "New repository" seçin
4. Repository adını "my-web-app" olarak belirleyin
5. **Public** seçin (GitHub Pages için gerekli)
6. README, .gitignore veya license eklemeyin (zaten var)
7. "Create repository" butonuna tıklayın

### 2. Local Repository'yi GitHub'a Bağlama

Repository oluşturduktan sonra, GitHub size şuna benzer komutlar gösterecek:

```bash
# Remote repository'yi ekleyin (YOUR_USERNAME'i kendi kullanıcı adınızla değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/my-web-app.git

# Main branch'i ayarlayın
git branch -M main

# Kodu GitHub'a push edin
git push -u origin main
```

### 3. GitHub Pages'i Aktifleştirme

1. GitHub repository sayfanızda "Settings" sekmesine gidin
2. Sol menüden "Pages" seçin
3. "Source" bölümünde "Deploy from a branch" seçin
4. Branch olarak "main" seçin
5. Folder olarak "/ (root)" seçin
6. "Save" butonuna tıklayın

### 4. GitHub Actions'ı Kontrol Etme

1. GitHub repository sayfanızda "Actions" sekmesine gidin
2. Deployment workflow'unun çalıştığını göreceksiniz
3. Workflow tamamlandığında, "Pages" sekmesinde sitenizin URL'ini göreceksiniz

## 🌐 Alternatif Deployment Seçenekleri

### Vercel (Önerilen)

1. [Vercel.com](https://vercel.com)'a gidin
2. GitHub ile giriş yapın
3. "New Project" seçin
4. GitHub repository'nizi import edin
5. Otomatik olarak deploy edilecek!

### Netlify

1. [Netlify.com](https://netlify.com)'a gidin
2. "New site from Git" seçin
3. GitHub repository'nizi bağlayın
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" butonuna tıklayın

## 🔍 Sorun Giderme

### Build Hatası
- `npm run build` komutunu local'de test edin
- Hata varsa düzeltin ve tekrar push edin

### GitHub Pages Çalışmıyor
- Repository'nin public olduğundan emin olun
- Settings > Pages'te doğru branch seçildiğini kontrol edin
- Actions sekmesinde workflow'un başarıyla tamamlandığını kontrol edin

### Styling Sorunları
- Tailwind CSS'in doğru yüklendiğinden emin olun
- Browser cache'ini temizleyin

## 📞 Yardım

Sorun yaşarsanız:
1. GitHub Issues'da sorun açın
2. Stack Overflow'da arama yapın
3. Vercel/Netlify dokümantasyonunu kontrol edin

---

🎉 Başarılı deployment sonrası siteniz şu formatta olacak:
- GitHub Pages: `https://YOUR_USERNAME.github.io/my-web-app/`
- Vercel: `https://my-web-app-YOUR_USERNAME.vercel.app`
- Netlify: `https://random-name.netlify.app` 