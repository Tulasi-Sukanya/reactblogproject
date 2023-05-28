import React from 'react'
import "./Technology.css"
// import "./Bollywood.css"
import ReusableComp from './ReusableComp' 
import Footer from '../Components/Footer'

const Technology = () => {
  return (
    <div>
      <h1>Technology<hr className='mainhr'/></h1>
      <div className="twood">
      <h3 id='tec'>Top Posts<hr className='subhr'/></h3>
        <div className='tleftdata'>
          <ReusableComp className="img article title date" img="https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg" title="IOT" article="The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction."  date="Date:Today" /><br/><br/><br/><br/><br/><br/><br/>
          <hr className='tposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"  title="Data Science" article="In simple terms, a data scientist's job is to analyze data for actionable insights. Specific tasks include: Identifying the data-analytics problems that offer the greatest opportunities to the organization. Determining the correct data sets and variables." date="Date:Today"/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='tposthr'/>
          <br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png" title="Full Stack Web Devolopment" article="A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)" date="Date:Today" /><br/><br/><br/><br/><br/> <br/><br/><br/>
          <hr className='tposthr'/>
          <br/><br/><br/><br/><br/><br/> <br/>
          <ReusableComp className="story img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfQ6gQpIec9kyoES4VPfOVAoYAkK6mAFPJQ&usqp=CAU" title="skills demand in Technology" article=" IT skills (also known as information technology skills) are technical skills necessary to work within technical support, maintenance, and development. IT skills are a rather wide skill set that range from hardware installment and software development to troubleshooting and data analysis." date="Date:Today"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='tposthr'/>
        </div>
        <div className='trightdata'>
          <ReusableComp className="img article title date" img="https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg" title="IOT" article="Iot Explained.What it is, How it works, Why it matters"  date="Date:Today"/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"  title="Data Science" article="Data Science vs Big Data vs Data Analytics" date="Date:Today"/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png" title="Full Stack Web Devolopment" article="The Rise of Full Stack Freelancing" date="Date:Today" /><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfQ6gQpIec9kyoES4VPfOVAoYAkK6mAFPJQ&usqp=CAU" article="AI,MachineLearning" date="Date:Today" /><br/><br/><br/>
         <div className='tad'>Advertisement</div>
          </div>
        </div><br /><br/><br/><br/> <br/><br/><br/><br/> <br/>
      <div className='foot'>
      <Footer/>
      </div>
    </div>
  )
}

export default Technology