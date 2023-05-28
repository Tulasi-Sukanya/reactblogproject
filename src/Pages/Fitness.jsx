import React from 'react'
import "./Fitness.css"
import ReusableComp from './ReusableComp'
import Footer from '../Components/Footer'

const Fitness = () => {
  return (
    <div>
      <h1>Fitness<hr className='mainhr'/></h1>
      <div className="fwood">
      <h3 id="fit">Top Posts<hr className='subhr'/></h3>
        <div className='fleftdata'>
          <ReusableComp className="img article title date" img="https://i.pinimg.com/736x/97/cb/de/97cbdeada72e02103f483afc5f1367f8.jpg" title="Meditation" article="Meditation is all about Connecting with your Soul.Meditation simply means focusing your attention on one object. It can be a simple word, phrase, geometrical figure or candle flame, or even the movement of your breath. Your mind constantly processes a variety of sensations, visual impressions and emotions"/><br/><br/><br/><br/><br/><br/>
          <hr className='fposthr'/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://i.pinimg.com/736x/68/3e/6b/683e6bb87ccf3dd50bf04ec00bb13fa6.jpg"  title="Healthy And Fit Life" article="Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits.1.Plant-based future.2.Botanical boom.3.Mood, cognition, and sleep.4.Microbiome beyond digestive health.5.Body-positive weight management.6.Nutrition accountability."/><br/><br/>
          <hr className='fposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="story img article title date" img="https://png.pngtree.com/png-clipart/20200531/ourlarge/pngtree-hand-drawn-indoor-exercise-health-fitness-png-image_2216272.jpg"  title="Exercises" article="Exercises not only changes your body but also changes your mind,attitude,and mood.As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, maintain weight loss or meet specific fitness goals, you may need to exercise more. Reducing sitting time is important, too. The more hours you sit each day, the higher your risk of metabolic problems."/><br/><br/><br/>
          <hr className='fposthr'/><br/><br/><br/><br/><br/><br/><br/>
          <ReusableComp className="img article title date" img="https://thumbs.dreamstime.com/b/yoga-meditation-3929285.jpg"  title="Yoga" article="Yoga takes you to the present moment.The only place were life exists.It was a discipline that originated in ancient India and was aimed at instilling peace of mind and body with concentration, meditation, postures and breathing. Yoga can be said to have over 5000 years of history and is probably one of the oldest ways to keep track of your mind and body."/><br/><br/><br/><br/>
          <hr className='fposthr'/><br/><br/><br/><br/><br/><br/>
        </div>
        <div className='frightdata'>
          <ReusableComp className="img article title date" img="https://i.pinimg.com/736x/97/cb/de/97cbdeada72e02103f483afc5f1367f8.jpg"  title="Meditation" article="Meditation is all about Connecting with your Soul."/><br/><br/>
          <ReusableComp className="img article title date" img="https://i.pinimg.com/736x/68/3e/6b/683e6bb87ccf3dd50bf04ec00bb13fa6.jpg"  title="Healthy And Fit Life" article="Suitable for fitness and healthy lifestyle."/><br/><br/>
          <ReusableComp className="img article title date" img="https://png.pngtree.com/png-clipart/20200531/ourlarge/pngtree-hand-drawn-indoor-exercise-health-fitness-png-image_2216272.jpg" title="Exercises" article="Exercises changes your mind,attitude,and mood."/><br/><br/>
          <ReusableComp className="img article title date" img="https://thumbs.dreamstime.com/b/yoga-meditation-3929285.jpg" title="Yoga" article="The only place were life exists."/><br/><br/><br/><br/>

          <div className='fad'>Advertisement</div>

          </div>
        </div><br/><br/><br/> <br/><br/><br/><br/> <br/>
        <div className='foot'>
          <Footer/>
        </div>
    </div>
  )
}

export default Fitness