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
} from "@ionic/react";
import { cloudyNightOutline } from "ionicons/icons";
import React from "react";
import InfoComponent from "./InfoComponent";
import "./WeatherInfo.css";

const WeatherInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="sky">
          <IonIcon
            className="ion-margin-start"
            color="light"
            slot="start"
            size="large"
            icon={cloudyNightOutline}
          />
          <IonTitle className="main-title" color="light">
            Weather App
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="body">
        <div className="img-container">
          <IonImg
            slot="end"
            className="image"
            src="assets/images/perfect-day.svg"
            alt="Clouds Image"
          />
        </div>
        <IonLabel className="temp-display">
          <span>12 C</span>| Overcast Clouds
        </IonLabel>
        <IonCard className="weather-info">
          <IonLabel className="city">London, GB</IonLabel>
          <IonLabel className="info">Weather Info</IonLabel>
          <IonGrid className="ion-no-padding">
            <IonRow className="weather-info-row">
              <InfoComponent  name="sunrise" value="1:29"/>
              <InfoComponent  name="humidity" value="1:29"/>
            </IonRow>
            <IonRow>
              <InfoComponent  name="wind" value="1:29"/>
              <InfoComponent  name="Pressure" value="1:29"/>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WeatherInfo;
