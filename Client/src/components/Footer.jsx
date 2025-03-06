import {FaFacebook, FaYoutube, FaInstagram, FaTwitter} from  "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {

  return (
    <footer
              className="text-center text-lg-start"
              style={{backgroundColor:" #213555"}}
              id="contact"
            >
              <div className="container d-flex justify-content-center py-5">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-floating mx-2"
                  style={{backgroundColor:" #54456b"}}
                >
                  <FaFacebook/>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-floating mx-2"
                  style={{backgroundColor:" #54456b"}}
                >
                  <FaYoutube/>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-floating mx-2"
                  style={{backgroundColor: "#54456b"}}
                >
                  <FaInstagram/>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-floating mx-2"
                  style={{backgroundColor:" #54456b"}}
                >
                  <FaTwitter/>
                </button>
              </div>
    
              <div
                className="text-center text-white p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
              >
                © 2025 Copyright: PodListen.com
              </div>
            </footer>
  )
}

export default Footer
