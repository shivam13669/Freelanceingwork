import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isBlogOpen, setIsBlogOpen] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-default">
        <div className="container-fluid container-navbar">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand hover-no-bg">
              <img 
                src="Bikataventures/www.bikatadventures.com/images/frontend/BikatLogo_New.png" 
                className="img-responsive header-logo" 
                alt="Bikat Adventures Logo" 
              />
            </Link>
          </div>
          <button 
            className="navbar-toggler mobile-navbar-btn" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav navbar-css raleway ms-auto mb-2 mb-lg-0">
              <li className="dropdown">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              
              <li className="dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  role="button" 
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  Blog
                </a>
                {isBlogOpen && (
                  <ul className="dropdown-menu navbar-dropdown header-dropdown show">
                    <li><Link to="/blogs" className="dropdown-item">All</Link></li>
                    <li><a className="dropdown-item" href="#latest-updates">Latest Updates</a></li>
                    <li><a className="dropdown-item" href="#contests">Contests & Giveaways</a></li>
                    <li><a className="dropdown-item" href="#sustainability">Practicing Sustainability</a></li>
                    <li><a className="dropdown-item" href="#safety">Practicing Safety</a></li>
                    <li><a className="dropdown-item" href="#know-how">Know How</a></li>
                    <li><a className="dropdown-item" href="#informative">Informative</a></li>
                    <li><a className="dropdown-item" href="#adventures">Our Book of Adventures</a></li>
                    <li><a className="dropdown-item" href="#opinion">The Opinion Corner</a></li>
                    <li><a className="dropdown-item" href="#pictures">Picture Blogs</a></li>
                    <li><a className="dropdown-item" href="#trekker">Trekkers' Blogs</a></li>
                  </ul>
                )}
              </li>
              
              <li className="dropdown">
                <Link to="/activities" className="filter-btn-navbar nav-link">
                  Activities
                </Link>
              </li>
              
              <li className="dropdown">
                <Link to="/rent-gear" className="nav-link">Rent Gear</Link>
              </li>
              
              <li className="dropdown">
                <Link to="/careers" className="nav-link">Careers</Link>
              </li>
              
              <li className="dropdown">
                <a 
                  href="https://fullontravel.com/holidays/spiti-tour-packages" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Discover Spiti
                  <div className="trendTag">New</div>
                </a>
              </li>
              
              <li>
                <Link to="/login" className="navbar-user-icon-css">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '3px', backgroundColor: '#EE8B14' }}></div>
    </>
  )
}
