import ErrorImage from "../assets/ErrorPage.webp"

const imageStyles={
    objectFit:"cover",
    backgroundRepeat:"no-repeat",
    height:"100vh",
}

const ErrorPage = () => {
  return (
    <div style={{height:"100vh"}}>
      <img style={imageStyles} src={ErrorImage} alt="404 Found" />
    </div>
  )
}

export default ErrorPage
