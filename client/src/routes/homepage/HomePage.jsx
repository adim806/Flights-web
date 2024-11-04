import './homepage.css'
import { Link } from 'react-router-dom';

 const Homepage = () => {

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital"/>

      <div className="left">
        <h1>Welcome to TRAVEL AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>This is the homepage of Meller AI, Enjoy boy..</h3>
        <Link to="/dashboard">Get Start</Link>
      </div>

      <div className="right">
        <div className="imgContainer"> 
          <div className="bgContainer">
            <div className="bg"></div>

          </div>
          <img src="/travel_logo.jpeg" alt="" className="bott" />
        </div>
      </div>
    </div>
  )
}

export default Homepage;