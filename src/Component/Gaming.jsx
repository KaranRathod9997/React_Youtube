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
import gamingfive from "/src/assets/gamingfive.jpeg";
import gamingsix from "/src/assets/gamingsix.jpeg";
import gamingseven from "/src/assets/gamingseven.jpeg";
import gamingeight from "/src/assets/gamingeight.jpeg";
import gamingnine from "/src/assets/gamingnine.jpeg";
import gamingten from "/src/assets/gamingten.jpeg";
import gamingelevan from "/src/assets/gamingelevan.jpeg";
import gamingtwelve from "/src/assets/gamingtwelve.jpeg";
import gamingthirteen from "/src/assets/gamingthirteen.jpeg";
import gamingfourteen from "/src/assets/gamingfourteen.jpeg";
import gamingfifteen from "/src/assets/gamingfifteen.jpeg";
import gamingsixteen from "/src/assets/gamingsixteen.jpeg";
import gamingseventeen from "/src/assets/gamingseventeen.jpeg";
import gamingeighteen from "/src/assets/gamingeighteen.jpeg";
import gamingnineteen from "/src/assets/gamingnineteen.jpeg";
import gamingtwenty from "/src/assets/gamingtwenty.jpeg";




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
              <img src={gamingfive} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Finally Raistar Vs Classy, Tonde 🤯🔥Raistar Handcam Gameplay🤯❤ [Must Watch] - Garena Free Fire Max
              </h5>
              <p className="card-text">

                Rai World <br />

                321K subscribers • 1.7M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingsix} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                MSI Stealth 16 AI+ : The Ultimate Thin & Light Gaming/Productivity Powerhouse!
              </h5>
              <p className="card-text">

                Venom's Tech <br />
                1.06M subscribers • 109K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingseven} className="oneimg" alt="..." />

            </div>
            <div className="card-body">
              <h5 className="card-title">
                The Most Insane Free Fire Clutch You’ll EVER See! 🔥 (Must Watch)
              </h5>
              <p className="card-text">

                Vincenzo <br />
                6.89M subscribers • 93K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingeight} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Porsche 911 GT3 - Forza Horizon 5 (Steering Wheel + Shifter) Gameplay
              </h5>
              <p className="card-text">

                K3BAB <br />
                745K subscribers • 2.3M views
              </p>
            </div>
          </div>
        </div>



        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={gamingnine} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Clash of Clans 360: Experience a Virtual Reality Raid
              </h5>
              <p className="card-text">
                Clash of Clans <br />
                21.1M subscribers
                • 103M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingten} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                🔴PUBG PC : ERANGLE SNIPER GAMEPLAY (No Commentary)
              </h5>
              <p className="card-text">
                PUBG BOX <br />
                42.3K subscribers • 208K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingelevan} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Bought 8 Gaming Keyboard Mouse Combo Under Rs.1500/- ONLY!
              </h5>
              <p className="card-text">
                Venom's Tech <br />
                1.06M subscribers • 1.4M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingtwelve} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Azov 4220 Antartic - Towing a Boat on a Muddy Road | SnowRunner | Logitech G29 Gameplay | #595

              </h5>
              <p className="card-text">
                TrueXPG <br />
                18.8K subscribers • 208K views
              </p>
            </div>
          </div>
        </div>








        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={gamingthirteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Highlight 1VS4 RUSHER ONIC JEK . STYLE BALING BALING BAMBU
              </h5>
              <p className="card-text">

                ONIC JEK <br />
                47.5K subscribers • 117K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingfourteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Driving one of the fastest trains in Train sim world 3
              </h5>
              <p className="card-text">

                Pyrotical <br />
                8.17K subscribers • 4.5M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingfifteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                [B2K Fan] NEW WORLD RECORD 38 KILLS 1 VS 4 HEROIC LOBBY | ENJOY
              </h5>
              <p className="card-text">
                B2K Fan <br />
                7.14K subscribers
                • 198K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingsixteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                (PS5) VIETNAM WAR | Realistic Immersive ULTRA Graphics Gameplay [4K 60FPS HDR] Call of Duty
              </h5>
              <p className="card-text">

                Champs Network <br />
                501K subscribers • 98K views
              </p>
            </div>
          </div>
        </div>







        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={gamingseventeen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                PUBG | 4K Max Settings | RTX 4090
              </h5>
              <p className="card-text">

                RTXLobby <br />
                8.76K subscribers  • 1.6M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingeighteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                PAHADI GAMER IS LIVE | PLAYING SCRIMS ON LIVE
              </h5>
              <p className="card-text">

                Pahadi Gamer <br />
                1.51M subscribers • 167K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingnineteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                STAN Fest Free Fire LAN + Awards Show | Live with Rocky RDX
              </h5>
              <p className="card-text">

                ROCKY & RDX <br />
                1.34M subscribers • 1.7M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={gamingtwenty} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
              We Got Town Hall 16!! Spending Spree on the Update (Clash of Clans)
              </h5>
              <p className="card-text">
              Judo Sloth Gaming <br />
              3.18M subscribers • 3.7M views
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default Gaming
