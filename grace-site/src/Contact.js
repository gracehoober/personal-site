import { Link } from "react-router-dom";
import postAlleyPort from "./images/postAlleyPort.jpeg";
import Oslo from "./images/Oslo.jpeg";

/** Renders the Contact componenet
 * no props, no state
 * linkedIn, github
 */
function Contact() {
  return (
    <>
      <Link to="https://www.linkedin.com/in/grace-hoober/">LinkedIn</Link>
      <br></br>
      <Link to="https://github.com/gracehoober">Github</Link>
      <br></br>
      <img className="osloPort" src={Oslo}></img>
    </>
  );
}

export default Contact;