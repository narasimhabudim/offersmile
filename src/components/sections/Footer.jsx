import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Contact', href: '#contact' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Terms of Service', href: '#terms' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">Offer A Smile</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A beacon of hope and compassion, enlightening the lives of those in need since 2018. 
              Our mission is simple: being a reason for someone's smile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:info@offerasmile.org" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm">
                1654, 12th cross road, Mariappanapalya, Rajajinagar, Bengaluru, Karnataka 560021
              </p>
              <p className="text-sm">
                <a href="tel:+919533401234" className="hover:text-red-500 transition-colors duration-200">
                  +91 95334 01234
                </a>
              </p>
              <p className="text-sm">
                <a href="mailto:info@offerasmile.org" className="hover:text-red-500 transition-colors duration-200">
                  info@offerasmile.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Offer A Smile Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer