import React from 'react'
import { FaBrain, FaChartLine, FaCalendarAlt, FaUserMd, FaBell, FaAmbulance, FaDumbbell } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaBrain size={40} />,
      title: '🧠 AI Health Tracker',
      description: 'Get smart health insights, track vitals, and receive personalized suggestions based on your data.'
    },
    {
      icon: <FaChartLine size={40} />,
      title: '📊 Personal Health Portfolio',
      description: 'Visualize your health journey with charts, stats, and progress milestones.'
    },
    {
      icon: <FaCalendarAlt size={40} />,
      title: '📅 Daily Progress Tracker',
      description: 'Log daily activities like water intake, sleep, steps, and mood to build healthy habits.'
    },
    {
      icon: <FaUserMd size={40} />,
      title: '👨‍⚕️ Local Doctor Support',
      description: 'Find and book appointments with healthcare professionals near you.'
    },
    {
      icon: <FaBell size={40} />,
      title: '💊 Medicine Reminders & SOS Alerts',
      description: 'Set medication alerts and use the SOS button for emergencies to notify contacts or hospitals.'
    },
    {
      icon: <FaAmbulance size={40} />,
      title: '🚑 Ambulance Access',
      description: 'Quick access to nearby ambulance services with real-time location integration.'
    },
    {
      icon: <FaDumbbell size={40} />,
      title: '🧘‍♀️ Yoga & Gym Planner',
      description: 'Stay fit with guided yoga sessions and custom gym routines to suit your lifestyle.'
    }
  ]

  const features = [
    {
      title: '🧠 AI Health Tracker',
      content: 'Our AI-powered health engine continuously learns from your inputs — like daily activity, sleep, and vitals — to provide tailored insights and recommendations. It detects irregular trends, gives early warnings, and adapts to your lifestyle to guide you toward better health. Whether you\'re managing stress, monitoring blood pressure, or optimizing your diet, the AI tracker evolves with you.',
      image: 'ai-health.jpg'
    },
    {
      title: '📊 Personal Health Portfolio',
      content: 'Your Health, Your Dashboard. Visualize your wellness journey with a dynamic portfolio that displays key metrics such as BMI, calories burned, average heart rate, and step count. Graphs, progress bars, and comparison tools help you reflect on your improvements. You can even download reports or share progress with healthcare professionals or family.',
      image: 'health-dashboard.jpg'
    },
    {
      title: '📅 Daily Progress Tracker',
      content: 'Track Today, Transform Tomorrow. Maintain daily check-ins for sleep, meals, hydration, physical activity, and mood. Set goals like "Drink 2L water daily" or "Get 8 hours of sleep", and receive gentle nudges and motivational tips. Weekly reviews break down your habits and offer encouragement for consistency.',
      image: 'progress-tracker.jpg'
    },
    {
      title: '👨‍⚕️ Local Doctor Support',
      content: 'Find Help When You Need It. Easily search and filter verified doctors near your location. View their specialization, availability, ratings, and consultation options. You can book appointments (in-person or virtual), save favorite doctors, and get appointment reminders. A location-integrated map makes it quick to find care around you.',
      image: 'doctor-support.jpg'
    },
    {
      title: '💊 Medicine Reminders & SOS Alerts',
      content: 'Timely Care & Emergency Support. Never miss a dose with our automated medicine reminders — customizable for time, frequency, and dosage. The SOS feature is always one tap away, instantly notifying pre-saved emergency contacts or nearby hospitals with your location and condition. Ideal for chronic patients, elderly users, or high-risk users.',
      image: 'medicine-reminder.jpg'
    },
    {
      title: '🚑 Ambulance Access',
      content: 'Emergency Transport in Seconds. In case of an emergency, the app shows a list of the nearest ambulance services based on your location. You can call them directly or send your live location with a predefined emergency message. Critical response times are minimized through streamlined contact and map integration.',
      image: 'ambulance-access.jpg'
    },
    {
      title: '🧘‍♀️ Yoga & Gym Planner',
      content: 'Move Better, Feel Better. Get access to curated yoga flows, mindfulness sessions, and gym workout plans based on your goals — whether it\'s fat loss, strength, flexibility, or stress relief. Each plan includes video guidance, estimated calories burned, and session timers. Track completed workouts and stay consistent with streaks and rewards.',
      image: 'yoga-planner.jpg'
    }
  ]

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">Our Services</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-section">
          <h3 className="features-title">Detailed Features</h3>
          {features.map((feature, index) => (
            <div className={`feature-item ${index % 2 === 0 ? 'feature-left' : 'feature-right'}`} key={index}>
              <div className="feature-content-wrapper">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-content">{feature.content}</p>
              </div>
              <div className="feature-image">
                <img src={`/images/${feature.image}`} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
