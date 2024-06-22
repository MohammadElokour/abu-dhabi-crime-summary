import React from "react";
import Map from "@src/components/Map";
import MapCustomControls from "@src/components/MapCustomControls/";
import InfoModal from "@src/components/InfoModal";
import { AbuDhabiLayer, PoliceStationLayer, SectorInAlManhal } from "./Layers";
import MapTooltip from "../MapTooltip";

const CrimeSummaryMap = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false);
  const [toolTipState, setTooltipState] = React.useState({
    isOpen: false,
    id: "",
    position: { x: 0, y: 0 },
  });
  const [summaryId, setSummaryId] = React.useState<string>("abu-dhabi");
  const handleOpenTooltip = React.useCallback(
    (isOpen = false, id = "", position = { x: 0, y: 0 }) => {
      setTooltipState({
        isOpen,
        id,
        position,
      });
    },
    [setTooltipState]
  );

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
        openTooltip={handleOpenTooltip}
      />
      <PoliceStationLayer
        setSummaryId={handleChangeSummaryId}
        toggleModal={handleToggleInfoModal}
        openTooltip={handleOpenTooltip}
      />
      <SectorInAlManhal
        isModalOpen={isInfoModalOpen}
        openTooltip={handleOpenTooltip}
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
      <MapTooltip
        id={toolTipState.id}
        open={toolTipState.isOpen}
        position={toolTipState.position}
      />
    </Map>
  );
};

export default CrimeSummaryMap;
