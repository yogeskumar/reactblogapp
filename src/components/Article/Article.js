import React from 'react';
import "./Article.css";
import BigClap from "./../../images/clap@2x.png";
import BigShare from "./../../images/share@2x.png";
import Pic from "./../../images/picture.png";
import CodeImage from "./../../images/code.png";
import ReactImage from "./../../images/react-animation.png";
import { SocialIcon } from 'react-social-icons';
import CardInArticle from '../CardsInArticle/CardInArticle';

function Article() {
    return (
        <div>
            <div className="clap-share-article">
                <div className="clap-share">
                    <div className="in-grid" style={{"margin":"auto", "position":"fixed", "top":"40%"}}>
                            <div className="r1c1"><img src={BigClap} alt="" /></div>
                            <div className="r1c2">9.3k</div>
                            <div className="r2c1"><img src={BigShare} alt="" /></div>
                            <div className="r2c2">Share this article</div>
                    </div>
                </div>
                <div className="article">
                    <h2>5 Ways to animate a React app.</h2>
                    <div className="author">
                        <div className="author-pic-name">
                            <div className="pic"><img src={Pic} alt="" /></div>
                            <div className="name">
                                <div className="author-name">
                                    <p>Yogesh Kumar</p>
                                </div>
                                <div className="date-reading-time"><p>Jan 28, 2019 · 10 min read</p></div>
                            </div>
                        </div>
                        <div className="social-icons">
                            <SocialIcon style={{"width":"20px", "height":"20px", "margin":"auto 3px"}} url="https://twitter.com/jaketrent" />
                            <SocialIcon style={{"width":"20px", "height":"20px", "margin":"auto 3px"}} url="https://facebook.com/jaketrent" />
                            <SocialIcon style={{"width":"20px", "height":"20px", "margin":"auto 3px"}} url="https://instagram.com/jaketrent" />
                            <SocialIcon style={{"width":"20px", "height":"20px", "margin":"auto 3px"}} url="https://youtube.com/jaketrent" />
                        </div>
                    </div>
                    <div className="react-image">
                        <img style={{"width":"100%", "marginTop":"10px", "borderRadius":"10px"}} src={ReactImage} alt="" />
                    </div>
                    <div className="article-text">
                        <p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</p>
                        <p>Let’s talk about them </p>
                    </div>
                    <div className="code-image">
                        <img style={{"margin":"auto", "width":"100%", "maxWidth":"600px"}} src={CodeImage} alt="" />
                    </div>
                    <div className="tags">
                        <div className="tag">React</div>
                        <div className="tag">Javascript</div>
                        <div className="tag">Animation</div>
                    </div>
                    <div className="in-grid" style={{"margin":"20px 0 0 0", "maxWidth":"130px"}}>
                            <div className="r1c1"><img src={BigClap} alt="" /></div>
                            <div className="r1c2">9.3k</div>
                    </div>
                    <div className="writer">
                        <div className="lower-author-pic-name">
                            <div className="pic"><img style={{"margin":"auto 0"}} src={Pic} alt="" /></div>
                            <div className="name">
                                <div className="author-name">
                                    <h4 style={{"color":"rgb(145, 142, 142)"}}>WRITTEN BY</h4>
                                    <p>Yogesh Kumar</p>
                                </div>
                                <div style={{"color":"rgb(145, 142, 142)"}} className="date-reading-time"><p>Jan 28, 2019 · 10 min read</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more">
                <div className="inner">
                    <div>More from Yogesh</div>
                    <div className="cards">
                        <div className="cardz"><CardInArticle/></div>
                        <div className="cardz"><CardInArticle/></div>
                        <div className="cardz"><CardInArticle/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;
