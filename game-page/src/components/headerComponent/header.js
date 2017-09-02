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
                            <Link to="/hangMan">Hangman</Link>
                        </li>
                        <li>
                            <Link to="/connectFour">ConnectFour</Link>
                        </li>
                        <li>
                            <Link to="/"> Blackjack</Link>
                        </li>
                        <li className="last">
                            <Link to="/"> BattleShips</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;