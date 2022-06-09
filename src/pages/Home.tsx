import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { cloudyNightOutline, searchOutline } from "ionicons/icons";
import React from "react";


const Home: React.FC <{updateCity:any, fetchWeather:any}>= (props) => {  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="night-blue">
          <IonIcon
            className="ion-margin-start tool-img"
            slot="start"
            size="large"
            icon={cloudyNightOutline}
          />
          <IonTitle className="main-title">
            Weather App
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="body1">
        <div className="img-container">
          <IonImg
            slot="end"
            className="image"
            src="assets/images/logo.png"
            alt="Clouds Image"
          />
        </div>
        <IonCard className="search-card ion-text-center">
          <IonCardHeader>
            <IonLabel className="title">Find Weather of your city</IonLabel>
          </IonCardHeader>
          <IonCardContent>
            <div className="search-container">
              <IonInput
                className="main-input ion-no-padding "
                placeholder="Enter the City Name"
                clearInput
                onIonChange={e => props.updateCity(e.detail.value!)}
                ></IonInput>
              <IonButton 
                className="main-button ion-no-padding ion-no-margin" 
                shape="round" 
                color="night"
                onClick={props.fetchWeather}
              >
                <IonIcon className="ion-no-margin ion-no-padding" slot="start" icon={searchOutline} />
                Search
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
