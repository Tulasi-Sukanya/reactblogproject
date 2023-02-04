import React from 'react'
import ReusableComp from './ReusableComp'
import "./Bollywood.css"
// import Footer from '../Components/Footer'

const Bollywood = () => {
  return (
    <div>
       <h1>Movies<hr className='mainhr'/></h1>
      <div className="bwood">
      <h3 id="boo">Top Posts<hr className='subhr'/></h3>
        <div className='leftdata'>
          <ReusableComp className="img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU" article="RRR is about an imaginary friendship between two superheroes,according to Rajamouli. He has said that the bifurcation of Andhra Pradesh, his home state, also had an impact in the conception of the film." title="RRR" date="Date:Released in 2022"/><br/><br/><br/><br/><br/><br/><br/>
          <hr className='posthr'/>
          <br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://pbs.twimg.com/media/E7HzmKqVcAUg8KN.jpg:large"  article="A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process. A manual labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process" title="PUSHPA" date="Released in 2022" /><br/><br/><br/><br/><br/><br/><br/>
          <hr className='posthr'/>
          <br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP6um_LU7TM5GlBJobEvjcuycEy67qFznXZUgGl26nfCIZFGANroz8TbjmjUUC2rXKto&usqp=CAU" article="The story follows what it takes for Gangubai to make that vow a reality, with all the trials and tribulations it entails; from a savage beating by a sadistic client to making a powerful ally in local crime boss Rahim (Ajay Devgn) and, ultimately, being in a position to negotiate with the Prime Minister." title="Gangubhai" date="Released in 2022"/><br/><br/><br/><br/><br/>
          <hr className='posthr'/>
          <br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://screenanarchy.com/assets_c/2022/06/brahmastra-thumb-430xauto-86124.jpg"  article="'Brahmastra: Part One' used to be called 'Love' for the longest time because that was the theme of the film. It is a love story and Shiva got his power from love. But 'Part Two: Dev' will be a darker and juicier story in terms of the dramatic conflict. The follow-ups will be darker for sure.”" title="Brahmastra" date="Released in 2022" />
          <br/><br/><br/><br/><br/><br/>
          <hr className='posthr'/>
        </div>
        <div className='rightdatt'>
          <ReusableComp className="img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU" title="RRR" date="Released in 2022"/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://pbs.twimg.com/media/E7HzmKqVcAUg8KN.jpg:large" title="PUSHPA" date="Released in 2022"/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP6um_LU7TM5GlBJobEvjcuycEy67qFznXZUgGl26nfCIZFGANroz8TbjmjUUC2rXKto&usqp=CAU" title="Gangubhai" date="Released in 2022"/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://screenanarchy.com/assets_c/2022/06/brahmastra-thumb-430xauto-86124.jpg" title="Brahmastra" date="Released in 2022"/><br/><br/><br/><br/>
          <div className='add'>Advertisement</div>
        </div>
      </div>
      {/* <Footer className="foot"/> */}
    </div>
  )
}

export default Bollywood