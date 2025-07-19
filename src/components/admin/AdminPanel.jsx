import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Plus, Edit, Trash2, Image, Calendar, Users, MessageSquare, X } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import toast from 'react-hot-toast'

const AdminPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('events')
  const [events, setEvents] = useState([])
  const [gallery, setGallery] = useState([])
  const [volunteers, setVolunteers] = useState([])
  const [inquiries, setInquiries] = useState([])
  const [showEventForm, setShowEventForm] = useState(false)
  const [showGalleryForm, setShowGalleryForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)
  const [editingGallery, setEditingGallery] = useState(null)

  const { register: registerEvent, handleSubmit: handleEventSubmit, reset: resetEvent, setValue: setEventValue } = useForm()
  const { register: registerGallery, handleSubmit: handleGallerySubmit, reset: resetGallery, setValue: setGalleryValue } = useForm()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Fetch events
      const { data: eventsData } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false })
      setEvents(eventsData || [])

      // Fetch gallery
      const { data: galleryData } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })
      setGallery(galleryData || [])

      // Fetch volunteers
      const { data: volunteersData } = await supabase
        .from('volunteers')
        .select('*')
        .order('created_at', { ascending: false })
      setVolunteers(volunteersData || [])

      // Fetch inquiries
      const { data: inquiriesData } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
      setInquiries(inquiriesData || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleEventFormSubmit = async (data) => {
    try {
      if (editingEvent) {
        const { error } = await supabase
          .from('events')
          .update({
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            image: data.image,
            participants: parseInt(data.participants)
          })
          .eq('id', editingEvent.id)

        if (error) throw error
        toast.success('Event updated successfully!')
      } else {
        const { error } = await supabase
          .from('events')
          .insert([{
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            image: data.image,
            participants: parseInt(data.participants)
          }])

        if (error) throw error
        toast.success('Event created successfully!')
      }

      setShowEventForm(false)
      setEditingEvent(null)
      resetEvent()
      fetchData()
    } catch (error) {
      toast.error('Error saving event')
      console.error('Error:', error)
    }
  }

  const handleGalleryFormSubmit = async (data) => {
    try {
      if (editingGallery) {
        const { error } = await supabase
          .from('gallery')
          .update({
            title: data.title,
            description: data.description,
            image_url: data.image_url
          })
          .eq('id', editingGallery.id)

        if (error) throw error
        toast.success('Gallery item updated successfully!')
      } else {
        const { error } = await supabase
          .from('gallery')
          .insert([{
            title: data.title,
            description: data.description,
            image_url: data.image_url
          }])

        if (error) throw error
        toast.success('Gallery item created successfully!')
      }

      setShowGalleryForm(false)
      setEditingGallery(null)
      resetGallery()
      fetchData()
    } catch (error) {
      toast.error('Error saving gallery item')
      console.error('Error:', error)
    }
  }

  const deleteEvent = async (id) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        const { error } = await supabase
          .from('events')
          .delete()
          .eq('id', id)

        if (error) throw error
        toast.success('Event deleted successfully!')
        fetchData()
      } catch (error) {
        toast.error('Error deleting event')
        console.error('Error:', error)
      }
    }
  }

  const deleteGalleryItem = async (id) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      try {
        const { error } = await supabase
          .from('gallery')
          .delete()
          .eq('id', id)

        if (error) throw error
        toast.success('Gallery item deleted successfully!')
        fetchData()
      } catch (error) {
        toast.error('Error deleting gallery item')
        console.error('Error:', error)
      }
    }
  }

  const editEvent = (event) => {
    setEditingEvent(event)
    setEventValue('title', event.title)
    setEventValue('description', event.description)
    setEventValue('date', event.date)
    setEventValue('location', event.location)
    setEventValue('image', event.image)
    setEventValue('participants', event.participants)
    setShowEventForm(true)
  }

  const editGalleryItem = (item) => {
    setEditingGallery(item)
    setGalleryValue('title', item.title)
    setGalleryValue('description', item.description)
    setGalleryValue('image_url', item.image_url)
    setShowGalleryForm(true)
  }

  const tabs = [
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'gallery', name: 'Gallery', icon: Image },
    { id: 'volunteers', name: 'Volunteers', icon: Users },
    { id: 'inquiries', name: 'Inquiries', icon: MessageSquare }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Events Tab */}
          {activeTab === 'events' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Manage Events</h3>
                <button
                  onClick={() => setShowEventForm(true)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add Event</span>
                </button>
              </div>

              {showEventForm && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {editingEvent ? 'Edit Event' : 'Add New Event'}
                  </h4>
                  <form onSubmit={handleEventSubmit(handleEventFormSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        {...registerEvent('title', { required: true })}
                        placeholder="Event Title"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <input
                        {...registerEvent('date', { required: true })}
                        type="date"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      {...registerEvent('location', { required: true })}
                      placeholder="Location"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      {...registerEvent('image', { required: true })}
                      placeholder="Image URL"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      {...registerEvent('participants', { required: true })}
                      type="number"
                      placeholder="Number of Participants"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <textarea
                      {...registerEvent('description', { required: true })}
                      placeholder="Event Description"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        {editingEvent ? 'Update Event' : 'Create Event'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowEventForm(false)
                          setEditingEvent(null)
                          resetEvent()
                        }}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {new Date(event.date).toLocaleDateString()} • {event.location}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editEvent(event)}
                          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Edit className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Manage Gallery</h3>
                <button
                  onClick={() => setShowGalleryForm(true)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add Image</span>
                </button>
              </div>

              {showGalleryForm && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {editingGallery ? 'Edit Gallery Item' : 'Add New Gallery Item'}
                  </h4>
                  <form onSubmit={handleGallerySubmit(handleGalleryFormSubmit)} className="space-y-4">
                    <input
                      {...registerGallery('title', { required: true })}
                      placeholder="Image Title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      {...registerGallery('image_url', { required: true })}
                      placeholder="Image URL"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <textarea
                      {...registerGallery('description', { required: true })}
                      placeholder="Image Description"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        {editingGallery ? 'Update Image' : 'Add Image'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowGalleryForm(false)
                          setEditingGallery(null)
                          resetGallery()
                        }}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editGalleryItem(item)}
                          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Edit className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deleteGalleryItem(item.id)}
                          className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Volunteers Tab */}
          {activeTab === 'volunteers' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Volunteer Applications</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {volunteers.map((volunteer) => (
                      <tr key={volunteer.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {volunteer.first_name} {volunteer.last_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {volunteer.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {volunteer.mobile}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(volunteer.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Inquiries Tab */}
          {activeTab === 'inquiries' && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Inquiries</h3>
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{inquiry.name}</h4>
                        <p className="text-sm text-gray-500">{inquiry.email} • {inquiry.mobile}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {inquiry.query_type.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{inquiry.message}</p>
                    <p className="text-sm text-gray-500">
                      Received: {new Date(inquiry.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel