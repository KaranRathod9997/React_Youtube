import React, { useState } from "react";
// import "./Allcompo.css"
import one from "/src/assets/one.jpeg";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import elevan from "/src/assets/elevan.jpeg";
import thirteen from "/src/assets/thirteen.jpeg";
import nineteen from "/src/assets/nineteen.jpeg";
import gamingfour from "/src/assets/gamingfour.jpeg";
import gameone from "/src/assets/gameone.jpeg";
import gametwo from "/src/assets/gametwo.jpeg";
import gamethree from "/src/assets/gamethree.jpeg";
import gamefour from "/src/assets/gamefour.jpeg";
import gamefive from "/src/assets/gamefive.jpeg";




function Gaming() {
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
              <img src={gamingfour} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                TREVOR KILLED DRUG DEALER JOHNNY K (HINDI DUBBED) | GTA 5 GAMEPLAY PART 7
              </h5>
              <p className="card-text">

                Total Gaming <br />
                43.9M subscribers• 988K views
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
                  <img src={gameone} className="shortimg" alt="..." />
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
                  <img src={gametwo} className="shortimg" alt="..." />
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
                  <img src={gamethree} className="shortimg" alt="..." />
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
                  <img src={gamefour} className="shortimg" alt="..." />
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
                  <img src={gamefive} className="shortimg" alt="..." />
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
              <img src={one} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
              Finally Raistar Vs Classy, Tonde 🤯🔥Raistar Handcam Gameplay🤯❤ [Must Watch] - Garena Free Fire Max
              </h5>
              <p className="card-text">
                 
Rai World <br />

321K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
        </div>



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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
        </div>








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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
        </div>

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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
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
                8.27K subscribers • 1M views
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default Gaming
