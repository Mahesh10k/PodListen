import { useState } from "react";
import SuccessModal from "../Utils/SuccessModal";

const Upload = () => {
  const [filename, setFilename] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  

  const divStyling = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f4f4f4", 
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const formStyling = {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Increased gap for spacing
    fontSize:"1rem"
  };

  const loaderStyling = {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #3498db",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    alignSelf: "center",
    display: isLoading ? "block" : "none",
  };

  const keyframesStyling = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    } 
  `;

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
  
    if (!filename || !category || !title || !thumbnail) {
      setToastMessage({ operation: "warn", msg: "Fill all Data!" });
      return;
    }
  
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append("file", filename);
    formData.append("thumbnail", thumbnail);
    formData.append("category", category);
    formData.append("title", title);
  
    fetch("http://localhost:4040/dashboard/upload", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setToastMessage({ operation: "success", msg: "File uploaded successfully!" });
        console.log(data);
        setFilename("");
        setTitle("");
        setCategory("");
        setThumbnail("");
      })
      .catch((error) => {
        setIsLoading(false);
        setToastMessage({ operation: "error", msg: "Error uploading file." });
        console.log(error);
      });
  }
  

  // Handle file input change
  function handleFileChange(e) {
    setFilename(e.target.files[0]); // Set the file to be uploaded
  }

  return (
    <div style={divStyling}>
      <style>{keyframesStyling}</style>
      <h3 style={{ textAlign: "center", color: "#333", marginBottom: "15px" }}>
        Upload Your Podcasts..
      </h3>
      {toastMessage && <SuccessModal operation={toastMessage.operation} msg={toastMessage.msg} />}
      <form
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
        style={formStyling}
      >
        <label htmlFor="file" style={{ fontWeight: "bold", color: "#555" }}>
          Upload Audio File
        </label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".mp3, .m4a, audio/mp3, audio/mp4"
          onChange={handleFileChange}
          style={{
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
          required
        />

          {/* Thumbnail */}
        <label htmlFor="file" style={{ fontWeight: "bold", color: "#555" }}>
          Upload Thumbnail Image
        </label>
        <input
          type="file"
          name="thumbnail"
          id="thumbnail"
          accept="image/*"
          // value={thumbnail}
          onChange={e=>{setThumbnail(e.target.files[0])}}
          style={{
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
          required
        />

        {/* title input */}
        <label htmlFor="title" style={{ fontWeight: "bold", color: "#555" }}>
          Title
        </label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          style={{
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px"
          }}
          required
        ></input>

        {/* Category input */}
        <label htmlFor="category" style={{ fontWeight: "bold", color: "#555" }}>
          Category
        </label>
        <select
        id="category"
        name="category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
        required
      >
        <option value="">Select a category</option>
        <option value="culture">Culture</option>
        <option value="business">Business</option>
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="comedy">Comedy</option>
        <option value="news">News</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="religion">Religion</option>
        <option value="development">Development</option>
        <option value="sports">Sports</option>
        <option value="crime">Crime</option>
      </select>


        

        { isLoading ? (
          <div style={loaderStyling}></div>
        ) : (
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            disabled={!filename || !category || !title || !thumbnail}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Upload;


