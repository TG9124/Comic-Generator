import React from 'react';
import logo from './logo2.png';
import image1 from './superman.jpg'; // Replace with your actual image paths
import image2 from './vanilla.jpg';
import image3 from './90s anime.jpg';

const Home = () => {
    return (
        <div className="whole">
            <div className="header">
                <div className="navbar">
                <img src={logo} className="logo" alt="Logo" />
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>EXPLORE ARTSTYLE</a></li>
                    <li><a>GENRE</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>LOG IN</a></li>
                </ul>
                <div className="regbtn">
                        <p>SIGN UP</p>
                   
                </div>
            </div>
            <div className="Text">
                <h1>
                    Bring your stories to life with AI-generated comic strips!
                </h1>
                    <div className="button" >+ Create a Comic Strip</div>
               
            </div>
            </div>
            <div className="explore">
                <h1>EXPLORE ARTSTYLE</h1>
            <div className="image-row">
                    <img src={image1} alt="ArtStyle 1" />
                    <img src={image2} alt="ArtStyle 2" />
                    <img src={image3} alt="ArtStyle 3" />
                </div>
            </div>
        </div>
    );
};
export default Home;