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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ fontSize: 12, fontFamily: "Roboto" }}>
      <VolumeLevel />
      <SoundCoefficient
        isShowHetero={isShowHetero}
        setShowHetero={setShowHetero}
        setOpenModal={setOpenModal}
      />
      <NoiseLevel />
      <SettlementPanel />
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth={"100vw"}>
        <HeteroSoundCoefficient />
      </Dialog>
    </div>
  );
}

export default App;
