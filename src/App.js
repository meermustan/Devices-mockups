import "./styles.css";
import "./dist/devices.css";
import AppImageOne from "./business.png";

export default function App() {
  return (
    <div className="App">
      <div className="device-wrapper">
        <div className="device device-iphone-14">
          <div className="device-frame">
            <img
              className="device-screen"
              alt="mobile app"
              src={AppImageOne}
              loading="lazy"
            />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      </div>
    </div>
  );
}
