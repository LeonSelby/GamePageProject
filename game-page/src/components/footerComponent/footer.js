import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Leon</Link>
                        </li>
                        <li>
                            <Link to="/">Profile 2</Link>
                        </li>
                        <li>
                            <Link to="/"> Profile 3</Link>
                        </li>
                        <li className="last">
                            <Link to="/"> Profile 4</Link>
                        </li>
                    </ul>
                </nav>
            </footer >
        );
    }
}
export default Footer;
