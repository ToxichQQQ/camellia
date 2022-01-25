import React, { useState } from "react";
import { VolumeLevel } from "./components/VolumeLevel/VolumeLevel";
import { SoundCoefficient } from "./components/SoundCoefficient/SoundCoefficient";
import { HeteroSoundCoefficient } from "./components/HeteroSoundCoefficient/HeteroSoundCoefficient";
import { NoiseLevel } from "./components/NoiseLevel/NoiseLevel";
import { SettlementPanel } from "./components/SettlementPanel/SettlementPanel";
import Dialog from "@mui/material/Dialog";

function App() {
  const [isShowHetero, setShowHetero] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [volumeLevelSettings, setVolumeLevelSettings] = useState([
    67.9, 66.9, 61.5, 57.0, 53.0, 48.5,
  ]);
  const [noiseLevelSettings, setNoiseLevelSettings] = useState([
    67.9, 66.9, 61.5, 57.0, 53.0, 48.5,
  ]);
  const [soundCoef, setSoundCoef] = useState(null);
  const [heteroCoef, setHeteroCoef] = useState(null);
  const [soundValue, setSoundValue] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ fontSize: 12, fontFamily: "Roboto" }}>
      <VolumeLevel
        volumeLevelSettings={volumeLevelSettings}
        setVolumeLevelSettings={setVolumeLevelSettings}
      />
      <SoundCoefficient
        isShowHetero={isShowHetero}
        setShowHetero={setShowHetero}
        setOpenModal={setOpenModal}
        soundValue={soundValue}
        setSoundValue={setSoundValue}
      />
      <NoiseLevel
        noiseLevel={noiseLevelSettings}
        setNoiseLevel={setNoiseLevelSettings}
      />
      <SettlementPanel />
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth={"100vw"}>
        <HeteroSoundCoefficient />
      </Dialog>
    </div>
  );
}

export default App;
