import React from 'react';
import "./CardsInHome.css";
import MainImage from "./../../images/mainImage.jpg";

function CardsInHome() {
    return (
        <div>
            <div className="card">
                        <div className="card-image">
                        <img src={MainImage} alt="" /></div>
                        <div className="card-text-content">
                            <div className="card-heading">
                                 <h3 style={{"marginBottom":"2px"}}>Joshua Tree</h3>
                                <h3 style={{ "marginTop":"2px" }}>Overnight Adventure</h3>
                            </div>
                            <div className="card-description">
                                <p>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination, it has a plethora of temples and places.</p>
                            </div>
                            <div className="card-category-date">
                                <span>Travel</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>/</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>August 21 2017</span>
                                </div>
                        </div>
                    </div>
        </div>
    )
}

export default CardsInHome;
