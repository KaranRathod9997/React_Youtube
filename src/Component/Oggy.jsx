

import React, { useState } from "react";
import one from "/src/assets/one.jpeg";
import oggyone from "/src/assets/oggyone.jpeg";
import seventeen from "/src/assets/seventeen.jpeg";
import oggytwo from "/src/assets/oggytwo.jpeg";
import oggythree from "/src/assets/oggythree.jpeg";
import oggyfour from "/src/assets/oggyfour.jpeg";
import oggyfive from "/src/assets/oggyfive.jpeg";
import oggysix from "/src/assets/oggysix.jpeg";
import oggyseven from "/src/assets/oggyseven.jpeg";
import oggyeight from "/src/assets/oggyeight.jpeg";
import oggynine from "/src/assets/oggynine.jpeg";
import oggyten from "/src/assets/oggyten.jpeg";
import oggyelevan from "/src/assets/oggyelevan.jpeg";
import oggytwelve from "/src/assets/oggytwelve.jpeg";
import oggythirteen from "/src/assets/oggythirteen.jpeg";
import oggyfourteen from "/src/assets/oggyfourteen.jpeg";
import oggyfifteen from "/src/assets/oggyfifteen.jpeg";

import "./Allcompo.css"
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";


function Oggy() {
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
          <a href="https://www.youtube.com/watch?v=63O7X1BrH7E&t=45s">
            <div className="borderone">
              <div>
                <img src={oggyone} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  हिंदी Oggy and the Cockroaches 😆🧀 GRATED COCKROACHES 🧀😆 Hindi Cartoons for Kids
                </h5>
                <p className="card-text">

                  Oggy Hindi - हिन्दी <br />
                  12.4M subscribers •42M views
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=BstW5GDKVMU&t=9s">
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
          </a>

          <a href="https://www.youtube.com/watch?v=Rr_uBx9oceI&t=49s">
            <div className="borderone">
              <div>
                <img src={oggytwo} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  हिंदी Oggy and the Cockroaches 💞 भारत में ओगी 💞 Hindi Cartoons for Kids
                </h5>
                <p className="card-text">

                  Oggy Hindi - हिन्दी <br />
                  12.4M subscribers • 23M views
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=bOHusH0WnfY&t=158s">
            <div className="borderone">
              <div>
                <img src={oggythree} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  हिंदी Oggy and the Cockroaches 💥 चेतावनी विस्फोट Hindi Cartoons for Kids
                </h5>
                <p className="card-text">

                  Oggy Hindi - हिन्दी <br />
                  12.4M subscribers • 121K views
                </p>
              </div>
            </div>
          </a>
        </div>


        <div className="flexitem">
          <a href="https://www.youtube.com/watch?v=5hAJ_3EGBhQ">
            <div className="borderone">
              <div>
                <img src={oggyfour} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  हिंदी Oggy and the Cockroaches 🏆🤩 SPORT FANS 🤩🏆 Hindi Cartoons for Kids
                </h5>
                <p className="card-text">

                  Oggy Hindi - हिन्दी <br />
                  12.4M subscribers • 3M views
                </p>
              </div>
            </div></a>
          <a href="https://www.youtube.com/watch?v=66rknFPqZbs">
            <div className="borderone">
              <div>
                <img src={oggyfive} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches - THE GAMER (S04E32) CARTOON | New Episodes in HD
                </h5>
                <p className="card-text">
                  OGGY <br />
                  12.9M subscribers • 2M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=I4l_PPry8aY">
            <div className="borderone">
              <div>
                <img src={oggysix} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches 🤓 The tool box 🤓 - Full Episodes HD
                </h5>
                <p className="card-text">

                  Oggy & his friends <br />
                  3.58M subscribers • 24M views
                </p>
              </div>
            </div>

          </a>
          <a href="https://www.youtube.com/watch?v=WkiWnGwqreM">
            <div className="borderone">
              <div>
                <img src={oggyseven} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Top 10 Best episodes 2016 - Oggy and the Cockroaches
                </h5>
                <p className="card-text">

                  OGGY <br />
                  12.9M subscribers • 34M views
                </p>
              </div>
            </div>

          </a>
        </div>



        <div className="flexitem">
          <a href="https://www.youtube.com/watch?v=EQykp2BIIHI">
            <div className="borderone">
              <div>
                <img src={oggyeight} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches 🤓 TEENAGERS 🤓 Full Episodes in HD
                </h5>
                <p className="card-text">

                  OGGY <br />
                  12.9M subscribers • 116M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=xxKfsaM6qSI">

            <div className="borderone">
              <div>
                <img src={oggynine} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy und die Kakerlaken 🧀🥓🍗 Dee dee kompilation 🍗🥓🧀 Volledige aflevering in HD

                </h5>
                <p className="card-text">

                  Oggy und die Kakerlaken <br />
                  2.44M subscribers • 18M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=4auOwokj2qg">

            <div className="borderone">
              <div>
                <img src={oggyten} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches - The Magic Pen (S04E14) Full Episode in HD
                </h5>
                <p className="card-text">

                  OGGY <br />
                  12.9M subscribers • 175M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=_KYqjiqy9JI">
            <div className="borderone">
              <div>
                <img src={oggyelevan} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy và những chú gián tinh nghịch | THE GIANT người khổng lồ | S04E23 | phim hoạt hình
                </h5>
                <p className="card-text">
                  Oggy và những chú gián tinh nghịch <br />
                  635K subscribers • 28M views
                </p>
              </div>
            </div>
          </a>
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
                  <img src={one} className="shortimg" alt="..." />
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
                  <img src={one} className="shortimg" alt="..." />
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
                  <img src={one} className="shortimg" alt="..." />
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
                  <img src={one} className="shortimg" alt="..." />
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
                  <img src={one} className="shortimg" alt="..." />
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
          <a href="https://www.youtube.com/watch?v=LgtXO4AWk1M">
            <div className="borderone">
              <div>
                <img src={oggytwelve} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy und die Kakerlaken 🐟 Ein freundlicher Fisch 🐟 Volledige aflevering in HD
                </h5>
                <p className="card-text">

                  Oggy und die Kakerlaken <br />
                  2.44M subscribers • 5.8M views
                </p>
              </div>
            </div>
          </a>

          <a href="https://www.youtube.com/watch?v=S7KS4i0_KFE">
            <div className="borderone">
              <div>
                <img src={oggythirteen} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches - Oggy Goes Green! (S04E32) BEST CARTOON COLLECTION | New Episodes in HD
                </h5>
                <p className="card-text">

                  OGGY <br />
                  12.9M subscribers • 2.5M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=d5NuCQQJp34&t=48s">
            <div className="borderone">
              <div>
                <img src={oggyfourteen} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy und die Kakerlaken ⚽ Der beste Fußballplatz ⚽ Volledige aflevering in HD
                </h5>
                <p className="card-text">

                  Oggy und die Kakerlaken <br />
                  2.44M subscribers• 3.9M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=-7jAVwbqCUE">
            <div className="borderone">
              <div>
                <img src={oggyfifteen} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy and the Cockroaches - Sport Fans (S04E26) Full Episode in HD                </h5>
                <p className="card-text">

                  OGGY <br />
                  12.9M subscribers • 92M views
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flexitem">
          <a href="https://www.youtube.com/watch?v=_KYqjiqy9JI">
            <div className="borderone">
              <div>
                <img src={oggyelevan} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy và những chú gián tinh nghịch | THE GIANT người khổng lồ | S04E23 | phim hoạt hình
                </h5>
                <p className="card-text">
                  Oggy và những chú gián tinh nghịch <br />
                  635K subscribers • 28M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=_KYqjiqy9JI">
            <div className="borderone">
              <div>
                <img src={oggyelevan} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy và những chú gián tinh nghịch | THE GIANT người khổng lồ | S04E23 | phim hoạt hình
                </h5>
                <p className="card-text">
                  Oggy và những chú gián tinh nghịch <br />
                  635K subscribers • 28M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=_KYqjiqy9JI">
            <div className="borderone">
              <div>
                <img src={oggyelevan} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy và những chú gián tinh nghịch | THE GIANT người khổng lồ | S04E23 | phim hoạt hình
                </h5>
                <p className="card-text">
                  Oggy và những chú gián tinh nghịch <br />
                  635K subscribers • 28M views
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=_KYqjiqy9JI">
            <div className="borderone">
              <div>
                <img src={oggyelevan} className="oneimg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Oggy và những chú gián tinh nghịch | THE GIANT người khổng lồ | S04E23 | phim hoạt hình
                </h5>
                <p className="card-text">
                  Oggy và những chú gián tinh nghịch <br />
                  635K subscribers • 28M views
                </p>
              </div>
            </div>
          </a>
        </div>



      </div>
    </>
  );
}

export default Oggy
