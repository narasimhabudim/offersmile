import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Heart, Users, BookOpen, Lightbulb } from 'lucide-react'
import toast from 'react-hot-toast'
import { supabase } from '../../lib/supabase'

const Volunteer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const benefits = [
    {
      icon: Heart,
      title: 'Impactful Contributions',
      description: 'Directly impact lives and create ripples of positive change in communities.'
    },
    {
      icon: Users,
      title: 'Sense of Purpose',
      description: 'Find fulfillment knowing you\'ve made a meaningful difference in someone\'s life.'
    },
    {
      icon: BookOpen,
      title: 'Skill Enhancement',
      description: 'Develop valuable skills in teamwork, leadership, communication, and problem-solving.'
    },
    {
      icon: Lightbulb,
      title: 'Community',
      description: 'Join a supportive community of like-minded individuals passionate about change.'
    }
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('volunteers')
        .insert([{
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          mobile: data.mobile,
          date_of_birth: data.dateOfBirth,
          address: data.address,
          whatsapp_preference: data.whatsappPreference === 'yes',
          email_preference: data.emailPreference === 'yes'
        }])

      if (error) throw error

      toast.success('Thank you for joining us! We\'ll be in touch soon.')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Us as a Volunteer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become the heartbeat of OASF and make a tangible difference in the lives of those in need.
          </p>
        </div>

        {/* Why Volunteer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Volunteer with Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Volunteer Registration Form
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
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
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  {...register('dateOfBirth', { required: 'Date of birth is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                {errors.dateOfBirth && (
                  <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  {...register('address', { required: 'Address is required' })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Contact Permission
                  </label>
                  <select
                    {...register('whatsappPreference', { required: 'Please select an option' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.whatsappPreference && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsappPreference.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Newsletter
                  </label>
                  <select
                    {...register('emailPreference', { required: 'Please select an option' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.emailPreference && (
                    <p className="mt-1 text-sm text-red-600">{errors.emailPreference.message}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Join Our Mission'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteer