import React from 'react';
import { Users, Target, Lightbulb, Heart, Mail, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every project we undertake is guided by clear objectives and measurable outcomes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Our team is driven by passion for excellence and commitment to delivering exceptional work.'
    }
  ];

  const team = [
  {
    name: 'Yaasiin Mohamuud',
    role: 'CEO & Founder',
    image: '/assets/profile.jpg',
    bio: 'With over 5 years of experience in digital strategy...',
    expertise: ['Web Developer', 'Business Development', 'Team Leadership'],
    social: {
      email: 'yaasiinmaxamed990@gmail.com',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: '/assets/michael.jpg',
    bio: 'Michael brings cutting-edge technical expertise...',
    expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
    social: {
      email: 'michael@digitalcraft.com',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/assets/emily.jpg',
    bio: 'Emily crafts beautiful, user-centered designs...',
    expertise: ['UI/UX Design', 'Brand Identity', 'User Research'],
    social: {
      email: 'emily@digitalcraft.com',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: '/assets/david.jpg',
    bio: 'David ensures our code is clean, scalable...',
    expertise: ['React/Vue.js', 'Node.js', 'Database Design'],
    social: {
      email: 'david@digitalcraft.com',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Lisa Thompson',
    role: 'Project Manager',
    image: '/assets/lisa.jpg',
    bio: 'Lisa keeps our projects on track...',
    expertise: ['Agile Methodology', 'Client Relations', 'Quality Assurance'],
    social: {
      email: 'lisa@digitalcraft.com',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Alex Martinez',
    role: 'Marketing Specialist',
    image: '/assets/alex.jpg',
    bio: 'Alex drives digital marketing strategies...',
    expertise: ['SEO/SEM', 'Content Strategy', 'Analytics'],
    social: {
      email: 'alex@digitalcraft.com',
      linkedin: '#',
      twitter: '#'
    }
  }
];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DigitalCraft</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2018, DigitalCraft has been at the forefront of digital innovation, 
              helping businesses transform their ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DigitalCraft was born from a simple belief: that exceptional digital experiences 
                  should be accessible to businesses of all sizes. What started as a small team of 
                  passionate developers and designers has grown into a full-service digital agency.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, Fortune 500 companies, 
                  and everything in between. Each project has taught us something new, helping us refine 
                  our approach and deliver even better results.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses looking to make their mark 
                  in the digital world. Our commitment to excellence, innovation, and client success 
                  remains as strong as ever.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every great project is a team of dedicated professionals who are passionate about what they do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a 
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a 
                        href={member.social.twitter}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
            and create lasting value. We believe that great design and technology should work hand in hand to 
            solve real-world problems and create meaningful connections between brands and their audiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;