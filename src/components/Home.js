import React, { Component } from "react"; 
import './Home.css'

class Home extends Component {
  render() {
    return (
        <>
        <div className="home-container">
            <img src="home_img.jpg" alt="homeimage" />
            <nav className="navbar">
                <div className="navbar-nav">
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>Characters</li>
                        <li>Books</li>
                        <li>Facts</li>
                        <li>HelloWorld</li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
     
    );
  }
}

export default Home;