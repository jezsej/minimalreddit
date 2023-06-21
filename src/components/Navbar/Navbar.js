import logo from './reddit-logo-2436.svg';
import './Navbar.css'


export const Navbar =() =>{

    return(
        <nav>
            <div className='brand-container'>
                <div className='brand-logo'>
                    <img id='reddit-logo' alt="logo-reddit" src={logo}/>
                </div>
                <div className='brand-name'>
                    <h3>Minimal<span id='brand-color'>Reddit</span></h3>
                </div>
            </div>
            <div className='searchbar-container'>
                <input type="text" id='searchbar' placeholder="Search"/>
            </div>
            <div className='link-container'>
                <ul className='links'>
                    <li><a href="#signup">Sign Up</a></li>
                    <li><a className='sign-in-button' href='#signin'>Sign In</a></li>
                </ul>
            </div> 
        </nav>
    )
}
