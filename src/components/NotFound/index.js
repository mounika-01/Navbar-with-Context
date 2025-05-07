import Navbar from '../Navbar'

import {ThemeContext} from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar /> {/* Add this line */}
          <div
            className={`not-found-home-container ${
              isDarkTheme ? 'dark' : 'light'
            }`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1
              className={`not-found-heading-${isDarkTheme ? 'dark' : 'light'}`}
            >
              Lost Your Way?
            </h1>
            <p className={`not-found-para-${isDarkTheme ? 'dark' : 'light'}`}>
   We cannot seem to find the page // Add this exact text here
 </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
