import { useSpring, animated } from '@react-spring/web';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    feedback: 'This service has completely transformed my daily routine. The personalized approach made all the difference!',
    title: 'Fitness Enthusiast'
  },
  {
    name: 'Michael Chen',
    feedback: 'Incredible results in just a few weeks. The team is knowledgeable and supportive throughout the journey.',
    title: 'Health Coach'
  },
  {
    name: 'Emma Williams',
    feedback: 'The best investment I made for my wellbeing. The guidance is tailored and the progress is measurable.',
    title: 'Yoga Instructor'
  }
];

export default function Testimonials() {
  const springs = testimonials.map((_, index) => useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 20 },
    delay: index * 150
  }));

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">What Our Clients Say</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <animated.div 
              className="testimonial-card" 
              key={index}
              style={springs[index]}
            >
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon left" />
                <p className="testimonial-feedback">{testimonial.feedback}</p>
                <FaQuoteRight className="quote-icon right" />
              </div>
              <div className="testimonial-author">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
