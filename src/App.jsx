import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import { useEffect, useState } from "react"

const App =()=> {
  const [active,setActive] = useState("")
  const activeHandler =(activeId)=>{
    setActive(activeId);
  }
  useEffect(()=>{
    const coords = {x:0,y:0};
    const circles = document.querySelectorAll('.trail-scroll')
    circles.forEach(circle=>{
      circle.x = 0;
      circle.y = 0;
      

    });

    const animateCircles = () =>{
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle,index)=>{
        circle.style.left = x - 8 + "px";
        circle.style.top = y - 8 + "px";
        // circle.style.scale = (circles.length - index*0.4)/circles.length;
        circle.style.opacity = (circles.length - index*0.9)/circles.length;
        circle.style.zIndex = 10 + circles.length - index;
        circle.x = x;
        circle.y = y;
        

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x)*0.7;
        y += (nextCircle.y - y)*0.7;
        

      });
    }

    window.addEventListener('mousemove',(e)=>{
      coords.x = e.clientX;
      coords.y = e.clientY;
      // console.log(coords)
      animateCircles();
     
    })
    setInterval(animateCircles,1000/60);



  },[])
  return (
    <>
    <div className="trail-scroll leader"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    <div className="trail-scroll followers"/>
    
    
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
    </>
  )
}

export default App
