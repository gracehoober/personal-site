/**
 * Make a database with this info?? then render it in a card of each project??
 *
 */

const projects = [
  {
    name: "Jobly",
    tools: ["React", "Express"],
    description: "", githubLink: "",
    completed: true,
  },
  {
    name: "Pix.ly",
    tools: ["React", "Flask"],
    description: "",
    githubLink: "",
    completed: true,
  },
  {
    name: "Lookbook",
    tools: [],
    description: "",
    githubLink: "",
    completed: false,
  },
   ];

function Projects() {
  return (
    <>
      <div>Current projects</div>
      <br></br>
      <div> In progress projects</div>
    </>
  );
}

export default Projects;
