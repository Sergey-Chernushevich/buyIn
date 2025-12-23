// import { useState } from "react";

import styles from "./App.module.scss";
import BuyIn from "./components/BuyIn/BuyIn";
import { BuyInProvider } from "./context/BuyInProvider";

function App() {
  return (
    <div className={styles["app"]}>
      <BuyInProvider>
        <BuyIn />
      </BuyInProvider>
    </div>
  );
}

export default App;
