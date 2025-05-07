// index.js
import {Link} from 'react-router-dom'
import {ThemeContext} from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      // Dynamic class and assets based on theme
      const themeClass = isDarkTheme ? 'dark' : 'light'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`nav-bar-container-${themeClass}`}>
          <img src={logoUrl} className="website-logo" alt="website logo" />
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className={`link-${themeClass}`}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={`link-${themeClass}`}>
                About
              </Link>
            </li>
          </ul>
           <button
   type="button"
   className="theme-button"
   data-testid="theme" // Add this line
   onClick={toggleTheme}
 >
   <img src={themeIconUrl} className="theme-img" alt="theme" />
 </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
