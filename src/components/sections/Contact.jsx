import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import toast from 'react-hot-toast'
import { supabase } from '../../lib/supabase'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '1654, 12th cross road, Mariappanapalya, Rajajinagar, Bengaluru, Karnataka 560021'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 95334 01234'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@offerasmile.org'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Saturday: 9:00 AM - 6:00 PM'
    }
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          query_type: data.queryType,
          message: data.message
        }])

      if (error) throw error

      toast.success('Thank you for your inquiry! We\'ll get back to you soon.')
      reset()
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      toast.error('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Organization Details */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Organization Details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">NGO Name:</span>
                  <span className="ml-2 text-gray-600">Offer A Smile Foundation</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Registration No:</span>
                  <span className="ml-2 text-gray-600">9999/12/99999999999999</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">State:</span>
                  <span className="ml-2 text-gray-600">Karnataka</span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Bank Details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Bank & Branch:</span>
                  <span className="ml-2 text-gray-600">Axis Bank, Rajajinagar branch</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Account No:</span>
                  <span className="ml-2 text-gray-600">999999999999999999</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">IFSC Code:</span>
                  <span className="ml-2 text-gray-600">xxxxxxxxxxxxxxxxxxxxx</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      {...register('mobile', { required: 'Mobile number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your mobile"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Query Type *
                  </label>
                  <select
                    {...register('queryType', { required: 'Please select a query type' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select query type</option>
                    <option value="volunteer_related_query">Volunteer Related Query</option>
                    <option value="donation_related_query">Donation Related Query</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.queryType && (
                    <p className="mt-1 text-sm text-red-600">{errors.queryType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact