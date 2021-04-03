import React, { Component } from "react"; 

import './Chars.css'



class CharCard extends Component {
    
  render() {
    return (
     <div className="charcard">
         <div className="card-img">
             <img src={this.props.chars.charCardImg} alt="img">
             </img>
             <div className="card-description">
                 <h2>{this.props.chars.charName}</h2>
             </div>
         </div>
         
     </div>
    );
  }
}

export default CharCard;