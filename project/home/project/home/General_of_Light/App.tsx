import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact"></div>
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
      <h1>Aaron Joaquin P. Basilio</h1>
      <h2>Senior Programmer</h2>
    </div>
  );
}

function Experience() {
  return (
    <div id="WorkExperience">
      <h2>WORK EXPERIENCE</h2>
      <h3>Senior Programmer</h3>
      <p>Python</p>
      <p>2036 - Present / Tokyo, Japan</p>
      <ul>
        <li>
          Developing game mechanics using "Pygame" library, which leads to
          development of game system, such as AI, scoring system, NPCs and
          player control systems and UI. Moreover, integrating engines for
          smooth animations, and optimizing the game across different devices.
        </li>
        <li>
          Developing a highly maintainable web application with optimized
          database queries and integrating with third-party services.
        </li>
        <li>
          Mentoring young developers in using "Pygame" library and other
          object-oriented programming principles, as well as making their own
          game.
        </li>
        <li>
          Developing machine learning models to predict customer behavior for a
          marketing firm, which provides businesses with usable insights and
          predictions that affect their decision.
        </li>
        <br />
      </ul>
      <h3>Mid-End Programmer</h3>
      <p>C++ and SQL</p>
      <p>2031 - 2035 / Manila, Philippines</p>
      <ul>
        <li>
          Implement core gameplay features such as physics, collision,
          detection, AI behaviors and animations. Additionally, profiling and
          optimizing frame rates, load times, and resource usage in the game.
        </li>
        <li>
          Optimizing code for performance, including memory management, I/O
          operations and CPU Usage. Moreover, improving the system's
          reliability, security and efficiency based on profiling and
          performance testing.
        </li>
        <li>
          Designing normalized database schemas with proper entity
          relationships, writing SQL scripts to create, alter, and drop database
          objects, and implementing referential integrity using primary keys and
          foreign keys.
        </li>
        <li>
          Creating or modifying indexes to improve query performance based on
          data access patterns, managing database partitions or shading
          strategies to handle large volumes of data, and implementing best
          practices for database tuning, such as managing table structures and
          optimizing data storage.
        </li>
        <br />
      </ul>
      <h3>Beginner Programmer</h3>
      <p>Python and C++</p>
      <p>2027 - 2031 / Pampanga, Philippines</p>
      <ul>
        <li>
          Doing Basic Program Coding, such as writing C++ programs that would
          take input from the user and provide output, using control structures
          to implement basic program logic, and handling simple input and output
          operations using "cin" and "cout".
        </li>
        <li>
          Developing simple file handling by writing functions to process data
          from files, handling errors, working file formats and data persistence
          and using file streams such as "ifstream" and "ofstream" to read and
          write text files.
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
