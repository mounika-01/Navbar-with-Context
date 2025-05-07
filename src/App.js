import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' // Updated from Routes to Switch
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import {ThemeProvider} from './context/ThemeContext' // Corrected import for ThemeProvider

function App() {
  return (
     <ThemeProvider>
   <Router>
     <Navbar /> {/* Navbar is rendered here, only once */}
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route component={NotFound} />
     </Switch>
   </Router>
 </ThemeProvider>
  )
}
export default App
