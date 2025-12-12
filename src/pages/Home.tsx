import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

interface Activity {
  id: number
  name: string
  image: string
  description: string
}

const activities: Activity[] = [
  {
    id: 1,
    name: 'Trekking',
    image: 'Bikataventures/www.bikatadventures.com/images/frontend/trekking.jpg',
    description: 'Explore scenic mountain trails and wilderness'
  },
  {
    id: 2,
    name: 'Mountaineering',
    image: 'Bikataventures/www.bikatadventures.com/images/frontend/mountaineering.jpg',
    description: 'Conquer peaks and mountain expeditions'
  },
  {
    id: 3,
    name: 'Cycling',
    image: 'Bikataventures/www.bikatadventures.com/images/frontend/cycling.jpg',
    description: 'Ride through challenging mountain passes'
  },
  {
    id: 4,
    name: 'Kayaking',
    image: 'Bikataventures/www.bikatadventures.com/images/frontend/kayaking.jpg',
    description: 'Water adventure on pristine lakes and rivers'
  },
]

const monthlyAdventures = [
  { month: 'January', image: 'january.jpg', treks: 12 },
  { month: 'February', image: 'february.jpg', treks: 15 },
  { month: 'March', image: 'march.jpg', treks: 18 },
  { month: 'April', image: 'april.jpg', treks: 20 },
  { month: 'May', image: 'may.jpg', treks: 22 },
  { month: 'June', image: 'june.jpg', treks: 16 },
  { month: 'July', image: 'july.jpg', treks: 14 },
  { month: 'August', image: 'august.jpg', treks: 13 },
  { month: 'September', image: 'september.jpg', treks: 17 },
  { month: 'October', image: 'october.jpg', treks: 25 },
  { month: 'November', image: 'november.jpg', treks: 23 },
  { month: 'December', image: 'december.jpg', treks: 19 },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      title: 'The Most Scenic Winter Trek for Beginners',
      description: 'Kuari Pass Trek',
      image: 'Bikataventures/www.bikatadventures.com/images/frontend/hero-1.jpg',
    },
    {
      title: 'Experience the Mystical Himalayas',
      description: 'Chopta Trek',
      image: 'Bikataventures/www.bikatadventures.com/images/frontend/hero-2.jpg',
    },
    {
      title: 'Adventure Awaits You',
      description: 'Start Your Journey',
      image: 'Bikataventures/www.bikatadventures.com/images/frontend/hero-3.jpg',
    },
  ]

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${activeSlide === index ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-description">{slide.description}</p>
                  <Link to="/activities" className="readmore-button">
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <h2 className="section-title">Our Activities</h2>
          <p className="section-subtitle">Choose your type of adventure</p>

          <div className="row activities-grid">
            {activities.map((activity) => (
              <div key={activity.id} className="col-md-6 col-lg-3 activity-card-wrapper">
                <div className="activity-card">
                  <div className="activity-image">
                    <img src={activity.image} alt={activity.name} />
                  </div>
                  <div className="activity-info">
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                    <Link to="/activities" className="activity-link">
                      View {activity.name} <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Adventures Section */}
      <section className="monthly-adventures">
        <div className="container">
          <h2 className="section-title">Adventures by Month</h2>
          <p className="section-subtitle">Discover the best time to explore</p>

          <div className="row months-grid">
            {monthlyAdventures.map((adventure, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 month-card-wrapper">
                <div className="month-card">
                  <div className="month-image">
                    <div className="month-placeholder">{adventure.month.substring(0, 3)}</div>
                  </div>
                  <div className="month-info">
                    <h4>{adventure.month}</h4>
                    <p>{adventure.treks} Adventures</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Adventure?</h2>
            <p>Discover hundreds of treks, peaks, and expeditions curated just for you</p>
            <Link to="/activities" className="cta-button">
              Find Your Next Adventure
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
