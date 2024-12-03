import "./Main.css";
import { assets } from "../../assets";
import Card from "./component/Card";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <a target="_blank" href="https://www.facebook.com/mosaddik.billahh">
          <img src={assets.user_icon} alt="" />
        </a>
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <Card
            cls="card"
            para="Suggest beautiful places to see on an upcoming road trip"
            img={assets.compass_icon}
          />
          <Card cls="card" para="Briefly summarize this concept: urban planning" img={assets.bulb_icon} />
          <Card
            cls="card"
            para="Brainstorm team bonding activities for our work retreat"
            img={assets.message_icon}
          />
          <Card cls="card" para="Tell me about React js and React native" img={assets.code_icon} />
        </div>
        <div className="main_bottom">
          <div className="search_box">
            <input autoFocus type="text" placeholder="Enter a prompt here " />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              <img src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom_info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your
            privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
