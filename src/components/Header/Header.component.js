import { Link } from 'react-router-dom';

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link className="link" to="/">Dashboard</Link>
            <Link className="link" to="wallets">Wallet</Link>
        </div>
    )
}

export default Header;