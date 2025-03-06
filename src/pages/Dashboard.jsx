import Categories from "../Utils/Categories"

const styling={
  textAlign:"center",
  margin:"0.6rem auto"
}
const Dashboard = () => {
  return (
    <div >
      <h3 style={styling}>Choose Your Category..</h3>
      <Categories/>
    </div>
  )
}

export default Dashboard
