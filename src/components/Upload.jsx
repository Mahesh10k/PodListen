import { useState } from "react"

const Upload = () => {
  const [filename, setFilename] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const divStyling = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }

  const formStyling = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }

  const loaderStyling = {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    alignSelf: 'center',
    display: isLoading ? 'block' : 'none'
  }

  const keyframesStyling = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `

  function handleSubmit(e){
    e.preventDefault()
    if (!filename) return

    setIsLoading(true)
    // Simulate file upload
    setTimeout(() => {
      console.log(filename)
      setIsLoading(false)
    }, 2000)
  }

  function handleChange(e){
    setFilename(e.target.files[0]?.name || "")
  }

  return (
    <div style={divStyling}>
      <style>{keyframesStyling}</style>
      <h3 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '15px'
      }}>Upload Your Podcasts..</h3>
      <form action="" onSubmit={handleSubmit} style={formStyling}>
        <label htmlFor="file" style={{
          fontWeight: 'bold',
          color: '#555'
        }}>Upload Audio File</label>
        <input 
          type="file" 
          name="file" 
          onChange={handleChange}
          style={{
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        {isLoading ? (
          <div style={loaderStyling}></div>
        ) : (
          <button 
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            disabled={!filename}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  )
}

export default Upload