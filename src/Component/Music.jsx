import React, { useState } from "react";
// import "./Allcompo.css"
import seven from "/src/assets/seven.jpeg";
import twelve from "/src/assets/twelve.jpeg";
import fourtien from "/src/assets/fourtien.jpeg";
import eighteen from "/src/assets/eighteen.jpeg";
import four from "/src/assets/four.jpeg";
import musicone from "/src/assets/musicone.jpeg";
import musictwo from "/src/assets/musictwo.jpeg";
import musicthree from "/src/assets/musicthree.jpeg";
import musicfour from "/src/assets/musicfour.jpeg";
import musicfive from "/src/assets/musicfive.jpeg";
import musicsix from "/src/assets/musicsix.jpeg";
import musicseven from "/src/assets/musicseven.jpeg";
import musiceight from "/src/assets/musiceight.jpeg";
import musicnine from "/src/assets/musicnine.jpeg";
import musicten from "/src/assets/musicten.jpeg";
import musicelevan from "/src/assets/musicelevan.jpeg";
import musictwelve from "/src/assets/musictwelve.jpeg";
import musicthirteen from "/src/assets/musicthirteen.jpeg";
import musicfourteen from "/src/assets/musicfourteen.jpeg";

import one from "/src/assets/one.jpeg";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdOutlineComment } from "react-icons/md";
import { FaShare } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

function Music() {
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




          <div className="borderone" >
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
        </div>

        <div className="flexitem">
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
          <div className="borderone">
            <div>
              <img src={musicone} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                KIRTIDAN GADHVI NO TAHUKAR Part 1 | Nonstop Full Audio | કિર્તીદાન ગઢવી નો ટહુકાર ભાગ ૧
              </h5>
              <p className="card-text">

                Studio Saraswati Official Channel <br />
                832K subscribers • 3.2M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musictwo} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Moments of Love Jukebox | AMEET Mashup | Arijit Singh Songs | Arijit Singh Jukebox | Best of 2024
              </h5>
              <p className="card-text">
                Lofi Anshu
                <br />
                8.27K subscribers • 5.3M views
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
              <img src={musicthree} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Mari Aankhe Ujagara - Gopal Bharwad - 4K Video - Latest Gujarati Song 2024
              </h5>
              <p className="card-text">

                Jigar Studio <br />
                4.23M subscribers
                • 233K views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicfour} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Tainu Khabar Nahi (From "Munjya")
              </h5>
              <p className="card-text">
                Sachin Jigar <br />
                603K subscribers • 12M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicfive} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Playlist to listen while captivated by Krishna’s beauty
              </h5>
              <p className="card-text">

                The Tanvi <br />
                21.7K subscribers • 4.1M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicsix} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Nagar Seth Nam Ni Dwarka Dham Ni - Geeta Rabari | Dwarkadish New Song | New Song 2023
              </h5>
              <p className="card-text">

                GeetaBen Rabari <br />
                2.15M subscribers • 2.3M views
              </p>
            </div>
          </div>
        </div>








        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={musicseven} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                PUNJABI SWAG 🔥 | Top Attitude Mashup 2024 | DEV's Expertise
              </h5>
              <p className="card-text">

                DEV's Expertise <br />
                95.5K subscribers • 1.1M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musiceight} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                NON STOP INSTAGRAM TRENDING LOVE MASHUP - Part 5 | PLAYLIST BY ‪@lofi2307‬ | #instatrendingsongs
              </h5>
              <p className="card-text">

                Lo-fi 2307 Official <br />
                696K subscribers • 878kM views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicnine} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Top 4 Shoorveer Song | Gym song |Shoorveer,Shoorveer3, Aarambh Hai prachand,Ghamand Kar.
              </h5>
              <p className="card-text">

                IGR music <br />
                11.7K subscribers• 3.2M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicten} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Peaky Blinders || Skyfall
              </h5>
              <p className="card-text">

                Scandy <br />
                5.22K subscribers • 957K views
              </p>
            </div>
          </div>
        </div>





        <div className="flexitem">
          <div className="borderone">
            <div>
              <img src={musicelevan} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India
              </h5>
              <p className="card-text">
                Netflix India <br />
                25.2M subscribers • 95M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musictwelve} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Ra Ra Ra Song Tanaji | Tanaji Unsung Warrior Song | Ghamand Kar Tanhaji
              </h5>
              <p className="card-text">

                Aj Editor <br />
                29.7K subscribers • 6.6M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicthirteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Kerosene (POV) - Assetto Corsa
              </h5>
              <p className="card-text">

                ENVIOUS <br />
                21.5K subscribers • 6.5M views
              </p>
            </div>
          </div>
          <div className="borderone">
            <div>
              <img src={musicfourteen} className="oneimg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Hai Katha Sangram Ki | Mahabharat | All Songs | Slowed and Reverbed | Use Headphones 🎧| Ritish Dhar
              </h5>
              <p className="card-text">

                ritishhh. <br />
                29.5K subscribers• 13M views
              </p>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default Music
