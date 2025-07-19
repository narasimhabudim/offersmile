import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Events from './components/sections/Events'
import Gallery from './components/sections/Gallery'
import Volunteer from './components/sections/Volunteer'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import AdminLogin from './components/admin/AdminLogin'
import AdminPanel from './components/admin/AdminPanel'

function AppContent() {
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#admin-login' && !user) {
        setShowAdminLogin(true)
      } else if (hash === '#admin' && user) {
        setShowAdminPanel(true)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [user])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
      
      {showAdminLogin && !user && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
      
      {showAdminPanel && user && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
      
      <Toaster position="top-right" />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App