import { useEffect, useState } from "react";
import Line from "./components/Line";
import QandA from "./components/QandA";

export default function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
  setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const imgUrl = windowWidth < 375 ? "../src/assets/images/background-pattern-mobile.svg" : "../src/assets/images/background-pattern-desktop.svg"

  return(
<div className="h-full relative flex flex-col">
  <img src={imgUrl} alt="header image" className="h-1/4 lg:h-1/3 object-cover"/>
  <main className="h-3/5 bg-white absolute w-4/5 lg:h-3/5 lg:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 lg:p-12 rounded-2xl overflow-y-scroll">
  <div className="flex items-center">
    <img src="../src/assets/images/icon-star.svg" alt="stars" className="w-6"/>
    <span className="font-bold text-2xl lg:text-4xl pl-4">FAQs</span>
    </div>
  <QandA question="What is Frontend Mentor, and how will it help me?" answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building."/>
  <Line/>
  <QandA question="Is Frontend Mentor free?" answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels."/>
  <Line/>
  <QandA question="Can I use Frontend Mentor projects in my portfolio?" answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!"/>
  <Line/>
  <QandA question="How can I get help if I'm stuck on a Frontend Mentor challenge?" answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members."/>
</main>
  
  <footer className="h-3/4 w-full bg-light-pink"/>
</div>
  )
}