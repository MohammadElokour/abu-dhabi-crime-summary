import React from "react";
import { Layer, Source, useMap } from "react-map-gl";
import { policeStation } from "@src/constants/mapAreas";
import { getGeoData } from "@src/utils/getGeoData";
import { INITIAL_MAP_ZOOM } from "@src/constants/general";

const { zoom: defaultZoom, longitude, latitude } = policeStation;

const PoliceStationLayer = ({
  setSummaryId,
  toggleModal,
}: {
  setSummaryId: (summaryId: string) => void;
  toggleModal: (isOpen?: boolean) => void;
}) => {
  const { point } = getGeoData("police-station");
  const { current: map } = useMap();
  const [zoom, setZoom] = React.useState(INITIAL_MAP_ZOOM);

  React.useEffect(() => {
    if (!map) {
      return;
    }

    map.on("zoom", () => {
      setZoom(map.getZoom());
    });

    const handelImageClick = () => {
      setSummaryId("police-station");
      map.flyTo({
        center: [longitude, latitude],
        zoom: defaultZoom,
        speed: 1.5,
      });
      if (zoom === defaultZoom) {
        toggleModal(true);
      }
    };

    if (zoom === defaultZoom) {
      toggleModal(true);
    }

    map.on("click", "police-station-layer", handelImageClick);

    return () => {
      map.off("click", "police-station-layer", handelImageClick);
    };
  }, [map, setSummaryId, toggleModal, zoom]);

  return (
    <Source id="police-station" type="geojson" data={point}>
      <Layer
        id="police-station-layer"
        type="symbol"
        minzoom={7}
        layout={{
          "icon-image": "police-station",
          "icon-size": 0.1,
        }}
      />
    </Source>
  );
};

export default PoliceStationLayer;
