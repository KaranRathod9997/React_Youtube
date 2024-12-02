import React from 'react';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar__item">
          <i className="fa-solid fa-house sidebar__icon"></i>Home
        </li>
        <li className="sidebar__item">
          <i className="fa-brands fa-squarespace sidebar__icon"></i>Shorts
        </li>
        <li className="sidebar__item">
          <i className="fa-brands fa-square-youtube sidebar__icon"></i>Subscriptions
        </li>
      </ul>
      <hr className="sidebar__divider" />
      <ul>
        <li className="sidebar__title">You ...</li>
        <li className="sidebar__item">
          <i className="fa-solid fa-video sidebar__icon"></i>Your videos
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-clock-rotate-left sidebar__icon"></i>History
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-list-check sidebar__icon"></i>Playlist
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-clock sidebar__icon"></i>Watch later
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-thumbs-up sidebar__icon"></i>Liked videos
        </li>
      </ul>
      <hr className="sidebar__divider" />
      <ul>
        <li className="sidebar__title">Subscription</li>
        <li className="sidebar__item">ABP asmita</li>
        <li className="sidebar__item">ABP live</li>
        <li className="sidebar__item">CNBC awaaz</li>
        <li className="sidebar__item">Salangpur Hanumanji</li>
        <li className="sidebar__item">The treading fame</li>
        <li className="sidebar__item">Treading with angle</li>
        <li className="sidebar__item">Bhajan marg</li>
        <li className="sidebar__item">Code man</li>
      </ul>
      <hr className="sidebar__divider" />
      <ul>
        <li className="sidebar__title">Explore</li>
        <li className="sidebar__item">
          <i className="fa-solid fa-fire-flame-curved sidebar__icon"></i>Trending
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-bag-shopping sidebar__icon"></i>Shopping
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-music sidebar__icon"></i>Music
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-clapperboard sidebar__icon"></i>Movies
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-bullseye sidebar__icon"></i>Live
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-gamepad sidebar__icon"></i>Gaming
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-newspaper sidebar__icon"></i>News
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-trophy sidebar__icon"></i>Sports
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-lightbulb sidebar__icon"></i>Courses
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-glasses sidebar__icon"></i>Fashion & Beauty
        </li>
        <li className="sidebar__item">
          <i className="fa-solid fa-tower-broadcast sidebar__icon"></i>Podcasts
        </li>
      </ul>
      <hr className="sidebar__divider" />
      <ul>
        <li className="sidebar__title">More from YouTube</li>
        <li className="sidebar__item"><i class="fa-brands fa-square-youtube sidebar__icon"></i>YouTube Premium</li>
        <li className="sidebar__item"><i class="fa-solid fa-microphone-lines sidebar__icon"></i>YouTube Studio</li>
        <li className="sidebar__item"><i class="fa-solid fa-headphones sidebar__icon"></i>YouTube Music</li>
        <li className="sidebar__item"><i class="fa-solid fa-truck-monster sidebar__icon"></i>YouTube Kids</li>
      </ul>
      <hr className="sidebar__divider" />
      <ul>
        <li className="sidebar__item">
          <i className="fa-solid fa-gear sidebar__icon"></i>Settings
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-flag sidebar__icon"></i>Report history
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-circle-question sidebar__icon"></i>Help
        </li>
        <li className="sidebar__item">
          <i className="fa-regular fa-comment sidebar__icon"></i>Send feedback
        </li>
      </ul>
      <hr className="sidebar__divider" />
      <p className="sidebar__footer">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi
        accusamus totam iste hic optio iusto neque id perspiciatis cupiditate
        asperiores deserunt!
      </p>
    </div>
  );
};

export default Sidebar;

