import { Link } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    return (
        <div className="header w3-bar w3-gray w3-border-bottom w3-xlarge">
            <Link className="w3-bar-item w3-button w3-text-white w3-hover-black" to="/"><div className="profile icon w3-margin-right"></div>Dashboard</Link>
            <Link className="w3-bar-item w3-button w3-text-white w3-hover-black" to="wallets"><div className="suitcase-1 icon w3-margin-right"></div>Wallet</Link>
            <Link className="w3-bar-item w3-button w3-text-white w3-hover-black" to="transactions"><div className="card icon w3-margin-right"></div>Transaction</Link>
        </div>
    )
}

export default Header;