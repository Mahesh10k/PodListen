import HomeBanner from "../../assets/podcast_Banner.jpg";
import guyWithhandonHead from "../../assets/guy-with-chaos-head-01.png";
import Categories from "../../Utils/Categories.jsx";
import greenTickImage from "../../assets/checked.png";
import "./index.css.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListeningImage from "../../assets/listening.png";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx"


const LandingPage = () => {
  return (
    <>
      
      <Navbar />

      {/* home */}
      <div className="home">
        <img src={HomeBanner} alt="Home Banner"  id="home"/>

        {/* About */}
        <div id="about">
          <div>
            <h2 className="heading">About Us</h2>
            <p className="description">
              Welcome to <strong>PodListen</strong>, your ultimate destination for discovering,
              streaming, and enjoying podcasts from around the world. At
              PodListen, we believe in the power of storytelling,
              knowledge-sharing, and the magic of audio content to inspire,
              educate, and entertain.
            </p>
          </div>
          <img src={ListeningImage} alt="image2" width={"30%"} />
        </div>
        {/* Reasons to listen podcast */}
        <div className="podcastReasons">
          <img src={guyWithhandonHead} alt="image" width={"30%"} />
          <div className="listContainer">
            <h3 className="heading">Key reasons people listen to podcast</h3>
            <ul>
              <li className="listItems">
                <img src={greenTickImage} height={20}></img> Learning and
                information gathering
              </li>
              <li className="listItems">
                <img src={greenTickImage} height={20}></img> Entertainment and
                enjoyment
              </li>
              <li className="listItems">
                <img src={greenTickImage} height={20}></img> Exposure to
                different perspectives
              </li>
              <li className="listItems">
                <img src={greenTickImage} height={20}></img> help increase
                levels of empathy, foster relationships
              </li>
            </ul>
          </div>
        </div>

        {/* Categories */}
        <h2 id="categories">Popular Podcast Categories</h2>
        <Categories loggedin={false}/>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
