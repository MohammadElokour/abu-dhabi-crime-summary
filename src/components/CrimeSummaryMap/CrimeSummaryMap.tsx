import React from "react";
import Map from "@src/components/Map";
import MapCustomControls from "@src/components/MapCustomControls/";
import InfoModal from "@src/components/InfoModal";
import { AbuDhabiLayer, PoliceStationLayer, SectorInAlManhal } from "./Layers";

const CrimeSummaryMap = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false);
  const [summaryId, setSummaryId] = React.useState<string>("abu-dhabi");

  const handleChangeSummaryId = React.useCallback((summaryId: string) => {
    setSummaryId(summaryId);
  }, []);

  const handleToggleInfoModal = React.useCallback((isOpen = false) => {
    setIsInfoModalOpen(isOpen);
  }, []);

  return (
    <Map>
      <AbuDhabiLayer
        setSummaryId={handleChangeSummaryId}
        toggleModal={handleToggleInfoModal}
      />
      <PoliceStationLayer
        setSummaryId={handleChangeSummaryId}
        toggleModal={handleToggleInfoModal}
      />
      <SectorInAlManhal
        setSummaryId={handleChangeSummaryId}
        toggleModal={handleToggleInfoModal}
      />
      <MapCustomControls
        summaryId={summaryId}
        isModalOpen={isInfoModalOpen}
        setSummaryId={handleChangeSummaryId}
        toggleModal={handleToggleInfoModal}
      />
      <InfoModal
        summaryId={summaryId}
        isOpen={isInfoModalOpen}
        toggleModal={handleToggleInfoModal}
      />
    </Map>
  );
};

export default CrimeSummaryMap;
