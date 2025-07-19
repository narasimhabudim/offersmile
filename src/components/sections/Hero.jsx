import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Being a Reason for Someone\'s Smile',
      subtitle: 'Offer A Smile Foundation - Spreading Hope Since 2018'
    },
    {
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Education for Every Child',
      subtitle: 'Empowering futures through quality education and scholarships'
    },
    {
      image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Healthcare for All',
      subtitle: 'Providing medical assistance and support to those in need'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#volunteer"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold text-lg"
                >
                  Join Our Mission
                </a>
                <a
                  href="#about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-semibold text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero