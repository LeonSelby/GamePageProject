import React, { Component } from 'react';



class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1> Home Page Content </h1>
                <p> This is my App built in React. It features multiple games on one webpage without reloading the page to swap between them
    as well as profiles using LocalStorage to save game statistics between sessions.</p>            </div>
        );
    }
}
export default HomePage;
