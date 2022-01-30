import React, { useEffect, useState } from "react";
import { VolumeLevel } from "./components/VolumeLevel/VolumeLevel";
import { SoundCoefficient } from "./components/SoundCoefficient/SoundCoefficient";
import { HeteroSoundCoefficient } from "./components/HeteroSoundCoefficient/HeteroSoundCoefficient";
import { NoiseLevel } from "./components/NoiseLevel/NoiseLevel";
import { SettlementPanel } from "./components/SettlementPanel/SettlementPanel";
import Dialog from "@mui/material/Dialog";

function App() {
  const [isShowHetero, setShowHetero] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [voiceLevel, setVoiceLevel] = useState([]);

  const [volumeLevelSettings, setVolumeLevelSettings] = useState([
    67.9, 66.9, 61.5, 57.0, 53.0, 48.5,
  ]);
  const [noiseLevelSettings, setNoiseLevelSettings] = useState([
    67.9, 66.9, 61.5, 57.0, 53.0, 48.5,
  ]);
  const [soundCoef, setSoundCoef] = useState(null);
  const [heteroCoef, setHeteroCoef] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleGetNewValues = () => {
    let array = [null, null, null, null, null, null];
    let valuesArray = [null, null, null, null, null, null];
    const arrLength = volumeLevelSettings.length;
    for (let i = 0; i < arrLength; i++) {
      const newVal = Number(volumeLevelSettings[i]) + 6 - Number(soundCoef);
      array[i] = newVal;
    }
    for (let i = 0; i < arrLength; i++) {
      const value = Number(noiseLevelSettings[i]) - Number(array[i]);
      valuesArray[i] = value;
    }

    setVoiceLevel(valuesArray);
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
        soundValue={soundCoef}
        setSoundValue={setSoundCoef}
      />
      <NoiseLevel
        noiseLevel={noiseLevelSettings}
        setNoiseLevel={setNoiseLevelSettings}
      />
      <SettlementPanel
        voiceLevel={voiceLevel}
        handleGetNewValues={handleGetNewValues}
      />
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth={"100vw"}>
        <HeteroSoundCoefficient
          heteroCoef={heteroCoef}
          setHeteroCoef={setHeteroCoef}
        />
      </Dialog>
    </div>
  );
}

export default App;
