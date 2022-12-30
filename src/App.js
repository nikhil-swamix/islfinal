import React from 'react'
import './App.css'
import './App.scss'
import Home from './Components/Pages/Home'
import CSE from './Components/Pages/Department/CSE'
import DS from './Components/Pages/Department/DS'
import MCSE from './Components/Pages/Department/MCSE'
import ECE from './Components/Pages/Department/ECE'
import EEE from './Components/Pages/Department/EEE'
import ME from './Components/Pages/Department/ME'
import IT from './Components/Pages/Department/IT'
import MBA from './Components/Pages/Department/MBA'
import CE from './Components/Pages/Department/CE'
import Syllabus from './Components/Pages/Academic/Syllabus'
import Almanac from './Components/Pages/Academic/Almanac'
import Admissions from './Components/Pages/Academic/Admission'
import Event from './Components/Pages/Event'
import Contact from './Components/Pages/contact'
import Chairman from './Components/Pages/About/chairman'
import Principal from './Components/Pages/About/principal'
import Research from './Components/Pages/Research/components/publication'
import NavBar from './Components/Common/NavigationBar'
import Footer from './Components/Common/Footer'
import Payment from './Components/Pages/Other/components/payment'
import AllNews from './Components/Pages/Other/components/allnews'
import Exambranch from './Components/Pages/Exambranch'
import Placement from './Components/Pages/Placement'
import Library from './Components/Pages/Other/components/library'
import Approval from './Components/Pages/Other/components/approval'
import Nptel from './Components/Pages/Other/components/nptel'
import Aws from './Components/Pages/Other/components/awseducate'
import Rti from './Components/Pages/Other/components/rti'
import Faculty from './Components/Pages/Other/components/faculty'
import Naac from './Components/Pages/Other/components/naac'
import Committees from './Components/Pages/Other/components/committees'

import NotFound from './Components/Pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/almanac" component={Almanac} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/events" component={Event} />
          <Route path="/contact" component={Contact} />
          <Route path="/chairman" component={Chairman} />
          <Route path="/principal" component={Principal} />
          <Route path="/research" component={Research} />
          <Route path="/department/cse" component={CSE} />
          <Route path="/department/ds" component={DS} />
          <Route path="/department/mcse" component={MCSE} />
          <Route path="/department/ece" component={ECE} />
          <Route path="/department/eee" component={EEE} />
          <Route path="/department/it" component={IT} />
          <Route path="/department/me" component={ME} />
          <Route path="/department/ce" component={CE} />
          <Route path="/department/mba" component={MBA} />
          <Route path="/news" component={AllNews} />
          <Route path="/exambranch" component={Exambranch} />
          <Route path="/placement" component={Placement} />
          <Route path="/library" component={Library} />
          <Route path="/approvals" component={Approval} />

          <Route path="/payment" component={Payment} />
          <Route path="/nptel" component={Nptel} />
          <Route path="/awsEducate" component={Aws} />
          <Route path="/rti" component={Rti} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/naac" component={Naac} />
          <Route path="/committees" component={Committees} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
