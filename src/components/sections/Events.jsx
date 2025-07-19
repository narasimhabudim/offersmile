import { useState, useEffect } from 'react'
import { Calendar, MapPin, Users } from 'lucide-react'
import { supabase } from '../../lib/supabase'

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      // If Supabase is not configured, use fallback data
      if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL === 'https://placeholder.supabase.co') {
        setEvents([
          {
            id: 1,
            title: 'Blankets Distribution',
            description: 'Distribution of blankets for elderly people during winter season',
            date: '2024-01-25',
            location: 'Old Age Home, Bangalore',
            image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            participants: 25
          },
          {
            id: 2,
            title: 'Monthly Groceries Support',
            description: 'Providing required monthly groceries for an old age home',
            date: '2024-02-19',
            location: 'Community Center, Rajajinagar',
            image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            participants: 15
          },
          {
            id: 3,
            title: 'Nutrition Program',
            description: 'Distributing fruits and medicines for orphanage children',
            date: '2024-03-12',
            location: 'Children\'s Home, Bangalore',
            image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            participants: 30
          }
        ])
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false })
        .limit(6)

      if (error) throw error
      setEvents(data || [])
    } catch (error) {
      console.error('Error fetching events:', error)
      // Fallback to sample data
      setEvents([
        {
          id: 1,
          title: 'Blankets Distribution',
          description: 'Distribution of blankets for elderly people during winter season',
          date: '2024-01-25',
          location: 'Old Age Home, Bangalore',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          participants: 25
        },
        {
          id: 2,
          title: 'Monthly Groceries Support',
          description: 'Providing required monthly groceries for an old age home',
          date: '2024-02-19',
          location: 'Community Center, Rajajinagar',
          image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          participants: 15
        },
        {
          id: 3,
          title: 'Nutrition Program',
          description: 'Distributing fruits and medicines for orphanage children',
          date: '2024-03-12',
          location: 'Children\'s Home, Bangalore',
          image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          participants: 30
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the impact we're making in our community through various initiatives and programs.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants} participants
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#gallery"
            className="inline-flex items-center bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events