import React from "react";
import "./App.css";
import imgSrc1 from "./images/icon-supervisor.svg";
import imgSrc2 from "./images/icon-team-builder.svg";
import imgSrc3 from "./images/icon-karma.svg";
import imgSrc4 from "./images/icon-calculator.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>
          Reliable, efficient delivery
          <span> Powered by Technology </span>
        </h1>
        <p>
          {" "}
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful{" "}
        </p>
      </header>
      <main>
        <section>
          <article>
            <h2>Supervisor</h2>
            Monitors activity to identify project roadblocks
            <img src={imgSrc1} alt="supervisor" width="75" />
          </article>

          <article>
            <h2>Team Builder</h2>
            Scans our talent network to create the optimal team for your project
            <img src={imgSrc2} alt="team-builder" width="75" />
          </article>

          <article>
            <h2> Karma</h2>
            Regularly evaluates our talent to ensure quality
            <img src={imgSrc3} alt="karma" width="75" />
          </article>

          <article>
            <h2>Calculator</h2>
            Uses data from past projects to provide better delivery estimates
            <img src={imgSrc4} alt="calculator" width="75" />
          </article>
        </section>
      </main>

      <footer>
        <p class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Eze</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
