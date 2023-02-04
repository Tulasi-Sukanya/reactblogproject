import React from 'react'
import './Home.css'
import ReusableComp from './ReusableComp'
// import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='main-container'>
      <div className='homecontainer'>
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" id="img1"alt="erroratimg1"/>
      <div className='sub-div'>
        <img src="https://wallpaperaccess.com/full/393735.jpg" alt="erroratimg2"/>
        <img src="https://wallpaperaccess.com/full/393735.jpg" alt="erroratimg3"/>
      </div>
    </div>

    <h2 id="sport">Latest Sport Stories <hr className='underline'/></h2>
    <br/><br/>
    <div className='sport-container'>
      <div className='card'>
        <img src="https://blog.woodenstreet.com/images/data/image_upload/1661592454national-sports-day-banner.jpg"  alt="error"/>
        <article>This blog sheds light on the most played games and their best players of 2022. Let's celebrate Sports Day by learning more about sports from our famous sports persons" </article>
        <p>Date:27-08-2022</p>
      </div>
      <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtVexxqk3YAx5pR4t6Ax4zMrvhzTmJ-RhgjN-NCKoomam5ws4-iLzpisqTgmrnx1vfwc&usqp=CAU"  alt="error"/>
        <article>India on Saturday defeated Sri Lanka in the final of Women Asia Cup to clinch the title a record-extending 7th time.PM Modi congratulated Indian Women cricket Team, following their record-extending seventh Women's Asia Cup title on Saturday.</article>
        <p>Date:01-01-2023</p>
      </div>
      <div className='card'>
        <img src="https://assets.khelnow.com/news/uploads/2023/01/Indian-Sports-Calendar-2023-1200x600.jpg"  alt="error"/>
        <article>The year will also serve as a warmup to the upcoming Paris Olympic Games in 2024 with athletes aiming to seal qualification to the biggest sports extravaganza."</article>
        <p>Date:08-01-2023</p>
      </div>
      {/* <ReusableComp className="img article date"  img='https://blog.woodenstreet.com/images/data/image_upload/1661592454national-sports-day-banner.jpg' article="This blog sheds light on the most played games and their best players of 2022. Let's celebrate Sports Day by learning more about sports from our famous sports persons" date="27-08-2022"/>
      <ReusableComp className="img article date" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtVexxqk3YAx5pR4t6Ax4zMrvhzTmJ-RhgjN-NCKoomam5ws4-iLzpisqTgmrnx1vfwc&usqp=CAU' article="India on Saturday defeated Sri Lanka in the final of Women Asia Cup to clinch the title a record-extending 7th time.PM Modi congratulated Indian Women cricket Team, following their record-extending seventh Women's Asia Cup title on Saturday." date="01-01-2023"/>
      <ReusableComp className="img article date" img='https://assets.khelnow.com/news/uploads/2023/01/Indian-Sports-Calendar-2023-1200x600.jpg' article="The year will also serve as a warmup to the upcoming Paris Olympic Games in 2024 with athletes aiming to seal qualification to the biggest sports extravaganza." date="08-01-2023"/> */}
    </div><br/><br/><br/><br/>

    <h2 id="tech">Latest Technology Stories <hr className='underline2'/></h2>
    <br /><br />
    <div className='tech-container'>
    <div className='tcard'>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg"  alt="error"/>
        <h6>IOT</h6>
        <article>Iot Explained.What it is, How it works, Why it matters</article>
        <p>Date:Today</p>
    </div>
    <div className='tcard'>
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"  alt="error" />
        <h6>Data Science</h6>
        <article>Data Science vs Big Data vs Data Analytics</article>
        <p>Date:Today</p>
    </div> 
    <div className='tcard'>
    <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png" alt="error" />
        <h6>Full Stack Web Devolopment</h6>
        <article>The Rise of Full Stack Freelancing</article>
        <p>Date:Today</p>
    </div>
      {/* <ReusableComp className="story img article title date" img='https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg' title="IOT" article="Iot Explained.What it is, How it works, Why it matters"  date="Today"/>
      <ReusableComp className="story img article title date" img='https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg' title="Data Science" article="Data Science vs Big Data vs Data Analytics" date="Today"/>
      <ReusableComp className="story img article title date" img='https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png' title="Full Stack Web Devolopment" article="The Rise of Full Stack Freelancing" date="Today"/> */}
    </div><br />

    <h2 id="bolly">Latest BollyWood Stories <hr className='underline3'/></h2>
    <br /><br />
    <div className='bollywood-container'>
      <ReusableComp className="story img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU" title="RRR" date="Released in 2022"/>
      <ReusableComp className="story img article title date" img="https://pbs.twimg.com/media/E7HzmKqVcAUg8KN.jpg:large" title="PUSHPA" date="Released in 2022"/>
      <ReusableComp className="story img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP6um_LU7TM5GlBJobEvjcuycEy67qFznXZUgGl26nfCIZFGANroz8TbjmjUUC2rXKto&usqp=CAU" title="Gangubhai" date="Released in 2022" />
      <ReusableComp className="story img article title date" img="https://screenanarchy.com/assets_c/2022/06/brahmastra-thumb-430xauto-86124.jpg" title="Brahmastra" date="Released in 2022"  />
      <div className='ad-container'>Advertisement</div>
    </div>
    <h2 id="holly">Latest HollyWood Stories <hr className='underline4'/></h2>
    <br /><br />
    <div className='hollywood-container'>
      <ReusableComp className="story img article title date" img="https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/avatar:-the-way-of-water-plot-is-here-6541.jpg" title="Avatar" date="Released in 2022"/>
      <ReusableComp className="story img article title date" img="https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg" title="The Incredible India HULK" date="Released in 2022"/>
      <ReusableComp className="story img article title date" img="https://assets.vogue.in/photos/5de8c84a6ffadb00085fb0d2/2:3/w_2560%2Cc_limit/Gal-Gagot-as-Wonder-Woman.jpg" title="Wonder Woman" date="Released in 2022"/>
      <ReusableComp className="story img article title date" img="https://www.scrolldroll.com/wp-content/uploads/2022/02/the-adam-project-hollywood-movies-releasing-in-march-2022.jpg" title="The Adam Project" date="Released in 2022" />
      <div className='add-container'>Advertisement</div>
    </div>
   {/* <h2 id="bolly">Latest BollyWood Stories <hr className='underline'/></h2>
    <br /><br />
    <div className='bollywood-container'>
      <ReusableComp className="story img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwX3QdsZ484HPGjF484HtDEHT6QkJBF4QeGDDroFcRkVDRxh6pqnkEzlXe_aTObsjEmY&usqp=CAU"/>
      <ReusableComp className="story img article title date" img="https://pbs.twimg.com/media/E7HzmKqVcAUg8KN.jpg:large"/>
      <ReusableComp className="story img article title date" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP6um_LU7TM5GlBJobEvjcuycEy67qFznXZUgGl26nfCIZFGANroz8TbjmjUUC2rXKto&usqp=CAU" />
      <ReusableComp className="story img article title date" img="https://screenanarchy.com/assets_c/2022/06/brahmastra-thumb-430xauto-86124.jpg" />
      <div className='moviedetails'>
        <ReusableComp className="story img article title date" title="RRR" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="PUSHPA" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="Gangubhai" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="Brahmastra" date="Released in 2022" />
      </div>
      <div className='ad-container'>Advertisement</div>
    </div>

    <h2 id="holly">Latest HollyWood Stories <hr className='underline'/></h2>
    <br /><br />
    <div className='hollywood-container'>
      <ReusableComp className="story img article title date" img="https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/avatar:-the-way-of-water-plot-is-here-6541.jpg"/>
      <ReusableComp className="story img article title date" img="https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg"/>
      <ReusableComp className="story img article title date" img="https://assets.vogue.in/photos/5de8c84a6ffadb00085fb0d2/2:3/w_2560%2Cc_limit/Gal-Gagot-as-Wonder-Woman.jpg" />
      <ReusableComp className="story img article title date" img="https://www.scrolldroll.com/wp-content/uploads/2022/02/the-adam-project-hollywood-movies-releasing-in-march-2022.jpg"/>
      <div className='hollymoviedetails'>
        <ReusableComp className="story img article title date" title="Avatar" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="The Incredible India HULK" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="Wonder Woman" date="Released in 2022" />
        <ReusableComp className="story img article title date" title="The Adam Project" date="Released in 2022" />
      </div>
      <div className='add-container'>Advertisement</div>
    </div>*/}

    <h2 id="food">Latest Food Stories <hr className='underline5'/></h2>
    <br/><br/>
    <div className='food-container'>
    <div className='foocard'>
      <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="error" />
        <h6>PanCakes</h6>
        <article>Delicious Pancakes are waiting for u..</article>
    </div>
    <div className='foocard'>
      <img src="https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591" alt="error" />
        <h6>Pastha</h6>
        <article>Mouth watering Pasta for u..</article>
    </div>
    <div className='foocard'>
      <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/Mushroom-Curry.jpg" alt="error" />
        <h6>Mushroom Curry</h6>
        <article>Enriched Nutrients Mushroom Curry</article>
    </div>
    <div className='foocard'>
      <img src="https://i.pinimg.com/originals/21/84/b7/2184b754177f36685409721915f4fe77.jpg" alt="error" />
        <h6>Vegetable Meal</h6>
        <article>Andhra Vegetable Meal..</article>
    </div>
      {/* <ReusableComp className="story img article title date" img='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' title="PanCakes" article="Delicious Pancakes are waiting for u.."/>
      <ReusableComp className="story img article title date" img='https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591' title="Pastha" article="Mouth watering Pasta for u.."/>
      <ReusableComp className="story img article title date" img='https://cdn2.stylecraze.com/wp-content/uploads/2014/09/Mushroom-Curry.jpg' title="Mushroom Curry" article="Enriched Nutrients Mushroom Curry"/>
      <ReusableComp className="story img article title date" img='https://i.pinimg.com/originals/21/84/b7/2184b754177f36685409721915f4fe77.jpg' title="Vegetable Meal" article="Andhra Vegetable Meal.."/> */}
    </div><br />
    <h2 id="fitness">Latest Fitness Stories <hr className='underline6'/></h2>
    <br/><br/>
    <div className='fitness-container'>
    <div className='fitcard'>
      <img src="https://i.pinimg.com/736x/97/cb/de/97cbdeada72e02103f483afc5f1367f8.jpg" alt="error" />
        <h6>Meditation</h6>
        <article>Meditation is all about Connecting with your Soul.</article>
    </div>
    <div className='fitcard'>
      <img src="https://i.pinimg.com/736x/68/3e/6b/683e6bb87ccf3dd50bf04ec00bb13fa6.jpg" alt="error" />
        <h6>Healthy And Fit Life</h6>
        <article>Suitable for fitness and healthy lifestyle.</article>
    </div>
    <div className='fitcard'>
      <img src="https://png.pngtree.com/png-clipart/20200531/ourlarge/pngtree-hand-drawn-indoor-exercise-health-fitness-png-image_2216272.jpg" alt="error" />
        <h6>Exercises</h6>
        <article>Exercises not only changes your body but also changes your mind,attitude,and mood.</article>
    </div>
    <div className='fitcard'>
      <img src="https://thumbs.dreamstime.com/b/yoga-meditation-3929285.jpg" alt="error" />
        <h6>Yoga</h6>
        <article>Yoga takes you to the present moment.The only place were life exists.</article>
    </div>
      {/* <ReusableComp className="story img article title date" img='https://i.pinimg.com/736x/97/cb/de/97cbdeada72e02103f483afc5f1367f8.jpg' title="Meditation" article="Meditation is all about Connecting with your Soul."/>
      <ReusableComp className="story img article title date" img='https://i.pinimg.com/736x/68/3e/6b/683e6bb87ccf3dd50bf04ec00bb13fa6.jpg' title="Healthy And Fit Life" article="Suitable for fitness and healthy lifestyle."/>
      <ReusableComp className="story img article title date" img='https://png.pngtree.com/png-clipart/20200531/ourlarge/pngtree-hand-drawn-indoor-exercise-health-fitness-png-image_2216272.jpg' title="Exercises" article="Exercises not only changes your body but also changes your mind,attitude,and mood."/>
      <ReusableComp className="story img article title date" img='https://thumbs.dreamstime.com/b/yoga-meditation-3929285.jpg' title="Full Stack Web Devolopment" article="Yoga takes you to the present moment.The only place were life exists."/> */}
    </div><br />
    {/* <Footer/> */}
    </div>
  )
}

export default Home