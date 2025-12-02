import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <section className={style.Hero}>
      <div className="container">
        <div className="row">
          <div className={style.Section_caption}>
            <div className={style.review_caption}></div>

            <h1>Your Learning Journey Starts Here</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
