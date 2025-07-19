import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Join Us', href: '#volunteer' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-gray-900">Offer A Smile</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Admin/Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <a
                  href="#admin"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  Admin Panel
                </a>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <a
                href="#admin-login"
                className="text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                Admin Login
              </a>
            )}
            <a
              href="#donate"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {user ? (
                <>
                  <a
                    href="#admin"
                    className="text-red-500 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </a>
                  <button
                    onClick={() => {
                      handleSignOut()
                      setIsMenuOpen(false)
                    }}
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <a
                  href="#admin-login"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Login
                </a>
              )}
              <a
                href="#donate"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header