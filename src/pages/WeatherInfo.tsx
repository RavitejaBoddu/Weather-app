import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonContent,
  IonLabel,
  IonImg,
  IonCard,
  IonGrid,
  IonRow,
  IonButton,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { cloudyNightOutline, arrowBackCircleOutline } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router-dom";

import InfoComponent from "../components/InfoComponent";
import "./WeatherInfo.css";
const WeatherIcons: any = {
  "01d": "assets/images/sunny.svg",
  "01n": "assets/images/night.svg",
  "02d": "assets/images/day.svg",
  "02n": "assets/images/cloudy-night.svg",
  "03d": "assets/images/cloudy.svg",
  "03n": "assets/images/cloudy.svg",
  "04d": "assets/images/perfect-day.svg",
  "04n": "assets/images/cloudy-night.svg",
  "09d": "assets/images/rain.svg",
  "09n": "assets/images/rain-night.svg",
  "10d": "assets/images/rain.svg",
  "10n": "assets/images/rain-night.svg",
  "11d": "assets/images/storm.svg",
  "11n": "assets/images/storm.svg",
};

const WeatherInfo: React.FC<{ weather: any}> = (props) => {
  const isDay = props.weather.weather[0].icon.includes("d");
 
  const refreshPage = ()=>{
    window.location.reload();
 }

  const getTime = (timeStamp: any) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="night-blue">
          <IonButton  slot="end" fill="clear"
          onClick={refreshPage}
          >
          <IonIcon
            color="light"
            size="large"
            icon={arrowBackCircleOutline}
          />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="body2">
        <div className="img-container">
          <IonImg
            slot="end"
            className="image"
            src={WeatherIcons[props.weather.weather[0].icon]}
            alt="Clouds Image"
          />
        </div>
        <IonLabel className="temp-display">
          <span>{`${Math.floor(props.weather.main.temp - 273)}°C`}</span>|{" "}
          {props.weather.weather[0].description}
        </IonLabel>
        <IonCard className="weather-info">
          <IonLabel className="city">{`${props.weather.name}, ${props.weather.sys.country}`}</IonLabel>
          <IonLabel className="info">Weather Info</IonLabel>
          <IonGrid className="ion-no-padding">
            <IonRow className="weather-info-row">
              <InfoComponent
                name={isDay ? "sunset" : "sunrise"}
                value={getTime(props.weather.sys[isDay ? "sunset" : "sunrise"])}
              />
              <InfoComponent
                name="humidity"
                value={`${props.weather.main.humidity}%`}
              />
            </IonRow>
            <IonRow>
              <InfoComponent name="wind" value={`${props.weather.wind.speed} 
              m/s`} />
              <InfoComponent
                name="Pressure"
                value={`${props.weather.main.pressure} hPa`}
              />
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WeatherInfo;
