import React, { useState } from "react";
// import "./Allcompo.css"
import one from "/src/assets/one.jpeg";
import two from "/src/assets/two.jpeg";
import three from "/src/assets/three.jpeg";
import four from "/src/assets/four.jpeg";
import five from "/src/assets/five.jpeg";
import six from "/src/assets/six.jpeg";
import seven from "/src/assets/seven.jpeg";
import eight from "/src/assets/eight.jpeg";
import nine from "/src/assets/nine.jpeg";
import ten from "/src/assets/ten.jpeg";
import elevan from "/src/assets/elevan.jpeg";
import twelve from "/src/assets/twelve.jpeg";
import shortone from "/src/assets/shortone.jpeg";
import shorttwo from "/src/assets/shorttwo.jpeg";
import shortthree from "/src/assets/shortthree.jpeg";
import shortfour from "/src/assets/shortfour.jpeg";
import shortfive from "/src/assets/shortfive.jpeg";
import thirteen from "/src/assets/thirteen.jpeg";
import fourtien from "/src/assets/fourtien.jpeg";
import fiften from "/src/assets/fiften.jpeg";
import sixten from "/src/assets/sixten.jpeg";
import seventeen from "/src/assets/seventeen.jpeg";
import eighteen from "/src/assets/eighteen.jpeg";
import nineteen from "/src/assets/nineteen.jpeg";
import tweventy from "/src/assets/tweventy.jpeg";

import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

function All() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [liketwo, setLiketwo] = useState(0);
  const [disliketwo, setDisLiketwo] = useState(0);
  const [likethree, setLikethree] = useState(0);
  const [dislikethree, setDisLikethree] = useState(0);
  const [likefour, setLikefour] = useState(0);
  const [dislikefour, setDisLikefour] = useState(0);
  const [likefive, setLikefive] = useState(0);
  const [dislikefive, setDisLikefive] = useState(0);

  const Likecount = () => {
    setLike(prevLike => prevLike + 1);
  };
  const DisLikecount = () => {
    setDisLike(prevDisLike => prevDisLike + 1);
  };
  const Likecountwo = () => {
    setLiketwo(prevLike => prevLike + 1);
  };
  const DisLikecountwo = () => {
    setDisLiketwo(prevDisLike => prevDisLike + 1);
  };
  const Likecountfour = () => {
    setLikefour(prevLike => prevLike + 1);
  };
  const DisLikecountfour = () => {
    setDisLikefour(prevDisLike => prevDisLike + 1);
  };
  const Likecounthree = () => {
    setLikethree(prevLike => prevLike + 1);
  };
  const DisLikecounthree = () => {
    setDisLikethree(prevDisLike => prevDisLike + 1);
  };
  const Likecountfive = () => {
    setLikefive(prevLike => prevLike + 1);
  };
  const DisLikecountfive = () => {
    setDisLikefive(prevDisLike => prevDisLike + 1);
  };
  return (
    <>
      <div className="card-group All_card Frist_group">
        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={one} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                મીઠુંડી Gujarati slowed & reverb | mithudi gujarati slowed &
                reverb
              </h5>
              <p className="card-text">
                Lofi Anshu
                <br />
                8.27K subscribers • 1.1M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={two} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Earn Money in Trading with Option Chain Analysis
              </h5>
              <p className="card-text">

                Pushkar Raj Thakur: Stock Market Educator 📈
                <br />
                13.3M subscribers • 6.4M views


              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={three} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Python Tutorial || String, Function & Recursion Chapters || Python course
              </h5>
              <p className="card-text">


                Mr.HackMan <br />
                88.5K subscribers • 654K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={four} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Desi Hood - Krish Rao | Gully Gang Records | Latest Haryanvi Song 2024
              </h5>
              <p className="card-text">

                Krish Rao <br />
                161K subscribers • 12M views
              </p>
            </div>
          </div>
        </div>

        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={five} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Billionaire जिसने America पर किया Rule | John D Rockefeller
              </h5>
              <p className="card-text">

                Abhishek Kar <br />
                1.8M subscribers • 445k views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={six} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Lalu Yadav & Fodder Scam
              </h5>
              <p className="card-text">

                Nitish Rajput <br />
                6.14M subscribers • 2.3M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={seven} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                श्री हनुमान चालीसा |🙏🌺| GULSHAN KUMAR | HARIHARAN |Full HD
              </h5>
              <p className="card-text">

                T-Series Bhakti Sagar <br />
                72.3M subscribers • 4.1B views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={eight} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                S1000RR “CHILL” RIDE TESTING TOP SPEED
              </h5>
              <p className="card-text">

                s1krocket <br />
                176K subscribers • 2.9M views
              </p>
            </div>
          </div>
        </div>



        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={nine} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                2024 SPECIAL : अब समय है खुद को बदलने का || Shri Hit Premanand Govind Sharan Ji Maharaj |
              </h5>
              <p className="card-text">

                Sadhan Path <br />
                4.27M subscribers • 555K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={ten} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Recursion Tutorial - Basics to Advanced | Part 1
              </h5>
              <p className="card-text">

                Apna College <br />
                6.18M subscribers • 29K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={elevan} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                SOLO VS SQUAD RANK GM - FREEFIRE
              </h5>
              <p className="card-text">
                ONIC JEK <br />
                46K subscribers • 59K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={twelve} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Krishna Lofi Songs 2.0 | Slow & Reverb | The Sound Of Inner Peace | Relaxing Lofi Song
              </h5>
              <p className="card-text">
                Krishna for Life <br />
                77K subscribers • 2.2M views
              </p>
            </div>
          </div>
        </div>




        {/* shorts */}

        <div className="shortsname">
          <h1 className="shortsh1">Shorts</h1>
        </div>

        <div>


          <div className="shorts_flex">
            <div className="mainshorts">
              <div className="Shorts">
                <div>
                  <img src={shortone} className="shortimg" alt="..." />
                  <GrLike className="like" onClick={Likecount} />
                  <GrDislike className="dilike" onClick={DisLikecount} />
                  <MdOutlineComment className="Comment" />
                  <FaShare className="Share" />
                  <CiMenuKebab className="other" />

                  <p className="likes">{like}</p>
                  <p className="dislikes">{dislike}</p>
                  <p className="comments">1M</p>


                </div>

                <div className="card_shorts">
                </div>
              </div>
            </div>
            <div className="mainshorts">
              <div className="Shorts">
                <div>
                  <img src={shorttwo} className="shortimg" alt="..." />
                  <GrLike className="like" onClick={Likecountwo} />
                  <GrDislike className="dilike" onClick={DisLikecountwo} />
                  <MdOutlineComment className="Comment" />
                  <FaShare className="Share" />
                  <CiMenuKebab className="other" />

                  <p className="likes">{liketwo}</p>
                  <p className="dislikes">{disliketwo}</p>
                  <p className="comments">1M</p>

                </div>
                <div className="card_shorts">
                </div>
              </div>
            </div>
            <div className="mainshorts">
              <div className="Shorts">
                <div>
                  <img src={shortthree} className="shortimg" alt="..." />
                  <GrLike className="like" onClick={Likecounthree} />
                  <GrDislike className="dilike" onClick={DisLikecounthree} />
                  <MdOutlineComment className="Comment" />
                  <FaShare className="Share" />
                  <CiMenuKebab className="other" />

                  <p className="likes">{likethree}</p>
                  <p className="dislikes">{dislikethree}</p>
                  <p className="comments">1M</p>
                </div>
                <div className="card_shorts">
                </div>
              </div>
            </div>
            <div className="mainshorts">
              <div className="Shorts">
                <div>
                  <img src={shortfour} className="shortimg" alt="..." />
                  <GrLike className="like" onClick={Likecountfour} />
                  <GrDislike className="dilike" onClick={DisLikecountfour} />
                  <MdOutlineComment className="Comment" />
                  <FaShare className="Share" />
                  <CiMenuKebab className="other" />

                  <p className="likes">{likefour}</p>
                  <p className="dislikes">{dislikefour}</p>
                  <p className="comments">1M</p>
                </div>
                <div className="card_shorts">
                </div>
              </div>
            </div>
            <div className="mainshorts">
              <div className="Shorts">
                <div>
                  <img src={shortfive} className="shortimg" alt="..." />
                  <GrLike className="like" onClick={Likecountfive} />
                  <GrDislike className="dilike" onClick={DisLikecountfive} />
                  <MdOutlineComment className="Comment" />
                  <FaShare className="Share" />
                  <CiMenuKebab className="other" />

                  <p className="likes">{likefive}</p>
                  <p className="dislikes">{dislikefive}</p>
                  <p className="comments">1M</p>
                </div>
                <div className="card_shorts">
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={thirteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Grand Theft Auto VI Trailer 1
              </h5>
              <p className="card-text">

                Rockstar Games <br />
                11M subscribers • 222M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={fourtien} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Witness the POWER of LORD SHIVA and feel his STRONG PRESENCE through this ANCIENT MANTRA
              </h5>
              <p className="card-text">

                Religious India <br />
                519K subscribers • 54M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={fiften} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                First Trade Strategy With Anuj Singhal Live | Business News Updates | CNBC Awaaz | 29th of Nov 2024
              </h5>
              <p className="card-text">

                CNBC Awaaz. <br />
                5.25M subscribers • 1.6K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={sixten} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Gnanvatsal Swami's First Podcast - Success, Anger, Accident, Relationships, Spirituality, ‪@BAPS‬
              </h5>
              <p className="card-text">
                Jay Thadeshwar <br />
                104K subscribers • 248K views
              </p>
            </div>
          </div>
        </div>

        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={seventeen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                हिंदी Oggy and the Cockroaches - Sports Fans (S04E26) - Hindi Cartoons for Kids
              </h5>
              <p className="card-text">

                Oggy Hindi - हिन्दी <br />
                12.4M subscribers • 224M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={eighteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Today dwarkadhish Shayan Stuti (30/11/2023) ( dwarkadhish Shayan Stuti lyrics in Gujarati)
              </h5>
              <p className="card-text">
                fan_club_of dwarkadhish <br />
                6.54K subscribers • 1.5M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={nineteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Extreme Defence Formation vs All Max Troops | Clash of Clans
              </h5>
              <p className="card-text">

                Crazy Clasher <br />
                3.89K subscribers  • 70 K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={tweventy} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Gents के लिए Jetha लाया Special Soda Masala | Taarak Mehta Ka Ooltah Chashmah | Jetha Jasoos
              </h5>
              <p className="card-text">

                Taarak Mehta Ka Ooltah Chashmah <br />
                27M subscribers  • 1.8M views
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default All;
