import React from 'react'
import ReusableComp from './ReusableComp'
import "./Hollywood.css"
import Footer from '../Components/Footer'

const Hollywood = () => {
  return (
    <div>
      <h1>Hollywood<hr className='mainhr'/></h1>
      <div className="hwood">
      <h3 id='how'>Top Posts<hr className='subhr'/></h3>
        <div className='hleftdata'>
          <ReusableComp className="img article title date" img="https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/avatar:-the-way-of-water-plot-is-here-6541.jpg"  article="The total budget to make Avatar 2 was 2000 crores and it is expected that the director will exceed its budget expenditure. $ 1.516 Billion after Day 22 or 12494 Crores in Indian currency. It is currently the highest of 2022 ahead of Top Gun Maverick and the 9th highest of all time." title="Avatar" date="Released in 2022"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='hposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://www.scrolldroll.com/wp-content/uploads/2022/02/the-adam-project-hollywood-movies-releasing-in-march-2022.jpg"  article="The Adam Project works namely because Ryan Reynolds is always charming, even if he's playing variants of himself across movies like this, Red Notice, Free Guy and even Deadpool. He has a very good dynamic with Scobell as his younger self, and also Ruffalo when he finally appears as the pair's father." title="The Adam Project" date="Released in 2022" /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='hposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://assets.vogue.in/photos/5de8c84a6ffadb00085fb0d2/2:3/w_2560%2Cc_limit/Gal-Gagot-as-Wonder-Woman.jpg" article="Hulk (also known as The Hulk) is a 2003 American superhero film based on the Marvel Comics character called Hulk, created by Stan Lee and Jack Kirby." title="The Incredible India HULK" date="Released in 2022"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='hposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg"  article="Diana is the god of the hunt, the moon, and nature from Roman mythology; the counterpart to Artemis, Goddess of the Hunt from Greek mythology. Diana is mentioned in Wonder Woman's very first appearance in All Star Comics " title="Wonder Woman" date="Released in 2022"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='hposthr'/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        <div className='hrightdata'>
          <ReusableComp className="img article title date" img="https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/avatar:-the-way-of-water-plot-is-here-6541.jpg" title="Avatar" date="Released in 2022"/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://www.scrolldroll.com/wp-content/uploads/2022/02/the-adam-project-hollywood-movies-releasing-in-march-2022.jpg"  title="The Adam Project" date="Released in 2022" /><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg"  title="The Incredible India HULK" date="Released in 2022"/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://assets.vogue.in/photos/5de8c84a6ffadb00085fb0d2/2:3/w_2560%2Cc_limit/Gal-Gagot-as-Wonder-Woman.jpg" title="Wonder Woman" date="Released in 2022"/><br/><br/><br/><br/><br/><br/><br/>
          <div className='had'>Advertisement</div>
          </div>
        </div><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/> <br/><br/><br/>
        <div className='foot'>
          <Footer/>
        </div>
    </div>
  )
}

export default Hollywood