import portrait from "./images/portrait.jpg";
import "./About.css";

/**
 *
 */

function About() {
  return (
    <div className="container1">
      <h1>hihi!</h1>
      <div className="bio">Personal statement or stuff about me here</div>
      <img className="portrait" src={portrait} alt="portrait-grace"></img>
    </div>
  );
}

export default About;