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
import { useState, useRef } from "react";
import WeatherInfo from "../components/WeatherInfo";

const Home: React.FC = () => {
  const [city, updateCity] = useState<any>();
  const [weather, updateWeather] = useState();

  const cityInputRef = useRef<HTMLIonInputElement>(null);

  const enteredCity = cityInputRef.current!.value;

  updateCity(enteredCity);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
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
          {/* <IonDatetime readonly presentation="time"></IonDatetime> */}
          {/* <IonDatetime hour-cycle="h12" locale="en-GB"></IonDatetime> */}
          <IonImg
            slot="end"
            className="image"
            src="assets/images/logo.png"
            alt="Clouds Image"
          />
        </div>
        <IonCard className="search-card">
          <IonCardHeader>
            <IonLabel className="title">Find Weather of your city</IonLabel>
          </IonCardHeader>
          <IonCardContent>
            <div className="search-container">
              <IonInput
                className="main-input ion-no-padding"
                placeholder="Enter the City Name"
                clearInput
                ref={cityInputRef}
                ></IonInput>
              <IonButton 
                className="main-button" 
                shape="round" 
                color="night"
              >
                <IonIcon slot="start" icon={searchOutline} />
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
