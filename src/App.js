import "./App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Justine Enriquez</h1>
      <h2>Future Software Developer</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>CONTACT</h2>
      <p>
        justin9953enriquez@gmail.com <FaEnvelope />
      </p>
      <p>
        09162380281 <FaPhone />
      </p>
      <p>
        Arayat, Pampanga <FaMapMarkerAlt />
      </p>
      <a href="https://www.github.com/Juzzz10"> GitHub <FaGithub /> </a>
      <br></br>
      <br></br>
      <h2>Education</h2>
      <p>
        Bachelor of Science in Information Technology
      </p>
      <p>University of the Assumption</p>
      <p>2022 - Present 2024</p>
      <br></br>
      <br></br>

      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Java</li>
        <li>MySQL</li>
      </ul>
      </div>
  );
}
function Experience() {
  return (
    <div>
      <h1>Learning Experience</h1>
      <h2> <li>First Year College</li></h2>
      <p><ul>During my First year, They taught us basic commands in Python, basic inputs, operation, and how to properly input syntax. </ul></p>
      <h2> <li>Second Year College</li></h2>
      <p><ul>During my Second year, They taught us basic Programming Languages. like HTML, MySQL, CSS.</ul></p>
      <h2> <li>Third Year College (Present)</li></h2>
      <p><ul>During my Third year, They taught us how to use JavaScript and HTML, Bootstrap, we developed dynamic websites in our third year. We also used contemporary tools like Vercel, Node.js, and React.js to make more interactive and responsive applications.</ul></p>
    </div>
  );
}
