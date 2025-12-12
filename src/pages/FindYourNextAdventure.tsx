import { useState, useMemo } from 'react'
import './FindYourNextAdventure.css'

interface Adventure {
  id: number
  name: string
  brs: number
  price: number
  duration: number
  altitude: number
  difficulty: string
  region: string
  type: string
  image: string
}

const sampleAdventures: Adventure[] = [
  {
    id: 1,
    name: 'Kuari Pass Trek',
    brs: 3,
    price: 8500,
    duration: 5,
    altitude: 3600,
    difficulty: 'Easy',
    region: 'Himachal Pradesh',
    type: 'Trekking',
    image: 'kuari-pass.jpg',
  },
  {
    id: 2,
    name: 'Chadar Trek',
    brs: 7,
    price: 35000,
    duration: 10,
    altitude: 3800,
    difficulty: 'Technical',
    region: 'Ladakh',
    type: 'Trekking',
    image: 'chadar.jpg',
  },
  {
    id: 3,
    name: 'Aryapatha Trek',
    brs: 4,
    price: 12000,
    duration: 6,
    altitude: 3200,
    difficulty: 'Moderate',
    region: 'Uttarakhand',
    type: 'Trekking',
    image: 'aryapatha.jpg',
  },
  {
    id: 4,
    name: 'Mount Kilimanjaro',
    brs: 6,
    price: 45000,
    duration: 7,
    altitude: 5895,
    difficulty: 'Difficult',
    region: 'Africa',
    type: 'Mountaineering',
    image: 'kilimanjaro.jpg',
  },
]

type SortOption = 'default' | 'brs' | 'duration' | 'distance' | 'altitude' | 'price-desc' | 'price-asc'

export default function FindYourNextAdventure() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [filters, setFilters] = useState({
    brs: [] as number[],
    price: [] as string[],
    duration: [] as string[],
    altitude: [] as string[],
    region: [] as string[],
    type: [] as string[],
  })
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  // Filter logic
  const filteredAdventures = useMemo(() => {
    let result = sampleAdventures.filter((adventure) => {
      const matchesSearch = adventure.name.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesBrs =
        filters.brs.length === 0 || filters.brs.some((range) => adventure.brs <= range)

      const matchesPrice =
        filters.price.length === 0 ||
        filters.price.some((range) => {
          const [min, max] = range.split('-').map(Number)
          return adventure.price >= min && adventure.price <= max
        })

      const matchesDuration =
        filters.duration.length === 0 ||
        filters.duration.some((range) => {
          const [min, max] = range.split('-').map(Number)
          return adventure.duration >= min && adventure.duration <= max
        })

      const matchesAltitude =
        filters.altitude.length === 0 ||
        filters.altitude.some((range) => {
          const [min, max] = range.split('-').map(Number)
          return adventure.altitude >= min && adventure.altitude <= max
        })

      const matchesRegion = filters.region.length === 0 || filters.region.includes(adventure.region)

      const matchesType = filters.type.length === 0 || filters.type.includes(adventure.type)

      return (
        matchesSearch &&
        matchesBrs &&
        matchesPrice &&
        matchesDuration &&
        matchesAltitude &&
        matchesRegion &&
        matchesType
      )
    })

    // Sort logic
    switch (sortBy) {
      case 'brs':
        result.sort((a, b) => a.brs - b.brs)
        break
      case 'duration':
        result.sort((a, b) => a.duration - b.duration)
        break
      case 'altitude':
        result.sort((a, b) => a.altitude - b.altitude)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }

    return result
  }, [searchQuery, filters, sortBy])

  const handleFilterChange = (category: string, value: string | number) => {
    setFilters((prev) => {
      const list = prev[category as keyof typeof filters] || []
      if (list.includes(value)) {
        return {
          ...prev,
          [category]: list.filter((item) => item !== value),
        }
      } else {
        return {
          ...prev,
          [category]: [...list, value],
        }
      }
    })
  }

  return (
    <div className="find-adventure-page">
      {/* Banner */}
      <div className="adventure-banner">
        <img
          src="Bikataventures/www.bikatadventures.com/images/frontend/Header-Image-Search-Page.png"
          alt="Adventure Banner"
          className="banner-image"
        />
        <div className="search-sort-wrapper">
          <div className="search-div">
            <form className="search-form">
              <i className="fas fa-search"></i>
              <input
                type="search"
                className="search-input"
                placeholder="Search By Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <div className="sort-wrapper">
            <label className="sort-label">Sort By:</label>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="default">Default</option>
              <option value="brs">BRS</option>
              <option value="duration">Duration</option>
              <option value="altitude">Altitude</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="adventure-container">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 filter-sidebar">
            <h4 className="filter-heading">FILTER</h4>
            <hr />

            {/* Mobile Filter Button */}
            <button
              className="mobile-filter-btn"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              <i className="fas fa-filter"></i> Filters
            </button>

            {/* Filter Sections */}
            <div className={`filter-sections ${showMobileFilter ? 'show' : ''}`}>
              {/* BRS Filter */}
              <div className="filter-group">
                <h5 className="filter-group-title">BRS</h5>
                {[
                  { value: 3, label: 'BRS 1-3 (Easy)', color: 'green' },
                  { value: 5, label: 'BRS 4-5 (Moderate)', color: 'yellow' },
                  { value: 6, label: 'BRS 6 (Difficult)', color: 'orange' },
                  { value: 8, label: 'BRS 7-8 (Technical)', color: 'red' },
                ].map((option) => (
                  <label key={option.value} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={filters.brs.includes(option.value)}
                      onChange={() => handleFilterChange('brs', option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              <hr />

              {/* Price Filter */}
              <div className="filter-group">
                <h5 className="filter-group-title">Price</h5>
                {[
                  { value: '0-5000', label: 'Below ₹5000' },
                  { value: '5000-10000', label: '₹5000 - ₹10000' },
                  { value: '10000-15000', label: '₹10000 - ₹15000' },
                  { value: '15000-20000', label: '₹15000 - ₹20000' },
                  { value: '20000-30000', label: '₹20000 - ₹30000' },
                  { value: '30000-50000', label: '₹30000 - ₹50000' },
                  { value: '50000-10000000', label: 'Above ₹50000' },
                ].map((option) => (
                  <label key={option.value} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={filters.price.includes(option.value)}
                      onChange={() => handleFilterChange('price', option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              <hr />

              {/* Duration Filter */}
              <div className="filter-group">
                <h5 className="filter-group-title">Duration</h5>
                {[
                  { value: '0-4', label: 'Less than 4 days' },
                  { value: '5-7', label: '5 - 7 days' },
                  { value: '8-10', label: '8 - 10 days' },
                  { value: '10-30', label: 'More than 10 days' },
                ].map((option) => (
                  <label key={option.value} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={filters.duration.includes(option.value)}
                      onChange={() => handleFilterChange('duration', option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              <hr />

              {/* Region Filter */}
              <div className="filter-group">
                <h5 className="filter-group-title">Region</h5>
                {['Himachal Pradesh', 'Uttarakhand', 'Ladakh', 'Africa', 'Nepal'].map((region) => (
                  <label key={region} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={filters.region.includes(region)}
                      onChange={() => handleFilterChange('region', region)}
                    />
                    <span>{region}</span>
                  </label>
                ))}
              </div>

              <hr />

              {/* Activity Type Filter */}
              <div className="filter-group">
                <h5 className="filter-group-title">Activity Type</h5>
                {['Trekking', 'Mountaineering', 'Cycling', 'Kayaking'].map((type) => (
                  <label key={type} className="filter-checkbox-label">
                    <input
                      type="checkbox"
                      className="filter-checkbox"
                      checked={filters.type.includes(type)}
                      onChange={() => handleFilterChange('type', type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="col-md-9 results-section">
            <div className="results-header">
              <p className="results-count">
                Showing <strong>{filteredAdventures.length}</strong> adventures
              </p>
            </div>

            {filteredAdventures.length > 0 ? (
              <div className="adventures-grid">
                {filteredAdventures.map((adventure) => (
                  <div key={adventure.id} className="adventure-card">
                    <div className="adventure-image">
                      <img src={adventure.image} alt={adventure.name} />
                      <span className="adventure-difficulty">{adventure.difficulty}</span>
                    </div>
                    <div className="adventure-details">
                      <h3>{adventure.name}</h3>
                      <div className="adventure-meta">
                        <span>
                          <i className="fas fa-mountain"></i> {adventure.altitude} ft
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> {adventure.duration} days
                        </span>
                        <span>
                          <i className="fas fa-rupee-sign"></i> {adventure.price}
                        </span>
                      </div>
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No adventures match your filters. Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
