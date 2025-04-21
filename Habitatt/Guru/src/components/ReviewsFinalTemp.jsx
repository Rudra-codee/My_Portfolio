import { useSpring, animated } from '@react-spring/web';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Alex Johnson',
    rating: 5,
    comment: 'Absolutely transformative experience! The team went above and beyond to meet my needs.',
    date: '2 weeks ago'
  },
  {
    name: 'Sarah Miller',
    rating: 4,
    comment: 'Great service with noticeable results. Would recommend to anyone looking for improvement.',
    date: '1 month ago'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    comment: 'Exceptional quality and attention to detail. Exceeded all my expectations!',
    date: '3 weeks ago'
  }
];

export default function Reviews() {
  const containerSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 20 }
  });

  const cardSprings = reviews.map((_, index) => 
    useSpring({
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0 },
      config: { tension: 200, friction: 20 },
      delay: index * 150
    })
  );

  return (
    <section className="reviews-section">
      <animated.div style={containerSpring} className="reviews-container">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <animated.div 
              key={index}
              className="review-card"
              style={cardSprings[index]}
            >
              <div className="review-header">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < review.rating ? 'star filled' : 'star'} 
                    />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{review.comment}</p>
              </div>
              <div className="review-author">
                <h4>{review.name}</h4>
              </div>
            </animated.div>
          ))}
        </div>
      </animated.div>
    </section>
  );
}
