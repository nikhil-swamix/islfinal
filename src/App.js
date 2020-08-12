import React from 'react'
import './App.css'
import './App.scss'
import Home from './Components/Pages/Home'
import CSE from './Components/Pages/Department/CSE'
import ECE from './Components/Pages/Department/ECE'
import EEE from './Components/Pages/Department/EEE'
import ME from './Components/Pages/Department/ME'
import IT from './Components/Pages/Department/IT'
import MBA from './Components/Pages/Department/MBA'
import CE from './Components/Pages/Department/CE'
import Syllabus from './Components/Pages/Academic/Syllabus'
import Almanac from './Components/Pages/Academic/Almanac'
import Admissions from './Components/Pages/Academic/Admission'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/contact'
import Chairman from './Components/Pages/About/chairman'
import Principal from './Components/Pages/About/principal'
import Research from './Components/Pages/Research/components/publication'
import NavBar from './Components/Common/NavigationBar'
import Footer from './Components/Common/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/department/cse" component={CSE} />
          <Route path="/department/ece" component={ECE} />
          <Route path="/department/eee" component={EEE} />
          <Route path="/department/it" component={IT} />
          <Route path="/department/me" component={ME} />
          <Route path="/department/ce" component={CE} />
          <Route path="/department/mba" component={MBA} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/almanac" component={Almanac} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/chairman" component={Chairman} />
          <Route exact path="/principal" component={Principal} />
          <Route path="/research" component={Research} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
