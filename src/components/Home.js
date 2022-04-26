import React from 'react'
import Contact from './Contact'
import Header from './Header'
import Language from './Language'

import Skill from './Skill'
import '../assets/sass/home.scss'
import Experience from './Experience'
import Education from './Education'



function Home() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3 exam">
                <Header></Header>
                <Contact></Contact>
                </div>
                <div className="col-9 exams">
                 
                
                <Skill></Skill>
                <Language></Language>
                <Education></Education>
                <Experience></Experience>
                </div>
                
              
            </div>
        </div>
    </div>
  )
}

export default Home