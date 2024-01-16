import portrait from "./images/portrait.jpg";


/** Renders the home page
 * no props, no state
 */

function About() {
  return (
    <div className="container1">
      <h1>Some sort of header here</h1>
      <div className="bio">I am a software engineer with a background in emergency nursing. </div>
      <img className="portrait" src={portrait} alt="portrait-grace"></img>
    </div>
  );
}

export default About;