import "../../pages/Resources.css";
import hiking from "../../images/hiking.png";
import rmmc from "../../images/rmmc.png";
import rmmcLogo from "../../images/RMMCo_Logo.png";

function Hiking() {
  return (
    <>
      <div className="desktopContent">
        <div className="section">
          <div className="title">
            <img src={hiking} className="title-img" alt="hiking" />
          </div>
          <div className="content">
            <div className="hiking">
              <a href="https://www.instagram.com/rockymountainmeritco">
                <img src={rmmc} className="nav-links" alt="nav-logo" />
              </a>
              <div className="iframe">
                <iframe
                  width="600"
                  height="420"
                  src="https://www.youtube.com/embed/vH_2PWIVLMg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hikingMobile">
        <div className="section">
          <div className="title">
            <img src={hiking} className="title-img" alt="hiking" />
          </div>
          <div className="content">
            <ul>
              <a href="https://www.instagram.com/rockymountainmeritco">
                <img src={rmmcLogo} className="nav-links" alt="nav-logo" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiking;
