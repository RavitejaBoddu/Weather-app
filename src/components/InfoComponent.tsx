import { IonCol, IonImg, IonLabel } from "@ionic/react";
import React from "react";
import "./InfoComponent.css";

 const WeatherInfoIcons:any = {
    sunset: "assets/images/temp.png",
    sunrise: "assets/images/temp.png",
    humidity: "assets/images/humidity.jpg",
    wind: "assets/images/windy.png",
    Pressure: "assets/images/pressure.png",
}

const InfoComponent: React.FC <{name:string; value:string}>= (props) => {
    const {name, value} = props;
  return (
    <IonCol className="weather-info-col">
      <IonImg
        className="weather-info-img"
        src={WeatherInfoIcons[name]}
        alt={name}
      />
      <div className="weather-info-label">
        <IonLabel>{value}</IonLabel>
        <IonLabel>{name}</IonLabel>
      </div>
    </IonCol>
  );
};

export default InfoComponent;
