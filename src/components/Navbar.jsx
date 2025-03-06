import {Link} from "react-router-dom"
import Logo from "../assets/Logo.png"
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
    navBar: {
      backgroundColor: "#213555",
      color: "white",
      padding: "0.5rem 1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: "0",
      zIndex:"10"
    },
    logo: {
      height: "60px",
      marginRight: "1rem",
    },
    navLink: {
      textDecoration: "none",
      color: "white",
      fontWeight: "500",
      transition: "opacity 0.3s ease",
      margin: "0 0.5rem",
    },
    activeNavLink: {
      color: "white",
      fontWeight: "700",
      borderBottom: "2px solid white",
    },
    button: {
      transition: "all 0.3s ease",
      margin: "0 0.5rem",
      textDecoration:"none",
      marginBottom:"none",
      backgroundColor:"#AA60C8",
      borderRadius:"10px"
    },
  };

const Navbar=()=>{

    return(
        <nav className="navbar navbar-expand-lg" style={styles.navBar}>
        <div className="container-fluid">
          <img style={styles.logo} src={Logo} alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "white" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto gap-4 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  href="#home"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#categories"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.opacity = "0.7")}
                  onMouseOut={(e) => (e.target.style.opacity = "1")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <Link to={"/login"}>
            <button
              className="btn btn-outline-light m-2"
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.transform = `translate(0,-5px)`)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#AA60C8",
                e.target.style.transform = "translate(0,0)")
              }
            >
              Login
            </button>
            </Link>
            <Link to={"/signup"}>
            <button
              className="btn btn-outline-light"
              style={{ ...styles.button, marginRight: "1rem" }}
              onMouseOver={(e) =>
                (e.target.style.transform = `translate(0,-5px)`)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#AA60C8",
                e.target.style.transform = "translate(0,0)")
              }
            >
              SignUp
            </button>
            </Link>
          </div>
        </div>
      </nav>
    )
}
export default Navbar