import './style.css';

const Header = ({ logo }) => {
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>CONTACT US</li>
                    <li>ABOUT US</li>
                    <li>LOGIN</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;