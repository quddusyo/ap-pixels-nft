import './Header.css'
import pixelLogo from '../assets/header/ApPixel-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = ({ search, setSearch, themeSwitch, setThemeSwitch }) => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={pixelLogo} className='pixelLogo' alt='' />
            </div>

            <form className='searchBar' onSubmit={(e) => e.preventDefault()}>
                <label className='searchIconContainer' htmlFor='search'>
                    <img src={searchIcon} alt='' />

                </label>
                <input 
                 id='search'
                 className='searchInput'
                 placeholder='Collection, item or user...'
                 type='text'
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <button
                    className='themeSwitchContainer'
                    onClick={() => setThemeSwitch(!themeSwitch)}
                >
                    <img src={themeSwitchIcon} alt='' />
                </button>
            </div>

            <div className='loginButton'>GET IN</div>
        </div>
    )
}

export default Header
