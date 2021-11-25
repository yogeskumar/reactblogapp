import React from 'react';
import "./CardInArticle.css";
import Pic from "./../../images/picture.png";

function CardInArticle() {
    return (
        <div>
            <div className="card">
                        <div className="card-image-article"></div>
                        <div className="card-text-content">
                            <div className="card-heading">
                                 <h3 style={{"marginBottom":"2px"}}>Joshua Tree</h3>
                                <h3 style={{ "marginTop":"2px" }}>Overnight Adventure</h3>
                            </div>
                            <div className="author-pic-name">
                            <div className="pic"><img src={Pic} alt="" /></div>
                            <div className="name">
                                <div className="author-name">
                                    <p>Yogesh Kumar</p>
                                </div>
                                <div className="date-reading-time"><p>Jan 28, 2019 · 10 min read</p></div>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    )
}

export default CardInArticle;
