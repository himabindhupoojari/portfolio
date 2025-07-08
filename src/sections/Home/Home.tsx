import './Home.scss';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <div className="home__content">
        <h3>
          Hi, I’m HimaBindu
        </h3>
        <h4>
          A Front-End Developer blending design with code to build modern, user-friendly web applications.
          I turn ideas into responsive, accessible, and scalable interfaces using React and JavaScript.
        </h4>
        <h5>
          <q>Design meets code in every line I write.</q>
        </h5>
        <button onClick={() => navigate('/about')}> Know the Person Behind the UI</button>
      </div>                  
    </div>
  )
}

export default Home