import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    Game Page
                </div>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/productPage">Products</Link>
                        </li>
                        <li className="last">
                            <Link to="/"> Blackjack</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;