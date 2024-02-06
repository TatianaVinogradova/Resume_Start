import React from "react";
import smImg from "./images/foto.png"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        
      <div className="card-body">
      <img src= {smImg} className="game-hero-image" />
        <h3 className="card-title">Hi, my name is Tatiana Vinogradova.</h3>
        <p className="card-text">I live in Barcelona. This is my project to evaluate my knowledge at this stage.</p>
        
            <h4>What I like about development:</h4>
        
        <ol>
                <li>1.5 years ago, my family moved from Moscow, Russia to Barcelona, and when I started learning a new language - Spanish, I realized that since fate had given me such a chance to start my life anew, I want to use it to the fullest and get a new profession. I chose the most interesting thing for myself - web development. I like to set up processes both from the inside - back end and from the outside - front end. </li>
                <p></p>
                <li>Alexey Pajitnov, the creator of Tetris, a Soviet American programmer, had a huge influence on me. He recently had an
                interview, after which I began to study even harder. At the age of 68, he remains very erudite, he studies all his life, and solves many interesting problems. And I love learning and constantly learning new things, and this profession gives me this opportunity.
                </li>
                <p>
                </p><li>I have been working with a mentor for a year, he works at Deutschebank, his experience is more than 12 years. During this time, I have mastered the complete coding of a website from based on Ruby on Rails, - personal account with password, tabs, dashboards, adding photos, information, click-links. There is also a complete creation of a multi-page website based on React, with full content. So now I can be sure it’s not just a hobby, I wanna work in this area. </li>
        </ol>
        <Link className="link-button" to="mailto:askvinogradova@gmail.com">Contact me</Link>
      </div>
    
)
}