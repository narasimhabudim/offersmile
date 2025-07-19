import { Heart, Users, BookOpen, Stethoscope } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Optimism',
      description: 'We believe in the transformative power of a single smile to brighten lives and communities.'
    },
    {
      icon: Users,
      title: 'Altruism',
      description: 'Our mission is to give selflessly and dedicate ourselves to changing lives.'
    },
    {
      icon: BookOpen,
      title: 'Sincerity',
      description: 'We approach our work with dedication and genuine desire to help.'
    },
    {
      icon: Stethoscope,
      title: 'Fellowship',
      description: 'We promote fellowship among members and communities, uniting for a common cause.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offer A Smile Foundation (OASF) is a beacon of hope and compassion, 
            enlightening the lives of those in need since June 13, 2018.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded by a group of five enthusiastic and like-minded individuals with a profound mission: 
              "being a reason for someone's smile." With unwavering dedication, OASF primarily focuses on 
              education, health, social awareness, and offering food to those in need.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that a single smile can brighten life and that collective smiles can illuminate 
              entire communities. We're not just an organization; we're a promise, a commitment to changing 
              lives, and an embodiment of the belief that kindness knows no boundaries.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Work */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Education</h4>
                <p className="text-gray-700">
                  We support children with scholarships, tuition fees, books, and educational kits, 
                  ensuring every child has access to quality education regardless of background.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h4>
                <p className="text-gray-700">
                  We provide medical assistance, healthcare support, and contribute to operations 
                  and essential medications for the underprivileged.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Food Distribution</h4>
                <p className="text-gray-700">
                  Through food distribution programs, we ensure healthy meals reach those who need 
                  them most, reducing the impacts of hunger in our communities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Social Awareness</h4>
                <p className="text-gray-700">
                  We conduct programs on environmental conservation, women's empowerment, 
                  food safety, and disaster relief to create informed communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About