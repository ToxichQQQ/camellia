import React, { useState } from "react";
import { VolumeLevel } from "./components/VolumeLevel/VolumeLevel";
import { SoundCoefficient } from "./components/SoundCoefficient/SoundCoefficient";
import { HeteroSoundCoefficient } from "./components/HeteroSoundCoefficient/HeteroSoundCoefficient";
import { NoiseLevel } from "./components/NoiseLevel/NoiseLevel";
import { SettlementPanel } from "./components/SettlementPanel/SettlementPanel";

function App() {
  const [isShowHetero, setShowHetero] = useState(false);

  return (
    <div style={{ fontSize: 12, fontFamily: "Roboto" }}>
      <VolumeLevel />
      <SoundCoefficient />
      <NoiseLevel />
      <SettlementPanel />
    </div>
  );
}

export default App;
