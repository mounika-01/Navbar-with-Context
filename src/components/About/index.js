import React from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const themeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const containerClass = isDarkTheme
        ? 'about-container about-container-dark'
        : 'about-container about-container-light'

      const headingClass = isDarkTheme
        ? 'about-heading-dark'
        : 'about-heading-light'

      return (
        <div className={containerClass}>
          <img src={aboutImageUrl} className="about-image" alt="about" />
          <h1 className={headingClass}>About</h1>
          <button
            type="button"
            className="theme-button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img src={themeIconUrl} className="theme-img" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
