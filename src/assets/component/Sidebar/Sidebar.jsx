import "./Sidebar.css";
import { assets } from "../../assets";
import { useState } from "react";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new_chat">
          <img src={assets.plus_icon} alt="new_chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent_entry">
              <img src={assets.message_icon} alt="message icon" />
              <p>What is react?</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent_entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.history_icon} alt="question_icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.setting_icon} alt="question_icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
