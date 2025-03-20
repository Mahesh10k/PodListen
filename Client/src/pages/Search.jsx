import { useEffect, useState, useRef, useCallback } from "react";
import Categories from "../Utils/Categories";
import MyLoader from "../Utils/SkeletonLoader";
import { useNavigate } from "react-router";
import "./index.css";

const inputStyling = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "30vw",
  marginRight: "10px",
};

const buttonStyling = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#AA60C8",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const formStyling = {
  textAlign: "center",
  display: "block",
  margin: "1rem 7rem",
};

const headingStyling = {
  textAlign: "start",
  margin: "2rem 7rem",
};

const Search = () => {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const debounceTimeout = useRef(null);

  const navigate = useNavigate();

  const openPodcast = useCallback((id) => {
    navigate(`../podcast/${id}`);
  }, [navigate]);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle form submission logic here.
  };

  useEffect(() => {
    // Fetch all podcasts on component mount
    fetch("https://podlisten.onrender.com/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setAllPodcasts(data);
        setFilteredPodcasts(data); // Initially show all podcasts
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch podcasts.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      if (inputData.trim()) {
        // Filter podcasts based on the input
        const filtered = allPodcasts.filter((podcast) =>
          podcast.title.toLowerCase().includes(inputData.toLowerCase())
        );
        setFilteredPodcasts(filtered);
      } else {
        setFilteredPodcasts([]); // Empty filtered list
      }
    }, 500); // Debouncing the input

    // Cleanup timeout on component unmount
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [inputData, allPodcasts]);

  return (
    <div>
      <form style={formStyling} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Podcast by Title .."
          style={inputStyling}
          onChange={handleChange}
          value={inputData}
        />
        <button type="submit" style={buttonStyling}>
          Search
        </button>
      </form>

      <h2 style={headingStyling}>Browse All</h2>

      {loading && <MyLoader />}
      {error && <p>{error}</p>}

      {!loading && filteredPodcasts.length === 0 && inputData.trim() !== "" && (
        <p>No results found</p> // Show this message when no results are found and input is not empty
      )}

      {!loading && filteredPodcasts.length > 0 && (
        <div className="podcast-container">
          {filteredPodcasts.map((value) => (
            <div
              key={value._id}
              className="podcast-card"
              onClick={() => openPodcast(value._id)}
            >
              <div
                className="audio-details"
                style={{ backgroundImage: `url(${value.thumbnailUrl})` }}
              ></div>
              <div className="podcast-details">
                <h5>{value.title}</h5>
                <p>{value.createdAt.split("T")[0]}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Categories loggedin={true} />
    </div>
  );
};

export default Search;
