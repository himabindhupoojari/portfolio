import { useEffect, useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
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
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                </div>
                <button className='header__theme-btn' onClick={handleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default Header