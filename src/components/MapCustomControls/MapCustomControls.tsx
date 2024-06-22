import React from "react";
import { useMap } from "react-map-gl";
import {
  abuDhabi,
  policeJurisdiction,
  sectorInAlManhal,
} from "@src/constants/mapAreas";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { CViewState } from "@src/types/MapTypes";
import { getGeoData } from "@src/utils/getGeoData";

export default function MapCustomControls({
  isModalOpen,
  setSummaryId,
  toggleModal,
  summaryId,
}: {
  isModalOpen: boolean;
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
  summaryId: string;
}) {
  const { current: map } = useMap();
  const { title, area } = getGeoData(summaryId);

  const flyToDelay = React.useMemo(() => {
    return isModalOpen ? 500 : 0;
  }, [isModalOpen]);

  const nextArea = React.useMemo(() => {
    switch (summaryId) {
      case "abu-dhabi":
        return {
          id: "sector-in-al-manhal",
          area: sectorInAlManhal,
        };
      case "police-station":
        return {
          id: "abu-dhabi",
          area: abuDhabi,
        };
      default:
        return {
          id: "police-station",
          area: policeJurisdiction,
        };
    }
  }, [summaryId]);

  const prevArea = React.useMemo(() => {
    switch (summaryId) {
      case "sector-in-al-manhal":
        return { id: "abu-dhabi", area: abuDhabi };
      case "abu-dhabi":
        return {
          id: "police-station",
          area: policeJurisdiction,
        };
      default:
        return {
          id: "sector-in-al-manhal",
          area: sectorInAlManhal,
        };
    }
  }, [summaryId]);

  const flyTo = React.useCallback(
    (currentArea: CViewState) => {
      const { latitude, longitude, zoom } = currentArea;
      if (!map) return;
      if (!isModalOpen) {
        map.flyTo({
          center: [longitude, latitude],
          zoom,
          speed: 1.5,
        });
      } else {
        toggleModal(false);
        setTimeout(() => {
          map.flyTo({
            center: [longitude, latitude],
            zoom,
            speed: 1.5,
          });
        }, flyToDelay);
        setTimeout(() => {
          toggleModal(true);
        }, 2500);
      }
    },
    [toggleModal, flyToDelay, isModalOpen, map]
  );

  const handelNextAreaChange = React.useCallback(() => {
    setSummaryId(nextArea.id);
    flyTo(nextArea.area);
  }, [flyTo, nextArea.area, nextArea.id, setSummaryId]);

  const handelPreviousAreaChange = React.useCallback(() => {
    setSummaryId(prevArea.id);
    flyTo(prevArea.area);
  }, [flyTo, prevArea.area, prevArea.id, setSummaryId]);

  const goToCurrentArea = React.useCallback(() => {
    const { latitude, longitude, zoom } = area;
    if (!map) return;
    map.flyTo({ center: [longitude, latitude], zoom, speed: 1.5 });
  }, [area, map]);

  return (
    <div
      className="absolute right-0 top-0 z-10 pointer-events-none p-2 size-full grid grid-areas-mapControls grid-cols-mapControls grid-rows-mapControls gap-2 
        child:z-10 child:flex child:gap-2 child:p-2"
    >
      <div className="grid-in-left flex-col child:pointer-events-auto"></div>
      <div className="grid-in-right flex-col items-end child:pointer-events-auto"></div>
      <div className="grid-in-center child:pointer-events-auto justify-center" />
      <div className="grid-in-bottom flex-row justify-center child:pointer-events-auto"></div>
      <div className="grid-in-top flex-row justify-center child:pointer-events-auto">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 w-96 rounded-2xl h-20 shadow-md shadow-gray-400">
          <div className="flex items-center justify-between h-full">
            <button
              className="min-w-12 text-gray-700 hover:text-gray-800 disabled:text-gray-400 disabled:hover:font-normal transition-colors text-sm"
              onClick={() => handelPreviousAreaChange()}
            >
              <ArrowLeftCircle size={32} />
            </button>
            <div className="cursor-pointer" onClick={() => goToCurrentArea()}>
              <p className="text-gray-700 font-semibold text-lg">{title}</p>
            </div>
            <button
              className="min-w-12 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:hover:font-normal transition-colors text-sm"
              onClick={() => handelNextAreaChange()}
            >
              <ArrowRightCircle size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
