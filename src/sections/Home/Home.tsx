import { useEffect, useState } from "react";
import './Home.scss';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark');

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className='home'>
      {/* <button onClick={handleTheme}>Change Theme</button> */}
      <div className="home__content">
        <div className="home__content-container">
          <p>
            Hi, I’m HimaBindu — a Front-End Developer blending design with code to build modern, user-friendly web applications.
            I turn ideas into responsive, accessible, and scalable interfaces using React and JavaScript.

            "Design meets code in every line I write."
          </p>
          <button onClick={()=> navigate('/about')}> Know the Person Behind the UI</button>
        </div>
      </div>
    </div>
  )
}

export default Home