import React from 'react';
import CardsInHome from '../CardsInHome/CardsInHome';
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/article" style={{ textDecoration: 'none' }}>
            <div class="container">
                <div class="big-image"><div className="text-on-big-img">
                        <h3>Title of vertical gallery</h3>
                        <div><span>Travel</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>/</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>August 21 2017</span></div>
                    </div>
                </div>
                <div class="img1"><div className="text-on-small-img">
                        <h3>The Sound cloud</h3>
                        <h3>You loved is doomed</h3>
                        <div><span>Travel</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>/</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>August 21 2017</span></div>
                    </div></div>
                <div class="img2"><div className="text-on-small-img">
                        <h3>The Sound cloud</h3>
                        <h3>You loved is doomed</h3>
                        <div><span>Travel</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>/</span><span> </span><span  style={{"color":"rgb(185, 183, 183)"}}>August 21 2017</span></div>
                    </div></div>
            </div></Link>

            <div className="latest">
                <h2>The Latest</h2>
                <hr />
                <div className="card-container">
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome/></Link>
                </div>
            </div>

            <div className="bolly">
                <h2>Latest: Bollywood</h2>
                <hr />
                <div className="card-container">
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome/></Link>
                </div></div>

            <div className="top">
                <h2>Latest: Top</h2>
                <hr />
                <div className="card-container">
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                     <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome/></Link>
                </div></div>

            <div className="holly">
                <h2>Latest: Hollywood</h2>
                <hr />
                <div className="card-container">
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome/></Link>
                </div></div>

            <div className="tech">
                <h2>Latest: Technology</h2>
                <hr />
                <div className="card-container">
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome /></Link>
                    <Link to="/article" style={{ textDecoration: 'none' }}><CardsInHome/></Link>
                </div></div>

        </div>
    )
}

export default Home;
