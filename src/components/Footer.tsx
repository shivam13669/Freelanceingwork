import './Footer.css'

export default function Footer() {
  const trekCategories = [
    { name: 'Easy Treks', href: '#easy-treks' },
    { name: 'Moderate Treks', href: '#moderate-treks' },
    { name: 'Difficult Treks', href: '#difficult-treks' },
    { name: 'Technical Treks', href: '#technical-treks' },
  ]

  const popularTraining = [
    { name: 'Aryapatha Trek', href: '#aryapatha' },
    { name: 'Auli Chopta Trek', href: '#auli-chopta' },
    { name: 'Audens Col Trek', href: '#audens-col' },
    { name: 'Annapurna Base Camp', href: '#annapurna' },
    { name: 'Bali Pass Trek', href: '#bali-pass' },
    { name: 'Beaskund Trek', href: '#beaskund' },
  ]

  const activities = [
    { name: 'Trekking', href: '#trekking' },
    { name: 'Mountaineering', href: '#mountaineering' },
    { name: 'Cycling', href: '#cycling' },
    { name: 'Kayaking', href: '#kayaking' },
    { name: 'Skiing', href: '#skiing' },
    { name: 'Scuba Diving', href: '#scuba' },
  ]

  const policies = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Environment Policy', href: '#environment' },
    { name: 'Cancellation & Batch', href: '#cancellation' },
  ]

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-content">
          <div className="col-md-3 col-12">
            <h4 className="footer-heading">Trek Categories</h4>
            <div className="footer-links">
              {trekCategories.map((trek) => (
                <div key={trek.name} className="footer-link-item">
                  <a href={trek.href}>{trek.name}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3 col-12">
            <h4 className="footer-heading">Popular Treks</h4>
            <div className="footer-links">
              {popularTraining.map((trek) => (
                <div key={trek.name} className="footer-link-item">
                  <a href={trek.href}>{trek.name}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3 col-12">
            <h4 className="footer-heading">Activities</h4>
            <div className="footer-links">
              {activities.map((activity) => (
                <div key={activity.name} className="footer-link-item">
                  <a href={activity.href}>{activity.name}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3 col-12">
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <div className="footer-link-item">
                <a href="#about">About Us</a>
              </div>
              <div className="footer-link-item">
                <a href="#careers">Careers</a>
              </div>
              <div className="footer-link-item">
                <a href="#contact">Contact Us</a>
              </div>
              <div className="footer-link-item">
                <a href="#blog">Blog</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row footer-bottom">
          <div className="col-md-6 col-12 footer-policies">
            {policies.map((policy) => (
              <a key={policy.name} href={policy.href} className="footer-policy-link">
                {policy.name}
              </a>
            ))}
          </div>

          <div className="col-md-6 col-12 footer-copyright">
            <p>&copy; 2025 Bikat Adventures. All rights reserved.</p>
            <p>Pure Grit. Pure Adventure.</p>
          </div>
        </div>

        <div className="row footer-social">
          <div className="col-12 text-center">
            <a href="#facebook" className="social-icon" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#instagram" className="social-icon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#twitter" className="social-icon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#youtube" className="social-icon" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
