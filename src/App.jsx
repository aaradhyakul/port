import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import { useState } from "react"

const App =()=> {
  const [active,setActive] = useState("")
  const activeHandler =(activeId)=>{
    setActive(activeId);
  }
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <Navbar activeHandler={activeHandler} active={active}/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero activeHandler={activeHandler} active={active}/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
