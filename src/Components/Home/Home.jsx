import React from "react";
import style from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSearch ,} from "@fortawesome/free-solid-svg-icons";
import { Send } from "react-feather";
import hero from "../../assets/hero-img.png";
import { Link } from "react-router-dom";
 



function Home() {
  return <>
  
    <section className={style.Hero}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.Section_caption}>
              <div className="review_caption">
                <div className="d-flex align-items-center gap-4 fs-5 lh-0 mb-4">
                  <div className="text-dark fw-semibold">4.9</div>
                  <div className="review_star">
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                    <FontAwesomeIcon icon={faStar} color="#FFD700" />
                  </div>
                </div>
                <span className={style.rev_span}>Engaged Student</span>
              </div>

              <h1>Your Learning Journey Starts Here</h1>
            </div>
            <div className={style.search}>
              
              <button className="btn"><FontAwesomeIcon className={style.faSearch} icon={faSearch} color="#FFD770" /> </button>
              <input
                    className="form-control" 
                    type="text"
                    name="search-input"
                    id="search-input"
                    placeholder="Search for courses, skills, and videos" 
                  />
                  
                  <button type="button" className="btn btn-dark">
                    <Send color="white" size={25} />
                  </button>
            </div>
            <div className="d-block mt2">
              <div className="d-flex align-items-center justify-content-start gap-3">
                <div className={style.btn}>
                  <Link className={style.Link } to="/" style={{textDecoration: "none"}} >Enrolled Today Now</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            
              <div className="hero-image">
                <img className={style.hero_img} src={hero} alt="hero-image" />
              </div>
              
          </div>
        </div>
      </div>
    </section>
    <section>
      

    </section>
  </>
}

export default Home;
