import React, { useState } from "react";
// import "./Allcompo.css"
import one from "/src/assets/one.jpeg";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

function Live() {
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

export default Live
