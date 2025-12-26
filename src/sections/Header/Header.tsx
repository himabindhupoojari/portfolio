import { useEffect, useState } from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from "react-icons/md"

function Header() {
    const arr = [
        {
            id: 0,
            link: "/",
            label: 'Home',
        },
        {
            id: 1,
            link: "about",
            label: 'About',
        },
        // {
        //     id: 2,
        //     link: "experience",
        //     label: 'Experience',
        // },
        {
            id: 3,
            link: "portfolio",
            label: 'Portfolio',
        },
        {
            id: 4,
            link: "skills",
            label: 'Skills',
        }
    ]

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
        <div className='header'>
            <div className='container header__container'>
                <div className='header__menu'>
                    {arr.map((item) => {
                        return (
                            <NavLink to={item.link} key={item.id} className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>{item.label}</NavLink>
                        )
                    })}
                </div>
                <button className='header__theme-btn' onClick={handleTheme}>
                    {theme === "light" ? (                    
                        <>
                         <MdDarkMode style={{ color: 'black' }} />                           
                        </>
                    ) : (
                        <>
                         <MdLightMode  />                            
                        </>
                    )}
                </button>

            </div>
        </div>
    )
}

export default Header