import Categories from "../Utils/Categories"

const inputStyling = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  width: '50vw',
  marginRight: '10px',
};

const buttonStyling = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const formStyling={
  textlign:"center",
  display:"block",
  margin:" 1rem 7rem",
}
const headingStyling={
  textAlign:"start",
  margin:"2rem 7rem"
}
const Search = () => {
  return (
    <div>
      <form action="" style={formStyling}>
        <input type="text" placeholder="Search Podcast/ Artist .." name="category" style={inputStyling}/>
        <button type="submit" style={buttonStyling}>Search</button>
      </form>
      <h2 style={headingStyling}>Browse All</h2>
      <Categories/>
    </div>
  )
}

export default Search
