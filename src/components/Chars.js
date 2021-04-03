import React, { Component } from "react"; 
import {BrowserRouter as Router,Link} from 'react-router-dom'



class Chars extends Component {
    constructor(){
        super();
        const char1={
            "charId":"HW101",
            "charName":"Hermione Granger",
            "charCardImg":"cardCharGranger.png"
        };
        const char2={
            "charId":"HW102",
            "charName":"Harry Potter",
            "charCardImg":"cardCharGranger.png"
        };
        const char3={
            "charId":"HW102",
            "charName":"Harry Potter",
            "charCardImg":"cardCharGranger.png"
        };
        const char4={
            "charId":"HW102",
            "charName":"Harry Potter",
            "charCardImg":"cardCharGranger.png"
        };
        const char5={
            "charId":"HW102",
            "charName":"Harry Potter",
            "charCardImg":"cardCharGranger.png"
        };
        const char6={
            "charId":"HW102",
            "charName":"Harry Potter",
            "charCardImg":"cardCharGranger.png"
        };

        this.charArray=[char1,char2,char3,char4,char5,char6]
    }
         


  render() {
    return (
     <>
     <main className="main">
         <div className="header">
             <div className="title">
                <h1> Characters</h1>
             </div>
         </div>
         <div className="card-container">
             <Router>
                
                     {this.charArray.map(chars=>{
                         return(<Link className="cardlink" to={"#"}>
                             <div className="charcard">
                                <div className="card-img">
                                    <img src={chars.charCardImg} alt="img">
                                    </img>
                                <div className="card-description">
                                    <h2>{chars.charName}</h2>
                                    <p>"I don't go looking for trouble. Trouble usually finds me."</p>
                                </div>
                            </div>
                         
                     </div></Link>)})}
               
             </Router>
             
             
         </div>
     </main>

       
     </>
    );
  }
}

export default Chars;