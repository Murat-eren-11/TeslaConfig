import { useState } from "react";
import BoutonUn from "./components/bouton1/bouton1";
import BoutonDeux from "./components/bouton2/bouton2";
import BoutonTrois from "./components/bouton3/bouton3";
import BoutonQuatre from "./components/bouton4/bouton4";
import "./App.css";

function App() {
  const [vehiculePrice, setVehiculePrice] = useState(0);
  const [colorPrice, setColorPrice] = useState(0);

  const handleVehiculeSelect = (price) => {
    setVehiculePrice(price);
  };

  const handleColorSelect = (price) => {
    setColorPrice(price);
  };

  const totalPrice = vehiculePrice + colorPrice;

  return (
    <>
      <main>
        <h1>Tesla config</h1>
        <h2>Sélectionnez votre véhicule</h2>
        <BoutonUn price={90700} onSelect={handleVehiculeSelect} />
        <BoutonDeux price={106700} onSelect={handleVehiculeSelect} />
        <h2>Sélectionnez la couleur</h2>
        <BoutonTrois price={0} onSelect={handleColorSelect} />
        <BoutonQuatre price={1000} onSelect={handleColorSelect} />
        <p>Total : {totalPrice}€</p>
        <button
          onClick={() => {
            alert("Thanks for buying");
          }}
        >
          Buy !
        </button>
      </main>
    </>
  );
}

export default App;
