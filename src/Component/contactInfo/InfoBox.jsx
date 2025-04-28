import "./InfoBox.css";
import mapImage from "../../assets/mapImage.jpg";

const InfoBox = () => {
  return (
    <div className="info-container">
      <div className="left-section">
        <div className="left-box">
          <h2 className="oppet">Öppettider</h2>
          <div className="date">
            <p>Vardagar: 17:00-23:00</p>
            <p>Fredag: 17:00-01:00</p>
            <p>Lördag: 12:00-01:00</p>
            <p>Söndag: 12:00-23:00</p>
          </div>
        </div>
        <div className="left-box2">
          <h2 className="besok">Besökadress</h2>
          <div className="address">
            <p>Storgatan 45</p>
            <p>41138 Göteborg</p>
          </div>
        </div>
      </div>

      <div className="right-box">
        <img src={mapImage} alt="map" className="map-img" />
      </div>
    </div>
  );
};

export default InfoBox;
