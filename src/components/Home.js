/* eslint-disable jsx-a11y/img-redundant-alt */
import React  from "react"; 
import './Home.css'
import homeimage from '../images/home_img.jpg'


class Home extends React.Component {
  render() {
    return (
        <>
        <div className="home-container">
            <img src={homeimage} alt="home image" />
            <nav className="navbar">
                
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>Characters</li>
                        <li>Books</li>
                        <li>Facts</li>
                        <li>HelloWorld</li>
                    </ul>
                
            </nav>
        </div>
        </>
     
    );
  }
}

export default Home;