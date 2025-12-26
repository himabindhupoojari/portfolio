// import { useNavigate } from "react-router-dom";
import "./Home.scss";

function Home() {

  // const navigate = useNavigate();

  return (
    <section className="home">      
        {/* <div className="home__content">
        <h3>Hi, I’m HimaBindu</h3>
        <h4>
          A Front-End Developer blending design with code to build modern,
          user-friendly web applications. I turn ideas into responsive,
          accessible, and scalable interfaces using React and JavaScript.
        </h4>
        <h5>
          <q>Design meets code in every line I write.</q>
        </h5>
        <button onClick={() => navigate("/about")}>
          Know the Person Behind the UI
        </button>
      </div> */}

        <h2>
          {/* Hi, I’m <span>Poojari Hima Bindu</span> */}
          Hi! I'm a&nbsp;<span className="typewriter"></span>

        </h2>
        <h1 className="home__title">Frontend Developer | React & Next.js Developer</h1>

        <p>Building modern, responsive, and user-focused web applications with React.
        </p>

        {/* <p>
          A skilled Frontend Developer with 3+ years of experience in building
          scalable, high-performance web applications using React, Next.js, and
          TypeScript. I focus on clean UI, reusable components, and seamless user
          experiences.
        </p> */}

        <div className="home__actions">
          <a href="/portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>      
    </section>
  );
}

export default Home;
