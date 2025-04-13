import { HeartOff } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/TestimonialsNew'
import Reviews from './components/ReviewsFixed'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Reviews />
    </div>
  )
}

export default App
