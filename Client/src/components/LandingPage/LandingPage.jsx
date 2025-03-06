import HomeBanner from "../../assets/podcast_Banner.jpg";
import guyWithhandonHead from "../../assets/guy-with-chaos-head-01.png";
import Categories from "../../Utils/Categories.jsx";
import greenTickImage from "../../assets/checked.png";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListeningImage from "../../assets/listening.png";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx"

let bannerStyling = {
  width: "100%",
  objectFit: "cover",
  display: "block",
};

const layer2Styling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10%",
  marginTop: "2rem",
};

const layer2ListStyling = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};
const listItemsStyling = {
  textAlign: "start",
  marginTop: "1rem",
  fontSize: "1.2rem",
  fontWeight: "bold",
  backgroundImage:
    "linear-gradient(to left,rgb(147, 123, 212),rgb(139, 75, 129))",
  color: "transparent",
  backgroundClip: "text",
  WebkitBbackgroundClip: "text",
  textShadow: "2px 2px 2px solid gray",
};
const listContainerStyling = {
  width: "30%",
};
let headingStyling = {
  textAlign: "center",
  marginTop: "3rem",
  fontWeight: "bold",
  backgroundImage: "linear-gradient(to left, #553c9a,rgb(99, 29, 87))",
  color: "transparent",
  backgroundClip: "text",
  WebkitBbackgroundClip: "text",
  textShadow: "2px 2px 2px solid green"
};
const aboutStyling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10%",
};

const LandingPage = () => {
  return (
    <>
      
      <Navbar />

      {/* home */}
      <div className="home">
        <img src={HomeBanner} alt="Home Banner" style={bannerStyling} id="home"/>

        {/* About */}
        <div style={aboutStyling} id="about">
          <div style={listContainerStyling}>
            <h2 style={headingStyling}>About Us</h2>
            <p style={listItemsStyling}>
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
        <div style={layer2Styling}>
          <img src={guyWithhandonHead} alt="image" width={"30%"} />
          <div style={listContainerStyling}>
            <h3 style={headingStyling}>Key reasons people listen to podcast</h3>
            <ul style={layer2ListStyling}>
              <li style={listItemsStyling}>
                <img src={greenTickImage} height={20}></img> Learning and
                information gathering
              </li>
              <li style={listItemsStyling}>
                <img src={greenTickImage} height={20}></img> Entertainment and
                enjoyment
              </li>
              <li style={listItemsStyling}>
                <img src={greenTickImage} height={20}></img> Exposure to
                different perspectives
              </li>
              <li style={listItemsStyling}>
                <img src={greenTickImage} height={20}></img> help increase
                levels of empathy, foster relationships
              </li>
            </ul>
          </div>
        </div>

        {/* Categories */}
        <h2 style={headingStyling}  id="categories">Popular Podcast Categories</h2>
        <Categories loggedin={false}/>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
