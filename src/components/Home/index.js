import Navbar from '../Navbar'

import {ThemeContext} from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={`main-home-container ${isDarkTheme ? 'dark' : 'light'}`}
        >
           <img
   src={
     isDarkTheme
       ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
       : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
   }
   className="home-image"
   alt="home" // Ensure this matches exactly
 />
          <h1 className={`home-heading-${isDarkTheme ? 'dark' : 'light'}`}>
            Home
          </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
