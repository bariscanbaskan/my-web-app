import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Modern Web App</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Ana Sayfa</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Hakkında</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">İletişim</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Hoş Geldiniz! 🚀
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Bu modern web uygulaması React, TypeScript ve Tailwind CSS ile geliştirilmiştir. 
            GitHub'dan production ortamına deploy edilmeye hazır!
          </p>

          {/* Counter Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sayaç</h3>
            <div className="text-6xl font-bold text-blue-600 mb-6">{count}</div>
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Artır
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hızlı</h3>
              <p className="text-gray-600">Vite ile ultra hızlı geliştirme deneyimi</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güvenli</h3>
              <p className="text-gray-600">TypeScript ile tip güvenliği</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern</h3>
              <p className="text-gray-600">Tailwind CSS ile modern tasarım</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Modern Web App. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
