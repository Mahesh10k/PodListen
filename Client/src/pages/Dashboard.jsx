import { useEffect, useState } from "react";
import "./dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import MyLoader from "../Utils/SkeletonLoader"

// import Categories from "../Utils/Categories";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4040/dashboard/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data)
 
  let navigate = useNavigate();
  const openPodcast = (id) => {
    navigate(`podcast/${id}`);
  };

  return (
    <div className="dashboard">
      <h3>Listen Your Favorite Podcast ..</h3>
      <div className="podcast-container">
        {data === null ? (
          <MyLoader/>
        ) : (
          data.map((value) => (
            <div
              key={value._id}
              className="podcast-card"
              onClick={() => openPodcast(value._id)}
            >
              <div
                className="audio-details"
                style={{ backgroundImage: `url(${value.thumbnailUrl})` }}
              >
                {/* <audio controls>
                  <source type="audio/mp3" src={value.audioUrl} />
                </audio> */}
              </div>
              <div className="podcast-details">
                <h5>{value.title}</h5>
                <p>{value.createdAt.split("T")[0]}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <Categories/> */}
    </div>
  );
};

export default Dashboard;
